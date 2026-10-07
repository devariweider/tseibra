/**
 * Cliente HTTP da API.
 * - Usa `credentials: 'include'` para enviar o cookie de sessão httpOnly.
 * - Normaliza erros em `ApiError` para exibição uniforme na UI.
 */

const BASE_URL = import.meta.env.VITE_API_URL ?? '';

export interface ApiErrorDetail {
  campo: string;
  mensagem: string;
}

export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details: ApiErrorDetail[];

  constructor(status: number, code: string, message: string, details: ApiErrorDetail[] = []) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }

  /** Mensagem pronta para o usuário, incluindo erros de validação por campo. */
  get userMessage(): string {
    if (this.details.length === 0) return this.message;
    const campos = this.details.map((detail) => `${detail.campo}: ${detail.mensagem}`);
    return `${this.message} ${campos.join(' · ')}`;
  }
}

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: unknown;
  signal?: AbortSignal;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, signal } = options;

  let response: Response;
  try {
    response = await fetch(`${BASE_URL}${path}`, {
      method,
      credentials: 'include',
      headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') throw error;
    throw new ApiError(0, 'network_error', 'Não foi possível conectar ao servidor. Verifique se a API está em execução.');
  }

  if (response.status === 204) return undefined as T;

  const contentType = response.headers.get('content-type') ?? '';
  const payload: unknown = contentType.includes('application/json') ? await response.json() : null;

  if (!response.ok) {
    const errorPayload = payload as { error?: { code?: string; message?: string; details?: ApiErrorDetail[] } } | null;
    throw new ApiError(
      response.status,
      errorPayload?.error?.code ?? 'unknown',
      errorPayload?.error?.message ?? `Falha na requisição (HTTP ${response.status}).`,
      errorPayload?.error?.details ?? [],
    );
  }

  return payload as T;
}

export const api = {
  get: <T>(path: string, signal?: AbortSignal) => request<T>(path, { method: 'GET', signal }),
  post: <T>(path: string, body?: unknown) => request<T>(path, { method: 'POST', body }),
  patch: <T>(path: string, body?: unknown) => request<T>(path, { method: 'PATCH', body }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};
export class HttpError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details: unknown;

  constructor(status: number, code: string, message: string, details?: unknown) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.code = code;
    this.details = details;
  }

  static badRequest(message: string, details?: unknown): HttpError {
    return new HttpError(400, 'bad_request', message, details);
  }

  static unauthorized(message = 'Autenticação necessária.'): HttpError {
    return new HttpError(401, 'unauthorized', message);
  }

  static forbidden(message = 'Você não tem permissão para esta ação.'): HttpError {
    return new HttpError(403, 'forbidden', message);
  }

  static notFound(message = 'Recurso não encontrado.'): HttpError {
    return new HttpError(404, 'not_found', message);
  }

  static conflict(message: string): HttpError {
    return new HttpError(409, 'conflict', message);
  }

  static tooManyRequests(message: string, retryAfterSeconds: number): HttpError {
    return new HttpError(429, 'too_many_requests', message, { retryAfterSeconds });
  }

  static internal(message = 'Erro interno do servidor.'): HttpError {
    return new HttpError(500, 'internal_error', message);
  }
}
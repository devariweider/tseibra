import type { CourseModule } from './types.js';

export const modulo5: CourseModule = {
  id: 'mod-5',
  slug: 'administracao-parte-2',
  title: 'Módulo 5 — Administração do SEI (Parte II)',
  subtitle: 'Configuração, assinatura e publicação de documentos no SEI',
  description:
    'Segunda parte do curso de administração do SEI. Este módulo apresenta as funcionalidades de configuração do item Administração do SEI: Assinaturas das Unidades, assinatura digital de documentos, Extensões de Arquivos Permitidas, Histórico, Ponto de Controle, Sistemas, Monitoramento de Serviços e Veículos de Publicação, incluindo cadastro, alteração, consulta, desativação, reativação e exclusão, além do agendamento, cancelamento e republicação de publicações.',
  sourceRef:
    'Módulo 5 - Administração do SEI - Parte II.pdf (Enap, curso SEI! Administrar, 2019)',
  estimatedMinutes: 300,
  objectives: [
    'Configurar os cargos e funções disponíveis para assinatura em cada unidade do órgão ou entidade',
    'Controlar as extensões de arquivo permitidas para upload de documentos externos',
    'Parametrizar o histórico completo e o histórico resumido de processos',
    'Criar e gerenciar pontos de controle e acompanhar suaSituação por meio de filtros e gráficos',
    'Cadastrar sistemas externos, associar serviços e operações e monitorar seu uso',
    'Cadastrar veículos de publicação e conductingar agendamento, cancelamento e republicação',
  ],
  lessons: [
    {
      id: 'm5-assinaturas-unidades',
      slug: 'm5-assinaturas-unidades',
      title: 'Assinaturas das Unidades',
      estimatedMinutes: 40,
      objectives: [
        'Explicar a finalidade da funcionalidade “Assinaturas das Unidades”',
        'Cadastrar uma nova assinatura de unidade e vinculá-la a várias unidades',
        'Alterar e excluir assinaturas de unidade, inclusive em lote',
        'Reconhecer que a configuração vale para a unidade, e não para o usuário',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A funcionalidade “Assinaturas das Unidades” permite configurar os cargos que ficarão disponíveis para seleção do usuário no momento da assinatura de algum documento. Ressalta-se que essa configuração é realizada para cada unidade do órgão ou da entidade.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Atenção',
          text: 'Um cargo ou uma função não são disponibilizados para um usuário específico, mas sim para a unidade do órgão ou da entidade.',
        },
        {
          kind: 'paragraph',
          text: 'Ao clicar na opção “Assinaturas das Unidades” é apresentada uma tela que permite restringir as assinaturas exibidas por meio dos filtros “Unidades” e “Cargo/Função”. Por exemplo, é possível descobrir assinaturas de unidade teste, digitando “Teste” no campo “Unidade” a fim de restringir o resultado da pesquisa.',
        },
        {
          kind: 'paragraph',
          text: 'Essa funcionalidade possibilita que o usuário assine algum documento de acordo com o papel desempenhado naquele momento. Por exemplo: para assinar um documento relacionado à materialização de fiscalização, um analista do Poder Executivo responsável pela fiscalização de contratos deve utilizar a função “Fiscal de Contrato”. Ressalta-se que cada órgão ou entidade tem o próprio processo de assinatura, trata-se de um exemplo e não de um padrão.',
        },
        {
          kind: 'steps',
          heading: 'Inclusão de assinatura',
          items: [
            'Acesse a funcionalidade “Assinaturas das Unidades” no item “Administração”.',
            'Clique no botão “Adicionar”, localizado no canto superior da tela.',
            'Preencha a tela “Nova Assinatura de Unidade”.',
            'Informe o conteúdo do campo “Cargo/Função”, de livre preenchimento.',
            'Selecione as unidades que disponibiliza esse cargo ou função e clique em “Transportar”.',
            'Salve a operação.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Cargo/Função é de livre preenchimento',
          text: 'O campo “Cargo/Função” é de livre preenchimento e não tem nenhuma relação com os cargos preenchidos em “Contatos”.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Remover unidades adicionadas',
          text: 'O botão “Remover Unidades Selecionadas”, apresentado como o ícone “X”, é usado para remover alguma unidade adicionada. Ao clicar em “Transportar”, o usuário retorna para a tela inicial e as unidades selecionadas aparecem no campo “Unidades”.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Assinatura sem unidade',
          text: 'É possível cadastrar uma assinatura sem escolher uma unidade. Contudo, essa nova assinatura não será apresentada ao usuário como opção no momento da assinatura.',
        },
        {
          kind: 'table',
          heading: 'Alteração e exclusão de assinaturas',
          columns: ['Ação', 'Como executar'],
          rows: [
            [
              'Alteração de assinatura',
              'Clique em “Alterar Assinatura”. É permitido alterar o nome do cargo ou função, adicionar novas unidades e excluir alguma unidade anteriormente adicionada.',
            ],
            [
              'Exclusão de uma assinatura',
              'Clique no botão “Excluir Assinatura” da assinatura desejada.',
            ],
            [
              'Exclusão de várias assinaturas',
              'Selecione as assinaturas e use o botão “Excluir”, localizado no canto superior direito da tela.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Exclusão de assinatura já utilizada',
          text: 'A exclusão remove a configuração de assinatura da unidade. Verifique se o cargo ou função já foi usado em documentos assinados da unidade antes de excluir: registros já assinados dependem da configuração existente e a remoção compromete a leitura do histórico de assinaturas da unidade.',
        },
        {
          kind: 'paragraph',
          text: 'Após a manutenção das assinaturas das unidades, o próximo passo é compreender como a assinatura é efetivamente realizada pelo usuário, tema da aula seguinte.',
        },
      ],
      keyPoints: [
        'A configuração de assinaturas é feita por unidade do órgão ou entidade, não por usuário.',
        'O campo “Cargo/Função” é de livre preenchimento e não se relaciona com “Contatos”.',
        'Uma mesma assinatura pode ser disponibilizada para várias unidades.',
        'Assinatura cadastrada sem unidade não aparece como opção na hora de assinar.',
        'É possível alterar nome do cargo/função e a relação de unidades.',
        'A exclusão pode ser feita uma a uma ou em lote pelo botão “Excluir”.',
      ],
      quiz: [
        {
          id: 'm5-au-q1',
          prompt: 'A quem se destina a configuração de cargos e funções na funcionalidade “Assinaturas das Unidades”?',
          options: [
            'A cada usuário específico do órgão',
            'A cada unidade do órgão ou da entidade',
            'Apenas ao administrador do sistema',
            'Aos contatos cadastrados no SEI',
          ],
          correctIndex: 1,
          explanation:
            'O material é enfático: um cargo ou função não são disponibilizados para um usuário específico, mas sim para a unidade do órgão ou da entidade.',
        },
        {
          id: 'm5-au-q2',
          prompt: 'Qual a relação do campo “Cargo/Função” da tela “Nova Assinatura de Unidade” com os cargos preenchidos em “Contatos”?',
          options: [
            'É preenchido automaticamente a partir de “Contatos”',
            'Valida o cargo contra o cadastro de “Contatos”',
            'É de livre preenchimento e não tem relação com “Contatos”',
            'Só aceita cargos cadastrados previamente',
          ],
          correctIndex: 2,
          explanation:
            'O texto afirma que o campo “Cargo/Função” é de livre preenchimento e não tem nenhuma relação com os cargos preenchidos em “Contatos”.',
        },
        {
          id: 'm5-au-q3',
          prompt: 'O que acontece ao cadastrar uma assinatura de unidade sem selecionar nenhuma unidade?',
          options: [
            'O sistema impede o salvamento',
            'A assinatura será apresentada ao usuário no momento da assinatura',
            'A assinatura não será apresentada ao usuário como opção no momento da assinatura',
            'A assinatura será aplicada automaticamente à unidade do administrador',
          ],
          correctIndex: 2,
          explanation:
            'É possível cadastrar uma assinatura sem escolher uma unidade, mas ela não será apresentada ao usuário como opção no momento da assinatura.',
        },
        {
          id: 'm5-au-q4',
          prompt: 'Como remover uma unidade que foi adicionada por engano à assinatura?',
          options: [
            'Pela ação “Excluir Assinatura”',
            'Pelo botão “Remover Unidades Selecionadas”, apresentado como o ícone “X”',
            'Pela ação “Alterar Assinatura” e exclusão de toda a linha da tabela',
            'Reiniciando o navegador',
          ],
          correctIndex: 1,
          explanation:
            'O botão “Remover Unidades Selecionadas”, apresentado como o ícone “X”, é usado para remover alguma unidade adicionada.',
        },
        {
          id: 'm5-au-q5',
          prompt: 'Verdadeiro ou falso: para alterar o nome do cargo/função e a lista de unidades, o administrador deve clicar em “Alterar Assinatura”.',
          options: ['Verdadeiro', 'Falso'],
          correctIndex: 0,
          explanation:
            'A alteração é feita por “Alterar Assinatura” e permite alterar o nome do cargo ou função, adicionar novas unidades e excluir unidades anteriormente adicionadas.',
        },
        {
          id: 'm5-au-q6',
          prompt: 'Qual é o exemplo de uso de cargo ou função apresentado no material?',
          options: [
            'Um analista responsável pela fiscalização de contratos assinar documento de materialização de fiscalização usando a função “Fiscal de Contrato”',
            'O diretor assinar usando o cargo “Diretor de Departamento”',
            'O servidor público assinar usando o cargo “Servidor Público”',
            'O administrador assinar usando o cargo “Administrador do SEI”',
          ],
          correctIndex: 0,
          explanation:
            'O exemplo cita o analista do Poder Executivo responsável pela fiscalização de contratos, que deve utilizar a função “Fiscal de Contrato”, lembrando que cada órgão tem o próprio processo de assinatura.',
        },
      ],
    },
    {
      id: 'm5-assinatura-eletronica',
      slug: 'm5-assinatura-eletronica',
      title: 'Assinatura digital de documentos',
      estimatedMinutes: 25,
      objectives: [
        'Descrever como a assinatura de documento é disparada no processo',
        'Identificar a origem dos cargos e funções recuperados no campo “Cargo/Função”',
        'Aplicar senha de acesso ou certificado digital para assinar',
        'Diferenciar documentos internos e externos quanto à habilitação para assinatura',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Após ser criado e editado, o documento está disponível para ser assinado por usuários da unidade responsável pela sua geração.',
        },
        {
          kind: 'bullets',
          heading: 'Regras da assinatura',
          items: [
            'A assinatura é realizada por meio da funcionalidade “Assinar Documento”.',
            '“Assinar Documento” está localizada no menu superior do processo.',
            'A funcionalidade está disponível apenas para documentos internos.',
            'Documentos externos não são habilitados para assinatura.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Os cargos e funções configurados em “Assinaturas das Unidades” são recuperados no campo “Cargo/Função”. Lembre-se que os cargos e funções disponíveis estão relacionados à unidade e não ao usuário logado no sistema.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Atenção na hora de assinar',
          text: 'O usuário necessita de muita atenção no momento da assinatura para não assinar o documento com um cargo ou uma função errados.',
        },
        {
          kind: 'steps',
          heading: 'Como assinar',
          items: [
            'Localize o documento e acesse “Assinar Documento” no menu superior do processo.',
            'Selecione o cargo ou a função no campo “Cargo/Função”, recuperados das assinaturas configuradas para a unidade.',
            'Informe a senha de acesso ou utilize um certificado digital para efetuar a assinatura.',
            'Confirme a assinatura.',
          ],
        },
        {
          kind: 'table',
          heading: 'Documento interno x documento externo',
          columns: ['Aspecto', 'Documento interno', 'Documento externo'],
          rows: [
            [
              'Origem',
              'Criado no próprio SEI, a partir dos modelos de documentos estabelecidos pelo administrador',
              'Incluído no SEI por upload de arquivo na máquina do usuário',
            ],
            ['Extensão', 'Sempre html', 'Pode ser de diferentes extensões'],
            ['Assinatura', 'Disponível por “Assinar Documento”', 'Não é habilitado para assinatura'],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Como os cargos e funções vêm da configuração da unidade, o administrador deve manter “Assinaturas das Unidades” sempre atualizada para que o usuário encontre o papel correto no campo “Cargo/Função”.',
        },
      ],
      keyPoints: [
        'A assinatura ocorre por “Assinar Documento”, no menu superior do processo.',
        'Apenas documentos internos são habilitados para assinatura.',
        'Os cargos e funções vêm de “Assinaturas das Unidades”, vinculados à unidade.',
        'A assinatura pode ser feita com senha de acesso ou certificado digital.',
        'Documentos externos são incluídos por upload e não são assináveis.',
      ],
      quiz: [
        {
          id: 'm5-ae-q1',
          prompt: 'Qual funcionalidade é utilizada para assinar um documento?',
          options: [
            '“Contas”',
            '“Assinar Documento”',
            '“Incluir Documento”',
            '“Assinaturas das Unidades”',
          ],
          correctIndex: 1,
          explanation:
            'O material indica que a assinatura é realizada por meio da funcionalidade “Assinar Documento”, localizada no menu superior do processo.',
        },
        {
          id: 'm5-ae-q2',
          prompt: 'Documentos externos podem ser assinados no SEI?',
          options: [
            'Sim, desde que contenham assinatura digital',
            'Sim, se estiverem na unidade responsável',
            'Não, a funcionalidade está disponível apenas para documentos internos',
            'Sim, mas somente pelo administrador',
          ],
          correctIndex: 2,
          explanation:
            'A tela de assinatura “está disponível apenas para documentos internos. Documentos externos não são habilitados para assinatura”.',
        },
        {
          id: 'm5-ae-q3',
          prompt: 'De onde vêm os cargos e funções apresentados no campo “Cargo/Função” da tela de assinatura?',
          options: [
            'Do cadastro de “Contatos” da unidade',
            'Da configuração “Assinaturas das Unidades”',
            'Do organograma do órgão',
            'Da lista de cargos da própria tela de assinatura',
          ],
          correctIndex: 1,
          explanation:
            'Os cargos e funções configurados em “Assinaturas das Unidades” são recuperados no campo “Cargo/Função”, relacionados à unidade e não ao usuário logado.',
        },
        {
          id: 'm5-ae-q4',
          prompt: 'Quais meios podem ser utilizados para efetuar a assinatura?',
          options: [
            'Somente certificado digital',
            'Somente senha de acesso',
            'Senha de acesso ou certificado digital',
            'Senha de acesso, certificado digital ou biometria',
          ],
          correctIndex: 2,
          explanation:
            'Após selecionar o cargo ou função, o usuário deve informar a senha de acesso ou utilizar um certificado digital para efetuar a assinatura.',
        },
        {
          id: 'm5-ae-q5',
          prompt: 'Qual é a extensão dos documentos internos criados no SEI a partir dos modelos do administrador?',
          options: ['odt', 'pdf', 'html', 'doc'],
          correctIndex: 2,
          explanation:
            'O documento interno é construído no editor nativo a partir dos modelos estabelecidos pelo administrador e sua extensão é sempre html.',
        },
      ],
    },
    {
      id: 'm5-extensoes-arquivos',
      slug: 'm5-extensoes-arquivos',
      title: 'Extensões de Arquivos Permitidas',
      estimatedMinutes: 45,
      objectives: [
        'Distinguir documento interno de documento externo e suas extensões',
        'Cadastrar, alterar, excluir, desativar e reativar extensões de arquivos',
        'Preencher corretamente os campos “Extensão”, “Descrição” e “Tamanho”',
        'Aplicar a regra de differentiate maiúsculas de minúsculas nas extensões',
      ],
      blocks: [
        {
          kind: 'definitions',
          heading: 'Tipos de documentos no SEI',
          items: [
            {
              term: 'Documento interno',
              text: 'Criado no próprio SEI, construído no editor nativo a partir dos modelos de documentos estabelecidos pelo administrador; a extensão é sempre html.',
            },
            {
              term: 'Documento externo',
              text: 'Incluído no SEI por meio de upload de um arquivo na máquina do usuário, podendo ser de diferentes extensões.',
            },
            {
              term: 'Extensões de Arquivos Permitidas',
              text: 'Funcionalidade que permite ao administrador configurar o domínio de extensões aceitas para upload de documentos externos.',
            },
          ],
        },
        {
          kind: 'steps',
          heading: 'Inclusão de nova extensão',
          items: [
            'Acesse a funcionalidade “Extensões de Arquivos Permitidas”.',
            'Clique no botão de inclusão de nova extensão.',
            'Preencha o campo “Extensão” exatamente com o nome da extensão na qual se deseja permitir o upload.',
            'Preencha, se desejar, os campos “Descrição” e “Tamanho”, ambos de preenchimento opcional.',
            'Salve a operação.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos de cadastro da extensão',
          columns: ['Campo', 'Preenchimento', 'Observação'],
          rows: [
            [
              'Extensão',
              'Obrigatório',
              'Deve ser preenchida exatamente com o nome da extensão que deseja permitir no upload.',
            ],
            [
              'Descrição',
              'Opcional',
              'Campo auxiliar de identificação da extensão.',
            ],
            [
              'Tamanho',
              'Opcional',
              'Se não for preenchido, o tamanho limite para upload de arquivo dessa extensão é o mesmo estabelecido no parâmetro “SEI_TAM_MB_DOC_EXTERNO”.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'O sistema é case sensitive',
          text: 'O sistema não considera, por exemplo, PDF e pdf como a mesma extensão de arquivo. Assim, ele diferencia letras maiúsculas e minúsculas.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Parâmetro de tamanho padrão',
          text: 'Se o campo “Tamanho” não for preenchido, o tamanho limite para upload de um arquivo dessa extensão é o mesmo estabelecido no parâmetro “SEI_TAM_MB_DOC_EXTERNO”.',
        },
        {
          kind: 'steps',
          heading: 'Alteração da extensão de arquivos',
          items: [
            'Selecione a extensão de arquivo que será alterada.',
            'Clique na opção “Alterar Extensão do Arquivo”.',
            'Altere os campos “Extensão”, “Descrição” e “Tamanho Máximo”, agora habilitados.',
            'Salve a operação.',
          ],
        },
        {
          kind: 'table',
          heading: 'Exclusão, desativação e reativação',
          columns: ['Operação', 'Como executar', 'Efeito'],
          rows: [
            [
              'Exclusão',
              'Botão “Excluir Extensão do Arquivo” para uma extensão; botão “Excluir” no canto superior direito para várias.',
              'Remove o registro da extensão.',
            ],
            [
              'Desativação',
              'Botão “Desativar”, também disponível para várias extensões simultaneamente.',
              'A extensão ainda é encontrada na pesquisa do sistema, mas o usuário não consegue efetivar o upload de arquivo com essa extensão.',
            ],
            [
              'Reativação',
              'Botão “Reativar Extensão de Arquivo” para uma; marcar as checkboxes e clicar em “Reativar” para várias.',
              'A extensão volta a permitir o upload.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Desativação não é exclusão',
          text: 'Após a desativação de determinado tipo de extensão, o usuário não conseguirá efetivar o upload de arquivo com essa extensão. Antes de desativar uma extensão, verifique se ainda há processos em que ela seja necessária: a desativação de extensão ainda em uso inviabiliza a juntada de novos documentos.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Reativação em lote',
          text: 'Para reativar várias extensões simultaneamente, selecione na lista as extensões clicando na checkbox e, em seguida, no botão “Reativar”, localizado no canto direito superior da tela.',
        },
      ],
      keyPoints: [
        'Documento interno é criado no editor nativo e sempre tem extensão html.',
        'Documento externo entra por upload e pode ter diferentes extensões.',
        '“Extensão” deve ser digitada exatamente como o nome da extensão.',
        '“Descrição” e “Tamanho” são de preenchimento opcional.',
        'O sistema diferencia maiúsculas de minúsculas (PDF e pdf são extensões distintas).',
        'Extensão desativada continua na pesquisa, mas bloqueia o upload.',
      ],
      quiz: [
        {
          id: 'm5-ea-q1',
          prompt: 'Qual funcionalidade permite ao administrador configurar o domínio de extensões aceitas para upload de documentos externos?',
          options: [
            '“Extensões de Arquivos Permitidas”',
            '“Tipos de Documento”',
            '“Modelos de Documento”',
            '“Ferramentas de Arquivo”',
          ],
          correctIndex: 0,
          explanation:
            'O documento externo, incluído por upload, tem seu domínio de extensões configurado pelo administrador por meio da funcionalidade “Extensões de Arquivos Permitidas”.',
        },
        {
          id: 'm5-ea-q2',
          prompt: 'Quais campos do cadastro de nova extensão são de preenchimento obrigatório?',
          options: [
            '“Extensão”, “Descrição” e “Tamanho”',
            'Apenas “Descrição”',
            'Apenas “Extensão”',
            'Nenhum campo é obrigatório',
          ],
          correctIndex: 2,
          explanation:
            'O campo “Extensão” deve ser preenchido exatamente com o nome da extensão desejada, enquanto “Descrição” e “Tamanho” são de preenchimento opcional.',
        },
        {
          id: 'm5-ea-q3',
          prompt: 'O que ocorre ao cadastrar as extensões “PDF” e “pdf” separadamente?',
          options: [
            'O sistema considera as duas como a mesma extensão',
            'O sistema diferencia as duas, pois é case sensitive',
            'O sistema recusa o cadastro da segunda',
            'O sistema exibe apenas a primeira ocorrência',
          ],
          correctIndex: 1,
          explanation:
            'O sistema diferencia letras maiúsculas e minúsculas: PDF e pdf não são tratados como a mesma extensão de arquivo.',
        },
        {
          id: 'm5-ea-q4',
          prompt: 'Qual a diferença entre desativar e excluir uma extensão de arquivo?',
          options: [
            'Não há diferença: as duas ações removem o registro',
            'A desativação mantém a extensão visível na pesquisa, mas impede o upload',
            'A exclusão impede o upload, mas a desativação remove o cadastro',
            'A desativação só altera a descrição da extensão',
          ],
          correctIndex: 1,
          explanation:
            'Após a desativação, a extensão ainda é encontrada na pesquisa do sistema, mas o usuário não consegue efetivar o upload de arquivo com essa extensão.',
        },
        {
          id: 'm5-ea-q5',
          prompt: 'Se o campo “Tamanho” não for preenchimento no cadastro da extensão, qual é o tamanho limite aplicado no upload?',
          options: [
            'Um limite fixo de 10 MB definido pelo SEI',
            'O tamanho do documento mais recente da unidade',
            'O mesmo estabelecido no parâmetro “SEI_TAM_MB_DOC_EXTERNO”',
            'Não existe limite de tamanho para a extensão',
          ],
          correctIndex: 2,
          explanation:
            'Se o campo “Tamanho” não for preenchido, o tamanho limite para upload de um arquivo dessa extensão é o mesmo estabelecido no parâmetro “SEI_TAM_MB_DOC_EXTERNO”.',
        },
        {
          id: 'm5-ea-q6',
          prompt: 'Como reativar várias extensões desativadas de uma só vez?',
          options: [
            'Pela ação “Alterar Extensão do Arquivo”',
            'Selecionando as extensões na checkbox e clicando no botão “Reativar”',
            'Pela ação “Excluir Extensão do Arquivo”',
            'Pela ação “Consultar” e depois “Salvar”',
          ],
          correctIndex: 1,
          explanation:
            'O sistema permite a reativação de várias extensões simultaneamente: selecione as extensões clicando na checkbox e clique no botão “Reativar”, no canto direito superior da tela.',
        },
      ],
    },
    {
      id: 'm5-historico',
      slug: 'm5-historico',
      title: 'Histórico',
      estimatedMinutes: 30,
      objectives: [
        'Definir o que é o histórico de um processo no SEI',
        'Diferenciar histórico completo e histórico resumido',
        'Selecionar quais operações serão exibidas em cada tipo de histórico',
        'Consultar o histórico do processo por “Consultar Andamento” e “Ver histórico total”',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O histórico é o conjunto de operações realizadas em um processo durante os trâmites por meio do SEI.',
        },
        {
          kind: 'bullets',
          heading: 'Exemplos de operações registradas no histórico',
          items: [
            'Concessão de credencial de acesso (processo sigiloso).',
            'Exclusão de documento.',
            'Relacionamento entre processos.',
          ],
        },
        {
          kind: 'definitions',
          heading: 'Tipos de histórico',
          items: [
            {
              term: 'Histórico completo',
              text: 'Configuração de exibição de um conjunto mais amplo de operações do processo.',
            },
            {
              term: 'Histórico resumido',
              text: 'Configuração de exibição de um conjunto reduzido de operações do processo.',
            },
            {
              term: 'Histórico total',
              text: 'Exibição completa das operações, acessível por “Ver histórico total”. Não é parametrizável.',
            },
          ],
        },
        {
          kind: 'steps',
          heading: 'Configuração do histórico',
          items: [
            'Acesse a funcionalidade de configuração do Histórico no item “Administração”.',
            'Escolha o tipo de histórico a configurar (completo ou resumido).',
            'Marque todas as operações por meio da checkbox localizada no topo da coluna ou selecione apenas as operações desejadas marcando cada checkbox específica.',
            'Salve a operação.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Lembre-se de salvar',
          text: 'O administrador pode marcar todas as operações por meio da checkbox localizada no topo da coluna ou selecionar apenas as operações desejadas marcando cada checkbox específica. Lembre-se de salvar a operação!',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Recomendação de configuração',
          text: 'As mesmas operações estão disponíveis para ambos os tipos de histórico. É recomendável configurar o histórico resumido com menos tipos de andamentos que o completo e, por sua vez, o completo com menos tipos de andamentos que o total. O objetivo é diferenciar cada tipo de histórico.',
        },
        {
          kind: 'steps',
          heading: 'Consulta do histórico de um processo',
          items: [
            'Acesse “Consultar Andamento”, localizado à esquerda da tela do sistema.',
            'Visualize o histórico apresentado para o processo.',
            'Para ver todas as operações, clique em “Ver histórico total”, localizado na tela “Consultar Andamento”.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Operações não cadastráveis',
          text: 'O SEI não permite o cadastro, a alteração e a exclusão das ações do modelo do histórico. A configuração limita-se a marcar quais operaciones serão exibidas.',
        },
        {
          kind: 'table',
          heading: 'Resumo das características do histórico',
          columns: ['Item', 'Descrição'],
          rows: [
            ['Origem dos dados', 'Conjunto de operações realizadas no processo durante os trâmites pelo SEI'],
            ['Tipos parametrizáveis', 'Completo e resumido'],
            [
              'Histórico total',
              'Apresenta todas as operações; acessado por “Ver histórico total” e não é parametrizável',
            ],
            [
              'Cadastro de novas ações',
              'Não permitido pelo SEI',
            ],
          ],
        },
      ],
      keyPoints: [
        'Histórico é o conjunto de operações realizadas no processo durante os trâmites.',
        'Existem dois tipos parametrizáveis: completo e resumido.',
        'As mesmas operações estão disponíveis para os dois tipos de histórico.',
        'É recomendável usar menos andamentos no resumido que no completo, e no completo que no total.',
        'A consulta é feita em “Consultar Andamento” e o total em “Ver histórico total”.',
        'O SEI não permite cadastrar, alterar ou excluir ações do modelo do histórico.',
      ],
      quiz: [
        {
          id: 'm5-hi-q1',
          prompt: 'O que é o histórico de um processo no SEI?',
          options: [
            'A lista de documentos do processo em ordem de criação',
            'O conjunto de operações realizadas no processo durante os trâmites por meio do SEI',
            'O relatório de tempos de execução de cada unidade',
            'A relação de usuários que tiveram acesso ao processo',
          ],
          correctIndex: 1,
          explanation:
            'O histórico é o conjunto de operações realizadas em um processo durante os trâmites por meio do SEI, como concessão de credencial de acesso, exclusão de documento e relacionamento entre processos.',
        },
        {
          id: 'm5-hi-q2',
          prompt: 'Quais são os dois tipos de histórico configuráveis pelo administrador?',
          options: ['Completo e resumido', 'Completo e total', 'Resumido e total', 'Parcial e integral'],
          correctIndex: 0,
          explanation: 'Há dois tipos de histórico parametrizáveis: o completo e o resumido. O histórico total não é parametrizável.',
        },
        {
          id: 'm5-hi-q3',
          prompt: 'Qual a relação recomendada entre andamentos do histórico resumido, completo e total?',
          options: [
            'Todos devem ter a mesma quantidade de andamentos',
            'O resumido deve ter mais andamentos que o completo, e o completo mais que o total',
            'O resumido deve ter menos andamentos que o completo, e o completo menos que o total',
            'O histórico total deve ter menos andamentos que o resumo',
          ],
          correctIndex: 2,
          explanation:
            'É recomendável configurar o histórico resumido com menos tipos de andamentos que o completo e o completo com menos tipos de andamentos que o total, para diferenciar cada tipo de histórico.',
        },
        {
          id: 'm5-hi-q4',
          prompt: 'Qual opção permite visualizar o histórico total de um processo?',
          options: [
            '“Consultar Andamento” e, depois, “Ver histórico total”',
            '“Excluir Documento”',
            '“Gerar Relatório de Documentos”',
            '“Incluir Documento”',
          ],
          correctIndex: 0,
          explanation:
            'Os históricos de um processo podem ser visualizados em “Consultar Andamento” e o histórico total é acessado pelo botão “Ver histórico total” nessa mesma tela.',
        },
        {
          id: 'm5-hi-q5',
          prompt: 'Verdadeiro ou falso: o administrador pode cadastrar novas ações no modelo do histórico.',
          options: ['Verdadeiro', 'Falso'],
          correctIndex: 1,
          explanation:
            'O SEI não permite o cadastro, a alteração e a exclusão das ações do modelo do histórico.',
        },
      ],
    },
    {
      id: 'm5-ponto-controle',
      slug: 'm5-ponto-controle',
      title: 'Ponto de Controle',
      estimatedMinutes: 45,
      objectives: [
        'Explicar a finalidade da funcionalidade “Ponto de Controle”',
        'Cadastrar pontos de controle com nome, descrição e unidades',
        'Gerenciar o ponto de controle dentro do processo e em “Controle de Processos”',
        'Alterar, excluir, desativar, reativar e consultar pontos de controle',
        'Diferenciar o uso da funcionalidade pelo administrador e pelos demais usuários',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A funcionalidade “Ponto de Controle” é utilizada para marcar situações temporárias e realizar o monitoramento dos status do processo.',
        },
        {
          kind: 'steps',
          heading: 'Cadastro do ponto de controle',
          items: [
            'Siga o caminho de acesso da funcionalidade “Ponto de Controle”.',
            'Clique no botão “Novo”, disponível no canto superior direito.',
            'Preencha os campos “Nome”, “Descrição” e “Unidades”.',
            'Selecione quantas unidades desejar, clique em “Transportar” e salve a operação.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Campo obrigatório',
          text: 'Apenas o campo “Nome” é de preenchimento obrigatório. O usuário pode selecionar qualquer quantidade de unidades; ao clicar em “Transportar” retorna à tela inicial e as unidades selecionadas são apresentadas. O botão “Remover Unidades Selecionadas” remove alguma unidade adicionada.',
        },
        {
          kind: 'paragraph',
          text: 'Por exemplo, é possível criar um ponto de controle alicerçado nas fases do Project Management Body of Knowledge (PMBOK) que propicie ao usuário monitorar o processo e saber em qual dos pontos de controle ele se encontra.',
        },
        {
          kind: 'bullets',
          heading: 'Exemplo de pontos de controle baseados no PMBOK',
          items: [
            'Início',
            'Planejamento',
            'Execução',
            'Controle',
            'Monitoramento',
          ],
        },
        {
          kind: 'steps',
          heading: 'Aplicação do ponto de controle no processo',
          items: [
            'Dentro do processo, acesse o ícone “Gerenciar Ponto de Controle”.',
            'Nas combo boxes são recuperados os pontos de controle cadastrados anteriormente.',
            'Selecione o controle desejado.',
            'Clique em “Salvar o histórico abaixo” para atualizar o processo com o novo ponto de controle.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Acesso pelo número do processo e por “Controle de Processos”',
          text: 'Os pontos de controle também são acessados por meio da bandeira ao lado do número do processo. Em “Controle de Processos”, o botão “Gerenciar Ponto de Controle” está disponível no menu superior e o usuário pode selecionar quantos processos desejar e colocá-los em um mesmo ponto de controle.',
        },
        {
          kind: 'table',
          heading: 'Ponto de Controle versus demais usuários',
          columns: ['Aspecto', 'Administração — “Ponto de Controle”', 'Demais usuários — item “Ponto de Controle” fora de “Administração”'],
          rows: [
            [
              'Finalidade',
              'Cadastrar, alterar, excluir, desativar, reativar e consultar pontos de controle',
              'Filtrar processos por “Tipo de Processo” e “Ponto de Controle” e gerar gráficos de acompanhamento',
            ],
            [
              'Campos principais',
              '“Nome”, “Descrição” e “Unidades”',
              '“Tipo de Processo” e “Ponto de Controle”',
            ],
            [
              'Operações',
              '“Novo”, “Alterar Ponto de Controle”, “Excluir”, “Desativar Ponto de Controle”, “Reativar Ponto de Controle” e “Consultar”',
              'Checkbox “Incluir Desativados” e botão “Gerar Gráficos” no canto superior direito',
            ],
            [
              'Restrição',
              'Apenas “Nome” é obrigatório',
              'A consulta não altera dados; a geração de gráficos depende dos filtros selecionados',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Ponto de controle mal configurado trava o trâmite',
          text: 'Como o ponto de controle marca situações e monitora o status do processo, um cadastro com nome inadequado, descrição confusa ou unidades incorretas dificulta a identificação do estágio em que o processo se encontra e compromete a leitura dos gráficos de status. Revise o cadastro antes de padronizar o uso no órgão.',
        },
        {
          kind: 'table',
          heading: 'Manutenção de pontos de controle',
          columns: ['Operação', 'Procedimento'],
          rows: [
            [
              'Exclusão',
              'Identificar o ponto de controle, marcar a checkbox e clicar no botão “Excluir”. É possível excluir mais de um ponto de controle de uma vez pelo botão “Excluir”, na parte superior direita da tela.',
            ],
            [
              'Consulta',
              'Botão “Consultar” disponível na tela “Ponto de Controle”. Os dados não podem ser alterados por essa funcionalidade.',
            ],
            [
              'Desativação',
              'Botão “Desativar Ponto de Controle”. Após a desativação, o ponto de controle ainda é exibido na lista, com uma linha destacada em vermelho.',
            ],
            [
              'Reativação',
              'Botão “Reativar Ponto de Controle”.',
            ],
            [
              'Alteração',
              'Selecionar o ponto de controle e clicar em “Alterar Ponto de Controle”; a nova tela contém “Nome”, “Descrição” e “Unidades”, permitindo alterar o nome e adicionar ou excluir unidades do rol cadastrado.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Desativação não é exclusão',
          text: 'A inativação não deve ser confundida com a exclusão: após a desativação, o ponto de controle continua na lista, apenas destacado em vermelho.',
        },
      ],
      keyPoints: [
        '“Ponto de Controle” marca situações temporárias e monitora o status do processo.',
        'O cadastro usa “Nome” (obrigatório), “Descrição” e “Unidades”.',
        'No processo, o ícone “Gerenciar Ponto de Controle” atualiza o status após “Salvar o histórico abaixo”.',
        'Em “Controle de Processos” vários processos podem receber o mesmo ponto de controle.',
        'Fora de “Administração”, o usuário filtra por “Tipo de Processo” e “Ponto de Controle” e gera gráficos.',
        'Após a desativação, o ponto de controle continua na lista em vermelho.',
      ],
      quiz: [
        {
          id: 'm5-pc-q1',
          prompt: 'Qual campo é de preenchimento obrigatório no cadastro de um ponto de controle?',
          options: ['Descrição', 'Unidades', 'Nome', 'Tipo de Processo'],
          correctIndex: 2,
          explanation: 'Fique atento! Apenas o campo “Nome” é de preenchimento obrigatório no cadastro do ponto de controle.',
        },
        {
          id: 'm5-pc-q2',
          prompt: 'Qual a finalidade da funcionalidade “Ponto de Controle”?',
          options: [
            'Definir os prazos de vencimento dos documentos',
            'Marcar situações temporárias e realizar o monitoramento dos status do processo',
            'Controlar o acesso de usuários ao processo sigiloso',
            'Definir o padrão de assinatura da unidade',
          ],
          correctIndex: 1,
          explanation:
            'A funcionalidade “Ponto de Controle” é utilizada para marcar situações temporárias e realizar o monitoramento dos status do processo.',
        },
        {
          id: 'm5-pc-q3',
          prompt: 'Dentro do processo, como o novo ponto de controle é gravado após a seleção na combo box?',
          options: [
            'Clicando em “Salvar o histórico abaixo”',
            'Clicando em “Excluir”',
            'Clicando no botão “Novo”',
            'Selecionando a checkbox “Incluir Desativados”',
          ],
          correctIndex: 0,
          explanation:
            'Após selecionar o controle e clicar em “Salvar o histórico abaixo”, o processo é atualizado com o novo ponto de controle.',
        },
        {
          id: 'm5-pc-q4',
          prompt: 'Ao clicar em “Ponto de Controle” fora do item “Administração”, quais campos aparecem para preenchimento?',
          options: [
            '“Nome” e “Descrição”',
            '“Tipo de Processo” e “Ponto de Controle”',
            '“Sistema” e “Serviço”',
            '“Unidades” e “Operações”',
          ],
          correctIndex: 1,
          explanation:
            'Após clicar em “Ponto de Controle”, fora do item “Administração”, aparece uma tela com dois campos: “Tipo de Processo” e “Ponto de Controle”.',
        },
        {
          id: 'm5-pc-q5',
          prompt: 'O que ocorre com um ponto de controle depois de desativado?',
          options: [
            'É removido definitivamente do banco de dados',
            'Continua exibido na lista, com uma linha destacada em vermelho',
            'Passa a ser exibido apenas na pesquisa de usuários',
            'É desativado também o histórico do processo',
          ],
          correctIndex: 1,
          explanation:
            'Após a desativação, o ponto de controle ainda é exibido na lista, porém com uma linha destacada em vermelho — inativação não é exclusão.',
        },
        {
          id: 'm5-pc-q6',
          prompt: 'Como a exclusão de pontos de controle pode ser realizada em lote?',
          options: [
            'Selecionando os pontos de controle por meio das checkboxes e clicando no botão “Excluir”',
            'Pelo botão “Consultar”',
            'Pelo botão “Gerar Gráficos”',
            'Pelo botão “Reativar Ponto de Controle”',
          ],
          correctIndex: 0,
          explanation:
            'O administrador deve identificar o ponto de controle, marcar a checkbox e clicar no botão “Excluir”, podendo excluir mais de um de uma vez pelo botão “Excluir” na parte superior direita da tela.',
        },
      ],
    },
    {
      id: 'm5-sistemas',
      slug: 'm5-sistemas',
      title: 'Sistemas',
      estimatedMinutes: 45,
      objectives: [
        'Explicar a finalidade da funcionalidade “Sistemas” e das ações disponíveis',
        'Cadastrar um novo sistema com Órgão, Sigla e Nome',
        'Cadastrar serviços e operações, configurando os servidores autorizados',
        'Desativar, reativar e excluir sistemas, observando as restrições de cada ação',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'No SEI há a possibilidade de configurar os sistemas externos que podem acessar os serviços disponibilizados. Antes disso, é necessário cadastrar o sistema e realizar a associação com os respectivos serviços, sendo possível indicar o tipo de processo, de documento e as unidades permitidas.',
        },
        {
          kind: 'paragraph',
          text: 'Os serviços são descritos em formato XML, em um padrão denominado Web Services Description Language (Linguagem de Descrição de Serviços Web). Além de descrever os serviços, esse padrão especifica como acessá-los e quais operações ou métodos estão disponíveis.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Endereços de referência',
          text: 'O acesso ao WSDL é realizado por meio do endereço http://[servidor php]/sei/controlador_ws.php?servico=sei, em que [servidor php] é o endereço web do SEI. Os serviços do SEI estão documentados em https://softwarepublico.gov.br/social/articles/0004/7172/SEI-WebServices-v3.0.pdf, documentação bastante técnica e destinada a profissionais de Tecnologia da Informação.',
        },
        {
          kind: 'bullets',
          heading: 'Ações disponíveis em “Sistemas”',
          items: [
            '“Novo”',
            '“Listar”',
            '“Reativar”',
            '“Monitoramento de Serviços”',
          ],
        },
        {
          kind: 'table',
          heading: 'Tela “Novo Sistema” — campos obrigatórios',
          columns: ['Campo', 'Como preencher'],
          rows: [
            ['Órgão', 'Recupera todos os órgãos cadastrados no SIP.'],
            ['Sigla', 'Deve-se colocar a sigla do novo sistema.'],
            ['Nome', 'Deve-se preencher com o nome completo do sistema.'],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Ações da coluna “Ações” em “Listar Sistemas”',
          items: [
            '“Serviços”',
            '“Consultar Sistema”',
            '“Alterar Sistema”',
            '“Desativar Sistema”',
            '“Excluir Sistema”',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos da tela de serviço (botão “Novo”)',
          columns: ['Campo', 'Preenchimento', 'Descrição'],
          rows: [
            [
              'Identificação',
              'Obrigatório',
              'Informado na chamada do WebService.',
            ],
            [
              'Descrição',
              'Opcional',
              'Descrição do serviço utilizado pelo sistema, ou seja, a especificação do objetivo do serviço.',
            ],
            [
              'Servidores',
              'Obrigatório',
              'Endereços IP que poderão acessar o serviço. O SEI valida se o serviço está sendo chamado por um dos endereços informados, retornando “Acesso Negado” se não encontrar, e lança registro na tabela “infra_log” com o servidor que tentou acessar.',
            ],
            [
              'Gerar links de acesso externos',
              'Opcional',
              'Ao marcar, um link para acesso ao processo ou documento é retornado ao selecionar um serviço do SEI. Sistemas desenvolvidos com InfraPHP (SEI e SIP) têm autenticação automática; nos demais casos a visualização é igual à de “Acesso Externo”.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cuidado com o cadastro de servidores',
          text: 'É permitido o uso de até um caractere curinga no nome do servidor, por exemplo “10.100.50.*”. Se apenas o “*” for cadastrado, então qualquer máquina estará liberada para acesso. Dependendo da configuração da rede, pode ser necessário informar o nome e o IP do servidor na lista.',
        },
        {
          kind: 'table',
          heading: 'Campos da ação “Operações”',
          columns: ['Campo', 'Conteúdo'],
          rows: [
            [
              'Tipo da Operação',
              'Relaciona-se às ações no processo ou documento, tais como “Cancelar Documento”, “Adicionar Arquivo” e “Concluir Processo”. Único campo obrigatório.',
            ],
            ['Unidades', 'Unidades do órgão no qual o SEI é vinculado.'],
            ['Tipo do Processo', 'Tipos de processos cadastrados.'],
            ['Tipo do Documento', 'Tipos de documentos cadastrados.'],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Campos conforme o “Tipo da Operação”',
          text: 'A quantidade de campos exibida está relacionada ao “Tipo da Operação” selecionado e apenas esse campo é de preenchimento obrigatório.',
        },
        {
          kind: 'steps',
          heading: 'Rotina de manutenção de sistemas e serviços',
          items: [
            'Clique no ícone “Serviços” na coluna “Ações” e, na nova tela, no botão “Novo” para cadastrar o serviço.',
            'Preencha os campos e clique em “Salvar”, localizado no canto superior direito da tela.',
            'Na ação “Operações”, use o botão “Novo” no canto superior direito para cadastrar operações.',
            'Use “Consultar Serviço”, “Alterar Serviço” e “Excluir Serviço” conforme a necessidade; a exclusão em lote usa o botão “Excluir” no canto direito superior.',
            'Clique em “OK” na mensagem de confirmação para confirmar desativação ou exclusão.',
          ],
        },
        {
          kind: 'table',
          heading: 'Desativar, reativar e excluir sistemas',
          columns: ['Operação', 'Comportamento', 'Observação'],
          rows: [
            [
              'Desativar Sistema',
              'Após clicar em “OK” na confirmação, o sistema não é mais apresentado na tela do sistema.',
              'Apenas um sistema é desativado por vez.',
            ],
            [
              'Reativar Sistema',
              'Permite consultar sistemas desativados e reativá-los; na tela “Reativar Sistemas” há as ações “Reativar” e “Excluir”.',
              'É possível reativar mais de um sistema simultaneamente pelo botão “Reativar” no canto superior direito.',
            ],
            [
              'Excluir Sistema',
              'Após clicar em “OK” na confirmação, o sistema é deletado do banco de dados.',
              'O SEI não permite a exclusão de mais de um sistema simultaneamente.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Diferença entre alterar e consultar',
          text: 'Os campos da tela de inclusão também aparecem em “Alterar Sistema” e “Consultar Sistema”, mas em “Alterar Sistema” os campos estão liberados para alteração, enquanto em “Consultar Sistema” as informações estão disponíveis apenas para visualização.',
        },
      ],
      keyPoints: [
        '“Sistemas” configura os sistemas externos que acessam os serviços do SEI.',
        'As ações do menu são “Novo”, “Listar”, “Reativar” e “Monitoramento de Serviços”.',
        'Na tela “Novo Sistema”, Órgão, Sigla e Nome são de preenchimento obrigatório.',
        'Na coluna “Ações” há “Serviços”, “Consultar Sistema”, “Alterar Sistema”, “Desativar Sistema” e “Excluir Sistema”.',
        'No serviço, “Identificação” e “Servidores” são obrigatórios; o curinga “*” libera qualquer máquina.',
        'Apenas um sistema é desativado ou excluído por vez, mas vários podem ser reativados.',
      ],
      quiz: [
        {
          id: 'm5-si-q1',
          prompt: 'Quais ações aparecem ao acessar a funcionalidade “Sistemas” no item “Administração”?',
          options: [
            '“Novo”, “Listar”, “Reativar” e “Monitoramento de Serviços”',
            '“Novo”, “Listar” e “Excluir”',
            '“Incluir”, “Alterar”, “Consultar” e “Imprimir”',
            '“Novo”, “Serviços”, “Operações” e “Monitoramento”',
          ],
          correctIndex: 0,
          explanation:
            'Ao acessar “Sistemas”, aparecem quatro ações possíveis: “Novo”, “Listar”, “Reativar” e “Monitoramento de Serviços”.',
        },
        {
          id: 'm5-si-q2',
          prompt: 'Quais campos da tela “Novo Sistema” são de preenchimento obrigatório?',
          options: ['Órgão, Sigla e Nome', 'Sigla e Nome', 'Órgão e Sigla', 'Nome e Órgão'],
          correctIndex: 0,
          explanation:
            'A tela “Novo Sistema” é composta pelos campos “Órgão” (que recupera os órgãos cadastrados no SIP), “Sigla” e “Nome”, todos de preenchimento obrigatório.',
        },
        {
          id: 'm5-si-q3',
          prompt: 'Qual é o efeito de cadastrar apenas “*” no campo “Servidores” de um serviço?',
          options: [
            'Nenhuma máquina poderá acessar o serviço',
            'Somente a máquina do próprio servidor poderá acessar',
            'Qualquer máquina estará liberada para acesso',
            'O serviço será desativado automaticamente',
          ],
          correctIndex: 2,
          explanation:
            'É permitido o uso de até um caractere curinga no nome do servidor, por exemplo “10.100.50.*”. Se apenas o “*” for cadastrado, então qualquer máquina estará liberada para acesso.',
        },
        {
          id: 'm5-si-q4',
          prompt: 'O que o SEI faz quando um serviço é chamado por um endereço não informado no campo “Servidores”?',
          options: [
            'Permite o acesso e registra apenas um aviso',
            'Retorna “Acesso Negado” e lança registro na tabela “infra_log”',
            'Bloqueia a conta do usuário solicitante',
            'Redireciona a chamada para o serviço padrão',
          ],
          correctIndex: 1,
          explanation:
            'O SEI valida se o serviço está sendo chamado por um dos endereços informados no campo “Servidores”, retornando “Acesso Negado” se não encontrar, e lança um registro na tabela “infra_log” informando qual servidor tentou acessar o serviço.',
        },
        {
          id: 'm5-si-q5',
          prompt: 'Qual das restrições abaixo é verdadeira sobre desativação e exclusão de sistemas?',
          options: [
            'É permitido desativar e excluir vários sistemas simultaneamente',
            'Apenas um sistema é desativado por vez e o SEI não permite excluir mais de um simultaneamente',
            'É permitido excluir vários sistemas, mas apenas desativar um',
            'Não há restrição: ambas as ações são sempre em lote',
          ],
          correctIndex: 1,
          explanation:
            'Apenas um sistema é desativado por vez e o SEI não permite a exclusão de mais de um sistema simultaneamente; já a reativação pode ocorrer para vários sistemas ao mesmo tempo.',
        },
        {
          id: 'm5-si-q6',
          prompt: 'Na ação “Operações”, qual é o único campo de preenchimento obrigatório?',
          options: ['Unidades', 'Tipo do Documento', 'Tipo da Operação', 'Tipo do Processo'],
          correctIndex: 2,
          explanation:
            'Apenas o campo “Tipo da Operação” é de preenchimento obrigatório; a quantidade de campos exibida depende do “Tipo da Operação” selecionado.',
        },
      ],
    },
    {
      id: 'm5-monitoramento-servicos',
      slug: 'm5-monitoramento-servicos',
      title: 'Monitoramento de Serviços',
      estimatedMinutes: 25,
      objectives: [
        'Explicar a finalidade do relatório de “Monitoramento de Serviços”',
        'Aplicar os filtros “Sistema”, “Serviço”, “Operação”, “Período” e “Tipo”',
        'Diferenciar o Monitoramento Resumido do Monitoramento Detalhado',
        'Identificar as informações de acesso, como IP de acesso, servidor e user agent',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A funcionalidade “Monitoramento de Serviços” refere-se a um relatório dos serviços utilizados pelos sistemas.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Objetivo do monitoramento',
          text: 'Um dos objetivos do “Monitoramento de Serviços” é a verificação da chamada de serviços utilizados pelos sistemas cadastrados.',
        },
        {
          kind: 'table',
          heading: 'Filtros do relatório',
          columns: ['Filtro', 'Observação'],
          rows: [
            ['Sistema', 'Filtro de seleção.'],
            ['Serviço', 'Filtro de seleção.'],
            ['Operação', 'Filtro de seleção.'],
            ['Período', 'Filtro de seleção.'],
            ['Tipo', 'Único filtro de seleção obrigatória.'],
          ],
        },
        {
          kind: 'paragraph',
          text: 'O “Monitoramento de Serviços” é apresentado de duas maneiras: o Monitoramento Resumido e o Monitoramento Detalhado.',
        },
        {
          kind: 'table',
          heading: 'Monitoramento Resumido',
          columns: ['Informação exibida'],
          rows: [['Sistema'], ['Serviço'], ['Operação'], ['Quantidade'], ['Tempo Médio']],
        },
        {
          kind: 'table',
          heading: 'Monitoramento Detalhado',
          columns: ['Informação exibida'],
          rows: [
            ['Data/Hora'],
            ['Tempo'],
            ['Detalhes'],
            ['Sistema'],
            ['Serviço'],
            ['Operação'],
            ['IP de Acesso'],
            ['Servidor'],
            ['User Agent'],
          ],
        },
        {
          kind: 'steps',
          heading: 'Fluxo de uso do relatório',
          items: [
            'Acesse “Monitoramento de Serviços” no item “Administração”, em “Sistemas”.',
            'Selecione os filtros desejados, sendo “Tipo” obrigatório.',
            'Execute a consulta para obter o Monitoramento Resumido ou Detalhado.',
            'Analise a quantidade de chamadas e o tempo médio de resposta das operações.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Leitura do relatório',
          text: 'O Monitoramento Resumido é indicado para visão consolidada por serviço e operação (quantidade e tempo médio); o Monitoramento Detalhado permite rastrear cada chamada, com data/hora, tempo, IP de acesso, servidor e user agent.',
        },
      ],
      keyPoints: [
        'O relatório mostra os serviços utilizados pelos sistemas cadastrados.',
        'Filtros disponíveis: “Sistema”, “Serviço”, “Operação”, “Período” e “Tipo”.',
        'Apenas “Tipo” é de preenchimento obrigatório.',
        'Monitoramento Resumido: Sistema, Serviço, Operação, Quantidade e Tempo Médio.',
        'Monitoramento Detalhado: inclui Data/Hora, Tempo, Detalhes, IP de Acesso, Servidor e User Agent.',
        'A finalidade é verificar a chamada de serviços utilizados pelos sistemas cadastrados.',
      ],
      quiz: [
        {
          id: 'm5-ms-q1',
          prompt: 'Qual é o único filtro de seleção obrigatória do “Monitoramento de Serviços”?',
          options: ['Sistema', 'Serviço', 'Operação', 'Tipo'],
          correctIndex: 3,
          explanation: 'O relatório possui os filtros “Sistema”, “Serviço”, “Operação”, “Período” e “Tipo”, sendo “Tipo” o único de seleção obrigatória.',
        },
        {
          id: 'm5-ms-q2',
          prompt: 'Qual informação NÃO faz parte do Monitoramento Resumido?',
          options: ['Tempo Médio', 'IP de Acesso', 'Quantidade', 'Operação'],
          correctIndex: 1,
          explanation:
            'O Monitoramento Resumido contém Sistema, Serviço, Operação, Quantidade e Tempo Médio. O IP de Acesso aparece no Monitoramento Detalhado.',
        },
        {
          id: 'm5-ms-q3',
          prompt: 'Qual das informações abaixo consta no Monitoramento Detalhado?',
          options: ['Somente tempo médio', 'Somente quantidade de chamadas', 'User Agent e Servidor', 'Somente nome da unidade'],
          correctIndex: 2,
          explanation:
            'O Monitoramento Detalhado exibe Data/Hora, Tempo, Detalhes, Sistema, Serviço, Operação, IP de Acesso, Servidor e User Agent.',
        },
        {
          id: 'm5-ms-q4',
          prompt: 'Qual o objetivo do “Monitoramento de Serviços”?',
          options: [
            'Cadastrar novos serviços para os sistemas',
            'Verificar a chamada de serviços utilizados pelos sistemas cadastrados',
            'Alterar as permissões de acesso das unidades',
            'Excluir sistemas que acessaram o SEI',
          ],
          correctIndex: 1,
          explanation:
            'Um dos objetivos do “Monitoramento de Serviços” é a verificação da chamada de serviços utilizados pelos sistemas cadastrados.',
        },
      ],
    },
    {
      id: 'm5-veiculos-publicacao',
      slug: 'm5-veiculos-publicacao',
      title: 'Veículos de Publicação',
      estimatedMinutes: 45,
      objectives: [
        'Explicar a finalidade da funcionalidade “Veículos de Publicação”',
        'Cadastrar veículos de publicação do tipo interno e externo',
        'Agendar, alterar e cancelar a publicação de documentos',
        'Compreender a republicação e sua relação com a publicação original',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O SEI permite configurar os veículos de publicação que podem interagir com o sistema para agendamento, cancelamento e confirmação. A funcionalidade “Veículos de Publicação” permite o cadastro, a consulta, a alteração, a desativação, a reativação e a exclusão dos veículos de publicação cadastrados.',
        },
        {
          kind: 'steps',
          heading: 'Cadastro na funcionalidade “Veículos de Publicação”',
          items: [
            'Acesse a funcionalidade “Veículos de Publicação” no item “Administração”.',
            'Clique na opção “Novo”.',
            'Preencha a tela “Novo Veículo de Publicação”, cujos campos são todos de preenchimento obrigatório.',
            'Salve a operação.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos do cadastro',
          columns: ['Campo', 'Conteúdo'],
          rows: [
            [
              'Nome',
              'Nome do veículo de publicação. Deve ser significativo, pois aparecerá em diversos pontos do sistema: carimbo de publicação do documento, ícone na árvore do processo, andamento do processo e lista de resultados da pesquisa de publicação.',
            ],
            ['Descrição', 'Campo auxiliar para detalhamento do veículo.'],
            ['Tipo', 'Pode ser classificado em interno ou externo.'],
          ],
        },
        {
          kind: 'definitions',
          heading: 'Tipos de veículo de publicação',
          items: [
            {
              term: 'Tipo interno',
              text: 'As publicações são realizadas pelo próprio SEI. Se a data de publicação for igual à atual, o documento é publicado no mesmo instante, mas é exibido na pesquisa após alguns minutos. É permitido o cadastro de apenas um veículo de publicação interno, que utiliza os feriados cadastrados no sistema como fonte.',
            },
            {
              term: 'Tipo externo',
              text: 'O processo de agendamento, cancelamento e confirmação é realizado pelos WebServices. Os veículos externos são autorizados cadastrando o endereço do servidor que fará acesso no arquivo sei/ConfiguracaoSEI.php pela chave HostWebService/Publicacao.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Feriados e veículo interno',
          text: 'O SEI possibilita que o administrador cadastre manualmente os feriados por meio da funcionalidade “Administração”, clicando em “Feriados”. O veículo de publicação interno utiliza os feriados cadastrados no sistema como fonte.',
        },
        {
          kind: 'bullets',
          heading: 'Checkboxes exibidas quando o tipo externo é selecionado',
          items: [
            'Exibir as publicações enviadas para este veículo na pesquisa de publicações interna: possibilita que todos os documentos publicados fiquem disponíveis para busca na pesquisa interna.',
            'Utilizar os feriados cadastrados neste veículo como padrão para o sistema: busca os feriados por meio de chamada do WebService informado no campo “Web Service”, exibido apenas para veículos externos.',
            'Permite edição extraordinária: incluída a partir da versão 3.1 do SEI.',
          ],
        },
        {
          kind: 'table',
          heading: 'Manutenção dos veículos de publicação',
          columns: ['Operação', 'Como executar'],
          rows: [
            [
              'Alteração',
              'Administrador tem permissão para alterar as informações dos campos “Nome”, “Descrição” e “Tipo”.',
            ],
            [
              'Consulta',
              'Use a opção “Listar” e clique no ícone “Consultar Veículo de Publicação” na coluna “Ações”; permite apenas a visualização dos campos.',
            ],
            [
              'Desativação',
              'Clique em “Desativar Veículo de Publicação” na coluna “Ações” e confirme em “OK”. Também é possível desativar mais de um por vez, selecionando os itens desejados e clicando no botão “Excluir” no canto superior direito.',
            ],
            [
              'Reativação',
              'Após a desativação, é possível consultar, reativar ou excluir o veículo de publicação. É possível reativar mais de um simultaneamente pelo botão “Reativar”, no canto superior direito.',
            ],
            [
              'Exclusão',
              'Botão “Excluir Veículo de Publicação” na coluna “Ações”; também é possível excluir mais de um pelo botão “Excluir” no canto superior direito.',
            ],
          ],
        },
        {
          kind: 'steps',
          heading: 'Agendamento da publicação',
          items: [
            'Após a assinatura de um documento publicável, clique no ícone “Agendar Publicação”, que aparece no menu superior da tela.',
            'Selecione o veículo no campo “Veículo”, que recupera os veículos cadastrados.',
            'Informe a data de disponibilização do documento no campo “Disponibilização”.',
            'Registre observações no campo “Resumo”.',
            'Se necessário, preencha a grid “Imprensa Nacional”, com “Veículo”, “Seção”, “Página” e “Data”.',
            'Confirme a operação; surge no menu a funcionalidade “Visualizar Publicações/Agendamentos”.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Grid “Imprensa Nacional”',
          text: 'O campo “Veículo” recupera os veículos da Imprensa Nacional previamente cadastrados, acessando “Administração”, “Veículos de Publicação” e “Imprensa Nacional”. Após a seleção do veículo, as seções são recuperadas no campo “Seção”; os campos “Página” e “Data” são preenchidos pelo usuário, de forma manual ou por meio do botão de calendário.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Confirmação de publicação',
          text: 'A confirmação de publicação é verificada por meio do endereço http://[servidor sei]/sei/publicacoes/controlador_publicacoes.php?acao=publicacao_pesquisar&id_orgao_publicacao=[id do órgão no SEI], em que [servidor sei] é o endereço web do SEI do órgão ou entidade. O ID do órgão é consultado por meio da funcionalidade Órgãos, no item “Administração”, sendo a informação da primeira coluna.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Prazo para alteração ou cancelamento',
          text: 'Enquanto a publicação do documento não for confirmada, é possível alterar ou cancelar o agendamento. Após a confirmação, qualquer republicação, retificação ou apostilamento exige a criação de uma nova publicação relacionada.',
        },
        {
          kind: 'steps',
          heading: 'Cancelamento, alteração e republicação',
          items: [
            'Acesse “Visualizar Publicações/Agendamentos” no menu superior.',
            'Para alterar o agendamento, clique no ícone “Alterar”, à direita da tabela na coluna “Ações”, e revise os campos.',
            'Para cancelar, clique no botão “Cancelamento de Agendamento” e confirme em “OK”.',
            'Após a confirmação da publicação, se for necessário republicar, retificar ou apostilar, crie uma publicação relacionada, com as mesmas informações do documento, inclusive a numeração, alterando o conteúdo e realizando um novo agendamento.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Publicações relacionadas',
          text: 'No resultado da pesquisa de publicações, é permitido visualizar todas as publicações relacionadas de um mesmo documento.',
        },
      ],
      keyPoints: [
        '“Veículos de Publicação” permite cadastro, consulta, alteração, desativação, reativação e exclusão.',
        'Os campos “Nome”, “Descrição” e “Tipo” são obrigatórios, e o nome aparece em diversos pontos do sistema.',
        'Só é permitido o cadastro de um único veículo de publicação interno.',
        'Veículos externos são autorizados pela chave HostWebService/Publicacao no arquivo sei/ConfiguracaoSEI.php.',
        'O agendamento é feito por “Agendar Publicação”, após a assinatura do documento publicável.',
        'Enquanto a publicação não for confirmada, é possível alterar ou cancelar o agendamento.',
      ],
      quiz: [
        {
          id: 'm5-vp-q1',
          prompt: 'Como o agendamento da publicação é disparado?',
          options: [
            'Pelo ícone “Agendar Publicação”, que aparece no menu superior após a assinatura de um documento publicável',
            'Pelo botão “Excluir Veículo de Publicação”',
            'Pela ação “Reativar” em “Veículos de Publicação”',
            'Pelo item “Administração” e depois “Imprensa Nacional”',
          ],
          correctIndex: 0,
          explanation:
            'Após a assinatura de um documento publicável, o ícone “Agendar Publicação” aparece no menu superior da tela.',
        },
        {
          id: 'm5-vp-q2',
          prompt: 'Qual a restrição sobre veículos de publicação do tipo interno?',
          options: [
            'Podem ser cadastrados até três veículos internos',
            'É permitido o cadastro de apenas um veículo de publicação interno',
            'Não é permitido cadastrar veículo interno',
            'Podem ser cadastrados apenas se houver WebService configurado',
          ],
          correctIndex: 1,
          explanation:
            'É permitido o cadastro de apenas um veículo de publicação interno, que realiza as publicações pelo próprio SEI e utiliza os feriados cadastrados no sistema como fonte.',
        },
        {
          id: 'm5-vp-q3',
          prompt: 'Qual a função do campo “Resumo” na tela de agendamento da publicação?',
          options: [
            'Informar o número da página na Imprensa Nacional',
            'Selecionar o veículo de publicação',
            'Utilizado para observações',
            'Definir a data de disponibilização do documento',
          ],
          correctIndex: 2,
          explanation:
            'O campo “Disponibilização” informa a data de disponibilização do documento no veículo de publicação e o campo “Resumo” é utilizado para observações.',
        },
        {
          id: 'm5-vp-q4',
          prompt: 'Quando é possível alterar ou cancelar o agendamento da publicação?',
          options: [
            'Enquanto a publicação do documento não for confirmada',
            'Somente antes da assinatura do documento',
            'Após a republicação do documento',
            'Somente quando o veículo de publicação for desativado',
          ],
          correctIndex: 0,
          explanation:
            'Destaca-se que, enquanto a publicação do documento não for confirmada, é possível alterar ou cancelar o agendamento.',
        },
        {
          id: 'm5-vp-q5',
          prompt: 'Como os veículos de publicação externos são autorizados?',
          options: [
            'Cadastrando o endereço do servidor que fará acesso no arquivo sei/ConfiguracaoSEI.php pela chave HostWebService/Publicacao',
            'Cadastrando o usuário e a senha do servidor na tela de “Novo Veículo de Publicação”',
            'Marcando a checkbox “Incluir Desativados”',
            'Autorizando o IP no campo “Servidores” da tela de Sistemas',
          ],
          correctIndex: 0,
          explanation:
            'Os veículos externos são autorizados cadastrando o endereço do servidor que fará acesso no arquivo sei/ConfiguracaoSEI.php pela chave HostWebService/Publicacao.',
        },
        {
          id: 'm5-vp-q6',
          prompt: 'Qual a característica da republicação de um documento?',
          options: [
            'Possui as mesmas informações do documento, inclusive a numeração, mas permite alterar o conteúdo e realizar um novo agendamento',
            'Substitui definitivamente a publicação original, removendo-a do sistema',
            'Mantém o mesmo conteúdo e a mesma data, sem novo agendamento',
            'É possível apenas para documentos externos',
          ],
          correctIndex: 0,
          explanation:
            'Após a confirmação da publicação, se for necessário efetuar uma republicação, retificação ou apostilamento, uma publicação relacionada deve ser criada, com as mesmas informações do documento, inclusive a numeração, alterando-se o conteúdo e realizando um novo agendamento.',
        },
      ],
    },
  ],
};

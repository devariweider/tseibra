import type { CourseModule } from './types.js';

export const modulo6: CourseModule = {
  id: 'mod-6',
  slug: 'administracao-parte-3',
  title: 'Módulo 6 — Administração do SEI (Parte III)',
  subtitle: 'E-mails do Sistema, Feriados, Grupos Institucionais, Novidades, Países, Estados e Cidades',
  description:
    'Este módulo apresenta as funcionalidades de administração do SEI que permitem ao administrador parametrizar o comportamento do sistema: a edição dos e-mails automáticos gerados pelo SEI, o cadastro de feriados para o monitoramento dos dias úteis, a criação de grupos institucionais de contatos, e-mails e envio, a publicação de Novidades para todos os usuários e o cadastro de países, estados e cidades. O conteúdo segue a apostila do curso SEI! Administrar, da Enap (2019).',
  sourceRef: 'Módulo 6 - Administração do SEI - Parte III.pdf (Enap, curso SEI! Administrar, 2019)',
  estimatedMinutes: 150,
  objectives: [
    'Alterar o conteúdo dos e-mails automáticos gerados pelo SEI, usando as variáveis disponíveis para o campo "Conteúdo".',
    'Cadastrar, alterar e excluir feriados por órgão, garantindo a contagem correta de dias úteis no acompanhamento de prazos.',
    'Criar grupos institucionais dos tipos Contatos, E-mails e Envio e aplicá-los no envio de mensagens e de processos.',
    'Cadastrar e liberar Novidades, compreendendo como os informativos são apresentados aos usuários.',
    'Cadastrar países, estados e cidades, incluindo códigos IBGE, sigla, indicação de capital e coordenadas.',
  ],
  lessons: [
    {
      id: 'm6-emails-sistema',
      slug: 'm6-emails-sistema',
      title: 'E-mails do Sistema',
      estimatedMinutes: 30,
      objectives: [
        'Identificar os tipos de e-mails automáticos disponíveis no SEI e as ações da coluna "Ações".',
        'Alterar um e-mail do sistema preenchendo os campos do formulário de edição.',
        'Utilizar as variáveis do sistema na elaboração do texto do e-mail.',
        'Diferenciar a desativação de um e-mail da exclusão definitiva.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O SEI pode enviar e-mails para os usuários em diversas situações, por exemplo, ao cadastrar um usuário externo ou para conceder uma credencial em processo sigiloso. Essas mensagens são geradas automaticamente, porém é necessário configurar previamente o seu conteúdo.',
        },
        {
          kind: 'paragraph',
          text: 'Para isso, o usuário com perfil "Administrador" deverá acompanhar o caminho descrito na apostila. Em seguida, abrirá uma nova tela denominada "E-mails do Sistema", listando os tipos de e-mails automáticos disponíveis no SEI.',
        },
        {
          kind: 'bullets',
          heading: 'Ações disponíveis na coluna "Ações"',
          items: [
            'Alterar E-mail do Sistema — pode-se editar o conteúdo do e-mail.',
            'Desativar E-mail do Sistema — desativa o e-mail. Apenas alguns e-mails apresentam esta opção; uma vez desativado, o e-mail continua sendo exibido, porém o ícone de desativação passa a ser apresentado como "Reativar E-mail do Sistema".',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Importante',
          text: 'Não é possível incluir novos e-mails automáticos do sistema. Também não existe a opção de excluir definitivamente um e-mail.',
        },
        {
          kind: 'steps',
          heading: 'Operacionalização: alterar um e-mail do sistema',
          items: [
            'Acesse o SEI com perfil "Administrador" e abra a tela "E-mails do Sistema".',
            'Na coluna "Ações", localize o e-mail desejado e clique no ícone "Alterar E-mail do Sistema".',
            'Abri-se uma nova tela com um formulário para edição dos dados do e-mail selecionado.',
            'Preencha os campos Descrição, Remetente, Destinatário, Assunto e Conteúdo.',
            'Para elaborar o texto, consulte as variáveis do sistema no ícone "Ajuda" à direita de cada campo.',
            'Salve a operação para concluir a alteração.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos do formulário de e-mail e uso de variáveis',
          columns: ['Campo', 'O que deve ser informado', 'Variáveis do sistema'],
          rows: [
            [
              'Descrição',
              'Nome do e-mail que é mostrado na lista de e-mails. Visível apenas para os usuários com perfil "Administrador".',
              'Campo de identificação do registro, sem uso de variáveis.',
            ],
            [
              'Remetente',
              'Caixa de e-mail responsável pelo envio do correio eletrônico.',
              'Valor informado pelo administrador.',
            ],
            [
              'Destinatário',
              'Caixa de e-mail das unidades ou pessoas que receberão o correio eletrônico.',
              'Valor informado pelo administrador.',
            ],
            [
              'Assunto',
              'Tema do e-mail, com breve descrição visível na caixa de entrada do destinatário.',
              'Variáveis disponíveis no ícone "Ajuda" à direita do campo.',
            ],
            [
              'Conteúdo',
              'Mensagem automática que será enviada ao usuário.',
              'Variáveis disponíveis no ícone "Ajuda" à direita do campo.',
            ],
          ],
        },
        {
          kind: 'paragraph',
          text: 'Ressalta-se que o texto dos e-mails deve ser elaborado utilizando as variáveis do sistema. Elas são listadas ao se clicar no ícone "Ajuda" à direita de cada campo, que apresenta as variáveis disponíveis para o campo "Conteúdo".',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Use as variáveis do sistema em vez de digitar dados manualmente. Assim a mensagem acompanha automaticamente o usuário, o processo ou a unidade envolvida e evita textos desatualizados quando o cadastro muda.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'A apostila acompanha esta funcionalidade com o vídeo módulo06video01.mp4, disponível em https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo06video01.mp4.',
        },
      ],
      keyPoints: [
        'O SEI gera e-mails automáticos, mas o conteúdo precisa ser configurado previamente.',
        'Somente o perfil "Administrador" acessa e edita os E-mails do Sistema.',
        'As ações disponíveis são "Alterar E-mail do Sistema" e "Desativar E-mail do Sistema".',
        'O e-mail desativado continua na lista, com o ícone "Reativar E-mail do Sistema".',
        'Não se pode criar novos e-mails automáticos nem excluí-los definitivamente.',
        'As variáveis do sistema são consultadas pelo ícone "Ajuda" ao lado de cada campo.',
      ],
      quiz: [
        {
          id: 'm6-q1',
          prompt: 'Quem pode alterar o conteúdo dos e-mails automáticos do SEI?',
          options: [
            'Qualquer usuário com cadastro ativo no sistema.',
            'O usuário com perfil "Administrador".',
            'Somente o gestor da unidade.',
            'Somente a unidade de protocolo.',
          ],
          correctIndex: 1,
          explanation:
            'O material-fonte é explícito: "Para isso, o usuário com perfil \'Administrador\' deverá acompanhar o caminho descrito a seguir".',
        },
        {
          id: 'm6-q2',
          prompt: 'O que acontece ao desativar um e-mail do sistema?',
          options: [
            'O e-mail é excluído definitivamente da lista.',
            'O e-mail continua sendo exibido, mas o ícone passa a ser "Reativar E-mail do Sistema".',
            'O e-mail é liberado para todos os usuários do órgão.',
            'O e-mail passa a ser do tipo "Envio".',
          ],
          correctIndex: 1,
          explanation:
            'O texto reforça que "uma vez desativado, o e-mail continua sendo exibido, porém o ícone de desativação agora é apresentado como \'Reativar E-mail do Sistema\'".',
        },
        {
          id: 'm6-q3',
          prompt: 'É possível incluir um novo e-mail automático no SEI?',
          options: [
            'Sim, pelo botão "Novo" na tela "E-mails do Sistema".',
            'Sim, mas apenas para usuários externos.',
            'Não, não é possível incluir novos e-mails automáticos do sistema.',
            'Sim, desde que o usuário tenha perfil "Administrador".',
          ],
          correctIndex: 2,
          explanation:
            'O bloco "Importante" da apostila afirma: "Não é possível incluir novos e-mails automáticos do sistema. Também não existe a opção de excluir definitivamente um e-mail."',
        },
        {
          id: 'm6-q4',
          prompt: 'Como consultar as variáveis do sistema disponíveis para compor o conteúdo do e-mail?',
          options: [
            'No ícone "Ajuda" localizado à direita de cada campo.',
            'Na coluna "Ações" da tabela de e-mails.',
            'No manual do SEI, capítulo de e-mails.',
            'Solicitando ao suporte de informática do órgão.',
          ],
          correctIndex: 0,
          explanation:
            'A apostila informa que as variáveis "são listadas ao se clicar no ícone \'Ajuda\' à direita de cada campo".',
        },
        {
          id: 'm6-q5',
          prompt: 'Qual campo do formulário contém a mensagem automática enviada ao usuário?',
          options: ['Descrição', 'Remetente', 'Assunto', 'Conteúdo'],
          correctIndex: 3,
          explanation:
            'O campo "Conteúdo" é descrito como o local da "mensagem automática que será enviada ao usuário".',
        },
        {
          id: 'm6-q6',
          prompt: 'Em que situações o SEI envia e-mails automáticos aos usuários?',
          options: [
            'Exclusivamente no cadastro de usuário externo.',
            'Ao cadastrar um usuário externo e, por exemplo, para conceder uma credencial em processo sigiloso.',
            'Somente no encerramento de processos.',
            'Sempre que um documento é assinado.',
          ],
          correctIndex: 1,
          explanation:
            'O texto cita duas situações: "ao cadastrar um usuário externo ou para conceder uma credencial em processo sigiloso".',
        },
      ],
    },
    {
      id: 'm6-feriados',
      slug: 'm6-feriados',
      title: 'Feriados',
      estimatedMinutes: 25,
      objectives: [
        'Explicar a finalidade do cadastro de feriados no monitoramento dos dias úteis.',
        'Navegar até a tela "Feriados" e usar o filtro por órgão.',
        'Criar, alterar e excluir feriados com os campos Órgão, Descrição e Data do Feriado.',
        'Configurar feriados por órgão em instalações multiórgãos.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Quando tratamos de processos administrativos, o controle e o respeito aos prazos são fundamentais. Nesse contexto, no SEI, há a possibilidade de inclusão de feriados, a fim de se monitorar os dias úteis do ano.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Cadastro anual',
          text: 'É importante lembrar que a lista de feriados deve ser atualizada anualmente pelo administrador do SEI no órgão.',
        },
        {
          kind: 'paragraph',
          text: 'Para configurar os feriados, o usuário com perfil "Administrador" acompanha o caminho descrito na apostila. Em seguida, abrirá uma nova tela denominada "Feriados", com um filtro por órgão e a lista de feriados.',
        },
        {
          kind: 'bullets',
          heading: 'Ações da coluna "Ações"',
          items: [
            'Alterar Feriado — edita os dados do feriado.',
            'Excluir Feriado — exclui definitivamente um feriado, que não será mais exibido na lista de feriados.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Incluir e alterar feriados',
          items: [
            'Acesse a tela "Feriados" com perfil "Administrador".',
            'Para incluir um novo feriado, clique no botão "Novo", localizado no menu superior à direita da tela.',
            'Preencha os campos do formulário: Órgão, Descrição e Data do Feriado.',
            'Use o filtro por órgão para localizar os registros das demais unidades em instalações multiórgãos.',
            'Salve a operação para concluir o cadastro ou a alteração.',
          ],
        },
        {
          kind: 'definitions',
          heading: 'Campos a serem preenchidos',
          items: [
            {
              term: 'Órgão',
              text: 'Campo disponível para instalações multiórgãos. Permite a seleção do órgão no qual aquele feriado se aplica. É interessante, por exemplo, nos casos de órgãos com sedes em cidades diferentes, onde poderão ser configurados feriados estaduais ou municipais.',
            },
            { term: 'Descrição', text: 'Campo no qual o nome do feriado é informado.' },
            { term: 'Data do Feriado', text: 'Campo no qual o dia do feriado é informado.' },
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Mantenha a lista de feriados sempre atualizada. Sem o cadastro correto, o sistema pode contabilizar dias não úteis como úteis e distorcer a contagem dos prazos dos processos.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Atenção às ações',
          text: 'O botão "Novo" cria feriados; a ação "Alterar Feriado" edita um registro existente e a ação "Excluir Feriado" o remove definitivamente da lista. Confira o registro selecionado antes de excluir.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Vídeo de apoio: https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo06video02.mp4',
        },
      ],
      keyPoints: [
        'Feriados alimentam o monitoramento dos dias úteis do ano.',
        'A lista deve ser atualizada anualmente pelo administrador do SEI.',
        'A tela "Feriados" possui filtro por órgão e lista de feriados.',
        'As ações disponíveis são "Alterar Feriado" e "Excluir Feriado".',
        'O formulário tem três campos: Órgão, Descrição e Data do Feriado.',
        'Em instalações multiórgãos, o campo Órgão permite feriados estaduais ou municipais por sede.',
      ],
      quiz: [
        {
          id: 'm6-q7',
          prompt: 'Qual a finalidade do cadastro de feriados no SEI?',
          options: [
            'Controlar a disponibilidade dos servidores.',
            'Monitorar os dias úteis do ano e apoiar o controle de prazos.',
            'Definir o horário de atendimento das unidades.',
            'Bloquear o acesso ao sistema em determinadas datas.',
          ],
          correctIndex: 1,
          explanation:
            'O texto afirma que "há a possibilidade de inclusão de feriados, a fim de se monitorar os dias úteis do ano".',
        },
        {
          id: 'm6-q8',
          prompt: 'Quem deve atualizar anualmente a lista de feriados?',
          options: [
            'Todos os usuários do órgão.',
            'O gestor de cada unidade.',
            'O administrador do SEI no órgão.',
            'A unidade de protocolo central.',
          ],
          correctIndex: 2,
          explanation:
            'A apostila destaca: "a lista de feriados deve ser atualizada anualmente pelo administrador do SEI no órgão".',
        },
        {
          id: 'm6-q9',
          prompt: 'Quantos campos há no formulário da ação "Alterar Feriado"?',
          options: ['Um', 'Dois', 'Três', 'Cinco'],
          correctIndex: 2,
          explanation: 'A tela de alteração apresenta três campos: Órgão, Descrição e Data do Feriado.',
        },
        {
          id: 'm6-q10',
          prompt: 'Qual a finalidade do campo "Órgão" no cadastro de feriados?',
          options: [
            'Identificar o órgão responsável pela manutenção do sistema.',
            'Selecionar o órgão no qual o feriado se aplica, útil em instalações multiórgãos.',
            'Definir o órgão que comunicou o feriado à unidade.',
            'Vincular o feriado ao gestor da unidade.',
          ],
          correctIndex: 1,
          explanation:
            'O campo "permite a seleção do órgão no qual aquele feriado se aplica", opção interessante em órgãos com sedes em cidades diferentes.',
        },
        {
          id: 'm6-q11',
          prompt: 'O que faz a ação "Excluir Feriado"?',
          options: [
            'Desativa o feriado, mantendo-o na listagem.',
            'Altera o feriado para o órgão selecionado no filtro.',
            'Exclui definitivamente o feriado, que não será mais exibido na lista de feriados.',
            'Libera o feriado para as demais unidades.',
          ],
          correctIndex: 2,
          explanation:
            'O material-fonte é claro: "Exclui definitivamente um feriado. Não será mais exibido na lista de feriados."',
        },
      ],
    },
    {
      id: 'm6-grupos-institucionais',
      slug: 'm6-grupos-institucionais',
      title: 'Grupos Institucionais',
      estimatedMinutes: 35,
      objectives: [
        'Reconhecer os tipos de grupos institucionais: Contatos, E-mails e Envio.',
        'Criar um grupo institucional de contatos com os campos Nome, Descrição e Contatos.',
        'Criar um grupo institucional de e-mail e um grupo de envio.',
        'Aplicar os grupos criados no envio de mensagens e no encaminhamento de processos.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Em algumas situações, é necessário enviar mensagens para mais de um destinatário, sejam servidores, unidades ou pessoas externas ao órgão. Para que essa tarefa não se torne um fardo sempre que precisar ser executada, podem-se criar grupos institucionais, agrupando diferentes tipos de destinatários.',
        },
        {
          kind: 'table',
          heading: 'Tipos de grupos institucionais',
          columns: ['Tipo', 'O que é agrupado', 'Exemplo de uso'],
          rows: [
            [
              'Contatos',
              'Contatos, agrupados conforme a conveniência do órgão.',
              'Os contatos podem ser de gestores e o grupo será composto pelos gestores daquele órgão.',
            ],
            [
              'E-mails',
              'E-mails, agrupados conforme a conveniência do órgão.',
              'Agrupar os e-mails de fornecedores daquela instituição.',
            ],
            [
              'Envio',
              'Unidades administrativas da instituição.',
              'Enviar comunicados circulares a todas as unidades do órgão ou a um grupo específico de unidades.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Perfil de acesso',
          text: 'Os grupos institucionais são criados somente por administradores, mas ficam disponíveis para os usuários de todas as unidades do órgão.',
        },
        {
          kind: 'steps',
          heading: 'Operacionalização: grupo de Contatos',
          items: [
            'Acesse o SEI, escolha o item "Administração" no menu principal e, em seguida, "Grupos Institucionais".',
            'Selecione "Contatos" e clique em "Novo".',
            'Na tela "Novo Grupo de Contatos Institucional", preencha os campos Nome, Descrição e Contatos.',
            'Para pesquisar um contato, digite o nome e aguarde a sugestão do sistema ou clique no ícone "Localizar Contato", que abrirá uma janela com os contatos disponíveis.',
            'Clique no botão "Salvar", localizado no canto superior direito da tela.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Operacionalização: grupo de E-mail',
          items: [
            'Em "Administração" > "Grupos Institucionais", selecione "E-mail" e clique em "Novo".',
            'Na tela "Novo Grupo de E-mails Institucional", preencha Nome, Descrição do Grupo, E-mail e Descrição do E-mail.',
            'Informe o endereço de e-mail desejado e a descrição do e-mail informado.',
            'Clique no botão "Salvar" para concluir a operação.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Operacionalização: grupo de Envio',
          items: [
            'Em "Administração" > "Grupos Institucionais", selecione "Envio" e clique em "Novo".',
            'Na tela "Novo Grupo de Envio Institucional", preencha Nome, Descrição do Grupo e Unidade.',
            'Para pesquisar uma unidade, digite o nome e aguarde a sugestão do sistema ou clique no ícone "Selecionar Unidades", que abrirá uma janela com as unidades disponíveis.',
            'Clique no botão "Salvar" para concluir a operação.',
          ],
        },
        {
          kind: 'bullets',
          heading: 'Aplicação dos grupos institucionais',
          items: [
            'O grupo de Contatos é utilizado por meio do item "Contatos".',
            'O grupo de E-mail é utilizado para o envio de e-mail a partir de um processo.',
            'O grupo de Envio é utilizado para o envio de um processo para outras unidades.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Grupos institucionais reduzem o esforço de montar listas de destinatários a cada envio: o grupo é criado uma vez e reutilizado em novas mensagens ou processos.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilha comum',
          text: 'A operação só é concluída após salvar. Sem clicar em "Salvar" no canto superior direito da tela, o grupo não é gravado e não ficará disponível aos usuários.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Vídeo de apoio: https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo06video03.mp4',
        },
      ],
      keyPoints: [
        'Grupos institucionais agregam destinatários recorrentes e evitam retrabalho.',
        'Os tipos são Contatos, E-mails e Envio.',
        'Nos grupos de Contatos e Envio a busca pode ser feita por nome ou por janela de seleção.',
        'O grupo de E-mails tem quatro campos; Contatos e Envio, três.',
        'Apenas administradores criam os grupos, mas todos os usuários das unidades podem usá-los.',
        'Aplicação: Contatos no item "Contatos", E-mail no envio a partir de um processo e Envio no envio do processo a outras unidades.',
      ],
      quiz: [
        {
          id: 'm6-q12',
          prompt: 'Quais são os tipos de grupos institucionais do SEI?',
          options: [
            'Contatos, E-mails e Envio.',
            'Servidores, Terceirizados e Visitantes.',
            'Unidades, Documentos e Assinaturas.',
            'Administradores, Gestores e Auditores.',
          ],
          correctIndex: 0,
          explanation: 'A apostila lista exatamente três tipos: Contatos, E-mails e Envio.',
        },
        {
          id: 'm6-q13',
          prompt: 'Qual grupo institucional é útil para enviar comunicados circulares a todas as unidades do órgão?',
          options: ['Contatos', 'E-mail', 'Envio', 'Nenhum deles'],
          correctIndex: 2,
          explanation:
            'O tipo "Envio" agrupa "unidades administrativas da instituição" e é descrito como útil "para enviar comunicados circulares a todas as unidades do órgão ou a um grupo específico de unidades".',
        },
        {
          id: 'm6-q14',
          prompt: 'Quem pode criar grupos institucionais?',
          options: [
            'Todos os usuários do órgão.',
            'Somente o gestor da unidade.',
            'Os usuários com perfil "Administrador".',
            'Somente os usuários externos cadastrados.',
          ],
          correctIndex: 2,
          explanation:
            'O bloco "Importante" afirma: "Os grupos institucionais são criados somente por administradores, mas ficam disponíveis para os usuários de todas as unidades do órgão."',
        },
        {
          id: 'm6-q15',
          prompt: 'Quais são os campos da tela "Novo Grupo de Envio Institucional"?',
          options: [
            'Nome, Descrição do Grupo e Unidade.',
            'Nome, Contatos e E-mail.',
            'Descrição, Data e Unidade.',
            'País, Estado e Nome.',
          ],
          correctIndex: 0,
          explanation:
            'A tela "Novo Grupo de Envio Institucional" é composta por três campos: Nome, Descrição do Grupo e Unidade.',
        },
        {
          id: 'm6-q16',
          prompt: 'No grupo institucional de Contatos, como se pesquisa um contato?',
          options: [
            'Digitando o nome e aguardando a sugestão do sistema, ou pelo ícone "Localizar Contato".',
            'Somente pelo ícone "Selecionar Unidades".',
            'Pela busca de usuários externos no cadastro de contatos.',
            'É necessário informar o CPF do contato.',
          ],
          correctIndex: 0,
          explanation:
            'O campo "Contatos" permite "digitar o nome e aguardar a sugestão do sistema" ou clicar no ícone "Localizar Contato", que abrirá uma janela com os contatos disponíveis.',
        },
        {
          id: 'm6-q17',
          prompt: 'Ao criar um grupo de e-mails, quais campos devem ser preenchidos?',
          options: [
            'Nome, Descrição do Grupo, E-mail e Descrição do E-mail.',
            'Nome, E-mail e Salvar.',
            'Descrição, Endereço e Unidade.',
            'Nome, Sigla e País.',
          ],
          correctIndex: 0,
          explanation:
            'A tela "Novo Grupo de E-mails Institucional" possui quatro campos: Nome, Descrição do Grupo, E-mail e Descrição do E-mail.',
        },
      ],
    },
    {
      id: 'm6-novidades',
      slug: 'm6-novidades',
      title: 'Novidades',
      estimatedMinutes: 25,
      objectives: [
        'Identificar a finalidade da funcionalidade "Novidades" na comunicação com todos os usuários.',
        'Cadastrar uma novidade preenchendo Título e Descrição.',
        'Liberar, alterar e excluir novidades pelas ações da tabela.',
        'Explicar as duas formas de apresentação das novidades liberadas aos usuários.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'No SEI, há uma funcionalidade chamada "Novidades", que serve para compartilhar informes com todos os usuários do sistema. É muito útil para informes que não necessitam de uma maior formalidade, como informar a respeito de uma manutenção que deixará o sistema fora do ar durante determinado período ou uma campanha de sensibilização dos servidores.',
        },
        {
          kind: 'paragraph',
          text: 'Para configurar as novidades, o usuário com perfil "Administrador" acompanha o caminho descrito na apostila. Ao clicar no botão "Nova", localizado no canto superior direito, abrirá a nova tela "Nova Novidade".',
        },
        {
          kind: 'definitions',
          heading: 'Campos a serem preenchidos',
          items: [
            {
              term: 'Título',
              text: 'Deve ser preenchido com informações sobre o nome daquela novidade. Essa informação é utilizada para o gerenciamento das novidades cadastradas no sistema.',
            },
            {
              term: 'Descrição',
              text: 'Campo destinado à construção da mensagem. É disponibilizado um editor de texto semelhante ao editor de documentos do sistema, sendo possível inserir imagens, tabelas ou formatar o texto da maneira mais conveniente.',
            },
          ],
        },
        {
          kind: 'bullets',
          heading: 'Ações disponíveis na tabela de novidades',
          items: [
            'Liberar Novidade — disponibiliza a novidade. Mesmo havendo a possibilidade de criar diversas novidades, apenas uma é liberada por vez. Caso não seja liberada, a novidade não ficará disponível para os usuários. Uma vez liberada, é apresentada a ação "Cancelar Disponibilização da Novidade".',
            'Alterar Novidade — edita o conteúdo da novidade.',
            'Excluir Novidade — exclui a novidade.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Apenas uma por vez',
          text: 'Apenas uma novidade pode estar liberada por vez. Cadastrar a novidade não a torna pública: é necessário usar a ação "Liberar Novidade".',
        },
        {
          kind: 'steps',
          heading: 'Aplicação de novidades: como chegam ao usuário',
          items: [
            'Após a liberação, a novidade é exibida em uma janela pop-up ao entrar no SEI, caso as pop-ups do navegador estejam disponíveis.',
            'A novidade também fica disponível no item "Novidades", localizado à direita na barra superior do SEI.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Use Novidades para avisos de curta duração e baixa formalidade, como manutenção do sistema ou sensibilização. Para comunicações oficiais, utilize os recursos formais de processo.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Vídeo de apoio: https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo06video04.mp4',
        },
      ],
      keyPoints: [
        'Novidades compartilham informes com todos os usuários do SEI.',
        'A tela "Nova Novidade" tem dois campos: Título e Descrição.',
        'A Descrição usa editor de texto com imagens, tabelas e formatação.',
        'Existem três ações: Liberar, Alterar e Excluir Novidade.',
        'Apenas uma novidade pode ser liberada por vez.',
        'Liberada, aparece como pop-up no acesso e no item "Novidades" da barra superior.',
      ],
      quiz: [
        {
          id: 'm6-q18',
          prompt: 'Para que serve a funcionalidade "Novidades"?',
          options: [
            'Substituir o Editor de Documentos do SEI.',
            'Compartilhar informes com todos os usuários do sistema.',
            'Controlar o prazo de resposta dos processos.',
            'Cadastrar usuários externos no órgão.',
          ],
          correctIndex: 1,
          explanation:
            'A apostila define: serve "para compartilhar informes com todos os usuários do sistema".',
        },
        {
          id: 'm6-q19',
          prompt: 'Quais campos compõem a tela "Nova Novidade"?',
          options: [
            'Título e Descrição.',
            'Título, Data e Órgão.',
            'Descrição, Assunto e Remetente.',
            'Nome, Tipo e Prioridade.',
          ],
          correctIndex: 0,
          explanation: 'A tela "Nova Novidade" contém dois campos: Título e Descrição.',
        },
        {
          id: 'm6-q20',
          prompt: 'Quantas novidades podem estar liberadas simultaneamente?',
          options: ['Apenas uma', 'Duas', 'Cinco', 'Todas as cadastradas'],
          correctIndex: 0,
          explanation:
            'O texto explica que "apenas uma é liberada por vez" e que a ação de liberar é substituída por "Cancelar Disponibilização da Novidade".',
        },
        {
          id: 'm6-q21',
          prompt: 'Onde a novidade liberada aparece para o usuário?',
          options: [
            'Em uma janela pop-up ao entrar no SEI e no item "Novidades" da barra superior.',
            'Exclusivamente por e-mail automático.',
            'No painel de processos abertos do usuário.',
            'Apenas na tela de login do SEI.',
          ],
          correctIndex: 0,
          explanation:
            'A novidade é disponibilizada de duas maneiras: janela pop-up no acesso (caso as pop-ups do navegador estejam disponíveis) e no item "Novidades", à direita na barra superior.',
        },
        {
          id: 'm6-q22',
          prompt: 'O que acontece ao cadastrar uma novidade sem liberá-la?',
          options: [
            'Ela fica disponível automaticamente para todos.',
            'Ela não fica disponível para os usuários até a ação "Liberar Novidade".',
            'Ela é excluída automaticamente.',
            'Ela é enviada por e-mail aos administradores.',
          ],
          correctIndex: 1,
          explanation:
            'O material é explícito: "Caso não seja liberada, a novidade não ficará disponível para os usuários."',
        },
      ],
    },
    {
      id: 'm6-paises-estados-cidades',
      slug: 'm6-paises-estados-cidades',
      title: 'Países, Estados e Cidades',
      estimatedMinutes: 35,
      objectives: [
        'Explicar a utilidade do cadastro de países, estados e cidades no SEI.',
        'Cadastrar um país pelo caminho "Países, Estados e Cidades" > "Países".',
        'Cadastrar um estado com País, Código IBGE, Sigla e Nome.',
        'Cadastrar uma cidade com País, Estado, Código IBGE, Nome, Capital, Latitude e Longitude.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'No SEI, há a possibilidade de cadastrar países, estados e cidades. Não se trata de uma lista rígida, podendo ser alterada para refletir o cenário geopolítico do momento ou a criação e fusão de municípios.',
        },
        {
          kind: 'bullets',
          heading: 'Onde o cadastro é utilizado',
          items: [
            'No cadastro de usuários externos.',
            'Na inclusão de um novo contato.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos por tipo de cadastro',
          columns: ['Tipo', 'Campos do formulário', 'Observações'],
          rows: [
            [
              'Países',
              'País',
              'Informe o nome do país que se quer criar e salve pelo botão "Salvar".',
            ],
            [
              'Estados',
              'País, Código IBGE, Sigla, Nome',
              'O "Código IBGE" só é habilitado quando o país selecionado for Brasil.',
            ],
            [
              'Cidades',
              'País, Estado, Código IBGE, Nome, Capital, Latitude, Longitude',
              '"Capital" é caixa de seleção; o "Código IBGE" só é habilitado quando o país selecionado for Brasil.',
            ],
          ],
        },
        {
          kind: 'steps',
          heading: 'Operacionalização: cadastrar um país',
          items: [
            'Acesse o SEI, escolha o item "Administração" no menu principal e, em seguida, "Países, Estados e Cidades".',
            'Selecione "Países" e clique em "Novo".',
            'Na nova tela, informe o nome do país no campo "País".',
            'Salve a operação clicando no botão "Salvar", localizado do lado direito da tela.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Operacionalização: cadastrar um estado',
          items: [
            'Em "Administração" > "Países, Estados e Cidades", selecione "Estados" e clique em "Novo".',
            'Na tela "Novo Estado", selecione o "País" ao qual pertence o estado.',
            'Informe o "Código IBGE" (habilitado somente para o Brasil), a "Sigla" e o "Nome".',
            'Salve a operação.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Operacionalização: cadastrar uma cidade',
          items: [
            'Em "Administração" > "Países, Estados e Cidades", selecione "Cidades" e clique em "Novo".',
            'Na tela "Nova Cidade", selecione "País" e "Estado" aos quais a cidade pertence.',
            'Informe o "Código IBGE" (habilitado somente para o Brasil) e o "Nome" da cidade.',
            'Selecione a caixa de seleção "Capital" caso a cidade seja capital de estado.',
            'Informe "Latitude" e "Longitude" da cidade.',
            'Salve a operação.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Mantenha a lista atualizada, pois ela não é rígida e deve refletir o cenário geopolítico do momento, incluindo a criação e fusão de municípios, evitando cadastros desatualizados de contatos e usuários externos.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Campo condicional',
          text: 'O campo "Código IBGE" permanece desabilitado enquanto o país selecionado não for Brasil, tanto em estados quanto em cidades.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Vídeo de apoio: https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo06video05.mp4',
        },
      ],
      keyPoints: [
        'O cadastro não é uma lista rígida: acompanha mudanças geopolíticas e fusões de municípios.',
        'É usado no cadastro de usuários externos e na inclusão de contatos.',
        'País: um único campo, "País".',
        'Estado: País, Código IBGE, Sigla e Nome.',
        'Cidade: País, Estado, Código IBGE, Nome, Capital, Latitude e Longitude.',
        'O "Código IBGE" só é habilitado quando o país é Brasil; "Capital" é caixa de seleção.',
      ],
      quiz: [
        {
          id: 'm6-q23',
          prompt: 'Quantos campos há na tela "Novo Estado"?',
          options: ['Dois', 'Três', 'Quatro', 'Sete'],
          correctIndex: 2,
          explanation:
            'A tela "Novo Estado" é composta por quatro campos: País, Código IBGE, Sigla e Nome.',
        },
        {
          id: 'm6-q24',
          prompt: 'Quando o campo "Código IBGE" é habilitado?',
          options: [
            'Sempre, em qualquer cadastro.',
            'Somente quando o país selecionado for Brasil.',
            'Apenas para cidades capitais.',
            'Somente quando a sigla do estado for preenchida.',
          ],
          correctIndex: 1,
          explanation:
            'A apostila informa, para estados e para cidades: "Só é habilitado quando o país selecionado for Brasil".',
        },
        {
          id: 'm6-q25',
          prompt: 'Quais campos compõem a tela "Nova Cidade"?',
          options: [
            'País, Estado, Nome e Sigla.',
            'País, Estado, Código IBGE, Nome, Capital, Latitude e Longitude.',
            'País, Estado, Código IBGE e Capital.',
            'País, Nome, Latitude e Longitude.',
          ],
          correctIndex: 1,
          explanation:
            'A tela "Nova Cidade" é composta por sete campos: País, Estado, Código IBGE, Nome, Capital, Latitude e Longitude.',
        },
        {
          id: 'm6-q26',
          prompt: 'Qual a finalidade do cadastro de países, estados e cidades?',
          options: [
            'Definir a jurisdição dos processos do órgão.',
            'Substituir o cadastro de unidades administrativas.',
            'Gerar relatórios por localidade no SEI.',
            'Apoiar cadastros de usuários externos e contatos.',
          ],
          correctIndex: 3,
          explanation:
            'O texto afirma que o cadastro "é útil em várias situações do sistema, como no cadastro de usuários externos ou na inclusão de um novo contato".',
        },
        {
          id: 'm6-q27',
          prompt: 'Como o campo "Capital" deve ser preenchido?',
          options: [
            'Com o texto "Sim" ou "Não".',
            'Com o código IBGE da cidade.',
            'Selecionando a caixa de seleção quando a cidade for capital de estado.',
            'Com o valor "1".',
          ],
          correctIndex: 2,
          explanation:
            'O campo "Capital" é uma caixa de seleção que deve ser marcada caso a cidade seja capital de estado.',
        },
        {
          id: 'm6-q28',
          prompt: 'Por que o cadastro de países, estados e cidades não pode ser considerado uma lista rígida?',
          options: [
            'Porque o SEI não permite alterar registros geográficos.',
            'Porque pode ser alterado para refletir o cenário geopolítico do momento ou a criação e fusão de municípios.',
            'Porque os dados são importados automaticamente do IBGE.',
            'Porque cada usuário mantém sua própria lista.',
          ],
          correctIndex: 1,
          explanation:
            'O material afirma: "Não se trata de uma lista rígida, podendo ser alterada para refletir o cenário geopolítico do momento ou a criação e fusão de municípios."',
        },
      ],
    },
  ],
};
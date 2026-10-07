import type { CourseModule } from './types.js';

export const modulo2: CourseModule = {
  id: 'mod-2',
  slug: 'estrutura-organizacional',
  title: 'Módulo 2 — Estrutura Organizacional',
  subtitle: 'Criação de órgãos, configuração de unidades e montagem da hierarquia no SIP e no SEI',
  description:
    'Estrutura organizacional de uma instalação do SEI: cadastro de órgãos no SIP, configuração de órgãos no menu Administração do SEI, criação de unidades administrativas, montagem da hierarquia e cadastro dos dados de cada unidade. O módulo acompanha, passo a passo e com o organograma do ministério fictício XPTO como referência, todas as funcionalidades de estrutura organizacional disponíveis ao perfil Administrador.',
  sourceRef:
    'Módulo 2 - Estrutura Organizacional.pdf (Enap, curso SEI! Administrar, 2019)',
  estimatedMinutes: 215,
  objectives: [
    'Diferenciar a instalação de órgão único da instalação multiórgãos e identificar em que sistema cada tarefa deve ser realizada.',
    'Cadastrar um novo órgão no SIP por meio da funcionalidade "Novo Órgão" e utilizar as ações da tela de listagem de órgãos.',
    'Configurar um órgão recém-criado no SEI, incluindo códigos, contato associado, formato de numeração, permissões, corretor ortográfico e timbre.',
    'Criar unidades administrativas no SIP e listar, consultar, alterar, desativar, reativar e excluir unidades.',
    'Montar a hierarquia das unidades no SIP, refletindo o organograma da instituição, para tornar as unidades acessíveis no SEI.',
    'Configurar os dados de cada unidade no SEI por meio da ação "Alterar Unidade", incluindo códigos, contatos, e-mails e checkboxes de competência.',
  ],
  lessons: [
    {
      id: 'm2-criacao-orgaos',
      slug: 'm2-criacao-orgaos',
      title: 'Aula 1 — Órgãos no SEI: onde cadastrar e onde configurar',
      estimatedMinutes: 25,
      objectives: [
        'Diferenciar a instalação de órgão único da instalação multiórgãos.',
        'Identificar em qual sistema (SIP ou SEI) o órgão deve ser cadastrado e em qual sistema deve ser configurado.',
        'Reconhecer o perfil de usuário exigido para cada uma dessas tarefas.',
        'Interpretar o organograma do Ministério fictício XPTO como referência dos exemplos do módulo.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O SEI pode ser configurado para ser utilizado por um único órgão ou para ser compartilhado por um conjunto de órgãos, por meio de uma instalação multiórgãos. Essa decisão define o trabalho de estruturação que o administrador precisará fazer no ambiente.',
        },
        {
          kind: 'definitions',
          heading: 'Conceitos iniciais',
          items: [
            {
              term: 'Instalação de órgão único',
              text: 'Situação em que apenas uma instituição utiliza o SEI. Nesse caso, a indicação do nome e da sigla do órgão é feita durante o processo de instalação da ferramenta.',
            },
            {
              term: 'Instalação multiórgãos',
              text: 'Situação em que um conjunto de instituições utiliza a mesma instalação do SEI. Nesse caso, cada novo órgão deve ser cadastrado no SIP e configurado no SEI.',
            },
            {
              term: 'SIP',
              text: 'Sistema em que são cadastrados os novos órgãos e as novas unidades administrativas, bem como em que é montada a hierarquia entre as unidades.',
            },
            {
              term: 'Órgão raiz (ID 0)',
              text: 'Órgão identificado com o identificador 0, presente na instalação. Em instalações multiórgãos, é por ele que se acessa a configuração dos demais órgãos recém-criados.',
            },
          ],
        },
        {
          kind: 'bullets',
          heading: 'Regra de ouro da estrutura organizacional',
          items: [
            'Para cadastrar novos órgãos e novas unidades no SEI, utiliza-se o SIP.',
            'Para configurar os órgãos e as unidades recém-criados, utiliza-se o menu "Administração" do SEI.',
            'Ambas as tarefas exigem usuário com perfil "Administrador", porém no sistema correspondente: Administrador no SIP e Administrador no SEI.',
            'A montagem da hierarquia também ocorre no SIP, e é pré-requisito para que a unidade fique visível e acessível no SEI.',
          ],
        },
        {
          kind: 'table',
          heading: 'Tarefa x sistema x perfil',
          columns: ['Tarefa', 'Sistema utilizado', 'Perfil exigido'],
          rows: [
            ['Cadastrar um novo órgão', 'SIP', 'Administrador'],
            ['Cadastrar novas unidades administrativas', 'SIP', 'Administrador'],
            ['Montar a hierarquia entre as unidades', 'SIP', 'Administrador'],
            ['Configurar um órgão recém-criado', 'SEI (menu "Administração")', 'Administrador do SEI'],
            ['Configurar os dados de uma unidade', 'SEI (menu "Administração")', 'Administrador do SEI'],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilha: configurar antes de cadastrar',
          text: 'Não tente configurar no SEI um órgão ou uma unidade que ainda não foi cadastrado no SIP. Sem o cadastro no SIP, o órgão não aparece na relação de órgãos do SEI e a unidade sequer fica visível na interface. A ordem correta é sempre: cadastrar no SIP, configurar no SEI e, para as unidades, montar a hierarquia no SIP.',
        },
        {
          kind: 'paragraph',
          text: 'Para facilitar o entendimento e exemplificar de forma prática o conteúdo do módulo, todos os exemplos utilizam o organograma do ministério fictício XPTO, com sigla XPTO e nome "Ministério fictício XPTO". Esse organograma será a referência para criar as unidades e para montar a hierarquia.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Organize o trabalho antes de abrir o sistema',
          text: 'Antes de cadastrar qualquer coisa, tenha em mãos o organograma vigente e a lista de unidades com siglas. Cadastrar unidades fora do organograma, ou com siglas divergentes das oficiais, dificulta a montagem da hierarquia e a configuração dos dados no SEI.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Roteiro de estudo do módulo',
          text: 'Orgao no SIP (Aulas 2) -> Configuracao do orgao no SEI (Aula 3) -> Unidades no SIP (Aula 4) -> Hierarquia no SIP (Aula 5) -> Configuracao das unidades no SEI (Aula 6).',
        },
      ],
      keyPoints: [
        'SEI de órgão único: nome e sigla definidos na instalação.',
        'SEI multiórgãos: cada novo órgão é cadastrado no SIP e configurado no SEI.',
        'SIP cadastra e hierarquiza; SEI configura.',
        'Perfil "Administrador" é exigido nos dois sistemas.',
        'Órgão raiz é o de ID 0.',
        'Todos os exemplos usam o organograma do Ministério XPTO.',
      ],
      quiz: [
        {
          id: 'm2-l1-q1',
          prompt:
            'Na instalação do SEI para uma única instituição, quando o nome e a sigla do órgão são definidos?',
          options: [
            'Durante o processo de instalação da ferramenta.',
            'No momento do primeiro acesso ao SEI, pelo menu "Administração".',
            'Na criação da primeira unidade administrativa da instituição.',
            'Após a montagem da hierarquia no SIP.',
          ],
          correctIndex: 0,
          explanation:
            'O material informa que, no caso de utilização do sistema por uma única instituição, a indicação do nome e da sigla do órgão é feita durante o processo de instalação da ferramenta. A configuração pelo menu "Administração" é indicada para a instalação multiórgãos.',
        },
        {
          id: 'm2-l1-q2',
          prompt:
            'Em uma instalação multiórgãos, qual é a sequência correta para disponibilizar um novo órgão aos usuários?',
          options: [
            'Configurar no SEI e depois cadastrar no SIP.',
            'Cadastrar no SIP, configurar no SEI e montar a hierarquia das unidades.',
            'Cadastrar no SEI, cadastrar no SIP e criar as unidades.',
            'Montar a hierarquia no SIP e só depois cadastrar o órgão no SEI.',
          ],
          correctIndex: 1,
          explanation:
            'Cada novo órgão deve ser cadastrado no SIP e configurado no SEI; somente depois disso as unidades são criadas no SIP e a hierarquia é montada. Sem a hierarquia montada, as unidades não ficam acessíveis no SEI.',
        },
        {
          id: 'm2-l1-q3',
          prompt: 'Qual perfil de usuário é necessário para cadastrar novos órgãos no SIP?',
          options: [
            'Usuário com perfil "Administrador".',
            'Qualquer usuário cadastrado no órgão raiz.',
            'Usuário com perfil "Ouvidoria".',
            'Usuário com perfil "Unidade de protocolo".',
          ],
          correctIndex: 0,
          explanation:
            'Para inserir um novo órgão no SIP, o usuário deve ter o perfil "Administrador". A configuração no SEI, por sua vez, exige o perfil "Administrador" do SEI.',
        },
        {
          id: 'm2-l1-q4',
          prompt:
            'Qual sistema é utilizado para configurar os órgãos recém-criados em uma instalação multiórgãos?',
          options: [
            'O SIP, por meio da funcionalidade "Novo Órgão".',
            'O menu "Administração" do SEI.',
            'A tela inicial de login do SEI.',
            'O cadastro de usuários do SIP.',
          ],
          correctIndex: 1,
          explanation:
            'O material é enfático: para cadastrar novos órgãos no SEI utiliza-se o SIP, porém para configurar os órgãos recém-criados utiliza-se o menu "Administração" do SEI.',
        },
        {
          id: 'm2-l1-q5',
          prompt:
            'Por que o material recomenda não excluir o órgão raiz do sistema (ID 0)?',
          options: [
            'Porque o órgão raiz não pode ser desativado.',
            'Porque essa operaçãodisable a exibição da hierarquia.',
            'Porque essa operação faz com que seja necessário reinstalar o sistema.',
            'Porque o órgão raiz é o único que possui usuário "Administrador".',
          ],
          correctIndex: 2,
          explanation:
            'O aviso "Importante" do material diz exatamente isso: não é recomendado excluir o órgão raiz (ID 0), pois a operação obrigará a reinstalar o sistema.',
        },
      ],
    },
    {
      id: 'm2-novo-orgao',
      slug: 'm2-novo-orgao',
      title: 'Aula 2 — Funcionalidade "Novo Órgão" no SIP',
      estimatedMinutes: 35,
      objectives: [
        'Cadastrar um novo órgão no SIP por meio da funcionalidade "Novo Órgão".',
        'Preencher corretamente os campos Sigla, Descrição, Ordem e Autenticar Usuários neste Órgão.',
        'Diferenciar desativar, reativar e excluir órgãos.',
        'Listar e consultar os órgãos cadastrados no SIP.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A criação de órgãos no SIP deve ser utilizada para os casos de utilização do SEI por mais de uma instituição, no formato multiórgãos. Nesses casos, os demais órgãos que utilizarão a ferramenta serão criados no SIP.',
        },
        {
          kind: 'steps',
          heading: 'Inserindo um novo órgão no SIP',
          items: [
            'Acesse o SIP com usuário de perfil "Administrador".',
            'No menu principal, selecione "Órgãos" e clique na opção "Novo".',
            'Na tela "Novo Órgão", preencha os campos Sigla, Descrição e Ordem.',
            'Se houver servidores de autenticação associados ao órgão, marque a checkbox "Autenticar Usuários neste Órgão" e informe os servidores. Caso contrário, deixe a checkbox desmarcada.',
            'Clique no botão "Salvar".',
            'Após o salvamento, o órgão é criado e é exibida a lista de todos os órgãos pertencentes àquela estrutura.',
          ],
        },
        {
          kind: 'table',
          heading: 'Formulário "Novo Órgão"',
          columns: ['Campo', 'Preenchimento'],
          rows: [
            [
              'Sigla',
              'Sigla oficial do órgão. No exemplo do material, "XPTO".',
            ],
            [
              'Descrição',
              'Nome completo do órgão. No exemplo do material, "Ministério fictício XPTO".',
            ],
            [
              'Ordem',
              'Define a posição do órgão na lista da tela de login do SEI. Órgãos com o mesmo valor (por exemplo "0") serão ordenados alfabeticamente pela sigla.',
            ],
            [
              'Autenticar Usuários neste Órgão',
              'Checkbox. Ao selecioná-la, aparece outro campo para a indicação dos servidores de autenticação associados, caso existam.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Confira a lista depois de salvar',
          text: 'Ao selecionar o menu "Órgãos" e clicar em "Listar", é exibida a mesma lista com todos os órgãos já criados no SIP, incluindo o órgão recém-criado. Use essa conferência para evitar cadastros duplicados antes de partir para a configuração no SEI.',
        },
        {
          kind: 'bullets',
          heading: 'Por que o campo "Ordem" merece atenção',
          items: [
            'Ele controla a posição do órgão na lista apresentada na tela de login do SEI.',
            'Órgãos que compartilham o mesmo valor nesse campo são ordenados alfabeticamente pela sigla.',
            'Como a lista de login é a primeira contato do usuário com o sistema, a ordenação correta facilita a usabilidade e evita dúvidas de acesso.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Na tela de listagem de órgãos, ainda é possível realizar quatro ações, disponíveis na coluna de ações de cada linha:',
        },
        {
          kind: 'table',
          heading: 'Ações disponíveis na tela "Órgãos" do SIP',
          columns: ['Ação', 'O que faz'],
          rows: [
            ['Consultar órgão', 'Permite consultar os dados cadastrais do órgão.'],
            ['Alterar órgão', 'Permite alterar os dados cadastrais do órgão.'],
            [
              'Desativar órgão',
              'Remove o órgão da lista, mas permite consultá-la novamente e reativá-lo pelo menu "Órgãos", opção "Reativar".',
            ],
            [
              'Excluir órgão',
              'Exclui definitivamente o órgão; não é possível recuperá-lo posteriormente.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilha: excluir em vez de desativar',
          text: 'Se o órgão apenas deixou de ser usado, mas pode voltar a ser útil, utilize "Desativar". A exclusão é definitiva. E nunca exclua o órgão raiz do sistema (ID 0), pois a operação fará com que seja necessário reinstalar o sistema.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Vídeo de reforço',
          text: 'A apostila indica o vídeo a seguir para reforçar o aprendizado da funcionalidade "Novo Órgão": https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo02video01.mp4',
        },
      ],
      keyPoints: [
        'Órgãos são cadastrados no SIP por usuário com perfil "Administrador".',
        'O formulário "Novo Órgão" tem os campos Sigla, Descrição, Ordem e a checkbox de autenticação.',
        'O campo Ordem posiciona o órgão na tela de login do SEI.',
        'Valores iguais em Ordem ordenam os órgãos alfabeticamente pela sigla.',
        'Desativar permite reativar; excluir é definitivo.',
        'Não excluir o órgão raiz (ID 0).',
      ],
      quiz: [
        {
          id: 'm2-l2-q1',
          prompt: 'Quais campos compõem o formulário "Novo Órgão" no SIP?',
          options: [
            'Sigla, Descrição, Ordem e Autenticar Usuários neste Órgão.',
            'Sigla, Descrição, Endereço e Telefone.',
            'Descrição, Ordem, Número de controle e Timbre.',
            'Órgão, Sigla, Descrição e ID Origem.',
          ],
          correctIndex: 0,
          explanation:
            'A tela "Novo Órgão" apresenta exatamente os campos Sigla, Descrição, Ordem e a checkbox "Autenticar Usuários neste Órgão". Endereço, e-mail e telefones são cadastrados depois, na seção "Contato Associado" do formulário de configuração no SEI.',
        },
        {
          id: 'm2-l2-q2',
          prompt: 'Qual a finalidade do campo "Ordem" no cadastro de um órgão?',
          options: [
            'Definir o número de controle interno do órgão no SEI.',
            'Alterar a posição do órgão na lista da tela de login do SEI.',
            'Indicar a quantidade de unidades do órgão.',
            'Vincular o órgão a um servidor de autenticação.',
          ],
          correctIndex: 1,
          explanation:
            'O campo Ordem trata-se de um campo que permite alterar a posição do órgão na lista da tela de login do SEI. Órgãos compartilhando o mesmo valor para esse campo serão ordenados alfabeticamente pela sigla.',
        },
        {
          id: 'm2-l2-q3',
          prompt:
            'Ao selecionar a checkbox "Autenticar Usuários neste Órgão", o que acontece?',
          options: [
            'O órgão passa a ser listado automaticamente na tela de login do SEI.',
            'Aparece outro campo para a indicação dos servidores de autenticação associados, caso existam.',
            'O sistema exige o preenchimento da data de início de vigência do órgão.',
            'O órgão passa a exigir senha para autenticação de documentos.',
          ],
          correctIndex: 1,
          explanation:
            'Conforme o material, ao selecionar esta checkbox aparecerá outro campo para a indicação dos servidores de autenticação associados, caso existam. A seleção é opcional.',
        },
        {
          id: 'm2-l2-q4',
          prompt:
            'Dois órgãos foram cadastrados com o mesmo valor no campo "Ordem". Como eles serão apresentados na tela de login do SEI?',
          options: [
            'Pela ordem de cadastro no SIP.',
            'Pela ordem alfabética da descrição.',
            'Pela ordem alfabética da sigla.',
            'Pela ordem numérica do identificador interno.',
          ],
          correctIndex: 2,
          explanation:
            'Órgãos compartilhando o mesmo valor para o campo Ordem (por exemplo "0") serão ordenados alfabeticamente pela sigla.',
        },
        {
          id: 'm2-l2-q5',
          prompt:
            'Um órgão foi desativado e precisa voltar a aparecer na lista. Qual caminho deve ser utilizado no SIP?',
          options: [
            'Menu "Órgãos" e opção "Reativar".',
            'Menu "Órgãos" e opção "Alterar".',
            'Menu "Unidades" e opção "Reativar".',
            'Menu "Hierarquias" e opção "Montar".',
          ],
          correctIndex: 0,
          explanation:
            'A ação "Desativar órgão" remove o órgão da lista, porém é possível consultar a lista de órgãos desativados, bem como reativá-los, acessando o menu "Órgãos" e clicando em "Reativar".',
        },
        {
          id: 'm2-l2-q6',
          prompt:
            'O que o usuário vê imediatamente após clicar em "Salvar" no formulário "Novo Órgão"?',
          options: [
            'A tela de login do SEI já com o novo órgão disponível.',
            'A lista de todos os órgãos pertencentes àquela estrutura.',
            'O formulário de configuração do órgão no SEI.',
            'Uma tela em branco, sem qualquer informação.',
          ],
          correctIndex: 1,
          explanation:
            'Com isso, o órgão será criado e será exibida a lista de todos os órgãos pertencentes àquela estrutura. A tela em branco após o salvamento é característica da criação de unidades no SIP, não de órgãos.',
        },
      ],
    },
    {
      id: 'm2-configuracao-orgaos',
      slug: 'm2-configuracao-orgaos',
      title: 'Aula 3 — Configuração de Órgãos no SEI',
      estimatedMinutes: 45,
      objectives: [
        'Acessar a funcionalidade "Configuração de Órgãos" pelo menu "Administração" do SEI.',
        'Preencher a seção "Códigos" com número de controle interno, Siorg ou código de Unidade Protocolizadora.',
        'Compor o formato de numeração do NUP com as variáveis do SEI.',
        'Configurar as permissões das unidades, o corretor ortográfico e o timbre do órgão.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A configuração de órgãos deve ser realizada no SEI após a criação do órgão no SIP. É necessário que o usuário com o perfil "Administrador" do SEI acesse o Sistema Eletrônico de Informações com seu login e senha.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Ambiente de demonstração: usuário "teste"',
          text: 'Como ainda não foram cadastrados usuários para o órgão, o material utiliza o usuário "teste" e a senha "teste" no órgão raiz (ID 0) para acessar o menu que permite a configuração do órgão recém-criado. Em produção, o acesso deve ser feito com usuário real do perfil "Administrador".',
        },
        {
          kind: 'steps',
          heading: 'Caminho até o formulário de configuração',
          items: [
            'Acesse o SEI com login e senha de usuário com perfil "Administrador".',
            'Entre pelo ambiente do órgão raiz (ID 0).',
            'Acesse o menu "Administração" e clique na opção "Órgãos".',
            'Na tela "Órgãos", localize o órgão desejado e clique no ícone "Alterar Órgão", disponível na coluna "Ações", do lado direito da tabela.',
            'Preencha as seções do formulário e clique em "Salvar", no canto superior direito da tela.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Na tela "Órgãos" do SEI é exibida a relação de órgãos cadastrados no ambiente, e duas ações estão disponíveis: consultar órgão, para ver os dados cadastrados, e alterar órgão, para cadastrar os dados daquele órgão.',
        },
        {
          kind: 'table',
          heading: 'Seções do formulário "Alterar Órgão"',
          columns: ['Seção', 'Conteúdo'],
          rows: [
            [
              '1. Códigos',
              'Dois campos numéricos: SIP (preenchido automaticamente) e SEI (número de controle do órgão).',
            ],
            [
              '2. Contato Associado',
              'Sigla, Nome e a opção "Alterar dados do contato associado", que abre a tela de endereço, e-mail e telefones.',
            ],
            [
              '3. Formato de numeração',
              'Configuração do formato do número do processo, composto com as variáveis oferecidas pelo SEI.',
            ],
            [
              '4. Checkboxes',
              'Duas opções: "As unidades deste órgão podem receber processos" e "As unidades deste órgão podem publicar documentos".',
            ],
            [
              '5. Corretor Ortográfico',
              'Seleção entre Nenhum, Nativo do Navegador e Licenciado.',
            ],
            ['6. Timbre', 'Seleção da imagem exibida no topo dos documentos criados na instituição.'],
          ],
        },
        {
          kind: 'table',
          heading: 'Seção "Códigos"',
          columns: ['Campo', 'Preenchimento'],
          rows: [
            [
              'SIP',
              'Preenchido automaticamente. Refere-se ao número de controle interno de relacionamento do SIP com o SEI. Não é recomendada sua alteração.',
            ],
            [
              'SEI',
              'Deve ser preenchido com um número de controle do órgão. Pode ser um código interno da instituição, Siorg ou mesmo um código de Unidade Protocolizadora (UP).',
            ],
          ],
        },
        {
          kind: 'paragraph',
          text: 'A seção "Contato Associado" é dividida em três partes: Sigla (sigla associada ao órgão cadastrado), Nome (nome completo do órgão) e "Alterar dados do contato associado", opção que abre uma tela para cadastro de endereço, e-mail e telefones do órgão.',
        },
        {
          kind: 'paragraph',
          text: 'A seção "Formato de numeração" destina-se à configuração do formato do número do processo. No Poder Executivo Federal, o padrão numérico adotado é o Número Único de Protocolo (NUP). Para compô-lo, são utilizadas as variáveis oferecidas pelo SEI, que se caracterizam por estarem entre @. Ao clicar no ícone "Ajuda", ao lado direito do campo, é exibida a lista com todas as variáveis possíveis para composição do número.',
        },
        {
          kind: 'table',
          heading: 'Variáveis para compor o NUP',
          columns: ['Parte do número', 'Variável'],
          rows: [
            ['Código da UP', '@cod_unidade_sei_05d@'],
            ['Sequencial numérico', '@seq_anual_cod_unidade_sei_06d@'],
            ['Ano do documento', '@ano_4d@'],
            ['Dígito verificador', '@dv_mod11_executivo_federal_2d@'],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilha: esquecer a máscara do NUP',
          text: 'A máscara do número (sinais como "/", "." e "-") deve ser inserida manualmente no momento de compor a numeração. Além disso, a informação "05d" presente no código da UP indica a quantidade de dígitos do campo: neste caso, 5 dígitos. Sem o preenchimento correto da máscara, o número do processo sai com formato inválido.',
        },
        {
          kind: 'definitions',
          heading: 'Seção "Checkboxes" do órgão',
          items: [
            {
              term: 'As unidades deste órgão podem receber processos',
              text: 'Ao selecionar, as unidades do órgão ficam disponíveis para receber processos. Deve-se desmarcar nos casos em que não é interessante que as unidades recebam processo, por exemplo, no caso de extinção de um órgão.',
            },
            {
              term: 'As unidades deste órgão podem publicar documentos',
              text: 'Ao selecionar, as unidades poderão publicar os documentos selecionados nos veículos de publicação disponíveis no SEI.',
            },
          ],
        },
        {
          kind: 'definitions',
          heading: 'Seção "Corretor Ortográfico"',
          items: [
            {
              term: 'Nenhum',
              text: 'Nenhum corretor ortográfico será utilizado no editor de textos do SEI.',
            },
            {
              term: 'Nativo do Navegador',
              text: 'O editor de textos usará o próprio corretor do navegador, gerando variação de comportamento conforme o navegador (por exemplo, Mozilla Firefox, Google Chrome, Internet Explorer).',
            },
            {
              term: 'Licenciado',
              text: 'Opção indicada para instituições que adquirirem solução exclusiva de corretor ortográfico. Ao selecioná-la, é exibido um campo para informar o endereço do servidor do corretor adquirido pelo órgão.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Timbre e redação oficial',
          text: 'A seção "Timbre" permite selecionar a imagem que servirá como timbre do órgão, exibida no topo dos documentos criados na instituição. A imagem pode representar a logo da instituição ou outro símbolo, sempre respeitando os padrões estabelecidos de redação oficial. O formato recomendado para a imagem é o ".png". No material, é usado o Brasão da República. Lembre-se de salvar a operação clicando no botão "Salvar", localizado na parte superior direita da tela.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Vídeo de reforço',
          text: 'Vídeo indicado para a funcionalidade "Configuração de Órgãos": https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo02video02.mp4',
        },
      ],
      keyPoints: [
        'A configuração do órgão é feita no SEI, menu "Administração" > "Órgãos" > "Alterar Órgão".',
        'Campo SIP é automático e não deve ser alterado; campo SEI recebe número de controle do órgão.',
        'O NUP é montado com variáveis entre @, inserindo-se a máscara manualmente.',
        'Desmarcar "unidades podem receber processos" em órgãos extintos.',
        'O corretor pode ser Nenhum, Nativo do Navegador ou Licenciado.',
        'O timbre deve respeitar a redação oficial e recomenda-se o formato ".png".',
      ],
      quiz: [
        {
          id: 'm2-l3-q1',
          prompt: 'Onde a configuração de um órgão recém-criado deve ser realizada?',
          options: [
            'No SIP, pela funcionalidade "Novo Órgão".',
            'No SEI, pelo menu "Administração".',
            'No SEI, pela tela de login.',
            'No SIP, pelo menu "Hierarquias".',
          ],
          correctIndex: 1,
          explanation:
            'O cadastro é feito no SIP, mas a configuração dos órgãos recém-criados utiliza o menu "Administração" do SEI, com usuário de perfil "Administrador" do SEI.',
        },
        {
          id: 'm2-l3-q2',
          prompt: 'Sobre o campo "SIP" na seção "Códigos" do formulário de órgão, é correto afirmar que:',
          options: [
            'Deve ser preenchido manualmente com o código Siorg do órgão.',
            'É preenchido automaticamente e refere-se ao número de controle interno de relacionamento do SIP com o SEI; não é recomendada sua alteração.',
            'É preenchido automaticamente com o código da Unidade Protocolizadora.',
            'Só deve ser preenchido quando o órgão for importado de outro servidor.',
          ],
          correctIndex: 1,
          explanation:
            'O campo SIP é preenchido automaticamente e refere-se ao número de controle interno de relacionamento do SIP com o SEI. O material ressalva que não é recomendada a sua alteração.',
        },
        {
          id: 'm2-l3-q3',
          prompt: 'Qual é a finalidade do ícone "Ajuda" ao lado direito do campo de formato de numeração?',
          options: [
            'Salvar a numeração configurada.',
            'Exibir a lista com todas as variáveis possíveis para composição do número.',
            'Testar a numeração com um processo fictício.',
            'Copiar a numeração padrão de outro órgão.',
          ],
          correctIndex: 1,
          explanation:
            'Ao clicar no ícone "Ajuda" será exibida uma lista com todas as variáveis possíveis para composição do número. No SEI, as variáveis se caracterizam por estarem entre @.',
        },
        {
          id: 'm2-l3-q4',
          prompt:
            'Na composição do NUP, o dígito verificador do Poder Executivo Federal é representado pela variável:',
          options: [
            '@seq_anual_cod_unidade_sei_06d@',
            '@cod_unidade_sei_05d@',
            '@dv_mod11_executivo_federal_2d@',
            '@ano_4d@',
          ],
          correctIndex: 2,
          explanation:
            'As partes do NUP são: Código da UP (@cod_unidade_sei_05d@), Sequencial numérico (@seq_anual_cod_unidade_sei_06d@), Ano do documento (@ano_4d@) e Dígito verificador (@dv_mod11_executivo_federal_2d@).',
        },
        {
          id: 'm2-l3-q5',
          prompt:
            'Um órgão foi extinto e não deve mais receber processos. Qual ação é correta no formulário?',
          options: [
            'Desmarcar "As unidades deste órgão podem receber processos".',
            'Marcar "As unidades deste órgão podem publicar documentos".',
            'Selecionar o corretor ortográfico "Nenhum".',
            'Excluir o timbre do órgão para interromper o fluxo.',
          ],
          correctIndex: 0,
          explanation:
            'A opção de desmarcar "As unidades deste órgão podem receber processos" aplica-se aos casos em que não é interessante que as unidades recebam processo, por exemplo, no caso de extinção de um órgão.',
        },
        {
          id: 'm2-l3-q6',
          prompt:
            'Qual opção de corretor ortográfico exige o preenchimento do endereço do servidor do corretor adquirido pelo órgão?',
          options: ['Nenhum.', 'Nativo do Navegador.', 'Licenciado.', 'Timbre.'],
          correctIndex: 2,
          explanation:
            'A opção "Licenciado" é indicada para instituições que optarem por adquirir uma solução de corretor ortográfico exclusiva. Ao selecioná-la, é exibido um campo para informar o endereço do servidor do corretor adquirido pelo órgão.',
        },
      ],
    },
    {
      id: 'm2-unidades',
      slug: 'm2-unidades',
      title: 'Aula 4 — Criação e listagem de unidades no SIP',
      estimatedMinutes: 30,
      objectives: [
        'Cadastrar unidades administrativas no SIP por meio da funcionalidade "Inserir Novas Unidades".',
        'Preencher corretamente os campos Órgão, Sigla, Descrição e ID Origem.',
        'Decidir quando preencher o campo "ID Origem".',
        'Utilizar as ações da tela "Listar Unidades" do SIP, inclusive a reativação.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Após a criação do órgão no SIP e de sua configuração no SEI, é necessário criar as unidades administrativas que farão parte da estrutura da instituição. Seguindo a mesma lógica utilizada na criação do órgão, as unidades também são criadas no SIP e configuradas no SEI.',
        },
        {
          kind: 'paragraph',
          text: 'O organograma do Ministério XPTO é utilizado para exemplificar: ele apresenta as unidades que fazem parte da estrutura do ministério, bem como sua posição hierárquica. As três secretarias do organograma, por exemplo, são cadastradas com as siglas SEC-A, SEC-B e SEC-C.',
        },
        {
          kind: 'steps',
          heading: 'Inserindo novas unidades no SIP',
          items: [
            'Acesse o SIP com usuário de perfil "Administrador".',
            'Pelo menu principal, selecione "Unidades" e clique na opção "Nova".',
            'Na tela "Nova Unidade", selecione o "Órgão" ao qual a unidade pertence.',
            'Preencha a "Sigla" e a "Descrição" da unidade.',
            'Preencha "ID Origem" apenas se a unidade for importada de outro servidor; caso contrário, deixe em branco.',
            'Clique no botão "Salvar" para concluir a criação.',
          ],
        },
        {
          kind: 'table',
          heading: 'Formulário "Nova Unidade"',
          columns: ['Campo', 'Preenchimento'],
          rows: [
            [
              'Órgão',
              'Órgão ao qual pertence a unidade. No exemplo do material, o órgão recém-criado XPTO.',
            ],
            ['Sigla', 'Sigla atribuída à unidade. No exemplo do material, "SEC-A".'],
            ['Descrição', 'Nome completo da unidade. No exemplo do material, "Secretaria A".'],
            [
              'ID Origem',
              'Deve ser preenchido somente caso o órgão deseje importar os dados da unidade de outro servidor, com o identificador da unidade no servidor original. No exemplo do material, o campo é deixado em branco.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilha: unidade duplicada no SIP',
          text: 'Não repita o cadastro da mesma unidade com siglas diferentes. A duplicidade gera duas pendências na hierarquia (a mesma unidade aparecerá duas vezes no organograma) e configurações divergentes no SEI. Antes de cadastrar, consulte a lista de unidades do órgão. Ao final do preenchimento, clique no botão "Salvar": a unidade será criada e será exibida uma tela em branco.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Nem tudo precisa estar no organograma',
          text: 'A operação de criação deverá ser realizada para todas as unidades do órgão e deverá refletir o organograma da instituição. Caberá aos gestores do sistema analisar a necessidade de incluir unidades temporárias, colegiados ou outras estruturas não representadas no organograma.',
        },
        {
          kind: 'paragraph',
          text: 'Após finalizar o cadastro da unidade, é possível verificar a lista de unidades criadas no órgão. Pelo menu principal, escolhendo a funcionalidade "Unidades" e a opção "Listar", o usuário terá acesso a uma nova tela.',
        },
        {
          kind: 'table',
          heading: 'Ações disponíveis na tela de listagem de unidades do SIP',
          columns: ['Ação', 'O que faz'],
          rows: [
            [
              'Consultar unidade',
              'Permite consultar os dados cadastrais da unidade.',
            ],
            [
              'Alterar unidade',
              'Permite alterar os dados cadastrais da unidade.',
            ],
            [
              'Desativar unidade',
              'Remove a unidade da lista, mas permite consultar a lista de unidades desativadas e reativá-las pelo menu "Unidades", opção "Reativar".',
            ],
            [
              'Excluir unidade',
              'Exclui definitivamente a unidade; não é possível recuperá-la posteriormente.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Vídeo de reforço',
          text: 'Vídeo indicado para a funcionalidade "Inserir Novas Unidades": https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo02video03.mp4',
        },
      ],
      keyPoints: [
        'Unidades são criadas no SIP e configuradas no SEI.',
        'O formulário "Nova Unidade" tem quatro campos: Órgão, Sigla, Descrição e ID Origem.',
        'ID Origem só é preenchido na importação de unidades de outro servidor.',
        'Após salvar, o SIP exibe uma tela em branco.',
        'Cadastre todas as unidades do organograma e avalie a inclusão de temporárias e colegiados.',
        'Unidade desativada pode ser reativada pelo menu "Unidades" > "Reativar".',
      ],
      quiz: [
        {
          id: 'm2-l4-q1',
          prompt: 'Em qual sistema e por qual caminho as unidades administrativas são criadas?',
          options: [
            'No SEI, menu "Administração" > "Unidades" > "Nova".',
            'No SIP, menu "Unidades" > "Nova".',
            'No SIP, menu "Hierarquias" > "Nova".',
            'No SEI, tela de login do órgão raiz.',
          ],
          correctIndex: 1,
          explanation:
            'Seguindo a mesma lógica da criação do órgão no modelo multiórgãos, as unidades também são criadas no SIP, pela funcionalidade "Inserir Novas Unidades", e configuradas no SEI.',
        },
        {
          id: 'm2-l4-q2',
          prompt: 'Quais campos aparecem na tela "Nova Unidade" do SIP?',
          options: [
            'Órgão, Sigla, Descrição e ID Origem.',
            'Órgão, Sigla, Descrição e Ordem.',
            'Órgão, Sigla, Descrição e Data Inicial.',
            'Sigla, Nome, E-mail e Descrição.',
          ],
          correctIndex: 0,
          explanation:
            'Ao clicar na opção "Nova", abrirá uma tela denominada "Nova Unidade" com quatro campos: Órgão, Sigla, Descrição e ID Origem.',
        },
        {
          id: 'm2-l4-q3',
          prompt: 'Quando o campo "ID Origem" deve ser preenchido?',
          options: [
            'Sempre, com o número de controle interno do órgão.',
            'Somente quando o órgão deseja importar os dados da unidade de outro servidor, usando o identificador da unidade no servidor original.',
            'Quando a unidade for a raiz da hierarquia.',
            'Sempre que a unidade for unidade de protocolo.',
          ],
          correctIndex: 1,
          explanation:
            'Esta opção só deverá ser preenchida caso o órgão deseje importar os dados da unidade de outro servidor; nesse caso, usa-se o identificador da unidade no servidor original. No exemplo do material, o campo é deixado em branco.',
        },
        {
          id: 'm2-l4-q4',
          prompt: 'O que o SIP exibe imediatamente após salvar uma nova unidade?',
          options: [
            'Uma tela em branco.',
            'A lista de unidades do órgão.',
            'O formulário de configuração da unidade no SEI.',
            'A tela de montagem da hierarquia.',
          ],
          correctIndex: 0,
          explanation:
            'Ao finalizar o preenchimento, é necessário clicar no botão "Salvar". Com isso, a unidade será criada e será exibida uma tela em branco. Para conferir o cadastro, use o menu "Unidades" e a opção "Listar".',
        },
        {
          id: 'm2-l4-q5',
          prompt:
            'Uma unidade deixou de ser utilizada, mas pode voltar a ser necessária. Qual é a ação mais adequada?',
          options: [
            'Excluir a unidade, pois a desativação não existe para unidades no SIP.',
            'Desativar a unidade e, se necessário, reativá-la pelo menu "Unidades" > "Reativar".',
            'Alterar a sigla da unidade para indicar sua desativação.',
            'Remover a unidade da hierarquia no SEI.',
          ],
          correctIndex: 1,
          explanation:
            '"Desativar unidade" remove a unidade da lista, porém é possível consultar a lista de unidades desativadas, bem como reativá-las, acessando o menu "Unidades" e clicando em "Reativar". "Excluir unidade" é definitivo.',
        },
        {
          id: 'm2-l4-q6',
          prompt:
            'Além das unidades do organograma, o gestor pode avaliar a inclusão de quais estruturas?',
          options: [
            'Apenas unidades temporárias.',
            'Apenas colegiados.',
            'Unidades temporárias, colegiados ou outras estruturas não representadas no organograma.',
            'Somente unidades localizadas em outro estado.',
          ],
          correctIndex: 2,
          explanation:
            'Caberá aos gestores do sistema analisar a necessidade de incluir unidades temporárias, colegiados ou outras estruturas não representadas no organograma do órgão.',
        },
      ],
    },
    {
      id: 'm2-hierarquia',
      slug: 'm2-hierarquia',
      title: 'Aula 5 — Gestão de Hierarquia no SIP',
      estimatedMinutes: 35,
      objectives: [
        'Reconhecer a hierarquia como requisito de uso das unidades no SEI.',
        'Diferenciar as opções "Nova" e "Montar" no menu "Hierarquias" do SIP.',
        'Incluir as unidades na hierarquia, definindo unidade raiz e unidade superior.',
        'Utilizar as ações da tela "Montar Hierarquia" para reorganizar, desativar ou excluir vínculos.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A hierarquia no SEI é a maneira como as unidades se relacionam e indica qual a posição de cada uma no organograma da instituição. A inclusão das unidades na hierarquia é requisito indispensável para sua utilização.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilha: forgot associar a hierarquia',
          text: 'Enquanto não for montada a hierarquia no SIP, as unidades não estarão visíveis e acessíveis no SEI. Unidade cadastrada e não hierarquizada simplesmente não aparece para o usuário — o sintoma mais comum é a ausência da unidade na lista do SEI.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilha: escolher "Nova" em vez de "Montar"',
          text: 'É comum imaginar que o caminho seja acessar o menu "Hierarquias" e clicar na opção "Nova". Porém, como o SIP é um sistema criado para administrar outros sistemas além do SEI, essa opção criaria uma nova hierarquia para um novo sistema. A montagem da hierarquia do SEI é sempre feita pela opção "Montar".',
        },
        {
          kind: 'steps',
          heading: 'Montando a hierarquia do SEI',
          items: [
            'Acesse o SIP com usuário de perfil "Administrador".',
            'Selecione o menu "Hierarquias".',
            'Clique na opção "Montar" (e não em "Nova").',
            'Na tela "Montar Hierarquia", verifique a lista de unidades que já possuem hierarquia montada.',
            'Clique no botão "Adicionar Unidade", localizado no canto superior direito da página.',
            'Preencha os campos da página exibida e salve.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Ao clicar na opção "Montar", uma nova tela chamada "Montar Hierarquia" será exibida, apresentando uma lista contendo todas as unidades que já possuem hierarquia montada. Ao final da montagem, a estrutura do organograma será representada nessa própria tela.',
        },
        {
          kind: 'table',
          heading: 'Página "Adicionar Unidade na Hierarquia"',
          columns: ['Campo', 'Preenchimento'],
          rows: [
            [
              'Hierarquia',
              'Sistema no qual a hierarquia será montada. As unidades sempre serão montadas na hierarquia SEI.',
            ],
            [
              'Checkbox Raiz',
              'Deve ser selecionada quando se tratar de uma unidade superior. No organograma do material, é marcada ao incluir as três secretarias.',
            ],
            [
              'Unidade Superior na Hierarquia',
              'Campo que só aparece quando a checkbox "Raiz" não está selecionada. Indica a unidade imediatamente superior à que está sendo cadastrada: no exemplo, as secretarias são indicadas quando se incluem os departamentos.',
            ],
            ['Órgão da Unidade', 'Órgão em que se encontra a unidade.'],
            [
              'Unidade',
              'Unidade que será incluída na hierarquia. Só são exibidas unidades que ainda não fazem parte de uma hierarquia.',
            ],
            ['Data Inicial', 'Define a data de entrada da unidade na hierarquia. No exemplo, indica-se a data do cadastro.'],
            [
              'Data Final',
              'Indica a data final da unidade na hierarquia. No exemplo, o campo é deixado em branco.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Atalho: "Adicionar Subunidade"',
          text: 'Para facilitar a inclusão de subunidades, pode-se clicar no botão "Adicionar Subunidade", na coluna "Ações" da tela "Montar Hierarquia": os dados da unidade superior já vêm preenchidos na tela de cadastro. É a forma mais rápida de montar os departamentos sob cada secretaria.',
        },
        {
          kind: 'bullets',
          heading: 'Quatro ações da tela "Montar Hierarquia"',
          items: [
            'Adicionar Subunidade: otimiza a montagem; a unidade é indicada como unidade superior na tela de cadastro.',
            'Alterar Unidade na Hierarquia: reorganiza a unidade na hierarquia.',
            'Desativar Unidade na Hierarquia: desativa a unidade dentro daquela hierarquia; ela continua exibida na lista, mas deixa de estar disponível para acesso via SEI. A opção "Reativar Unidade na Hierarquia" passa a ser exibida.',
            'Excluir Unidade na Hierarquia: exclui definitivamente a unidade, que não será mais exibida na lista da hierarquia.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Importante: uma vez finalizada a montagem da hierarquia no SIP, as unidades poderão ser acessadas no SEI. É neste momento que se inicia a etapa de configuração dos dados de cada unidade.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Vídeo de reforço',
          text: 'Vídeo indicado para a funcionalidade "Montar Hierarquias": https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo02video04.mp4',
        },
      ],
      keyPoints: [
        'Hierarquia indica a posição de cada unidade no organograma.',
        'Sem hierarquia no SIP, a unidade não aparece no SEI.',
        'Use "Hierarquias" > "Montar"; "Nova" criaria hierarquia de outro sistema.',
        'Checkbox "Raiz" marca unidades superiores, como as secretarias.',
        '"Adicionar Subunidade" já preenche a unidade superior.',
        'Data Final em branco mantém a unidade ativa na hierarquia.',
      ],
      quiz: [
        {
          id: 'm2-l5-q1',
          prompt:
            'Qual a consequência de uma unidade estar cadastrada no SIP, mas não hierarquizada?',
          options: [
            'A unidade não fica visível nem acessível no SEI.',
            'A unidade fica visível no SEI, mas não pode receber processos.',
            'A unidade aparece apenas na tela de login.',
            'A unidade é automaticamente excluída após 30 dias.',
          ],
          correctIndex: 0,
          explanation:
            'O material é enfático: enquanto não for montada a hierarquia no SIP, as unidades não estarão visíveis e acessíveis no SEI.',
        },
        {
          id: 'm2-l5-q2',
          prompt: 'Por que se deve escolher "Montar" e não "Nova" no menu "Hierarquias" do SIP?',
          options: [
            'Porque "Nova" exige perfil de usuário diferente.',
            'Porque "Montar" cria automaticamente as unidades do órgão.',
            'Porque "Nova" criaria uma hierarquia para um novo sistema, e não para o SEI.',
            'Porque "Nova" apaga a hierarquia existente.',
          ],
          correctIndex: 2,
          explanation:
            'Como o SIP administra outros sistemas além do SEI, a opção "Nova" criaria uma nova hierarquia para um novo sistema. Por isso a montagem da hierarquia do SEI é sempre feita pela opção "Montar".',
        },
        {
          id: 'm2-l5-q3',
          prompt:
            'Ao incluir os departamentos que dependem da Secretaria A, como o formulário de "Adicionar Unidade na Hierarquia" deve ser preenchido?',
          options: [
            'A checkbox "Raiz" deve ser marcada e o campo "Unidade Superior" deixado em branco.',
            'A checkbox "Raiz" não deve ser marcada e a Secretaria A deve ser indicada como "Unidade Superior na Hierarquia".',
            'A checkbox "Raiz" deve ser marcada e a Secretaria A indicada como "Unidade Superior".',
            'O campo "Data Inicial" deve ficar em branco para permitir a anexação posterior.',
          ],
          correctIndex: 1,
          explanation:
            'O campo "Unidade Superior na Hierarquia" só aparece quando a checkbox "Raiz" não está selecionada e deve indicar a unidade imediatamente superior: as secretarias são indicadas como unidades superiores quando se incluem os departamentos.',
        },
        {
          id: 'm2-l5-q4',
          prompt:
            'Ao abrir o campo "Unidade" da página de inclusão na hierarquia, quais unidades podem ser selecionadas?',
          options: [
            'Todas as unidades cadastradas no SIP.',
            'Apenas as unidades do órgão raiz.',
            'Somente as unidades que ainda não fazem parte de uma hierarquia.',
            'Apenas as unidades de arquivamento e de ouvidoria.',
          ],
          correctIndex: 2,
          explanation:
            'O campo Unidade deve ser preenchido com a unidade que será incluída na hierarquia; só serão exibidas unidades que ainda não fazem parte de uma hierarquia.',
        },
        {
          id: 'm2-l5-q5',
          prompt:
            'Uma unidade foi movida para outra secretaria. Qual ação da tela "Montar Hierarquia" resolve a situação?',
          options: [
            '"Excluir Unidade na Hierarquia", pois a movimentação não é permitida.',
            '"Desativar Unidade na Hierarquia", que a retira definitivamente da lista.',
            '"Alterar Unidade na Hierarquia", que reorganiza a unidade.',
            '"Adicionar Unidade", que cria uma nova unidade e apaga a anterior.',
          ],
          correctIndex: 2,
          explanation:
            '"Alterar Unidade na Hierarquia" reorganiza a unidade na hierarquia. "Desativar Unidade na Hierarquia" apenas impede o acesso via SEI, mantendo a unidade na lista, e "Excluir Unidade na Hierarquia" é definitiva.',
        },
        {
          id: 'm2-l5-q6',
          prompt: 'Qual é a função do botão "Adicionar Subunidade" na tela "Montar Hierarquia"?',
          options: [
            'Excluir a unidade e suas subunidades.',
            'Otimizar a montagem, já indicando a unidade selecionada como unidade superior no cadastro.',
            'Reativar automaticamente as unidades desativadas.',
            'Alterar o código SIP de todas as unidades do órgão.',
          ],
          correctIndex: 1,
          explanation:
            '"Adicionar Subunidade" otimiza a montagem da hierarquia: ao clicar nesta opção, a unidade será indicada como unidade superior na hierarquia na tela de cadastro.',
        },
      ],
    },
    {
      id: 'm2-alterar-unidade',
      slug: 'm2-alterar-unidade',
      title: 'Aula 6 — Configuração de unidades no SEI: "Alterar Unidade"',
      estimatedMinutes: 45,
      objectives: [
        'Acessar a funcionalidade "Listar Unidades" no SEI e utilizar suas quatro ações.',
        'Preencher a seção "Códigos" com SIP, SEI e Origem.',
        'Cadastrar contatos e e-mails da unidade.',
        'Configurar as cinco checkboxes de competência da unidade.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Após a criação das unidades e da definição de sua hierarquia no SIP, é necessário configurar seus dados para que estejam prontas para serem utilizadas. O primeiro passo para configurar os dados é acessar e logar no SEI.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Ambiente de demonstração e órgão raiz',
          text: 'Como ainda não foram cadastrados usuários para o órgão, o material utiliza o usuário "teste" e a senha "teste". Em uma instalação multiórgãos, essa configuração será feita acessando com o mesmo usuário e senha, porém, no órgão raiz (ID 0), neste caso o órgão ME.',
        },
        {
          kind: 'steps',
          heading: 'Caminho até a configuração da unidade',
          items: [
            'Acesse o SEI com login e senha de usuário com perfil "Administrador".',
            'Entre pelo menu "Administração" e acesse a opção "Unidades".',
            'Clique em "Listar" para abrir a tela "Unidades".',
            'Na coluna "Ações", clique em "Alterar Unidade" (segundo ícone).',
            'Preencha as seções do formulário e salve as informações.',
          ],
        },
        {
          kind: 'table',
          heading: 'Ações disponíveis na tela "Unidades" do SEI',
          columns: ['Ação', 'O que faz'],
          rows: [
            ['Consultar Unidade', 'Permite consultar os dados cadastrados naquela unidade.'],
            ['Alterar Unidade', 'Permite cadastrar e editar os dados daquela unidade.'],
            [
              'Desativar Unidade',
              'Remove a unidade da lista no SEI, mas permite consultar a lista de unidades desativadas e reativá-las pelo menu "Administração", opção "Unidades" e depois "Reativar".',
            ],
            [
              'Excluir Unidade',
              'Exclui definitivamente a unidade no SEI, que não será mais exibida na lista de unidades.',
            ],
          ],
        },
        {
          kind: 'paragraph',
          text: 'Clicando na opção "Alterar Unidade", o segundo ícone da coluna "Ações", o usuário tem acesso a uma nova tela com o formulário para cadastramento das informações base da unidade. O formulário é composto pelas seções Códigos, Contato Associado, E-mail e Checkboxes.',
        },
        {
          kind: 'table',
          heading: 'Seção "Códigos" da unidade',
          columns: ['Campo', 'Preenchimento'],
          rows: [
            [
              'SIP',
              'Preenchido automaticamente. Refere-se ao número de controle interno de relacionamento da unidade no SIP com o SEI. Não é recomendada sua alteração.',
            ],
            [
              'SEI',
              'Número de controle da unidade. No Poder Executivo Federal, recomenda-se o código de Unidade Protocolizadora (UP), uma vez que pode ser usado para compor o NUP.',
            ],
            [
              'Origem',
              'Número que se relaciona com o campo "ID Origem", exibido durante a criação das unidades no SIP. Indica o número de relacionamento de unidades importadas de outros servidores.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Código SEI pode ser repetido',
          text: 'O mesmo número pode ser repetido em várias unidades, dependendo de como foram definidas as Unidades Protocolizadoras. Por exemplo, todas as unidades que estão abaixo da Secretaria A podem usar o mesmo código, desde que o órgão defina que a Secretaria A é a UP daquele conjunto de unidades.',
        },
        {
          kind: 'table',
          heading: 'Seções "Contato Associado" e "E-mail"',
          columns: ['Seção / campo', 'Preenchimento'],
          rows: [
            ['Sigla', 'Sigla associada à unidade que está sendo configurada.'],
            ['Nome', 'Nome completo da unidade que está sendo configurada.'],
            [
              'Alterar Dados do Contato Associado',
              'Abre uma tela para cadastro de dados do contato associado à unidade, indicando endereço, e-mail e telefones.',
            ],
            [
              'E-mail',
              'Local para adicionar e-mails da unidade; é possível inserir quantos e-mails forem necessários. Exemplo de endereço: "sec.a@xpto.gov.br".',
            ],
            [
              'Descrição',
              'Nome dado para o e-mail cadastrado. Exemplo: "caixa corporativa da unidade SEC-A". Depois de inserir as informações, clicar em "Adicionar E-mail" para executar a ação.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilha: deixar o contato em branco',
          text: 'Não preencher as informações de contato fará com que aquela unidade não seja capaz de inserir novos documentos. Cadastre endereço, e-mail e telefones antes de liberar a unidade para uso, e lembre-se de clicar em "Adicionar E-mail" para que o endereço seja efetivamente gravado.',
        },
        {
          kind: 'bullets',
          heading: 'As cinco checkboxes da unidade',
          items: [
            '"Disponível para envio de processos": habilita a unidade a enviar processos. Desmarque quando não for interessante que a unidade envie processos, por exemplo, no caso de extinção da unidade.',
            '"Enviar e-mail de aviso quando um processo for remetido para a unidade": o sistema envia mensagem ao e-mail cadastrado da unidade sobre o recebimento de novos processos.',
            '"Unidade de arquivamento": define a unidade também como unidade de arquivamento, o que implica acesso aos menus "Arquivamento", "Desarquivamento" e "Localizadores" para os usuários nela cadastrados, permitindo arquivar as partes analógicas dos processos.',
            '"Unidade de ouvidoria": seleciona a unidade como a unidade de ouvidoria do órgão. Pode haver apenas uma unidade de ouvidoria por órgão.',
            '"Unidade de protocolo": adiciona permissões de protocolo à unidade, como inclusão manual de número de processo ao iniciar um novo processo e a possibilidade de autenticar documentos externos em um processo.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Exceção: apenas uma ouvidoria por órgão',
          text: 'A opção "Unidade de ouvidoria" só pode ser marcada em uma única unidade por órgão. Marque-a na unidade responsável pela ouvidoria e deixe desmarcada nas demais, mesmo que o órgão possua várias unidades.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Não esqueça de salvar',
          text: 'Depois de preenchidos todos os campos, é necessário salvar as informações acrescentadas. Revisar o formulário após o salvamento evita que uma checkbox ou um e-mail fique faltando e só seja percebido quando o processo travar na unidade.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Vídeo de reforço',
          text: 'Vídeo indicado para a ação "Alterar Unidade": https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo02video05.mp4',
        },
      ],
      keyPoints: [
        'Configurar a unidade no SEI só é possível depois da hierarquia montada no SIP.',
        'Campo Origem relaciona-se com o "ID Origem" usado na criação no SIP.',
        'No PEF, recomenda-se usar o código de Unidade Protocolizadora (UP) como código SEI.',
        'Contato não preenchido impede a inserção de novos documentos pela unidade.',
        'Unidade de ouvidoria: apenas uma por órgão.',
        'Unidade de arquivamento dá acesso aos menus Arquivamento, Desarquivamento e Localizadores.',
      ],
      quiz: [
        {
          id: 'm2-l6-q1',
          prompt: 'Qual a sequência correta para que uma unidade possa ser utilizada no SEI?',
          options: [
            'Criar a unidade no SIP, configurar a unidade no SEI e montar a hierarquia no SIP.',
            'Criar a unidade no SIP, montar a hierarquia no SIP e configurar a unidade no SEI.',
            'Configurar a unidade no SEI, criar a unidade no SIP e montar a hierarquia.',
            'Montar a hierarquia no SIP, criar a unidade no SEI e configurar a unidade no SIP.',
          ],
          correctIndex: 1,
          explanation:
            'A ordem é: criar a unidade no SIP (funcionalidade "Inserir Novas Unidades"), montar a hierarquia entre elas no SIP e só então configurar os dados no SEI pela ação "Alterar Unidade".',
        },
        {
          id: 'm2-l6-q2',
          prompt:
            'Qual a relação entre os campos "Origem" (no SEI) e "ID Origem" (no SIP)?',
          options: [
            'São o mesmo campo, preenchido automaticamente no SEI.',
            'A "Origem" é o número que se relaciona com o "ID Origem" e indica o relacionamento de unidades importadas de outros servidores.',
            'A "Origem" indica a ordem da unidade na tela de login.',
            'A "Origem" é o código Siorg da unidade e substitui o código SEI.',
          ],
          correctIndex: 1,
          explanation:
            'O campo Origem é o número que se relaciona com o campo "ID Origem", exibido durante a criação das unidades no SIP, e indica o número de relacionamento de unidades importadas de outros servidores.',
        },
        {
          id: 'm2-l6-q3',
          prompt:
            'Todas as unidades abaixo da Secretaria A vão usar o mesmo código SEI. Isso é possível?',
          options: [
            'Não, porque o código SEI deve ser único para cada unidade.',
            'Sim, desde que o órgão defina a Secretaria A como Unidade Protocolizadora daquele conjunto de unidades.',
            'Sim, mas apenas se o campo "Origem" estiver preenchido.',
            'Não, é necessário configurar cada departamento como Unidade Protocolizadora.',
          ],
          correctIndex: 1,
          explanation:
            'O número pode ser repetido em várias unidades, dependendo de como foram definidas as Unidades Protocolizadoras. Todas as unidades abaixo da Secretaria A podem usar o mesmo código, desde que o órgão defina que a Secretaria A é a UP daquele conjunto.',
        },
        {
          id: 'm2-l6-q4',
          prompt:
            'Qual o efeito de deixar em branco a seção "Contato Associado" de uma unidade?',
          options: [
            'A unidade não consegue inserir novos documentos.',
            'A unidade não consegue enviar processos, mas consegue recebê-los.',
            'A unidade não aparece na lista de unidades do SEI.',
            'A unidade perde o acesso aos menus de arquivamento.',
          ],
          correctIndex: 0,
          explanation:
            'O material é explícito: não preencher as informações de contato fará com que aquela unidade não seja capaz de inserir novos documentos.',
        },
        {
          id: 'm2-l6-q5',
          prompt: 'Quantas unidades de ouvidoria podem existir em um mesmo órgão?',
          options: ['Apenas uma.', 'Duas, uma por região.', 'Cinco, uma por secretaria.', 'Quantas forem necessárias.'],
          correctIndex: 0,
          explanation:
            'A opção "Unidade de ouvidoria" seleciona a unidade como a unidade de ouvidoria do órgão, e pode haver apenas uma unidade de ouvidoria por órgão.',
        },
        {
          id: 'm2-l6-q6',
          prompt:
            'Qual checkbox habilita a unidade a receber e-mails de aviso quando um processo for remetido a ela?',
          options: [
            '"Disponível para envio de processos".',
            '"Unidade de arquivamento".',
            '"Unidade de protocolo".',
            '"Enviar e-mail de aviso quando um processo for remetido para a unidade".',
          ],
          correctIndex: 3,
          explanation:
            'Ao selecionar essa opção, o sistema enviará para o e-mail cadastrado da unidade uma mensagem sobre o recebimento de novos processos. Por isso o e-mail deve estar cadastrado na seção "E-mail" e adicionado pelo botão "Adicionar E-mail".',
        },
      ],
    },
  ],
};
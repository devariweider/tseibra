import type { CourseModule } from './types.js';

export const modulo1: CourseModule = {
  id: 'mod-1',
  slug: 'introducao',
  title: 'Módulo 1 — Introdução',
  subtitle: 'Do Processo Eletrônico Nacional à administração do SEI: PEN, SIP, acesso, governança e módulos',
  description:
    'Aula introdutória do curso SEI! Administrar. Este módulo apresenta a origem do Sistema Eletrônico de Informações no âmbito do Processo Eletrônico Nacional, diferencia o SIP do SEI, demonstra como acessar cada sistema, explica o modelo de governança da ferramenta e discute o desenvolvimento de módulos para necessidades específicas do órgão.',
  sourceRef: 'Módulo 1 - Introdução.pdf (Enap, curso SEI! Administrar, 2019)',
  estimatedMinutes: 135,
  objectives: [
    'Compreender a origem e o papel do SEI no contexto do Processo Eletrônico Nacional (PEN).',
    'Diferenciar as funções do SIP e do SEI e identificar onde cadastrar cada tipo de dado.',
    'Acessar corretamente o SEI e o SIP do órgão, reconhecendo que cada sistema possui login próprio.',
    'Explicar o modelo de governança do SEI e a função da Comunidade de Negócio SEI.',
    'Reconhecer quando um órgão pode desenvolver um módulo do SEI e como ele se relaciona ao núcleo do sistema.',
  ],
  lessons: [
    {
      id: 'm1-apresentacao-curso',
      slug: 'm1-apresentacao-curso',
      title: 'Aula 1 — Apresentação e estrutura do curso SEI! Administrar',
      estimatedMinutes: 20,
      objectives: [
        'Compreender a finalidade e o público-alvo do curso SEI! Administrar.',
        'Identificar a estrutura modular do curso e a ordem dos sete módulos.',
        'Reconhecer a regra de uma tentativa por questão nas atividades de aprendizado.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O curso SEI! Administrar foi desenvolvido pela Enap em parceria com a coordenação do Processo Eletrônico Nacional do Ministério da Economia, com o foco na disseminação de informações sobre as funcionalidades de administração do Sistema Eletrônico de Informações (SEI). A proposta é ampliar a quantidade de pessoas capacitadas a configurar, parametrizar e administrar o SEI, alinhando-as às boas práticas de administração da ferramenta.',
        },
        {
          kind: 'paragraph',
          text: 'O curso foi produzido em Brasília, em 2019, no âmbito do acordo de Cooperação Técnica FUB / CDT / Laboratório Latitude e Enap, e conta com conteúdo elaborado por equipe de conteudistas da Enap.',
        },
        {
          kind: 'bullets',
          heading: 'Estrutura do curso em sete módulos',
          items: [
            'Módulo 1: Introdução.',
            'Módulo 2: Estrutura Organizacional.',
            'Módulo 3: Controle de Acesso.',
            'Módulo 4: Administração do SEI (Parte I).',
            'Módulo 5: Administração do SEI (Parte II).',
            'Módulo 6: Administração do SEI (Parte III).',
            'Módulo 7: Relatórios e Auditoria.',
          ],
        },
        {
          kind: 'table',
          heading: 'Sequência dos módulos',
          columns: ['Módulo', 'Título'],
          rows: [
            ['1', 'Introdução'],
            ['2', 'Estrutura Organizacional'],
            ['3', 'Controle de Acesso'],
            ['4', 'Administração do SEI (Parte I)'],
            ['5', 'Administração do SEI (Parte II)'],
            ['6', 'Administração do SEI (Parte III)'],
            ['7', 'Relatórios e Auditoria'],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Como funcionam as atividades de aprendizado',
          text: 'As atividades estão distribuídas ao longo do curso, ao final de cada ponto importante, e visam medir o que foi aprendido. Você tem apenas uma tentativa para responder cada questão e só poderá avançar o conteúdo após realizar as atividades.',
        },
        {
          kind: 'steps',
          heading: 'Rota de estudo do módulo 1',
          items: [
            'Leia a apresentação do curso e a estrutura dos sete módulos.',
            'Estude a visão geral do PEN e o papel do SEI nessa política pública.',
            'Compare as funções do SIP e do SEI e pratique o acesso aos dois sistemas.',
            'Entenda o modelo de governança do SEI e a dinâmica dos módulos específicos do órgão.',
            'Resolva as atividades ao final de cada aula antes de avançar.',
          ],
        },
        {
          kind: 'definitions',
          heading: 'Termos de abertura do curso',
          items: [
            {
              term: 'SEI! Administrar',
              text: 'Curso da Enap sobre as funcionalidades de administração do Sistema Eletrônico de Informações (SEI), desenvolvido em parceria com a coordenação do PEN do Ministério da Economia.',
            },
            {
              term: 'Enap',
              text: 'Escola Nacional de Administração Pública, responsável pelo desenvolvimento do curso.',
            },
            {
              term: 'PEN',
              text: 'Processo Eletrônico Nacional, no âmbito do qual o SEI foi selecionado como software de processo administrativo eletrônico.',
            },
          ],
        },
      ],
      keyPoints: [
        'O curso foi desenvolvido pela Enap em parceria com a coordenação do PEN do Ministério da Economia.',
        'A meta é capacitar pessoas a configurar, parametrizar e administrar o SEI.',
        'O curso está estruturado em sete módulos, do Módulo 1 (Introdução) ao Módulo 7 (Relatórios e Auditoria).',
        'As atividades de aprendizado vêm ao final de cada ponto importante.',
        'Existe apenas uma tentativa por questão e o avanço só ocorre após as atividades.',
      ],
      quiz: [
        {
          id: 'm1-apresentacao-curso-q1',
          prompt: 'Qual é a finalidade principal do curso SEI! Administrar?',
          options: [
            'Capacitar pessoas a configurar, parametrizar e administrar o SEI, alinhando-as às boas práticas de administração da ferramenta.',
            'Treinar usuários finais para protocolar documentos pessoais em processos da própria instituição.',
            'Substituir o SIP como sistema de cadastro de usuários e unidades do órgão.',
            'Habilitar os cidadãos a consultar processos de qualquer órgão do Poder Executivo Federal.',
          ],
          correctIndex: 0,
          explanation:
            'A apresentação do curso informa que a proposta é ampliar a quantidade de pessoas capacitadas a configurar, parametrizar e administrar o SEI, alinhadas às boas práticas de administração da ferramenta.',
        },
        {
          id: 'm1-apresentacao-curso-q2',
          prompt: 'Segundo a apresentação do curso, quando o aluno pode avançar para o próximo conteúdo?',
          options: [
            'Imediatamente após a leitura do texto, sem necessidade de atividade.',
            'Após realizar as atividades de aprendizado previstas para o ponto estudado.',
            'Apenas ao final de todos os módulos do curso.',
            'Quando a média de acertos do módulo alcance 50 por cento.',
          ],
          correctIndex: 1,
          explanation:
            'O material é explícito: as atividades visam medir o que foi aprendido e o aluno só poderá avançar o conteúdo após realizá-las.',
        },
        {
          id: 'm1-apresentacao-curso-q3',
          prompt: 'Quantas tentativas o aluno possui para responder cada questão de atividade?',
          options: [
            'Apenas uma tentativa por questão.',
            'Duas tentativas por questão.',
            'Cinco tentativas por questão.',
            'Tentativas ilimitadas, até obter o acerto.',
          ],
          correctIndex: 0,
          explanation:
            'A apresentação reforça que existe apenas uma tentativa para responder cada questão, o que torna importante a leitura prévia do conteúdo.',
        },
        {
          id: 'm1-apresentacao-curso-q4',
          prompt: 'Qual módulo vem imediatamente após Administração do SEI (Parte I)?',
          options: [
            'Controle de Acesso.',
            'Administração do SEI (Parte II).',
            'Estrutura Organizacional.',
            'Relatórios e Auditoria.',
          ],
          correctIndex: 1,
          explanation:
            'A sequência apresentada é: Introdução, Estrutura Organizacional, Controle de Acesso, Administração do SEI (Parte I), Administração do SEI (Parte II), Administração do SEI (Parte III) e Relatórios e Auditoria.',
        },
        {
          id: 'm1-apresentacao-curso-q5',
          prompt: 'Qual das afirmativas abaixo está INCORRETA?',
          options: [
            'O curso foi desenvolvido pela Enap em parceria com a coordenação do PEN do Ministério da Economia.',
            'O conteúdo está distribuído em sete módulos.',
            'As atividades de aprendizado aparecem distribuídas ao longo do curso.',
            'O curso foi produzido exclusivamente pelo Ministério da Economia, sem participação da Enap.',
          ],
          correctIndex: 3,
          explanation:
            'O curso foi desenvolvido pela Enap, em parceria com a coordenação do PEN do Ministério da Economia, e produzido em Brasília em 2019.',
        },
      ],
    },
    {
      id: 'm1-pen-visao-geral',
      slug: 'm1-pen-visao-geral',
      title: 'Aula 2 — Visão geral do Processo Eletrônico Nacional (PEN)',
      estimatedMinutes: 25,
      objectives: [
        'Compreender como o SEI foi selecionado no âmbito do Processo Eletrônico Nacional.',
        'Identificar as principais entregas do projeto PEN: SEI, Barramento de Serviços e Protocolo Integrado.',
        'Reconhecer as normas que sustentam o arcabouço legal do PEN.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'No ano de 2013, foi firmado um Acordo de Cooperação Técnica entre o então Ministério do Planejamento, Orçamento e Gestão (MP), Embrapa, Comissão de Valores Mobiliários (CVM), Governo do Distrito Federal (GDF) e Anatel, objetivando a prospecção de uma solução de gestão de processos administrativos eletrônicos que atendesse às definições do PEN.',
        },
        {
          kind: 'steps',
          heading: 'Como o SEI chegou ao PEN',
          items: [
            'Prospecção de uma solução de gestão de processos administrativos eletrônicos que atendesse às definições do PEN, via Acordo de Cooperação Técnica de 2013.',
            'Consulta pública em que o Tribunal Regional Federal da 4ª Região (TRF4) apresentou o Sistema Eletrônico de Informações (SEI).',
            'Avaliação do SEI como solução adequada aos propósitos do PEN, em especial por ter sido desenvolvido utilizando linguagem livre.',
            'Adoção do SEI pelo PEN e evolução da iniciativa, com a previsão das atuais entregas do projeto.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Por que o SEI foi considerado adequado',
          text: 'Além do uso de linguagem livre, o SEI apresentava a possibilidade de ser implantado em diferentes ambientes e realidades tecnológicas — característica decisiva para um projeto de abrangência nacional.',
        },
        {
          kind: 'table',
          heading: 'Principais entregas do projeto PEN',
          columns: ['Entrega', 'Função'],
          rows: [
            [
              'SEI',
              'Software de processo administrativo eletrônico selecionado no âmbito do PEN.',
            ],
            [
              'Barramento de Serviços do PEN',
              'Solução desenvolvida para viabilizar o trâmite entre órgãos que utilizam sistemas de processo administrativo eletrônico.',
            ],
            [
              'Protocolo Integrado',
              'Ferramenta que permite aos cidadãos consultar o andamento dos processos de seu interesse, independentemente do órgão em que estiverem tramitando; auxilia na promoção da transparência ativa.',
            ],
          ],
        },
        {
          kind: 'bullets',
          heading: 'O PEN também se preocupou com as questões normativas',
          items: [
            'O PEN buscou amparar, no plano normativo, o paradigma da mudança do meio analógico para o digital.',
            'O arcabouço legal influenciado pelo projeto comporta normas relevantes para a administração do SEI.',
          ],
        },
        {
          kind: 'callout',
          tone: 'legal',
          title: 'Arcabouço legal influenciado pelo projeto',
          text: 'No arcabouço legal influenciado pelo projeto, destacam-se o Decreto nº 8.539 e a Portaria Interministerial nº 1.677. São eles que dão suporte normativo à transição do processo administrativo em papel para o meio eletrônico.',
        },
        {
          kind: 'definitions',
          heading: 'Termos do PEN',
          items: [
            {
              term: 'PEN',
              text: 'Processo Eletrônico Nacional, projeto no âmbito do qual o SEI foi selecionado como software de processo administrativo eletrônico.',
            },
            {
              term: 'SEI',
              text: 'Sistema Eletrônico de Informações, software de processo administrativo eletrônico apresentado pelo TRF4 e selecionado no âmbito do PEN.',
            },
            {
              term: 'Barramento de Serviços do PEN',
              text: 'Solução desenvolvida para viabilizar o trâmite entre órgãos que utilizam sistemas de processo administrativo eletrônico.',
            },
            {
              term: 'Protocolo Integrado',
              text: 'Ferramenta que permite ao cidadão consultar o andamento de processos de seu interesse, independentemente do órgão em que tramitam.',
            },
          ],
        },
      ],
      keyPoints: [
        'O Acordo de Cooperação Técnica de 2013 (MP, Embrapa, CVM, GDF e Anatel) buscava uma solução que atendesse às definições do PEN.',
        'O SEI foi apresentado pelo TRF4 na consulta pública e adequado por usar linguagem livre e poder ser implantado em diferentes ambientes tecnológicos.',
        'O SEI é o software de processo administrativo eletrônico selecionado no âmbito do PEN.',
        'O Barramento de Serviços do PEN viabiliza o trâmite entre órgãos que usam sistemas de processo eletrônico.',
        'O Protocolo Integrado permite ao cidadão acompanhar processos independentemente do órgão e promove a transparência ativa.',
        'No arcabouço legal do projeto destacam-se o Decreto nº 8.539 e a Portaria Interministerial nº 1.677.',
      ],
      quiz: [
        {
          id: 'm1-pen-visao-geral-q1',
          prompt: 'Qual foi o objetivo do Acordo de Cooperação Técnica firmado em 2013 para o PEN?',
          options: [
            'Implantar imediatamente o SEI em todos os órgãos do Poder Executivo Federal.',
            'Prospectar uma solução de gestão de processos administrativos eletrônicos que atendesse às definições do PEN.',
            'Definir o sistema de autenticação único para todos os sistemas de governo.',
            'Substituir o SIP por um novo sistema de permissões de uso exclusivo do SEI.',
          ],
          correctIndex: 1,
          explanation:
            'O acordo firmado entre o então MP, Embrapa, CVM, GDF e Anatel objetivava a prospecção de uma solução de gestão de processos administrativos eletrônicos que atendesse às definições do PEN.',
        },
        {
          id: 'm1-pen-visao-geral-q2',
          prompt: 'Qual órgão apresentou o SEI na consulta pública mencionada no material?',
          options: [
            'A Escola Nacional de Administração Pública (Enap).',
            'O Tribunal Regional Federal da 4ª Região (TRF4).',
            'O Ministério da Economia.',
            'A Comissão de Valores Mobiliários (CVM).',
          ],
          correctIndex: 1,
          explanation:
            'Na consulta pública, o TRF4 apresentou o Sistema Eletrônico de Informações, que se mostrou adequado aos propósitos do PEN.',
        },
        {
          id: 'm1-pen-visao-geral-q3',
          prompt: 'Qual ferramenta permite que os cidadãos consultem o andamento dos processos de seu interesse, independentemente do órgão em que estiverem tramitando?',
          options: [
            'O Barramento de Serviços do PEN.',
            'O Sistema de Permissões (SIP).',
            'O Protocolo Integrado.',
            'O Sistema Eletrônico de Informações (SEI).',
          ],
          correctIndex: 2,
          explanation:
            'O Protocolo Integrado foi desenvolvido para permitir que os cidadãos consultem o andamento dos processos de seu interesse, independentemente do órgão em que estiverem tramitando. Trata-se de ferramenta que auxilia na promoção da transparência ativa.',
        },
        {
          id: 'm1-pen-visao-geral-q4',
          prompt: 'Entre as alternativas, qual está INCORRETA?',
          options: [
            'O SEI foi desenvolvido utilizando linguagem livre.',
            'A possibilidade de implantação do SEI em diferentes ambientes e realidades tecnológicas foi um dos pontos que o tornou adequado ao PEN.',
            'O Barramento de Serviços do PEN é a ferramenta que permite aos cidadãos consultar o andamento de processos de seu interesse.',
            'O SEI é o software de processo administrativo eletrônico selecionado no âmbito do PEN.',
          ],
          correctIndex: 2,
          explanation:
            'A consulta por parte dos cidadãos, independentemente do órgão em que o processo tramita, é função do Protocolo Integrado. O Barramento de Serviços do PEN viabiliza o trâmite entre órgãos que utilizam sistemas de processo administrativo eletrônico.',
        },
        {
          id: 'm1-pen-visao-geral-q5',
          prompt: 'Quais normas se destacam no arcabouço legal influenciado pelo projeto do PEN?',
          options: [
            'Decreto nº 8.539 e Portaria Interministerial nº 1.677.',
            'Decreto nº 70.235 e Lei nº 8.666.',
            'Portaria Conjunta MP/TRF4 nº 3 e Decreto nº 8.539.',
            'Lei de Abuso de Autoridade e Código de Ética do Servidor Público.',
          ],
          correctIndex: 0,
          explanation:
            'O material destaca, no arcabouço legal influenciado pelo projeto, o Decreto nº 8.539 e a Portaria Interministerial nº 1.677. A Portaria Conjunta MP/TRF4 nº 3 trata do modelo de governança, tema da Aula 5.',
        },
      ],
    },
    {
      id: 'm1-sip-sei-visao-geral',
      slug: 'm1-sip-sei-visao-geral',
      title: 'Aula 3 — Visão geral do SEI e conhecimento do SIP',
      estimatedMinutes: 25,
      objectives: [
        'Compreender a função do SIP como Sistema de Permissões.',
        'Identificar quais dados são cadastrados inicialmente no SIP.',
        'Diferenciar, quadro a quadro, as funções executadas no SIP e no SEI.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O SIP é o Sistema de Permissões que permite o cadastramento inicial de usuários, unidades, hierarquia das unidades e permissões. Ele foi concebido de forma generalista para atender a quaisquer sistemas que necessitem desses dados.',
        },
        {
          kind: 'bullets',
          heading: 'O que é cadastrado inicialmente no SIP',
          items: [
            'Usuários.',
            'Unidades.',
            'Hierarquia entre unidades.',
            'Permissões.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'SIP atende a um único sistema, mas foi criado para vários',
          text: 'O SIP atende a um único sistema, que é o SEI. Porém, por ter sido criado para atender vários sistemas, os dados básicos dos usuários e das unidades devem ser cadastrados inicialmente no SIP e, depois, nos casos específicos, complementados no SEI.',
        },
        {
          kind: 'paragraph',
          text: 'Dessa forma, dados específicos, que são utilizados no âmbito de cada sistema, devem ser complementados em cada um desses sistemas. No SEI, esses complementos vão desde a indicação dos perfis das unidades até a configuração de processos e documentos e a instrução processual.',
        },
        {
          kind: 'table',
          heading: 'Quadro comparativo entre as principais funções do SIP e do SEI',
          columns: ['SIP', 'SEI'],
          rows: [
            ['Criação de órgãos', 'Cadastramento de dados dos órgãos'],
            ['Criação de unidades', 'Cadastramento de dados das unidades'],
            ['Criação de hierarquia entre unidades', 'Indicação dos perfis das unidades'],
            ['Criação dos perfis de usuários', 'Gestão dos contatos'],
            ['Cadastramento de usuários', 'Configuração de processos e documentos'],
            ['Gestão da autenticação de usuários', 'Instrução processual'],
            ['Gestão de permissões', 'Gestão de permissões'],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática ao dividir os cadastros',
          text: 'Antes de iniciar qualquer configuração no SEI, confirme se o dado básico já existe no SIP (usuário, unidade, hierarquia e permissões). O SEI complementa o que foi cadastrado no SIP com os dados específicos do sistema, como perfis das unidades, contatos, configuração de processos e documentos e a instrução processual.',
        },
        {
          kind: 'definitions',
          heading: 'Termos desta aula',
          items: [
            {
              term: 'SIP',
              text: 'Sistema de Permissões que permite o cadastramento inicial de usuários, unidades, hierarquia das unidades e permissões, concebido de forma generalista.',
            },
            {
              term: 'Dados básicos',
              text: 'Usuários, unidades, hierarquia entre unidades e permissões, cadastrados inicialmente no SIP.',
            },
            {
              term: 'Dados específicos',
              text: 'Informações complementares, de uso de cada sistema, que devem ser cadastradas no próprio sistema — no caso do SEI.',
            },
          ],
        },
      ],
      keyPoints: [
        'O SIP é o Sistema de Permissões e concentra o cadastro inicial de usuários, unidades, hierarquia entre unidades e permissões.',
        'O SIP foi concebido de forma generalista para atender a quaisquer sistemas que necessitem desses dados.',
        'O SIP atende hoje a um único sistema, o SEI, mas foi concebido de forma generalista para atender a quaisquer sistemas que necessitem desses dados.',
        'Dados básicos de usuários e unidades são cadastrados no SIP e complementados no SEI.',
        'O SIP cria e gerencia permissões, perfis e autenticação; no SEI ficam perfis de unidades, contatos, configuração de processos e documentos e a instrução processual.',
      ],
      quiz: [
        {
          id: 'm1-sip-sei-visao-geral-q1',
          prompt: 'O que é o SIP?',
          options: [
            'O sistema que configura processos e documentos no órgão.',
            'O Sistema de Permissões, que permite o cadastramento inicial de usuários, unidades, hierarquia das unidades e permissões.',
            'A ferramenta de transparência ativa que permite aos cidadãos consultar processos.',
            'O sistema responsável pela instrução processual e pela gestão dos contatos.',
          ],
          correctIndex: 1,
          explanation:
            'O SIP é justamente o Sistema de Permissões, com função de cadastro inicial de usuários, unidades, hierarquia das unidades e permissões.',
        },
        {
          id: 'm1-sip-sei-visao-geral-q2',
          prompt: 'Onde os dados básicos dos usuários e das unidades devem ser cadastrados inicialmente?',
          options: [
            'No SEI, que depois os repassa ao SIP.',
            'No SIP, sendo complementados no SEI nos casos específicos.',
            'No Protocolo Integrado, junto com o Barramento de Serviços.',
            'Em planilhas da Enap, enviadas ao Ministério da Economia.',
          ],
          correctIndex: 1,
          explanation:
            'Como o SIP foi criado de forma generalista para vários sistemas, os dados básicos são cadastrados nele e depois complementados no SEI.',
        },
        {
          id: 'm1-sip-sei-visao-geral-q3',
          prompt: 'Pelo quadro comparativo, qual atividade é realizada no SIP?',
          options: [
            'Configuração de processos e documentos.',
            'Gestão dos contatos.',
            'Criação da hierarquia entre unidades.',
            'Indicação dos perfis das unidades.',
          ],
          correctIndex: 2,
          explanation:
            'A criação da hierarquia entre unidades é função do SIP. Já a configuração de processos e documentos, a gestão dos contatos e a indicação dos perfis das unidades são atividades do SEI.',
        },
        {
          id: 'm1-sip-sei-visao-geral-q4',
          prompt: 'Qual das alternativas descreve corretamente o SIP?',
          options: [
            'É o sistema responsável pela configuração de processos e documentos e pela gestão dos contatos.',
            'É o sistema responsável pela gestão dos contatos e pela indicação dos perfis das unidades.',
            'É o sistema responsável pela criação da hierarquia entre unidades, cadastro de usuários e gestão das permissões.',
            'É o sistema responsável pela instrução processual do órgão.',
          ],
          correctIndex: 2,
          explanation:
            'Criação de hierarquia entre unidades, cadastro de usuários e gestão de permissões são todas atividades do SIP; já a gestão dos contatos e a instrução processual são do SEI.',
        },
        {
          id: 'm1-sip-sei-visao-geral-q5',
          prompt: 'Um órgão identificou que precisa indicar os perfis das unidades e gerenciar os contatos. Onde essas atividades devem ser realizadas?',
          options: [
            'No SIP, porque são dados básicos.',
            'No SEI, complementando o que foi cadastrado inicialmente no SIP.',
            'No SIP para os perfis e no SEI para os contatos.',
            'Em ambiente próprio administrado pelo Ministério da Economia.',
          ],
          correctIndex: 1,
          explanation:
            'O quadro comparativo mostra que a indicação dos perfis das unidades e a gestão dos contatos são atividades do SEI; no SIP ficam apenas os dados básicos.',
        },
      ],
    },
    {
      id: 'm1-acesso-sip-sei',
      slug: 'm1-acesso-sip-sei',
      title: 'Aula 4 — Acesso ao SIP e ao SEI',
      estimatedMinutes: 20,
      objectives: [
        'Compreender que SIP e SEI possuem sistemas de login próprios.',
        'Identificar o endereço de acesso ao SEI do órgão.',
        'Construir corretamente o endereço de acesso ao SIP a partir do endereço do SEI.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Ambos os sistemas possuem login próprio, em que o usuário e senha de um não necessariamente acessará o outro. Isso significa que o cadastro feito em um sistema não elimina a necessidade de autenticação no outro.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilha comum: esperar as mesmas credenciais nos dois sistemas',
          text: 'Como cada sistema tem login próprio, o usuário e senha utilizados no SEI não necessariamente funcionam no SIP. Se a autenticação falhar ao acessar o SIP, verifique se está sendo usada a credencial específica desse sistema.',
        },
        {
          kind: 'steps',
          heading: 'Para acessar o SEI do órgão',
          items: [
            'Digitar no navegador de internet o endereço do SEI do órgão.',
            'Usar o endereço no formato www.sei.[o nome ou sigla do órgão que deseja acessar].gov.br.',
            'Informar o usuário e a senha na tela de login do SEI apresentada pelo sistema.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Para acessar o SIP do órgão',
          items: [
            'Adicionar "/SIP" após o endereço de acesso ao SEI da instituição.',
            'Digitar no navegador o endereço www.sei.[o nome ou sigla do órgão que deseja acessar].gov.br/SIP.',
            'Informar o usuário e a senha na tela de login do SIP apresentada pelo sistema.',
          ],
        },
        {
          kind: 'table',
          heading: 'Comparativo dos endereços de acesso',
          columns: ['Sistema', 'Endereço de acesso'],
          rows: [
            [
              'SEI',
              'www.sei.[o nome ou sigla do órgão que deseja acessar].gov.br',
            ],
            [
              'SIP',
              'www.sei.[o nome ou sigla do órgão que deseja acessar].gov.br/SIP',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Dica de boa prática',
          text: 'Como os endereços diferem apenas pelo sufixo /SIP, grave os dois atalhos no navegador com nomes distintos (por exemplo, SIP do órgão e SEI do órgão). Isso reduz a chance de acessar o sistema errado e confundi-lo com a falha de autenticação.',
        },
        {
          kind: 'paragraph',
          text: 'Vale observar que o nome ou sigla usado no endereço corresponde ao órgão que se deseja acessar. Ao trocar de órgão, todo o endereço muda, inclusive o sufixo /SIP do sistema de permissões.',
        },
      ],
      keyPoints: [
        'SEI e SIP possuem login próprio; o usuário e senha de um não necessariamente acessa o outro.',
        'O SEI é acessado por www.sei.[nome ou sigla do órgão].gov.br.',
        'O SIP é acessado adicionando /SIP ao final do endereço de acesso ao SEI da instituição.',
        'Após o sufixo, o SIP apresenta a sua própria tela de login.',
        'Erro de autenticação no SIP costuma estar relacionado ao uso das credenciais do SEI.',
      ],
      quiz: [
        {
          id: 'm1-acesso-sip-sei-q1',
          prompt: 'Qual é o endereço de acesso ao SIP de um órgão?',
          options: [
            'www.sip.[o nome ou sigla do órgão].gov.br',
            'www.sei.[o nome ou sigla do órgão].gov.br/SIP',
            'www.sei.[o nome ou sigla do órgão].gov.br/sip/geral',
            'sip.sei.[o nome ou sigla do órgão].gov.br',
          ],
          correctIndex: 1,
          explanation:
            'Para acessar o SIP basta adicionar /SIP após o endereço de acesso ao SEI da instituição, formando o endereço www.sei.[órgão].gov.br/SIP.',
        },
        {
          id: 'm1-acesso-sip-sei-q2',
          prompt: 'Qual das alternativas está INCORRETA a respeito do acesso ao SIP?',
          options: [
            'O SIP é acessado adicionando /SIP ao endereço de acesso ao SEI.',
            'O SIP possui tela de login própria.',
            'O SIP é acessado por um endereço com o domínio www.sip.[órgão].gov.br.',
            'O usuário e senha de um sistema não necessariamente acessa o outro.',
          ],
          correctIndex: 2,
          explanation:
            'Não existe um endereço separado com o domínio www.sip: o SIP é acessado pelo endereço do SEI acrescido do sufixo /SIP, conforme o material.',
        },
        {
          id: 'm1-acesso-sip-sei-q3',
          prompt: 'Sobre a autenticação nos dois sistemas, é correto afirmar que:',
          options: [
            'O login do SIP é automático quando o usuário já acessou o SEI.',
            'A senha do SEI é sempre reutilizada com sucesso no SIP.',
            'Ambos os sistemas possuem login próprio, e o usuário e senha de um não necessariamente acessa o outro.',
            'O SIP dispensa autenticação, pois é acessado apenas por administradores.',
          ],
          correctIndex: 2,
          explanation:
            'O material afirma que ambos os sistemas possuem login próprio e que as credenciais de um não necessariamente acessam o outro.',
        },
        {
          id: 'm1-acesso-sip-sei-q4',
          prompt:
            'Um servidor digitou www.sei.orgaoexemplo.gov.br no navegador e chegou à tela de login do SEI, mas precisava cadastrar a hierarquia entre unidades. O que ele deve fazer?',
          options: [
            'Tentar novamente o mesmo endereço, pois o SIP é acessado pelo mesmo login.',
            'Acessar www.sei.orgaoexemplo.gov.br/SIP, onde está a função de criação de hierarquia entre unidades.',
            'Solicitar ao usuário administrador do SEI que faça o cadastro por ele.',
            'Acessar o Protocolo Integrado para consultar a estrutura de unidades.',
          ],
          correctIndex: 1,
          explanation:
            'A criação de hierarquia entre unidades é função do SIP. Para chegar a ele, é preciso acrescentar o sufixo /SIP ao endereço de acesso ao SEI e fazer a autenticação na tela de login do SIP.',
        },
        {
          id: 'm1-acesso-sip-sei-q5',
          prompt: 'Ao montar o endereço do SIP, qual é a parte que precisa ser acrescentada ao endereço de acesso ao SEI da instituição?',
          options: [
            'O sufixo /SIP.',
            'O sufixo /permissoes.',
            'O prefixo SIP antes de www.',
            'O nome completo do órgão no final do endereço.',
          ],
          correctIndex: 0,
          explanation:
            'O material orienta adicionar "/SIP" após o endereço de acesso ao SEI da instituição para acessar o SIP do órgão.',
        },
      ],
    },
    {
      id: 'm1-governanca-sei',
      slug: 'm1-governanca-sei',
      title: 'Aula 5 — Visão geral do modelo de governança do SEI',
      estimatedMinutes: 20,
      objectives: [
        'Compreender por que o código-fonte do SEI não deve ser alterado.',
        'Identificar a função da Comunidade de Negócio SEI.',
        'Reconhecer a norma que instituiu o modelo de governança do SEI.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Dentro do modelo de governança do SEI, no Poder Executivo Federal, as evoluções e pedidos de correção são discutidos e priorizados por um comitê chamado de Comunidade de Negócio SEI.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Não altere o conteúdo do código-fonte',
          text: 'A recomendação de não alterar o conteúdo do código-fonte existe para que o SEI de cada órgão não venha a se distanciar da versão de referência, perdendo evoluções e correções de versões futuras da ferramenta.',
        },
        {
          kind: 'bullets',
          heading: 'Como funciona a Comunidade de Negócio SEI',
          items: [
            'É o comitê que discute e prioriza as evoluções e os pedidos de correção do SEI.',
            'É formado pelos gestores de negócio de órgãos que implantaram o sistema.',
            'As necessidades de evolução apontadas por eles são centralizadas em ambiente próprio.',
            'Esse ambiente próprio é administrado pelo Ministério da Economia.',
          ],
        },
        {
          kind: 'callout',
          tone: 'legal',
          title: 'Norma instituidora do modelo de governança',
          text: 'A Portaria Conjunta MP/TRF4 nº 3, de 16 de dezembro de 2014, instituiu o modelo de governança do Sistema Eletrônico de Informações (SEI) no âmbito do projeto Processo Eletrônico Nacional (PEN).',
        },
        {
          kind: 'steps',
          heading: 'Fluxo de uma necessidade de evolução',
          items: [
            'O gestor de negócio do órgão implantado aponta a necessidade de evolução.',
            'A necessidade é centralizada em ambiente próprio, administrado pelo Ministério da Economia.',
            'A Comunidade de Negócio SEI discute e prioriza as evoluções e os pedidos de correção.',
            'A solução entra como evolução do produto, preservando a versão de referência usada pelos demais órgãos.',
          ],
        },
        {
          kind: 'table',
          heading: 'Governança do SEI: quem faz o quê',
          columns: ['Ator', 'Responsabilidade'],
          rows: [
            [
              'Comunidade de Negócio SEI',
              'Discutir e priorizar as evoluções e os pedidos de correção do SEI no Poder Executivo Federal.',
            ],
            [
              'Gestores de negócio dos órgãos implantados',
              'Compor o comitê e apontar as necessidades de evolução do seu órgão.',
            ],
            [
              'Ministério da Economia',
              'Administrar o ambiente próprio onde as necessidades são centralizadas.',
            ],
          ],
        },
        {
          kind: 'definitions',
          heading: 'Termos desta aula',
          items: [
            {
              term: 'Modelo de governança do SEI',
              text: 'Conjunto de regras e instâncias que discutem e priorizam evoluções e correções do SEI, instituído no âmbito do PEN.',
            },
            {
              term: 'Comunidade de Negócio SEI',
              text: 'Comitê formado pelos gestores de negócio de órgãos que implantaram o sistema, responsável por discutir e priorizar evoluções e pedidos de correção.',
            },
            {
              term: 'Versão de referência',
              text: 'Versão da ferramenta da qual o SEI de cada órgão deve permanecer próximo, para não perder evoluções e correções futuras.',
            },
          ],
        },
      ],
      keyPoints: [
        'Não alterar o código-fonte evita que o SEI do órgão se distancie da versão de referência.',
        'Perder evoluções e correções de versões futuras é justamente o risco evitado por essa recomendação.',
        'A Comunidade de Negócio SEI discute e prioriza evoluções e pedidos de correção.',
        'O comitê é formado pelos gestores de negócio de órgãos que implantaram o sistema.',
        'As necessidades são centralizadas em ambiente próprio administrado pelo Ministério da Economia.',
        'O modelo de governança foi instituído pela Portaria Conjunta MP/TRF4 nº 3, de 16 de dezembro de 2014.',
      ],
      quiz: [
        {
          id: 'm1-governanca-sei-q1',
          prompt: 'Quem discute e prioriza as evoluções e os pedidos de correção do SEI?',
          options: [
            'O comitê Comunidade de Negócio SEI.',
            'Cada órgão implantado de forma independente.',
            'A Enap, como responsável técnica pelo curso.',
            'O Tribunal Regional Federal da 4ª Região, por meio do suporte técnico.',
          ],
          correctIndex: 0,
          explanation:
            'No modelo de governança do SEI, as evoluções e pedidos de correção são discutidos e priorizados pelo comitê Comunidade de Negócio SEI.',
        },
        {
          id: 'm1-governanca-sei-q2',
          prompt: 'De quem é formado o comitê Comunidade de Negócio SEI?',
          options: [
            'Dos servidores designados pelo Ministério da Economia para apoiar o sistema.',
            'Dos gestores de negócio de órgãos que implantaram o sistema.',
            'Dos usuários externos à instituição que protocolam documentos remotamente.',
            'Dos Tribunais Regionais Federais que movimentam processos nos órgãos.',
          ],
          correctIndex: 1,
          explanation:
            'O comitê é formado pelos gestores de negócio de órgãos que implantaram o sistema, e as necessidades apontadas por eles são centralizadas em ambiente próprio.',
        },
        {
          id: 'm1-governanca-sei-q3',
          prompt: 'Qual é a justificativa da recomendação de não alterar o conteúdo do código-fonte do SEI?',
          options: [
            'Para reduzir o tempo de carregamento das telas do sistema.',
            'Para que o SEI de cada órgão não se distancie da versão de referência, perdendo evoluções e correções de versões futuras.',
            'Para impedir que os gestores de negócio participem da evolução da ferramenta.',
            'Para evitar a contratação de empresas para manutenção do sistema.',
          ],
          correctIndex: 1,
          explanation:
            'A justificativa é exatamente essa: manter o SEI do órgão alinhado à versão de referência para não perder evoluções e correções de versões futuras.',
        },
        {
          id: 'm1-governanca-sei-q4',
          prompt: 'Quem administra o ambiente próprio onde são centralizadas as necessidades de evolução apontadas pelos gestores de negócio?',
          options: [
            'A Enap.',
            'O Ministério da Economia.',
            'O SIP do órgão.',
            'O Tribunal Regional Federal da 4ª Região.',
          ],
          correctIndex: 1,
          explanation:
            'As necessidades de evolução apontadas pelos gestores de negócio são centralizadas em ambiente próprio, administrado pelo Ministério da Economia.',
        },
        {
          id: 'm1-governanca-sei-q5',
          prompt: 'Qual norma instituiu o modelo de governança do SEI no âmbito do PEN?',
          options: [
            'A Portaria Conjunta MP/TRF4 nº 3, de 16 de dezembro de 2014.',
            'A Portaria Interministerial nº 1.677.',
            'O Decreto nº 8.539.',
            'O Acordo de Cooperação Técnica firmado em 2013.',
          ],
          correctIndex: 0,
          explanation:
            'A Portaria Conjunta MP/TRF4 nº 3, de 16 de dezembro de 2014, instituiu o modelo de governança do SEI no âmbito do PEN. O Decreto nº 8.539 e a Portaria Interministerial nº 1.677 compõem o arcabouço legal destacado do projeto.',
        },
        {
          id: 'm1-governanca-sei-q6',
          prompt:
            'A equipe técnica de um órgão alterou o código-fonte do SEI para acelerar uma correção urgente e a instalação deixou de acompanhar a versão de referência. Qual foi o efeito descrito no material?',
          options: [
            'A instalação passa a receber automaticamente todas as evoluções futuras.',
            'A instalação se distancia da versão de referência e pode perder evoluções e correções de versões futuras da ferramenta.',
            'O órgão ganha permissão para decidir sozinho todas as evoluções do SEI.',
            'A alteração é homologada pela Comunidade de Negócio SEI e vira referência nacional.',
          ],
          correctIndex: 1,
          explanation:
            'Alterar o código-fonte é justamente o que a governança do SEI recomenda evitar, para que o SEI do órgão não se distancie da versão de referência e perca evoluções e correções futuras.',
        },
      ],
    },
    {
      id: 'm1-modulos-sei',
      slug: 'm1-modulos-sei',
      title: 'Aula 6 — Necessidades específicas do órgão versus módulos do SEI',
      estimatedMinutes: 25,
      objectives: [
        'Compreender como o órgão pode atender a necessidades específicas por meio de módulos.',
        'Identificar as características dos módulos do SEI em relação ao núcleo do sistema.',
        'Reconhecer exemplos de módulos construídos para o SEI e seus objetivos.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Apesar das priorizações pelo comitê, podem surgir necessidades específicas de um órgão, próprias das suas atribuições ou configuração organizacional. Nesses casos, é possível que essa instituição opte por desenvolver um módulo do SEI.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'O que são os módulos do sistema',
          text: 'Os módulos do sistema são um conjunto de funcionalidades adicionais ao SEI e são desenvolvidos de maneira a não causar alterações no núcleo do sistema. Além disso, são incorporados à ferramenta, e sua implantação não é obrigatória para a utilização do sistema.',
        },
        {
          kind: 'bullets',
          heading: 'Características dos módulos do SEI',
          items: [
            'São um conjunto de funcionalidades adicionais ao SEI.',
            'São desenvolvidos de maneira a não causar alterações no núcleo do sistema.',
            'São incorporados à ferramenta.',
            'Sua implantação não é obrigatória para a utilização do sistema.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Reaproveitamento entre órgãos',
          text: 'Depois de desenvolvidos e homologados, os módulos podem ser disponibilizados para outras instituições com necessidades semelhantes por meio do Portal do Software Público Brasileiro.',
        },
        {
          kind: 'definitions',
          heading: 'Exemplos de módulos construídos para o SEI',
          items: [
            {
              term: 'Peticionamento eletrônico',
              text: 'Permite que usuários externos à instituição (pessoas físicas ou jurídicas) protocolem de maneira remota documentos no órgão. É voltado para as partes interessadas nos processos.',
            },
            {
              term: 'Pesquisa pública',
              text: 'Instrumento de transparência ativa que permite que os cidadãos consultem o conteúdo dos processos públicos do órgão.',
            },
            {
              term: 'Integração ao InCom',
              text: 'Permite publicar documentos que exigem publicidade diretamente no Diário Oficial da União.',
            },
          ],
        },
        {
          kind: 'table',
          heading: 'Necessidade atendida por cada módulo de exemplo',
          columns: ['Módulo', 'Necessidade atendida', 'Público'],
          rows: [
            [
              'Peticionamento eletrônico',
              'Protocolar documentos remotamente por quem está fora da instituição.',
              'Usuários externos (pessoas físicas ou jurídicas) e partes interessadas nos processos.',
            ],
            [
              'Pesquisa pública',
              'Consultar o conteúdo dos processos públicos do órgão, como instrumento de transparência ativa.',
              'Cidadãos em geral.',
            ],
            [
              'Integração ao InCom',
              'Publicar documentos que exigem publicidade.',
              'Órgão, com publicação no Diário Oficial da União.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Atenção à implantação de módulos',
          text: 'Um módulo que altere o núcleo do sistema descaracteriza a recomendação de governança. Ao avaliar a adoção de um módulo, confirme que ele não altera o núcleo do SEI, que está incorporado à ferramenta e que sua implantação continua sendo uma opção do órgão.',
        },
        {
          kind: 'paragraph',
          text: 'A existência dos módulos não substitui o papel da Comunidade de Negócio SEI: eles atendem a necessidades específicas de cada instituição, enquanto as evoluções do produto são discutidas e priorizadas pelo comitê.',
        },
      ],
      keyPoints: [
        'Necessidades específicas do órgão, ligadas às suas atribuições ou à configuração organizacional, podem ser atendidas por módulos do SEI.',
        'Módulos são funcionalidades adicionais, desenvolvidos sem alterar o núcleo do sistema.',
        'Os módulos são incorporados à ferramenta e sua implantação não é obrigatória.',
        'Módulos homologados podem ser disponibilizados a outras instituições pelo Portal do Software Público Brasileiro.',
        'Peticionamento eletrônico permite o protocolo remoto por usuários externos ao órgão.',
        'Pesquisa pública promove transparência ativa; a integração ao InCom publica no Diário Oficial da União.',
      ],
      quiz: [
        {
          id: 'm1-modulos-sei-q1',
          prompt: 'Qual das alternativas caracteriza corretamente um módulo do SEI?',
          options: [
            'É um programa externo ao SEI, instalado separadamente e de implantação obrigatória.',
            'É uma funcionalidade que só pode ser usada depois de alterados o código-fonte e o núcleo do sistema.',
            'É um conjunto de funcionalidades adicionais, desenvolvido sem alterar o núcleo do SEI e incorporado à ferramenta.',
            'É um componente substituto do SIP para os órgãos que precisam de permissões específicas.',
          ],
          correctIndex: 2,
          explanation:
            'Os módulos são funcionalidades adicionais ao SEI, desenvolvidos de maneira a não causar alterações no núcleo do sistema e incorporados à ferramenta.',
        },
        {
          id: 'm1-modulos-sei-q2',
          prompt: 'Qual afirmação sobre os módulos do SEI está INCORRETA?',
          options: [
            'São desenvolvidos sem causar alterações no núcleo do sistema.',
            'São incorporados à ferramenta.',
            'Sua implantação é obrigatória para a utilização do sistema.',
            'Podem ser disponibilizados a outras instituições após desenvolvimento e homologação.',
          ],
          correctIndex: 2,
          explanation:
            'O material é enfático: a implantação dos módulos não é obrigatória para a utilização do sistema.',
        },
        {
          id: 'm1-modulos-sei-q3',
          prompt: 'Um órgão precisa permitir que pessoas físicas e jurídicas externas protocolem documentos remotamente. Qual módulo atende a essa necessidade?',
          options: [
            'Pesquisa pública.',
            'Integração ao InCom.',
            'Peticionamento eletrônico.',
            'Módulo de relatórios e auditoria.',
          ],
          correctIndex: 2,
          explanation:
            'O módulo de peticionamento eletrônico permite que usuários externos à instituição (pessoas físicas ou jurídicas) protocolem de maneira remota documentos no órgão.',
        },
        {
          id: 'm1-modulos-sei-q4',
          prompt: 'Qual módulo permite publicar documentos que exigem publicidade diretamente no Diário Oficial da União?',
          options: [
            'Pesquisa pública.',
            'Peticionamento eletrônico.',
            'Integração ao InCom.',
            'Módulo de controle de acesso.',
          ],
          correctIndex: 2,
          explanation:
            'A integração ao InCom permite publicar documentos que exigem publicidade diretamente no Diário Oficial da União.',
        },
        {
          id: 'm1-modulos-sei-q5',
          prompt: 'Por meio de qual canal os módulos desenvolvidos e homologados podem ser disponibilizados a outras instituições com necessidades semelhantes?',
          options: [
            'Portal do Software Público Brasileiro.',
            'Ambiente próprio administrado pela Comunidade de Negócio SEI.',
            'Página institucional do SIP do órgão.',
            'Canal do Protocolo Integrado.',
          ],
          correctIndex: 0,
          explanation:
            'Depois de desenvolvidos e homologados, os módulos podem ser disponibilizados para outras instituições com necessidades semelhantes por meio do Portal do Software Público Brasileiro.',
        },
        {
          id: 'm1-modulos-sei-q6',
          prompt:
            'Um órgão quer atender a uma necessidade que é própria das suas atribuições. Qual é o caminho descrito no material?',
          options: [
            'Desenvolver um módulo do SEI, sem alterar o núcleo do sistema, e implantá-lo de forma opcional.',
            'Alterar o código-fonte do SEI para criar a funcionalidade no núcleo da ferramenta.',
            'Aguardar que outros órgãos proponham a mesma necessidade e que o módulo chegue à versão de referência.',
            'Substituir o SIP por um sistema próprio de permissões, já que a necessidade é específica do órgão.',
          ],
          correctIndex: 0,
          explanation:
            'Quando a necessidade é específica do órgão, é possível que a instituição opte por desenvolver um módulo do SEI, respeitando a regra de não alterar o núcleo do sistema.',
        },
      ],
    },
  ],
};
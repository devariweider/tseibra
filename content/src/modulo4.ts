import type { CourseModule } from './types.js';

export const modulo4: CourseModule = {
  id: 'mod-4',
  slug: 'administracao-parte-1',
  title: 'Módulo 4 — Administração do SEI (Parte I)',
  subtitle:
    'Tabelas de classificação e temporalidade, hipóteses legais, conferências, tipos de processo, editor de documentos, tipos de documento e formulários',
  description:
    'Este módulo reúne as funcionalidades de parametrização do SEI Administrar que underpin a organização documental do órgão: a Tabela de Assuntos e sua relação com a Tabela de Temporalidade, as Hipóteses Legais (e a operação Infralog), os Tipos de Conferência, os Tipos de Processo e sua relação com a Base de Referência do Poder Executivo. Em seguida, percorre o menu Editor, com as funcionalidades Tarja, Estilos, Formatos de Imagem Permitidos, Listar e Clonar, detalha a construção de modelos documento a documento por meio das seções Cabeçalho, Título do Documento, Corpo do Texto, Assinatura e Rodapé, e encerra com os Tipos de Documento (grupos, novo tipo, listagem e numeração) e com a funcionalidade Formulário, incluindo todos os tipos de campo disponíveis e os testes de visualização.',
  sourceRef:
    'Módulo 4 - Administração do SEI - Parte I.pdf (Enap, curso SEI! Administrar, 2019)',
  estimatedMinutes: 305,
  objectives: [
    'Cadastrar assuntos na Tabela de Assuntos, relacionando código, prazos de guarda e destinação final ao Código de classificação e à Tabela de Temporalidade.',
    'Diferenciar Tabela de Assuntos, Tabela de Temporalidade e Base de Referência do Poder Executivo.',
    'Criar, listar, reativar e excluir Hipóteses Legais, além de utilizar a operação Infralog para graus de sigilo.',
    'Criar e listar Tipos de Conferência para documentos externos incluídos no SEI.',
    'Cadastrar Tipos de Processo com assuntos sugeridos, restrições de acesso por órgão e unidade e níveis de acesso permitidos e sugeridos.',
    'Configurar o menu Editor: tarjas de assinatura, estilos, formatos de imagem permitidos e modelos de documento por meio de suas seções.',
    'Cadastrar Tipos de Documento, com grupos, aplicabilidade e tipos de numeração, e gerenciar formulários com seus tipos de campo e testes.',
  ],
  lessons: [
    {
      id: 'm4-tabela-assuntos',
      slug: 'tabela-assuntos',
      title: 'Tabela de Assuntos e Tabela de Temporalidade',
      estimatedMinutes: 35,
      objectives: [
        'Explicar a função da Tabela de Assuntos como base de parametrização dos tipos de processos.',
        'Diferenciar Tabela de Assuntos, Tabela de Temporalidade e Base de Referência do Executivo.',
        'Cadastrar um novo assunto com código, descrição, prazos de guarda e destinação final.',
        'Reconhecer as fases de guarda corrente, intermediária e permanente do arquivo.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'As instituições têm investido cada vez mais em ações que oportunizam o acesso à informação e aos arquivos públicos. Nesse cenário, o tratamento da informação é requisito fundamental para a disponibilização desses arquivos enquanto instrumento de garantia dos direitos do cidadão. O acesso às informações viabiliza o funcionamento eficiente da Administração Pública e atende às exigências da Lei nº 12.527/2011, Lei de Acesso à Informação (LAI).',
        },
        {
          kind: 'paragraph',
          text: 'No SEI, parte dessas exigências são atendidas por meio da funcionalidade "Tabela de Assuntos", que serve de base para a parametrização dos tipos de processos. Assim, todo processo aberto no SEI tem assuntos associados, a fim de viabilizar uma melhor classificação. O campo "Classificação por Assuntos", visível nas telas do SEI, é a disposição dessa classificação no trabalho do usuário.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Antes de cadastrar: de onde vêm os assuntos',
          text: 'Os órgãos da Administração Pública Federal, do Poder Executivo, já cuentan com o código de classificação de documentos de arquivo e a tabela de temporalidade para as atividades-meio (Resolução nº 14/2001 e Resolução nº 21/2004 do CONARQ). Essas estruturas já estão representadas na Base de Referência do Executivo, disponível no site do Software Público para inserção em massa no SEI pela equipe de TI. Quanto ao assunto da área-fim, o usuário deve se submeter ao Arquivo Nacional.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Onde obter a base para carga em massa',
          text: 'A lista de assuntos, que poderá ser previamente carregada pela equipe de TI, está disponível no site Software Público, em Base de Referência do Executivo. Entrando em softwarepublico.gov.br, há um link para acessar os documentos do SEI; do lado direito inferior da tela, é necessário clicar em "Base Dados Executivo" no menu DOWNLOAD. Ao final da nova tela aberta, haverá um link para fazer o download da base de dados.',
        },
        {
          kind: 'table',
          heading: 'Tabela de Assuntos x Tabela de Temporalidade',
          columns: ['Aspecto', 'Tabela de Assuntos', 'Tabela de Temporalidade'],
          rows: [
            [
              'Finalidade',
              'Base para a parametrização dos tipos de processos; classifica o assunto e o associa ao processo no SEI.',
              'Instrumento arquivístico resultante de avaliação, que tem por objetivos definir os prazos de guarda e destinação de documentos, com vista a garantir o acesso à informação a quantos dela necessitem.',
            ],
            [
              'Estrutura básica',
              'Tabela, Código, Descrição, Item apenas estrutural, prazos de guarda corrente e intermediária e destinação final.',
              'Conjuntos documentais produzidos e recebidos pela instituição no exercício de suas atividades, prazos de guarda nas fases corrente e intermediária, destinação final (eliminação ou guarda permanente) e campo para observações necessárias à compreensão e aplicação.',
            ],
            [
              'Onde é cadastrada',
              'No SEI Administrar, em Assuntos da Tabela, opção "Novo".',
              'No órgão ou entidade, com base na estimativa de uso, na manutenção em arquivo corrente ou intermediário e na destinação final.',
            ],
            [
              'Conteúdo da temporalidade',
              'Prazo corrente (documento sob a guarda do produtor) e prazo intermitente (tempo sob a guarda do arquivo intermediário aguardando a destinação final).',
              'Prazos de guarda e destinação final devem estar presentes na tabela de temporalidade do órgão ou entidade.',
            ],
          ],
        },
        {
          kind: 'definitions',
          heading: 'Fases de guarda do documento',
          items: [
            {
              term: 'Arquivo corrente',
              text: 'Conjunto de documentos que, pelo seu valor primário, é objeto de consultas frequentes pela entidade que o produziu, a quem compete a sua administração.',
            },
            {
              term: 'Arquivo intermediário',
              text: 'Conjunto de documentos originários de arquivos correntes, com uso pouco frequente nos órgãos produtores e que aguarda a eliminação ou o recolhimento para guarda permanente. É também chamado de pré-arquivo.',
            },
            {
              term: 'Arquivo permanente',
              text: 'Conjunto de documentos preservados em caráter definitivo em razão de seu valor histórico, probatório e informativo. É também chamado de arquivo histórico.',
            },
          ],
        },
        {
          kind: 'steps',
          heading: 'Incluir informações na Tabela de Assuntos',
          items: [
            'Realizar o login no SEI Administrar.',
            'Acessar a funcionalidade "Assuntos da Tabela".',
            'Clicar em "Novo", que permite a inserção de novos assuntos.',
            'Preencher os campos da tela de cadastro.',
            'Salvar a operação.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos do cadastro de assunto',
          columns: ['Campo', 'Como preencher'],
          rows: [
            [
              'Tabela',
              'Já vem preenchido automaticamente.',
            ],
            [
              'Código',
              'Informar o código correspondente ao assunto a ser registrado, segundo o modelo adotado pela Resolução nº 14, de 24 de outubro de 2001.',
            ],
            [
              'Descrição',
              'Informar o nome do assunto, por exemplo, classe, subclasse, grupo e subgrupo.',
            ],
            [
              'Item apenas estrutural',
              'Selecionar quando se tratar de código meramente agrupador, ou seja, caso não haja temporalidade e destinação final a ele associados.',
            ],
            [
              'Prazos de Guarda (anos) Corrente',
              'Informar o prazo constante na tabela de temporalidade relacionado à guarda na fase corrente do assunto. Prazo de guarda corrente é quando o documento fica sob a guarda do seu produtor.',
            ],
            [
              'Prazos de Guarda (anos) Intermitente',
              'Informar o prazo constante na tabela de temporalidade relacionado à guarda na fase intermediária. É o tempo que o documento fica sob a guarda do arquivo intermediário esperando sua destinação final, que poderá ser guarda permanente ou eliminação.',
            ],
            [
              'Destinação Final',
              'Selecionar a destinação constante na tabela de temporalidade: eliminação, quando o documento não apresenta valor secundário (probatório ou informativo), ou guarda permanente, quando as informações são consideradas importantes para fins de prova, informação e pesquisa.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilhas no cadastro de assuntos',
          text: 'Não se nomeia o assunto com palavras no plural. Item apenas estrutural não substitui a temporalidade: ele serve para códigos agrupadores, sem prazo e sem destinação. Quando os prazos não são definidos em anos, o órgão ou entidade deverá adotar um prazo padrão e informar essa definição no campo "Observação" — a temporalidade não pode ficar indefinida.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Prazo x destinação: campos distintos',
          text: 'O prazo de guarda responde "por quanto tempo"; a destinação final responde "o que acontece depois". Registrar a eliminação para documento com valor probatório ou informativo, ou registrar guarda permanente para documento descartável, compromete o acesso à informação garantido pela LAI e falseia a contagem de prazos de guarda.',
        },
      ],
      keyPoints: [
        'A Tabela de Assuntos é a base para a parametrização dos tipos de processos no SEI.',
        'Todo processo aberto no SEI tem assuntos associados para viabilizar uma melhor classificação.',
        'A Tabela de Temporalidade define prazos de guarda e destinação; a Base de Referência do Executivo já traz as atividades-meio.',
        'Assunto da área-fim deve ser submetido ao Arquivo Nacional.',
        'Prazo corrente é a guarda pelo produtor; prazo intermitente é a guarda pelo arquivo intermediário até a destinação final.',
        'Item apenas estrutural é para códigos agrupadores, sem temporalidade e sem destinação.',
      ],
      quiz: [
        {
          id: 'm4-tabela-assuntos-q1',
          prompt: 'Para que serve a funcionalidade "Tabela de Assuntos" no SEI?',
          options: [
            'Para servir de base para a parametrização dos tipos de processos.',
            'Para definir a assinatura digital dos documentos do órgão.',
            'Para controlar o acesso de usuários externos ao sistema.',
            'Para gerar a numeração sequencial dos documentos produzidos.',
          ],
          correctIndex: 0,
          explanation:
            'O material é explícito: no SEI, parte das exigências da LAI são atendidas por meio da funcionalidade "Tabela de Assuntos", que serve de base para a parametrização dos tipos de processos. Por isso todo processo aberto tem assuntos associados.',
        },
        {
          id: 'm4-tabela-assuntos-q2',
          prompt: 'Qual é a finalidade da Tabela de Temporalidade?',
          options: [
            'Parametrizar os tipos de processo do SEI.',
            'Definir prazos de guarda e destinação de documentos, garantindo o acesso à informação.',
            'Definir os níveis de acesso permitidos e sugeridos de cada processo.',
            'Classificar os tipos de documento em externos, internos e geral.',
          ],
          correctIndex: 1,
          explanation:
            'A tabela de temporalidade é um instrumento arquivístico resultante de avaliação, com o objetivo de definir os prazos de guarda e destinação de documentos, com vista a garantir o acesso à informação a quantos dela necessitem.',
        },
        {
          id: 'm4-tabela-assuntos-q3',
          prompt: 'Quando se deve selecionar a opção "Item apenas estrutural"?',
          options: [
            'Quando se tratar de código meramente agrupador, sem temporalidade e destinação final associadas.',
            'Sempre que o assunto tiver prazo de guarda corrente maior que zero.',
            'Quando a destinação final for a eliminação do documento.',
            'Quando o assunto for da área-fim e submetido ao Arquivo Nacional.',
          ],
          correctIndex: 0,
          explanation:
            'O item apenas estrutural sinaliza um código agrupador, isto é, um código que não possui temporalidade nem destinação final associadas.',
        },
        {
          id: 'm4-tabela-assuntos-q4',
          prompt: 'Qual é a diferença entre o prazo de guarda corrente e o prazo de guarda intermitente?',
          options: [
            'O corrente é definido pelo órgão; o intermitente, pelo Arquivo Nacional.',
            'O corrente é o tempo em que o documento fica sob a guarda do seu produtor; o intermitente é o tempo em que fica sob a guarda do arquivo intermediário aguardando a destinação final.',
            'O corrente vale apenas para documentos externos; o intermitente, para documentos internos.',
            'São sinônimos: o SEI registra o mesmo prazo nos dois campos.',
          ],
          correctIndex: 1,
          explanation:
            'O material define os dois prazos: prazo de guarda corrente é quando o documento fica sob a guarda do seu produtor; prazo de guarda intermitente é o tempo que o documento fica sob a guarda do arquivo intermediário esperando sua destinação final, que poderá ser guarda permanente ou eliminação.',
        },
        {
          id: 'm4-tabela-assuntos-q5',
          prompt: 'Como o órgão deve proceder quando os prazos de guarda não são definidos em anos?',
          options: [
            'Deixar os campos de prazo em branco, para não frustrar a tabela.',
            'Adotar um prazo padrão e informar essa definição no campo "Observação".',
            'Converter automaticamente todos os prazos para anos.',
            'Classificar o assunto como item apenas estrutural.',
          ],
          correctIndex: 1,
          explanation:
            'A observação do material é categórica: no caso em que os prazos não são definidos em anos, o órgão ou entidade deverá adotar um prazo padrão e informar essa definição no campo "Observação".',
        },
        {
          id: 'm4-tabela-assuntos-q6',
          prompt: 'De onde o órgão obtém a lista de assuntos das atividades-meio para carga em massa no SEI?',
          options: [
            'Do site Software Público, na Base de Referência do Executivo, por meio da opção "Base Dados Executivo" no menu DOWNLOAD.',
            'Diretamente do Arquivo Nacional, sem necessidade de projeto de cooperation.',
            'Do cadastro de usuários do SIP.',
            'Da Base de Referência do Poder Executivo de hipóteses legais.',
          ],
          correctIndex: 0,
          explanation:
            'A lista de assuntos previamente carregada pela equipe de TI está disponível no site Software Público, em Base de Referência do Executivo: em softwarepublico.gov.br, clica-se no link de documentos do SEI, depois em "Base Dados Executivo" no menu DOWNLOAD, e no final da nova tela há o link de download da base.',
        },
      ],
    },
    {
      id: 'm4-hipoteses-legais',
      slug: 'hipoteses-legais',
      title: 'Hipóteses Legais e a operação Infralog',
      estimatedMinutes: 30,
      objectives: [
        'Justificar a base legal de cada nível de acesso a informação no sistema.',
        'Criar Hipóteses Legais preenchendo os campos da tela "Nova Hipótese Legal".',
        'Listar, desativar, reativar e excluir Hipóteses Legais, inclusive em massa.',
        'Utilizar a operação Infralog para documentos classificados em grau de sigilo, observadas as restrições legais.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Para cada nível de acesso, é necessário justificar a base legal para seu uso, pois todos têm direito de receber dos órgãos públicos informações de seu interesse particular ou de interesse coletivo ou geral, de acordo com o artigo 5º, inciso XXXIII, da Constituição Federal.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Saiba mais sobre a LAI',
          text: 'A Lei de Acesso à Informação (LAI), Lei nº 12.527/2011, regulamentada pelo Decreto nº 7.724/2012, entrou em vigor em 16 de maio de 2012 e criou mecanismos que possibilitam a qualquer pessoa, física ou jurídica, sem necessidade de apresentar motivo, o recebimento de informações públicas dos órgãos e entidades. A lei vale para os três poderes da União, estados, Distrito Federal e municípios, inclusive aos Tribunais de Conta e Ministério Público.',
        },
        {
          kind: 'paragraph',
          text: 'O SEI traz as Hipóteses Legais, também chamadas de "Base de Referência do Poder Executivo", das restrições de acesso mais comuns configuradas. Ainda assim, caso haja necessidade de inserir novas Hipóteses Legais, o usuário deverá cadastrá-las manualmente.',
        },
        {
          kind: 'steps',
          heading: 'Cadastrar uma nova Hipótese Legal',
          items: [
            'Após acessar a funcionalidade de Hipóteses Legais no menu de Administração, clicar na opção "Novo".',
            'Aparecerá a tela chamada "Nova Hipótese Legal".',
            'Preencher os campos: Nível de Restrição de Acesso, Nome, Base Legal e Descrição.',
            'Salvar a operação.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos da tela "Nova Hipótese Legal"',
          columns: ['Campo', 'Como preencher'],
          rows: [
            [
              'Nível de Restrição de Acesso',
              'Selecionar a opção "Sigiloso" ou "Restrito".',
            ],
            [
              'Nome',
              'Digitar um nome resumo sobre a hipótese a ser cadastrada.',
            ],
            [
              'Base Legal',
              'Digitar de qual lei se trata a hipótese. Sugere-se escrever no formato: art. XX da Lei XXXX/XXXX.',
            ],
            [
              'Descrição',
              'Inserir informações adicionais referentes à hipótese.',
            ],
          ],
        },
        {
          kind: 'steps',
          heading: 'Listar e gerir Hipóteses Legais',
          items: [
            'Acessar a funcionalidade e clicar na opção "Listar".',
            'A relação aparece em ordem alfabética de Nome.',
            'Do lado direito de cada Hipótese, utilizar os ícones de visualizar, alterar, desativar e excluir individualmente.',
            'No menu superior acima da lista, usar as funcionalidades de desativar ou excluir em massa após selecionar mais de um nome.',
          ],
        },
        {
          kind: 'definitions',
          heading: 'Operações de interesse',
          items: [
            {
              term: 'Reativar',
              text: 'Operação que permite reativar as Hipóteses Legais que, em algum momento, foram desativadas.',
            },
            {
              term: 'Infralog',
              text: 'Operação diretamente relacionada às previsões da Lei de Acesso à Informação (Lei nº 12.527/2011), que permite selecionar uma das opções: ultrassecreto, secreto e reservado.',
            },
            {
              term: 'Hipótese Legal / Base de Referência do Poder Executivo',
              text: 'Base legal que fundamenta a restrição de acesso de um documento. O SEI já traz as hipóteses das restrições de acesso mais comuns configuradas.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Sigilo no SEI: uma decisão sensível do órgão',
          text: 'Por força do decreto que regulamenta a LAI e das normas e diretrizes expedidas pelo Gabinete de Segurança Institucional da Presidência da República (GSI/PR), recomenda-se que o SEI não seja utilizado para registro de documentos classificados em grau de sigilo. O artigo 39 do Decreto nº 7.845, de 14 de novembro de 2012, exige que documentos com informação classificada em qualquer grau de sigilo estejam isolados ou ligados a canais de comunicação seguros, física ou logicamente isolados de qualquer outro, com recursos criptográficos e de segurança adequados à sua proteção.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Revalidação periódica',
          text: 'De acordo com o artigo 39 caput da Lei nº 12.527/2011, os órgãos e entidades precisam revalidar as classificações dos documentos identificados no grau secreto e ultrassecreto, com assessoramento da Comissão Permanente de Avaliação de Documentos Sigilosos (CPADS). A CPADS é constituída com as atribuições do artigo 34 do Decreto nº 7.724, entre elas opinar sobre a classificação em qualquer grau de sigilo e assessorar a autoridade classificadora quanto à desclassificação, reclassificação ou reavaliação.',
        },
        {
          kind: 'bullets',
          heading: 'Cuidados ao cadastrar a base legal',
          items: [
            'Escrever a base legal no padrão art. XX da Lei XXXX/XXXX, para permitir conferência rápida.',
            'Nomear a hipótese como resumo curto, pois ela é apresentada em listas em ordem alfabética.',
            'Preencher a Descrição com informações adicionais que ajudem a justificar o uso da restrição.',
            'Desativar, em vez de excluir, hipóteses que ainda sejam usadas em processos em andamento.',
          ],
        },
      ],
      keyPoints: [
        'Todo nível de acesso precisa de base legal: é o que a Hipótese Legal registra no SEI.',
        'O padrão de escrita sugerido para a Base Legal é art. XX da Lei XXXX/XXXX.',
        'O Nível de Restrição de Acesso aceita apenas Sigiloso ou Restrito.',
        'A listagem é alfabética por Nome, com ações individual e em massa.',
        'A operação Reativar recupera hipóteses desativadas.',
        'Infralog atende à LAI, com as opções ultrassecreto, secreto e reservado.',
      ],
      quiz: [
        {
          id: 'm4-hipoteses-legais-q1',
          prompt: 'Por que cada nível de acesso precisa de uma base legal no SEI?',
          options: [
            'Porque a Constituição Federal (art. 5º, XXXIII) assegura a qualquer pessoa o direito de receber informações públicas, inclusive de interesse particular, coletivo ou geral.',
            'Porque a Lei de Acesso à Informação restringe o acesso a documentos digitalizados.',
            'Porque o Decreto nº 7.724/2012 proíbe o uso de nível público no SEI.',
            'Porque a CPADS exige a aprovação de toda classificação antes do registro no sistema.',
          ],
          correctIndex: 0,
          explanation:
            'O material explica que, para cada nível de acesso, é necessário justificar a base legal para seu uso, pois todos têm direito de receber dos órgãos públicos informações de seu interesse particular ou coletivo ou geral, conforme o artigo 5º, inciso XXXIII, da Constituição Federal.',
        },
        {
          id: 'm4-hipoteses-legais-q2',
          prompt: 'Qual o formato sugerido no material para preencher o campo "Base Legal"?',
          options: [
            'Nome da lei e número do capítulo.',
            'art. XX da Lei XXXX/XXXX.',
            'Link para o texto da lei no site do Planalto.',
            'Ano de vigência e órgão que editou a norma.',
          ],
          correctIndex: 1,
          explanation:
            'O campo Base Legal pede que se indique de qual lei se trata a hipótese, sugerindo-se o formato art. XX da Lei XXXX/XXXX.',
        },
        {
          id: 'm4-hipoteses-legais-q3',
          prompt: 'Quais valores o campo "Nível de Restrição de Acesso" aceita ao cadastrar uma Hipótese Legal?',
          options: [
            'Sigiloso ou Restrito.',
            'Público, restrito ou sigiloso.',
            'Ultrassecreto, secreto ou reservado.',
            'Sigiloso, restrito, reservado, secreto ou público.',
          ],
          correctIndex: 0,
          explanation:
            'Na tela "Nova Hipótese Legal", o campo Nível de Restrição de Acesso aceita as opções "Sigiloso" ou "Restrito". As opções de grau de sigilo (ultrassecreto, secreto e reservado) pertencem à operação Infralog.',
        },
        {
          id: 'm4-hipoteses-legais-q4',
          prompt: 'O que faz a operação "Reativar"?',
          options: [
            'Reativa as Hipóteses Legais que foram desativadas em algum momento.',
            'Reabre processos encerrados que utilizzavam hipóteses restritas.',
            'Reclassifica documentos de grau secreto para reservado.',
            'Recarrega a Base de Referência do Poder Executivo no SEI.',
          ],
          correctIndex: 0,
          explanation:
            'Por meio da operação "Reativar", o usuário terá a possibilidade de reativar as Hipóteses Legais que, em algum momento, foram desativadas.',
        },
        {
          id: 'm4-hipoteses-legais-q5',
          prompt: 'Quais opções a operação Infralog disponibiliza?',
          options: [
            'Público, restrito e sigiloso.',
            'Ultrassecreto, secreto e reservado.',
            'Corrente, intermediário e permanente.',
            'Interno, externo e geral.',
          ],
          correctIndex: 1,
          explanation:
            'A operação Infralog está diretamente relacionada às previsões da LAI (reservadas, secretas e ultrassecretas) e a tela permite selecionar uma das opções: ultrassecreto, secreto e reservado.',
        },
        {
          id: 'm4-hipoteses-legais-q6',
          prompt: 'Qual orientação o material traz sobre o uso do SEI para documentos classificados em grau de sigilo?',
          options: [
            'É recomendado, pois o SEI possui criptografia própria para todos os níveis de sigilo.',
            'Recomenda-se que o SEI não seja utilizado para registro de documentos classificados em grau de sigilo; se o órgão decidir pela inclusão, deve observar os requisitos de isolamento e recursos criptográficos do Decreto nº 7.845/2012.',
            'É permitido desde que a Hipótese Legal esteja cadastrada no sistema.',
            'É permitido apenas para grau reservado, vedado para secreto e ultrassecreto.',
          ],
          correctIndex: 1,
          explanation:
            'Por força do decreto que regulamenta a LAI e das diretrizes do GSI/PR, recomenda-se que o SEI não seja utilizado para registro de documentos classificados em grau de sigilo. Caso o órgão decida pela inclusão, o artigo 39 do Decreto nº 7.845/2012 exige isolamento ou canais seguros, física ou logicamente isolados, com recursos criptográficos adequados.',
        },
      ],
    },
    {
      id: 'm4-tipos-conferencia',
      slug: 'tipos-conferencia',
      title: 'Tipos de Conferência',
      estimatedMinutes: 25,
      objectives: [
        'Identificar por que a conferência do documento externo é informação fundamental para o trabalho arquivístico.',
        'Criar um Tipo de Conferência no SEI Administrar.',
        'Listar e gerir os Tipos de Conferência cadastrados.',
        'Relacionar a conferência realizada com a política de gestão documental arquivística do órgão.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Os tipos de conferência são selecionados pelo usuário quando um documento externo é incluído no sistema e há a necessidade de informar se o documento digitalizado é original, cópia simples, cópia autenticada administrativamente ou cópia autenticada em cartório, nos termos do artigo 11 do Decreto nº 8.539, de 8 de outubro de 2015.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Não é um detalhe menor',
          text: 'Apesar de parecer simples, essa informação é fundamental, uma vez que impacta muito no trabalho arquivístico, principalmente quando os documentos alcançam sua temporalidade de serem descartados ou destinados para o Arquivo Central do órgão ou entidade.',
        },
        {
          kind: 'table',
          heading: 'Tipos de conferência previstos no Decreto nº 8.539/2015',
          columns: ['Tipo de conferência', 'O que a seleção declara sobre o documento digitalizado'],
          rows: [
            [
              'Original',
              'O documento digitalizado corresponde ao documento original.',
            ],
            [
              'Cópia simples',
              'O documento digitalizado corresponde a uma cópia simples.',
            ],
            [
              'Cópia autenticada administrativamente',
              'O documento digitalizado corresponde a cópia autenticada administrativamente.',
            ],
            [
              'Cópia autenticada em cartório',
              'O documento digitalizado corresponde a cópia autenticada em cartório.',
            ],
          ],
        },
        {
          kind: 'paragraph',
          text: 'Na operação "Tipos de Conferência" destacam-se duas funcionalidades: criar um Tipo de Conferência e visualizar os Tipos de Conferência.',
        },
        {
          kind: 'steps',
          heading: 'Criar um Tipo de Conferência',
          items: [
            'Acessar a funcionalidade "Tipos de Conferência" no menu de Administração do SEI.',
            'Selecionar a opção para criar um novo Tipo de Conferência.',
            'Informar os dados do tipo de conferência.',
            'Salvar a operação.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Visualizar os Tipos de Conferência já criados',
          items: [
            'Acessar a funcionalidade e selecionar a opção de listagem.',
            'A relação aparece em ordem alfabética de Descrição.',
            'Do lado direito de cada Tipo, usar os ícones de visualizar, alterar, desativar e excluir individualmente.',
            'No menu superior disponível acima da lista, usar as funcionalidades de desativar ou excluir em massa, caso seja selecionado mais de um item.',
          ],
        },
        {
          kind: 'bullets',
          heading: 'Ações disponíveis na listagem',
          items: [
            'Visualizar um Tipo de Conferência específico.',
            'Alterar um Tipo de Conferência.',
            'Desativar um Tipo de Conferência.',
            'Excluir individualmente um Tipo de Conferência.',
            'Desativar ou excluir em massa, quando mais de um item estiver selecionado.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Política de gestão documental arquivística',
          text: 'É importante que o órgão ou entidade defina sua política de gestão documental arquivística minimizando a necessidade de guarda de documentos, tais como as cópias que não precisam ser mantidas nos arquivos físicos do órgão e que podem ser descartadas ou devolvidas ao interessado.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Conferência e descarte',
          text: 'Registrar corretamente a conferência desde a inclusão do documento externo evita guarda desnecessária: cópias simples e cópias autenticadas não têm o mesmo valor de prova que o original, e é essa distinção que autoriza, no momento da destinação, o descarte ou a devolução ao interessado em vez do envio ao Arquivo Central do órgão ou entidade.',
        },
      ],
      keyPoints: [
        'A conferência é informada quando um documento externo é incluído no SEI.',
        'As opções são original, cópia simples, cópia autenticada administrativamente e cópia autenticada em cartório.',
        'A base normativa é o artigo 11 do Decreto nº 8.539, de 8 de outubro de 2015.',
        'A informação impacta diretamente o trabalho arquivístico na destinação do documento.',
        'A listagem é alfabética por Descrição, com ações individual e em massa.',
        'A política arquivística do órgão deve reduzir a guarda de cópias descartáveis.',
      ],
      quiz: [
        {
          id: 'm4-tipos-conferencia-q1',
          prompt: 'Em que momento o usuário seleciona o tipo de conferência no SEI?',
          options: [
            'Quando um documento externo é incluído no sistema.',
            'Quando o processo é iniciado pelo menu "Iniciar Processo".',
            'Quando o documento é assinado eletronicamente.',
            'Quando o documento é publicado em veículo de publicação.',
          ],
          correctIndex: 0,
          explanation:
            'Os tipos de conferência são selecionados pelo usuário quando um documento externo é incluído no sistema, para informar se o documento digitalizado é original, cópia simples, cópia autenticada administrativamente ou cópia autenticada em cartório.',
        },
        {
          id: 'm4-tipos-conferencia-q2',
          prompt: 'Qual dispositivo legal sustenta os tipos de conferência no SEI?',
          options: [
            'O artigo 5º, inciso XXXIII, da Constituição Federal.',
            'O artigo 11 do Decreto nº 8.539, de 8 de outubro de 2015.',
            'O artigo 34 do Decreto nº 7.724/2012.',
            'O artigo 39 do Decreto nº 7.845/2012.',
          ],
          correctIndex: 1,
          explanation:
            'O material indica expressamente o artigo 11 do Decreto nº 8.539, de 8 de outubro de 2015, como base dos tipos de conferência previstos no SEI.',
        },
        {
          id: 'm4-tipos-conferencia-q3',
          prompt: 'Por que a informação do tipo de conferência é considerada fundamental?',
          options: [
            'Porque define o nível de acesso do documento no SEI.',
            'Porque impacta muito no trabalho arquivístico, principalmente quando os documentos alcançam sua temporalidade de serem descartados ou destinados ao Arquivo Central.',
            'Porque define o tipo de numeração do documento.',
            'Porque obriga a assinatura de todos os documentos externos.',
          ],
          correctIndex: 1,
          explanation:
            'Apesar de parecer simples, essa informação é fundamental, uma vez que impacta muito no trabalho arquivístico, principalmente quando os documentos alcançam sua temporalidade de serem descartados ou destinados para o Arquivo Central do órgão ou entidade.',
        },
        {
          id: 'm4-tipos-conferencia-q4',
          prompt: 'Por qual critério a lista de Tipos de Conferência é apresentada?',
          options: [
            'Em ordem alfabética de Descrição.',
            'Em ordem alfabética de Nome.',
            'Pela ordem de criação do registro.',
            'Pela ordem cronológica da última alteração.',
          ],
          correctIndex: 0,
          explanation:
            'Ao realizar o passo a passo de visualização, a relação aparecerá em ordem alfabética de Descrição. Nas Hipóteses Legais, por outro lado, a ordem é alfabética de Nome.',
        },
        {
          id: 'm4-tipos-conferencia-q5',
          prompt: 'Quais ações os ícones à direita de cada Tipo de Conferência permitem?',
          options: [
            'Visualizar, alterar, desativar e excluir individualmente.',
            'Visualizar, duplicar, imprimir e arquivar.',
            'Assinar, publicar, notificar e transmitir.',
            'Clonar, exportar, renomear e mover.',
          ],
          correctIndex: 0,
          explanation:
            'Do lado direito de cada Tipo, há quatro ícones que representam as funcionalidades de visualizar, alterar, desativar e excluir individualmente; no menu superior há ainda ações de desativar e excluir em massa.',
        },
      ],
    },
    {
      id: 'm4-tipo-processo',
      slug: 'tipo-processo',
      title: 'Tipo de Processo e Base de Referência',
      estimatedMinutes: 35,
      objectives: [
        'Identificar as configurações próprias do cadastro de tipo de processo.',
        'Diferenciar o cadastro próprio do Tipo de Processo da Base de Referência do Poder Executivo.',
        'Cadastrar um novo tipo de processo com assuntos, restrições e níveis de acesso.',
        'Reconhecer as opções de exclusividade, unicidade e uso interno do tipo de processo.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O cadastro do tipo de processo possui configurações próprias, que o administrador pode ajustar independentemente do uso da Base de Referência do Poder Executivo. Essa base é elaborada por um grupo de trabalho e pode ser carregada no momento da instalação do SEI.',
        },
        {
          kind: 'bullets',
          heading: 'Configurações próprias do tipo de processo',
          items: [
            'Podem ser associados um ou mais assuntos, com base no Código de classificação de documentos.',
            'Pode ser restringida a apresentação do tipo de processo a determinados órgãos ou unidades.',
            'Pode ser definido o nível de acesso e a respectiva Hipótese Legal.',
          ],
        },
        {
          kind: 'table',
          heading: 'Tipo de Processo x Base de Referência do Poder Executivo',
          columns: ['Aspecto', 'Tipo de Processo', 'Base de Referência do Poder Executivo'],
          rows: [
            [
              'Origem',
              'Cadastro realizado pelo administrador do SEI, conforme a necessidade do órgão.',
              'Base elaborada por grupo de trabalho, carregada no momento da instalação do SEI.',
            ],
            [
              'Classificação',
              'O campo "Sugestão de Assuntos" associa o processo à classificação baseada no Código de classificação de documentos.',
              'Cada tipo de processo já vem associado automaticamente a uma classificação baseada no Código de classificação de documentos, conforme a tela "Iniciar Processo".',
            ],
            [
              'Controle de acesso',
              'Permite restringir órgãos e unidades, definir níveis de acesso permitidos e sugeridos e indicar a Hipótese Legal sugerida.',
              'Traz as configurações de acesso e as hipóteses legais já configuradas.',
            ],
            [
              'Dependência',
              'Pode ser cadastrado mesmo sem a Base de Referência instalada.',
              'Não é pré-requisito para cadastrar novos tipos de processo.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Fique atento',
          text: 'Na Base de Referência do Poder Executivo, consta o Plano de classificação, temporalidade e destinação de documentos de arquivo relativos às atividades-meio da Administração Pública, conforme Resolução nº 14/2001 e Resolução nº 21/2004 do CONARQ.',
        },
        {
          kind: 'steps',
          heading: 'Cadastrar um novo Tipo de Processo',
          items: [
            'Acessar a funcionalidade de Tipos de Processo no menu de Administração.',
            'Clicar na opção "Novo".',
            'Aparecerá a tela chamada "Novo Tipo de Processo".',
            'Preencher os campos de identificação, assuntos, restrições e níveis de acesso.',
            'Salvar a operação.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos de identificação e restrição do Novo Tipo de Processo',
          columns: ['Campo', 'Como preencher'],
          rows: [
            [
              'Nome',
              'Digitar o nome do tipo de processo, conforme previamente definido.',
            ],
            [
              'Descrição',
              'Digitar informações que caracterizem do que se trata o tipo de processo.',
            ],
            [
              'Sugestão de Assuntos',
              'Clicar na lupa e selecionar a classificação conforme o Código de classificação de documentos que se relaciona com o tipo de processo. Pode ser selecionado mais de um assunto. O campo não é obrigatório, mas a sugestão é que seja informado sempre; em caso de dúvidas, recomenda-se buscar a orientação de um arquivista.',
            ],
            [
              'Restringir aos Órgãos',
              'Clicar na lupa e selecionar o órgão que terá acesso a esse tipo de processo. Só será preenchido em caso de restrição a um determinado órgão, na instalação multi-órgãos, ou de restrição à determinada unidade administrativa.',
            ],
            [
              'Restringir às Unidades',
              'Clicar na lupa e selecionar a unidade administrativa para a qual o processo será apresentado na lista de tipos de processo no menu "Iniciar Processo". É recomendável usar apenas nos casos de processos abertos por um setor específico, como o "Assentamento Funcional", gerado somente pelas áreas de recursos humanos.',
            ],
          ],
        },
        {
          kind: 'table',
          heading: 'Campos de controle de acesso e de comportamento',
          columns: ['Campo', 'Como preencher'],
          rows: [
            [
              'Níveis de Acesso Permitidos',
              'Campo obrigatório. Clicar em uma ou mais opções: sigiloso, restrito ou público.',
            ],
            [
              'Níveis de Acesso Sugerido',
              'Campo obrigatório. Clicar em uma ou mais opções: sigiloso, restrito ou público.',
            ],
            [
              'Sugestão de Hipótese Legal',
              'Clicar na seta e selecionar a sugestão de Hipótese Legal, somente nos casos em que as opções restrito ou sigiloso forem selecionadas no "Nível de Acesso Sugerido".',
            ],
            [
              'Exclusivo da ouvidoria',
              'Selecionar quando os tipos de processos somente poderão ser iniciados pelas unidades administrativas com perfil de ouvidoria do órgão ou entidade.',
            ],
            [
              'Processo único no órgão por usuário interessado',
              'Selecionar quando não puder ser gerado mais de um mesmo tipo de processo com o mesmo interessado.',
            ],
            [
              'Interno do sistema',
              'Selecionar quando o tipo de processo não deve aparecer para o usuário.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Padronizar descritores de processos',
          text: 'É importante que se faça um levantamento de todos os principais processos do órgão ou entidade a fim de se estabelecer um padrão para a descrição de cada tipo de processo, buscando minimizar a ocorrência de tipos de processos com a mesma função sendo descritos de forma diferente, o que causa dúvidas e perda de informações estatísticas estratégicas. O uso desses descritores também é de grande ajuda para o usuário final no momento da escolha do tipo de processo. Exemplo de padrão: Gestão de Contrato: Acompanhamento da Execução; Gestão de Contrato: Alteração Contratual; Gestão de Contrato: Apuração de Responsabilidade; Gestão de Contrato: Aplicação de Sanção.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilhas no cadastro do tipo de processo',
          text: 'Não se nomeia o processo com palavras no plural. Quando não for possível realizar o estudo e a definição dos níveis de acesso permitidos e sugeridos para cada tipo de processo, conforme a política de segurança da informação do órgão, deve-se selecionar todas as opções — a escolha indiscriminada precisa ser uma decisão consciente, não automática.',
        },
        {
          kind: 'paragraph',
          text: 'Além do cadastro, é possível listar e fazer a gestão dos tipos de processos existentes. A classificação definida na Base de Referência aparece automaticamente na tela "Iniciar Processo", e é ali que o usuário final escolhe o tipo de processo e os assuntos associados.',
        },
      ],
      keyPoints: [
        'O tipo de processo pode ter assuntos, restrições de órgão/unidade e nível de acesso com Hipótese Legal.',
        'A Base de Referência do Poder Executivo já associa classificação a cada tipo de processo na instalação.',
        'Nome e Descrição devem seguir descritores padronizados pelo órgão, para não quebrar estatísticas.',
        'Não se nomeia o processo com palavras no plural.',
        'Sugestão de Hipótese Legal só se aplica quando o nível de acesso sugerido for restrito ou sigiloso.',
        'Restringir às Unidades é recomendado para processos abertos por um setor específico, como o Assentamento Funcional.',
      ],
      quiz: [
        {
          id: 'm4-tipo-processo-q1',
          prompt: 'Quais são as configurações próprias do cadastro do tipo de processo?',
          options: [
            'Nome, descrição e estilo do documento.',
            'Associação de assuntos pelo Código de classificação, restrição a órgãos ou unidades e definição de nível de acesso com Hipótese Legal.',
            'Grupo, aplicabilidade e tipo de numeração.',
            'Tarja, estilo e formatos de imagem permitidos.',
          ],
          correctIndex: 1,
          explanation:
            'O material lista três configurações próprias do tipo de processo: asociar um ou mais assuntos com base no Código de classificação de documentos, restringir a apresentação a determinados órgãos ou unidades e definir o nível de acesso e a respectiva Hipótese Legal.',
        },
        {
          id: 'm4-tipo-processo-q2',
          prompt: 'Como o administrador pode cadastrar novos tipos de processo em relação à Base de Referência do Poder Executivo?',
          options: [
            'Somente editando os tipos da Base de Referência instalada.',
            'Independente do uso da Base de Referência do Poder Executivo.',
            'Apenas por meio da equipe de TI, durante a instalação.',
            'Exclusivamente por meio da funcionalidade de Assuntos da Tabela.',
          ],
          correctIndex: 1,
          explanation:
            'O material é claro: independentemente do uso da Base de Referência do Poder Executivo, o administrador do SEI poderá realizar o cadastro de novos tipos de processos.',
        },
        {
          id: 'm4-tipo-processo-q3',
          prompt: 'Quando o campo "Sugestão de Hipótese Legal" deve ser preenchido?',
          options: [
            'Sempre que o tipo de processo for restrito ou sigiloso.',
            'Somente nos casos em que as opções restrito ou sigiloso forem selecionadas no "Nível de Acesso Sugerido".',
            'Somente quando o tipo de processo for exclusivo da ouvidoria.',
            'Apenas em instalações multi-órgãos.',
          ],
          correctIndex: 1,
          explanation:
            'A regra do material é precisa: clicar na seta e selecionar a sugestão de Hipótese Legal somente nos casos em que as opções restrito ou sigiloso forem selecionadas no campo "Nível de Acesso Sugerido".',
        },
        {
          id: 'm4-tipo-processo-q4',
          prompt: 'Qual opção torna o tipo de processo exclusivo das unidades administrativas com perfil de ouvidoria?',
          options: [
            '"Restringir às Unidades".',
            '"Processo único no órgão por usuário interessado".',
            '"Exclusivo da ouvidoria".',
            '"Interno do sistema".',
          ],
          correctIndex: 2,
          explanation:
            'A opção "Exclusivo da ouvidoria" deve ser selecionada quando os tipos de processos somente poderão ser iniciados pelas unidades administrativas com perfil de ouvidoria do órgão ou entidade.',
        },
        {
          id: 'm4-tipo-processo-q5',
          prompt: 'Por que se recomenda padronizar os descritores dos tipos de processo?',
          options: [
            'Para reduzir o tamanho do banco de dados do SEI.',
            'Para evitar que tipos de processos com a mesma função sejam descritos de forma diferente, o que causa dúvidas e perda de informações estatísticas estratégicas.',
            'Para permitir que o SEI gere automaticamente a numeração dos processos.',
            'Para dispensar o uso do campo Sugestão de Assuntos.',
          ],
          correctIndex: 1,
          explanation:
            'O material recomenda estabelecer um padrão para a descrição de cada tipo de processo, minimizing a ocorrência de tipos com a mesma função descritos de forma diferente, o que causa dúvidas e perda de informações estatísticas estratégicas.',
        },
        {
          id: 'm4-tipo-processo-q6',
          prompt: 'Qual é a função da opção "Processo único no órgão por usuário interessado"?',
          options: [
            'Impedir que o processo seja iniciado mais de uma vez pelo mesmo órgão, independentemente do interessado.',
            'Impedir que seja gerado mais de um mesmo tipo de processo com o mesmo interessado.',
            'Restringir o tipo de processo a uma única unidade administrativa.',
            'Ocultar o tipo de processo dos usuários não interessados.',
          ],
          correctIndex: 1,
          explanation:
            'Selecionar essa opção faz com que não possa ser gerado mais de um mesmo tipo de processo com o mesmo interessado. A restrição a unidades é feita pelo campo "Restringir às Unidades".',
        },
      ],
    },
    {
      id: 'm4-editor-documentos',
      slug: 'editor-documentos',
      title: 'Editor do menu Administração: Tarja, Estilos e Imagens',
      estimatedMinutes: 35,
      objectives: [
        'Acessar o "Editor" do menu "Administração" e conhecer seus subitens.',
        'Ajustar as informações da tarja de assinatura digital conforme a esfera e o regime do órgão.',
        'Criar e aplicar estilos de formatação de documentos.',
        'Cadastrar e configurar os formatos de imagem permitidos no editor de texto.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Na funcionalidade "Editor", o administrador trabalhará muito com programação HTML para criar e alterar os documentos customizados. Por isso, ter conhecimento em linguagem de programação facilitará muito a formatação dos documentos, mas não é um pré-requisito imprescindível.',
        },
        {
          kind: 'bullets',
          heading: 'Subitens do menu "Editor"',
          items: [
            'Modelos.',
            'Estilos.',
            'Tarjas.',
            'Formatos de Imagem Permitidos.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Acesso ao "Editor" do menu "Administração"',
          items: [
            'Realizar o login no SEI com perfil de administrador.',
            'Acessar o menu "Administração".',
            'Selecionar o item "Editor".',
            'Escolher o subitem desejado: Modelos, Estilos, Tarjas ou Formatos de Imagem Permitidos.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'A funcionalidade "Tarja" trata das informações que constarão na tarja de assinatura digital do documento, na qual encontram-se dados a respeito da validação e autenticação de assinatura.',
        },
        {
          kind: 'bullets',
          heading: 'Sobre a funcionalidade "Tarja"',
          items: [
            'A lista de tarjas vem pronta na instalação do SEI, mas é possível realizar alterações de acordo com as necessidades de cada órgão.',
            'As indicações de decretos e artigos podem ser adequadas à esfera e ao regime que o órgão ou entidade se submete.',
            'Entre as configurações da "Base de Referência do Poder Executivo" estão as tarjas de assinatura e autenticação de documentos.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'O estilo é um conjunto de formatações atribuído a um nome. Essa formatação pode incluir tipo de fonte, tamanho, se em negrito ou itálico, alinhamento, entre outros. Para aplicar um estilo, deve-se selecionar o texto e clicar no estilo desejado. Na instalação do SEI vem uma lista pré-definida, mas é possível incluir novos estilos e alterar os existentes.',
        },
        {
          kind: 'steps',
          heading: 'Criar e utilizar um estilo',
          items: [
            'Na funcionalidade "Estilos", criar um novo estilo.',
            'Definir o nome do estilo.',
            'Inserir o código com a formatação desejada.',
            'Salvar a operação.',
            'Para utilizar, selecionar o texto no editor e clicar no estilo desejado; o estilo também pode ser transportado para a lista de estilos do editor de texto pela seta verde "Transportar este item e Fechar".',
          ],
        },
        {
          kind: 'table',
          heading: 'Formatos de Imagem Permitidos: o que configurar',
          columns: ['Etapa', 'O que fazer'],
          rows: [
            [
              'Adicionar um novo formato',
              'Definir o nome do formato (sigla), a descrição e salvar a operação.',
            ],
            [
              'Configurar os formatos permitidos',
              'Selecionar o formato apresentado na lista "Formatos de Imagem Permitidos" e escolher a opção desejada na coluna "Ações".',
            ],
            [
              'Operações disponíveis',
              'Desabilitar, alterar ou excluir os formatos disponíveis.',
            ],
            [
              'O que a funcionalidade define',
              'Quais extensões de arquivos para imagem serão aceitos no corpo do documento produzido no editor de texto do SEI.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Estilo não se altera depois',
          text: 'Os documentos criados não poderão ter seus estilos alterados. Dessa forma, torna-se essencial que a padronização dos documentos seja bem pensada logo no início, para evitar problemas posteriormente.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Atenção às extensões permitidas',
          text: 'Entre as configurações da "Base de Referência do Poder Executivo" estão as extensões de arquivos permitidas, em conformidade com o e-PING. Deve-se ter cuidado ao permitir extensões cujo uso demande licença no órgão.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Conheça o padrão de organização dos documentos',
          text: 'Antes de usar variáveis em modelos, é importante que o administrador conheça o padrão de organização dos documentos no órgão, por exemplo: sigla do órgão raiz, numeração única no órgão ou unidade administrativa e formato da data.',
        },
      ],
      keyPoints: [
        'O menu "Editor" reúne Modelos, Estilos, Tarjas e Formatos de Imagem Permitidos.',
        'Conhecer HTML facilita, mas não é obrigatório para usar o Editor.',
        'A tarja reúne os dados de validação e autenticação de assinatura digital.',
        'Estilo é um conjunto de formatações atribuído a um nome, aplicado ao texto selecionado.',
        'Estilos de documentos já criados não podem ser alterados.',
        'As extensões de imagem permitidas devem observar o e-PING e licenças do órgão.',
      ],
      quiz: [
        {
          id: 'm4-editor-documentos-q1',
          prompt: 'Quais são os subitens do menu "Editor"?',
          options: [
            'Assuntos, Tipos de Processo e Formulários.',
            'Modelos, Estilos, Tarjas e Formatos de Imagem Permitidos.',
            'Tarjas, Assinaturas, Contatos e Usuários.',
            'Cabeçalho, Corpo do Texto, Assinatura e Rodapé.',
          ],
          correctIndex: 1,
          explanation:
            'O material percorre quatro subitens do menu "Editor", a saber: Modelos, Estilos, Tarjas e Formatos de Imagem Permitidos. Cabeçalho, Corpo do Texto, Assinatura e Rodapé são seções dos modelos.',
        },
        {
          id: 'm4-editor-documentos-q2',
          prompt: 'Para que serve a funcionalidade "Tarja"?',
          options: [
            'Para definir quais imagens podem ser inseridas no documento.',
            'Para tratar das informações que constarão na tarja de assinatura digital, com dados de validação e autenticação de assinatura.',
            'Para criar estilos de formatação de texto.',
            'Para numerar automaticamente as páginas do documento.',
          ],
          correctIndex: 1,
          explanation:
            'A funcionalidade "Tarja" trata das informações que constarão na tarja de assinatura digital do documento, na qual encontram-se dados a respeito da validação e autenticação de assinatura.',
        },
        {
          id: 'm4-editor-documentos-q3',
          prompt: 'Como se aplica um estilo a um trecho de texto?',
          options: [
            'Selecionar o texto e clicar no estilo desejado.',
            'Selecionar o estilo antes de digitar o texto.',
            'Clicar duas vezes no ícone "Código-Fonte".',
            'Aplicar o estilo somente por meio da tela "Seções do Modelo".',
          ],
          correctIndex: 0,
          explanation:
            'O estilo é um conjunto de formatações atribuído a um nome (tipo de fonte, tamanho, negrito ou itálico, alinhamento, entre outros) e, para aplicá-lo, deve-se selecionar o texto e clicar no estilo desejado.',
        },
        {
          id: 'm4-editor-documentos-q4',
          prompt: 'Por que a padronização de estilos deve ser definida logo no início?',
          options: [
            'Porque o SEI não permite incluir novos estilos após a instalação.',
            'Porque os documentos criados não poderão ter seus estilos alterados.',
            'Porque estilos só podem ser definidos por programadores HTML.',
            'Porque a tarja de assinatura depende da quantidade de estilos cadastrados.',
          ],
          correctIndex: 1,
          explanation:
            'O material alerta: os documentos criados não poderão ter seus estilos alterados. Por isso a padronização dos documentos deve ser bem pensada logo no início, para evitar problemas posteriormente.',
        },
        {
          id: 'm4-editor-documentos-q5',
          prompt: 'O que a funcionalidade "Formatos de Imagem Permitidos" define?',
          options: [
            'As extensões de arquivos para imagem aceitas no corpo do documento produzido no editor de texto do SEI.',
            'A resolução mínima das imagens inseridas nos documentos.',
            'Os tipos de documento que podem conter imagens.',
            'O tamanho máximo do arquivo de imagem.',
          ],
          correctIndex: 0,
          explanation:
            'Essa funcionalidade define quais extensões de arquivos para imagem serão aceitos no corpo do documento produzido no editor de texto do SEI. Para configurar, seleciona-se o formato na lista e escolhe-se a opção na coluna "Ações", podendo desabilitar, alterar ou excluir.',
        },
        {
          id: 'm4-editor-documentos-q6',
          prompt: 'Qual alerta o material faz sobre as extensões de imagem permitidas?',
          options: [
            'Devem ser mantidas apenas as extensões definidas no e-PING.',
            'Deve-se ter cuidado ao permitir extensões cujo uso demanda licença no órgão.',
            'Extensões de imagem não podem ser desabilitadas pela Base de Referência.',
            'Todas as extensões instaladas são automaticamente permitidas.',
          ],
          correctIndex: 1,
          explanation:
            'A configuração da Base de Referência do Poder Executivo traz as extensões permitidas em conformidade com o e-PING, mas o material adverte: deve-se ter cuidado ao permitir extensões cujo uso demanda licença no órgão.',
        },
      ],
    },
    {
      id: 'm4-modelos-documento',
      slug: 'modelos-documento',
      title: 'Modelos: Listar, Clonar e Novo',
      estimatedMinutes: 30,
      objectives: [
        'Acessar a lista de documentos carregados na implantação do SEI.',
        'Clonar um modelo existente reaproveitando sua formatação.',
        'Reconhecer as seções que compõem um modelo de documento.',
        'Criar um modelo do zero com a funcionalidade "Novo" e criar suas seções.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A funcionalidade "Listar" permite ao usuário acessar a lista de documentos carregados na implantação do SEI. Esses documentos poderão ser visualizados, alterados, desativados ou excluídos conforme a necessidade do órgão. Para acessar os modelos, o usuário deverá entrar no menu "Administração", selecionar "Editor" e, depois, "Modelos".',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Saiba mais sobre a Base de Referência',
          text: 'Entre as configurações da "Base de Referência do Poder Executivo", estão os documentos comuns das atividades-meio, inclusive da nova IN04, conforme o Manual da Presidência da República, e documentos de uso comum por todos os órgãos. É possível também criar modelos de documentos conforme a necessidade do órgão.',
        },
        {
          kind: 'bullets',
          heading: 'Ações disponíveis na lista de modelos',
          items: [
            'Visualizar o modelo.',
            'Alterar o modelo.',
            'Desativar o modelo.',
            'Excluir o modelo.',
            'Clonar o modelo, reaproveitando sua formatação em um novo documento.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Na funcionalidade "Listar", é possível reaproveitar padrões e editá-los por meio do ícone "Clonar", que permite replicar um modelo já existente cuja formatação pode ser aproveitada em um novo modelo de documento. Inclusive, recomenda-se usar a opção de clonar sempre que o órgão precisar criar um documento, a fim de minimizar o trabalho.',
        },
        {
          kind: 'steps',
          heading: 'Clonar um modelo de documento',
          items: [
            'Acessar a funcionalidade "Listar" de Modelos.',
            'Selecionar o modelo a ser clonado e clicar no ícone "Clonar".',
            'Informar o nome do novo documento, conforme o número de caracteres definido na parametrização do órgão.',
            'O documento é incluído na lista.',
            'Clicar no ícone "Seções do Modelo" do documento clonado e realizar as devidas alterações.',
          ],
        },
        {
          kind: 'definitions',
          heading: 'A Seção do modelo',
          items: [
            {
              term: 'Seção',
              text: 'Refere-se às partes do documento. As seções predefineds são Cabeçalho, Título do Documento, Corpo do Texto, Assinatura e Rodapé. Outras seções podem ser criadas conforme a necessidade do órgão ou entidade.',
            },
            {
              term: 'Tela "Seções"',
              text: 'Tela em que ficam disponíveis ao administrador os campos que podem ser alterados de cada seção do modelo.',
            },
            {
              term: 'Ícone "Ajuda"',
              text: 'Recurso que exibe as variáveis disponíveis na lista, útil para automatizar o preenchimento de campos personalizados.',
            },
          ],
        },
        {
          kind: 'table',
          heading: 'Variáveis disponíveis no ícone "Ajuda"',
          columns: ['Grupo de variáveis', 'Variáveis permitidas'],
          rows: [
            [
              'Unidade administrativa',
              'Nome, sigla e endereço.',
            ],
            [
              'Usuário',
              'Nome, cargo e matrícula.',
            ],
            [
              'Data',
              'Dia, mês e ano.',
            ],
            [
              'Dados do processo',
              'Número e tipo.',
            ],
          ],
        },
        {
          kind: 'paragraph',
          text: 'As variáveis são úteis para automatizar o preenchimento de campos personalizados e são identificadas pelo caractere "@" (arroba) no início e no final da palavra, da seguinte forma: @timbre_orgao@ e @sigla_orgao_origem@.',
        },
        {
          kind: 'steps',
          heading: 'Criar um modelo com a funcionalidade "Novo"',
          items: [
            'Na funcionalidade de Modelos, clicar em "Novo".',
            'Preencher o campo "Nome" e clicar em "Salvar".',
            'No menu principal, acessar "Administração", selecionar "Editor", depois "Modelos" e, por fim, clicar em "Listar".',
            'Localizar o documento criado na lista e clicar no ícone "Seções do Modelo".',
            'Caso haja necessidade de criar uma seção, clicar na opção "Nova".',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cada seção dá mais controle ao administrador',
          text: 'O administrador cria as seções que montam a estrutura do modelo. Algumas seções podem receber informações dinâmicas ou somente leitura; outras são pré-definidas pelo SEI, como cabeçalho, principal, rodapé e assinatura. Cada nova seção permite ao administrador maior controle sobre o que será editado ou não pelo usuário.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Padronize a identidade visual',
          text: 'Sugere-se padronizar a identidade visual dos documentos do órgão ou entidade para evitar que o formato seja personalizado conforme demandas de setores. Afinal, estamos tratando de um editor de documentos oficiais.',
        },
      ],
      keyPoints: [
        'A "Listar" mostra os documentos carregados na implantação do SEI e permite visualizar, alterar, desativar e excluir.',
        '"Clonar" replica um modelo existente e reaproveita sua formatação; é a opção recomendada.',
        'Ao clonar, o sistema solicita o nome do novo documento e depois o inclui na lista.',
        'As seções predefineds são Cabeçalho, Título do Documento, Corpo do Texto, Assinatura e Rodapé.',
        'As variáveis são delimitadas por @, como @timbre_orgao@ e @sigla_orgao_origem@.',
        'A funcionalidade "Novo" exige salvar o nome antes de acessar as seções do modelo.',
      ],
      quiz: [
        {
          id: 'm4-modelos-documento-q1',
          prompt: 'O que a funcionalidade "Listar", no item Modelos do Editor, permite ao administrador?',
          options: [
            'Criar um novo modelo do zero, sem usar os documentos existentes.',
            'Acessar a lista de documentos carregados na implantação do SEI e visualizá-los, alterá-los, desativá-los ou excluí-los.',
            'Exclusivamente clonar modelos da Base de Referência.',
            'Definir a tarja de assinatura digital dos documentos.',
          ],
          correctIndex: 1,
          explanation:
            'A funcionalidade "Listar" permite acessar a lista de documentos carregados na implantação do SEI, que poderão ser visualizados, alterados, desativados ou excluídos conforme a necessidade do órgão.',
        },
        {
          id: 'm4-modelos-documento-q2',
          prompt: 'Por que o material recomenda usar a opção "Clonar"?',
          options: [
            'Porque o clonado é o único tipo de modelo que aceita assinatura.',
            'Porque clonar é a única forma de incluir tarja de assinatura.',
            'Porque permite replicar um modelo existente reaproveitando sua formatação, minimizando o trabalho.',
            'Porque o "Novo" só funciona para documentos externos.',
          ],
          correctIndex: 2,
          explanation:
            'O ícone "Clonar" permite replicar um modelo já existente cuja formatação pode ser aproveitada em um novo modelo de documento, e o material recomenda usar essa opção sempre que o órgão precisar criar um documento, a fim de minimizar o trabalho.',
        },
        {
          id: 'm4-modelos-documento-q3',
          prompt: 'Quais são as seções predefinidas de um modelo de documento?',
          options: [
            'Capa, Sumário, Anexo, Referência e Folha de Rosto.',
            'Cabeçalho, Título do Documento, Corpo do Texto, Assinatura e Rodapé.',
            'Ordem, Estilo Padrão, Conteúdo e Checkbox.',
            'Tabela de Assuntos, Tabela de Temporalidade e Destinação Final.',
          ],
          correctIndex: 1,
          explanation:
            'A seção refere-se às partes do documento e está dividida em Cabeçalho, Título do Documento, Corpo do Texto, Assinatura e Rodapé. Outras seções podem ser criadas conforme a necessidade do órgão ou entidade.',
        },
        {
          id: 'm4-modelos-documento-q4',
          prompt: 'Como as variáveis disponíveis no ícone "Ajuda" são identificadas no conteúdo?',
          options: [
            'Pelo caractere # no início e no final da palavra.',
            'Pelo caractere @ (arroba) no início e no final da palavra, como @timbre_orgao@.',
            'Por colchetes, como [sigla_orgao].',
            'Pela cor azul do texto no editor.',
          ],
          correctIndex: 1,
          explanation:
            'As variáveis são identificadas pelo caractere "@" (arroba) no início e no final da palavra, da seguinte forma: @timbre_orgao@ e @sigla_orgao_origem@. As variáveis de unidade administrativa, usuário, data e dados do processo servem para automatizar o preenchimento de campos personalizados.',
        },
        {
          id: 'm4-modelos-documento-q5',
          prompt: 'Após clicar em "Novo" e salvar o nome do documento, qual é o caminho para chegar às seções do modelo?',
          options: [
            'Administração > Editor > Modelos > Listar e, na lista, clicar no ícone "Seções do Modelo".',
            'Administração > Tipos de Documento > Novo > Modelo.',
            'Iniciar Processo > Novo > Seções.',
            'Editor > Tarjas > Novo > Seções do Modelo.',
          ],
          correctIndex: 0,
          explanation:
            'Depois de preencher o nome e salvar, é necessário acessar "Administração", selecionar "Editor", depois "Modelos" e clicar em "Listar"; em seguida, localiza-se o documento criado e clica-se no ícone "Seções do Modelo".',
        },
        {
          id: 'm4-modelos-documento-q6',
          prompt: 'Qual é a vantagem de criar novas seções em um modelo?',
          options: [
            'Permite ao administrador maior controle sobre o que será editado ou não pelo usuário.',
            'Obriga o usuário a assinar o documento na seção criada.',
            'Substitui a necessidade de definir a ordem das seções.',
            'Dispensa o uso de variáveis no cabeçalho.',
          ],
          correctIndex: 0,
          explanation:
            'O material alerta: cada nova seção criada permite ao administrador maior controle sobre o que será editado ou não pelo usuário. Algumas seções recebem informações dinâmicas ou somente leitura.',
        },
      ],
    },
    {
      id: 'm4-secoes-modelo',
      slug: 'secoes-modelo',
      title: 'Seções do Modelo na prática: da estrutura ao layout',
      estimatedMinutes: 40,
      objectives: [
        'Montar a estrutura de um modelo definindo nomes, ordens e checkboxes de cada seção.',
        'Configurar Estilos, Estilo Padrão e Conteúdo de cada seção.',
        'Aplicar variáveis dinâmicas no cabeçalho, no título e no corpo do texto.',
        'Evitar erros na seção de Assinatura e no rodapé dos documentos.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'As seções do modelo são criadas pelo administrador a partir da funcionalidade "Seções do Modelo". A padronização da estrutura é essencial: o campo "Ordem" define a sequência das seções e as checkboxes definem o comportamento de cada parte do documento.',
        },
        {
          kind: 'table',
          heading: 'Estrutura padrão das seções do modelo',
          columns: ['Seção', 'Nome', 'Ordem', 'Checkboxes a selecionar'],
          rows: [
            [
              'Cabeçalho',
              'Cabeçalho',
              '0',
              'Cabeçalho, Somente Leitura e Dinâmica (caso venha usar as variáveis).',
            ],
            [
              'Título do Documento',
              'Título do Documento',
              '10',
              'Somente Leitura e Dinâmica (caso venha usar as variáveis).',
            ],
            [
              'Corpo do Texto',
              'Corpo do Texto',
              '20',
              'Principal e Dinâmico (caso venha usar as variáveis).',
            ],
            [
              'Assinatura',
              'Assinatura',
              '30',
              'Assinatura.',
            ],
            [
              'Rodapé',
              'Rodapé',
              '40',
              'Rodapé.',
            ],
          ],
        },
        {
          kind: 'table',
          heading: 'Campos disponíveis na tela "Seções"',
          columns: ['Campo', 'Como preencher'],
          rows: [
            [
              'Nome',
              'Digitar o nome da seção, por exemplo Cabeçalho, Título do Documento, Corpo do Texto, Assinatura ou Rodapé.',
            ],
            [
              'Ordem',
              'Iniciar o cabeçalho em 0 e acrescentar 10 a cada nova seção até a última; para incluir uma seção entre a 10 e a 20, por exemplo, criar uma com ordem 15.',
            ],
            [
              'Checkbox',
              'Selecionar conforme a função da seção: Cabeçalho, Somente Leitura, Dinâmica, Principal, Assinatura e Rodapé.',
            ],
            [
              'Estilos',
              'Clicar na lupa e selecionar as opções desejadas; na nova janela, clicar na seta verde "Transportar este item e Fechar" do estilo desejado para que ele apareça na lista de estilos do editor de texto.',
            ],
            [
              'Estilo Padrão',
              'Selecionar o estilo que será o padrão da seção.',
            ],
            [
              'Conteúdo',
              'Digitar as informações variáveis ou fixas da seção, utilizando as variáveis disponíveis no ícone "Ajuda".',
            ],
          ],
        },
        {
          kind: 'bullets',
          heading: 'O que colocar em cada seção',
          items: [
            'Cabeçalho: parte inicial do modelo, com timbre do órgão e as siglas do órgão e da unidade administrativa; as variáveis são usadas no campo "Conteúdo".',
            'Título do Documento: o título deve ser inserido no campo "Conteúdo"; a seção não é obrigatória e pode ser mesclada com o cabeçalho.',
            'Corpo do Texto: deve-se inserir um texto padrão ou tabelas para preenchimento de formulário; é a seção de maior complexidade de criação.',
            'Assinatura: informa que o documento deve, obrigatoriamente, ser assinado; os campos ficam em branco e a única opção a selecionar é "Assinatura".',
            'Rodapé: consta dos números do processo e do documento, extraídos das variáveis selecionadas no ícone "Ajuda", que podem ser alteradas conforme a necessidade do órgão.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Obrigações do cabeçalho',
          text: 'Todos os documentos precisam possuir, no cabeçalho, a logomarca e o nome completo do órgão ou entidade. Além disso, nos documentos que tiverem seu destino externo devem constar o endereço completo, telefone e sítio na internet. Geralmente, no cabeçalho, utiliza-se o timbre do órgão e as siglas do órgão e da unidade administrativa.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Título do Documento bem apresentado',
          text: 'Recomenda-se colocar o título do documento dentro de uma célula de tabela, em negrito, centralizado e com fundo cinza. Ao clicar no botão "Código-Fonte" ou em "Conteúdo Inicial HTML", navega-se entre a edição do texto e a visualização da programação em HTML. A expressão contenteditable="false" trava o campo quando é colocada antes da palavra style.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Montando o Corpo do Texto',
          text: 'Quando se tratar de campo de livre escrita pelo usuário, ele deve ser deixado em branco, mas com o "Estilo Padrão" definido. Quando o campo for de livre escrita, mas precisar seguir tabulações e fonte específicas, deve-se escrever um texto fictício e formatar cada fonte usando o "Estilo"; o texto propriamente dito é inserido no campo "Conteúdo". Caso o órgão tenha modelos em papel prontos, pode copiá-los e colá-los no campo "Conteúdo", usando o botão direito do mouse e a opção "Texto sem Formatação".',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Tabelas no Corpo do Texto',
          text: 'Caso haja a necessidade de usar uma tabela, recomenda-se que a cada nova linha seja inserida uma nova tabela, pois o ajuste das colunas é flexível em tabelas distintas.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Atenção à seção de Assinatura',
          text: 'Esta seção dever ser sempre criada, pois, caso não seja, o documento não poderá ser assinado, gerando um erro por falta desta seção. Nela não se seleciona Estilos nem Estilo Padrão e nada é colocado no Conteúdo; se houver necessidade de escrever algo, a escrita deve ser feita na seção "Corpo do Texto".',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Rodapé: reaproveite o código',
          text: 'A seção "Rodapé" é igual em todos os modelos, portanto o que se deve fazer é copiar o código do rodapé de outro modelo acessando o ambiente de programação HTML. É possível também que um determinado documento seja visualizado somente por uma unidade organizacional ou determinado órgão, quando se tratar de multi-órgão.',
        },
        {
          kind: 'paragraph',
          text: 'Para agilizar a criação de modelos de documentos, pode-se clonar um existente ou copiar parte do script HTML de documentos já criados, instalados na implantação do SEI pela Base de Referência do Poder Executivo, e colar no campo de conteúdo HTML do novo modelo. Lembre-se de salvar a operação ao final de cada seção.',
        },
      ],
      keyPoints: [
        'A ordem padrão é 0 (Cabeçalho), 10 (Título), 20 (Corpo), 30 (Assinatura) e 40 (Rodapé).',
        'Para intercalar seções, use ordens intermediárias, como 15 entre 10 e 20.',
        'Cabeçalho e Título usam as checkboxes Somente Leitura e Dinâmica; Corpo usa Principal e Dinâmico.',
        'A seção de Assinatura não aceita estilos, estilo padrão ou conteúdo e sempre deve existir.',
        'O título do documento deve ser inserido no campo "Conteúdo" da seção Título do Documento.',
        'Conteúdo HTML permite comandos que a barra de ferramenta não disponibiliza, como contenteditable="false" antes da palavra style.',
      ],
      quiz: [
        {
          id: 'm4-secoes-modelo-q1',
          prompt: 'Qual é a ordem sugerida para a seção "Rodapé"?',
          options: ['20.', '30.', '40.', '50.'],
          correctIndex: 2,
          explanation:
            'A estrutura sugerida pelo material usa 0 para o Cabeçalho e soma 10 a cada nova seção: Cabeçalho 0, Título do Documento 10, Corpo do Texto 20, Assinatura 30 e Rodapé 40.',
        },
        {
          id: 'm4-secoes-modelo-q2',
          prompt: 'Ao criar a seção "Cabeçalho", quais checkboxes devem ser selecionadas?',
          options: [
            'Principal e Assinatura.',
            'Cabeçalho, Somente Leitura e Dinâmica (caso venha usar as variáveis).',
            'Rodapé e Principal.',
            'Apenas Dinâmica.',
          ],
          correctIndex: 1,
          explanation:
            'No Cabeçalho, o sistema entende que é a parte inicial do modelo do documento: selecionam-se as checkboxes "Cabeçalho", "Somente Leitura" e "Dinâmica" (caso venha usar as variáveis). Normalmente o cabeçalho não pode sofrer alteração do usuário, razão da opção Somente Leitura.',
        },
        {
          id: 'm4-secoes-modelo-q3',
          prompt: 'Qual campo recebe o título do documento?',
          options: ['O campo "Estilo Padrão".', 'O campo "Estilos".', 'O campo "Conteúdo" da seção Título do Documento.', 'O campo "Nome".'],
          correctIndex: 2,
          explanation:
            'A seção "Título do Documento" tem configurações muito parecidas com a do Cabeçalho, e o título do documento deve ser inserido no campo "Conteúdo".',
        },
        {
          id: 'm4-secoes-modelo-q4',
          prompt: 'Qual a consequência de não criar a seção "Assinatura" em um modelo?',
          options: [
            'O documento poderá ser assinado, desde que a tarja esteja cadastrada.',
            'O documento não poderá ser assinado, gerando um erro por falta desta seção.',
            'O documento será assinado automaticamente ao ser publicado.',
            'O documento será impresso sem número de página.',
          ],
          correctIndex: 1,
          explanation:
            'Esta seção dever ser sempre criada, pois, caso não seja, o documento não poderá ser assinado, gerando um erro por falta desta seção.',
        },
        {
          id: 'm4-secoes-modelo-q5',
          prompt: 'Como tratar um campo do Corpo do Texto destinado à livre escrita do usuário?',
          options: [
            'Inserir um texto fictício no campo "Conteúdo" para que o usuário entenda o formato.',
            'Deixar o campo em branco, mas com o "Estilo Padrão" definido.',
            'Preencher o campo com variável @sigla_orgao_origem@.',
            'Marcar a seção como "Somente Leitura".',
          ],
          correctIndex: 1,
          explanation:
            'Quando se tratar de um campo de livre escrita pelo usuário, ele deve ser deixado em branco, mas com o "Estilo Padrão" definido. Quando o campo precisa seguir tabulações e fonte, aí sim se escreve um texto fictício e se formatam as fontes usando o Estilo.',
        },
        {
          id: 'm4-secoes-modelo-q6',
          prompt: 'Qual é a finalidade de navegar entre "Código-Fonte" ou "Conteúdo Inicial HTML"?',
          options: [
            'Inserir as variáveis do ícone "Ajuda" no documento.',
            'Editar o texto ou visualizar a programação em HTML, permitindo comandos que a barra de ferramenta não disponibiliza.',
            'Definir a ordem das seções do modelo.',
            'Transportar estilos para a lista do editor de texto.',
          ],
          correctIndex: 1,
          explanation:
            'Ao clicar no botão "Código-Fonte" ou em "Conteúdo Inicial HTML", navega-se entre a opção de editar o texto e visualizar a programação em HTML. No conteúdo HTML o administrador pode incluir comandos que a barra de ferramenta não disponibiliza, como travar um campo no corpo do documento com contenteditable="false" antes da palavra style.',
        },
      ],
    },
    {
      id: 'm4-tipos-documento',
      slug: 'tipos-documento',
      title: 'Tipos de Documento: grupos, cadastro e numeração',
      estimatedMinutes: 40,
      objectives: [
        'Criar e gerir os grupos de tipos de documento.',
        'Cadastrar um novo Tipo de Documento com aplicabilidade, modelo e restrições.',
        'Escolher o tipo de numeração adequado a cada documento.',
        'Listar os tipos de documento e controlar a numeração por tipo.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A informação de Tipo de Documento é aquela que o usuário acessa por meio do ícone "Incluir Documento". Antes de iniciar a criação dos tipos de documento, faz-se necessário criar os grupos desses documentos, pois essa operação visa organizar os tipos de documentos e categorizá-los de forma a facilitar a gestão. Os agrupamentos poderão ser criados de acordo com a necessidade de cada órgão.',
        },
        {
          kind: 'steps',
          heading: 'Criar um grupo de tipos de documento',
          items: [
            'Acessar a funcionalidade de grupos de documentos no menu de Administração.',
            'Criar o grupo informando os campos "Nome" e "Descrição".',
            'Salvar a operação.',
            'Depois, o usuário poderá consultar, alterar, desativar ou excluir os grupos inseridos por meio da funcionalidade de listagem.',
          ],
        },
        {
          kind: 'table',
          heading: 'Grupos sugeridos e sua destinação',
          columns: ['Grupo', 'Destinação'],
          rows: [
            [
              'Externos',
              'Tipos documentais que somente poderão ser inseridos no SEI como documento externo.',
            ],
            [
              'Internos',
              'Tipos documentais que somente poderão ser gerados no editor de texto do SEI.',
            ],
            [
              'Geral',
              'Tipos documentais que podem tanto ser produzidos no editor de texto quanto inseridos como documento externo.',
            ],
          ],
        },
        {
          kind: 'paragraph',
          text: 'Exemplo de cadastro: Nome: Externos; Descrição: documentos gerados fora do SEI.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Regras de exclusão de grupos',
          text: 'Um grupo somente poderá ser excluído se não houver nenhum tipo de documento associado a ele. Grupos desativados poderão ser reativados a qualquer momento. Grupos excluídos não poderão ser recuperados.',
        },
        {
          kind: 'table',
          heading: 'Campos do Novo Tipo Documento',
          columns: ['Campo', 'Como preencher'],
          rows: [
            [
              'Grupo',
              'Selecionar o grupo.',
            ],
            [
              'Nome',
              'Inserir o nome do tipo documental, que será apresentado ao usuário no momento da inclusão do documento no SEI. Lembre-se de que não se nomeia o documento com palavras no plural.',
            ],
            [
              'Descrição',
              'Descrever do que se trata o tipo de documento.',
            ],
            [
              'Aplicabilidade',
              'Selecionar a opção correspondente entre Documentos internos e externos, Documentos internos, Documentos externos ou Formulário.',
            ],
            [
              'Modelo',
              'Escolher o modelo que foi previamente gerado e formatado no editor do SEI.',
            ],
            [
              'Tipo de Numeração',
              'Selecionar a opção de numeração de acordo com o tipo de documento em questão. Trata-se da geração automática de numeração sequencial pelo SEI.',
            ],
            [
              'Sugestão de Assuntos',
              'Selecionar o tipo de assunto de acordo com a lista do Código de classificação de documentos.',
            ],
            [
              'Restringir aos Órgãos',
              'Clicar na lupa e selecionar o órgão ou entidade que terá acesso a este tipo de documento; preencher somente em caso de restrição em instalação multi-órgãos ou à determinada unidade administrativa.',
            ],
            [
              'Restringir às Unidades',
              'Clicar na lupa e selecionar a unidade administrativa para a qual o documento será apresentado. Pode ser usado quando for necessário que determinado departamento faça testes para um novo documento.',
            ],
            [
              'Veículo de Publicação',
              'Clicar na lupa e selecionar a opção desejada. Deve ser utilizado somente para documentos do tipo interno.',
            ],
            [
              'Permitir Publicação Apenas Para Documentos Assinados',
              'Selecionar em caso de documento que será visualizado apenas se tiver sido assinado.',
            ],
            [
              'Permite Interessados',
              'Selecionar caso seja importante que o usuário preencha o campo "Interessados"; facilita a pesquisa.',
            ],
            [
              'Permite Destinatários',
              'Selecionar caso seja importante que o usuário preencha o campo "Destinatários"; facilita a pesquisa.',
            ],
            [
              'Interno do Sistema',
              'Selecionar somente se o tipo de documento não deve aparecer para os usuários, por exemplo um formulário a ser usado pela equipe de WebService.',
            ],
          ],
        },
        {
          kind: 'table',
          heading: 'Aplicabilidade do tipo documental',
          columns: ['Opção de Aplicabilidade', 'Onde o tipo documental é apresentado'],
          rows: [
            [
              'Documentos internos e externos',
              'Na relação de documentos a serem produzidos no editor de texto e no tipo "Externo".',
            ],
            [
              'Documentos internos',
              'Somente na relação de documentos a serem produzidos no editor de texto.',
            ],
            [
              'Documentos externos',
              'Somente na relação de documentos "Externo".',
            ],
            [
              'Formulário',
              'Somente para documentos do tipo "Formulário do Sistema".',
            ],
          ],
        },
        {
          kind: 'table',
          heading: 'Tipos de numeração do documento',
          columns: ['Tipo de Numeração', 'Comportamento e exemplo'],
          rows: [
            [
              'Sem numeração',
              'Documentos que não precisam de número sequencial.',
            ],
            [
              'Sequencial na Unidade',
              'Documentos controlados pela unidade administrativa que precisam de numeração sequencial; essa numeração nunca é zerada. Exemplo: Termo de Referência.',
            ],
            [
              'Sequencial no Órgão',
              'Documentos controlados pelo órgão ou entidade que precisam de numeração sequencial; essa numeração nunca é zerada. Exemplo: Parecer Jurídico.',
            ],
            [
              'Sequencial Anual na Unidade',
              'Documentos controlados pela unidade administrativa que precisam de numeração sequencial; essa numeração é zerada sempre que começa o ano. Exemplo: Carta e Memorando.',
            ],
            [
              'Sequencial Anual do Órgão',
              'Documentos controlados pelo órgão ou entidade que precisam de numeração sequencial; essa numeração é zerada sempre que começa o ano. Exemplo: Portaria.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Veículos de Publicação',
          text: 'No menu "Administração" há o item "Veículos de Publicação". O SEI permite configurar os veículos de publicação que podem interagir com o sistema para agendamento, cancelamento e confirmação. Um exemplo é o Boletim Eletrônico.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Não confunda documento com processo',
          text: 'É importante não confundir documento com processo. Fique atento, pois esse é um erro comum nos órgãos e entidades. O tipo documental é apresentado ao usuário na inclusão do documento; o tipo de processo, no início do processo.',
        },
        {
          kind: 'bullets',
          heading: 'Gerir a lista de tipos de documento',
          items: [
            'Clicar em "Listar": a relação aparece em ordem alfabética.',
            'Do lado direito de cada Tipo de Documento, usar os ícones de visualizar, alterar, desativar e excluir individualmente.',
            'No menu superior acima da lista, criar um Tipo ou um Grupo e desativar ou excluir em massa, caso seja selecionado mais de um item.',
            'Filtrar a listagem por grupos e por modelos.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cuidado ao excluir numeração',
          text: 'Lembre-se que o botão "Excluir" permite que a numeração reinicie começando pelo número 1. Para isso, deve-se selecionar a opção desejada na coluna da esquerda e, em seguida, clicar em "Excluir".',
        },
      ],
      keyPoints: [
        'Os grupos organizam e categorizam os tipos de documento; recomenda-se criar externos, internos e geral.',
        'Grupo só pode ser excluído se não houver tipo de documento associado.',
        'Aplicabilidade define onde o tipo documental aparece: editor de texto, "Externo" ou "Formulário do Sistema".',
        'Não se nomeia o documento com palavras no plural.',
        'Numeração sequencial sem "Anual" nunca é zerada; com "Anual" é zerada a cada início de ano.',
        'Na listagem é possível criar Tipo, criar Grupo, desativar e excluir em massa, além de filtrar por grupos e modelos.',
      ],
      quiz: [
        {
          id: 'm4-tipos-documento-q1',
          prompt: 'Qual é a finalidade dos grupos de tipos de documento?',
          options: [
            'Definir o nível de acesso dos documentos.',
            'Organizar e categorizar os tipos de documentos, facilitando a gestão.',
            'Gerar a numeração sequencial dos documentos.',
            'Definir a tarja de assinatura dos documentos internos.',
          ],
          correctIndex: 1,
          explanation:
            'Antes de iniciar a criação dos tipos de documento, faz-se necessário criar os grupos, pois essa operação visa organizar os tipos de documentos e categorizá-los de forma a facilitar a gestão. Os agrupamentos podem ser criados conforme a necessidade de cada órgão.',
        },
        {
          id: 'm4-tipos-documento-q2',
          prompt: 'Segundo a sugestão do material, quais grupos de documentos devem ser criados?',
          options: [
            'Público, restrito e sigiloso.',
            'Externos, internos e geral.',
            'Corrente, intermediário e permanente.',
            'Assunto, temporalidade e destinação.',
          ],
          correctIndex: 1,
          explanation:
            'Sugere-se a criação de pelo menos três grupos: externos (somente inseridos como documento externo), internos (somente gerados no editor de texto do SEI) e geral (podem ser produzidos no editor de texto quanto inseridos como documento externo).',
        },
        {
          id: 'm4-tipos-documento-q3',
          prompt: 'Qual opção de Aplicabilidade apresenta o tipo documental apenas na relação de documentos a serem produzidos no editor de texto?',
          options: [
            'Documentos internos e externos.',
            'Documentos externos.',
            'Documentos internos.',
            'Formulário.',
          ],
          correctIndex: 2,
          explanation:
            'Na opção "Documentos internos", o tipo documental é apresentado somente na relação de documentos a serem produzidos no editor de texto. "Documentos internos e externos" aparece nas duas relações, "Documentos externos" somente no tipo "Externo" e "Formulário" somente para o "Formulário do Sistema".',
        },
        {
          id: 'm4-tipos-documento-q4',
          prompt: 'Qual tipo de numeração é zerado sempre que começa o ano, tendo como exemplo a Portaria?',
          options: [
            'Sequencial no Órgão.',
            'Sequencial Anual do Órgão.',
            'Sequencial Anual na Unidade.',
            'Sem numeração.',
          ],
          correctIndex: 1,
          explanation:
            'O tipo "Sequencial Anual do Órgão" é usado em documentos controlados pelo órgão ou entidade que precisam de numeração sequencial, e essa numeração é zerada sempre que começa o ano; o exemplo do material é a Portaria. Já "Sequencial Anual na Unidade" tem como exemplo Carta e Memorando.',
        },
        {
          id: 'm4-tipos-documento-q5',
          prompt: 'Quando se deve preencher o campo "Veículo de Publicação"?',
          options: [
            'Sempre, para qualquer tipo de documento.',
            'Somente para documentos do tipo interno.',
            'Apenas para documentos externos digitalizados.',
            'Apenas para formulários do sistema.',
          ],
          correctIndex: 1,
          explanation:
            'O campo "Veículo de Publicação" deve ser utilizado somente para documentos do tipo interno; os documentos selecionados podem ser publicados por veículos de publicação, configurados no menu "Administração" > "Veículos de Publicação".',
        },
        {
          id: 'm4-tipos-documento-q6',
          prompt: 'O que acontece ao clicar em "Excluir" na funcionalidade de Numeração?',
          options: [
            'O tipo de documento é excluído definitivamente.',
            'A numeração é reiniciada, começando pelo número 1.',
            'Todos os documentos do tipo são excluídos.',
            'O tipo de numeração passa a ser Sem numeração.',
          ],
          correctIndex: 1,
          explanation:
            'Lembre-se que o botão "Excluir" permite que a numeração reinicie começando pelo número 1. Para isso, deve-se selecionar a opção desejada na coluna da esquerda e, em seguida, clicar em "Excluir".',
        },
      ],
    },
    {
      id: 'm4-formularios',
      slug: 'formularios',
      title: 'Funcionalidade Formulário',
      estimatedMinutes: 35,
      objectives: [
        'Criar um formulário e cadastrar seus campos.',
        'Diferenciar os tipos de campo disponíveis no formulário do SEI.',
        'Configurar validações, máscaras, limites e obrigatoriedade.',
        'Visualizar e testar os campos antes de disponibilizar o formulário ao usuário.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A funcionalidade "Formulário" permite a criação de formulários com checkbox, combo box, campos com máscara, definição de limites de textos, com preenchimento obrigatório ou não. Não permite formatação do layout do formulário, limitando, assim, a criação de documentos com visual atraente e apresentável.',
        },
        {
          kind: 'steps',
          heading: 'Criar um formulário e chegar aos campos',
          items: [
            'Criar o formulário e salvar a operação.',
            'Acessar o formulário criado por meio da função "Listar", no item "Administração", "Tipos de Formulários".',
            'Clicar no ícone "Campos do Tipo de Formulário".',
            'Clicar em "Novo" para cadastrar o primeiro campo.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos de cadastro de um campo de formulário',
          columns: ['Campo', 'Como preencher'],
          rows: [
            [
              'Nome',
              'Digitar o nome com letras minúsculas, sem caracteres especiais e sem espaço, utilizando underline para separar as palavras. Exemplo: nome_usuario.',
            ],
            [
              'Ordem',
              'Digitar a ordem que aparecerá no formulário. Por padrão, ao primeiro dá-se o valor 0 e aos próximos o número sequente.',
            ],
            [
              'Rótulo',
              'Digitar o nome do campo que o usuário irá preencher.',
            ],
            [
              'Obrigatório',
              'Selecionar esta opção caso o campo seja de preenchimento obrigatório.',
            ],
            [
              'Tipo',
              'Selecionar o tipo de campo que o usuário irá preencher entre as opções disponíveis.',
            ],
          ],
        },
        {
          kind: 'definitions',
          heading: 'Tipos de campo do formulário',
          items: [
            {
              term: 'Data',
              text: 'O sistema solicita que se especifique a validação do campo.',
            },
            {
              term: 'Dinheiro',
              text: 'O sistema solicita um valor mínimo e um máximo. Se não houver, basta deixar em branco.',
            },
            {
              term: 'Lista',
              text: 'Relaciona as opções que estarão disponíveis para o usuário escolher em uma combo box.',
            },
            {
              term: 'Número Inteiro',
              text: 'Campo numérico em que se determina o número de caracteres e se há um valor mínimo e um máximo. Se não houver, basta deixar em branco.',
            },
            {
              term: 'Número com Decimais',
              text: 'Campo numérico com casas decimais em que se determina o número de caracteres e a quantidade de casas decimais, além dos valores mínimo e máximo. Se não houver, basta deixar em branco.',
            },
            {
              term: 'Texto Grande',
              text: 'Campo textual com limite de caracteres e de linhas a ser preenchido pelo usuário.',
            },
            {
              term: 'Texto Simples',
              text: 'Campo textual com limite de caracteres a ser preenchido pelo usuário.',
            },
            {
              term: 'Texto com Máscara',
              text: 'Campo com formatação padrão, como CEP, CPF, CNPJ. Ao clicar no ícone "Ajuda", o sistema mostrará qual caractere deve ser usado.',
            },
            {
              term: 'Opções',
              text: 'Relaciona as opções que estarão disponíveis para o usuário escolher em uma checkbox. Deve-se escolher somente uma das opções listadas; a forma de preenchimento das variáveis é igual à "Lista".',
            },
            {
              term: 'Sinalizador',
              text: 'Disponibiliza ao usuário opções a serem selecionadas por checkboxes.',
            },
            {
              term: 'Informação',
              text: 'Texto que fará parte do formulário. Pode ser usada para colocar o título do documento ou uma instrução de preenchimento.',
            },
          ],
        },
        {
          kind: 'table',
          heading: 'Validações do tipo "Data"',
          columns: ['Validação', 'Comportamento'],
          rows: [
            ['Nenhuma', 'Não há restrição de data.'],
            ['Futuro', 'Data atual ou futuro.'],
            ['Passado', 'Data atual ou passado.'],
            ['Intervalo', 'Permite a definição de um intervalo de datas.'],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Combine Sinalizador com Informação',
          text: 'É interessante combinar o uso do tipo "Sinalizador" com o "Informação": este para fazer a pergunta e aquele para listar as opções de resposta.',
        },
        {
          kind: 'steps',
          heading: 'Visualizar e testar os campos',
          items: [
            'Após inserir todos os campos necessários para o formulário, clicar em "Visualizar" na tela "Campos".',
            'Preencher os campos.',
            'Clicar em "Testar Confirmação de Dados".',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Formulário não tem seção de assinatura',
          text: 'Diferente do editor, que permite incluir seção para assinatura no documento, no formulário não há essa opção. O SEI, automaticamente, possibilita ao usuário assinar o documento.',
        },
        {
          kind: 'table',
          heading: 'Campos para disponibilizar o formulário ao usuário',
          columns: ['Campo', 'Como preencher'],
          rows: [
            [
              'Grupo',
              'Selecionar o grupo.',
            ],
            [
              'Nome',
              'Inserir o nome do tipo documental, apresentado ao usuário no momento da inclusão do documento no SEI.',
            ],
            [
              'Descrição',
              'Descrever do que se trata o tipo de documento.',
            ],
            [
              'Aplicabilidade',
              'Selecionar a opção "Formulários".',
            ],
            [
              'Tipo de Formulário',
              'Selecionar o formulário criado.',
            ],
            [
              'Restringir aos Órgãos',
              'Clicar na lupa e selecionar o órgão ou entidade que terá acesso a este tipo de documento; preencher somente em caso de restrição em instalação multi-órgãos ou à determinada unidade administrativa.',
            ],
            [
              'Restringir às Unidades',
              'Clicar na lupa e selecionar o nome da unidade administrativa para a qual o documento será apresentado na lista de tipos de processo no menu "Iniciar Processo".',
            ],
            [
              'Interno do Sistema',
              'Selecionar somente se o tipo não deve aparecer para os usuários, por exemplo um formulário a ser usado pela equipe de WebService.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Reutilize formulários por clonagem',
          text: 'É possível clonar um formulário, o que permite reaproveitar a configuração de campos já testada em outro formulário semelhante, com o mesmo padrão de nomes, rótulos e tipos.',
        },
      ],
      keyPoints: [
        'O formulário aceita checkbox, combo box, campos com máscara e limites de texto, mas não permite formatar o layout.',
        'O nome do campo deve usar letras minúsculas, sem caracteres especiais e sem espaços, com underline.',
        'A ordem começa em 0 e segue sequencialmente.',
        'São onze tipos de campo: Data, Dinheiro, Lista, Número Inteiro, Número com Decimais, Texto Grande, Texto Simples, Texto com Máscara, Opções, Sinalizador e Informação.',
        'O tipo Data pede validação entre Nenhuma, Futuro, Passado e Intervalo.',
        'Testes são feitos em "Visualizar" e "Testar Confirmação de Dados"; o formulário não tem seção de assinatura.',
      ],
      quiz: [
        {
          id: 'm4-formularios-q1',
          prompt: 'Qual é uma limitação da funcionalidade "Formulário" do SEI?',
          options: [
            'Não permite a criação de campos com máscara.',
            'Não permite formatação do layout do formulário.',
            'Não permite a criação de campos obrigatórios.',
            'Não permite a visualização prévia dos campos.',
          ],
          correctIndex: 1,
          explanation:
            'A funcionalidade permite a criação de formulários com checkbox, combo box, campos com máscara, definição de limites de textos e preenchimento obrigatório ou não, mas não permite formatação do layout do formulário, limitando a criação de documentos com visual atraente e apresentável.',
        },
        {
          id: 'm4-formularios-q2',
          prompt: 'Qual é o padrão recomendado para o campo "Nome" de um campo de formulário?',
          options: [
            'Letras maiúsculas com espaços entre as palavras.',
            'Letras minúsculas, sem caracteres especiais e sem espaço, com underline para separar as palavras, como nome_usuario.',
            'Somente letras e números, sem separação.',
            'Nome igual ao rótulo exibido ao usuário.',
          ],
          correctIndex: 1,
          explanation:
            'No campo "Nome", deve-se digitar o nome com letras minúsculas, sem caracteres especiais e sem espaço, utilizando underline para separar as palavras. Exemplo: nome_usuario.',
        },
        {
          id: 'm4-formularios-q3',
          prompt: 'Qual tipo de campo relaciona opções disponíveis para o usuário escolher em uma combo box?',
          options: ['Opções.', 'Sinalizador.', 'Lista.', 'Informação.'],
          correctIndex: 2,
          explanation:
            'O tipo "Lista" relaciona as opções que estarão disponíveis para o usuário escolher em uma combo box. O tipo "Opções" faz o mesmo em uma checkbox, com a escolha de somente uma das opções listadas.',
        },
        {
          id: 'm4-formularios-q4',
          prompt: 'Qual tipo de campo usa formatações padrão como CEP, CPF e CNPJ?',
          options: ['Texto Grande.', 'Texto Simples.', 'Texto com Máscara.', 'Número com Decimais.'],
          correctIndex: 2,
          explanation:
            'O tipo "Texto com Máscara" trata-se de campo com formatação padrão, como CEP, CPF, CNPJ. Ao clicar no ícone "Ajuda", o sistema mostrará qual caractere deve ser usado.',
        },
        {
          id: 'm4-formularios-q5',
          prompt: 'Quais são as validações possíveis para o tipo de campo "Data"?',
          options: [
            'Nenhuma, Futuro, Passado e Intervalo.',
            'Nenhuma, Obrigatório, Regex e Intervalo.',
            'Somente Futuro e Passado.',
            'Somente Data atual e Data futura.',
          ],
          correctIndex: 0,
          explanation:
            'No tipo "Data", o sistema solicita que se especifique a validação do campo, devendo-se escolher entre Nenhuma, Futuro (data atual ou futuro), Passado (data atual ou passado) e Intervalo.',
        },
        {
          id: 'm4-formularios-q6',
          prompt: 'Como o administrador testa os campos de um formulário antes de disponibilizá-lo?',
          options: [
            'Clicar em "Visualizar" na tela "Campos", preencher os campos e clicar em "Testar Confirmação de Dados".',
            'Clicar em "Novo" na tela "Tipos de Formulários" e salvar novamente.',
            'Selecionar a opção "Permite Interessados" e salvar o tipo de documento.',
            'Publicar o formulário em um veículo de publicação.',
          ],
          correctIndex: 0,
          explanation:
            'Após inserir todos os campos necessários, o administrador deve clicar em "Visualizar" na tela "Campos", preencher os campos e, por fim, clicar em "Testar Confirmação de Dados".',
        },
      ],
    },
  ],
};
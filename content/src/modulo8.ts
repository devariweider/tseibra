import type { CourseModule } from './types.js';

export const modulo8: CourseModule = {
  id: 'mod-8',
  slug: 'modulos-e-integracao-pen',
  title: 'Módulo 8 — Módulos SEI, Tramita.GOV.BR e NIPE',
  subtitle:
    'Glossário do PEN, autenticação em dois fatores, Login Externo GOV.BR, blocos e assinatura eletrônica, Tramita.GOV.BR, integração e NIPE',
  description:
    'Este módulo situa o SEI dentro da infraestrutura pública do Processo Eletrônico Nacional (PEN) e apresenta os produtos que extendem o sistema: o Módulo de Login Externo GOV.BR, o Módulo de Assinatura Eletrônica, a plataforma de interoperabilidade Tramita.GOV.BR e o NIPE. O conteúdo parte do Glossário PEN (PEN, SPE, NRE, NUP, documento avulso, gestor de protocolo, portal de administração), descreve a Autenticação em dois fatores do SEI 4.0+, detalha o fluxo de solicitação de credenciais junto à Secretaria de Governo Digital, explica blocos de assinatura e os meios de assinatura (GOV.BR, SERPROID, certificado A1, A3 em nuvem, P7S, carimbo de tempo e validação de assinatura), apresenta o Portal de Administração do Tramita.GOV.BR com seus perfis e repositórios de estrutura e a integração do SEI ao barramento (mod-sei-pen) e, por fim, detalha o NIPE — Número de Identificação de Protocolo Eletrônico — e sua configuração no SEI.',
  sourceRef: 'Manuais de Sistemas do PEN (MGI/SEGES/DTGES/CGESP), 18 set. 2026',
  estimatedMinutes: 265,
  objectives: [
    'Reconhecer os conceitos e siglas do Glossário PEN (PEN, SPE, SEI, NRE, NUP, documento avulso, interoperabilidade, gestor de protocolo e portal de administração) e aplicá-los na leitura da documentação e das telas do sistema.',
    'Habilitar e usar a Autenticação em dois fatores do SEI 4.0+, compreendendo o papel do aplicativo autenticador e as recomendações do manual sobre o e-mail cadastrado.',
    'Descrever o fluxo de solicitação de credenciais dos módulos Login Externo GOV.BR e Assinatura Eletrônica junto ao Serviço de Integração aos Produtos de Identidade Digital GOV.BR.',
    'Criar, disponibilizar, acompanhar e concluir blocos de assinatura, assinando documentos com os tipos de assinatura habilitados pelo módulo de Assinatura Eletrônica.',
    'Configurar o Portal de Administração do Tramita.GOV.BR (órgão, hierarquia, gestores, sistemas, unidades administrativas e centralizadoras) e verificar trâmites pelo Painel de Controle.',
    'Instalar e configurar o módulo de integração do SEI ao Tramita.GOV.BR, além de expedir e receber processos externamente e consultar recibos.',
    'Configurar o NIPE no SEI, informando a máscara de numeração de 20 dígitos, o código do órgão e o código da unidade de protocolo.',
  ],
  lessons: [
    {
      id: 'm8-glossario-pen',
      slug: 'm8-glossario-pen',
      title: 'Conceitos do PEN — Glossário PEN',
      estimatedMinutes: 30,
      objectives: [
        'Diferenciar PEN, SPE e SEI, indicando o papel de cada um na tramitação de processos administrativos eletrônicos.',
        'Explicar a relação entre NUP, NRE e Número do Processo, compreendendo por que o NRE não muda durante o trâmite.',
        'Reconhecer o papel do Gestor de Protocolo e as funções do Portal de Administração do Tramita.GOV.BR.',
        'Identificar o conceito de documento avulso e de interoperabilidade aplicados às soluções do PEN.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O Glossário de Termos e Siglas PEN é o documento de abertura dos Manuais de Sistemas do Processo Eletrônico Nacional. Seu objetivo é facilitar a compreensão dos termos técnicos e das siglas mais comumente utilizados nos sistemas fornecidos pela Unidade, funcionando como referência rápida para a documentação, as comunicações e as interfaces de usuário.',
        },
        {
          kind: 'callout',
          tone: 'legal',
          title: 'Marco legal do PEN',
          text: 'O SEI é um dos produtos do projeto Processo Eletrônico Nacional (PEN), sob coordenação do Ministério da Gestão e da Inovação em Serviços Públicos, sendo uma das soluções de processo administrativo eletrônico empregada pela Administração Pública Federal, conforme artigo 16 da Lei 14.063 e Parecer PGFN. O marco legal de implantação do PEN, no Poder Executivo, foi o Decreto nº 8.539, de 2015, que estabeleceu o uso de meio eletrônico para a realização de processos administrativos nos órgãos e entidades da Administração Pública direta, autárquica e fundacional.',
        },
        {
          kind: 'callout',
          tone: 'legal',
          title: 'Art. 128 do Decreto nº 9.745, de 2019',
          text: 'A operacionalização do uso do meio eletrônico no âmbito do Poder Executivo é de responsabilidade da Secretaria de Gestão (SEGES) do MGI e, especificamente, do Departamento de Normas e Sistemas de Logística (DELOG), conforme dispõe o art. 128 do Decreto nº 9.745, de 2019.',
        },
        {
          kind: 'definitions',
          heading: 'Termos essenciais do Glossário PEN',
          items: [
            {
              term: 'Processo Eletrônico Nacional (PEN)',
              text: 'Infraestrutura pública de processo administrativo eletrônico que visa à obtenção de substanciais melhorias no desempenho da gestão processual, com ganhos em agilidade, produtividade, satisfação do público usuário e redução de custos.',
            },
            {
              term: 'Sistema de Processo Administrativo Eletrônico (SPE)',
              text: 'Sistema informatizado de gerenciamento de processos administrativos eletrônicos e documentos avulsos, em meio eletrônico, utilizado por órgão ou entidade pública, no exercício das suas atividades administrativas. Exemplos citados nos manuais: SEI, SIPAC, SUAP e SAPIENS-AGU.',
            },
            {
              term: 'Sistema Eletrônico de Informações (SEI)',
              text: 'Software desenvolvido pelo Tribunal Regional Federal da 4ª Região para o trâmite dos processos administrativos eletrônicos e o compartilhamento de experiências em gestão de documentos e gestão da tecnologia da informação.',
            },
            {
              term: 'Processo administrativo eletrônico',
              text: 'Conjunto de documentos digitais, oficialmente reunidos e ordenados no decurso de uma ação administrativa, cujos atos processuais são registrados e disponibilizados em meio eletrônico.',
            },
            {
              term: 'Documento avulso',
              text: 'Informação registrada, em meio eletrônico, qualquer que seja o suporte ou formato, que não está reunida e ordenada em processo.',
            },
            {
              term: 'Número Único de Protocolo (NUP)',
              text: 'Identificador do documento avulso ou do processo a partir da sua autuação ou recebimento. No SEI, é o número do processo localizado na Árvore do Processo.',
            },
            {
              term: 'Número de Registro Eletrônico (NRE)',
              text: 'Referência numérica fixa, que não se altera à medida que novos trâmites do processo são realizados. Está relacionado ao NUP ou Número do Processo e, portanto, não muda durante os trâmites realizados por meio do Tramita.GOV.BR.',
            },
            {
              term: 'Interoperabilidade',
              text: 'Característica que se refere à capacidade de diversos sistemas e organizações trabalharem em conjunto (interoperar), de modo a garantir que pessoas, organizações e sistemas computacionais interajam para trocar informações de maneira eficaz e eficiente.',
            },
            {
              term: 'Módulo de conexão com Tramita.GOV.BR',
              text: 'Ferramenta complementar, instalada separadamente, utilizada para possibilitar a interoperabilidade do SPE com o Tramita.GOV.BR. Como exemplo, o módulo de conexão do SEI com o Tramita.GOV.BR.',
            },
            {
              term: 'Gestor de Protocolo',
              text: 'Servidor do órgão ou da entidade, encarregado da implantação e gestão da operação do Tramita.GOV.BR, por meio da configuração de unidades administrativas centralizadoras e do monitoramento dos trâmites. O papel de gestor não está restrito à área de protocolo.',
            },
            {
              term: 'Portal de Administração',
              text: 'Site de gerenciamento do Tramita.GOV.BR, utilizado pelos gestores de protocolos. Nele é possível configurar unidades administrativas e unidades centralizadoras, cadastrar novos gestores e monitorar os trâmites de processos por meio do Painel de Controle.',
            },
            {
              term: 'Portal do Processo Eletrônico Nacional',
              text: 'Site oficial do PEN, que consolida todas as informações relacionadas ao Tramita.GOV.BR, mantido pela Secretaria de Gestão e Inovação do MGI.',
            },
            {
              term: 'API SOAP e API REST',
              text: 'Conjuntos de operações via webservices para trâmite de documentos e processos, desenvolvidos conforme o protocolo SOAP e de acordo com o padrão REST, respectivamente.',
            },
            {
              term: 'Certificado Digital',
              text: 'Arquivo eletrônico que funciona como uma assinatura digital, garantindo proteção às transações eletrônicas e permitindo que pessoas físicas e jurídicas se identifiquem e assinem digitalmente de qualquer lugar, com segurança e agilidade.',
            },
          ],
        },
        {
          kind: 'table',
          heading: 'Sistemas e estruturas citados no glossário e nos manuais',
          columns: ['Sigla', 'Denominação', 'Papel no contexto'],
          rows: [
            ['PEN', 'Processo Eletrônico Nacional', 'Infraestrutura pública de processo administrativo eletrônico'],
            ['SPE', 'Sistema de Processo Administrativo Eletrônico', 'Sistema usado pelo órgão para gerenciar processos e documentos avulsos'],
            ['SEI', 'Sistema Eletrônico de Informações', 'SPE desenvolvido pelo TRF4 para trâmite de processos administrativos eletrônicos'],
            ['SIP', 'Sistema de Permissões', 'Cadastro inicial de dados do SEI: usuários, unidades, hierarquia e permissões'],
            ['SIORG', 'Sistema de Organização e Inovação Institucional do Governo Federal', 'Mantém a hierarquia dos órgãos do Poder Executivo Federal usada pelo Tramita.GOV.BR'],
            ['SISG', 'Sistema de Serviços Gerais', 'Sistema administrativo orgânico de coordenação de atividades de logística pública'],
            ['ProPEN', 'Programa Nacional de Processo Eletrônico', 'Programa citado como motivo para a expansão do PEN a estados e municípios'],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'NRE não muda durante o trâmite',
          text: 'O NRE é uma referência numérica fixa: por mais vezes que o processo tramite entre SPEs pelo Tramita.GOV.BR, ele recebe o mesmo número. Não se deve esperar um novo NRE a cada expedição externa.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Antes de iniciar qualquer procedimento no SEI ou no Tramita.GOV.BR, localize o termo no Glossário PEN. A exatidão da sigla (NRE, NUP, NIPE, SPE, PEN) evita erros de configuração e de interpretação nas relações institucionais.',
        },
      ],
      keyPoints: [
        'PEN é a infraestrutura pública; SPE é o sistema usado pelo órgão; SEI é um dos SPEs desenvolvidos pelo TRF4.',
        'NUP identifica o processo ou documento avulso; NRE é a referência fixa de registro do trâmite.',
        'O NRE não muda durante os trâmites realizados por meio do Tramita.GOV.BR.',
        'Documento avulso é a informação registrada que não está reunida nem ordenada em processo.',
        'Gestor de Protocolo implanta e gerencia o Tramita.GOV.BR; Portal de Administração é o site onde ele atua.',
        'A Tramita.GOV.BR se estrutura em Portal de Administração, API SOAP, API REST e módulo de conexão com o SPE.',
      ],
      quiz: [
        {
          id: 'm8-glossario-pen-q1',
          prompt: 'Segundo o Glossário PEN, como se define o Número de Registro Eletrônico (NRE)?',
          options: [
            'É o número sequencial atribuído a cada nova autuação de processo no SEI.',
            'É a referência numérica fixa, relacionada ao NUP ou Número do Processo, que não muda durante os trâmites realizados por meio do Tramita.GOV.BR.',
            'É o identificador do repositório de estruturas do órgão no Tramita.GOV.BR.',
            'É o código de 20 dígitos padronizado para documentos e processos eletrônicos federativos.',
          ],
          correctIndex: 1,
          explanation:
            'O glossário define o NRE como referência numérica fixa, ligada ao NUP ou Número do Processo, que não se altera à medida que novos trâmites são realizados, inclusive no Tramita.GOV.BR. A opção 4 descreve o NIPE.',
        },
        {
          id: 'm8-glossario-pen-q2',
          prompt: 'Qual é a definição de documento avulso no Glossário PEN?',
          options: [
            'Documento gerado dentro de um processo e assinado eletronicamente por agente público.',
            'Informação registrada, em meio eletrônico, qualquer que seja o suporte ou formato, que não está reunida e ordenada em processo.',
            'Processo eletrônico recebido de outro órgão por meio do Tramita.GOV.BR.',
            'Documento digitalizado e digitalizado em formato nativo, conforme regra de arquivamento.',
          ],
          correctIndex: 1,
          explanation:
            'O glossário define documento avulso como a informação registrada em meio eletrônico que não está reunida e ordenada em processo — é essa a categoria que o Tramita.GOV.BR permite tratar também isoladamente.',
        },
        {
          id: 'm8-glossario-pen-q3',
          prompt: 'Quem é o Gestor de Protocolo, segundo o glossário?',
          options: [
            'Servidor encarregado de gerenciar o SEI e de criar usuários no SIP.',
            'Servidor do órgão ou da entidade encarregado da implantação e gestão da operação do Tramita.GOV.BR, por meio da configuração de unidades centralizadoras e do monitoramento dos trâmites.',
            'Administrador do Tramita.GOV.BR, lotado no Ministério da Gestão e da Inovação em Serviços Públicos.',
            'Qualquer usuário do órgão com perfil de assinador de documentos.',
          ],
          correctIndex: 1,
          explanation:
            'O Gestor de Protocolo é servidor do próprio órgão ou entidade, responsável pela implantação e gestão da operação do Tramita.GOV.BR. O papel não está restrito à área de protocolo e pode ser ocupado por servidores de outras áreas.',
        },
        {
          id: 'm8-glossario-pen-q4',
          prompt: 'Quais componentes formam a estrutura do Tramita.GOV.BR?',
          options: [
            'Portal de Administração, API SOAP, API REST e módulo de conexão com o sistema de processo eletrônico (SPE).',
            'Portal do Processo Eletrônico Nacional, Manual do Usuário SEI e SIP.',
            'Glossário PEN, Repositório de Estruturas e Painel de Controle.',
            'SEI, SIP e Sistema Eletrônico de Informações em nuvem.',
          ],
          correctIndex: 0,
          explanation:
            'Os manuais do Tramita.GOV.BR listam quatro componentes: Portal de Administração, API SOAP, API REST e módulo de conexão com o SPE.',
        },
        {
          id: 'm8-glossario-pen-q5',
          prompt: 'Qual fundamento legal sustenta a implantação do PEN no Poder Executivo, conforme o Manual do Usuário SEI 4.0+?',
          options: [
            'Decreto nº 8.539, de 2015, com operacionalização de responsabilidade da SEGES/MGI e do DELOG (art. 128 do Decreto nº 9.745, de 2019).',
            'Decreto nº 9.745, de 2019, como norma inaugural da tramitação eletrônica.',
            'Portaria SEGES/MGI nº 1.363, de 21 de fevereiro de 2025, que institui o Tramita.GOV.BR.',
            'Decreto nº 11.946, de 12 de março de 2024, restrito aos participantes do ProPEN.',
          ],
          correctIndex: 0,
          explanation:
            'O marco legal é o Decreto nº 8.539/2015, e a operacionalização cabe à SEGES/MGI e ao DELOG na forma do art. 128 do Decreto nº 9.745/2019. A Portaria 1.363/2025 institui o Tramita.GOV.BR e o Decreto 11.946/2024 trata do ProPEN.',
        },
      ],
    },
    {
      id: 'm8-2fa',
      slug: 'm8-2fa',
      title: 'Autenticação em dois fatores e Login Externo GOV.BR',
      estimatedMinutes: 30,
      objectives: [
        'Habilitar a Autenticação em dois fatores (2FA) a partir da tela de login do SEI 4.0+.',
        'Descrever o papel do aplicativo autenticador e as opções de dispensa de código por dispositivo e navegador.',
        'Diferenciar a assinatura simples revalidada pelo GOV.BR da assinatura avançada do GOV.BR.',
        'Relacionar a solicitação de credenciais do Login Externo GOV.BR ao Serviço de Integração aos Produtos de Identidade Digital GOV.BR.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O acesso ao SEI é feito por navegador de internet, na URL fornecida pelo órgão, com informs de login, senha e — no caso de instalações multiórgão — o órgão ao qual o usuário está vinculado. Sobre esse login pode ser habilitada a Autenticação em dois fatores, recurso que associa um dado que o usuário conhece (a senha) a um recurso que ele possui em mãos (o smartphone).',
        },
        {
          kind: 'steps',
          heading: 'Habilitando a Autenticação em dois fatores no SEI',
          items: [
            'Acesse a tela de login do SEI e preencha os campos Usuário e Senha.',
            'Marque a opção Autenticação em dois fatores e clique em ACESSAR.',
            'Leia as instruções exibidas e clique no botão Prosseguir.',
            'No dispositivo móvel, abra um aplicativo destinado à autenticação em duas etapas (exemplos citados no manual: Google Authenticator e Microsoft Authenticator) e acesse a opção de leitura de QR Code.',
            'Faça a leitura da imagem, insira o e-mail pessoal e clique em Enviar.',
            'Acesse o e-mail e clique no link enviado (ou copie o endereço da mensagem e cole no navegador) — a solicitação tem validade de até 60 minutos.',
            'Insira usuário e senha na tela inicial e clique em ACESSAR; na tela seguinte, digite o código exibido no aplicativo e clique em Validar.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Atenção ao e-mail cadastrado',
          text: 'O manual recomenda informar um e-mail pessoal, que não esteja associado à Instituição. É imprescindível que a senha de acesso a esse e-mail seja diferente da senha de acesso ao SEI. Reutilizar senha cria um ponto único de falha e facilita ataques de engenharia social.',
        },
        {
          kind: 'bullets',
          heading: 'Opções disponíveis na tela do 2FA',
          items: [
            '"Não usar o 2FA neste dispositivo e navegador" — dispensa o código de acesso nos mesmos dispositivos e navegadores; se for feita a limpeza de cookies, o código voltará a ser solicitado.',
            '"Desativar 2FA" — envia um link para o e-mail cadastrado para confirmar a operação; após o clique no link, o recurso é desabilitado e o acesso volta a ser somente com usuário e senha.',
            'Reativação após desativação ou perda do prazo — é necessário verificar se a conta permanece registrada no aplicativo autenticador e, em caso afirmativo, excluí-la antes de ler o novo QR Code.',
          ],
        },
        {
          kind: 'table',
          heading: 'Login Externo GOV.BR: dados do formulário de solicitação (homologação)',
          columns: ['Campo', 'O que preencher'],
          rows: [
            ['Nome do Sistema (Homologação)', '"SEI Login Externo Gov.BR - <Nome do Órgão>"'],
            ['Descrição/Objetivo do Sistema', '"O módulo de Login Externo gov.br permite que cidadãos acessem o ambiente do SEI destinado a usuários externos."'],
            ['Lista de IPs dos servidores', 'IP público da instalação do SEI'],
            ['Níveis, categorias e selos de confiabilidade', 'Acesso ilimitado: Bronze, Prata e Ouro'],
            ['URL(s) do retorno', '"http(s)://<ENDEREÇO SEI>/sei/modulos/loginunico/controlador_loginunico.php"'],
            ['URL única para página inicial do sistema', '"http(s)://<ENDEREÇO SEI>"'],
            ['URL de Logout', '"http(s)://<ENDEREÇO SEI>/sei/modulos/loginunico/logout.php"'],
          ],
        },
        {
          kind: 'paragraph',
          text: 'A solicitação de credenciais para uso dos módulos Login Externo GOV.BR e Assinatura Avançada do SEI é feita junto à Secretaria de Governo Digital do MGI (SGD/MGI) por meio do Serviço de Integração aos Produtos de Identidade Digital GOV.BR. Após o envio, o processo fica com o status 3 (Análise/Aprovação), com prazo de até 10 dias úteis para retorno; na sessão "Análise do Produto Homologação" o solicitante copia os valores client_id e secret e os informa no arquivo de configuração do módulo.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática na solicitação de credenciais',
          text: 'Todos os dados do formulário são obrigatórios e a solicitação começa sempre em ambiente de homologação. Grave um vídeo do teste de login em homologação (acesso à página externa do SEI, clique em "Entrar com gov.br", login com uma conta gov.br e logout) para anexar ao pedido de dados de produção.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Login gov.br no SEI não elimina o cadastro de usuário externo',
          text: 'A opção de login com o gov.br funciona paralelamente ao login com o cadastro de usuário externo nativo do SEI. Além disso, a assinatura realizada com login gov.br continua sendo do tipo simples, ainda que revalidada pelo GOV.BR.',
        },
      ],
      keyPoints: [
        'O 2FA é habilitado na própria tela de login do SEI, marcando a opção antes de acessar.',
        'A leitura do QR Code exige aplicativo de autenticação em duas etapas no celular.',
        'O e-mail cadastrado deve ser pessoal e com senha diferente da senha do SEI.',
        'O link de ativação tem validade de até 60 minutos.',
        'O login gov.br convive com o cadastro de usuário externo nativo do SEI.',
        'Credenciais de Login Externo e de Assinatura Avançada são solicitadas à SGD/MGI pelo Serviço de Integração aos Produtos de Identidade Digital GOV.BR.',
      ],
      quiz: [
        {
          id: 'm8-2fa-q1',
          prompt: 'Qual é a recomendação do manual sobre o e-mail informado na habilitação do 2FA?',
          options: [
            'Usar o e-mail institucional da unidade, desde que cadastrado no SEI.',
            'Informar um e-mail pessoal, não associado à Instituição, cuja senha de acesso seja diferente da senha de acesso ao SEI.',
            'Cadastrar qualquer e-mail, pois a senha do e-mail não é validada pelo SEI.',
            'Usar o e-mail institucional e a mesma senha do SEI para facilitar a recuperação.',
          ],
          correctIndex: 1,
          explanation:
            'O manual recomenda e-mail pessoal, não associado à Instituição, e é imprescindível que a senha desse e-mail seja diferente da senha de acesso ao SEI.',
        },
        {
          id: 'm8-2fa-q2',
          prompt: 'O que acontece quando se marca a opção "Não usar o 2FA neste dispositivo e navegador"?',
          options: [
            'O código de acesso não será solicitado novamente nos mesmos dispositivos e navegadores, mas voltará a ser solicitado se for feita a limpeza de cookies do navegador.',
            'O 2FA é desativado definitivamente para o usuário, exigindo nova habilitação.',
            'O sistema passa a aceitar apenas login e senha, removendo a exigência do aplicativo autenticador.',
            'O código passa a ser enviado por SMS a cada acesso.',
          ],
          correctIndex: 0,
          explanation:
            'A opção cria uma dispensa por dispositivo e navegador; a limpeza de cookies do navegador faz com que o código de acesso volte a ser solicitado.',
        },
        {
          id: 'm8-2fa-q3',
          prompt: 'Ao acessar o SEI utilizando login gov.br, qual é o tipo de assinatura apresentado?',
          options: [
            'Assinatura avançada, pois o GOV.BR valida o usuário por meio do aplicativo ou de mensagem SMS.',
            'Assinatura qualificada com carimbo de tempo automático.',
            'Assinatura simples, revalidada pelo GOV.BR.',
            'Assinatura com certificado A3 em nuvem emitido pelo SERPRO.',
          ],
          correctIndex: 2,
          explanation:
            'O manual é explícito: a assinatura simples é revalidada pelo gov.br e continua sendo do tipo simples, apesar da utilização do GOV.BR. A assinatura avançada via GOV.BR (SMS ou app) é outra funcionalidade do módulo.',
        },
        {
          id: 'm8-2fa-q4',
          prompt: 'Quem concede as credenciais (client_id e secret) para o Login Externo GOV.BR do SEI?',
          options: [
            'A Secretaria de Governo Digital do MGI (SGD/MGI), por meio do Serviço de Integração aos Produtos de Identidade Digital GOV.BR.',
            'O Tribunal Regional Federal da 4ª Região, mantenedor do software SEI.',
            'A Secretaria de Gestão e Inovação, por meio do Painel de Controle do Tramita.GOV.BR.',
            'O Gestor de Protocolo do próprio órgão, no momento da implantação.',
          ],
          correctIndex: 0,
          explanation:
            'A solicitação é feita junto à SGD/MGI pelo Serviço de Integração aos Produtos de Identidade Digital GOV.BR; os valores client_id e secret são copiados da sessão "Análise do Produto Homologação".',
        },
        {
          id: 'm8-2fa-q5',
          prompt: 'Após solicitar a integração com o gov.br, o que o solicitante deve fazer para concluir a configuração em homologação?',
          options: [
            'Cadastrar manualmente os usuários externos no SEI e aguardar a sincronização automática.',
            'Copiar client_id e secret da sessão Análise do Produto Homologação e informá-los no arquivo de configuração do módulo, salvar e realizar testes de login.',
            'Aguardar a liberação automática do acesso, sem necessidade de alterar arquivos de configuração.',
            'Reenviar todo o formulário com os dados do e-mail institucional do servidor.',
          ],
          correctIndex: 1,
          explanation:
            'Após o status 3 (Análise/Aprovação), o solicitante localiza os valores client_id e secret, os informa no arquivo de configuração do módulo (por exemplo, ConfiguracaoModLoginUnico.php), salva e testa o login, gravando vídeo da integração.',
        },
      ],
    },
    {
      id: 'm8-blocos-assinatura',
      slug: 'm8-blocos-assinatura',
      title: 'Blocos de assinatura no SEI',
      estimatedMinutes: 30,
      objectives: [
        'Criar um bloco de assinatura, incluir documentos e disponibilizá-lo a outras unidades.',
        'Identificar os estados do bloco (Gerado e Disponibilizado) e as ações disponíveis em cada um.',
        'Assinar documentos recebidos em bloco, devolver o bloco e acompanhar o retorno na unidade de origem.',
        'Aplicar sinalizações (Prioritário, Revisado, Comentado) e atribuir o bloco a um usuário.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O Bloco de Assinatura é um recurso para visualização e assinatura de minutas de documentos por usuários de unidades diferentes da unidade elaboradora. Também pode ser usado para agrupar documentos produzidos na própria unidade, para assinatura em lote. Por meio dele é possível disponibilizar vários documentos de um processo ou de vários processos, visualizar e editar minutas de outras unidades, visualizar os demais documentos do processo não incluídos no bloco e assinar documentos individualmente ou simultaneamente.',
        },
        {
          kind: 'steps',
          heading: 'Criar e disponibilizar um bloco de assinatura',
          items: [
            'Acesse o processo, clique no documento e escolha "Incluir em Bloco de Assinatura".',
            'Clique em "Novo Bloco" e preencha Descrição, Grupo (se existir) e Unidades para disponibilização; clique em "Salvar".',
            'Selecione os documentos e escolha "Incluir" (somente inclusão) ou "Incluir e Disponibilizar" (inclusão e disponibilização imediata).',
            'Confira o bloco na tela "Blocos de Assinatura": no estado "Gerado" ele ainda não foi disponibilizado.',
            'Clique no ícone "Disponibilizar Bloco"; o bloco passa a aparecer em amarelo, com estado "Disponibilizado".',
            'Na unidade receptora, acesse Menu Principal > Blocos > Assinatura e abra o bloco recebido (estado "Recebido").',
            'Assine os documentos e clique em "Fechar"; use "Devolver Bloco" para retornar o bloco à unidade remetente.',
          ],
        },
        {
          kind: 'table',
          heading: 'Estados do bloco e ações disponíveis',
          columns: ['Estado', 'Ações disponíveis na coluna Ações'],
          rows: [
            ['Gerado', 'Assinar Documentos; Atribuir Bloco a um usuário; Visualizar os documentos/processos do Bloco; Disponibilizar o Bloco para outra unidade; Alterar o Bloco; Concluir o Bloco; Excluir o Bloco'],
            ['Disponibilizado', 'Atribuir Bloco a um usuário; Visualizar os documentos/processos do Bloco; Cancelar disponibilização do Bloco'],
            ['Recebido (na unidade destinatária)', 'Processos/Documentos do Bloco; Assinar Documento; Anotações; Devolver Bloco'],
            ['Concluído', 'Reabrir Bloco (disponível ao filtrar pela opção "Concluído" na caixa Estado)'],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Operações complementares',
          items: [
            'Reutilização — blocos criados e retornados, ou com disponibilização cancelada, podem ser reutilizados; é recomendável retirar do bloco os documentos já incluídos para evitar confusão.',
            'Conclusão e reabertura — o bloco concluído sai da lista e pode ser reaberto depois pelo ícone "Reabrir Bloco".',
            'Sinalizações — Prioritário (ícone vermelho), Revisado (azul) e Comentado (laranja, com descrição obrigatória); também aplicáveis a Blocos de Reunião e Blocos Internos.',
            'Atribuição a usuário — o bloco pode ser atribuído a um usuário da unidade, que passa a identificá-lo na coluna "Atribuição" e pelo link "Ver blocos atribuídos a mim".',
            'Bloco de Reunião — permite disponibilizar processos a outras unidades para conhecimento, sem atuação formal, permitindo visualizar o conteúdo mesmo de documentos não assinados.',
            'Bloco Interno — organiza conjuntos de processos relacionados; diferente do Acompanhamento Especial, só aceita processos abertos na própria unidade.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Assinatura em lote na própria unidade',
          text: 'Quando o Bloco de Assinatura for usado apenas para agrupar documentos da própria unidade para assinatura em lote, o campo "Unidades para Disponibilização" deve ser deixado em branco, pois o bloco não será disponibilizado a nenhuma unidade.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cuidado ao incluir em bloco existente',
          text: 'A opção "Incluir" não disponibiliza o bloco: a disponibilização precisará ser feita depois, pelo menu Blocos de Assinatura. Se a opção "Incluir e Disponibilizar" não for usada na inclusão do último documento, o bloco continuará no estado "Gerado" e invisível para a outra unidade.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Retorno do bloco na unidade de origem',
          text: 'Depois da devolução, a unidade de origem identifica o retorno pelo símbolo exibido ao lado do número do processo, na tela Controle de Processos, que indica que há um novo documento assinado no processo.',
        },
      ],
      keyPoints: [
        'Bloco de Assinatura permite assinar documentos de outras unidades e agrupar documentos em lote.',
        'O estado "Gerado" significa criado e ainda não disponibilizado; "Disponibilizado" é o estado após o envio à outra unidade.',
        'A opção "Incluir e Disponibilizar" economiza um passo; sem ela, é preciso disponibilizar pelo menu Blocos.',
        'Todo ato de assinatura via SEI exige indicar cargo/função e informar a senha.',
        'Bloco pode ser atribuído a usuário, sinalizado e devolvido; blocos concluídos podem ser reabertos.',
        'Bloco Interno só aceita processos abertos na unidade; Bloco de Reunião permite consulta sem atuação formal.',
      ],
      quiz: [
        {
          id: 'm8-blocos-assinatura-q1',
          prompt: 'O que significa um bloco de assinatura estar no estado "Gerado"?',
          options: [
            'O bloco foi criado e os documentos já foram assinados pelos participantes.',
            'O bloco foi criado, mas ainda não foi disponibilizado para outra unidade.',
            'O bloco foi devolvido à unidade que o enviou.',
            'O bloco foi concluído e está disponível apenas para consulta.',
          ],
          correctIndex: 1,
          explanation:
            'No estado "Gerado" o bloco foi criado e os documentos foram incluídos, mas a disponibilização ainda não ocorreu; é preciso clicar no ícone "Disponibilizar Bloco".',
        },
        {
          id: 'm8-blocos-assinatura-q2',
          prompt: 'Qual a diferença entre "Incluir" e "Incluir e Disponibilizar" na tela de inclusão em bloco?',
          options: [
            '"Incluir" assina o documento; "Incluir e Disponibilizar" apenas cria o bloco.',
            '"Incluir" adiciona o documento ao bloco sem disponibilizá-lo; "Incluir e Disponibilizar" faz as duas ações de uma vez.',
            'As duas opções são idênticas, diferindo apenas no nome do botão.',
            '"Incluir" exige privilégio de administrador da unidade.',
          ],
          correctIndex: 1,
          explanation:
            '"Incluir" apenas insere o documento no bloco; a disponibilização fica para um momento posterior. "Incluir e Disponibilizar" realiza a inclusão e a disponibilização simultaneamente.',
        },
        {
          id: 'm8-blocos-assinatura-q3',
          prompt: 'Para assinar documentos recebidos em um bloco de assinatura, qual sequência é correta?',
          options: [
            'Menu Principal > Blocos > Assinatura, abrir o bloco, clicar em "Processos/Documentos do Bloco", assinar e clicar em "Fechar".',
            'Menu Principal > Blocos > Reunião, abrir a reunião e assinar em bloco.',
            'Controle de Processos > Enviar Processo, selecionando a unidade remetente.',
            'Tela do processo > Incluir em Bloco de Assinatura > Assinar Documentos.',
          ],
          correctIndex: 0,
          explanation:
            'Os blocos recebidos são acessados por Menu Principal > Blocos > Assinatura; a partir daí o usuário abre os documentos do bloco, assina e fecha a tela para retornar à lista.',
        },
        {
          id: 'm8-blocos-assinatura-q4',
          prompt: 'Ao usar o Bloco de Assinatura apenas para assinar em lote documentos da própria unidade, como preencher o campo "Unidades para disponibilização"?',
          options: [
            'Selecionar a própria unidade, para que os documentos apareçam no bloco.',
            'Deixar em branco, pois o bloco não será disponibilizado a nenhuma unidade.',
            'Selecionar todas as unidades da estrutura hierárquica do órgão.',
            'Campo obrigatório: deve-se indicar a unidade do(signatário) responsável.',
          ],
          correctIndex: 1,
          explanation:
            'Quando o objetivo é apenas a assinatura em lote na própria unidade, o manual orienta deixar o campo Unidades para disponibilização em branco.',
        },
        {
          id: 'm8-blocos-assinatura-q5',
          prompt: 'Qual a diferença entre Bloco Interno e Acompanhamento Especial?',
          options: [
            'O Bloco Interno pode ser visualizado por todas as unidades; o Acompanhamento Especial, apenas pela unidade que o criou.',
            'O Bloco Interno só pode ser aplicado a processos abertos na própria unidade; o Acompanhamento Especial pode acompanhar processos abertos em qualquer unidade.',
            'O Bloco Interno exige assinatura; o Acompanhamento Especial dispensa senha do usuário.',
            'Não há diferença: são funcionalidades equivalentes no SEI.',
          ],
          correctIndex: 1,
          explanation:
            'A inclusão em Bloco Interno só pode ser feita em processos abertos na unidade que o criou, enquanto o Acompanhamento Especial pode ser usado para qualquer processo, independentemente de onde esteja aberto.',
        },
      ],
    },
    {
      id: 'm8-assinatura-eletronica',
      slug: 'm8-assinatura-eletronica',
      title: 'Módulo de Assinatura Eletrônica do SEI',
      estimatedMinutes: 35,
      objectives: [
        'Distinguir assinatura avançada e assinatura qualificada e os meios disponíveis no módulo (GOV.BR, SERPROID, A1, A3 em nuvem, P7S).',
        'Executar a assinatura de documento interno e de documento externo, inclusive em bloco de assinatura.',
        'Utilizar carimbo de tempo, opção "Todas as páginas" e anexo de arquivo P7S.',
        'Validar assinaturas pela funcionalidade "Visualizar Resultado Autenticidade" e verificar a ficha catalográfica do manual.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O Módulo de Assinatura Eletrônica possibilita que os usuários assinem documentos por meio de assinatura avançada e assinatura qualificada. O novo módulo unifica todos os meios de assinatura, elimina o antigo componente Java do SEI e cria padronização entre órgãos. Os modelos de certificado compatíveis com o módulo estão enumerados na FAQ do próprio manual.',
        },
        {
          kind: 'steps',
          heading: 'Assinando um documento interno',
          items: [
            'Na tela do processo, selecione o documento e clique na funcionalidade "Assinar Documento".',
            'Escolha a opção Assinatura Eletrônica; na tela seguinte, confirme Órgão Assinante, Assinante e Cargo/função (apenas Órgão Assinante e Cargo/função são editáveis).',
            'Verifique os tipos de assinatura habilitados pelo Administrador do SEI no órgão.',
            'Selecione o tipo de assinatura desejado (login e senha, login gov.br, GOV.BR, SERPROID, A1, A3 em nuvem ou anexo P7S).',
            'Complete a autenticação exigida pelo meio escolhido; ao final, o documento é atualizado com a assinatura eletrônica.',
          ],
        },
        {
          kind: 'table',
          heading: 'Tipos de assinatura disponíveis',
          columns: ['Tipo', 'Como funciona', 'Observação do manual'],
          rows: [
            ['Login e Senha', 'Exibe os tipos de assinatura habilitados pelo Administrador do Sistema.', 'É a assinatura simples nativa do SEI'],
            ['Login gov.br', 'Tipos habilitados pelo Administrador + assinatura simples revalidada pelo gov.br.', 'Continua sendo do tipo simples'],
            ['GOV.BR', 'Após autenticação, o sistema encaminha SMS ou mensagem ao aplicativo gov.br com código de autenticação; o usuário informa o código no campo "Código" e clica em "Autorizar".', 'Assinatura do tipo avançada'],
            ['SERPROID', 'Abre modal com QR Code; no app SerproID escolha "Autorizar Aplicação", leia o QR Code, escolha o certificado em nuvem e use a biometria.', 'Certificado em nuvem emitido pelo SERPRO'],
            ['Certificado A1', 'Abre tela para localizar o arquivo do certificado; digite a senha específica do certificado e clique em "Assinar".', 'Arquivo previamente guardado no computador'],
            ['Certificados A3 em nuvem', 'Além do SERPROID, a equipe responsável pode habilitar outros exemplos de certificados A3 em nuvem aceitos pelo módulo.', 'Habilitação feita pelo administrador'],
            ['Assinatura digital P7S', 'Anexar o arquivo de assinatura digital p7s em documentos externos pela funcionalidade "Anexar assinatura digital p7s"; após o upload, clique em salvar.', 'Disponível a partir da versão 1.4.0 do módulo'],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Recursos complementares do módulo',
          items: [
            'Assinatura de vários documentos — por meio do bloco de assinatura, com assinatura avançada ou qualificada; o processo é o mesmo da assinatura simples.',
            'Documentos externos em bloco — a partir da versão 1.4.0, é possível assinar documentos externos por bloco, um de cada vez, para posicionar o local da assinatura em cada item.',
            'Carimbo de tempo — habilitado apenas pelo Administrador do SEI no órgão, que precisa alinhar com a área responsável a contratação de uma Autoridade de Carimbo de Tempo e configurar a credencial; ao parametrizar, aparece o checkbox "Carimbo de tempo" para todos, em documentos internos e externos (a partir da versão 1.4.0).',
            '"Todas as páginas" — replica a assinatura em todas as páginas do documento, sempre no mesmo local escolhido; funcionalidade exclusiva para documentos externos.',
            'Validação — a funcionalidade "Visualizar Resultado Autenticidade" apresenta a validade de todas as assinaturas realizadas no documento, com as mesmas informações do site Validador ITI, sem sair do SEI.',
            'Assinatura por usuário externo — o módulo permite que o usuário externo assine documentos internos e externos com assinatura avançada e qualificada, seguindo os mesmos passos da assinatura simples (internos a partir da 1.3.0 e externos a partir da 1.4.0).',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Restrições importantes',
          text: 'O botão de assinar não está disponível fora do bloco para documento externo: é preciso assinar cada documento individualmente dentro do bloco, para posicionar o local da assinatura. A utilização de carimbo de tempo pelo usuário externo é habilitada pelo Administrador do SEI a partir da versão 1.4.0.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Ao validar assinaturas, confira o resultado da autenticidade antes de devolver ou concluir o processo. A validação interna do SEI evita a necessidade de sair do sistema e entrar no site do Validador ITI, economizando tempo na rotina de conferência.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Ficha catalográfica do manual',
          text: 'O Manual de Utilização do módulo de Assinatura Eletrônica traz a ficha catalográfica: "Brasil. Ministério da Gestão e da Inovação em Serviços Públicos. Secretaria de Gestão e Inovação. Manual de utilização do módulo de assinatura eletrônica. Brasília: Coordenação de Interoperabilidade e Governança de Dados/DTGES/SEGES/MGI, 2026. 1 v. : il." com CDU 004.056.55:35.077 e reprodução permitida, em parte ou no todo, desde que citada a fonte e sem fins comerciais.',
        },
      ],
      keyPoints: [
        'O módulo unifica os meios de assinatura, elimina o antigo componente Java e padroniza a prática entre órgãos.',
        'Documentos internos e externos têm telas distintas de assinatura: no externo são exibidos dados do assinante e tipos de certificado.',
        'A assinatura via GOV.BR é do tipo avançada e exige código de autorização no app ou SMS.',
        'SERPROID, A1 e A3 em nuvem são certificados; o P7S é anexado como arquivo para documentos externos.',
        'O carimbo de tempo depende de contratação de Autoridade de Carimbo de Tempo e de habilitação pelo administrador do órgão.',
        'A assinatura por usuário externo está disponível em documentos internos (1.3.0) e externos (1.4.0) do módulo.',
      ],
      quiz: [
        {
          id: 'm8-assinatura-eletronica-q1',
          prompt: 'Como funciona a assinatura por meio do GOV.BR no Módulo de Assinatura Eletrônica?',
          options: [
            'O usuário informa a senha do SEI e o sistema gera um certificado A1 temporário.',
            'Após a autenticação, o sistema encaminha SMS ou mensagem ao aplicativo gov.br com código de autenticação; o usuário informa o código e clica em "Autorizar".',
            'O usuário anexa o arquivo p7s gerado pelo aplicativo gov.br.',
            'O usuário utiliza a biometria no app SerproID para assinar pelo GOV.BR.',
          ],
          correctIndex: 1,
          explanation:
            'A assinatura por GOV.BR encaminha SMS ou mensagem ao aplicativo gov.br com um código de autenticação; ao informar o código e clicar em "Autorizar", o documento é atualizado com a assinatura eletrônica. É do tipo avançada.',
        },
        {
          id: 'm8-assinatura-eletronica-q2',
          prompt: 'Ao marcar a opção "Todas as páginas", a assinatura:',
          options: [
            'É replicada em todas as páginas do documento, sempre no mesmo local escolhido; é exclusiva para documentos externos.',
            'É aplicada apenas à primeira página, conforme a posição marcada.',
            'Exige nova autenticação para cada página do documento.',
            'É automática em documentos internos e externos, sem escolha do usuário.',
          ],
          correctIndex: 0,
          explanation:
            'A opção replica a assinatura em todas as páginas do documento, no mesmo local escolhido, e é exclusiva para documentos externos.',
        },
        {
          id: 'm8-assinatura-eletronica-q3',
          prompt: 'Quem habilita a inclusão de carimbo de tempo na assinatura de documentos?',
          options: [
            'O usuário, no momento da assinatura, se possuir senha do SEI.',
            'O Administrador do SEI no órgão, após alinhar com a área responsável a viabilidade de contratar o serviço de uma Autoridade de Carimbo de Tempo e configurar a credencial.',
            'O Gestor de Protocolo do Tramita.GOV.BR, por meio do Painel de Controle.',
            'A Secretaria de Governo Digital do MGI, no momento da emissão do certificado digital.',
          ],
          correctIndex: 1,
          explanation:
            'A inclusão de carimbo de tempo é habilitada apenas pelo Administrador do SEI no órgão, que precisa alinhar a contratação do serviço de uma Autoridade de Carimbo de Tempo e parametrizar a credencial.',
        },
        {
          id: 'm8-assinatura-eletronica-q4',
          prompt: 'Como validar assinaturas realizadas em documentos do SEI?',
          options: [
            'Baixando o documento e abrindo o site Validador ITI em outra aba.',
            'Pela funcionalidade "Visualizar Resultado Autenticidade", que exibe a validade de todas as assinaturas realizadas no documento, sem sair do sistema.',
            'Solicitando ao Administrador do SEI a emissão de novo certificado para o documento.',
            'Pela tela "Gerar Certificado" do Portal de Administração do Tramita.GOV.BR.',
          ],
          correctIndex: 1,
          explanation:
            'O módulo permite validar as assinaturas sem sair do SEI: a funcionalidade "Visualizar Resultado Autenticidade" mostra as mesmas informações apresentadas no site Validador ITI.',
        },
        {
          id: 'm8-assinatura-eletronica-q5',
          prompt: 'Qual a restrição para assinar documentos externos em bloco de assinatura?',
          options: [
            'Não é possível assinar documentos externos em bloco de assinatura.',
            'É preciso assinar os documentos do bloco um de cada vez, para posicionar o local da assinatura em cada item, pois o botão de assinar não está disponível fora do bloco externo.',
            'Todos os documentos externos do bloco são assinados simultaneamente na mesma posição.',
            'É necessário usar certificado A1 instalado, pois bloco não aceita assinatura GOV.BR.',
          ],
          correctIndex: 1,
          explanation:
            'A partir da versão 1.4.0 do módulo é possível assinar documentos externos por bloco de assinatura, mas um de cada vez, para posicionar o local da assinatura; o botão de assinar não está disponível fora do bloco de externo.',
        },
      ],
    },
    {
      id: 'm8-tramita',
      slug: 'm8-tramita',
      title: 'Tramita.GOV.BR — conceitos e Portal de Administração',
      estimatedMinutes: 35,
      objectives: [
        'Explicar a finalidade do Tramita.GOV.BR e sua relação com os SPEs e o protocolo comum de tramitação.',
        'Configurar órgão/entidade, hierarquia, gestores, sistemas, unidades administrativas e unidades centralizadoras no Portal de Administração.',
        'Distinguir os perfis do Portal (Administrador do Tramita, Supervisor, Administrador Externo e Gestores) e suas permissões.',
        'Gerar o Painel de Controle e interpretar IDT, NRE, recibos, situações e componentes de um trâmite.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O Tramita.GOV.BR, plataforma disponibilizada e gerenciada pela Secretaria de Gestão e Inovação do MGI, permite o trâmite de processos administrativos eletrônicos ou documentos avulsos entre os diversos sistemas existentes, como SEI, SAPIENS (AGU), e-DOC, SIPAC Protocolo e SUAP. O requisito único para a utilização é possuir um SPE conectado à Internet.',
        },
        {
          kind: 'callout',
          tone: 'legal',
          title: 'Fundamento do Tramita.GOV.BR',
          text: 'O Manual Técnico-Operacional do Tramita.GOV.BR é parte integrante da Portaria SEGES/MGI nº 1.363, de 21 de fevereiro de 2025, que institui o Tramita.GOV.BR, plataforma digital de comunicação integrante do PEN, destinada à tramitação externa, por meio de expedição, de processos administrativos eletrônicos e documentos avulsos entre SPEs.',
        },
        {
          kind: 'bullets',
          heading: 'Vantagens destacadas nos manuais',
          items: [
            'Redução do tempo de tramitação entre órgãos/entidades.',
            'Tramitação 100% digital.',
            'Redução de custos financeiros e ambientais associados à impressão e à tramitação física.',
            'Infraestrutura centralizada pelo MGI.',
            'Tramitação segura de processos administrativos e documentos avulsos.',
            'Confirmação da realização do trâmite.',
            'Trâmite eletrônico independentemente da tecnologia do SPE adotado, devido ao protocolo comum para tramitação.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Configuração inicial no Portal de Administração',
          items: [
            'Solicitar o acesso e preencher o cadastro com os dados do órgão, do Sistema de Governo (SPE) e do Gestor Tecnológico, anexando o documento comprobatório previsto para o tipo de solicitante.',
            'Após a aprovação, gerar o certificado digital em Administração > Sistema de Processo Eletrônico > Gerar Certificado (o certificado é vinculado automaticamente ao órgão e passa a ser confiável para o Tramita.GOV.BR).',
            'Cadastrar a hierarquia em Protocolo > Gestão do Tramita.GOV.BR > Hierarquia, criando unidades, alterando nó pai ou importando estruturas.',
            'Cadastrar os Gestores de Protocolo em Protocolo > Gestão do Tramita.GOV.BR > Gestores, informando o CPF; o acesso dos novos gestores é realizado por autenticação gov.br.',
            'Vincular o Sistema de Processo Eletrônico em Sistemas > Vincular Sistemas.',
            'Definir as unidades que podem enviar e/ou receber processos externos em Sistemas > Unidades Administrativas (Enviar e Receber, Somente enviar ou Somente receber).',
            'Definir unidades centralizadoras em Unidades Centralizadoras, indicando por quais unidades administrativas a centralizadora responde.',
            'Monitorar os trâmites em Administração > Painel de Controle.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática de nomenclatura',
          text: 'Como boa prática, indica-se cadastrar apenas a primeira letra de cada palavra em caixa alta nas unidades administrativas (por exemplo: "Diretoria de Informações, Serviços e Sistemas de Gestão"), evitando nomes inteiros em caixa alta, pois eles dificultam a leitura da árvore no processo externo.',
        },
        {
          kind: 'table',
          heading: 'Perfis do Portal de Administração',
          columns: ['Perfil', 'Visão dos órgãos', 'Atribuição'],
          rows: [
            ['Administrador do Tramita (Interno)', 'Visualiza todas as informações dos órgãos que integram a plataforma.', 'Administradores da plataforma (MGI)'],
            ['Supervisor', 'Visualiza informações dos órgãos que fazem parte de um repositório específico e que o sistema está implantado em sua infraestrutura, ou do repositório de estruturas sob sua supervisão.', 'Atribuído pelos Administradores da plataforma; pode atribuir Supervisor e Administrador Externo'],
            ['Administrador Externo', 'Visualiza apenas informações dos órgãos aos quais está vinculado.', 'Atribuído pelo Supervisor ou pelos Administradores'],
            ['Gestor de Protocolo / Gestor Tecnológico', 'Acesso ao módulo de conexão e ao Portal para configuração do próprio órgão.', 'Cadastrados pelo Gestor de Protocolo ou pela plataforma'],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Painel de Controle — o que é possível consultar',
          items: [
            'Consulta a todos os SPEs ou a um SPE específico e escolha do período do trâmite (por mês e ano ou por calendário).',
            'Gráfico por percentual ou quantidade e geração do painel por situação, selecionando uma ou todas.',
            'IDT (Identificação do Trâmite): número único que identifica cada trâmite específico.',
            'NRE: número de protocolo do Tramita.GOV.BR; é o mesmo, independentemente de quantas vezes o processo for tramitado entre SPEs.',
            'Informações do trâmite (tipo, descrição, nível de acesso), remetente e destinatário (repositório, órgão, SPE vinculado, tipo de autenticação).',
            'Recibo (recibo de envio e recibo de trâmite), situações com data e hora e componentes digitais (ordem, documento, espécie, nível de restrição, avulso, hash, tipo de conteúdo, mime type e tamanho).',
            'Aba de recusa, exibida quando o trâmite é concluído com recusa, com a justificativa.',
            'Exportação da pesquisa em Excel ou PDF (após gerar o painel de controle).',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Regras de exclusão e exclusividade de sistemas',
          text: 'Não existe limitação de sistemas para um órgão/entidade; contudo, as unidades administrativas mapeadas em cada sistema não podem ser as mesmas. Além disso, não é possível excluir órgão/entidade com sistema de processo eletrônico vinculado — a mensagem "Não é possível excluir Órgão/Entidade com sistema de processo eletrônico vinculado" é exibida até a remoção dos vínculos.',
        },
        {
          kind: 'bullets',
          heading: 'Outras funcionalidades do Portal',
          items: [
            'Repositório de estrutura — cadastro, edição, inativação/reativação e migração de unidades; a migração não é permitida no repositório Poder Executivo Federal, pois a estrutura é mantida pelo SIORG; os IDs das unidades não são mudados na migração.',
            'Hipótese Legal — cadastro com nome, base legal, descrição e status, usado para definir a hipótese legal de restrição de acesso.',
            'Gestores Tecnológicos — cadastro do órgão responsável pela infraestrutura em que o SPE está implantado (por exemplo, Interno ou Dataprev).',
            'Gerenciar Acesso ao Tramita.GOV.BR — análise de solicitações de acesso, com filtros por CPF do Gestor, sigla e nome do órgão e período da solicitação.',
            'Gerenciar Perfis — cadastro de usuários por CPF, com seleção de perfis, e relatório exportado em planilha.',
            'Guia de Importação de Estrutura — importação de hierarquias em arquivo CSV para órgãos não mantidos pelo SIORG, com modelo padronizado e códigos sequenciais.',
          ],
        },
      ],
      keyPoints: [
        'O Tramita.GOV.BR conecta SPEs por protocolo comum, permitindo trâmite de processos e documentos avulsos entre órgãos.',
        'A base normativa é a Portaria SEGES/MGI nº 1.363, de 21 de fevereiro de 2025.',
        'O requisito único de uso é ter um SPE conectado à Internet; a solicitação de acesso começa em homologação.',
        'A configuração passa por certificado digital, hierarquia, gestores, sistemas, unidades administrativas e unidades centralizadoras.',
        'Unidade centralizadora recebe todos os processos enviados ao órgão, independentemente da unidade indicada pelo remetente.',
        'No Painel de Controle, o IDT identifica o trâmite e o NRE é o mesmo em todas as tramitações do processo.',
      ],
      quiz: [
        {
          id: 'm8-tramita-q1',
          prompt: 'Qual é o requisito básico para a utilização do Tramita.GOV.BR por um órgão?',
          options: [
            'Ter um sistema de protocolo próprio homologado pela SEGES.',
            'Possuir um SPE conectado à Internet.',
            'Adquirir certificado A3 em nuvem para todos os servidores.',
            'Publicar a estrutura hierárquica no Diário Oficial da União.',
          ],
          correctIndex: 1,
          explanation:
            'Por se tratar de ferramenta on-line voltada para a tramitação entre SPEs, o único requisito necessário é possuir um SPE conectado à Internet.',
        },
        {
          id: 'm8-tramita-q2',
          prompt: 'Qual a finalidade de uma unidade centralizadora configurada no Tramita.GOV.BR?',
          options: [
            'Concentrar todos os processos enviados à instituição, independentemente da unidade indicada pelo remetente, funcionando como unidade de protocolo.',
            'Impedir o envio de processos para as unidades do próprio órgão.',
            'Armazenar em duplicidade os documentos recebidos para conferência.',
            'Definir o repositório de estruturas ao qual o órgão pertence.',
          ],
          correctIndex: 0,
          explanation:
            'A unidade centralizadora recebe todos os processos enviados para a instituição, independentemente da unidade indicada pelo órgão ou entidade remetente, e é necessário indicar por quais unidades administrativas ela responde.',
        },
        {
          id: 'm8-tramita-q3',
          prompt: 'No Painel de Controle, o que significa IDT e como se comporta o NRE?',
          options: [
            'IDT é o identificador do documento externo; o NRE muda a cada trâmite.',
            'IDT é a Identificação do Trâmite, número único de cada trâmite; o NRE é o número de protocolo do Tramita.GOV.BR e é o mesmo, independentemente de quantas vezes o processo for tramitado entre SPEs.',
            'IDT é o tipo de trâmite; o NRE é o número do processo no SEI.',
            'IDT e NRE são sinônimos do mesmo código.',
          ],
          correctIndex: 1,
          explanation:
            'O IDT é a Identificação do Trâmite, número único que identifica cada trâmite específico; o NRE é o número de protocolo do Tramita.GOV.BR e permanece o mesmo em todas as tramitações do processo entre SPEs.',
        },
        {
          id: 'm8-tramita-q4',
          prompt: 'Qual perfil pode atribuir os perfis de Supervisor e Administrador Externo?',
          options: [
            'Qualquer Gestor de Protocolo do órgão.',
            'O perfil de Supervisor.',
            'O Gestor Tecnológico da empresa que hospeda o SPE.',
            'O usuário externo cadastrado pelo cidadão.',
          ],
          correctIndex: 1,
          explanation:
            'O perfil de Supervisor pode atribuir apenas os perfis de Supervisor e Administrador Externo, dentro do repositório que ele gerencia, sem necessidade de participação do Administrador da plataforma.',
        },
        {
          id: 'm8-tramita-q5',
          prompt: 'Ao cadastrar o SPE no Portal de Administração, como deve ser formado o campo "Nome do Sistema"?',
          options: [
            'Apenas o nome do sistema, por exemplo: SEI.',
            'Sigla do órgão + sigla do sistema, por exemplo: MGI – SEI.',
            'Nome por extenso do órgão e da sistemaool.',
            'Código do órgão seguido do número do contrato de fornecimento.',
          ],
          correctIndex: 1,
          explanation:
            'O manual de cadastro de SPE orienta compor o Nome do Sistema como Sigla do Órgão + Sigla do Sistema (por exemplo, MGI – SEI) e usar na Descrição o nome por extenso do órgão.',
        },
      ],
    },
    {
      id: 'm8-tramita-integracao',
      slug: 'm8-tramita-integracao',
      title: 'Integração do SEI ao Tramita.GOV.BR (mod-sei-pen)',
      estimatedMinutes: 35,
      objectives: [
        'Instalar o módulo mod-sei-pen e configurar os parâmetros técnicos de integração no SEI.',
        'Configurar as unidades autorizadas para envio e recebimento e o mapeamento de hipóteses legais.',
        'Expedir processo para unidade externa e acompanhar o trâmite até o recebimento confirmado.',
        'Consultar recibos de envio e de conclusão de trâmite e verificar as informações registradas no histórico.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O módulo PEN (mod-sei-pen) é responsável por integrar o Sistema Eletrônico de Informações à plataforma de interoperabilidade do Processo Eletrônico Nacional. O projeto interliga os sistemas de processo eletrônico para proporcionar a troca de documentos oficiais de forma rápida, simplificada e segura. A utilização do módulo adiciona ao SEI a possibilidade de enviar e receber processos administrativos de outras instituições e de acompanhar a relação de processos em trâmite externo.',
        },
        {
          kind: 'bullets',
          heading: 'Pré-requisitos de instalação',
          items: [
            'SEI versão 3.1.x ou superior instalada.',
            'Usuário de acesso ao banco de dados do SEI e do SIP com permissões para criar novas estruturas.',
            'Certificado digital de autenticação do sistema no Barramento do PEN, emitido pela equipe do PEN após aprovação do Comitê Gestor de Protocolo.',
            'Backup completo dos bancos de dados do SEI e do SIP e dos arquivos de configuração antes de qualquer manutenção.',
            'Para compatibilidade com o SEI versão 4, consultar o changelog de cada versão do módulo; apenas versões superiores a 3.0.0 podem ser utilizadas.',
            'Registro, no Tramita.GOV.BR, das unidades administrativas que poderão realizar envio e recebimento de processos externos — procedimento do Gestor de Protocolo, com testes primeiro em homologação.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Sequência de instalação e configuração',
          items: [
            'Baixar o pacote mod-sei-pen-VERSAO.zip e descompactá-lo na raiz de instalação do SEI/SIP.',
            'Habilitar o módulo em sei/config/ConfiguracaoSEI.php, na chave [Modulos]: array (PENIntegracao => pen).',
            'Renomear ConfiguracaoModPEN.exemplo.php para ConfiguracaoModPEN.php em /sei/config/mod-pen/ e definir WebService, LocalizacaoCertificado e SenhaCertificado.',
            'Atualizar a base do SIP (sip/scripts/mod-pen/sip_atualizar_versao_modulo_pen.php) e a base do SEI (sei/scripts/mod-pen/sei_atualizar_versao_modulo_pen.php).',
            'Configurar o relógio dos servidores com o serviço NTP.br, indispensável para a geração e assinatura dos recibos de entrega e conclusão de trâmites.',
            'Verificar a periodicidade do CRON para execução a cada minuto do agendamento de tarefas do SEI.',
            'Executar o script verifica_instalacao_modulo_pen.php para validar a instalação e as configurações.',
          ],
        },
        {
          kind: 'table',
          heading: 'Parâmetros do ConfiguracaoModPEN.php',
          columns: ['Parâmetro', 'Função'],
          rows: [
            ['WebService', 'Endereço do Web Service principal de integração com o Tramita.GOV.BR (endereços distintos para homologação e produção)'],
            ['LocalizacaoCertificado', 'Localização completa do certificado digital usado para autenticação nos serviços do Tramita.GOV.BR'],
            ['SenhaCertificado', 'Senha do certificado digital para acessar a chave privada'],
            ['Gearman (opcional e desejável)', 'Servidor de gerenciamento de fila de tarefas, para processamento paralelo das mensagens do Barramento'],
            ['NumeroTentativasErro (opcional)', 'Quantidade de tentativas de requisição dos serviços antes de gerar erro (padrão: 3)'],
            ['WebServicePendencias (opcional)', 'Monitoramento de pendências de trâmite, usado quando o módulo opera em conjunto com o Supervisor'],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Campos obrigatórios no envio externo',
          text: 'Para envio externo pelo PEN, os campos Especificação e Interessado são obrigatórios (deve haver pelo menos um interessado no processo). O SEI verifica as informações pendentes e impede o trâmite de processos que possuam documentos sem assinatura.',
        },
        {
          kind: 'steps',
          heading: 'Expedição de processo para unidade externa',
          items: [
            'Na tela de processos, clique no ícone de envio externo (disponível se o perfil possuir o recurso pen_procedimento_expedir).',
            'Na tela exibida, confirme o número do processo, escolha o repositório de estruturas do receptor e digite o nome da unidade receptora.',
            'Indique se o processo é urgente — as opções são sincronizadas automaticamente a partir do serviço do PEN.',
            'Permita a abertura de pop-ups no navegador para acompanhar a barra de progresso da validação e do envio.',
            'Após o envio, acompanhe o registro no histórico do processo e o status na tela Controle de Processos.',
          ],
        },
        {
          kind: 'bullets',
          heading: 'Regras de tramitação externa',
          items: [
            'A operação de envio é registrada no andamento do processo, mas ainda não reflete o sucesso do trâmite de fato.',
            'Enquanto a unidade receptora não confirma o recebimento, o processo fica em envio externo aguardando recebimento e bloqueado para edição, com alerta de círculo vermelho ao lado do número.',
            'No recebimento, o processo aparece na área de trabalho da mesma forma que um trâmite interno, com fonte em vermelho.',
            'A unidade destinatária pode instruir o processo normalmente, inclusive devolvendo-o à origem; nesse caso, o PEN reconhece os documentos que a unidade receptora já possui e tramita apenas os necessários.',
            'Caso não haja unidade receptora para a unidade visível no PEN, o processo é remetido diretamente à unidade destinatária visível para trâmite.',
            'Os recibos são gerados em dois casos: envio para o Tramita.GOV.BR (disponibilizado ao remetente) e conclusão de trâmite (disponibilizado ao remetente e ao destinatário).',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Mapeamento de hipóteses legais',
          text: 'Para processos com restrição de acesso, o mapeamento deve ser realizado tanto para envio quanto para recebimento, em SEI > Administração > Processo Eletrônico Nacional > Mapeamento de Hipóteses Legais (Envio e Recebimento). Configurar a Hipótese de Restrição Padrão evita que o trâmite seja cancelado por falta de mapeamento.',
        },
      ],
      keyPoints: [
        'O mod-sei-pen integra o SEI à plataforma de interoperabilidade do PEN, permitindo enviar e receber processos externos.',
        'Os pré-requisitos incluem SEI 3.1.x ou superior, acesso ao banco de dados e certificado digital emitido pelo PEN.',
        'O certificado é baixado do Portal de Administração do Tramita.GOV.BR, em Administração > Sistema de Processo Eletrônico > Gerar Certificado.',
        'NTP.br é indispensável para a geração e assinatura dos recibos de entrega e conclusão de trâmites.',
        'Especificação e Interessado são obrigatórios no envio externo, assim como documentos assinados.',
        'Existem dois tipos de recibo: o de envio (remetente) e o de conclusão de trâmite (remetente e destinatário).',
      ],
      quiz: [
        {
          id: 'm8-tramita-integracao-q1',
          prompt: 'Quais informações são obrigatórias para o envio externo de um processo pelo PEN?',
          options: [
            'Apenas o número do processo e a unidade destinatária.',
            'Os campos Especificação e Interessado, com pelo menos um interessado, além de documentos assinados.',
            'O preenchimento da máscara de numeração do órgão.',
            'A geração de um novo NRE para o processo.',
          ],
          correctIndex: 1,
          explanation:
            'Para permitir o trâmite externo, os campos Especificação e Interessado são obrigatórios e o processo deve conter ao menos um documento interno assinado ou algum documento externo.',
        },
        {
          id: 'm8-tramita-integracao-q2',
          prompt: 'Por que a configuração do relógio dos servidores do SEI com o serviço NTP.br é indispensável?',
          options: [
            'Para definir o fuso horário dos documentos na árvore do processo.',
            'Porque o protocolo de comunicação do PEN gera e assina digitalmente recibos de entrega e conclusão dos trâmites.',
            'Para ordenar as versões dos documentos na tela de versões do documento.',
            'Para sincronizar o login do usuário com o GOV.BR.',
          ],
          correctIndex: 1,
          explanation:
            'O protocolo de comunicação implementado pelo PEN realiza a geração e assinatura digital de recibos de entrega e conclusão dos trâmites; por isso todos os nós da aplicação precisam estar sincronizados com o NTP.br.',
        },
        {
          id: 'm8-tramita-integracao-q3',
          prompt: 'O que significa o recibo de envio e o que significa o recibo de conclusão de trâmite?',
          options: [
            'O recibo de envio indica que o destinatário assumiu o processo; o de conclusão indica que o SEI arquivou o processo.',
            'O recibo de envio indica que o Tramita.GOV.BR recebeu de forma íntegra os documentos e processos; o recibo de trâmite indica que o sistema conseguiu entregá-los com sucesso ao destinatário.',
            'Ambos os recibos têm a mesma função, diferindo apenas no formato de envio.',
            'O recibo de conclusão é emitido pelo Portal de Administração, sem participação do Tramita.GOV.BR.',
          ],
          correctIndex: 1,
          explanation:
            'O recibo de envio confirma o recebimento íntegro pelo Tramita.GOV.BR; o recibo de trâmite confirma a entrega com sucesso dos documentos e processos ao destinatário. Ambos ficam disponíveis na consulta de recibos da barra de controle de processos.',
        },
        {
          id: 'm8-tramita-integracao-q4',
          prompt: 'Enquanto a unidade receptora não confirma o recebimento, como o processo aparece no SEI?',
          options: [
            'Aberto e editável, com a indicativa de "aguardando resposta".',
            'Em envio externo, aguardando o recebimento, bloqueado para edição, com alerta de círculo vermelho ao lado do número na tela Controle de Processos.',
            'Concluído automaticamente na unidade de origem.',
            'Invisível na Controle de Processos até o recebimento.',
          ],
          correctIndex: 1,
          explanation:
            'Até a confirmação de recebimento pelo Tramita.GOV.BR, o processo fica bloqueado para edição, com alerta visual na tela Controle de Processos; as únicas opções são de visualização.',
        },
        {
          id: 'm8-tramita-integracao-q5',
          prompt: 'Para evitar que um trâmite externo seja cancelado por falta de mapeamento, o que deve ser configurado?',
          options: [
            'A Hipótese de Restrição Padrão, aplicável automaticamente quando a hipótese legal não estiver mapeada.',
            'Um novo NRE para cada hipótese legal utilizada.',
            'O cadastro da unidade no repositório de estruturas do SIORG.',
            'A instalação do Gearman em todos os nós do SEI.',
          ],
          correctIndex: 0,
          explanation:
            'A Hipótese de Restrição Padrão define o comportamento do sistema ao enviar ou receber processos com restrição de acesso cuja hipótese legal não foi mapeada: ela é aplicada automaticamente, evitando o cancelamento do trâmite.',
        },
      ],
    },
    {
      id: 'm8-nipe',
      slug: 'm8-nipe',
      title: 'NIPE — Número de Identificação de Protocolo Eletrônico',
      estimatedMinutes: 30,
      objectives: [
        'Explicar o que é o NIPE e sua relação com o NUP e o Programa Nacional de Processo Eletrônico (ProPEN).',
        'Interpretar a estrutura de 20 dígitos e a semântica de cada tag da máscara de numeração.',
        'Configurar a máscara de numeração do NIPE no SEI em Administração > Órgãos.',
        'Gerir as Unidades Protocolizadoras, definindo códigos compartilhados ou sequenciais independentes.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O Número de Identificação de Protocolo Eletrônico (NIPE) é um identificador único, padronizado e interoperável, criado para permitir a identificação e o rastreamento de documentos e processos eletrônicos em instituições públicas de diferentes poderes e esferas de governo. Sua concepção foi inspirada no modelo do Número Único de Protocolo (NUP), tradicionalmente utilizado pela Administração Pública Federal para identificar documentos avulsos e processos desde sua autuação ou recebimento.',
        },
        {
          kind: 'bullets',
          heading: 'Por que o NIPE foi criado',
          items: [
            'Com a expansão das soluções do PEN para estados, municípios e demais entes participantes do Programa Nacional de Processo Eletrônico (ProPEN), tornou-se necessária uma estrutura de numeração capaz de atender a um ambiente federativo mais amplo.',
            'O NIPE preserva a unicidade, a padronização e a interoperabilidade das informações nesse ambiente federativo.',
            'A padronização favorece a integração dos sistemas, simplificando o intercâmbio de informações e fortalecendo a comunicação institucional entre os diversos entes públicos.',
            'O identificador assegura a identificação inequívoca de documentos e processos e contribui para a rastreabilidade das movimentações, a transparência administrativa, a governança da informação e a continuidade dos fluxos processuais.',
          ],
        },
        {
          kind: 'table',
          heading: 'Estrutura do número — padrão de 20 dígitos',
          columns: ['Grupo da máscara', 'Semântica'],
          rows: [
            ['17.', 'Prefixo fixo inserido manualmente — representa o Identificador de Origem (no exemplo, o Estado do Tocantins).'],
            ['@cod_orgao_sei_03d@', 'Mapeia o campo "Código" do Órgão no SEI (ex.: 137, referente a Palmas).'],
            ['@cod_unidade_sei_03d@', 'Mapeia o código da Unidade Protocolizadora cadastrada na unidade administrativa.'],
            ['.', 'Separador após o bloco de seis dígitos.'],
            ['@seq_anual_cod_unidade_sei_06d@', 'Garante que a sequência de 6 dígitos seja única por Unidade Protocolizadora e seja reiniciada anualmente.'],
            ['@ano_4d@', 'Ano com quatro dígitos.'],
            ['-', 'Separador antes do dígito verificador.'],
            ['@dv_mod11_executivo_federal_2d@', 'Aplica o algoritmo de cálculo do DV (Mod11) padrão NUP/NIPE, o mesmo utilizado pelo Governo Federal.'],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Máscara de numeração usada no exemplo do manual',
          text: '17.@cod_orgao_sei_03d@@cod_unidade_sei_03d@.@seq_anual_cod_unidade_sei_06d@/@ano_4d@-@dv_mod11_executivo_federal_2d@',
        },
        {
          kind: 'steps',
          heading: 'Configuração do NIPE no SEI (exemplo da Prefeitura de Palmas/TO)',
          items: [
            'Acesse Administração > Órgãos e localize o órgão de Palmas.',
            'Preencha o campo Código com 137.',
            'No campo Máscara de Numeração do Órgão, cole a máscara do padrão 20 dígitos.',
            'No cadastro da Unidade (ex.: Protocolo Geral), informe "Código da Unidade de Protocolo" como 001.',
            'Gere o primeiro processo: o resultado esperado é 17.137001.000001/2026-21.',
          ],
        },
        {
          kind: 'bullets',
          heading: 'Gestão de unidades e sequenciais',
          items: [
            'Múltiplas unidades na mesma UP — se diversas unidades vinculadas às secretarias de Palmas (Finanças, Saúde, Educação) devem compartilhar a mesma numeração, preencha "Código da Unidade de Protocolo" com o mesmo valor (ex.: 001) no cadastro de cada unidade; o sistema manterá um sequencial único para todas.',
            'Sequenciais separados por órgão/secretaria — se cada secretaria deve ter sequência independente, atribua códigos de UP diferentes: Secretaria de Finanças UP 001 (17.137001.XXXXXX/...), Secretaria de Saúde UP 002 (17.137002.XXXXXX/...) e Secretaria de Educação UP 003 (17.137003.XXXXXX/...).',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Identificador de Origem é fixo',
          text: 'No caso do Tocantins, o número 17 é fixo para todo o estado. Municípios e unidades que pertencem ao governo estadual do Tocantins devem sempre iniciar com 17, alterando apenas o código da instituição vinculada (os três dígitos seguintes).',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Antes de parametrizar a máscara, defina a política de Unidades Protocolizadoras do órgão (compartilhada ou separada por secretaria). O código da unidade de protocolo é o que determina o agrupamento do sequencial anual, e a alteração posterior impacta a leitura dos números já gerados.',
        },
        {
          kind: 'callout',
          tone: 'legal',
          title: 'Compatibilidade com o padrão NUP',
          text: 'A validação do dígito verificador utiliza o algoritmo @dv_mod11_executivo_federal_2d@, o mesmo utilizado pelo Governo Federal, garantindo plena compatibilidade com o SEI.',
        },
      ],
      keyPoints: [
        'O NIPE é um identificador único, padronizado e interoperável para documentos e processos em ambiente federativo.',
        'Ele evolui o conceito do NUP para atender estados e municípios do ProPEN.',
        'A estrutura padrão tem 20 dígitos, divididos em cinco grupos.',
        'A máscara de numeração deve ser inserida no campo do Órgão em SEI > Administração > Órgãos.',
        'O identificador de origem (17 no caso do Tocantins) é fixo; alteram-se apenas os códigos do órgão e da unidade.',
        'Unidades com o mesmo Código da Unidade de Protocolo compartilham o mesmo sequencial anual.',
      ],
      quiz: [
        {
          id: 'm8-nipe-q1',
          prompt: 'O que é o NIPE e qual é sua relação com o NUP?',
          options: [
            'É um identificador substituto do NUP, creado exclusivamente para o Poder Executivo Federal.',
            'É um identificador único, padronizado e interoperável, inspirado no NUP e criado para permitir a identificação e o rastreamento de documentos e processos em um ambiente federativo mais amplo.',
            'É o código interno do processo no banco de dados do SEI.',
            'É o identificador do usuário externo cadastrado no SEI.',
          ],
          correctIndex: 1,
          explanation:
            'O NIPE é um identificador único, padronizado e interoperável, inspirado no NUP, desenvolvido para atender um ambiente federativo mais amplo (estados, municípios e entes do ProPEN).',
        },
        {
          id: 'm8-nipe-q2',
          prompt: 'Qual é a finalidade da tag @seq_anual_cod_unidade_sei_06d@?',
          options: [
            'Gerar um sequencial de 6 dígitos único por Unidade Protocolizadora, reiniciado anualmente.',
            'Registrar o ano de emissão do documento.',
            'Calcular o dígito verificador do número.',
            'Identificar o código do órgão no SEI.',
          ],
          correctIndex: 0,
          explanation:
            'A tag @seq_anual_cod_unidade_sei_06d@ garante que a sequência de 6 dígitos seja única por Unidade Protocolizadora e reiniciada anualmente; o ano é gerado pela tag @ano_4d@ e o DV pela tag Mod11.',
        },
        {
          id: 'm8-nipe-q3',
          prompt: 'Onde a máscara de numeração do NIPE deve ser inserida no SEI?',
          options: [
            'Em Administração > Órgãos, no campo Máscara de Numeração do Órgão.',
            'Em Administração > Unidades, no campo Sigla da Unidade.',
            'No Menu Principal > Configurações do sistema.',
            'Em Tramita.GOV.BR > Protocolo > Hierarquia.',
          ],
          correctIndex: 0,
          explanation:
            'A configuração da numeração deve ser realizada por um administrador do sistema no menu Administração > Órgãos, inserindo a máscara de numeração no campo correspondente do Órgão.',
        },
        {
          id: 'm8-nipe-q4',
          prompt: 'No exemplo do manual, qual seria o resultado do primeiro processo gerado com a máscara configurada para a Prefeitura de Palmas?',
          options: [
            '17.137001.000001/2025-13',
            '17.137001.000001/2026-21',
            '17.001137.000001/2026-21',
            '00.137001.000001/2026-21',
          ],
          correctIndex: 1,
          explanation:
            'Com prefixo 17, código do órgão 137 e Código da Unidade de Protocolo 001, o primeiro processo gerado resulta em 17.137001.000001/2026-21.',
        },
        {
          id: 'm8-nipe-q5',
          prompt: 'Como duas secretarias podem compartilhar o mesmo sequencial de NIPE?',
          options: [
            'Cadastrando o mesmo "Código da Unidade de Protocolo" (ex.: 001) nas duas unidades administrativas.',
            'Deixando o campo Código da Unidade de Protocolo em branco em uma das unidades.',
            'Alterando o Identificador de Origem para cada secretaria.',
            'Usando o mesmo número do processo como prefixo da máscara.',
          ],
          correctIndex: 0,
          explanation:
            'Para compartilhar o mesmo sequencial, o campo "Código da Unidade de Protocolo" deve ser preenchido com o mesmo valor em todas as unidades envolvidas; assim o sistema mantém um sequencial único.',
        },
      ],
    },
    {
      id: 'm8-operacao-sei',
      slug: 'm8-operacao-sei',
      title: 'Operação do usuário no SEI 4.0+',
      estimatedMinutes: 40,
      objectives: [
        'Navegar pelo Menu Principal, pela Barra de Ferramentas e pelos atalhos de acessibilidade do SEI 4.0+.',
        'Iniciar, receber, atribuir, enviar, concluir e reabrir processos na tela Controle de Processos.',
        'Incluir, editar, assinar, versionar e excluir documentos, compreendendo a Árvore do Processo.',
        'Aplicar níveis de acesso público, restrito e sigiloso e realizar pesquisas rápidas e estruturadas.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Ao acessar o sistema, o usuário é direcionado para a tela Controle de Processos, que apresenta os processos abertos na unidade em dois grupos: à esquerda, os processos recebidos; à direita, os gerados. A tela disponibiliza filtros de visualização e permite operações em lote por meio das caixas de seleção ao lado do número de cada processo.',
        },
        {
          kind: 'bullets',
          heading: 'Barra de Ferramentas — funções essenciais',
          items: [
            'Exibir/ocultar menu principal; Pesquisa (busca rápida) e caixa de seleção de unidade, que permite navegar pelas unidades em que o usuário tem permissão.',
            'Controle de Processos — retorna à tela principal do sistema.',
            'Painel de Controle — visão resumida e personalizada dos processos da unidade (disponível a partir da versão 4.1).',
            'Acessibilidade — combinações de teclas de atalho incorporadas a partir da versão 4.1 (ALT+F1 tela inicial, ALT+F2 Controle de Processos, ALT+F3 Painel de Controle, ALT+F10 Pesquisa Rápida, CTRL+SHIFT+A assinar documento, entre outras).',
            'Novidades — avisos da administração do sistema; Usuário — identifica quem está acessando; Configurações do sistema — a partir da versão 5.0 permite escolher a página inicial (Controle de Processos, Painel de Controle ou Blocos de Assinatura) e filtrar botões acessados recentemente; Sair do sistema.',
          ],
        },
        {
          kind: 'table',
          heading: 'Barra de Ícones — operações com processos',
          columns: ['Ícone', 'Função'],
          rows: [
            ['Enviar processo', 'Tramita para outra unidade; conclui na unidade remetente, salvo marcação de "Manter o processo aberto na unidade atual".'],
            ['Atualizar andamento', 'Inclui informação ou despacho no processo.'],
            ['Atribuição de processos', 'Distribui processos entre usuários da unidade; a atribuição não fica disponível para outras unidades.'],
            ['Incluir em bloco', 'Organiza processos em Bloco Interno ou Bloco de Reunião.'],
            ['Sobrestar processo', 'Suspende temporariamente o processo na unidade.'],
            ['Concluir processo nesta unidade', 'Finaliza o processo na unidade atual; pode ser recuperado por Pesquisa ou Acompanhamento Especial.'],
            ['Anotações', 'Informações internas que não constam dos autos e não são tramitadas com o processo.'],
            ['Acompanhamento especial', 'Acompanha o processo mesmo tramitando em outra unidade.'],
            ['Incluir documento', 'Inclui novo documento no processo selecionado.'],
            ['Gerenciar marcador', 'Cria e gerencia marcadores internos da unidade.'],
            ['Controle de Prazos', 'Administra prazos dentro da unidade, sem acesso de outras unidades.'],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Fluxo do processo na unidade',
          items: [
            'Início — em "Iniciar Processo", escolhe-se o tipo (a classificação por assuntos é preenchida automaticamente e não deve ser alterada sem orientação da gestão documental); o protocolo pode ser automático ou informado.',
            'Prioridade — a partir da versão 4.1, é possível priorizar o processo (PcD; idoso entre 60 e 80 anos; idoso com mais de 80 anos; pessoa com doença grave; ECA; licença ambiental).',
            'Recebimento — o processo aparece em vermelho na coluna Recebidos; clicar no número registra no andamento a hora, a unidade e o usuário que efetuou o recebimento. Em azul significa que o processo já foi acessado na sessão atual.',
            'Envio — pode ser feito para uma ou várias unidades; há opções de manter o processo aberto, remover anotação, enviar e-mail de notificação, definir Retorno Programado (data certa ou prazo em dias) e Reabertura Programada de Processo (versão 4.1).',
            'Conclusão e reabertura — concluído, o processo sai da tela Controle de Processos; reabrir é possível em qualquer unidade onde tramitou, e o processo reaberto é atribuído automaticamente a quem o reabriu.',
            'Relações entre processos — relacionar, duplicar, anexar e iniciar processo relacionado; processos relacionados não tramitam juntos e não há hierarquia entre eles.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'A Árvore do Processo organiza os documentos: após a inclusão, o documento é inserido automaticamente na árvore e fica disponível para edição e assinatura. Ao lado do nome ou número de protocolo aparece a sigla da unidade que o gerou. A tela do processo permite consultar o Histórico Resumido (Consultar Andamento) e os filtros "Ver histórico completo" e "Ver histórico total"; o registro inserido por Atualizar Andamento não pode ser editado nem excluído.',
        },
        {
          kind: 'bullets',
          heading: 'Operações básicas com documentos',
          items: [
            'Inclusão — escolha do Tipo do Documento e preenchimento de Descrição, Interessados, Classificação por Assuntos, Observações desta unidade e Nível de Acesso; o campo Texto Inicial permite usar Documento Modelo ou Texto Padrão.',
            'Documento externo — sempre aparece no topo da lista; exige Tipo, Data do Documento, Número, Nome na Árvore, Formato (nato-digital ou digitalizado nesta unidade), tipo de conferência, Remetente, Interessados, classificação, observações e anexo de arquivo (upload de até 200mb).',
            'Edição — é possível editar documento já assinado enquanto a caneta ao lado do número estiver na cor amarela (assinado e não tramitado/visualizado por outra unidade); após a edição é necessário assinar novamente.',
            'Versões — cada salvamento gera nova versão; é possível visualizar e recuperar versões anteriores.',
            'Referências — documentos e processos podem ser referenciados copiando o link na Árvore (como Texto, como Link para o Editor ou como Link para acesso direto) ou pelo ícone "Inserir um Link para processo ou documento do SEI".',
            'Exclusão — só é possível excluir processo aberto apenas na unidade geradora e sem documentos; nos casos com documentos, exclua-se antes os documentos.',
          ],
        },
        {
          kind: 'bullets',
          heading: 'Níveis de acesso e restrição',
          items: [
            'Público — processos e documentos assinados disponíveis a todos os usuários do órgão.',
            'Restrito — disponíveis apenas aos usuários das unidades pelas quais o processo tramitou; exige a indicação de hipótese legal de restrição, obrigatória e conforme a legislação em vigor.',
            'Sigiloso — disponíveis apenas a usuários com permissão específica e previamente credenciados; o administrador precisa indicar previamente que aquele tipo de processo/documento pode ser marcado como sigiloso.',
            'Marcar "Restrito" ou "Sigiloso" em um documento faz o processo inteiro receber a mesma classificação.',
            'Processos restritos podem ser localizados por Pesquisa Rápida em unidades onde não tramitaram, mas nessas unidades não há acesso ao conteúdo — apenas Árvore do Processo e Consultar Andamento.',
            'Processos sigilosos não tramitam unidade a unidade: o acesso é concedido por Credencial de Acesso ou Credencial de Assinatura, e toda vez que o processo é acessado é solicitada a Identificação de Acesso com senha.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Sigilo e credenciais — armadilhas comuns',
          text: 'Não é possível renovar uma Credencial de Acesso que foi cassada — é preciso conceder nova credencial. Não é possível cassar credencial de acesso concedida ao mesmo usuário em outra unidade: nesse caso, o usuário deve renunciar à credencial naquela unidade. Usuários sem credencial de acesso não visualizam o processo sigiloso na tela Controle de Processos.',
        },
        {
          kind: 'bullets',
          heading: 'Pesquisa',
          items: [
            'Pesquisa Rápida — indicada para informações simples e certas: protocolos, números de processos e palavras, no campo "Pesquisar..." da Barra de Ferramentas.',
            'Pesquisa Estruturada — no menu Pesquisa, com seção (processos ou documentos), Tramitação na Unidade, Texto para pesquisa, Órgão Gerador, Unidade Geradora, Assunto, Assinatura/Autenticação, Contato, Especificação/Descrição, Observações, Nº SEI, Tipo do Processo e do Documento, Número, Nome na Árvore, Usuário Gerador e intervalo de datas.',
            'A pesquisa busca nos dados cadastrais, no conteúdo de documentos criados no Editor de Textos, em documentos externos digitalizados com OCR e em documentos externos em formato texto.',
            'Resultado — o sistema abre automaticamente o processo ou documento se houver um único resultado; com vários, apresenta lista com atalho para abrir o processo, o documento e o "Ver Critérios do Filtro".',
            'Pesquisas salvas — o botão Salvar Pesquisa guarda os critérios aplicados, útil para padronizar buscas recorrentes da unidade.',
          ],
        },
        {
          kind: 'callout',
          tone: 'legal',
          title: 'Sigilo e Lei de Acesso à Informação',
          text: 'Conforme orientações do Gabinete de Segurança Institucional da Presidência da República, não é permitido tramitar documentos classificados — Reservados, Secretos ou Ultrasecretos — nos termos do art. 23 da Lei nº 12.527, de 10 de agosto de 2011 (Lei de Acesso à Informação), pelo SEI.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática de preenchimento',
          text: 'Adote padrões de preenchimento para os campos Especificação, Interessados e Observações desta unidade: são eles que auxiliam a identificação e a recuperação dos processos. Registre em Atualizar Andamento apenas informações meramente descritivas ou explicativas; informações essenciais à instrução processual devem ser inseridas como novo documento.',
        },
      ],
      keyPoints: [
        'A tela Controle de Processos separa recebidos (esquerda) e gerados (direita) e permite operações em lote.',
        'Processo em vermelho significa que ainda não foi recebido; em azul, que já foi acessado na sessão atual.',
        'Enviar processo conclui o processo na unidade, salvo marcação de "Manter o processo aberto na unidade atual".',
        'Cada salvamento de documento gera uma versão, que pode ser visualizada e recuperada.',
        'Níveis de acesso: público, restrito (com hipótese legal obrigatória) e sigiloso (com credencial de acesso).',
        'A Pesquisa Estruturada busca em dados cadastrais, no conteúdo do Editor de Textos e em documentos externos com OCR.',
      ],
      quiz: [
        {
          id: 'm8-operacao-sei-q1',
          prompt: 'Na tela Controle de Processos, o que significa um processo exibido na cor vermelha?',
          options: [
            'O processo está sobrestado na unidade.',
            'O processo ainda não foi recebido na unidade; aparece exclusivamente na coluna Recebidos.',
            'O processo foi concluído pela unidade de origem.',
            'O processo possui documento sem assinatura.',
          ],
          correctIndex: 1,
          explanation:
            'O processo em vermelho indica que ainda não foi recebido na unidade e aparece apenas na coluna Recebidos; ao clicar no número, o SEI registra no andamento a hora, a unidade e o usuário que efetuaram o recebimento.',
        },
        {
          id: 'm8-operacao-sei-q2',
          prompt: 'Qual o efeito de enviar um processo para outra unidade sem marcar "Manter processo aberto na unidade atual"?',
          options: [
            'O processo é concluído automaticamente na unidade remetente.',
            'O processo continua aberto, mas fica em vermelho na coluna Recebidos.',
            'O processo é sobrescrito pela versão da unidade destinatária.',
            'O processo é movimentado para a pasta de processos sobrestados.',
          ],
          correctIndex: 0,
          explanation:
            'Ao enviar, a conclusão na unidade é realizada automaticamente pelo sistema, desde que a opção "Manter processo aberto na unidade atual" não seja marcada.',
        },
        {
          id: 'm8-operacao-sei-q3',
          prompt: 'Qual o procedimento correto para editar um documento que já foi assinado?',
          options: [
            'Não é possível editar documentos assinados eletronicamente.',
            'É possível editar enquanto a caneta ao lado do número estiver na cor amarela; após a edição é necessário assinar novamente.',
            'É preciso solicitar credencial de assinatura ao administrador do órgão.',
            'A edição só é possível na versão 3.1 do SEI.',
          ],
          correctIndex: 1,
          explanation:
            'O documento assinado pode ser editado enquanto a caneta ao lado do número estiver na cor amarela (assinado, mas não tramitado e/ou visualizado por outra unidade); após a edição é necessário assinar novamente.',
        },
        {
          id: 'm8-operacao-sei-q4',
          prompt: 'Ao marcar um documento como "Restrito", qual é a consequência?',
          options: [
            'Apenas o documento fica restrito; o processo permanece público.',
            'Todo o processo recebe a mesma classificação e passa a exigir a indicação de hipótese legal de restrição.',
            'O processo passa a ser considerado sigiloso automaticamente.',
            'O processo deixa de aparecer na tela Controle de Processos da unidade.',
          ],
          correctIndex: 1,
          explanation:
            'Ao marcar "Restrito" ou "Sigiloso" no campo Nível de Acesso do documento, todo o processo recebe a mesma classificação; no caso do restrito, a hipótese legal de restrição é obrigatória e deve seguir a legislação em vigor.',
        },
        {
          id: 'm8-operacao-sei-q5',
          prompt: 'O que acontece se um usuário tentar renovar uma Credencial de Acesso que foi cassada em processo sigiloso?',
          options: [
            'O sistema renova automaticamente, registrando a data e hora da renovação.',
            'Não é possível renovar uma credencial que foi cassada; é necessário conceder uma nova Credencial de Acesso ao usuário.',
            'A renovação só é possível se o processo estiver concluído.',
            'O usuário deve retornar ao Administrador do Sistema para reabrir o processo.',
          ],
          correctIndex: 1,
          explanation:
            'Não é possível renovar uma Credencial de Acesso que foi cassada; nesse caso, é necessário conceder uma nova credencial ao usuário. Quando se utiliza a renovação em processo sigiloso concluído, o processo é automaticamente reaberto.',
        },
        {
          id: 'm8-operacao-sei-q6',
          prompt: 'Quais fontes a Pesquisa do SEI considera ao apresentar os resultados?',
          options: [
            'Apenas nos dados cadastrais de processos e documentos.',
            'Nos dados cadastrais, no conteúdo de documentos criados no Editor de Textos, em documentos externos digitalizados com OCR e em documentos externos em formato texto.',
            'Exclusivamente no nome na árvore e nas observações da unidade.',
            'Apenas em processos públicos e restritos da unidade atual.',
          ],
          correctIndex: 1,
          explanation:
            'A pesquisa busca informações nos dados cadastrais de processos e documentos, no conteúdo de documentos criados pelo Editor de Textos, em documentos externos digitalizados com uso de Reconhecimento Óptico de Caracteres (OCR) e em documentos externos em formato texto.',
        },
      ],
    },
  ],
};
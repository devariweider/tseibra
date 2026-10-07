import type { CourseModule } from './types.js';

export const modulo3: CourseModule = {
  id: 'mod-3',
  slug: 'controle-de-acesso',
  title: 'Módulo 3 — Controle de Acesso',
  subtitle:
    'SIP, cadastro de usuários, perfis, permissões, contatos e usuários externos no SEI',
  description:
    'Controle de acesso no SEI começa fora do SEI: o cadastro, as unidades e a atribuição de perfis são feitos no SIP, sistema integrado ao SEI. Este módulo percorre a cadeia completa de controle de acesso — da habilitação do administrador no SIP até o cadastro, a efetivação de permissões, a alteração de unidades liberadas e a desativação de usuários — e apresenta a gestão de perfis e recursos (perfis padrão do SEI, clonagem, montagem e edição de recursos), a gestão de contatos e, por fim, a gestão de usuários externos, com liberação de acesso, bloqueio e alteração cadastral.',
  sourceRef:
    'Módulo 3 - Controle de Acesso.pdf (Enap, curso SEI! Administrar, 2019)',
  estimatedMinutes: 250,
  objectives: [
    'Explicar como o SIP se relaciona com a funcionalidade Gestão de Usuário e de Permissões do SEI.',
    'Cadastrar usuários no SIP e efetivar o acesso no SEI por meio da atribuição de perfil e unidade.',
    'Alterar unidades liberadas, excluir permissões e desativar cadastros de servidores em saída do órgão.',
    'Diferenciar os perfis configurados no SEI dos perfis criados pelo próprio órgão.',
    'Clonar, descrever e montar perfis, além de gerenciar os recursos disponíveis.',
    'Cadastrar contatos, tipos de contato e grupos de contatos da unidade ou institucionais.',
    'Liberar, bloquear e alterar cadastros de usuários externos, avaliando as restrições de exclusão.',
  ],
  lessons: [
    {
      id: 'm3-sip-e-gestao-de-usuarios',
      slug: 'm3-sip-e-gestao-de-usuarios',
      title: 'SIP e Gestão de Usuários e Permissões',
      estimatedMinutes: 30,
      objectives: [
        'Explicar a relação entre a funcionalidade Gestão de Usuário e de Permissões do SEI e o SIP.',
        'Identificar os três perfis que habilitam o usuário a acessar o SIP como administrador.',
        'Descrever as responsabilidades do administrador do SIP sobre usuários, unidades e permissões.',
        'Reconhecer o perfil Básico como o perfil usual da maioria dos usuários do SEI.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'O SEI possui a funcionalidade Gestão de Usuário e de Permissões, que concede ao usuário com perfil Administrador gerir os usuários e autorizar acessos. Contudo, cabe ressaltar que essa funcionalidade é feita por meio do Sistema de Permissões (SIP).',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Destaque',
          text: 'O SIP é um sistema integrado ao SEI que permite cadastrar e desativar usuários, criar e estruturar unidades e atribuir perfis aos usuários. Dessa forma, usuários com o perfil de administrador do SEI somente conseguirão gerenciar os usuários e as permissões se tiverem também o perfil de administrador no SIP.',
        },
        {
          kind: 'definitions',
          heading: 'Conceitos iniciais',
          items: [
            {
              term: 'SIP',
              text: 'Sistema de Permissões integrado ao SEI, responsável pelo cadastro e desativação de usuários, pela criação e estruturação de unidades e pela atribuição de perfis.',
            },
            {
              term: 'Gestão de Usuário e de Permissões',
              text: 'Funcionalidade do SEI que permite ao perfil Administrador gerir usuários e autorizar acessos, executada por meio do SIP.',
            },
            {
              term: 'Administrador do SEI',
              text: 'Usuário responsável por atribuir perfis aos demais usuários do SEI e por configurar itens de gestão.',
            },
            {
              term: 'Administrador do SIP',
              text: 'Usuário habilitado com os perfis de administração do SIP; é ele quem cadastra, edita, desativa e exclui usuários, cadastra e desativa unidades, monta hierarquias e cria e atribui permissões.',
            },
          ],
        },
        {
          kind: 'paragraph',
          text: 'Para acessar o SIP como administrador, o usuário deve habilitar os seguintes perfis: Básico, Administrador de Hierarquia e Cadastro de Usuários e Unidades. O usuário deve realizar o login no sistema e acompanhar o caminho descrito para a atribuição de perfis.',
        },
        {
          kind: 'steps',
          heading: 'Atribuição de perfis para acessar o SIP como administrador',
          items: [
            'Realizar o login no sistema.',
            'Selecionar SIP no campo Sistema.',
            'Para atribuir a permissão a todas as unidades, selecionar a opção * no campo Unidade.',
            'Repetir o passo a passo para se definir cada perfil escolhido: Básico, Administrador de Hierarquia e Cadastro de Usuários e Unidades.',
            'Salvar a operação realizada.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Atenção',
          text: 'Essa operação deve ser realizada APENAS por administradores do SIP.',
        },
        {
          kind: 'table',
          heading: 'Perfis que habilitam o acesso ao SIP como administrador',
          columns: ['Perfil no SIP', 'Por que é necessário habilitar'],
          rows: [
            [
              'Básico',
              'Concede as operações essenciais: iniciar processos, inserir e editar documentos e assiná-los.',
            ],
            [
              'Administrador de Hierarquia',
              'Habilita a montagem de hierarquias das unidades do órgão.',
            ],
            [
              'Cadastro de Usuários e Unidades',
              'Habilita o cadastro, a edição, a desativação e a exclusão de usuários e o cadastro e a desativação de unidades.',
            ],
            [
              'Conjunto dos três perfis',
              'É o que permite ao servidor com o perfil de Administrador do SIP: cadastrar, editar, desativar e excluir usuários, cadastrar e desativar unidades, montar hierarquias das unidades e criar e atribuir permissões.',
            ],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Responsabilidades do administrador do SIP',
          items: [
            'Cadastrar, editar, desativar e excluir usuários.',
            'Cadastrar e desativar unidades.',
            'Montar hierarquias das unidades.',
            'Criar e atribuir permissões.',
            'Executar as demais funcionalidades previstas para o perfil de administrador.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Leia com atenção',
          text: 'O material não detalha cada um dos três perfis isoladamente: eles são habilitados em conjunto para que o usuário atue como administrador do SIP. Na prática, o escopo do administrador do SIP abrange cadastro, edição, desativação e exclusão de usuários, cadastro e desativação de unidades, montagem de hierarquias e criação e atribuição de permissões.',
        },
        {
          kind: 'paragraph',
          text: 'Em regra, os usuários do SEI devem ser cadastrados com o perfil Básico, o que lhes permite realizar operações essenciais, tais como: iniciar processos, inserir e editar documentos e assiná-los.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Organização do trabalho do administrador',
          text: 'Ao administrador deve-se disponibilizar a relação atualizada de usuários com as unidades que terão acesso. A partir de então, é necessário cadastrar os usuários com as respectivas unidades e perfis. Depois do cadastro inicial, verifique com a unidade de gestão de pessoas da instituição como será o processo de cadastramento de novos colaboradores e de desativação de ex-colaboradores.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática de segurança: menor privilégio',
          text: 'O SIP é o ponto de entrada de todas as permissões do SEI. Conceda apenas os perfis necessários à função exercida: quanto menos perfis e menos unidades liberadas, menor a superfície de erro e menor o impacto de eventual uso indevido. Nada de usar o asterisco (*) em Unidade como padrão para todos os servidores.',
        },
      ],
      keyPoints: [
        'Quem administra usuários e permissões no SEI é o perfil Administrador, por meio do SIP.',
        'Para acessar o SIP como administrador são necessários os perfis Básico, Administrador de Hierarquia e Cadastro de Usuários e Unidades.',
        'No campo Sistema, selecione SIP para atribuir perfis de administração.',
        'A opção * no campo Unidade atribui a permissão a todas as unidades.',
        'O passo a passo de atribuição deve ser repetido para cada perfil escolhido.',
        'Em regra, os usuários são cadastrados com o perfil Básico.',
      ],
      quiz: [
        {
          id: 'm3-sip-e-gestao-de-usuarios-q1',
          prompt:
            'Por meio de qual sistema é executada a funcionalidade Gestão de Usuário e de Permissões do SEI?',
          options: [
            'Por meio do SIP (Sistema de Permissões).',
            'Por meio do módulo de pesquisa processual do SEI.',
            'Por meio do cadastro de contatos da unidade.',
            'Por meio do módulo de assinatura eletrônica externa.',
          ],
          correctIndex: 0,
          explanation:
            'O material é explícito: embora a funcionalidade pertença ao SEI, ela é feita por meio do SIP, sistema integrado ao SEI que cadastra e desativa usuários, cria e estrutura unidades e atribui perfis.',
        },
        {
          id: 'm3-sip-e-gestao-de-usuarios-q2',
          prompt:
            'Quais perfis devem ser habilitados para que o usuário acesse o SIP como administrador?',
          options: [
            'Administrador, Arquivamento e Inspeção.',
            'Básico, Administrador de Hierarquia e Cadastro de Usuários e Unidades.',
            'Básico, Ouvidoria e Informática.',
            'Cadastro de Usuários e Unidades, Informática e Arquivamento.',
          ],
          correctIndex: 1,
          explanation:
            'Esses três perfis — Básico, Administrador de Hierarquia e Cadastro de Usuários e Unidades — são os habilitados para acessar o SIP como administrador, sempre selecionando SIP no campo Sistema.',
        },
        {
          id: 'm3-sip-e-gestao-de-usuarios-q3',
          prompt:
            'No SIP, para que a permissão seja atribuída a todas as unidades, o que deve ser selecionado no campo Unidade?',
          options: ['A opção *.', 'A opção SIP.', 'A opção Básico.', 'A opção Administrador.'],
          correctIndex: 0,
          explanation:
            'A dica do material é clara: para atribuir uma permissão a todas as unidades, deve-se selecionar a opção * no campo Unidade. Por isso a concessão indiscriminada dessa opção deve ser uma decisão consciente.',
        },
        {
          id: 'm3-sip-e-gestao-de-usuarios-q4',
          prompt:
            'Quem pode realizar a atribuição dos perfis de administração do SIP?',
          options: [
            'Qualquer usuário cadastrado com perfil Básico.',
            'Somente o administrador do SIP.',
            'Todos os usuários com perfil Administrador do SEI.',
            'O administrador da unidade de gestão de pessoas.',
          ],
          correctIndex: 1,
          explanation:
            'O material traz o alerta: essa operação deve ser realizada APENAS por administradores do SIP. O perfil Administrador do SEI, sozinho, não basta.',
        },
        {
          id: 'm3-sip-e-gestao-de-usuarios-q5',
          prompt:
            'Qual das afirmações representa uma boa decisão ética de controle de acesso na condução da atribuição de perfis?',
          options: [
            'Conceder a opção * (todas as unidades) a todos os servidores para evitar trabalho futuro.',
            'Conceder a todos os usuários o perfil Administrador para que ninguém fique impedido de realizar tarefas.',
            'Conceder apenas os perfis e unidades compatíveis com a função exercida, com base na relação atualizada de usuários fornecida ao administrador.',
            'Criar um perfil novo para cada servidor, evitando qualquer perda de funcionalidade.',
          ],
          correctIndex: 2,
          explanation:
            'O princípio do menor privilégio orienta a decisão: parte-se da relação atualizada de usuários e suas unidades, concedendo o mínimo necessário. Conceder acesso amplo a todos cria risco desnecessário, e a criação indiscriminada de perfis aumenta o trabalho de manutenção conforme as evoluções do SEI.',
        },
      ],
    },
    {
      id: 'm3-cadastro-usuario',
      slug: 'm3-cadastro-usuario',
      title: 'Cadastro de Usuário no SIP e Efetivação no SEI',
      estimatedMinutes: 35,
      objectives: [
        'Cadastrar o usuário no SIP selecionando o órgão e preenchendo os campos Sigla e nome completo.',
        'Avaliar a utilization do campo ID Origem conforme a situação do órgão.',
        'Efetivar o cadastro no SEI atribuindo permissão de acesso ao perfil e à unidade no SIP.',
        'Distinguir cadastro no SIP de efetivação de cadastro no SEI.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Para inserir um usuário no SEI, primeiramente é necessário cadastrá-lo no SIP. O cadastro no SIP cria o usuário; a efetivação no SEI é o que lhe dá acesso. Sem essa segunda etapa, o servidor cadastrado ainda não consegue abrir o SEI.',
        },
        {
          kind: 'steps',
          heading: 'Cadastro do usuário no SIP',
          items: [
            'Acessar o SIP.',
            'Selecionar o órgão.',
            'Preencher o campo Sigla com o CPF, as iniciais do nome ou ainda a mesma identificação do usuário no órgão.',
            'Preencher o nome completo do usuário.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos do cadastro de usuário e como preenchê-los',
          columns: ['Campo', 'Como preencher'],
          rows: [
            ['Órgão', 'Selecionar o órgão a que o usuário pertence.'],
            [
              'Sigla',
              'CPF, iniciais do nome ou a mesma identificação do usuário já adotada no órgão.',
            ],
            ['Nome completo', 'Nome completo do usuário.'],
            [
              'ID Origem',
              'Destinado apenas aos órgãos que já possuem algum sistema de gestão de pessoas e têm necessidade de migrar. A maioria dos órgãos não utiliza esse campo.',
            ],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Opções para o preenchimento do campo Sigla',
          items: [
            'CPF do usuário.',
            'Iniciais do nome.',
            'A mesma identificação do usuário já adotada no órgão.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Sobre o campo ID Origem',
          text: 'O campo ID Origem é destinado apenas aos órgãos que já possuem algum sistema de gestão de pessoas e há a necessidade de migrar. Assim, a maioria dos órgãos não utiliza esse campo.',
        },
        {
          kind: 'paragraph',
          text: 'Após o cadastro do usuário no SIP, o administrador deve efetivar o cadastro no SEI. Para isso, é necessário atribuir uma permissão de acesso ao perfil e à unidade no próprio SIP.',
        },
        {
          kind: 'steps',
          heading: 'Efetivação do cadastro no SEI',
          items: [
            'Selecionar SEI no campo Sistema.',
            'Escolher a unidade que o usuário terá acesso.',
            'Digitar o nome do usuário.',
            'Atribuir um perfil.',
            'Salvar a operação realizada.',
            'A partir de então, o usuário poderá acessar o SEI.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Campo ID de origem na efetivação',
          text: 'Ressaltamos que o preenchimento do campo ID de origem é opcional na etapa de efetivação do cadastro.',
        },
        {
          kind: 'table',
          heading: 'Permissão x efetivação de cadastro',
          columns: ['Aspecto', 'Cadastro no SIP', 'Efetivação do cadastro no SEI'],
          rows: [
            [
              'O que é',
              'Criação do usuário no sistema integrado (cadastro de usuário).',
              'Atribuição da permissão de acesso ao perfil e à unidade, feita no próprio SIP.',
            ],
            [
              'Onde ocorre',
              'Na funcionalidade de cadastro de usuário do SIP.',
              'Na funcionalidade Permissões do SIP.',
            ],
            [
              'Campos-chave',
              'Órgão, Sigla e nome completo (ID Origem é restrito a órgãos com sistema de gestão de pessoas).',
              'Sistema = SEI, Unidade, Usuário (nome) e Perfil atribuído.',
            ],
            [
              'O que falta se a etapa for pulada',
              'O usuário não existe no SIP e não pode receber permissões.',
              'O usuário existe, mas não consegue acessar o SEI: falta perfil e/ou unidade.',
            ],
            [
              'Resultado',
              'Usuário cadastrado no SIP.',
              'Usuário cadastrado e com acesso liberado ao SEI.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Armadilha clássica: cadastrado e mesmo assim sem acesso',
          text: 'Usuário cadastrado no SIP e sem perfil ou sem unidade atribuída não acessa o SEI. A efetivação só está concluída quando a permissão é salva: só depois disso o usuário poderá acessar o SEI.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática de segurança',
          text: 'Padronize e documente a convenção do campo Sigla (CPF ou iniciais) para evitar homônimos e contas duplicadas, e conceda somente a unidade em que o servidor exerce função, evitando o uso indiscriminado da opção * que libera todas as unidades.',
        },
      ],
      keyPoints: [
        'Nenhum usuário é inserido no SEI sem antes ser cadastrado no SIP.',
        'No cadastro: selecionar o órgão, preencher Sigla e nome completo.',
        'ID Origem é para órgãos que já possuem sistema de gestão de pessoas; a maioria não o utiliza.',
        'A efetivação exige Sistema = SEI, escolher a unidade, digitar o nome, atribuir um perfil e salvar.',
        'O campo ID de origem é opcional na efetivação.',
        'Cadastrar sem efetivar resulta em usuário sem acesso ao SEI.',
      ],
      quiz: [
        {
          id: 'm3-cadastro-usuario-q1',
          prompt:
            'Com o que pode ser preenchido o campo Sigla no cadastro do usuário no SIP?',
          options: [
            'Exclusivamente com o número do processo administrativo.',
            'Com o CPF, as iniciais do nome ou a mesma identificação do usuário no órgão.',
            'Com o nome da unidade à qual o usuário pertence.',
            'Com o ID de origem do sistema de gestão de pessoas.',
          ],
          correctIndex: 1,
          explanation:
            'O material orienta preencher a Sigla com o CPF, as iniciais do nome ou ainda a mesma identificação do usuário no órgão, adotando ao mesmo tempo a identificação que o próprio órgão já utiliza.',
        },
        {
          id: 'm3-cadastro-usuario-q2',
          prompt:
            'Para que órgãos o campo ID Origem é destinado?',
          options: [
            'A todos os órgãos, como campo obrigatório do cadastro.',
            'Apenas aos órgãos que já possuem algum sistema de gestão de pessoas e têm necessidade de migrar.',
            'Apenas aos órgãos que já possuem a funcionalidade Gestão de Contatos ativa.',
            'Apenas aos usuários externos cadastrados no site do órgão.',
          ],
          correctIndex: 1,
          explanation:
            'O ID Origem é destinado apenas aos órgãos que já possuem algum sistema de gestão de pessoas e têm necessidade de migrar; a maioria dos órgãos não utiliza esse campo.',
        },
        {
          id: 'm3-cadastro-usuario-q3',
          prompt:
            'Qual é a sequência correta de passos para efetivar o cadastro do usuário no SEI?',
          options: [
            'Selecionar SIP no campo Sistema, escolher a unidade, digitar o nome e atribuir o perfil.',
            'Selecionar SEI no campo Sistema, escolher a unidade que o usuário terá acesso, digitar o nome do usuário, atribuir um perfil e salvar.',
            'Selecionar o órgão, preencher a Sigla com o CPF e salvar.',
            'Selecionar SEI no campo Sistema, preencher o nome e escolher a opção * na Unidade.',
          ],
          correctIndex: 1,
          explanation:
            'Na efetivação, é necessário selecionar SEI no campo Sistema, escolher a unidade que o usuário terá acesso, digitar o nome do usuário, atribuir um perfil e salvar a operação. Só após salvar o usuário poderá acessar o SEI.',
        },
        {
          id: 'm3-cadastro-usuario-q4',
          prompt:
            'Um servidor foi cadastrado no SIP, com órgão, Sigla e nome completo preenchidos, mas não recebeu perfil nem unidade. O que acontece?',
          options: [
            'Ele acessa o SEI, pois o cadastro no SIP é suficiente.',
            'Ele acessa somente as consultas públicas do SEI.',
            'Ele não acessa o SEI, porque falta a atribuição da permissão de acesso ao perfil e à unidade.',
            'Ele acessa o SEI apenas para leitura, sem poder assinar documentos.',
          ],
          correctIndex: 2,
          explanation:
            'Cadastro e efetivação são etapas distintas: sem atribuir a permissão de acesso ao perfil e à unidade no SIP e salvar a operação, o usuário cadastrado não consegue acessar o SEI.',
        },
        {
          id: 'm3-cadastro-usuario-q5',
          prompt:
            'Ao revisar um cadastro, um analista quer substituir o uso da opção * (todas as unidades) por permissões específicas por unidade. Qual princípio ele está aplicando?',
          options: [
            'O princípio do menor privilégio, restringindo o acesso ao necessário para a função.',
            'O princípio da conveniência, aimed em reduzir o tempo de atendimento ao usuário.',
            'A regra de que todo servidor deve ter acesso a todas as unidades do órgão.',
            'A orientação do material de que o asterisco substitui a escolha da unidade.',
          ],
          correctIndex: 0,
          explanation:
            'Conceder apenas as unidades realmente necessárias é a aplicação do princípio do menor privilégio. O asterisco é uma opção powerful, não uma recomendação de padrão.',
        },
      ],
    },
    {
      id: 'm3-permissoes-vs-cadastro',
      slug: 'm3-permissoes-vs-cadastro',
      title: 'Permissões, Alteração de Unidades e Desativação de Cadastro',
      estimatedMinutes: 35,
      objectives: [
        'Consultar as unidades e os perfis que um servidor tem acesso por meio da funcionalidade Permissões.',
        'Alterar as unidades liberadas e excluir a permissão de uma unidade específica.',
        'Retirar o acesso de servidores em saída do órgão excluindo todas as permissões administradas.',
        'Decidir entre desativação e exclusão de cadastro preservando a auditoria do sistema.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Outra ação possível dentro da funcionalidade Permissões é a alteração de unidades liberadas para os usuários. Essa funcionalidade permite ao usuário acessar diferentes unidades e é o ponto de partida para qualquer revisão de acessos.',
        },
        {
          kind: 'steps',
          heading: 'Consultar as permissões administradas de um usuário',
          items: [
            'Realizar o login no SIP.',
            'Selecionar a opção Permissões no menu principal.',
            'Clicar em Administradas.',
            'Preencher apenas o campo Usuário para saber as unidades e os perfis que o servidor tem acesso.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Ressalta-se que é possível excluir a permissão de determinada unidade, clicando em Excluir Permissão na coluna Ações. Logo após, abrirá uma janela pop-up com uma mensagem de confirmação.',
        },
        {
          kind: 'steps',
          heading: 'Alteração de unidades liberadas',
          items: [
            'Acessar SIP > Permissões > Administradas.',
            'Preencher apenas o campo Usuário.',
            'Conferir a lista de unidades e perfis apresentados.',
            'Excluir a permissão da unidade que deixa de ser acessível, em Excluir Permissão na coluna Ações.',
            'Confirmar a exclusão na janela pop-up de confirmação.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Vários perfis e várias unidades',
          text: 'É possível atribuir a um usuário vários perfis e unidades. No caso de coordenação de unidades, por exemplo, é recomendável se atribua a permissão para todas as unidades subordinadas.',
        },
        {
          kind: 'steps',
          heading: 'Desativação de servidores em saída do órgão',
          items: [
            'Atenção: para retirar o acesso de servidores que estejam de saída do órgão, realizar o mesmo passo a passo feito para alteração de unidades.',
            'Acessar o SIP, selecionar a opção Permissões no menu principal e clicar em Administradas.',
            'Preencher apenas o campo Usuário; aparecerá a lista de permissões administradas.',
            'Excluir cada permissão disponível, clicando em Excluir Permissão na coluna Ações.',
            'Após a exclusão de todas as permissões, desativar o usuário do sistema.',
          ],
        },
        {
          kind: 'bullets',
          heading: 'Quando utilizar a funcionalidade Permissões',
          items: [
            'Atribuir novos perfis e unidades a um usuário já cadastrado.',
            'Alterar as unidades liberadas, permitindo que o usuário acesse diferentes unidades.',
            'Excluir a permissão de uma unidade específica, em Excluir Permissão na coluna Ações.',
            'Retirar o acesso de servidores em saída do órgão, excluindo todas as permissões administradas.',
          ],
        },
        {
          kind: 'table',
          heading: 'Desativar x excluir o cadastro',
          columns: ['Critério', 'Desativação', 'Exclusão'],
          rows: [
            [
              'Perda de registros',
              'Não perde informações associadas a processos, documentos, protocolos e envios de e-mail.',
              'Acarreta a perda de informações associadas a processos, documentos, protocolos, envios de e-mail, entre outros.',
            ],
            [
              'Quando usar',
              'Sempre que se quiser retirar o acesso sem destruir o histórico — por exemplo, servidores em saída do órgão.',
              'Somente quando o usuário foi cadastrado incorretamente e ainda não realizou nenhum tipo de ação ou tramitação.',
            ],
            [
              'Auditoria',
              'Preserva a auditoria do sistema.',
              'A auditoria do sistema não é prejudicada quando não houve ação ou tramitação alguma.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Atenção: desative, não exclua',
          text: 'Para não se perder os registros na base de dados do sistema, é fundamental que seja realizada a DESATIVAÇÃO e não a EXCLUSÃO do usuário. A exclusão só é indicada caso o usuário tenha sido cadastrado incorretamente no sistema, mas ainda não tenha efetuado nenhum tipo de ação ou tramitação.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática de segurança',
          text: 'Antes de desativar, exporte ou registre a relação de unidades e perfis do servidor: ela é a evidência do que estava liberado e das permissões que efetivamente revogadas. E ao desativar, prefira remover primeiro todas as permissões administradas, deixando o acesso zerado.',
        },
        {
          kind: 'definitions',
          items: [
            {
              term: 'Permissão administrada',
              text: 'Vínculo entre usuário, sistema (SEI), unidade e perfil, mantido na funcionalidade Permissões > Administradas do SIP.',
            },
            {
              term: 'Alteração de unidades',
              text: 'Funcionalidade que permite conceder ou retirar o acesso do usuário a diferentes unidades.',
            },
            {
              term: 'Desativação',
              text: 'Ação que retira o acesso do usuário preservando as informações associadas a processos, documentos, protocolos e envios de e-mail.',
            },
          ],
        },
      ],
      keyPoints: [
        'Permissões > Administradas > campo Usuário mostra as unidades e os perfis do servidor.',
        'A permissão de uma unidade é excluída em Excluir Permissão, na coluna Ações, com confirmação em pop-up.',
        'Um servidor pode ter vários perfis e várias unidades.',
        'Na saída do órgão, exclua todas as permissões administradas e depois desative o usuário.',
        'Nunca exclua quem já ações — use desativação para preservar o histórico.',
        'A exclusão só se justifica para cadastro incorreto sem nenhuma ação ou tramitação.',
      ],
      quiz: [
        {
          id: 'm3-permissoes-vs-cadastro-q1',
          prompt:
            'Como o administrador consulta quais unidades e perfis um servidor tem acesso?',
          options: [
            'Na tela de cadastro de usuário do SIP, preenchendo o campo Sigla.',
            'Em SIP > Permissões > Administradas, preenchendo apenas o campo Usuário.',
            'Em SIP > Permissões, preenchendo o campo Unidade e o campo Sistema.',
            'Na Gestão de Contatos, no campo Interessados.',
          ],
          correctIndex: 1,
          explanation:
            'O passo a passo do material é: acessar o SIP, selecionar a opção Permissões no menu principal e clicar em Administradas; na nova tela, preencher apenas o campo Usuário para ver a lista de permissões administradas.',
        },
        {
          id: 'm3-permissoes-vs-cadastro-q2',
          prompt:
            'Ao excluir a permissão de determinada unidade, o que o administrador deve esperar?',
          options: [
            'A exclusão automática do usuário, sem confirmação.',
            'A abertura de uma janela pop-up com uma mensagem de confirmação.',
            'A alteração automática do perfil do usuário para Básico.',
            'A reabertura da tela de cadastro de usuário.',
          ],
          correctIndex: 1,
          explanation:
            'O material descreve que, ao clicar em Excluir Permissão na coluna Ações, abre-se uma janela pop-up com uma mensagem de confirmação — a exclusão de permissão é sempre confirmada pelo administrador.',
        },
        {
          id: 'm3-permissoes-vs-cadastro-q3',
          prompt:
            'Um servidor está de saída do órgão e já possui documentos assinados e processos tramitados no SEI. Qual é a conduta correta?',
          options: [
            'Excluir o cadastro, para que as permissões sejam eliminadas de imediato.',
            'Excluir cada permissão administrada e depois desativar o usuário, preservando os registros.',
            'Desativar o usuário sem mexer nas permissões.',
            'Alterar o e-mail do usuário no cadastro.',
          ],
          correctIndex: 1,
          explanation:
            'A exclusão acarreta a perda de informações associadas a processos, documentos, protocolos e envios de e-mail. O caminho seguro é excluir todas as permissões administradas e depois desativar o usuário.',
        },
        {
          id: 'm3-permissoes-vs-cadastro-q4',
          prompt:
            'Quando a exclusão do cadastro de usuário é aceitável?',
          options: [
            'Quando o usuário está de saída do órgão, para liberar a base de dados.',
            'Quando o usuário foi cadastrado incorretamente e ainda não realizou nenhum tipo de ação ou tramitação.',
            'Quando o usuário fica longos períodos sem acessar o sistema.',
            'Sempre que o usuário externo for substituído por outro.',
          ],
          correctIndex: 1,
          explanation:
            'A exclusão só é indicada quando o cadastro foi feito incorretamente e nenhuma ação ou tramitação ocorreu; nesse caso a auditoria do sistema não é prejudicada. Nos demais casos, o indicado é a desativação.',
        },
        {
          id: 'm3-permissoes-vs-cadastro-q5',
          prompt:
            'Qual é a decisão mais segura de controle de acesso para um servidor que passa a responder por outra unidade?',
          options: [
            'Conceder a opção * para garantir que ele não fique impedido de nenhuma tarefa.',
            'Manter as permissões atuais e apenas anotar a mudança em planilha.',
            'Conceder a permissão especificamente para a nova unidade, avaliando a necessidade de cada perfil envolvido.',
            'Criar um novo perfil exclusivo e aplicá-lo a todos os servidores da unidade.',
          ],
          correctIndex: 2,
          explanation:
            'Conceder apenas a unidade necessária e avaliar os perfis caso a caso segue o princípio do menor privilégio e mantém a revisão de acessos administrável. O asterisco para todos e a criação indiscriminada de perfis ampliam o acesso sem necessidade.',
        },
      ],
    },
    {
      id: 'm3-perfis',
      slug: 'm3-perfis',
      title: 'Perfis Configurados no SEI',
      estimatedMinutes: 35,
      objectives: [
        'Relacionar cada perfil configurado no SEI à sua aplicabilidade e às suas funcionalidades.',
        'Comparar os perfis padrão do SEI com os perfis criados pelo próprio órgão.',
        'Justificar a atribuição de perfis adequados às funções desempenhadas pelos servidores.',
        'Reconhecer a possibilidade de atribuição de vários perfis e unidades a um mesmo usuário.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Os usuários podem ter diferentes perfis, que variam do básico ao administrador. É muito importante que o usuário com o perfil de administrador do SEI conheça as diferentes funcionalidades de cada tipo de perfil, pois ele é responsável pela atribuição de perfis aos demais usuários.',
        },
        {
          kind: 'paragraph',
          text: 'O SEI já possui um rol de perfis pré-definidos e a escolha do tipo de perfil de cada usuário deve ser baseada no alinhamento interno da instituição, pois cada perfil possui uma série de funcionalidades específicas, chamadas de recursos. Por exemplo, o perfil Arquivamento tem recursos específicos de arquivamento que não estão disponíveis para o perfil Ouvidoria e vice-versa. Caso seja necessário, é possível criar outros perfis, limitando ou expandindo os recursos daqueles pré-cadastrados.',
        },
        {
          kind: 'definitions',
          heading: 'Perfis configurados no SEI e suas aplicabilidades',
          items: [
            {
              term: 'Básico',
              text: 'Adequado para a maioria dos usuários. Permite executar as funções básicas do sistema: criação e controle de processos e acesso à base de conhecimento, blocos e estatísticas.',
            },
            {
              term: 'Administrador',
              text: 'Adequado para o monitoramento e a gerência do sistema. Permite configurar itens de gestão: definir o perfil dos usuários, liberar o acesso a unidades funcionais, criar assinaturas para as unidades, listar os tipos de documentos configurados, criar modelos de documentos e criar ou desativar tipos de processos.',
            },
            {
              term: 'Arquivamento',
              text: 'Indicado para os usuários da unidade administrativa Arquivo. Permite executar funções específicas de arquivo: cancelar recebimento de processos e desarquivá-los.',
            },
            {
              term: 'Informática',
              text: 'Indicado para os usuários da unidade Tecnologia de Informação, com interlocução com administradores do SEI. Permite acessar informações relacionadas a logs e módulos do sistema e configurar itens técnicos do sistema.',
            },
            {
              term: 'Inspeção',
              text: 'Adequado para usuários restritos relacionados à gestão. Permite verificar a quantidade de processos em tramitação, documentos gerados e recebidos no órgão (por tipo e data), a última movimentação dos processos criados e os tipos de documentos gerados.',
            },
            {
              term: 'Ouvidoria',
              text: 'Adequado para os usuários da unidade Ouvidoria. Permite executar funções específicas de ouvidoria, como responder a formulários de ouvidoria ou gerar estatísticas sobre ouvidoria.',
            },
          ],
        },
        {
          kind: 'bullets',
          heading: 'Responsabilidades do administrador na atribuição de perfis',
          items: [
            'Conhecer as diferentes funcionalidades de cada tipo de perfil.',
            'Conceder perfis adequados às funções desempenhadas pelos servidores no órgão.',
            'Evitar que se criem perfis desnecessários.',
            'Evitar que se concedam perfis equivocados.',
            'Ter muita atenção na atribuição, pois está concedendo permissões de execução de tarefas no SEI.',
          ],
        },
        {
          kind: 'table',
          heading: 'Perfis padrão do SEI x perfis criados pelo órgão',
          columns: ['Aspecto', 'Perfis pré-definidos no SEI', 'Perfis criados pelo órgão'],
          rows: [
            [
              'Origem',
              'Já vêm configurados no SEI.',
              'Criados pelo administrador a partir da clonagem de um perfil existente.',
            ],
            [
              'Exemplos',
              'Básico, Administrador, Arquivamento, Informática, Inspeção e Ouvidoria.',
              'Básico + Protocolo, com recursos de alteração da árvore de um processo e outras funcionalidades de protocolo.',
            ],
            [
              'Finalidade',
              'Cobrem as funções típicas de cada área do órgão.',
              'Atender a uma necessidade específica do órgão, limitando ou expandindo os recursos do perfil de origem.',
            ],
            [
              'Escolha do perfil',
              'Baseada no alinhamento interno da instituição e na função desempenhada.',
              'Clonar sempre o perfil cujas funcionalidades sejam as mais próximas possíveis do que se deseja criar.',
            ],
            [
              'Manutenção',
              'Acompanhar as evoluções do SEI sem intervenção do órgão.',
              'Exigem atualização a cada evolução do SEI; quanto mais perfis, maior o trabalho.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Atenção na atribuição de perfis',
          text: 'O administrador deve ter muita atenção na atribuição de perfis para usuários, pois estará concedendo permissões de execução de tarefas no SEI. Conceder perfis adequados é o que evita que se criem perfis desnecessários ou se concedam perfis equivocados.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Vários perfis e várias unidades',
          text: 'É possível atribuir a um usuário vários perfis e unidades. No caso de coordenação de unidades, por exemplo, é recomendável se atribua a permissão para todas as unidades subordinadas.',
        },
        {
          kind: 'steps',
          heading: 'Conceder um novo perfil no SEI',
          items: [
            'Acessar o SIP.',
            'Localizar o usuário e a unidade que serão vinculados ao novo perfil.',
            'Atribuir o perfil e salvar a operação.',
            'Conferir a efetivação consultando as permissões administradas do usuário.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática de segurança: menor privilégio',
          text: 'Antes de conceder um perfil mais amplo, verifique se o perfil já existente atende à função. Conceda o perfil adequado às atividades reais do servidor — nem mais, nem menos — e registre as decisões de atribuição para facilitar futuras revisões de acesso.',
        },
      ],
      keyPoints: [
        'Os perfis variam do básico ao administrador e cada um possui recursos próprios.',
        'Perfil inadequado gera perfis desnecessários ou permissões equivocadas.',
        'Básico é adequado à maioria dos usuários; Administrador é para monitoramento e gerência.',
        'Arquivamento e Ouvidoria têm recursos específicos que não se sobrepõem.',
        'É possível atribuir vários perfis e várias unidades ao mesmo usuário.',
        'Em coordenações, é recomendável liberar as unidades subordinadas.',
      ],
      quiz: [
        {
          id: 'm3-perfis-q1',
          prompt:
            'Qual perfil é adequado para a maioria dos usuários do SEI?',
          options: ['Administrador.', 'Inspeção.', 'Básico.', 'Arquivamento.'],
          correctIndex: 2,
          explanation:
            'O perfil Básico é o adequado para a maioria dos usuários e permite executar as funções básicas do sistema, como criar e controlar processos e acessar a base de conhecimento, blocos e estatísticas.',
        },
        {
          id: 'm3-perfis-q2',
          prompt:
            'Qual perfil permite cancelar recebimento de processos e desarquivá-los?',
          options: ['Ouvidoria.', 'Informática.', 'Arquivamento.', 'Inspeção.'],
          correctIndex: 2,
          explanation:
            'O perfil Arquivamento é indicado para os usuários da unidade administrativa Arquivo e permite executar funções específicas de arquivo, como cancelar recebimento de processos e desarquivá-los.',
        },
        {
          id: 'm3-perfis-q3',
          prompt:
            'Qual perfil permite verificar a quantidade de processos em tramitação, documentos gerados e recebidos e a última movimentação dos processos?',
          options: ['Inspeção.', 'Básico.', 'Ouvidoria.', 'Administrador.'],
          correctIndex: 0,
          explanation:
            'O perfil Inspeção é adequado para usuários restritos relacionados à gestão e permite verificar a quantidade de processos em tramitação, documentos gerados e recebidos no órgão (por tipo e data), a última movimentação dos processos e os tipos de documentos gerados.',
        },
        {
          id: 'm3-perfis-q4',
          prompt:
            'Um servidor da unidade Tecnologia de Informação, que conversa frequentemente com os administradores do SEI, precisa acessar logs e módulos do sistema. Qual perfil atende?',
          options: ['Informática.', 'Arquivamento.', 'Ouvidoria.', 'Básico.'],
          correctIndex: 0,
          explanation:
            'O perfil Informática é indicado para os usuários da unidade Tecnologia de Informação que possuem interlocução com administradores do SEI e permite acessar informações relacionadas a logs e módulos do sistema, configurando itens técnicos.',
        },
        {
          id: 'm3-perfis-q5',
          prompt:
            'Por que o material recomenda basear a escolha do perfil no alinhamento interno da instituição e não apenas em rótulos técnicos?',
          options: [
            'Porque cada perfil possui uma série de funcionalidades específicas, chamadas de recursos, que devem corresponder às funções realmente desempenhadas.',
            'Porque os nomes dos perfis mudam a cada versão do SEI.',
            'Porque o alinhamento interno substitui a necessidade de criar perfis próprios.',
            'Porque o SIP concede automaticamente o perfil adequado ao setor do usuário.',
          ],
          correctIndex: 0,
          explanation:
            'Cada perfil possui recursos específicos, e a escolha deve refletir as funções do servidor no órgão. O exemplo do material: o perfil Arquivamento tem recursos de arquivamento que não estão disponíveis para o perfil Ouvidoria, e vice-versa.',
        },
      ],
    },
    {
      id: 'm3-montagem-de-perfil',
      slug: 'm3-montagem-de-perfil',
      title: 'Montagem de Perfil e Gestão de Recursos',
      estimatedMinutes: 45,
      objectives: [
        'Clonar um perfil existente como ponto de partida para a criação de um novo perfil.',
        'Cadastrar o Perfil Origem e o Perfil Destino e alterar a descrição do novo perfil.',
        'Montar o perfil ativando e desativando recursos, salvando a cada página percorrida.',
        'Verificar a totalidade de recursos existentes e editar, desativar ou excluir recursos de todos os perfis.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Para criar um perfil, é recomendável que se clone um dos perfis já existentes, cujas funcionalidades sejam as mais próximas possível do que se deseja criar. Por exemplo, em determinados órgãos, foi criado o perfil Básico + Protocolo, em que, além das funcionalidades do perfil Básico, foram acrescentados recursos como alteração da árvore de um processo e outras funcionalidades de protocolo.',
        },
        {
          kind: 'steps',
          heading: 'Clonagem do perfil',
          items: [
            'Acessar o SIP.',
            'Na tela Clonar Perfil, informar no campo Perfil Origem o nome do perfil a ser clonado, por exemplo, Básico + Protocolo.',
            'No campo Perfil Destino, preencher o nome do perfil que deseja criar.',
            'Clicar no botão Clonar.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Alterando a descrição do perfil',
          items: [
            'Na lista de perfis, localizar o perfil recém-clonado.',
            'Clicar no ícone Alterar Perfil, localizado na coluna Ações.',
            'Informar a descrição do novo perfil e salvar.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Após realizar a descrição, o administrador deve montar o novo perfil, atribuindo as funcionalidades desejadas e retirando as que não se aplicam. O administrador também pode alterar, incluir ou desativar um perfil; a alteração de um perfil acontece quando o órgão chega a um consenso de que determinado perfil tem excesso ou carência de recursos, e, em cada caso, deve-se clicar em Alterar Perfil na coluna Ações.',
        },
        {
          kind: 'steps',
          heading: 'Montagem do perfil',
          items: [
            'Clicar em Montar.',
            'Verificar os recursos disponíveis, dispostos em ordem alfabética.',
            'Ativar os recursos que correspondem ao novo perfil e desativar aqueles que não correspondem.',
            'Utilizar a checkbox Perfil para ativar ou desativar vários recursos de uma só vez.',
            'Lembrar-se de salvar a operação: a cada página percorrida, clicar no botão Salvar.',
          ],
        },
        {
          kind: 'bullets',
          heading: 'Operações disponíveis sobre os perfis',
          items: [
            'Criar um perfil clonando um dos perfis já existentes.',
            'Alterar a descrição do perfil clonado pelo ícone Alterar Perfil.',
            'Montar o perfil, atribuindo as funcionalidades desejadas e retirando as que não se aplicam.',
            'Alterar um perfil quando o órgão conclui que ele tem excesso ou carência de recursos.',
            'Incluir ou desativar um perfil.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Salvar a cada página',
          text: 'A cada página de recursos percorrida, é necessário clicar no botão Salvar. Sem isso, o trabalho de ativação e desativação dos recursos não fica garantido na montagem do perfil.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Não crie perfis indiscriminadamente',
          text: 'Não é recomendado criar indiscriminadamente novos perfis, pois quanto mais perfis disponíveis, maior será o trabalho de atualizá-los conforme as evoluções do SEI.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Exemplo prático: alteração da árvore do processo',
          text: 'Se a funcionalidade arvore_ordenar estiver atribuída a determinado perfil, o usuário que possuir tal perfil será capaz de ordenar documentos na árvore de um processo. Para verificar o comportamento dos perfis na prática, atribua-o a um usuário pelo SIP e teste-o no ambiente de treinamento do SEI.',
        },
        {
          kind: 'paragraph',
          text: 'A verificação da totalidade de recursos existentes é feita na funcionalidade de gestão de recursos, acessível pelo administrador. Na coluna Ações é possível editar, desativar ou excluir um recurso de todos os perfis — ou seja, a ação tem alcance amplo, alcançando todos os perfis que contêm o recurso.',
        },
        {
          kind: 'table',
          heading: 'Operações sobre perfis e recursos',
          columns: ['Operação', 'Onde age', 'Quando utilizar'],
          rows: [
            [
              'Alterar perfil',
              'Ícone Alterar Perfil, na coluna Ações.',
              'Quando o órgão conclui que determinado perfil tem excesso ou carência de recursos.',
            ],
            [
              'Criar perfil (clonar)',
              'Tela Clonar Perfil: Perfil Origem, Perfil Destino e botão Clonar.',
              'Para obter um perfil próprio do órgão a partir do mais próximo possível.',
            ],
            [
              'Montar perfil',
              'Botão Montar, com recursos em ordem alfabética e checkbox Perfil.',
              'Para atribuir as funcionalidades desejadas e retirar as que não se aplicam, salvando a cada página.',
            ],
            [
              'Incluir ou desativar perfil',
              'Gestão de Perfis no SIP.',
              'Quando o perfil for necessário incluir ou deixar de valer no órgão.',
            ],
            [
              'Editar, desativar ou excluir recurso',
              'Coluna Ações da gestão de recursos.',
              'Requer atenção máxima: a ação vale para todos os perfis que contêm o recurso.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática de segurança',
          text: 'Antes de excluir ou desativar um recurso, liste os perfis que o utilizam e avalie o impacto: como a ação alcança todos os perfis, o mesmo botão pode revogar permissões de áreas inteiras. Em caso de dúvida, prefira desativar a excluir.',
        },
      ],
      keyPoints: [
        'Crie perfis clonando o perfil existente mais próximo do que se deseja.',
        'Na tela Clonar Perfil, informe Perfil Origem e Perfil Destino e clique em Clonar.',
        'A descrição do novo perfil é alterada pelo ícone Alterar Perfil, na coluna Ações.',
        'Na montagem, os recursos aparecem em ordem alfabética e podem ser tratados em lote pela checkbox Perfil.',
        'É preciso salvar a cada página percorrida na montagem.',
        'Editar, desativar ou excluir um recurso na coluna Ações afeta todos os perfis.',
      ],
      quiz: [
        {
          id: 'm3-montagem-de-perfil-q1',
          prompt:
            'Qual é a recomendação do material antes de criar um novo perfil?',
          options: [
            'Criar um perfil totalmente em branco, sem recursos, e ativá-los depois.',
            'Clonar um dos perfis já existentes, cujas funcionalidades sejam as mais próximas possível do que se deseja criar.',
            'Duplicar o perfil Administrador, que é o mais completo.',
            'Criar um novo perfil para cada servidor, evitando perda de funcionalidade.',
          ],
          correctIndex: 1,
          explanation:
            'A recomendação é clonar o perfil mais próximo possível. O exemplo é o perfil Básico + Protocolo, criado em determinados órgãos com recursos adicionais de protocolo.',
        },
        {
          id: 'm3-montagem-de-perfil-q2',
          prompt:
            'Na tela Clonar Perfil, como devem ser preenchidos os campos?',
          options: [
            'Perfil Origem com o nome do perfil a ser clonado e Perfil Destino com o nome do perfil que deseja criar; depois, clicar em Clonar.',
            'Perfil Origem com o nome novo e Perfil Destino com o nome antigo; depois, clicar em Salvar.',
            'Perfil Origem e Perfil Destino com o mesmo nome; depois, clicar em Montar.',
            'Perfil Origem em branco e Perfil Destino com a descrição; depois, clicar em Alterar Perfil.',
          ],
          correctIndex: 0,
          explanation:
            'O administrador informa no campo Perfil Origem o nome do perfil a ser clonado (por exemplo, Básico + Protocolo), preenche o Perfil Destino com o nome do perfil que deseja criar e clica em Clonar.',
        },
        {
          id: 'm3-montagem-de-perfil-q3',
          prompt:
            'Na montagem do perfil, como é apresentada a lista de recursos e como se trata vários de uma vez?',
          options: [
            'Em ordem alfabética, e a checkbox Perfil permite ativar ou desativar vários recursos de uma só vez.',
            'Em ordem de criação, e é necessário selecionar cada recurso individualmente, sem opção em lote.',
            'Agrupados por módulo, e a seleção em lote é feita pelo botão Salvar.',
            'Em ordem alfabética, e a seleção em lote é feita pelo botão Clonar.',
          ],
          correctIndex: 0,
          explanation:
            'Ao clicar em Montar, os recursos disponíveis aparecem em ordem alfabética; os que não correspondem ao novo perfil devem ser desativados e a checkbox Perfil permite ativar ou desativar vários recursos de uma só vez.',
        },
        {
          id: 'm3-montagem-de-perfil-q4',
          prompt:
            'Ao montar um perfil com muitos recursos, o administrador percorre três páginas e salva apenas ao final. O que é recomendado?',
          options: [
            'Salvar a cada página percorrida, clicando no botão Salvar.',
            'Salvar somente ao final, para não duplicar registros.',
            'Salvar apenas a primeira página, pois ela define o perfil.',
            'Não é necessário salvar, o sistema salva automaticamente ao trocar de página.',
          ],
          correctIndex: 0,
          explanation:
            'O material lembra: é preciso salvar a operação e, a cada página percorrida, clicar no botão Salvar. Sem isso, o resultado da montagem não fica garantido.',
        },
        {
          id: 'm3-montagem-de-perfil-q5',
          prompt:
            'Na coluna Ações da gestão de recursos, o administrador clica em excluir um recurso. Qual é a consequência?',
          options: [
            'O recurso é removido apenas do perfil que está sendo editado.',
            'O recurso é desativado somente para o usuário logado.',
            'A ação alcança todos os perfis, permitindo editar, desativar ou excluir o recurso de todos eles.',
            'O recurso passa a exigir confirmação a cada uso no SEI.',
          ],
          correctIndex: 2,
          explanation:
            'Na coluna Ações é possível editar, desativar ou excluir um recurso de todos os perfis. Por isso, avalie quais perfis usam o recurso antes de executar a ação.',
        },
        {
          id: 'm3-montagem-de-perfil-q6',
          prompt:
            'Qual consequência explica a dica de não criar indiscriminadamente novos perfis?',
          options: [
            'Perfis novos substituem automaticamente os perfis padrão do SEI.',
            'Usuários com muitos perfis perdem a visibilidade de acesso ao SEI.',
            'Perfil novo impede a clonagem de perfis pré-definidos.',
            'Quanto mais perfis disponíveis, maior o trabalho de atualizá-los conforme as evoluções do SEI.',
          ],
          correctIndex: 3,
          explanation:
            'A própria dica do material: não é recomendado criar indiscriminadamente novos perfis, pois quanto mais perfis disponíveis, maior será o trabalho de atualizá-los conforme as evoluções do SEI.',
        },
      ],
    },
    {
      id: 'm3-contatos',
      slug: 'm3-contatos',
      title: 'Gestão de Contatos',
      estimatedMinutes: 30,
      objectives: [
        'Cadastrar tipos de contato de pessoa física ou jurídica e definir as unidades que podem alterá-los ou consultá-los.',
        'Cadastrar um novo contato informando natureza, associação com pessoa jurídica e cargo.',
        'Criar grupos de contatos da unidade ou institucionais para uso como interessados ou destinatários.',
        'Relacionar tipos de contexto e unidades associadas no cadastro de contatos.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Utilizando a funcionalidade Gestão de Contatos, o administrador cadastra os tipos de contatos, podendo ser pessoa física ou jurídica, e informa quais unidades podem alterar ou consultar os contatos relacionados. O administrador deve seguir o caminho indicado para a funcionalidade no SIP.',
        },
        {
          kind: 'steps',
          heading: 'Cadastramento de novo contato',
          items: [
            'Acessar o SEI.',
            'Escolher o tipo de contato previamente cadastrado.',
            'Preencher os dados do contato: natureza do contato, se possui associação com pessoa jurídica e cargo do contato.',
            'Salvar o cadastro.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Cargos e pronomes de tratamento',
          text: 'Usuários externos poderão assinar documentos indicando seu cargo, tratamento e vocativo. Ressalta-se que tanto os cargos quanto os pronomes de tratamento devem ser criados pelo administrador.',
        },
        {
          kind: 'paragraph',
          text: 'Outra opção disponível nessa funcionalidade é a criação de grupos de contatos da unidade ou institucionais para uso como interessados ou destinatários. Dessa forma, sempre que um processo for iniciado ou um documento for inserido, será possível a recuperação dos contatos cadastrados dos interessados no processo.',
        },
        {
          kind: 'steps',
          heading: 'Uso de grupos como interessados',
          items: [
            'Iniciar o processo ou inserir o documento.',
            'Clicar na lupa localizada à direita do campo Interessados.',
            'Escolher o grupo ou o tipo dos contatos que são interessados no processo em questão.',
            'Se necessário, alterar o contato ao clicar em Consultar/Alterar Dados do Interessado Selecionado.',
          ],
        },
        {
          kind: 'bullets',
          heading: 'Tipos de contato',
          items: [
            'Alguns tipos de contatos previamente cadastrados são: Órgãos, Unidades do Órgão e Usuários Externos.',
            'Vários outros tipos de contato podem ser criados pelo administrador.',
            'Ao criar um tipo de contato, deve-se nomeá-lo, descrevê-lo, inserir as unidades que podem administrá-lo e permitir consultas completas sobre ele.',
          ],
        },
        {
          kind: 'definitions',
          heading: 'Vocabulário da Gestão de Contatos',
          items: [
            {
              term: 'Tipo de contato',
              text: 'Categoria de contato, de pessoa física ou jurídica, que organiza o cadastro e define quais unidades o administram.',
            },
            {
              term: 'Tipos de contexto',
              text: 'Categorias criadas pelo administrador para organizar os contatos; devem ser criadas com indication das Unidades Associadas.',
            },
            {
              term: 'Unidades Associadas',
              text: 'Unidades indicadas para o tipo de contexto: somente os usuários dessas unidades podem alterar cadastros de contextos e de contatos categorizados nos tipos de contextos correspondentes.',
            },
            {
              term: 'Grupo de contatos',
              text: 'Agrupamento de contatos da unidade ou institucional, usado como interessados ou destinatários em processos e documentos.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Unidades associadas delimitam quem pode alterar',
          text: 'O administrador deve criar os Tipos de Contexto e indicar as Unidades Associadas, pois somente os usuários das unidades associadas poderão alterar cadastros de contextos e de contatos categorizados nos tipos de contextos correspondentes.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática de segurança e de qualidade cadastral',
          text: 'Evite cadastros duplicados de contatos: agrupe por unidade ou por instituição e mantenha nomes e descrições padronizados. Controle também quais unidades ficam associadas a cada tipo de contexto, restringindo a alteração dos cadastros apenas a quem precisa.',
        },
      ],
      keyPoints: [
        'A Gestão de Contatos cadastra tipos de contato de pessoa física ou jurídica.',
        'O administrador informa quais unidades podem alterar ou consultar os contatos relacionados.',
        'No cadastro do contato: natureza, associação com pessoa jurídica e cargo.',
        'Cargos e pronomes de tratamento devem ser criados pelo administrador.',
        'Grupos de contatos podem ser usados como interessados ou destinatários.',
        'Somente usuários das unidades associadas podem alterar contatos do tipo correspondente.',
      ],
      quiz: [
        {
          id: 'm3-contatos-q1',
          prompt:
            'Na Gestão de Contatos, o administrador cadastra os tipos de contatos e informa quais unidades podem alterá-los ou consultá-los. Que tipos de contato podem ser cadastrados?',
          options: [
            'Exclusivamente pessoa física.',
            'Exclusivamente pessoa jurídica.',
            'Pessoa física ou pessoa jurídica.',
            'Apenas órgãos e unidades do órgão.',
          ],
          correctIndex: 2,
          explanation:
            'O material é explícito: o administrador cadastra os tipos de contatos, podendo ser pessoa física ou jurídica, e informa quais unidades podem alterar ou consultar os contatos relacionados.',
        },
        {
          id: 'm3-contatos-q2',
          prompt:
            'Quais dados são preenchidos no cadastro de um novo contato?',
          options: [
            'Nome do contato, matrícula, unidade e perfil.',
            'Natureza do contato, se possui associação com pessoa jurídica e cargo do contato.',
            'CPF, sigla, órgão e ID de origem.',
            'Situação de Pendente ou Liberado, nome, e-mail e CPF.',
          ],
          correctIndex: 1,
          explanation:
            'No cadastro do novo contato, o administrador escolhe o tipo de contato previamente cadastrado e preenche dados como natureza do contato, se possui associação com pessoa jurídica e cargo do contato.',
        },
        {
          id: 'm3-contatos-q3',
          prompt:
            'Qual é a finalidade dos grupos de contatos da unidade ou institucionais?',
          options: [
            'Substituir o cadastro de usuários externos no site do órgão.',
            'Servir como interessados ou destinatários, permitindo recuperar os contatos cadastrados ao iniciar um processo ou inserir um documento.',
            'Conceder permissões de acesso a documentos restritos.',
            'Definir os perfis que serão atribuídos aos usuários do grupo.',
          ],
          correctIndex: 1,
          explanation:
            'Os grupos de contatos da unidade ou institucionais são usados como interessados ou destinatários, permitindo a recuperação dos contatos cadastrados dos interessados sempre que um processo for iniciado ou um documento for inserido.',
        },
        {
          id: 'm3-contatos-q4',
          prompt:
            'Quem pode alterar os cadastros de contatos categorizados em determinado tipo de contexto?',
          options: [
            'Qualquer usuário com perfil Básico do órgão.',
            'Apenas o administrador com perfil Administrador do SEI.',
            'Somente os usuários das unidades indicadas nas Unidades Associadas.',
            'Todos os usuários cadastrados na Gestão de Contatos.',
          ],
          correctIndex: 2,
          explanation:
            'O administrador deve criar os Tipos de Contexto e indicar as Unidades Associadas, pois somente os usuários das unidades associadas poderão alterar cadastros de contextos e de contatos categorizados nos tipos de contextos correspondentes.',
        },
        {
          id: 'm3-contatos-q5',
          prompt:
            'Ao incluir um contato no campo Interessados de um processo, como o administrador recupera o grupo ou tipo de contato desejado?',
          options: [
            'Digitando o nome do contato diretamente no campo Interessados.',
            'Clicando na lupa localizada à direita do campo Interessados e escolhendo o grupo ou o tipo dos contatos.',
            'Acessando SIP > Permissões > Administradas.',
            'Cadastrando um novo tipo de contato no próprio processo.',
          ],
          correctIndex: 1,
          explanation:
            'É necessário clicar na lupa localizada à direita do campo Interessados e escolher o grupo ou o tipo dos contatos que são interessados no processo. É possível alterar o contato em Consultar/Alterar Dados do Interessado Selecionado.',
        },
      ],
    },
    {
      id: 'm3-usuarios-externos',
      slug: 'm3-usuarios-externos',
      title: 'Gestão de Usuários Externos',
      estimatedMinutes: 40,
      objectives: [
        'Distinguir usuários internos de usuários externos e identificar os perfis de cada grupo.',
        'Liberar o acesso de um usuário externo cadastrado previamente no site do órgão.',
        'Bloquear usuários externos por desativação e reconhecer quando a exclusão é proibida.',
        'Avaliar solicitações de alteração de e-mail versus desativação do login e novo cadastro.',
      ],
      blocks: [
        {
          kind: 'definitions',
          heading: 'Dois tipos de usuário',
          items: [
            {
              term: 'Usuário interno',
              text: 'Servidor do órgão, com perfis e unidades liberados para acesso.',
            },
            {
              term: 'Usuário externo',
              text: 'Cliente do órgão e, normalmente, fornecedor que precisa assinar contratos eletronicamente ou advogado de parte interessada nos processos que tramitam no órgão.',
            },
          ],
        },
        {
          kind: 'bullets',
          heading: 'O que os usuários externos fazem no SEI',
          items: [
            'Acessar processos de natureza restrita, mediante cadastro prévio no site do órgão.',
            'Assinar contratos eletronicamente, indicando cargo, tratamento e vocativo.',
            'Acompanhar, como advogados de partes interessadas, os processos que tramitam no órgão.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Natureza restrita e cadastro prévio',
          text: 'Os processos que os usuários externos podem acessar têm natureza restrita e, por isso, é necessário realizar um cadastro prévio por meio do campo Usuário Externo no site do órgão. Além disso, o órgão deve alinhar internamente como será o processo de liberação de acesso: cada órgão delimita os pré-requisitos para a liberação do cadastro realizado pelo usuário.',
        },
        {
          kind: 'steps',
          heading: 'Liberação de acesso',
          items: [
            'Após a conferência dos pré-requisitos, acessar a funcionalidade com o perfil Administrador.',
            'Digitar o nome, o e-mail ou o CPF do usuário.',
            'Na coluna Ações, clicar em Alterar Usuário Externo.',
            'Conferir todos os dados do contato.',
            'Alterar a situação de Pendente para Liberado.',
            'Somente após esses passos o usuário poderá acessar o ambiente de usuário externo.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Após essa liberação inicial, é o momento de o servidor designado pelo órgão liberar o acesso a determinado processo restrito para um usuário externo. Ressalta-se que usuários com perfil Básico possuem permissão para liberar processos restritos a usuários externos previamente cadastrados.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cuidado com quem recebe essa função',
          text: 'Como usuários com perfil Básico possuem permissão para liberar processos restritos a usuários externos previamente cadastrados, é necessário selecionar os servidores que terão essa função com bastante cuidado.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Escopo do cadastro de usuário externo',
          text: 'O cadastro de usuário externo deve ser realizado apenas para aqueles que desejam acessar processos restritos. Os processos públicos podem ser acessados independentemente de cadastramento prévio por meio de um módulo de pesquisa processual desenvolvido por colaboradores da comunidade do processo eletrônico.',
        },
        {
          kind: 'paragraph',
          text: 'Caso haja a necessidade de se bloquear um usuário externo, existem duas opções disponíveis: desativar e excluir. No entanto, não poderão ser excluídos os usuários externos que já tiveram processos liberados no sistema.',
        },
        {
          kind: 'table',
          heading: 'Bloqueio de usuário externo: desativar x excluir',
          columns: ['Situação do usuário externo', 'Ação permitida', 'Efeito'],
          rows: [
            [
              'Nunca teve processo liberado no sistema.',
              'Desativar ou excluir, conforme a necessidade.',
              'Impede o acesso ao ambiente de usuário externo.',
            ],
            [
              'Já teve processos liberados no sistema.',
              'Somente desativar; a exclusão não é permitida.',
              'Não poderá mais acessar o ambiente de usuário externo, preservando o histórico.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Mudança de escritório ou de procuração',
          text: 'Se o advogado perder a procuração de determinada empresa para acompanhar seus processos, o usuário deve ser desativado. Se esse advogado mudar de escritório, deve realizar um novo cadastro no sistema: se apenas for alterado o e-mail do usuário, ele continuará acessando os processos que tinha acesso antes.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Avaliar a natureza da solicitação antes de alterar',
          text: 'Portanto, deve-se atentar à natureza da solicitação quanto à alteração do e-mail cadastrado, ponderando se o pedido requer a desativação do login e a criação de um novo ou apenas a alteração do e-mail. Em caso de dúvida, aplique o menor privilégio: revogue o acesso anterior.',
        },
        {
          kind: 'steps',
          heading: 'Alteração cadastral',
          items: [
            'Acessar a funcionalidade de gestão de usuários externos.',
            'Localizar o usuário externo a ser alterado.',
            'Alterar o cadastro conforme a necessidade e salvar.',
            'Se a alteração impacta a titularidade do acesso, desativar o login e orientar o usuário externo a realizar novo cadastro.',
          ],
        },
      ],
      keyPoints: [
        'Usuários internos são servidores com perfis e unidades liberados; usuários externos são clientes do órgão.',
        'Usuários externos acessam apenas processos de natureza restrita, mediante cadastro prévio no site do órgão.',
        'A liberação troca a situação de Pendente para Liberado em Alterar Usuário Externo, na coluna Ações.',
        'Usuários com perfil Básico também podem liberar processos restritos a usuários externos cadastrados: selecione com cuidado.',
        'Quem já teve processos liberados não pode ser excluído, apenas desativado.',
            'Alterar apenas o e-mail não impede o acesso a processos anteriores: nesse caso, exija novo cadastro.',
      ],
      quiz: [
        {
          id: 'm3-usuarios-externos-q1',
          prompt: 'Como são definidos os usuários externos?',
          options: [
            'Como servidores do órgão com perfis e unidades liberados para acesso.',
            'Como clientes do órgão, normalmente fornecedores que precisam assinar contratos eletronicamente ou advogados de partes interessadas.',
            'Como usuários cadastrados exclusivamente na Gestão de Contatos.',
            'Como usuários com perfil Básico sem restrição de unidade.',
          ],
          correctIndex: 1,
          explanation:
            'Usuários internos são servidores do órgão com perfis e unidades liberados; já os externos são clientes do órgão, normalmente fornecedores que precisam assinar contratos eletronicamente ou advogados de partes interessadas nos processos do órgão.',
        },
        {
          id: 'm3-usuarios-externos-q2',
          prompt:
            'Qual é o passo a passo correto para liberar o acesso de um usuário externo?',
          options: [
            'Cadastrar o usuário no SIP, atribuir o perfil Básico e salvar.',
            'Digitar o nome, e-mail ou CPF do usuário; na coluna Ações, clicar em Alterar Usuário Externo; conferir os dados e alterar a situação de Pendente para Liberado.',
            'Clicar em Excluir Permissão na coluna Ações e selecionar a unidade.',
            'Criar um grupo de contatos e adicionar o usuário como interessado.',
          ],
          correctIndex: 1,
          explanation:
            'Após a conferência dos pré-requisitos, o usuário com perfil Administrador digita o nome, e-mail ou CPF, clica em Alterar Usuário Externo na coluna Ações, confere os dados e altera a situação de Pendente para Liberado. Só depois disso o usuário acessa o ambiente de usuário externo.',
        },
        {
          id: 'm3-usuarios-externos-q3',
          prompt:
            'Um advogado assinou procuração e mudou de escritório. O e-mail cadastrado foi alterado. O que acontece?',
          options: [
            'O acesso anterior é revogado automaticamente com a alteração do e-mail.',
            'O advogado perde o acesso a todos os processos, inclusive os já assinados.',
            'O advogado continua acessando os processos que tinha acesso antes, devendo realizar um novo cadastro.',
            'O sistema exige a exclusão do usuário, o que apaga o histórico de assinaturas.',
          ],
          correctIndex: 2,
          explanation:
            'Se apenas for alterado o e-mail do usuário, ele continuará acessando os processos que tinha acesso antes. Por isso, quem muda de escritório deve realizar um novo cadastro no sistema.',
        },
        {
          id: 'm3-usuarios-externos-q4',
          prompt:
            'Qual afirmação está de acordo com o material sobre o bloqueio de usuário externo?',
          options: [
            'Usuários externos com processos liberados podem ser excluídos normalmente.',
            'A exclusão é a única forma de impedir o acesso ao ambiente de usuário externo.',
            'Somente é permitido desativar o usuário externo que já teve processos liberados.',
            'O bloqueio de usuário externo exige a desativação do cadastro no SIP.',
          ],
          correctIndex: 2,
          explanation:
            'Não poderão ser excluídos os usuários externos que já tiveram processos liberados no sistema; nesse caso, só é permitido desativar o usuário e, dessa forma, ele não poderá mais acessar o ambiente de usuário externo.',
        },
        {
          id: 'm3-usuarios-externos-q5',
          prompt:
            'Um usuário externo solicita acesso a um processo público do órgão. Qual é a conduta correta?',
          options: [
            'Liberar o cadastro no ambiente de usuário externo, pois o processo é público.',
            'Negar o pedido, pois processos públicos exigem usuário externo cadastrado.',
            'Orientar que processos públicos podem ser acessados independentemente de cadastramento prévio, por meio do módulo de pesquisa processual; o cadastro de usuário externo é para processos restritos.',
            'Liberar o acesso e, em seguida, desativar o cadastro para preservar a segurança.',
          ],
          correctIndex: 2,
          explanation:
            'O cadastro de usuário externo deve ser realizado apenas para aqueles que acessam processos restritos. Processos públicos são acessados independentemente de cadastramento prévio por meio de um módulo de pesquisa processual.',
        },
        {
          id: 'm3-usuarios-externos-q6',
          prompt:
            'Ao selecionar os servidores que poderão liberar processos restritos a usuários externos, qual decisão é a mais segura?',
          options: [
            'Selecionar todos os servidores com perfil Básico, para agilizar o atendimento.',
            'Selecionar apenas os servidores diretamente responsáveis pela relação com o requerente, com o mínimo de perfis e unidades necessários.',
            'Selecionar apenas o administrador do SIP, único com acesso ao SIP.',
            'Não selecionar ninguém, mantendo a liberação apenas com o perfil Administrador.',
          ],
          correctIndex: 1,
          explanation:
            'Como usuários com perfil Básico possuem permissão para liberar processos restritos a usuários externos previamente cadastrados, é preciso selecionar esses servidores com bastante cuidado, restringindo a concessão ao mínimo necessário.',
        },
      ],
    },
  ],
};
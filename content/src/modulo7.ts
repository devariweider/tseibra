import type { CourseModule } from './types.js';

export const modulo7: CourseModule = {
  id: 'mod-7',
  slug: 'relatorios-e-auditoria',
  title: 'Módulo 7 — Relatórios e Auditoria',
  subtitle: 'Logs, Regras de Auditoria, Auditoria, Critérios de Controle Interno, Parâmetros, Sequência e Relatórios',
  description:
    'Este módulo apresenta as funcionalidades de diagnóstico, controle e prestação de contas do SEI. São tratados os Logs, que exibem informações técnicas avaliadas pela equipe de TI, com seus quatro tipos (Erro, Aviso, Informação e Debug) e a pesquisa por tipo, período, texto e IP; as Regras de Auditoria, cadastradas no SIP e que definem o que será auditado; a funcionalidade Auditoria, que permite descobrir quem executou cada ação e quando; os Critérios de Controle Interno, que autorizam o acesso das áreas de controle a processos restritos; os Parâmetros, que configuram o comportamento do sistema; a Sequência, que controla a numeração de processos por unidade e ano; e a funcionalidade Relatórios, com o relatório de contatos temporários, a substituição de contatos e o inventário de processos sigilosos. O conteúdo segue a apostila do curso SEI! Administrar, da Enap (2019).',
  sourceRef: 'Módulo 7 - Relatórios e Auditoria.pdf (Enap, curso SEI! Administrar, 2019)',
  estimatedMinutes: 240,
  objectives: [
    'Identificar os quatro tipos de Logs (Erro, Aviso, Informação e Debug) e a pesquisar por tipo, período, texto e IP.',
    'Cadastrar, alterar, desativar, excluir e consultar Regras de Auditoria no SIP, reconhecendo as categorias disponíveis.',
    'Pesquisar ações de usuários por meio da funcionalidade Auditoria, relacionando-a à pesquisa dos Logs.',
    'Cadastrar Critérios de Controle Interno para permitir o acesso das unidades de controle a processos restritos.',
    'Incluir, alterar e excluir Parâmetros do SEI e consultar a tabela de parâmetros nativos e suas descrições.',
    'Gerenciar Sequências para garantir a numeração única de processos por unidade e ano, inclusive em migrações do meio analógico.',
    'Gerar o relatório de contatos temporários, substituir contatos duplicados e consultar o inventário de processos sigilosos.',
  ],
  lessons: [
    {
      id: 'm7-logs',
      slug: 'logs',
      title: 'Introdução aos Logs e Tipos de Logs',
      estimatedMinutes: 30,
      objectives: [
        'Compreender a finalidade dos Logs na identificação de problemas de funcionamento ou de configuração do SEI.',
        'Acessar a funcionalidade Logs por meio do menu Infra do SEI.',
        'Diferenciar os quatro tipos de logs: Erro, Aviso, Informação e Debug.',
        'Reconhecer exemplos reais de cada tipo de log apresentados na apostila.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Nos Logs são exibidas informações mais técnicas, avaliadas pela equipe de TI do órgão ou entidade com o objetivo de identificar problemas de funcionamento ou de configuração no SEI ou em algum dos seus módulos. Diferente das funcionalidades de cadastro, os Logs não servem para produzir documentos ou processos: servem para dar visibilidade ao comportamento interno do sistema.',
        },
        {
          kind: 'steps',
          heading: 'Caminho de acesso',
          items: [
            'Acesse o SEI com um usuário autorizado.',
            'No menu principal, selecione a opção "Infra".',
            'Clique em "Log".',
            'Abrirá uma nova tela denominada "Logs", que contém campos para pesquisa e a lista de todos os logs.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Fique atento!',
          text: 'Apenas usuários com a permissão "Informática" têm acesso ao menu "Infra". Portanto, o usuário que possui apenas o perfil "Administrador" não consegue acessar essa funcionalidade.',
        },
        {
          kind: 'table',
          heading: 'Tipos de logs e o que cada um registra',
          columns: ['Tipo de log', 'O que registra', 'Exemplo do material-fonte'],
          rows: [
            [
              'Erro',
              'Comportamento inadequado do sistema. Os logs permitem avaliar a causa desse comportamento.',
              'Recusa do recebimento de um processo pelo barramento, pois a espécie documental não está mapeada no destino; processo 00000.000000/0000-00 sem andamento aberto na unidade; erro na requisição do serviço de monitoramento de pendências.',
            ],
            [
              'Aviso',
              'Alerta de problema não crítico: corresponde a problemas que não impedem o funcionamento do sistema.',
              '"Unidade CGSOL não possui endereço cadastrado". O endereço não é obrigatório no cadastro da unidade, mas sua ausência impede a criação de documentos internos em um processo.',
            ],
            [
              'Informação',
              'Mensagens informativas, sem relação com erro ou problema de configuração. Apenas informam algum comportamento do sistema.',
              '"Iniciando serviços de monitoramento de pendências de trâmites de processos", que informa que o serviço de monitoramento de trâmite por meio do barramento está funcionando.',
            ],
            [
              'Debug',
              'Resultado da análise de um depurador, que analisa o código de um programa para testar bugs ou erros no código fonte. Apenas é exibido se a equipe de TI configurar a exibição.',
              'Mensagens de depuração do código-fonte do SEI ou dos módulos; sem a configuração, elas não são exibidas na interface.',
            ],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Como aprofundar em cada tipo',
          items: [
            'Na tela "Logs", cada tipo de log é apresentado em uma aba própria.',
            'Clique na aba do tipo desejado para visualizar os registros correspondentes.',
            'Analise a mensagem e a data/hora para correlacionar o registro com a atividade do usuário ou do servidor.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Os logs do SEI não são compostos apenas de erros: há também avisos, mensagens informativas e mensagens de debug.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cuidado com a trilha de registros',
          text: 'Não limpe nem apague registros de Logs com o objetivo de "limpar a tela" antes de uma apresentação. Os Logs apoiam a auditoria técnica do sistema e a apuração de problemas; a remoção de registros destrói a trilha que permite reconstituir o que ocorreu no ambiente, mesmo após o efeito do problema ter desaparecido.',
        },
        {
          kind: 'definitions',
          heading: 'Vocabulário técnico do módulo',
          items: [
            { term: 'Log', text: 'Registro técnico de comportamento do SEI ou de seus módulos, avaliado pela equipe de TI para identificar problemas de funcionamento ou de configuração.' },
            { term: 'Erro', text: 'Comportamento inadequado do sistema, cuja causa pode ser avaliada por meio dos logs.' },
            { term: 'Aviso', text: 'Alerta de problema não crítico, que não impede o funcionamento do sistema.' },
            { term: 'Debug', text: 'Mensagem gerada por depurador de código, exibida na interface somente mediante configuração da equipe de TI.' },
            { term: 'Unidade', text: 'Órgão ou unidade cadastrada no SEI, que possui sua própria sequência de processos.' },
          ],
        },
      ],
      keyPoints: [
        'Logs exibem informações técnicas avaliadas pela equipe de TI para identificar problemas de funcionamento ou de configuração.',
        'O acesso é pelo menu "Infra" > "Log", disponível apenas a usuários com a permissão "Informática".',
        'O perfil "Administrador", isoladamente, não acessa o menu "Infra".',
        'Os tipos de log são quatro: Erro, Aviso, Informação e Debug.',
        'Os logs não são compostos apenas de erros.',
        'Mensagens de debug só aparecem se a equipe de TI configurar a sua exibição.',
      ],
      quiz: [
        {
          id: 'm7-q1',
          prompt: 'Qual o objetivo principal dos Logs no SEI?',
          options: [
            'Cadastrar usuários e unidades do órgão.',
            'Exibir informações técnicas avaliadas pela equipe de TI para identificar problemas de funcionamento ou de configuração.',
            'Gerar relatórios de processos sigilosos.',
            'Registrar as regras de auditoria cadastradas no SIP.',
          ],
          correctIndex: 1,
          explanation:
            'A apostila define os Logs como o local onde "são exibidas informações mais técnicas, avaliadas pela equipe de TI do órgão ou entidade com o objetivo de identificar problemas de funcionamento ou de configuração no SEI ou em algum dos seus módulos".',
        },
        {
          id: 'm7-q2',
          prompt: 'Por qual caminho a funcionalidade Logs é acessada?',
          options: [
            'Menu principal > "Administração" > "Log".',
            'Menu principal > "Infra" > "Log".',
            'SIP > "Regras de Auditoria".',
            'Menu principal > "Relatórios" > "Log".',
          ],
          correctIndex: 1,
          explanation:
            'A funcionalidade pode ser acessada por meio do menu principal, selecionando a opção "Infra" e clicando em "Log".',
        },
        {
          id: 'm7-q3',
          prompt: 'Qual perfil, isoladamente, NÃO tem acesso ao menu "Infra"?',
          options: ['Administrador', 'Informática', 'Controle Interno', 'Usuário externo'],
          correctIndex: 0,
          explanation:
            'Apenas usuários com a permissão "Informática" têm acesso ao menu "Infra"; portanto, o usuário que possui apenas o perfil "Administrador" não consegue acessar essa funcionalidade.',
        },
        {
          id: 'm7-q4',
          prompt: 'Qual é a diferença entre o log do tipo "Aviso" e o do tipo "Erro"?',
          options: [
            'O aviso é técnico e o erro é administrativo.',
            'O aviso é sempre relacionado a e-mails do sistema.',
            'O aviso é um problema não crítico que não impede o funcionamento do sistema; o erro é um comportamento inadequado do sistema.',
            'Não há diferença: os dois tipos registram a mesma categoria de problema.',
          ],
          correctIndex: 2,
          explanation:
            'Os avisos são alertas de algum problema não crítico, ou seja, problemas que não impedem o funcionamento do sistema. Já o log do tipo "Erro" lista os logs relacionados a erros, isto é, comportamentos inadequados do sistema.',
        },
        {
          id: 'm7-q5',
          prompt: 'Por que a mensagem "Unidade CGSOL não possui endereço cadastrado" aparece como aviso e não como erro?',
          options: [
            'Porque o endereço nunca é cadastrado no SEI.',
            'Porque a ausência do endereço não impede o funcionamento do sistema, embora impossibilite a criação de documentos internos em um processo.',
            'Porque a mensagem foi gerada pelo tipo de log Debug.',
            'Porque o endereço só é obrigatório para unidades do SIP.',
          ],
          correctIndex: 1,
          explanation:
            'O endereço não é campo de preenchimento obrigatório no cadastro da unidade, porém a ausência dessa informação impossibilita a criação de documentos internos em um processo, sem impedir o funcionamento do sistema. Por isso a mensagem é classificada como aviso.',
        },
        {
          id: 'm7-q6',
          prompt: 'Quando as mensagens do tipo "Debug" são exibidas na interface do SEI?',
          options: [
            'Sempre, em todas as abas de Logs.',
            'Apenas quando a equipe de TI do órgão ou entidade configura a sua exibição.',
            'Somente para usuários com perfil "Administrador".',
            'Apenas quando existe algum erro não crítico registrado.',
          ],
          correctIndex: 1,
          explanation:
            'A equipe de TI pode configurar que essas mensagens sejam exibidas na interface do SEI. Caso essa configuração não seja realizada, as mensagens de debug não serão exibidas.',
        },
      ],
    },
    {
      id: 'm7-pesquisando-logs',
      slug: 'pesquisando-logs',
      title: 'Pesquisando Logs',
      estimatedMinutes: 25,
      objectives: [
        'Identificar os campos de pesquisa disponíveis na tela "Logs".',
        'Utilizar o filtro obrigatório "Tipo" para delimitar a consulta.',
        'Aplicar os filtros de período, texto e IP para restringir os resultados.',
        'Ativar a atualização automática da tela de Logs a cada minuto.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Ao acessar a funcionalidade, o menu principal solicita a seleção da opção "Infra" e o clique em "Log". Abre-se então uma nova tela denominada "Logs", que contém campos para pesquisa e uma lista com todos os logs. A pesquisa é a ferramenta que transforma uma lista extensa de registros técnicos em uma informação útil para o diagnóstico.',
        },
        {
          kind: 'table',
          heading: 'Campos de pesquisa da tela "Logs"',
          columns: ['Campo', 'Tipo de preenchimento', 'Função na pesquisa'],
          rows: [
            [
              'Tipo',
              'Obrigatório (lista com quatro categorias)',
              'Refere-se ao tipo de log que se deseja pesquisar: erro, aviso, informação ou debug. É o filtro obrigatório da tela.',
            ],
            [
              'Período',
              'Dois campos do tipo Data/Hora',
              'Delimita o intervalo de análise. O preenchimento é facilitado pela seleção da data e da hora desejadas por meio do ícone de calendário.',
            ],
            [
              'Texto',
              'Livre preenchimento',
              'A qualidade da pesquisa está diretamente relacionada à quantidade de informação dada pelo usuário; o filtro restringe o resultado.',
            ],
            [
              'IP',
              'Endereço IP',
              'Filtra os logs pelo endereço IP de quem acessou o sistema.',
            ],
            [
              'Atualizar automaticamente a cada minuto',
              'Caixa de seleção (checkbox), localizada após o campo "IP"',
              'Quando marcada, a tela é atualizada sem a necessidade de o usuário pressionar a tecla F5.',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Filtro obrigatório',
          text: 'O filtro "Tipo" é obrigatório: deve ser escolhido um tipo de log para a realização da pesquisa. Sem essa escolha a consulta não é executada, porque um log de Erro e um log de Informação respondem a perguntas diferentes.',
        },
        {
          kind: 'bullets',
          heading: 'Boas práticas de pesquisa',
          items: [
            'Comece pelo filtro "Tipo", que é obrigatório, e só depois refine o resultado.',
            'Use o "Período" para circunscrever o problema ao intervalo em que ele foi percebido.',
            'Prefira termos curtos e objetivos no campo "Texto": muitas palavras restringem demais o resultado.',
            'Use o filtro "IP" para relacionar um conjunto de mensagens ao mesmo usuário ou equipamento.',
            'Mantenha a caixa "Atualizar automaticamente a cada minuto" marcada ao acompanhar a ocorrência de um erro em tempo real.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Fluxo de pesquisa em Logs',
          items: [
            'No menu principal, selecione "Infra" e clique em "Log".',
            'Escolha o "Tipo" do log a ser pesquisado.',
            'Informe o "Período" com as datas e horas inicial e final.',
            'Se necessário, preencha "Texto" com o argumento a ser procurado.',
            'Se necessário, informe o "IP" de quem acessou o sistema.',
            'Marque a caixa "Atualizar automaticamente a cada minuto" se desejar a atualização contínua da tela.',
            'Analise a lista apresentada e identifique a causa provável do comportamento registrado.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Vídeo de apoio sobre a pesquisa de Logs: https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo07video01.mp4',
        },
        {
          kind: 'definitions',
          heading: 'Campos de pesquisa de Logs em linguagem técnica',
          items: [
            { term: 'Data/Hora', text: 'Formato de preenchimento dos campos de período, com preenchimento facilitado pelo ícone de calendário, que define o intervalo de análise do registro.' },
            { term: 'IP', text: 'Endereço IP utilizado para filtrar os logs pelo computador ou conexão de quem acessou o sistema.' },
            { term: 'Atualização automática', text: 'Recurso que renova a lista de logs a cada minuto, dispensando o uso da tecla F5.' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cuidado com a leitura precipitada',
          text: 'Registros do tipo "Aviso" e do tipo "Informação" não indicam, sozinhos, falha do sistema. Antes de abrir um chamado, confirme no conjunto dos registros do período se existe um log do tipo "Erro" correspondente ao mesmo fato.',
        },
      ],
      keyPoints: [
        'A tela "Logs" traz campos de pesquisa e a lista de todos os logs.',
        'O campo "Tipo" é obrigatório e aceita erro, aviso, informação e debug.',
        'O "Período" é composto por dois campos do tipo Data/Hora, com seleção por calendário.',
        'O campo "Texto" é de livre preenchimento e a qualidade da pesquisa depende da quantidade de informação informada.',
        'O campo "IP" filtra os logs pelo endereço de quem acessou o sistema.',
        'A checkbox "Atualizar automaticamente a cada minuto" dispensa o uso da tecla F5.',
      ],
      quiz: [
        {
          id: 'm7-q7',
          prompt: 'Qual campo de pesquisa da tela "Logs" é obrigatório?',
          options: ['Período', 'Texto', 'IP', 'Tipo'],
          correctIndex: 3,
          explanation:
            'A apostila ressalta que o filtro "Tipo" é obrigatório, ou seja, deve ser escolhido um tipo para realização de pesquisa.',
        },
        {
          id: 'm7-q8',
          prompt: 'Como é composto o campo "Período" da pesquisa de Logs?',
          options: [
            'Por um único campo de data.',
            'Por dois campos do tipo Data/Hora, com seleção facilitada pelo ícone de calendário.',
            'Por dois campos de texto livre.',
            'Por um campo que exige o endereço IP do servidor.',
          ],
          correctIndex: 1,
          explanation:
            'O campo "Período" é composto por dois campos do tipo Data/Hora, e o preenchimento é facilitado pela seleção da data e da hora desejada por meio do ícone de calendário.',
        },
        {
          id: 'm7-q9',
          prompt: 'Qual a relação entre o campo "Texto" e o resultado da pesquisa de Logs?',
          options: [
            'Ele sempre amplia o resultado da pesquisa, independentemente do preenchimento.',
            'A qualidade da pesquisa está diretamente relacionada à quantidade de informação dada pelo usuário, restringindo o resultado.',
            'Ele substitui o preenchimento obrigatório do campo "Tipo".',
            'Ele filtra os logs exclusivamente pelo endereço IP do usuário.',
          ],
          correctIndex: 1,
          explanation:
            'O filtro "Texto" é de livre preenchimento e a qualidade da pesquisa está diretamente relacionada à quantidade de informação dada pelo usuário, o que restringe o resultado.',
        },
        {
          id: 'm7-q10',
          prompt: 'Qual a finalidade do campo "IP" na pesquisa de Logs?',
          options: [
            'Indicar a versão instalada do SEI.',
            'Filtrar os logs pelo endereço IP de quem acessou o sistema.',
            'Cadastrar uma nova unidade de teste.',
            'Definir o período de análise dos registros.',
          ],
          correctIndex: 1,
          explanation:
            'O campo "IP" é utilizado para filtrar os logs por meio do endereço IP de quem acessou o sistema.',
        },
        {
          id: 'm7-q11',
          prompt: 'O que ocorre ao marcar a checkbox "Atualizar automaticamente a cada minuto"?',
          options: [
            'Os logs antigos são apagados da lista a cada minuto.',
            'A tela é atualizada sem a necessidade de o usuário pressionar a tecla F5.',
            'O sistema passa a registrar os logs do tipo Debug.',
            'A pesquisa passa a exigir o preenchimento do campo "IP".',
          ],
          correctIndex: 1,
          explanation:
            'Ao marcar a checkbox "Atualizar automaticamente a cada minuto", localizada após o campo "IP", a tela é atualizada sem a necessidade de o usuário pressionar a tecla F5.',
        },
      ],
    },
    {
      id: 'm7-regras-auditoria',
      slug: 'regras-auditoria',
      title: 'Regras de Auditoria',
      estimatedMinutes: 30,
      objectives: [
        'Localizar a funcionalidade "Regras de Auditoria" no Sistema de Permissões (SIP).',
        'Compreender o que uma regra de auditoria registra e por que ela é a base da pesquisa de auditoria.',
        'Identificar as categorias de regras cadastradas no SIP.',
        'Cadastrar, alterar, desativar, excluir e consultar regras de auditoria.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Antes de entender o funcionamento da auditoria do SEI e do SIP, é necessário saber que a pesquisa é feita por meio dos critérios de auditoria. A funcionalidade "Regras de Auditoria" é acessada pelo Sistema de Permissões (SIP): o usuário deve acessar o SIP e clicar na opção "Regras de Auditoria", localizada no menu principal.',
        },
        {
          kind: 'definitions',
          heading: 'Conceitos iniciais',
          items: [
            { term: 'Regra de auditoria', text: 'Parâmetro cadastrado no SIP que define quais ações passam a ser registradas para auditoria no SEI.' },
            { term: 'SIP', text: 'Sistema de Permissões, onde as regras de auditoria são cadastradas e mantidas.' },
            { term: 'Recurso', text: 'No âmbito do SEI, o recurso está relacionado a alguma funcionalidade. Por exemplo, a funcionalidade assinar é gerenciada pelo recurso "document_assinar".' },
          ],
        },
        {
          kind: 'paragraph',
          text: 'As regras de auditoria são utilizadas para gerar relatórios das ações realizadas no SEI por determinado usuário de uma unidade em determinada data e hora, bem como o seu IP de acesso, navegador, servidor, recurso, requisição e operação. Ou seja, a regra é o filtro que define o que será auditado; sem ela, não há registro disponível para a consulta.',
        },
        {
          kind: 'table',
          heading: 'Categorias de regras de auditoria cadastradas no SIP',
          columns: ['Categoria', 'Abrangência'],
          rows: [
            ['Geral', 'Regras aplicáveis de forma geral às ações realizadas no SEI.'],
            ['Acessos e Usuários Externos', 'Regras relacionadas aos acessos e às ações de usuários externos ao sistema.'],
            ['Visualização de Processos', 'Regras relacionadas à visualização de processos.'],
            ['Visualização de Documentos', 'Regras relacionadas à visualização de documentos.'],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Importante',
          text: 'Todas as regras criadas no SIP serão aproveitadas na geração de relatórios. A regra de auditoria é, portanto, o elo entre o registro da ação e a produção do relatório correspondente.',
        },
        {
          kind: 'bullets',
          heading: 'Ações disponíveis na coluna "Ações"',
          items: [
            'Pesquisar — localiza a regra desejada na listagem.',
            'Alterar — permite modificar o conteúdo de qualquer campo de uma regra já cadastrada.',
            'Desativar — mantém o registro sem aplicá-lo, permitindo reativação posterior.',
            'Excluir — remove definitivamente a regra.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Usuário autorizado',
          text: 'No SIP, as ações de manutenção desta funcionalidade são realizadas pelo usuário com perfil "Administrador": cadastro de nova regra, alteração, exclusão, consulta e inativação de uma regra de auditoria.',
        },
        {
          kind: 'steps',
          heading: 'Cadastro de nova regra de auditoria',
          items: [
            'Acesse o SIP e clique na opção "Regras de Auditoria" no menu principal.',
            'Clique no botão "Nova", localizado no canto superior direito da tela.',
            'Preencha o campo "Órgão do Sistema", que permite escolher qualquer órgão cadastrado.',
            'Selecione "Sistema", que permite escolher qualquer sistema cadastrado.',
            'Escreva a "Descrição", com uma síntese explicativa e objective sobre o objetivo da regra.',
            'Informe o "Recurso" relacionado à funcionalidade que se pretende auditar, por exemplo "document_assinar" para a funcionalidade assinar.',
            'Salve a operação.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos do cadastro de Regra de Auditoria',
          columns: ['Campo', 'O que deve ser informado'],
          rows: [
            ['Órgão do Sistema', 'Permite escolher qualquer órgão cadastrado.'],
            ['Sistema', 'Permite escolher qualquer sistema cadastrado.'],
            ['Descrição', 'Síntese explicativa sobre o objetivo da regra; deve ser um texto objetivo.'],
            ['Recurso', 'Relaciona a regra a alguma funcionalidade do SEI, como "document_assinar" para a funcionalidade assinar.'],
          ],
        },
        {
          kind: 'steps',
          heading: 'Alteração, exclusão e consulta de regras',
          items: [
            'Para alterar: localize a regra e acione a ação de alteração. O conteúdo de qualquer campo pode ser alterado.',
            'Para excluir uma regra: localize a regra que se deseja excluir e clique em "Excluir Regra de Auditoria", na coluna "Ações" à direita da tabela.',
            'Para excluir várias regras: selecione as checkboxes das regras e clique no botão "Excluir", no menu superior à direita da tela; em seguida aparece a mensagem de confirmação da exclusão.',
            'Para consultar: use a ação "Consulta", que permite apenas consultar as informações cadastradas no SIP: órgão do sistema, sistema, descrição e recursos. Nessa ação as informações não podem ser alteradas, apenas visualizadas.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Risco de auditoria',
          text: 'Não exclua nem desative regras de auditoria sem registro da justificativa. A regra é o que habilita o registro da ação; removê-la interrompe a produção de relatórios e elimina a possibilidade de reconstituir quem fez o quê. Prefira a desativação, que preserva o histórico do cadastro, e documente a decisão.',
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Ao criar uma regra, use uma "Descrição" objetiva. É ela que apropriadamente explica, meses depois, por que aquela funcionalidade passou a ser auditada.',
        },
      ],
      keyPoints: [
        'A pesquisa de auditoria é feita por meio dos critérios de auditoria cadastrados no SIP.',
        'A regra registra: usuário, unidade, data e hora, IP de acesso, navegador, servidor, recurso, requisição e operação.',
        'As categorias são Geral, Acessos e Usuários Externos, Visualização de Processos e Visualização de Documentos.',
        'As ações disponíveis são pesquisar, alterar, desativar e excluir.',
        'O cadastro usa os campos Órgão do Sistema, Sistema, Descrição e Recursos.',
        'Todas as regras criadas no SIP são aproveitadas na geração de relatórios.',
      ],
      quiz: [
        {
          id: 'm7-q12',
          prompt: 'Onde a funcionalidade "Regras de Auditoria" é acessada?',
          options: [
            'No SEI, pelo menu "Infra".',
            'No SIP, pela opção "Regras de Auditoria" do menu principal.',
            'No SEI, pelo menu "Relatórios".',
            'No SIP, pela opção "Parâmetros".',
          ],
          correctIndex: 1,
          explanation:
            'A funcionalidade "Regras de Auditoria" é acessada pelo Sistema de Permissões (SIP). O usuário deve acessar o SIP e clicar na opção "Regras de Auditoria", localizada no menu principal.',
        },
        {
          id: 'm7-q13',
          prompt: 'Quais categorias de regras de auditoria estão cadastradas no SIP?',
          options: [
            'Geral, Acessos e Usuários Externos, Visualização de Processos e Visualização de Documentos.',
            'Geral, Backup, Assinatura Digital e WebServices.',
            'Logs, Avisos, Informações e Debug.',
            'Unidades de Controle, Órgãos Controlados, Tipos de Processo e Tipos de Documento.',
          ],
          correctIndex: 0,
          explanation:
            'As regras cadastradas no SIP para o SEI contemplam as categorias Geral, Acessos e Usuários Externos, Visualização de Processos e Visualização de Documentos.',
        },
        {
          id: 'm7-q14',
          prompt: 'Qual a função do campo "Recursos" no cadastro de uma regra de auditoria?',
          options: [
            'Indicar o número máximo de documentos externos.',
            'Relacionar a regra a alguma funcionalidade do SEI, como "document_assinar" para a funcionalidade assinar.',
            'Informar o endereço IP do servidor de aplicação.',
            'Selecionar o usuário que realizei a ação auditada.',
          ],
          correctIndex: 1,
          explanation:
            'No âmbito do SEI, o recurso está relacionado a alguma funcionalidade. Por exemplo, a funcionalidade assinar é gerenciada pelo recurso "document_assinar".',
        },
        {
          id: 'm7-q15',
          prompt: 'Quais ações estão disponíveis na coluna "Ações" da tela "Regras de Auditoria"?',
          options: [
            'Imprimir, Excluir e Exportar.',
            'Pesquisar, alterar, desativar e excluir.',
            'Consultar, assinar e visualizar.',
            'Apenas consultar e imprimir.',
          ],
          correctIndex: 1,
          explanation:
            'Além das categorias de regras, o sistema apresenta uma coluna denominada "Ações", na qual o usuário pode pesquisar, alterar, desativar e excluir uma regra.',
        },
        {
          id: 'm7-q16',
          prompt: 'O que o usuário pode fazer na ação "Consulta" de uma regra de auditoria?',
          options: [
            'Consultar e alterar as informações cadastradas.',
            'Consultar as informações de órgão do sistema, sistema, descrição e recursos, sem possibilidade de alterá-las.',
            'Apenas excluir a regra selecionada.',
            'Exportar a regra para um arquivo externo.',
          ],
          correctIndex: 1,
          explanation:
            'A ação "Consulta" permite apenas consultar as informações das regras cadastradas por meio do SIP: órgão do sistema, sistema, descrição e recursos. Nessa ação as informações não podem ser alteradas, apenas visualizadas.',
        },
        {
          id: 'm7-q17',
          prompt: 'Qual a relação entre Regras de Auditoria e Relatórios?',
          options: [
            'São funcionalidades independentes, sem relação entre si.',
            'Todas as regras criadas no SIP serão aproveitadas na geração de relatórios.',
            'Os relatórios substituem as regras de auditoria no SIP.',
            'A regra de auditoria é gerada automaticamente a partir de cada relatório.',
          ],
          correctIndex: 1,
          explanation:
            'A apostila destaca que todas as regras criadas no SIP serão aproveitadas na geração de relatórios. Além disso, os relatórios do SEI somente podem ser gerados após o cadastramento das regras relacionadas às ações no SIP.',
        },
      ],
    },
    {
      id: 'm7-auditoria',
      slug: 'auditoria',
      title: 'Funcionalidade Auditoria',
      estimatedMinutes: 30,
      objectives: [
        'Diferenciar a finalidade dos Logs da funcionalidade Auditoria.',
        'Acessar a funcionalidade Auditoria a partir do menu "Infra".',
        'Utilizar os filtros de pesquisa por usuário, unidade, recurso, período e IP.',
        'Aplicar a auditoria para identificar quem executou determinada ação e quando.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Conforme aprendido na aula de Logs, nos Logs são exibidas informações mais técnicas, avaliadas pela equipe de TI do órgão ou entidade. Já a auditoria é focada no armazenamento referente às ações realizadas pelos usuários no passado, permitindo auditar as ações executadas durante a utilização do sistema. Dessa forma, a ação de auditoria permite saber o usuário, a unidade e a data e hora que determinada ação foi realizada no sistema, por meio dos critérios de pesquisa.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Exemplo de aplicação',
          text: 'A auditoria possibilita identificar quem excluiu um documento e quando o fez. É a resposta direta a questionamentos sobre a autoria e a data de uma ação no sistema.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Fique atento!',
          text: 'Apenas usuários com a permissão "Informática" têm acesso ao menu "Infra". Portanto, o usuário com apenas o perfil "Administrador" não tem acesso a essa funcionalidade.',
        },
        {
          kind: 'table',
          heading: 'Filtros de pesquisa da funcionalidade "Auditoria"',
          columns: ['Filtro', 'O que significa', 'Exemplo do material-fonte'],
          rows: [
            ['Sigla do Usuário', 'Abreviação do nome do usuário.', 'joao.silva'],
            ['Nome do Usuário', 'Nome do usuário por extenso.', 'João da Silva'],
            ['Sigla da Unidade', 'Abreviação do nome da unidade do órgão ou entidade.', 'CGPRO'],
            ['Descrição da Unidade', 'Nome da unidade por extenso.', 'Coordenação Geral do Processo Eletrônico Nacional'],
            ['Recurso', 'Relacionado a alguma funcionalidade.', 'document_assinar, que gerencia a funcionalidade assinar'],
            ['Período', 'Dois campos: início e fim, do tipo Data/Hora, com preenchimento facilitado pelo calendário.', 'Seleção da data e da hora desejadas.'],
            ['IP', 'Filtra os logs pelo IP de quem acessou o sistema.', 'Endereço IP do usuário ou equipamento.'],
            ['Servidor, Requisição e Operação', 'Filtros bastante técnicos; a apostila opta por não explicar o objetivo deles.', '-'],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Como usar os filtros na prática',
          items: [
            'Comece pela "Sigla do Usuário" ou pelo "Nome do Usuário" quando a dúvida recair sobre a autoria da ação.',
            'Use "Sigla da Unidade" e "Descrição da Unidade" para recortar a pesquisa em determinada área.',
            'Use o "Recurso" quando souber qual funcionalidade foi acionada, por exemplo "document_assinar" para a funcionalidade assinar.',
            'Delimite o "Período" com os campos de início e fim, usando o calendário para a seleção de data e hora.',
            'Acrescente o "IP" quando o registro estiver associado a um computador ou conexão específica.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Logs não substituem a auditoria',
          text: 'Os Logs trazem a visão técnica do comportamento do sistema, avaliada pela equipe de TI; a Auditoria traz o registro das ações realizadas pelos usuários no passado. Confundir as duas funcionalidades leva a conclusões erradas: nem todo log de erro identifica um usuário, e nem toda ação do usuário gera log técnico.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Regra de auditoria como pressuposto da pesquisa',
          text: 'Se a regra correspondente à ação pesquisada não estiver cadastrada no SIP, não haverá registro a ser exibido. Antes de concluir que ninguém realizou a ação, verifique se a funcionalidade estava coberta por alguma regra de auditoria.',
        },
        {
          kind: 'definitions',
          heading: 'Vocabulário da auditoria',
          items: [
            { term: 'Auditoria', text: 'Funcionalidade focada no armazenamento das ações realizadas pelos usuários no passado, permitindo auditar as ações executadas durante a utilização do sistema.' },
            { term: 'Recurso', text: 'Vinculação entre a ação registrada e a funcionalidade do SEI, como "document_assinar" para a funcionalidade assinar.' },
            { term: 'Sigla da Unidade', text: 'Abreviação do nome da unidade do órgão ou entidade, utilizada como filtro de pesquisa.' },
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Vídeo de apoio sobre a pesquisa na funcionalidade Auditoria: https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo07video02.mp4',
        },
      ],
      keyPoints: [
        'A Auditoria registra as ações realizadas pelos usuários no passado, enquanto os Logs trazem informações técnicas do sistema.',
        'Por meio da auditoria sabe-se o usuário, a unidade e a data e hora de determinada ação.',
        'O acesso é pelo menu "Infra" e exige a permissão "Informática".',
        'Os filtros incluem Sigla e Nome do Usuário, Sigla e Descrição da Unidade, Recurso, Período e IP.',
        'Os filtros "Servidor", "Requisição" e "Operação" são técnicos e a apostila não detalha seu objetivo.',
        'A pesquisa só encontra ações cobertas por regras de auditoria cadastradas no SIP.',
      ],
      quiz: [
        {
          id: 'm7-q18',
          prompt: 'Qual a diferença de finalidade entre Logs e Auditoria?',
          options: [
            'Os Logs registram ações de usuários; a Auditoria registra a configuração do sistema.',
            'Os Logs exibem informações técnicas avaliadas pela equipe de TI; a Auditoria é focada no armazenamento das ações realizadas pelos usuários no passado.',
            'As duas funcionalidades têm exatamente a mesma finalidade.',
            'Os Logs substituem a Auditoria em todas as conferências internas.',
          ],
          correctIndex: 1,
          explanation:
            'Nos Logs são exibidas informações mais técnicas, avaliadas pela equipe de TI. A auditoria é focada no armazenamento referente às ações realizadas pelos usuários no passado, permitindo auditar as ações executadas durante a utilização do sistema.',
        },
        {
          id: 'm7-q19',
          prompt: 'Que informações a auditoria permite obter sobre determinada ação?',
          options: [
            'Apenas o tipo de log gerado.',
            'O usuário, a unidade e a data e hora em que a ação foi realizada.',
            'A quantidade de documentos da unidade.',
            'A versão instalada do SEI.',
          ],
          correctIndex: 1,
          explanation:
            'A ação de auditoria permite saber o usuário, a unidade e a data e hora que determinada ação foi realizada no sistema, por meio dos critérios de pesquisa.',
        },
        {
          id: 'm7-q20',
          prompt: 'Qual filtro da Auditoria corresponde ao exemplo "document_assinar"?',
          options: ['Sigla do Usuário', 'Recurso', 'Descrição da Unidade', 'Operação'],
          correctIndex: 1,
          explanation:
            'O filtro "Recurso" está relacionado a alguma funcionalidade. Por exemplo, a funcionalidade assinar é gerenciada pelo recurso "document_assinar".',
        },
        {
          id: 'm7-q21',
          prompt: 'Como é composto o filtro "Período" na pesquisa de Auditoria?',
          options: [
            'Por um campo de data inicial e um de data final, do tipo Data/Hora, com seleção por calendário.',
            'Por um único campo de texto com a data por extenso.',
            'Por um campo que registra o endereço IP do usuário.',
            'Por um campo que armazena o nome da unidade.',
          ],
          correctIndex: 0,
          explanation:
            'O filtro "Período" é composto por dois campos: início e fim, do tipo Data/Hora, sendo o preenchimento facilitado pela seleção da data e da hora desejada por meio do calendário.',
        },
        {
          id: 'm7-q22',
          prompt: 'Por que a apostila opta por não explicar os filtros "Servidor", "Requisição" e "Operação"?',
          options: [
            'Porque esses filtros não existem na tela de Auditoria.',
            'Porque são filtros obrigatórios preenchidos pelo sistema.',
            'Porque são bastante técnicos e, por esse motivo, o material não detalha seu objetivo.',
            'Porque esses filtros só existem na funcionalidade Logs.',
          ],
          correctIndex: 2,
          explanation:
            'A apostila destaca que os últimos filtros, "Servidor", "Requisição" e "Operação", são bastante técnicos e, por esse motivo, optou-se por não explicar o objetivo deles.',
        },
      ],
    },
    {
      id: 'm7-criterios-controle-interno',
      slug: 'criterios-controle-interno',
      title: 'Critérios de Controle Interno',
      estimatedMinutes: 30,
      objectives: [
        'Explicar a finalidade dos Critérios de Controle Interno no acesso a processos restritos.',
        'Incluir um novo critério de controle interno com os campos obrigatórios.',
        'Alterar e consultar os dados de um critério cadastrado.',
        'Excluir um ou mais critérios de controle interno e suas implicações.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A funcionalidade "Critérios de Controle Interno" possibilita que processos restritos sejam acessados por unidades nas quais eles não foram tramitados. Assim, permite que as áreas de Controle Interno e Auditoria, as quais possuem atribuições de vigilância, orientação e correção, tenham acesso aos processos submetidos a uma auditoria ou a uma investigação, por exemplo.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Você sabia?',
          text: 'Um processo criado no SEI possui níveis de acesso e, dependendo do nível escolhido no momento da criação, ele é visível apenas para um conjunto restrito de usuários do sistema. O acesso aos processos sigilosos ocorre exclusivamente por meio de credenciais de acesso.',
        },
        {
          kind: 'bullets',
          heading: 'Ações de manutenção disponíveis',
          items: [
            'Inclusão de novo critério de controle interno.',
            'Alteração do critério de controle interno.',
            'Consulta aos critérios de controle interno.',
            'Exclusão de um ou mais critérios de controle interno.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Inclusão de novo Critério de Controle Interno',
          items: [
            'Acesse a funcionalidade com o usuário de perfil "Administrador".',
            'Clique no botão "Novo", localizado no canto superior direito da tela.',
            'Abri-se a tela "Novo Critério de Controle Interno".',
            'Preencha a "Descrição" com uma explicação detalhada do critério.',
            'Selecione as "Unidades de Controle", que recuperam todas as unidades cadastradas no SIP, independentemente do órgão ao qual estão vinculadas.',
            'Selecione os "Órgãos Controlados", que recuperam todos os órgãos cadastrados no SIP.',
            'Selecione os "Tipos de Processo Controlados" ou os "Tipos de Documento Controlados" — o sistema valida o preenchimento de um dos dois campos.',
            'Salve a operação.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos do Critério de Controle Interno',
          columns: ['Campo', 'Conteúdo', 'Preenchimento obrigatório'],
          rows: [
            ['Descrição', 'Explicação detalhada do critério, de livre preenchimento.', 'Não indicado como obrigatório.'],
            ['Unidades de Controle', 'Recupera todas as unidades cadastradas no SIP, independentemente do órgão em que estão vinculadas.', 'Obrigatório, com no mínimo uma unidade a ser controlada.'],
            ['Órgãos Controlados', 'Recupera todos os órgãos cadastrados no SIP.', 'Obrigatório, com no mínimo um órgão a ser controlado.'],
            ['Tipos de Processo Controlados', 'Recupera todos os tipos de processo cadastrados.', 'Obrigatório apenas se "Tipos de Documento Controlados" não for preenchido.'],
            ['Tipos de Documento Controlados', 'Recupera todos os tipos de documentos cadastrados.', 'Obrigatório apenas se "Tipos de Processo Controlados" não for preenchido.'],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Validação de preenchimento',
          text: 'O sistema realiza a validação de preenchimento de um dos campos: se "Tipos de Processo Controlados" ou "Tipos de Documento Controlados" estiver preenchido, então o critério de controle interno é salvo. Antes de salvar, confirme que ao menos um deles foi selecionado, e lembre-se de salvar a operação.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Risco de controle',
          text: 'O critério de controle interno amplia o acesso de unidades a processos restritos. Criterie a descrição e os órgãos controlados com o mesmo rigor dos níveis de acesso do processo: um critério mal delimitado expõe conteúdo sigiloso a unidades que não devem conhecê-lo.',
        },
        {
          kind: 'steps',
          heading: 'Alteração, consulta e exclusão',
          items: [
            'Para alterar: identifique o critério desejado e clique no ícone "Alterar Controle Interno", na coluna "Ações" à direita da tabela. Abre-se uma nova tela com os campos Descrição, Unidades de Controle, Órgãos Controlados, Tipos de Processo Controlados e Tipos de Documento Controlados — todos podem ser alterados.',
            'Para consultar: use a ação "Consultar Controle Interno". Nessa ação não é possível editar as informações, apenas visualizá-las.',
            'Para excluir um critério: identifique o critério desejado e clique em "Excluir Controle Interno", na coluna "Ações" à direita da tabela.',
            'Para excluir vários critérios: selecione as checkboxes dos critérios e clique no botão "Excluir", no menu superior à direita da tela; em seguida aparece a mensagem de confirmação da exclusão.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Redija a "Descrição" de forma que explique a finalidade do critério a um auditor unfamiliarizado com o órgão. É o campo que registra o porquê daquela ampliação de acesso.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Vídeo de apoio sobre a inclusão de Critério de Controle Interno: https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo07video03.mp4',
        },
      ],
      keyPoints: [
        'A funcionalidade permite que processos restritos sejam acessados por unidades nas quais não foram tramitados.',
        'As áreas de Controle Interno e Auditoria têm atribuições de vigilância, orientação e correção.',
        'O acesso a processos sigilosos ocorre exclusivamente por meio de credenciais de acesso.',
        'Os campos obrigatórios são Unidades de Controle e Órgãos Controlados.',
        'Tipos de Processo Controlados e Tipos de Documento Controlados são obrigatórios de forma alternativa.',
        'A exclusão pode ser feita por linha, na coluna "Ações", ou em lote, pelas checkboxes e pelo botão "Excluir".',
      ],
      quiz: [
        {
          id: 'm7-q23',
          prompt: 'Qual a finalidade dos "Critérios de Controle Interno"?',
          options: [
            'Permitir que processos restritos sejam acessados por unidades nas quais não foram tramitados.',
            'Definir a numeração de processos de cada unidade.',
            'Configurar o comportamento do sistema por meio de variáveis.',
            'Consolidar os dados do sistema em um relatório operacional.',
          ],
          correctIndex: 0,
          explanation:
            'A funcionalidade "Critérios de Controle Interno" possibilita que processos restritos sejam acessados por unidades nas quais eles não foram tramitados, permitindo que as áreas de Controle Interno e Auditoria tenham acesso aos processos submetidos a uma auditoria ou a uma investigação.',
        },
        {
          id: 'm7-q24',
          prompt: 'Quais campos do Critério de Controle Interno são obrigatórios sem condição?',
          options: [
            'Descrição e Tipos de Documento Controlados.',
            'Unidades de Controle e Órgãos Controlados.',
            'Tipos de Processo Controlados e Tipos de Documento Controlados.',
            'Descrição, Unidades de Controle e Órgãos Controlados.',
          ],
          correctIndex: 1,
          explanation:
            '"Unidades de Controle" e "Órgãos Controlados" são campos obrigatórios e devem ser preenchidos com, no mínimo, uma unidade e um órgão a serem controlados.',
        },
        {
          id: 'm7-q25',
          prompt: 'Como o sistema valida o preenchimento de "Tipos de Processo Controlados" e "Tipos de Documento Controlados"?',
          options: [
            'Os dois campos devem ser preenchidos simultaneamente.',
            'Nenhum dos campos pode ser preenchido.',
            'Se um dos dois campos estiver preenchido, então o critério de controle interno é salvo.',
            'O preenchimento depende apenas do campo "Descrição".',
          ],
          correctIndex: 2,
          explanation:
            'Cada um dos campos é de preenchimento obrigatório apenas se o outro não for preenchido. O sistema realiza a validação de preenchimento de um dos campos: se um deles estiver preenchido, então o critério de controle interno é salvo.',
        },
        {
          id: 'm7-q26',
          prompt: 'O que o campo "Unidades de Controle" recupera?',
          options: [
            'Apenas as unidades do órgão selecionado em Órgãos Controlados.',
            'Todas as unidades cadastradas no SIP, independentemente do órgão no qual estão vinculadas.',
            'Somente as unidades de protocolo.',
            'Os contatos temporários vinculados à unidade.',
          ],
          correctIndex: 1,
          explanation:
            'O campo "Unidades de Controle" recupera todas as unidades cadastradas no SIP, independentemente do órgão no qual estão vinculadas, e é de preenchimento obrigatório com, no mínimo, uma unidade a ser controlada.',
        },
        {
          id: 'm7-q27',
          prompt: 'O que é possível fazer na ação "Consultar Controle Interno"?',
          options: [
            'Editar todas as informações do critério.',
            'Excluir o critério de controle interno.',
            'Apenas visualizar as informações, sem possibilidade de edição.',
            'Cadastrar um novo critério a partir da própria consulta.',
          ],
          correctIndex: 2,
          explanation:
            'É possível consultar as informações dos campos por meio da ação "Consultar Controle Interno", mas nessa ação não é possível editar as informações, apenas visualizá-las.',
        },
      ],
    },
    {
      id: 'm7-parametros',
      slug: 'parametros',
      title: 'Parâmetros',
      estimatedMinutes: 35,
      objectives: [
        'Compreender os parâmetros como variáveis de configuração do sistema.',
        'Reconhecer os parâmetros nativos do SEI e suas descrições.',
        'Incluir novos parâmetros preenchendo os campos Nome e Valor.',
        'Alterar e excluir parâmetros, entendendo os efeitos da alteração de valores.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Os parâmetros são variáveis que permitem a realização de configurações no sistema. A tabela apresentada na apostila relaciona os parâmetros nativos do SEI e suas respectivas descrições, e constitui a base da funcionalidade "Parâmetros", podendo servir de apoio para a inclusão de novos parâmetros.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Fique atento!',
          text: 'Apenas usuários com o perfil "Informática" têm acesso ao item "Infra". Portanto, o usuário apenas com o perfil "Administrador" não tem acesso a essa funcionalidade.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Parâmetro mal alterado quebra funcionalidade',
          text: 'Cada parâmetro controla um comportamento específico do sistema. Alterar um valor sem conhecer seu efeito pode desabilitar uma funcionalidade, expor documentos externos ou interromper o envio de mensagens. Antes de alterar, leia a descrição do parâmetro e, quando possível, valide o resultado com o usuário solicitante e com a equipe de TI.',
        },
        {
          kind: 'table',
          heading: 'Parâmetros nativos do SEI — identificação e mensagens',
          columns: ['Nome', 'Descrição', 'Valor / observação'],
          rows: [
            [
              'ID_MODELO_BASE_CONHECIMENTO',
              'Modelo de documento utilizado pelo eDoc para geração de Bases de Conhecimento.',
              'Identificador do modelo.',
            ],
            [
              'ID_MODELO_INTERNO_BASE_CONHECIMENTO',
              'Modelo de documento utilizado pelo editor web para geração de Bases de Conhecimento.',
              'Identificador do modelo.',
            ],
            [
              'ID_SERIE_EMAIL',
              'ID do tipo de documento e-mail.',
              'Valor da correspondente serie.id_serie.',
            ],
            [
              'ID_UNIDADE_TESTE',
              'Identificador da unidade de teste do sistema.',
              'Valor da unidade.id_unidade. Essa unidade deve existir, pois é utilizada temporariamente em algumas chamadas de WebServices.',
            ],
            [
              'SEI_EMAIL_ADMINISTRADOR',
              'Endereço para envio de e-mails informando erro em agendamentos de tarefas do sistema.',
              'Mais de um e-mail pode ser informado utilizando vírgula como separador.',
            ],
            [
              'SEI_EMAIL_SISTEMA',
              'Endereço de e-mail utilizado para mensagens enviadas pelo sistema.',
              'Endereço válido.',
            ],
            [
              'SEI_MSG_AVISO_CADASTRO_USUARIO_EXTERNO',
              'Exibe um aviso para os usuários externos antes de efetuarem o cadastro no sistema.',
              'Se o campo estiver vazio, nenhuma mensagem será apresentada e o usuário será direcionado diretamente para o formulário de cadastro.',
            ],
            [
              'SEI_SUFIXO_EMAIL',
              'Sufixo adicionado em e-mails enviados pelo sistema.',
              'Corresponde ao valor da variável "sufixo_email".',
            ],
            [
              'SEI_TAM_MB_ANEXO_EMAIL',
              'Tamanho máximo dos anexos enviados por e-mail.',
              'Valor 10 (em Mb), que deve refletir o valor configurado no servidor de e-mail da instituição.',
            ],
            [
              'SEI_VERSAO',
              'Indica a versão instalada do sistema.',
              'Informado pelo próprio SEI.',
            ],
            [
              'VERSAO_MODULO_PEN',
              'Contém a versão do módulo do barramento de serviços do PEN.',
              'Exemplo de parâmetro acrescentado com a inclusão de módulos no sistema.',
            ],
          ],
        },
        {
          kind: 'table',
          heading: 'Parâmetros nativos do SEI — habilitações, máscaras e limites',
          columns: ['Nome', 'Descrição', 'Valores aceitos'],
          rows: [
            [
              'SEI_HABILITAR_ASSINATURA_DOCUMENTO_EXTERNO',
              'Habilita a assinatura de documentos externos.',
              '0 - desabilitado; 1 - habilitado somente para unidades de protocolo.',
            ],
            [
              'SEI_HABILITAR_GRAU_SIGILO',
              'Controla a definição do grau de sigilo dos processos.',
              '0 - desabilitado; 1 - opcional; 2 - obrigatório.',
            ],
            [
              'SEI_HABILITAR_HIPOTESE_LEGAL',
              'Controla o uso da hipótese legal nas hipóteses previstas.',
              '0 - desabilitado; 1 - opcional; 2 - obrigatório.',
            ],
            [
              'SEI_HABILITAR_MOVER_DOCUMENTO',
              'Habilita a movimentação de documentos.',
              '0 - desabilitado; 1 - habilitado somente para unidades de protocolo; 2 - habilitado para todos os usuários.',
            ],
            [
              'SEI_HABILITAR_NUMERO_PROCESSO_INFORMADO',
              'Ao gerar um processo, exibe um campo para digitação do número e da data de autuação do processo.',
              '0 - desabilitado; 1 - habilitado somente para unidades de protocolo; 2 - habilitado para todos os usuários.',
            ],
            [
              'SEI_HABILITAR_VALIDACAO_CPF_CERTIFICADO_DIGITAL',
              'Valida o CPF do certificado digital.',
              '0 - desabilitado; 1 - habilitado, sendo que o CPF do certificado deverá ser igual ao do usuário assinante.',
            ],
            [
              'SEI_HABILITAR_VALIDACAO_EXTENSAO_ARQUIVOS',
              'No material, apresentada junto ao parâmetro que recebe o valor do campo "sistema.id_sistema".',
              'Referente ao sistema SEI na base de dados do SIP.',
            ],
            [
              'SEI_MASCARA_ASSUNTO',
              'Máscara aplicada ao assunto.',
              'Definida pelo administrador.',
            ],
            [
              'SEI_MASCARA_NUMERO_PROCESSO_INFORMADO',
              'Máscara aplicada ao número de processo informado.',
              'Definida pelo administrador.',
            ],
            [
              'SEI_NUM_FATOR_DOWNLOAD_AUTOMATICO',
              'Permite limitar o download automático de arquivos externos de acordo com a velocidade de transferência de dados do usuário.',
              'Opcional. Se a velocidade for 150kb/s e o fator for 5, arquivos maiores que 750kb (150 x 5) exibirão um link em vez de iniciar o download automático. As velocidades são consultadas em "Infra" > "Velocidades de Transferência de Dados". Obs.: a velocidade só é atualizada quando o usuário visualizar um documento externo maior que 256kb.',
            ],
            [
              'SEI_NUM_MAX_DOCS_PASTA',
              'Informa o número de documentos para agrupamento em pastas na árvore de processo.',
              'Deixar vazio para não realizar agrupamento.',
            ],
            [
              'SEI_TAM_MB_DOC_EXTERNO',
              'Define o tamanho máximo do upload de arquivos para documentos externos.',
              'Valor 200 (em Mb). É necessário configurar também no php.ini as variáveis "post_max_size" 256M e "upload_max_filesize" 200M.',
            ],
            [
              'SEI_WS_NUM_MAX_DOCS',
              'Indica o número máximo de documentos que podem ser gerados simultaneamente em um processo.',
              'Através da API de WebServices do SEI.',
            ],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Ações de manutenção na funcionalidade "Parâmetros"',
          items: [
            'Inclusão de novo parâmetro — disponível pelo botão "Nova" da tela.',
            'Alteração de parâmetro — apenas o conteúdo informado no campo "Nome" pode ser alterado.',
            'Exclusão de parâmetro — disponível por linha e em lote.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Inclusão e alteração de parâmetro',
          items: [
            'Acesse a funcionalidade "Parâmetros" com perfil "Administrador" ou "Informática".',
            'Para incluir: acione o botão de cadastro e preencha os campos "Nome" e "Valor"; apenas o campo "Nome" é de preenchimento obrigatório.',
            'Para alterar: abra a tela "Alterar Parâmetro" e observe que somente o conteúdo do campo "Nome" pode ser alterado.',
            'Salve a operação e confirme o efeito da mudança com a área solicitante.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Exclusão de parâmetro',
          items: [
            'Primeira maneira: localize o parâmetro que se deseja excluir e clique em "Excluir Parâmetro", na coluna "Ações" à direita da tabela.',
            'Segunda maneira: selecione as checkboxes dos parâmetros que serão excluídos e clique no botão "Excluir", no menu superior à direita da tela.',
            'Aparece a mensagem de confirmação da exclusão; confirme a operação.',
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: 'Boa prática',
          text: 'Registre em um documento interno, antes de alterar um parâmetro nativo, o valor anterior. Um parâmetro nativo retorna ao estado anterior com um único ajuste, desde que a mudança tenha sido documentada.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Vídeo de apoio sobre a inclusão de parâmetro: https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo07video04.mp4',
        },
      ],
      keyPoints: [
        'Os parâmetros são variáveis que permitem a realização de configurações no sistema.',
        'A tabela de parâmetros nativos é a base da funcionalidade e apoia a inclusão de novos parâmetros.',
        'O acesso é restrito ao perfil "Informática", pois depende do menu "Infra".',
        'A inclusão usa os campos "Nome" e "Valor", e apenas "Nome" é obrigatório.',
        'Na alteração, somente o conteúdo do campo "Nome" pode ser alterado.',
        'A exclusão pode ser feita por linha ou em lote, sempre com mensagem de confirmação.',
      ],
      quiz: [
        {
          id: 'm7-q28',
          prompt: 'Como o material define os parâmetros?',
          options: [
            'Como registros obrigatórios de cada processo.',
            'Como variáveis que permitem a realização de configurações no sistema.',
            'Como relatórios de auditoria gerados automaticamente.',
            'Como credenciais de acesso a processos sigilosos.',
          ],
          correctIndex: 1,
          explanation:
            'Os parâmetros são variáveis que permitem a realização de configurações no sistema.',
        },
        {
          id: 'm7-q29',
          prompt: 'Quais campos compõem a tela de cadastro de um parâmetro e qual deles é obrigatório?',
          options: [
            'Órgão e Sistema; ambos obrigatórios.',
            'Nome e Valor; apenas o campo "Nome" é de preenchimento obrigatório.',
            'Nome e Valor; ambos são obrigatórios.',
            'Descrição e Recursos; apenas a Descrição é obrigatória.',
          ],
          correctIndex: 1,
          explanation:
            'A tela de cadastro de um parâmetro é composta pelos campos "Nome" e "Valor". Ressalta-se que apenas o campo "Nome" é de preenchimento obrigatório.',
        },
        {
          id: 'm7-q30',
          prompt: 'Na ação de alteração de parâmetro, o que pode ser alterado?',
          options: [
            'Qualquer campo da tela, sem restrição.',
            'Apenas o conteúdo informado no campo "Nome".',
            'Apenas o campo "Valor".',
            'O parâmetro não pode ser alterado depois de cadastrado.',
          ],
          correctIndex: 1,
          explanation:
            'No SEI é possível alterar parâmetros cadastrados anteriormente, porém apenas o conteúdo informado no campo "Nome" pode ser alterado.',
        },
        {
          id: 'm7-q31',
          prompt: 'Quais valores assume o parâmetro SEI_HABILITAR_MOVER_DOCUMENTO?',
          options: [
            '0 - desabilitado; 1 - habilitado somente para unidades de protocolo; 2 - habilitado para todos os usuários.',
            '0 - opcional; 1 - obrigatório; 2 - desabilitado.',
            'Apenas os valores 1 e 2.',
            'Apenas o valor 0 - desabilitado.',
          ],
          correctIndex: 0,
          explanation:
            'SEI_HABILITAR_MOVER_DOCUMENTO aceita 0 - desabilitado; 1 - habilitado somente para unidades de protocolo; 2 - habilitado para todos os usuários.',
        },
        {
          id: 'm7-q32',
          prompt: 'Qual a função do parâmetro SEI_NUM_FATOR_DOWNLOAD_AUTOMATICO?',
          options: [
            'Definir o número máximo de documentos por pasta na árvore do processo.',
            'Limitar o download automático de arquivos externos de acordo com a velocidade de transferência de dados do usuário.',
            'Habilitar a movimentação de documentos entre processos.',
            'Configurar o tamanho máximo do upload de documentos externos.',
          ],
          correctIndex: 1,
          explanation:
            'SEI_NUM_FATOR_DOWNLOAD_AUTOMATICO é opcional e permite limitar o download automático de arquivos externos conforme a velocidade de transferência. Se a velocidade for 150kb/s e o fator for 5, arquivos maiores que 750kb exibirão um link em vez de iniciar o download automático.',
        },
        {
          id: 'm7-q33',
          prompt: 'Por que a exclusão de parâmetros exige confirmação especial do administrador?',
          options: [
            'Porque a exclusão de um parâmetro pode desabilitar funcionalidades que dependem dele, afetando o comportamento do sistema.',
            'Porque a exclusão exige confirmação do órgão central do SIP.',
            'Porque o parâmetro excluído é sempre restaurado automaticamente.',
            'Porque a exclusão de parâmetro também exclui os logs do sistema.',
          ],
          correctIndex: 0,
          explanation:
            'Parâmetros controlam comportamentos específicos. Alterar ou excluir um parâmetro sem conhecer seu efeito pode desabilitar funcionalidades, expor documentos externos ou interromper o envio de mensagens, razão pela qual a ação deve ser criteriosa e confirmada.',
        },
      ],
    },
    {
      id: 'm7-sequencia',
      slug: 'sequencia',
      title: 'Funcionalidade Sequência',
      estimatedMinutes: 30,
      objectives: [
        'Explicar a finalidade da sequência de processos por unidade e ano.',
        'Relacionar a alteração da sequência à migração de processos analógicos para digital.',
        'Interpretar o NUP e o valor atual da sequência exibido na tela.',
        'Incluir, alterar, excluir e consultar sequências.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Cada unidade do órgão ou entidade tem sua própria sequência de processos, e essas sequências são diferentes para cada ano. A alteração da sequência de um processo é bastante útil em situações de migração da utilização de processo analógico para digital ao longo do ano no qual já existem processos criados e ainda em andamento.',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Objetivo da alteração da sequência',
          text: 'A funcionalidade permite que os processos criados tenham um Número Único de Protocolo (NUP) diferente daqueles criados anteriormente em formato não digital. Exemplo do material: a unidade "XPTO" tem como último processo digital aquele com final X; contudo, não é o último criado na unidade, pois antes da utilização do sistema foram criados processos em papel. Então a sequência foi atualizada para o valor X + 15, para contemplar os processos criados em formato analógico.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Fique atento!',
          text: 'Apenas usuários com o perfil "Informática" têm acesso ao menu "Infra". Portanto, o usuário com apenas perfil "Administrador" não tem acesso a essa funcionalidade.',
        },
        {
          kind: 'bullets',
          heading: 'Sequências presentes no sistema',
          items: [
            'A sequência de numeração de processos de cada unidade.',
            'A sequência de quantidade de usuários externos.',
            'A sequência de quantidade de usuários internos.',
          ],
        },
        {
          kind: 'table',
          heading: 'Campos da tela de Sequência',
          columns: ['Campo', 'O que significa', 'Preenchimento'],
          rows: [
            ['Nome', 'Descrição da sequência.', 'Obrigatório.'],
            ['Incremento', 'Como o valor da sequência é incrementado a cada ação, por exemplo +1, +2.', 'Obrigatório.'],
            ['Valor Atual', 'Valor atual da sequência.', 'Obrigatório.'],
            ['Valor Máximo', 'Valor máximo a ser alcançado pela sequência.', 'Obrigatório.'],
          ],
        },
        {
          kind: 'paragraph',
          text: 'Entre as sequências presentes no sistema está, por exemplo, a de numeração de processos de cada unidade. A unidade de código "82667" (Teste_MP) tem duas sequências: "seq_2018_uni_sei_82667" e "seq_2019_uni_sei_82667". O número apresentado na coluna "Valor Atual" representa a quantidade de processos abertos na unidade com o começo do NUP 82667, sendo a primeira em 2018 e a segunda em 2019. No primeiro caso, o NUP do processo é 82667.000009/2018-89 e o do segundo caso é 82667.000004/2019-37.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Observação importante sobre o valor da sequência',
          text: 'Caso o código do SEI da unidade protocolizadora sofra alguma alteração durante o ano, o valor da sequência não representa a quantidade de processos gerados pela unidade, e sim a quantidade de processos com aquele código. Na leitura da tela, esse detalhe evita conclusões erradas sobre a produção da unidade.',
        },
        {
          kind: 'paragraph',
          text: 'As informações da quantidade de processos podem ser ratificadas por meio da funcionalidade "Estatísticas da Unidade". Outro exemplo é o ID do último sistema cadastrado no SEI, mantido pela sequência "usuario_sistema": seu valor é 8, conforme a imagem apresentada na apostila. Essa informação é ratificada pelo caminho Administration > "Sistemas" > "Listar".',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Risco de numeração',
          text: 'A alteração de uma sequência afeta a numeração de todos os processos gerados pela unidade a partir daquele momento. Valor atual incorreto pode gerar NUP duplicado ou sobrepor processos existentes, comprometendo a unicidade do protocolo. Altere apenas com registro do valor anterior e com o NUP do último processo como referência.',
        },
        {
          kind: 'steps',
          heading: 'Manutenção de Sequências',
          items: [
            'As ações de alteração, exclusão e consulta estão disponíveis na coluna "Ações", do lado direito da tabela; a inclusão é feita pelo botão "Nova", no canto superior direito da tela.',
            'Para incluir: clique em "Nova" e preencha os campos "Nome", "Incremento", "Valor Atual" e "Valor Máximo", todos de preenchimento obrigatório; salve a operação.',
            'Para alterar: selecione a sequência e clique no ícone "Alterar Sequência", na coluna "Ações"; abre-se uma nova tela com os campos "Nome", "Incremento", "Valor Atual" e "Valor Máximo", todos habilitados para alteração.',
            'Para excluir: localize a sequência e clique em "Excluir Sequência", na coluna "Ações", ou selecione as checkboxes e clique no botão "Excluir" no menu superior; em seguida aparece a mensagem de confirmação.',
            'Para consultar: selecione a sequência e clique no ícone "Consultar Sequência", na coluna "Ações"; os campos abrem-se apenas para visualização, sem possibilidade de edição.',
          ],
        },
        {
          kind: 'definitions',
          heading: 'Vocabulário da sequência',
          items: [
            { term: 'NUP', text: 'Número Único de Protocolo que identifica o processo, formado pelo código da unidade, pelo número sequencial, pelo ano e pelos dígitos verificadores, como 82667.000009/2018-89.' },
            { term: 'Sequência', text: 'Contador individual de cada unidade, reiniciada a cada ano, que atribui a numeração aos novos processos.' },
            { term: 'Valor Atual', text: 'Número apresentado na tela que representa a quantidade de processos abertos na unidade com o começo do NUP correspondente.' },
            { term: 'Incremento', text: 'Quantidade somada à sequência a cada ação, por exemplo +1 ou +2.' },
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Vídeo de apoio sobre a manutenção de Sequências: https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo07video05.mp4',
        },
      ],
      keyPoints: [
        'Cada unidade tem sua própria sequência de processos, e ela é diferente para cada ano.',
        'A alteração da sequência é útil na migração do processo analógico para o digital.',
        'Assim, os processos digitais recebem NUP diferente daqueles criados em formato não digital.',
        'Entre as sequências estão a de numeração de processos, a de usuários externos e a de usuários internos.',
        'A tela apresenta os campos Nome, Incremento, Valor Atual e Valor Máximo, todos obrigatórios na inclusão.',
        'Se o código da unidade mudar no ano, o valor da sequência passa a contar os processos daquele código.',
      ],
      quiz: [
        {
          id: 'm7-q34',
          prompt: 'Qual a finalidade da alteração da sequência de uma unidade?',
          options: [
            'Apagar processos antigos da unidade.',
            'Permitir que os processos criados tenham um NUP diferente daqueles criados anteriormente em formato não digital.',
            'Alterar o código do SEI da unidade protocolizadora.',
            'Habilitar a criação de usuários externos.',
          ],
          correctIndex: 1,
          explanation:
            'A alteração da sequência é útil na migração da utilização de processo analógico para digital e permite que os processos criados tenham um Número Único de Protocolo diferente daqueles criados anteriormente em formato não digital.',
        },
        {
          id: 'm7-q35',
          prompt: 'Quais campos compõem a tela de inclusão de uma sequência?',
          options: [
            'Nome, Descrição e Valor Atual.',
            'Nome, Incremento, Valor Atual e Valor Máximo.',
            'Órgão, Sistema, Descrição e Recursos.',
            'Unidades de Controle, Órgãos Controlados e Tipos de Processo.',
          ],
          correctIndex: 1,
          explanation:
            'A tela de inclusão de uma sequência é composta pelos campos "Nome", "Incremento", "Valor Atual" e "Valor Máximo", todos de preenchimento obrigatório.',
        },
        {
          id: 'm7-q36',
          prompt: 'Na exemplo da unidade "XPTO", por que a sequência foi atualizada para o valor X + 15?',
          options: [
            'Porque a unidade criou 15 processos a mais que o limite do sistema.',
            'Para contemplar os processos criados em formato analógico antes da utilização do sistema.',
            'Para corrigir um erro de digitação no NUP do último processo.',
            'Para permitir o acesso de usuários externos à unidade.',
          ],
          correctIndex: 1,
          explanation:
            'O processo com final X não era o último criado na unidade, pois antes da utilização do sistema foram criados processos em papel. A sequência foi atualizada para X + 15 com o objetivo de contemplar os processos criados em formato analógico.',
        },
        {
          id: 'm7-q37',
          prompt: 'O que representa o número exibido na coluna "Valor Atual" da tela de Sequências?',
          options: [
            'A quantidade total de documentos da unidade no ano.',
            'A quantidade de processos abertos na unidade com o começo do NUP correspondente, no respectivo ano.',
            'A quantidade de usuários externos cadastrados.',
            'O número de sistemas cadastrados no SEI.',
          ],
          correctIndex: 1,
          explanation:
            'O número apresentado na coluna "Valor Atual" representa a quantidade de processos abertos na unidade com o começo do NUP informado, sendo as sequências distintas por ano, como "seq_2018_uni_sei_82667" e "seq_2019_uni_sei_82667".',
        },
        {
          id: 'm7-q38',
          prompt: 'Qual observação a apostila faz sobre a alteração do código do SEI da unidade durante o ano?',
          options: [
            'A sequência é zerada automaticamente.',
            'O valor da sequência passa a representar a quantidade de processos com aquele código, e não a quantidade de processos gerados pela unidade.',
            'É obrigatória a criação de uma nova sequência por ano.',
            'O valor atual passa a ser idêntico ao valor máximo.',
          ],
          correctIndex: 1,
          explanation:
            'A apostila observa que, caso o código do SEI da unidade protocolizadora sofra alguma alteração durante o ano, o valor da sequência não representa a quantidade de processos gerados pela unidade, e sim a quantidade de processos com aquele código.',
        },
        {
          id: 'm7-q39',
          prompt: 'Na ação "Consultar Sequência", é possível editar os campos apresentados?',
          options: [
            'Sim, todos os campos ficam habilitados para edição.',
            'Sim, apenas o campo "Nome" pode ser editado.',
            'Não. Abre-se uma nova tela com os campos "Nome", "Incremento", "Valor Atual" e "Valor Máximo", porém não é possível editá-los, somente visualizá-los.',
            'É possível editar apenas quando a sequência ainda não tiver sido utilizada.',
          ],
          correctIndex: 2,
          explanation:
            'Ao consultar, abre-se uma nova tela com os campos "Nome", "Incremento", "Valor Atual" e "Valor Máximo", porém não é possível editá-los, somente visualizá-los.',
        },
      ],
    },
    {
      id: 'm7-relatorios',
      slug: 'relatorios',
      title: 'Funcionalidade Relatórios',
      estimatedMinutes: 30,
      objectives: [
        'Descrever o objetivo da funcionalidade "Relatórios" e os dois relatórios disponíveis.',
        'Gerar o relatório de contatos temporários e utilizar seus botões e campos.',
        'Substituir contatos temporários repetidos por um único contato.',
        'Consultar o inventário de processos sigilosos sem credencial ativa.',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'A funcionalidade "Relatórios" tem como objetivo consolidar os dados do sistema em um relatório operacional, com a finalidade de reportar determinados comportamentos do sistema. Atualmente, há dois tipos de relatórios: o de contatos temporários e o de processos sigilosos. Para acessar essa funcionalidade, é necessário selecionar o item "Relatórios", localizado no menu principal.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Pré-requisito para gerar relatórios',
          text: 'Os relatórios do SEI somente podem ser gerados após o cadastramento das regras relacionadas às ações no Sistema de Permissões (SIP). Sem as regras de auditoria correspondentes, os dados não estão disponíveis para consolidação.',
        },
        {
          kind: 'table',
          heading: 'Relatórios disponíveis na funcionalidade "Relatórios"',
          columns: ['Relatório', 'Objetivo', 'Recursos de uso'],
          rows: [
            [
              'Relatório de Contatos Temporários',
              'Consolida os contatos temporários cadastrados durante o preenchimento de metadados de documentos ou de processos, tais como interessado e remetente.',
              'Botões "Pesquisar", "Substituir", "Excluir", "Desativar" e "Imprimir"; campos "Texto para Pesquisa" e "Contato para Substituição"; ações de alterar, desativar e excluir na coluna "Ações".',
            ],
            [
              'Relatório de Processos Sigilosos',
              'Consolida todos os processos criados com o nível de acesso "Sigiloso".',
              'Tela "Inventário de Processos Sigilosos sem Credencial Ativa", com o campo "Órgão" e a lista de processos; é permitido apenas filtrar os processos por órgão.',
            ],
          ],
        },
        {
          kind: 'bullets',
          heading: 'Contatos temporários: o que são',
          items: [
            'São os contatos cadastrados durante o preenchimento de metadados de documentos ou de processos.',
            'Exemplos citados no material: interessado e remetente.',
            'Novos contatos são cadastrados na criação de processos e de documentos.',
            'Muitas vezes esses contatos são gerados sem necessidade e sobrecarregam o banco de dados.',
            'Neste módulo, o foco é a geração do relatório operacional e a substituição de contatos; a manutenção de contatos não é detalhada.',
          ],
        },
        {
          kind: 'steps',
          heading: 'Gerando o relatório de contatos temporários',
          items: [
            'No menu principal, selecione "Relatórios" e acesse o relatório de contatos temporários.',
            'Informe o campo "Texto para Pesquisa", se desejar restringir os resultados.',
            'Use os botões "Pesquisar", "Substituir", "Excluir", "Desativar" e "Imprimir" conforme a necessidade.',
            'Na coluna "Ações", à direita da tabela, o usuário com os perfis "Administrador" e "Informática" pode alterar, desativar e excluir esses contatos.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Por que substituir contatos',
          text: 'A substituição de contatos temporários é importante na administração do SEI, visto que novos contatos são cadastrados na criação de processos e de documentos. Muitas vezes esses contatos são gerados sem necessidade e sobrecarregam o banco de dados. Dessa forma, possibilita que contatos repetidos sejam agrupados em apenas um.',
        },
        {
          kind: 'steps',
          heading: 'Substituindo contatos temporários',
          items: [
            'Preencha o campo "Contato para Substituição"; o sistema retorna os resultados de acordo com o seu preenchimento.',
            'Selecione o contato desejado para alteração.',
            'Clique no botão "Substituir", localizado no canto superior à direita da tela.',
            'Aparece uma mensagem de confirmação da substituição.',
            'Clique no botão "OK" para confirmar a operação ou no botão "Cancelar" para desistir.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Exemplo do material: ao selecionar "João P. S." e preencher o campo "Contato para Substituição" com "João Pires Silva", aparecerá a mensagem de confirmação e, se o usuário clicar no botão "OK", confirmará a ação e o contato "João P. S." será atualizado para "João Pires Silva". Ressalta-se que a substituição não é realizada apenas entre contatos temporários: pode-se também substituir por um usuário ou outro tipo de contato.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Confirme a substituição',
          text: 'A substituição é definitiva após o clique em "OK": o contato antigo passa a ser substituído em todos os processos e documentos em que foi utilizado. Confira o contato de destino antes de confirmar, pois não há, na tela descrita, opção de desfazer a operação.',
        },
        {
          kind: 'steps',
          heading: 'Gerando o inventário de processos sigilosos',
          items: [
            'No menu principal, selecione "Relatórios" e acesse o relatório de processos sigilosos.',
            'Abri-se a tela "Inventário de Processos Sigilosos sem Credencial Ativa".',
            'Informe o campo "Órgão" para filtrar os processos.',
            'Analise a lista apresentada. Nesse relatório é permitido apenas filtrar os processos por órgão.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Manipulação restrita',
          text: 'O inventário reúne processos com nível de acesso "Sigiloso" e considera aqueles sem credencial ativa. O acesso a processos sigilosos ocorre exclusivamente por meio de credenciais de acesso; trate os dados gerados com a mesma restrição de sigilo e compartilhe-os apenas com quem tem competência legal.',
        },
        {
          kind: 'definitions',
          heading: 'Vocabulário dos relatórios',
          items: [
            { term: 'Contato temporário', text: 'Contato cadastrado durante o preenchimento de metadados de documentos ou de processos, como interessado e remetente.' },
            { term: 'Substituição', text: 'Ação que atualiza um contato repetido para outro contato, usuário ou tipo de contato, com o objetivo de agrupar registros duplicados.' },
            { term: 'Inventário de Processos Sigilosos sem Credencial Ativa', text: 'Relatório que consolida todos os processos criados com o nível de acesso "Sigiloso", com filtro por órgão.' },
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Reforçando o aprendizado',
          text: 'Vídeo de apoio sobre o relatório de contatos temporários: https://cdn.evg.gov.br/cursos/304_EVG/videos/modulo07video06.mp4',
        },
      ],
      keyPoints: [
        'A funcionalidade "Relatórios" consolida os dados do sistema em um relatório operacional.',
        'Há dois relatórios: o de contatos temporários e o de processos sigilosos.',
        'Os relatórios só podem ser gerados após o cadastramento das regras no SIP.',
        'O relatório de contatos temporários tem os botões Pesquisar, Substituir, Excluir, Desativar e Imprimir.',
        'A substituição pode trocar um contato temporário por um usuário ou outro tipo de contato.',
        'O inventário de processos sigilosos permite apenas a filtragem por órgão.',
      ],
      quiz: [
        {
          id: 'm7-q40',
          prompt: 'Qual é o objetivo da funcionalidade "Relatórios"?',
          options: [
            'Cadastrar regras de auditoria no SIP.',
            'Configurar variáveis de comportamento do sistema.',
            'Consolidar os dados do sistema em um relatório operacional, reportando determinados comportamentos do sistema.',
            'Registrar as ações dos usuários no passado para auditoria.',
          ],
          correctIndex: 2,
          explanation:
            'A funcionalidade "Relatórios" tem como objetivo consolidar os dados do sistema em um relatório operacional, com a finalidade de reportar determinados comportamentos do sistema.',
        },
        {
          id: 'm7-q41',
          prompt: 'Quais são os dois relatórios disponíveis na funcionalidade "Relatórios"?',
          options: [
            'Relatório de logs de erro e relatório de avisos.',
            'Relatório de contatos temporários e relatório de processos sigilosos.',
            'Relatório de unidades de controle e relatório de órgãos controlados.',
            'Relatório de processos e relatório de documentos.',
          ],
          correctIndex: 1,
          explanation:
            'Atualmente, há dois tipos de relatórios: o de contatos temporários e o de processos sigilosos.',
        },
        {
          id: 'm7-q42',
          prompt: 'Qual a condição para que os relatórios do SEI possam ser gerados?',
          options: [
            'Que o usuário tenha o perfil "Auditor".',
            'Que o serviço de e-mail do sistema esteja configurado.',
            'Que as regras relacionadas às ações estejam cadastradas no Sistema de Permissões (SIP).',
            'Que a unidade tenha sequência de processos para o ano corrente.',
          ],
          correctIndex: 2,
          explanation:
            'Vale ressaltar que os relatórios do SEI somente podem ser gerados após o cadastramento das regras relacionadas às ações no Sistema de Permissões (SIP).',
        },
        {
          id: 'm7-q43',
          prompt: 'Quais botões estão disponíveis na tela "Relatório de Contatos Temporários"?',
          options: [
            'Pesquisar, Substituir, Excluir, Desativar e Imprimir.',
            'Novo, Alterar e Salvar.',
            'Pesquisar, Filtro e Exportar.',
            'Imprimir e Consultar apenas.',
          ],
          correctIndex: 0,
          explanation:
            'A tela "Relatório de Contatos Temporários" apresenta os botões "Pesquisar", "Substituir", "Excluir", "Desativar" e "Imprimir"; os campos "Texto para Pesquisa" e "Contato para Substituição"; e, em seguida, a lista dos contatos temporários.',
        },
        {
          id: 'm7-q44',
          prompt: 'Qual a utilidade da substituição de contatos temporários?',
          options: [
            'Excluir todos os contatos do banco de dados.',
            'Agrupar contatos repetidos em apenas um, evitando o sobrecargamento do banco de dados.',
            'Alterar o nível de acesso dos processos relacionados ao contato.',
            'Gerar automaticamente a credencial de acesso do contato.',
          ],
          correctIndex: 1,
          explanation:
            'Muitas vezes os contatos são gerados sem necessidade e sobrecarregam o banco de dados. Dessa forma, a substituição possibilita que contatos repetidos sejam agrupados em apenas um.',
        },
        {
          id: 'm7-q45',
          prompt: 'Como o filtro funciona no relatório de processos sigilosos?',
          options: [
            'É permitido filtrar apenas por usuário.',
            'É permitido filtrar por órgão, data e usuário.',
            'Nesse relatório é permitido apenas filtrar os processos por órgão.',
            'Não há nenhum filtro disponível nesse relatório.',
          ],
          correctIndex: 2,
          explanation:
            'A tela "Inventário de Processos Sigilosos sem Credencial Ativa" apresenta o campo "Órgão" e uma lista de processos, e nesse relatório é permitido apenas filtrar os processos por órgão.',
        },
      ],
    },
  ],
};
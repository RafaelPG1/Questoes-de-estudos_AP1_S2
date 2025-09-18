// Configuração do quiz de Sistemas Operacionais
const originalQuizData = [
  {
    subject: "Questões 1-10 (Introdução aos Sistemas Operacionais)",
    questions: [
      {
        question: "Um Sistema Operacional (SO) é definido como um programa que faz a interface entre o usuário/aplicativos e o hardware, atuando como uma camada de software. Qual das alternativas NÃO representa uma função principal do SO?",
        options: [
          "Gerenciamento de hardware (CPU, memória, dispositivos de E/S)",
          "Compilação de códigos-fonte em linguagens de programação",
          "Gerenciamento do sistema de arquivos",
          "Execução de processos"
        ],
        answer: 1,
        feedback: "Resposta correta: B) O SO não compila códigos, essa é função de compiladores específicos. O sistema operacional gerencia recursos e fornece interface, mas a compilação é feita por ferramentas específicas como GCC, Visual Studio, etc."
      },
      {
        question: "Durante o processo de inicialização do computador, qual é a sequência CORRETA das etapas que ocorrem?",
        options: [
          "Boot → POST → Carregamento do SO → Uso da BIOS",
          "POST → Boot → Carregamento do SO → Uso da BIOS",
          "POST → Boot → Uso da BIOS → Carregamento do SO",
          "Uso da BIOS → POST → Boot → Carregamento do SO"
        ],
        answer: 2,
        feedback: "Resposta correta: C) A sequência é POST (autoteste), Boot (inicialização), uso da BIOS e carregamento do SO. POST verifica se o hardware está funcionando, Boot inicia o processo de inicialização, a BIOS fornece instruções básicas e por fim o SO é carregado na memória."
      },
      {
        question: "O Kernel é a parte central do sistema operacional que fica residente na memória. Qual das seguintes afirmações sobre o Kernel é INCORRETA?",
        options: [
          "Carrega outros programas conforme necessário",
          "Gerencia os recursos de forma invisível para o usuário",
          "É sempre visível na interface gráfica do usuário",
          "É responsável pelo gerenciamento básico do sistema"
        ],
        answer: 2,
        feedback: "Resposta correta: C) O Kernel opera de forma invisível, sem interface gráfica direta com o usuário. O kernel é o núcleo do sistema operacional que gerencia recursos de baixo nível como CPU, memória e dispositivos, mas sua operação é transparente ao usuário final."
      },
      {
        question: "Em relação às categorias de sistemas operacionais, um sistema que permite a execução de vários programas simultaneamente é classificado como:",
        options: [
          "Monousuário",
          "Multitarefa",
          "Multiprocessador",
          "Monotarefa"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Multitarefa permite execução simultânea de múltiplos programas. Isso é diferente de multiprocessador (várias CPUs) ou multiusuário (vários usuários). A multitarefa cria a ilusão de execução simultânea através do compartilhamento de tempo da CPU."
      },
      {
        question: "O Linux é conhecido por sua estabilidade e código-fonte aberto. Qual das seguintes características NÃO se aplica ao Linux?",
        options: [
          "Licença GPL que permite modificação e redistribuição",
          "Diversas distribuições como Ubuntu, Fedora e Debian",
          "Interface exclusivamente gráfica, sem linha de comando",
          "Base de softwares livres como KDE, GNOME e Apache"
        ],
        answer: 2,
        feedback: "Resposta correta: C) O Linux possui tanto interface de linha de comando quanto interfaces gráficas. Na verdade, a linha de comando (CLI) é uma das características mais fortes do Linux, oferecendo controle total do sistema, e pode ser usada independentemente da interface gráfica."
      },
      {
        question: "A evolução dos sistemas operacionais acompanhou o desenvolvimento do hardware. A 3ª geração (1965-1980) foi caracterizada principalmente por:",
        options: [
          "Computadores de válvulas sem SO",
          "Sistemas de processamento em lote (batch)",
          "Multiprogramação e tempo compartilhado",
          "Sistemas pessoais e distribuídos"
        ],
        answer: 2,
        feedback: "Resposta correta: C) A 3ª geração introduziu multiprogramação e tempo compartilhado. Isso permitiu que múltiplos programas ficassem na memória simultaneamente e que a CPU fosse compartilhada entre usuários, melhorando significativamente a eficiência dos sistemas."
      },
      {
        question: "As chamadas de sistema (System Calls) são interfaces entre programas de aplicação e os serviços do SO. Qual das seguintes APIs é específica para sistemas Windows?",
        options: [
          "POSIX API",
          "Java API",
          "Windows API",
          "GNU API"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Windows API é específica para sistemas operacionais Windows. POSIX API é padrão Unix/Linux, Java API funciona na JVM independente do SO, e GNU API é relacionada aos softwares livres GNU."
      },
      {
        question: "Um programador precisa desenvolver uma aplicação que copie o conteúdo de um arquivo para outro. Quais tipos de system calls serão necessárias?",
        options: [
          "Apenas controle de processos",
          "Apenas gerenciamento de dispositivos",
          "Gerenciamento de arquivos (abrir, ler, gravar)",
          "Apenas comunicações"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Para copiar arquivos são necessárias system calls de gerenciamento de arquivos. Especificamente: open() para abrir os arquivos origem e destino, read() para ler dados do arquivo origem, write() para gravar no destino, e close() para fechar os arquivos."
      },
      {
        question: "Entre os serviços do sistema operacional, qual é responsável por registrar estatísticas como uso de CPU, memória disponível e histórico de operações?",
        options: [
          "Detecção de erros",
          "Contabilização",
          "Proteção e segurança",
          "Alocação de recursos"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Contabilização registra estatísticas e histórico de uso do sistema. Esse serviço coleta dados sobre consumo de recursos, tempo de CPU, acessos realizados, permitindo monitoramento, auditoria e cobrança por uso em sistemas multiusuário."
      },
      {
        question: "A comunicação entre processos pode ocorrer através de memória compartilhada ou troca de mensagens. Qual das alternativas representa uma vantagem da comunicação via memória compartilhada?",
        options: [
          "Maior segurança entre processos",
          "Implementação mais simples",
          "Velocidade de acesso aos dados",
          "Menor necessidade de sincronização"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Memória compartilhada oferece acesso mais rápido aos dados. Como ambos os processos acessam diretamente a mesma região de memória, não há overhead de copiar dados entre processos, como acontece na troca de mensagens."
      }
    ]
  },
  {
    subject: "Questões 11-20 (Gerenciamento de Processos)",
    questions: [
      {
        question: "Um processo é definido como um programa em execução. Qual dos componentes a seguir NÃO faz parte da estrutura de um processo?",
        options: [
          "Contador de programa",
          "Pilha (stack)",
          "Código-fonte original",
          "Heap"
        ],
        answer: 2,
        feedback: "Resposta correta: C) O código-fonte não faz parte do processo em execução, apenas o código executável. O processo contém o código compilado carregado na memória, junto com contador de programa (próxima instrução), pilha (dados temporários) e heap (memória dinâmica)."
      },
      {
        question: "Os estados de um processo representam sua situação atual no sistema. Se um processo está aguardando o término de uma operação de I/O, ele se encontra no estado:",
        options: [
          "Novo",
          "Em execução",
          "Em espera (bloqueado)",
          "Pronto"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Processo aguardando I/O fica em estado de espera ou bloqueado. Durante operações de entrada/saída, o processo não pode continuar executando até que a operação seja concluída, então é colocado em estado de espera para liberar a CPU para outros processos."
      },
      {
        question: "O PCB (Process Control Block) contém informações essenciais sobre cada processo. Qual informação NÃO é tipicamente armazenada no PCB?",
        options: [
          "Estado do processo",
          "Contador de programa",
          "Código-fonte do programa",
          "Registradores da CPU"
        ],
        answer: 2,
        feedback: "Resposta correta: C) O PCB não armazena código-fonte, apenas informações de controle do processo. O PCB contém dados necessários para gerenciar o processo como estado atual, registradores, informações de escalonamento e recursos alocados, mas não o código do programa."
      },
      {
        question: "Em sistemas modernos, múltiplas threads podem existir dentro de um processo. A principal vantagem das threads é:",
        options: [
          "Maior segurança entre processos",
          "Execução concorrente de tarefas dentro do mesmo processo",
          "Menor uso de memória",
          "Eliminação da necessidade de sincronização"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Threads permitem execução concorrente de tarefas dentro do mesmo processo. As threads compartilham o espaço de endereçamento do processo mas têm suas próprias pilhas e contadores, permitindo paralelismo real em sistemas multicore."
      },
      {
        question: "No modelo de comunicação por troca de mensagens, as operações básicas são send(message) e receive(message). Quando o envio é com bloqueio (síncrono), o emissor:",
        options: [
          "Continua executando imediatamente após enviar",
          "Espera até que a mensagem seja recebida",
          "Envia múltiplas mensagens simultaneamente",
          "Cancela o envio automaticamente"
        ],
        answer: 1,
        feedback: "Resposta correta: B) No envio síncrono, o emissor espera confirmação do recebimento. Isso garante que a mensagem foi entregue mas pode tornar o sistema mais lento, diferente do envio assíncrono onde o emissor continua executando imediatamente."
      },
      {
        question: "Uma empresa precisa implementar comunicação entre processos cliente-servidor em rede. Qual mecanismo é mais adequado para essa situação?",
        options: [
          "Pipes locais",
          "Memória compartilhada",
          "Sockets",
          "Variáveis globais"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Sockets são ideais para comunicação cliente-servidor em rede. Sockets permitem comunicação entre processos em máquinas diferentes através da rede, enquanto pipes e memória compartilhada funcionam apenas localmente."
      },
      {
        question: "Condições de corrida (race conditions) ocorrem quando dois ou mais processos acessam concorrentemente um mesmo recurso. Para evitar esse problema, é necessário implementar:",
        options: [
          "Multiprogramação",
          "Exclusão mútua",
          "Escalonamento circular",
          "Alocação dinâmica"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Exclusão mútua garante que apenas um processo acesse o recurso por vez. Isso previne que processos interfiram uns nos outros ao modificar dados compartilhados, evitando resultados inconsistentes ou corrupção de dados."
      },
      {
        question: "O algoritmo de Peterson é uma solução de software para exclusão mútua entre dois processos. Ele utiliza duas variáveis compartilhadas:",
        options: [
          "lock e unlock",
          "turn e flag[2]",
          "wait e signal",
          "mutex e semaphore"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Peterson usa as variáveis turn (indica a vez) e flag[2] (indica se processo está pronto). A variável 'turn' determina qual processo tem prioridade, e 'flag' indica se um processo deseja entrar na região crítica."
      },
      {
        question: "TSL (Test-and-Set-and-Lock) é uma solução baseada em hardware para sincronização. Sua principal característica é:",
        options: [
          "Executar operações de forma não-atômica",
          "Testar e alterar uma variável lock de forma atômica",
          "Funcionar apenas em sistemas monousuário",
          "Eliminar a necessidade de variáveis compartilhadas"
        ],
        answer: 1,
        feedback: "Resposta correta: B) TSL testa e altera a variável lock atomicamente, evitando condições de corrida. A operação atômica significa que não pode ser interrompida, garantindo que apenas um processo consiga 'pegar' o lock por vez."
      },
      {
        question: "Semáforos foram propostos por Edsger Dijkstra em 1965. As operações atômicas de um semáforo são:",
        options: [
          "lock() e unlock()",
          "enter() e exit()",
          "wait() e signal() [ou P e V]",
          "start() e stop()"
        ],
        answer: 2,
        feedback: "Resposta correta: C) As operações básicas do semáforo são wait/P (decrementa) e signal/V (incrementa). Wait() decrementa o semáforo e bloqueia se necessário, signal() incrementa e pode acordar processos bloqueados. P e V vêm do holandês 'proberen' e 'verhogen'."
      }
    ]
  },
  {
    subject: "Questões 21-30 (Escalonamento de Processos)",
    questions: [
      {
        question: "Monitores são estruturas de alto nível para sincronização. Qual das seguintes é uma vantagem dos monitores em relação aos semáforos?",
        options: [
          "Maior flexibilidade de programação",
          "Exclusão mútua automática e menor propensão a erros",
          "Melhor desempenho em sistemas distribuídos",
          "Não necessitam de variáveis de condição"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Monitores oferecem exclusão mútua automática e são menos propensos a erros de programação. Diferente dos semáforos, onde o programador deve explicitamente fazer wait() e signal(), monitores garantem que apenas uma thread execute por vez dentro do monitor."
      },
      {
        question: "O escalonamento da CPU tem como objetivo alternar a CPU entre processos para manter o sistema produtivo. Processos que fazem uso intensivo da CPU são classificados como:",
        options: [
          "I/O-bound",
          "CPU-bound",
          "Memory-bound",
          "Network-bound"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Processos CPU-bound fazem uso intensivo do processador. Eles passam a maior parte do tempo realizando cálculos e processamento, diferente dos I/O-bound que gastam mais tempo aguardando operações de entrada e saída."
      },
      {
        question: "No algoritmo FCFS (First Come, First Served), o principal problema é o \"convoy effect\". Este problema ocorre quando:",
        options: [
          "Processos curtos executam antes dos longos",
          "Processos longos atrasam a execução dos curtos",
          "A CPU fica ociosa frequentemente",
          "Múltiplos processos executam simultaneamente"
        ],
        answer: 1,
        feedback: "Resposta correta: B) No FCFS, processos longos podem atrasar significativamente os processos curtos. Como não há preempção, um processo longo que chega primeiro força todos os processos seguintes (mesmo os mais curtos) a esperar até sua conclusão."
      },
      {
        question: "O algoritmo SJF (Shortest Job First) é não preemptivo e seleciona o processo com menor tempo de execução. Para calcular o Tempo de Espera do Processo (TEP), utiliza-se a fórmula TEP = FP – CP – TAM, onde:",
        options: [
          "FP = Final do Processo, CP = Chegada do Processo, TAM = Tamanho do Processo",
          "FP = Fim da Partição, CP = Criação do Processo, TAM = Tamanho da Memória",
          "FP = Fila de Prontos, CP = CPU Principal, TAM = Tempo de Acesso à Memória",
          "FP = Função Principal, CP = Código do Programa, TAM = Tamanho do Arquivo"
        ],
        answer: 0,
        feedback: "Resposta correta: A) TEP é calculado subtraindo do final do processo sua chegada e seu tamanho. Esta fórmula calcula quanto tempo o processo ficou esperando na fila, excluindo seu tempo real de execução."
      },
      {
        question: "SRTN (Shortest Remaining Time Next) é a versão preemptiva do SJF. Comparado ao SJF, o SRTN tem:",
        options: [
          "Menor overhead e melhor tempo de resposta",
          "Maior overhead, mas melhor adaptação a chegadas dinâmicas",
          "Mesmo overhead e mesma performance",
          "Menor overhead, mas pior tempo de resposta"
        ],
        answer: 1,
        feedback: "Resposta correta: B) SRTN tem mais overhead por trocas de contexto, mas se adapta melhor a chegadas dinâmicas. Como pode interromper processos quando chega um com menor tempo restante, oferece melhor tempo de resposta para processos curtos, mas requer mais recursos para gerenciar as preempções."
      },
      {
        question: "No algoritmo Round Robin, cada processo recebe um tempo fixo chamado quantum. Se o quantum for muito pequeno, o resultado será:",
        options: [
          "Melhor tempo de resposta e menor overhead",
          "Pior tempo de resposta e menor overhead",
          "Melhor tempo de resposta, mas maior overhead",
          "Pior tempo de resposta e maior overhead"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Quantum pequeno melhora o tempo de resposta, mas aumenta o overhead por mais trocas de contexto. Com quantum muito pequeno, os processos alternam rapidamente (melhor resposta), mas o sistema gasta muito tempo trocando de contexto entre processos."
      },
      {
        question: "No escalonamento por prioridades, o problema de starvation (inanição) refere-se a:",
        options: [
          "Processos de alta prioridade executarem muito rapidamente",
          "Processos de baixa prioridade nunca serem executados",
          "O sistema ficar sobrecarregado com muitos processos",
          "A CPU ficar ociosa por longos períodos"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Starvation ocorre quando processos de baixa prioridade nunca conseguem executar. Se continuamente chegam processos de alta prioridade, os de baixa prioridade podem esperar indefinidamente, sendo 'deixados de lado' pelo escalonador."
      },
      {
        question: "Uma empresa tem processos críticos que precisam de resposta garantida em tempo determinado. O tipo de escalonamento mais adequado seria:",
        options: [
          "FCFS devido à simplicidade",
          "Round Robin com quantum pequeno",
          "Escalonamento por prioridades com tempo real",
          "SJF para otimizar o tempo médio"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Sistemas de tempo real garantem resposta dentro de prazos determinados. Diferente de outros algoritmos que otimizam métricas médias, sistemas de tempo real focam em garantir que tarefas críticas sempre cumpram seus deadlines."
      },
      {
        question: "A diferença fundamental entre memória física e memória lógica (virtual) é que:",
        options: [
          "Memória física é mais rápida que a lógica",
          "Memória lógica é a RAM real, física é abstrata",
          "Memória física é a RAM real, lógica é a visão abstrata fornecida pelo SO",
          "Não há diferença entre elas"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Memória física é a RAM real, memória lógica é a visão abstrata que o SO fornece aos processos. A memória virtual permite que programas vejam um espaço de endereçamento contínuo e maior que a RAM física, usando técnicas como paginação."
      },
      {
        question: "A MMU (Memory Management Unit) é responsável por:",
        options: [
          "Armazenar dados permanentemente",
          "Converter endereços lógicos em endereços físicos",
          "Gerenciar arquivos no disco rígido",
          "Controlar dispositivos de entrada e saída"
        ],
        answer: 1,
        feedback: "Resposta correta: B) A MMU converte endereços lógicos (usados pelos processos) em endereços físicos da RAM. Esta tradução é feita em tempo real durante a execução, permitindo que o SO gerencie a memória de forma transparente aos processos."
      }
    ]
  },
  {
    subject: "Questões 31-40 (Gerenciamento de Memória)",
    questions: [
      {
        question: "Na alocação particionada estática, o problema da fragmentação interna ocorre quando:",
        options: [
          "Existem muitos espaços livres pequenos espalhados pela memória",
          "Há espaço desperdiçado dentro da partição alocada",
          "O processo é maior que a partição disponível",
          "A memória fica completamente ocupada"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Fragmentação interna é o espaço desperdiçado dentro de uma partição alocada. Ocorre quando um processo não usa toda a partição que lhe foi designada, deixando espaço inutilizado que não pode ser usado por outros processos."
      },
      {
        question: "O Swapping é uma técnica que permite:",
        options: [
          "Dividir programas em páginas menores",
          "Trocar processos entre RAM e disco para liberar memória",
          "Compartilhar memória entre processos",
          "Acelerar o acesso à memória cache"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Swapping move processos entre RAM e disco para gerenciar melhor o uso da memória. Quando a RAM está cheia, processos menos ativos são movidos para o disco (swap out), liberando espaço para processos que precisam executar."
      },
      {
        question: "Para gerenciar memória livre, o método de Listas Encadeadas é mais eficiente que Mapa de Bits porque:",
        options: [
          "Usa menos memória para controle",
          "É mais fácil de implementar",
          "Localiza espaços disponíveis mais rapidamente",
          "Elimina a fragmentação"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Listas encadeadas permitem localizar espaços livres de forma mais eficiente que mapas de bits. Em listas encadeadas, cada entrada já representa um bloco contíguo livre, enquanto em mapas de bits é preciso percorrer bit por bit procurando sequências livres."
      },
      {
        question: "Entre os algoritmos de alocação First-fit, Next-fit, Best-fit e Worst-fit, qual escolhe o espaço mais próximo ao tamanho requisitado?",
        options: [
          "First-fit",
          "Next-fit",
          "Best-fit",
          "Worst-fit"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Best-fit escolhe o espaço que mais se aproxima do tamanho requisitado. Este algoritmo minimiza o desperdício de memória, mas pode ser mais lento pois precisa examinar todas as opções disponíveis para encontrar a melhor."
      },
      {
        question: "A técnica de Overlay, usada historicamente quando programas eram maiores que a RAM, tinha como principal desvantagem:",
        options: [
          "Baixa velocidade de processamento",
          "Alta complexidade para o programador",
          "Incompatibilidade com sistemas multitarefa",
          "Uso excessivo de espaço em disco"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Overlay exigia que o programador dividisse manualmente o programa em módulos. O desenvolvedor precisava identificar quais partes podiam ser carregadas/descarregadas e gerenciar essas trocas explicitamente no código, tornando a programação muito complexa."
      },
      {
        question: "A memória virtual resolve o problema de programas maiores que a RAM através de:",
        options: [
          "Compactação automática da memória",
          "Técnicas de paginação e segmentação gerenciadas pelo SO",
          "Aumento físico da quantidade de RAM",
          "Eliminação de processos desnecessários"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Memória virtual usa paginação/segmentação para gerenciar automaticamente as trocas entre RAM e disco. O SO divide programas em páginas e carrega apenas as necessárias na RAM, trocando páginas entre RAM e disco conforme necessário."
      },
      {
        question: "Uma universidade precisa escolher um sistema operacional para seus laboratórios que permita múltiplos usuários simultâneos e seja estável para servidores. A melhor opção seria:",
        options: [
          "Windows 10 Home",
          "Linux Ubuntu Server",
          "MS-DOS",
          "Sistema operacional monotarefa"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Linux Ubuntu Server é multiusuário, estável e adequado para servidores e laboratórios. Oferece controle de usuários, boa estabilidade, segurança e é otimizado para ambientes multiusuário como laboratórios universitários."
      },
      {
        question: "Um desenvolvedor precisa criar uma aplicação que acesse diretamente recursos de hardware como placas de vídeo. Ele precisará utilizar:",
        options: [
          "Apenas linguagens de alto nível",
          "System calls específicas do sistema operacional",
          "Somente interfaces gráficas",
          "Apenas bibliotecas padrão"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Para acessar hardware, é necessário usar system calls que o SO disponibiliza. O sistema operacional controla o acesso ao hardware por questões de segurança e estabilidade, então aplicações devem usar as interfaces fornecidas pelo SO."
      },
      {
        question: "Em um ambiente corporativo com 100 usuários executando simultaneamente aplicações de escritório, qual combinação de características de SO seria mais importante?",
        options: [
          "Monotarefa e monousuário para maior simplicidade",
          "Multitarefa e multiusuário com boa gestão de recursos",
          "Apenas interface gráfica sem linha de comando",
          "Sistema em tempo real com baixa latência"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Ambiente corporativo requer sistema multitarefa e multiusuário com eficiente gestão de recursos. Com 100 usuários simultâneos, é essencial ter controle de recursos, isolamento entre usuários e capacidade de executar múltiplas aplicações por usuário."
      },
      {
        question: "As interfaces de usuário podem ser CLI (Command-line Interface) ou GUI (Graphical User Interface). Em sistemas Linux, é possível:",
        options: [
          "Usar apenas interface gráfica",
          "Usar apenas linha de comando",
          "Escolher entre diferentes GUIs (KDE, GNOME, etc.)",
          "Usar interface híbrida obrigatoriamente"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Linux permite escolher entre várias interfaces gráficas diferentes. O usuário pode instalar e alternar entre diferentes ambientes desktop como KDE, GNOME, XFCE, ou até mesmo usar apenas linha de comando, oferecendo flexibilidade total na escolha da interface."

      }
    ]
  }
];

// Variáveis do quiz
let quizData = []; // Dados embaralhados do quiz
let userAnswers = [];
let quizSubmitted = false;

// Elementos do DOM
const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit");
const restartButton = document.getElementById("restart");
const resultsContainer = document.getElementById("results");

// Função para embaralhar array usando Fisher-Yates shuffle
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Função para criar dados do quiz com opções embaralhadas
function createShuffledQuizData() {
    return originalQuizData.map(subject => ({
        ...subject,
        questions: subject.questions.map(question => {
            // Cria array com índices das opções
            const optionIndices = question.options.map((_, index) => index);
            const shuffledIndices = shuffleArray(optionIndices);
            
            // Reorganiza as opções baseado nos índices embaralhados
            const shuffledOptions = shuffledIndices.map(index => question.options[index]);
            
            // Encontra novo índice da resposta correta
            const newCorrectAnswer = shuffledIndices.indexOf(question.answer);
            
            // Atualiza o feedback para refletir a nova posição da resposta
            const correctLetter = String.fromCharCode(65 + newCorrectAnswer);
            const originalCorrectOption = question.options[question.answer];
            const newFeedback = `Resposta correta: ${correctLetter}) ${originalCorrectOption}`;
            
            return {
                ...question,
                options: shuffledOptions,
                answer: newCorrectAnswer,
                feedback: newFeedback
            };
        })
    }));
}

// Inicializa o quiz
function initializeQuiz() {
    userAnswers = [];
    quizSubmitted = false;

    // Cria dados embaralhados
    quizData = createShuffledQuizData();

    // Cria array plano de todas as questões
    const allQuestions = [];
    quizData.forEach((subject) => {
        allQuestions.push(...subject.questions);
    });

    // Inicializa array de respostas
    userAnswers = new Array(allQuestions.length).fill(null);

    // Mostra todas as questões
    showAllQuestions();
}

// Mostra todas as questões agrupadas por assunto
function showAllQuestions() {
    let questionsHTML = "";
    let questionIndex = 0;

    quizData.forEach((subject) => {
        questionsHTML += `<div class="subject-title">${subject.subject}</div>`;

        subject.questions.forEach((question, qIndex) => {
            questionsHTML += `
                <div class="question-container">
                    <div class="question-number">Questão ${questionIndex + 1}</div>
                    <div class="question-text">${question.question}</div>
                    ${question.image ? `<div class="question-image"><img src="${question.image}" alt="Imagem da questão" style="max-width: 100%; height: auto; margin: 15px 0; border-radius: 6px;"></div>` : ''}
                    ${question.questionContinuation ? `<div class="question-text">${question.questionContinuation}</div>` : ''}
                    <div class="options">
                        ${question.options
                          .map((option, optionIndex) => {
                            let optionClass = "option";
                            if (userAnswers[questionIndex] === optionIndex) {
                              optionClass += " selected";
                            }
                            if (quizSubmitted) {
                              if (optionIndex === question.answer) {
                                optionClass += " correct";
                              } else if (
                                userAnswers[questionIndex] === optionIndex &&
                                userAnswers[questionIndex] !== question.answer
                              ) {
                                optionClass += " incorrect";
                              }
                            }
                            return `<div class="${optionClass}" onclick="selectOption(${questionIndex}, ${optionIndex})">${String.fromCharCode(
                              65 + optionIndex
                            )}) ${option}</div>`;
                          })
                          .join("")}
                    </div>
                    ${
                      quizSubmitted
                        ? `
                        <div class="feedback ${
                          userAnswers[questionIndex] === question.answer || userAnswers[questionIndex] === null
                            ? "correct-feedback"
                            : "incorrect-feedback"
                        }">
                            ${question.feedback}
                        </div>
                    `
                        : ""
                    }
                </div>
            `;
            questionIndex++;
        });
    });

    quizContainer.innerHTML = questionsHTML;
}

// Seleciona uma opção
window.selectOption = function (questionIndex, optionIndex) {
    if (!quizSubmitted) {
        userAnswers[questionIndex] = optionIndex;
        showAllQuestions();
    }
};

// Função de scroll suave
function smoothScrollToTop() {
    const duration = 800;
    const start = window.pageYOffset;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const ease = progress * (2 - progress);
        
        window.scrollTo(0, start * (1 - ease));
        
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }
    
    requestAnimationFrame(animateScroll);
}

// Mostrar notificação de alerta
function showAlertNotification(message) {
    const alertNotification = document.createElement('div');
    alertNotification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        background: linear-gradient(135deg, #f53823ff 0%, #e74c3c 100%);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transition: all 0.4s ease;
    `;
    alertNotification.textContent = message;

    document.body.appendChild(alertNotification);

    setTimeout(() => {
        alertNotification.style.opacity = '1';
        alertNotification.style.transform = 'translateX(-50%) translateY(0)';
    }, 50);

    setTimeout(() => {
        alertNotification.style.opacity = '0';
        alertNotification.style.transform = 'translateX(-50%) translateY(-100%)';
        setTimeout(() => {
            if (alertNotification.parentNode) {
                alertNotification.parentNode.removeChild(alertNotification);
            }
        }, 400);
    }, 5000);
}

function showResults() {
    const firstUnansweredIndex = userAnswers.findIndex(answer => answer === null);

    if (firstUnansweredIndex !== -1) {
        const questionContainers = document.querySelectorAll('.question-container');
        const targetQuestion = questionContainers[firstUnansweredIndex];

        if (targetQuestion) {
            targetQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        showAlertNotification("⚠️ Por favor, responda todas as questões antes de enviar.");
        return;
    }

    quizSubmitted = true;
    showAllQuestions();

    const clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.disabled = true;
        clearButton.style.opacity = '0.5';
        clearButton.style.cursor = 'not-allowed';
    }

    const revealButton = document.getElementById('reveal');
    if (revealButton) {
        revealButton.disabled = true;
        revealButton.style.opacity = '0.5';
        revealButton.style.cursor = 'not-allowed';
    }

    let score = 0;
    let questionIndex = 0;

    quizData.forEach((subject) => {
        subject.questions.forEach((question) => {
            if (userAnswers[questionIndex] === question.answer) {
                score++;
            }
            questionIndex++;
        });
    });

    const totalQuestions = questionIndex;
    const percentage = Math.round((score / totalQuestions) * 100);

    resultsContainer.innerHTML = `
        <h2>Resultado</h2>
        <div class="score">Você acertou ${score} de ${totalQuestions} questões</div>
        <div class="percentage">${percentage}%</div>
        <p>${
          percentage >= 70
            ? "Parabéns! Excelente desempenho."
            : "Revise os conceitos para melhorar seu desempenho."
        }</p>
    `;
    resultsContainer.style.display = "block";
    submitButton.style.display = "none";
    restartButton.style.display = "inline-block";
}

// Reinicia o quiz com novas opções embaralhadas
function restartQuiz() {
    userAnswers = [];
    quizSubmitted = false;

    // Cria novos dados embaralhados
    quizData = createShuffledQuizData();

    const allQuestions = [];
    quizData.forEach((subject) => {
        allQuestions.push(...subject.questions);
    });
    userAnswers = new Array(allQuestions.length).fill(null);

    showAllQuestions();
    resultsContainer.style.display = "none";
    submitButton.style.display = "inline-block";
    restartButton.style.display = "none";

    const clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.disabled = false;
        clearButton.style.opacity = '1';
        clearButton.style.cursor = 'pointer';
    }

    const revealButton = document.getElementById('reveal');
    if (revealButton) {
        revealButton.disabled = false;
        revealButton.style.opacity = '1';
        revealButton.style.cursor = 'pointer';
    }

    smoothScrollToTop();
}

// Seleciona botão LIMPAR
const clearButton = document.getElementById('clear');

// Função para limpar todas as respostas e embaralhar opções
function clearAnswers() {
    if (clearButton && clearButton.disabled) {
        return;
    }

    // Cria novos dados embaralhados
    quizData = createShuffledQuizData();

    // Limpa todas as respostas do usuário
    userAnswers.fill(null);

    // Reset quiz submitted status
    quizSubmitted = false;

    // Desmarca todos os inputs de radio/checkbox
    const respostas = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    respostas.forEach(input => {
        input.checked = false;
    });

    // Atualiza a interface das questões
    showAllQuestions();

    // Se estava mostrando resultados, esconde
    resultsContainer.style.display = "none";

    // Mostra botão de enviar
    submitButton.style.display = "inline-block";

    // Esconde botão de reiniciar
    restartButton.style.display = "none";

    // Scroll suave para o topo
    smoothScrollToTop();
}

// Seleciona o botão revelar
const revealButton = document.getElementById('reveal');

// Função para revelar todas as respostas
function revealAnswers() {
    // Marca como enviado para mostrar respostas corretas e feedback
    quizSubmitted = true;
    
    // Reutiliza função para renderizar questões com respostas corretas
    showAllQuestions();
    
    // Esconde botão de enviar
    submitButton.style.display = "none";
    
    // Desabilita botões limpar e revelar
    clearButton.disabled = true;
    clearButton.style.opacity = '0.5';
    clearButton.style.cursor = 'not-allowed';
    
    revealButton.disabled = true;
    revealButton.style.opacity = '0.5';
    revealButton.style.cursor = 'not-allowed';
    
    // Mostra botão de reiniciar
    restartButton.style.display = "inline-block";
    
    // Scroll suave para o topo
    smoothScrollToTop();
}

// Adiciona evento ao botão revelar (se existir)
if (revealButton) {
    revealButton.addEventListener('click', revealAnswers);
}

// Adiciona evento ao botão limpar
if (clearButton) {
    clearButton.addEventListener('click', clearAnswers);
}

// Event listeners
submitButton.addEventListener("click", showResults);
restartButton.addEventListener("click", restartQuiz);

// Inicializa o quiz quando a página carrega
document.addEventListener("DOMContentLoaded", initializeQuiz);










/**
 * CÓDIGO DE INTEGRAÇÃO PARA QUIZZES EXISTENTES
 * ===========================================
 * 
 * Este código deve ser colocado NO FINAL dos arquivos JavaScript dos quizzes
 * existentes, APÓS todas as funções originais.
 * 
 * ⚠️ IMPORTANTE: 
 * - Adicione a tag <script src="../storage.js"></script> no HTML do quiz
 * - Defina a variável QUIZ_ID no início deste código para cada quiz
 * - Não modifique nenhuma função original do quiz
 */

// =============================================================================
// CONFIGURAÇÃO - ALTERE APENAS ESTA LINHA PARA CADA QUIZ
// =============================================================================

const QUIZ_ID = 'Atividade_AVA'; // ← ALTERE PARA CADA QUIZ (ex: 'matematica_unidade2', 'historia_capitulo1', etc.)

// =============================================================================
// SISTEMA DE AUTO-SAVE E RESTORE - NÃO MODIFICAR
// =============================================================================

/**
 * CONFIGURAÇÕES DO AUTO-SAVE
 */
const AUTO_SAVE_CONFIG = {
    enabled: true,           // Auto-save ativado
    interval: 10000,        // Salva a cada 10 segundos (10000ms)
    saveOnAnswer: true,     // Salva imediatamente ao responder uma questão
    clearOnSubmit: false    // NÃO limpa ao enviar (mantém para revisão)
};

/**
 * VARIÁVEIS DE CONTROLE DO STORAGE
 */
let autoSaveInterval = null;
let storageInitialized = false;

/**
 * INICIALIZAR SISTEMA DE STORAGE
 */
function initializeStorage() {
    // Verifica se o storage está disponível
    if (typeof storage === 'undefined') {
        console.warn('[Quiz Storage] storage.js não foi carregado. Funcionalidade de auto-save desabilitada.');
        return false;
    }

    if (!storage.isStorageAvailable()) {
        console.warn('[Quiz Storage] localStorage não disponível. Progresso não será salvo.');
        return false;
    }

    storageInitialized = true;
    console.log(`[Quiz Storage] Sistema inicializado para quiz: ${QUIZ_ID}`);
    
    // Carrega progresso salvo
    loadSavedProgress();
    
    // Inicia auto-save se configurado
    if (AUTO_SAVE_CONFIG.enabled) {
        startAutoSave();
    }
    
    return true;
}

/**
 * CARREGAR PROGRESSO SALVO
 */
function loadSavedProgress() {
    if (!storageInitialized) return;
    
    try {
        const savedProgress = storage.loadProgress(QUIZ_ID);
        
        if (savedProgress && savedProgress.respostas) {
            // Verifica se realmente há respostas salvas (não apenas array vazio)
            const hasAnswers = savedProgress.respostas.some(answer => answer !== null && answer !== undefined);
            
            if (hasAnswers) {
                // Restaura as respostas do usuário
                userAnswers = [...savedProgress.respostas];
                
                // Atualiza a interface
                if (typeof showAllQuestions === 'function') {
                    showAllQuestions();
                }
                
                // Mostra notificação APENAS se houver progresso real
                const answeredCount = savedProgress.respostas.filter(answer => answer !== null && answer !== undefined).length;
                showProgressNotification(`Progresso anterior restaurado! 📚 (${answeredCount} questões respondidas)`);
                
                console.log(`[Quiz Storage] Progresso restaurado para ${QUIZ_ID}:`, savedProgress);
            } else {
                console.log(`[Quiz Storage] Progresso encontrado mas sem respostas para ${QUIZ_ID}`);
            }
        } else {
            console.log(`[Quiz Storage] Nenhum progresso salvo encontrado para ${QUIZ_ID}`);
        }
        
    } catch (error) {
        console.error('[Quiz Storage] Erro ao carregar progresso:', error);
    }
}

/**
 * SALVAR PROGRESSO ATUAL
 */
function saveCurrentProgress() {
    if (!storageInitialized || !userAnswers) return;
    
    try {
        // Metadata adicional
        const metadata = {
            totalQuestions: userAnswers.length,
            answeredCount: userAnswers.filter(answer => answer !== null).length,
            isCompleted: quizSubmitted || false,
            userAgent: navigator.userAgent
        };
        
        // Salva no storage
        const saved = storage.saveProgress(QUIZ_ID, userAnswers, metadata);
        
        if (saved) {
            console.log(`[Quiz Storage] Progresso salvo automaticamente para ${QUIZ_ID}`);
        }
        
    } catch (error) {
        console.error('[Quiz Storage] Erro ao salvar progresso:', error);
    }
}

/**
 * INICIAR AUTO-SAVE PERIÓDICO
 */
function startAutoSave() {
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
    }
    
    autoSaveInterval = setInterval(() => {
        saveCurrentProgress();
    }, AUTO_SAVE_CONFIG.interval);
    
    console.log(`[Quiz Storage] Auto-save iniciado (intervalo: ${AUTO_SAVE_CONFIG.interval}ms)`);
}

/**
 * PARAR AUTO-SAVE
 */
function stopAutoSave() {
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
        autoSaveInterval = null;
        console.log('[Quiz Storage] Auto-save pausado');
    }
}

/**
 * MOSTRAR NOTIFICAÇÃO DE PROGRESSO
 */
function showProgressNotification(message) {
    // Cria elemento de notificação
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    notification.textContent = message;
    
    // Adiciona ao DOM
    document.body.appendChild(notification);
    
    // Animação de entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove após 4 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

/**
 * SOBRESCREVER FUNÇÃO selectOption PARA AUTO-SAVE
 */
if (typeof window.selectOption === 'function') {
    const originalSelectOption = window.selectOption;
    
    window.selectOption = function(questionIndex, optionIndex) {
        // Chama função original
        originalSelectOption(questionIndex, optionIndex);
        
        // Auto-save se configurado
        if (AUTO_SAVE_CONFIG.saveOnAnswer && storageInitialized) {
            setTimeout(() => {
                saveCurrentProgress();
            }, 100); // Pequeno delay para garantir que userAnswers foi atualizado
        }
    };
}

/**
 * SOBRESCREVER FUNÇÃO showResults PARA CONTROLE DE STORAGE
 */
if (typeof showResults === 'function') {
    const originalShowResults = showResults;
    
    window.showResults = function() {
        // Para o auto-save
        stopAutoSave();
        
        // Chama função original
        originalShowResults();
        
        // Salva resultado final
        if (storageInitialized) {
            setTimeout(() => {
                const finalMetadata = {
                    completed: true,
                    completedAt: new Date().toISOString(),
                    finalScore: calculateFinalScore()
                };
                
                storage.saveProgress(QUIZ_ID, userAnswers, finalMetadata);
                
                // Mostra opção de limpar progresso
                addClearProgressButton();
                
            }, 500);
        }
    };
}

/**
 * SOBRESCREVER FUNÇÃO restartQuiz PARA LIMPAR STORAGE
 */
if (typeof restartQuiz === 'function') {
    const originalRestartQuiz = restartQuiz;
    
    window.restartQuiz = function() {
        // Limpa progresso salvo
        if (storageInitialized) {
            storage.clearProgress(QUIZ_ID);
            console.log(`[Quiz Storage] Progresso limpo para ${QUIZ_ID}`);
        }
        
        // Chama função original
        originalRestartQuiz();
        
        // Reinicia auto-save
        if (AUTO_SAVE_CONFIG.enabled && storageInitialized) {
            startAutoSave();
        }
    };
}

/**
 * CALCULAR PONTUAÇÃO FINAL
 */
function calculateFinalScore() {
    if (!userAnswers || !quizData) return 0;
    
    let score = 0;
    let questionIndex = 0;
    
    quizData.forEach((subject) => {
        subject.questions.forEach((question) => {
            if (userAnswers[questionIndex] === question.answer) {
                score++;
            }
            questionIndex++;
        });
    });
    
    return score;
}

/**
 * ADICIONAR BOTÃO DE LIMPAR PROGRESSO
 */
function addClearProgressButton() {
    // Verifica se já existe
    if (document.getElementById('clearProgressBtn')) return;
    
    // Cria botão
    const clearBtn = document.createElement('button');
    clearBtn.id = 'clearProgressBtn';
    clearBtn.innerHTML = '🗑️ Limpar Progresso Salvo';
    clearBtn.style.cssText = `
        background: #dc3545;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 12px;
        cursor: pointer;
        margin-left: 10px;
        transition: background 0.3s ease;
    `;
    
    clearBtn.onmouseover = () => clearBtn.style.background = '#c82333';
    clearBtn.onmouseout = () => clearBtn.style.background = '#dc3545';
    
    clearBtn.onclick = function() {
        if (confirm('Deseja realmente limpar o progresso salvo deste quiz?')) {
            storage.clearProgress(QUIZ_ID);
            showProgressNotification('Progresso limpo! 🗑️');
            clearBtn.remove();
        }
    };
    
    // Adiciona ao container de resultados
    const resultsContainer = document.getElementById('results');
    if (resultsContainer) {
        resultsContainer.appendChild(clearBtn);
    }
}

/**
 * CONTROLE DE VISIBILIDADE DA PÁGINA (para pausar auto-save)
 */
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Salva ao sair da página
        saveCurrentProgress();
        stopAutoSave();
    } else {
        // Reinicia auto-save ao voltar
        if (AUTO_SAVE_CONFIG.enabled && storageInitialized) {
            startAutoSave();
        }
    }
});

/**
 * INICIALIZAÇÃO AUTOMÁTICA
 */
document.addEventListener('DOMContentLoaded', function() {
    // Aguarda um pouco para garantir que tudo foi carregado
    setTimeout(initializeStorage, 500);
});

// Também inicializa se o DOM já estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initializeStorage, 500);
    });
} else {
    setTimeout(initializeStorage, 500);
}

/**
 * SALVAMENTO ANTES DE SAIR DA PÁGINA
 */
window.addEventListener('beforeunload', function() {
    if (storageInitialized) {
        saveCurrentProgress();
    }
});

console.log('[Quiz Integration] Código de integração carregado para quiz:', QUIZ_ID);

// =============================================================================
// FIM DO CÓDIGO DE INTEGRAÇÃO
// =============================================================================

/**
 * INSTRUÇÕES DE USO:
 * 
 * 1. Salve o storage.js na pasta PRINCIPAL do projeto
 * 2. Em cada HTML de quiz, adicione: <script src="../storage.js"></script>
 * 3. Copie este código e cole NO FINAL do JavaScript de cada quiz
 * 4. Altere apenas a linha: const QUIZ_ID = 'seu_quiz_id_unico';
 * 5. Pronto! O quiz terá auto-save automático
 * 
 * FUNCIONALIDADES AUTOMÁTICAS:
 * ✅ Auto-save a cada 10 segundos
 * ✅ Save imediato ao responder questões  
 * ✅ Restaura progresso ao recarregar página
 * ✅ Notificações visuais de progresso
 * ✅ Botão para limpar progresso
 * ✅ Save ao sair da página
 * ✅ Controle inteligente de pausar/resumir save
 */







/**
 * CONTROLE DE VISIBILIDADE DA PÁGINA (para pausar auto-save)
 */
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Salva ao sair da página
        saveCurrentProgress();
        stopAutoSave();
    } else {
        // Reinicia auto-save ao voltar
        if (AUTO_SAVE_CONFIG.enabled && storageInitialized) {
            startAutoSave();
        }
    }
});

/**
 * INICIALIZAÇÃO AUTOMÁTICA
 */
document.addEventListener('DOMContentLoaded', function() {
    // Aguarda um pouco para garantir que tudo foi carregado
    setTimeout(initializeStorage, 500);
});

// Também inicializa se o DOM já estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initializeStorage, 500);
    });
} else {
    setTimeout(initializeStorage, 500);
}

/**
 * SALVAMENTO ANTES DE SAIR DA PÁGINA
 */
window.addEventListener('beforeunload', function() {
    if (storageInitialized) {
        saveCurrentProgress();
    }
});

console.log('[Quiz Integration] Código de integração carregado para quiz:', QUIZ_ID);

// =============================================================================
// FIM DO CÓDIGO DE INTEGRAÇÃO
// =============================================================================

/**
 * INSTRUÇÕES DE USO:
 * 
 * 1. Salve o storage.js na pasta PRINCIPAL do projeto
 * 2. Em cada HTML de quiz, adicione: <script src="../storage.js"></script>
 * 3. Copie este código e cole NO FINAL do JavaScript de cada quiz
 * 4. Altere apenas a linha: const QUIZ_ID = 'seu_quiz_id_unico';
 * 5. Pronto! O quiz terá auto-save automático
 * 
 * FUNCIONALIDADES AUTOMÁTICAS:
 * ✅ Auto-save a cada 10 segundos
 * ✅ Save imediato ao responder questões  
 * ✅ Restaura progresso ao recarregar página
 * ✅ Notificações visuais de progresso
 * ✅ Botão para limpar progresso
 * ✅ Save ao sair da página
 * ✅ Controle inteligente de pausar/resumir save
 */

// Seleciona os botões
const btnUp = document.getElementById('btn-up');
const btnLeft = document.getElementById('btn-left');
const btnDown = document.getElementById('btn-down');

// Função para scroll suave e lento
function smoothScrollTo(targetPosition, duration = 800) {
    const start = window.scrollY;
    const change = targetPosition - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // 0 a 1
        window.scrollTo(0, start + change * progress);
        if (progress < 1) requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
}

// Rola para o topo
btnUp.addEventListener('click', () => {
    smoothScrollTo(0, 1000); // duração em ms (1 segundo)
});

// Volta para a página anterior
btnLeft.addEventListener('click', () => {
    window.location.href = '../SO.html';
});

// Rola para o final da página
btnDown.addEventListener('click', () => {
    smoothScrollTo(document.body.scrollHeight, 1000);
});

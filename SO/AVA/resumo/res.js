// Configuração do quiz de Sistemas Operacionais
const originalQuizData = [
  {
    subject: "Introdução aos Sistemas Operacionais",
    questions: [
      {
        question: "O que é considerado a parte física do computador?",
        options: [
          "Kernel",
          "CPU, memória e dispositivos",
          "Programas e instruções",
          "Drivers"
        ],
        answer: 1,
        feedback: "Resposta correta: B) CPU, memória e dispositivos. O hardware refere-se aos componentes físicos do computador."
      },
      {
        question: "O software pode ser definido como:",
        options: [
          "Parte física da máquina",
          "Parte lógica composta por programas e instruções",
          "Periféricos conectados ao sistema",
          "Memória RAM e HD"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Parte lógica composta por programas e instruções. Software é a parte não física do computador."
      },
      {
        question: "Qual elemento serve de intermediário entre usuário e hardware?",
        options: [
          "Compilador",
          "Sistema Operacional",
          "Barramento",
          "Processador"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Sistema Operacional. O SO atua como intermediário, facilitando a interação entre usuários e hardware."
      },
      {
        question: "O objetivo principal de um sistema operacional é:",
        options: [
          "Executar apenas jogos",
          "Gerenciar hardware e oferecer serviços aos programas",
          "Substituir a CPU",
          "Ampliar a memória RAM"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Gerenciar hardware e oferecer serviços aos programas. Esta é a função essencial do SO."
      },
      {
        question: "O computador é formado essencialmente por:",
        options: [
          "Hardware e drivers",
          "Hardware e software",
          "Drivers e kernel",
          "Periféricos e programas de usuário"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Hardware e software. Estes são os dois componentes fundamentais de qualquer sistema computacional."
      }
    ]
  },
  {
    subject: "Componentes do Hardware",
    questions: [
      {
        question: "Qual componente é responsável por buscar e executar instruções?",
        options: [
          "HD",
          "RAM",
          "CPU",
          "Barramento"
        ],
        answer: 2,
        feedback: "Resposta correta: C) CPU. A Unidade Central de Processamento é responsável pela execução das instruções."
      },
      {
        question: "A memória secundária é representada por:",
        options: [
          "RAM",
          "Cache",
          "HD/SSD",
          "Registradores"
        ],
        answer: 2,
        feedback: "Resposta correta: C) HD/SSD. A memória secundária é não-volátil e usada para armazenamento permanente."
      },
      {
        question: "O que conecta CPU, memória e periféricos?",
        options: [
          "Kernel",
          "Barramentos",
          "Drivers",
          "BIOS"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Barramentos. Os barramentos são as vias de comunicação entre os componentes do computador."
      },
      {
        question: "Qual dispositivo é classificado como entrada?",
        options: [
          "Monitor",
          "Impressora",
          "Teclado",
          "Caixa de som"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Teclado. O teclado é um dispositivo de entrada que permite inserir dados no sistema."
      },
      {
        question: "Onde os programas em execução ficam armazenados?",
        options: [
          "HD",
          "RAM",
          "Cache L3",
          "BIOS"
        ],
        answer: 1,
        feedback: "Resposta correta: B) RAM. A memória RAM armazena programas e dados em execução para acesso rápido pela CPU."
      }
    ]
  },
  {
    subject: "Modos de Execução do SO",
    questions: [
      {
        question: "O modo que permite acesso total ao hardware é:",
        options: [
          "Usuário",
          "Supervisor (Núcleo)",
          "Virtual",
          "Seguro"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Supervisor (Núcleo). O modo supervisor permite acesso irrestrito aos recursos do sistema."
      },
      {
        question: "No modo usuário, instruções privilegiadas:",
        options: [
          "São executadas diretamente",
          "São proibidas",
          "São convertidas em código binário",
          "São executadas apenas no cache"
        ],
        answer: 1,
        feedback: "Resposta correta: B) São proibidas. Instruções privilegiadas só podem ser executadas no modo supervisor."
      },
      {
        question: "A transição do modo usuário para núcleo ocorre por:",
        options: [
          "BIOS",
          "Compilador",
          "Chamadas de sistema",
          "Barramento"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Chamadas de sistema. System calls permitem que programas solicitem serviços do kernel."
      },
      {
        question: "Qual modo protege o hardware de acessos indevidos?",
        options: [
          "Núcleo",
          "Usuário",
          "Kernel e Usuário juntos",
          "Monitor de entrada"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Usuário. O modo usuário restringe o acesso direto ao hardware, protegendo o sistema."
      },
      {
        question: "O sistema divide modos de execução para:",
        options: [
          "Aumentar a velocidade de CPU",
          "Melhorar segurança e controle de recursos",
          "Permitir jogos rodarem mais rápido",
          "Evitar o uso de memória"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Melhorar segurança e controle de recursos. A divisão em modos protege o sistema de operações maliciosas."
      }
    ]
  },
  {
    subject: "Chamadas de Sistema",
    questions: [
      {
        question: "Chamadas de sistema permitem que programas:",
        options: [
          "Acessem serviços do kernel",
          "Se comuniquem sem o SO",
          "Substituam o hardware",
          "Rodem sem CPU"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Acessem serviços do kernel. System calls são a interface entre programas do usuário e o kernel."
      },
      {
        question: "Exemplo de serviço obtido via system call:",
        options: [
          "Gravação em arquivos",
          "Aumento físico da RAM",
          "Troca de processador",
          "Uso de compilador"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Gravação em arquivos. Operações de I/O requerem chamadas de sistema."
      },
      {
        question: "Quando um programa solicita leitura de arquivo, ocorre:",
        options: [
          "Exclusão mútua",
          "Interrupção de hardware",
          "Chamada de sistema",
          "Alocação dinâmica de CPU"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Chamada de sistema. Acessar arquivos requer solicitar serviços do kernel via system call."
      },
      {
        question: "Quem executa as chamadas de sistema?",
        options: [
          "Usuário",
          "Kernel",
          "BIOS",
          "Barramento"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Kernel. O kernel é responsável por processar e executar as chamadas de sistema."
      },
      {
        question: "Chamadas de sistema estão associadas a:",
        options: [
          "Acesso ao barramento",
          "Comunicação com kernel",
          "Criação de hardware",
          "Substituição da BIOS"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Comunicação com kernel. System calls são o mecanismo de comunicação com o kernel."
      }
    ]
  },
  {
    subject: "Funções do SO",
    questions: [
      {
        question: "O SO atua como:",
        options: [
          "Interpretador de código-fonte",
          "Máquina estendida e gerenciador de recursos",
          "Substituto da CPU",
          "Antivírus"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Máquina estendida e gerenciador de recursos. O SO abstrai o hardware e gerencia recursos do sistema."
      },
      {
        question: "A multiplexação no tempo significa:",
        options: [
          "Vários programas usam CPU em turnos",
          "Vários programas compartilham memória ao mesmo tempo",
          "O SO limita a execução de processos",
          "Apenas um processo usa todo recurso"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Vários programas usam CPU em turnos. Time multiplexing permite compartilhar CPU entre processos."
      },
      {
        question: "Multiplexação no espaço ocorre em:",
        options: [
          "CPU",
          "Memória",
          "Drivers",
          "Barramentos"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Memória. Space multiplexing permite que vários processos compartilhem a memória simultaneamente."
      },
      {
        question: "O gerenciamento de recursos garante:",
        options: [
          "Apenas execução de jogos",
          "Distribuição equilibrada de CPU, memória e E/S",
          "Aumento automático da RAM física",
          "Criação de hardware"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Distribuição equilibrada de CPU, memória e E/S. O SO gerencia todos os recursos do sistema de forma eficiente."
      },
      {
        question: "Ao abstrair o hardware, o SO facilita:",
        options: [
          "A criação de periféricos",
          "A interface para usuários e programadores",
          "A execução exclusiva de BIOS",
          "O desligamento automático"
        ],
        answer: 1,
        feedback: "Resposta correta: B) A interface para usuários e programadores. A abstração simplifica o desenvolvimento e uso de aplicações."
      }
    ]
  },
  {
    subject: "Tipos de Sistemas Operacionais",
    questions: [
      {
        question: "Qual tipo de SO é usado em aviões e sistemas industriais que exigem prazos rígidos?",
        options: [
          "Servidor",
          "Tempo real",
          "Embarcado",
          "Cartão inteligente"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Tempo real. SOs de tempo real garantem que tarefas sejam executadas dentro de prazos específicos."
      },
      {
        question: "Um smartphone normalmente usa SO do tipo:",
        options: [
          "Servidor",
          "Computador pessoal",
          "Embarcado",
          "Cartão inteligente"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Embarcado. Smartphones usam sistemas operacionais embarcados otimizados para dispositivos móveis."
      },
      {
        question: "Qual SO é dedicado e não permite instalar softwares adicionais?",
        options: [
          "Servidor",
          "Computador pessoal",
          "Embarcado",
          "Tempo real"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Embarcado. Sistemas embarcados são dedicados a funções específicas e não permitem instalação de software adicional."
      },
      {
        question: "SOs que atendem múltiplos usuários e compartilhamento de recursos são:",
        options: [
          "Computador pessoal",
          "Servidor",
          "Embarcado",
          "Smart card"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Servidor. SOs de servidor são projetados para atender múltiplos usuários e gerenciar recursos compartilhados."
      },
      {
        question: "Um cartão inteligente (smart card) possui:",
        options: [
          "Kernel completo multiprogramável",
          "Função única em chip pequeno",
          "Sistema distribuído complexo",
          "Estrutura híbrida de camadas"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Função única em chip pequeno. Smart cards têm recursos muito limitados e executam funções específicas."
      }
    ]
  },
  {
    subject: "História e Evolução",
    questions: [
      {
        question: "Qual dispositivo é considerado precursor da computação, criado em 2500 a.C.?",
        options: [
          "Máquina Analítica",
          "Máquina de Turing",
          "Ábaco",
          "Calculadora de Pascal"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Ábaco. O ábaco é considerado o primeiro dispositivo de cálculo da humanidade."
      },
      {
        question: "A 2ª geração (1955–1965) foi marcada pelo uso de:",
        options: [
          "Válvulas",
          "Transistores",
          "Microprocessadores",
          "Circuitos integrados"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Transistores. A segunda geração substituiu as válvulas por transistores, tornando os computadores menores e mais eficientes."
      },
      {
        question: "O Unix surgiu em qual geração?",
        options: [
          "1ª",
          "2ª",
          "3ª",
          "4ª"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 3ª. O Unix foi desenvolvido na terceira geração dos computadores (1965-1980)."
      },
      {
        question: "Os primeiros sistemas de lote (batch) apareceram em:",
        options: [
          "1ª geração",
          "2ª geração",
          "3ª geração",
          "4ª geração"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 2ª geração. Os sistemas batch foram introduzidos para automatizar o processamento sequencial de tarefas."
      },
      {
        question: "A 4ª geração (1980–atual) trouxe:",
        options: [
          "Máquinas com válvulas",
          "Sistemas em cartões perfurados",
          "Microprocessadores, PCs e smartphones",
          "Apenas mainframes"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Microprocessadores, PCs e smartphones. A quarta geração popularizou a computação pessoal e móvel."
      }
    ]
  },
  {
    subject: "Estruturas de Sistemas Operacionais",
    questions: [
      {
        question: "Estrutura monolítica possui como principal vantagem:",
        options: [
          "Fácil manutenção",
          "Alto desempenho",
          "Melhor segurança",
          "Escalabilidade"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Alto desempenho. Estruturas monolíticas são mais rápidas devido à comunicação direta entre componentes."
      },
      {
        question: "Estrutura em camadas facilita:",
        options: [
          "Velocidade máxima",
          "Manutenção e organização",
          "Multiplexação de CPU",
          "Comunicação direta com hardware"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Manutenção e organização. A estrutura em camadas organiza o sistema hierarquicamente, facilitando manutenção."
      },
      {
        question: "Estrutura de microkernel se caracteriza por:",
        options: [
          "Kernel grande com todos serviços",
          "Kernel mínimo, serviços em espaço do usuário",
          "Kernel híbrido com camadas",
          "Drivers dentro da CPU"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Kernel mínimo, serviços em espaço do usuário. Microkernel mantém apenas funções essenciais no kernel."
      },
      {
        question: "Estrutura modular é adotada em SOs como:",
        options: [
          "Windows e Linux",
          "MS-DOS",
          "Cartões inteligentes",
          "UNIX da 3ª geração"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Windows e Linux. Sistemas modernos usam estrutura modular para flexibilidade e extensibilidade."
      },
      {
        question: "A desvantagem do microkernel é:",
        options: [
          "Baixa segurança",
          "Dificuldade de portabilidade",
          "Menor desempenho",
          "Não suporta drivers"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Menor desempenho. Microkernel tem overhead devido à comunicação entre espaços de usuário e kernel."
      }
    ]
  },
  {
    subject: "Gerenciamento de Processos",
    questions: [
      {
        question: "Um processo pode ser definido como:",
        options: [
          "Programa armazenado em disco",
          "Entidade ativa em execução",
          "Driver do SO",
          "Compilador de código"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Entidade ativa em execução. Um processo é um programa em execução com recursos alocados."
      },
      {
        question: "O estado em que o processo aguarda um evento é:",
        options: [
          "Novo",
          "Pronto",
          "Em espera",
          "Encerrado"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Em espera. Estado onde o processo aguarda por algum evento (I/O, recurso, etc.)."
      },
      {
        question: "Qual diferença principal entre processo e thread?",
        options: [
          "Processo compartilha memória, thread não",
          "Thread compartilha recursos do processo",
          "Processo executa mais rápido sempre",
          "Threads não usam registradores"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Thread compartilha recursos do processo. Threads compartilham espaço de memória do processo pai."
      },
      {
        question: "A saída voluntária por erro de software é chamada de:",
        options: [
          "Saída normal",
          "Saída por erro",
          "Erro fatal",
          "Cancelamento"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Saída por erro. Quando um processo termina devido a um erro detectado pelo próprio programa."
      },
      {
        question: "O PID identifica:",
        options: [
          "Um registrador da CPU",
          "O processo no sistema",
          "A memória virtual",
          "A pilha de execução"
        ],
        answer: 1,
        feedback: "Resposta correta: B) O processo no sistema. Process ID é um identificador único para cada processo."
      }
    ]
  },
  {
    subject: "Concorrência e Sincronização",
    questions: [
      {
        question: "Quando dois processos acessam dados compartilhados sem controle ocorre:",
        options: [
          "Deadlock",
          "Condição de corrida",
          "Escalonamento",
          "Swap"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Condição de corrida. Race condition ocorre quando múltiplos processos acessam recursos compartilhados simultaneamente."
      },
      {
        question: "Algoritmo de Peterson resolve:",
        options: [
          "Escalonamento de processos",
          "Exclusão mútua entre dois processos",
          "Fragmentação de memória",
          "Alocação de páginas"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Exclusão mútua entre dois processos. O algoritmo de Peterson garante acesso exclusivo à seção crítica."
      },
      {
        question: "O mecanismo de sincronização que usa wait e signal é:",
        options: [
          "Mutex",
          "Semáforo",
          "Monitor",
          "Swap"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Semáforo. Semáforos usam operações wait (P) e signal (V) para sincronização."
      },
      {
        question: "Monitores diferem de semáforos porque:",
        options: [
          "São mais propensos a erro",
          "Oferecem exclusão mútua automática",
          "Não funcionam em linguagens modernas",
          "Exigem hardware dedicado"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Oferecem exclusão mútua automática. Monitores garantem exclusão mútua automaticamente na entrada."
      },
      {
        question: "O objetivo da exclusão mútua é:",
        options: [
          "Garantir uso de CPU em tempo real",
          "Impedir múltiplos acessos à região crítica simultaneamente",
          "Aumentar velocidade do processador",
          "Liberar memória física"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Impedir múltiplos acessos à região crítica simultaneamente. Exclusão mútua protege seções críticas."
      }
    ]
  },
  {
    subject: "Escalonamento de Processos",
    questions: [
      {
        question: "O algoritmo FCFS executa:",
        options: [
          "Processo mais curto primeiro",
          "Ordem de chegada",
          "Por prioridades",
          "Com fatias de tempo iguais"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Ordem de chegada. First-Come, First-Served executa processos na ordem que chegaram."
      },
      {
        question: "O escalonamento Round Robin é:",
        options: [
          "Não-preemptivo",
          "Preemptivo com fatias de tempo",
          "Baseado em semáforos",
          "Exclusivo de servidores"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Preemptivo com fatias de tempo. Round Robin usa quantum de tempo fixo para todos os processos."
      },
      {
        question: "O SJF é caracterizado por:",
        options: [
          "Executar tarefa mais curta primeiro",
          "Escolher sempre o processo mais prioritário",
          "Dar fatias iguais de tempo",
          "Interromper processos longos constantemente"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Executar tarefa mais curta primeiro. Shortest Job First prioriza processos com menor tempo de execução."
      },
      {
        question: "O algoritmo SRTN é:",
        options: [
          "Não-preemptivo",
          "Preemptivo e interrompe se chegar processo mais curto",
          "Exclusivo para tempo real",
          "Igual ao Round Robin"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Preemptivo e interrompe se chegar processo mais curto. SRTN é a versão preemptiva do SJF."
      },
      {
        question: "O escalonamento busca evitar:",
        options: [
          "Multiprogramação",
          "Starvation",
          "Fragmentação",
          "Sincronização"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Starvation. Algoritmos de escalonamento devem garantir que todos os processos sejam executados."
      }
    ]
  },
  {
    subject: "Gerenciamento de Memória",
    questions: [
      {
        question: "O endereço lógico precisa ser convertido em:",
        options: [
          "Endereço de rede",
          "Endereço físico",
          "Endereço de barramento",
          "Endereço de cache"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Endereço físico. A MMU converte endereços lógicos em endereços físicos da RAM."
      },
      {
        question: "A memória virtual dá a cada processo a ilusão de:",
        options: [
          "Ter espaço limitado e fragmentado",
          "Ter espaço grande, contínuo e exclusivo",
          "Usar apenas memória RAM",
          "Não precisar de SO"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Ter espaço grande, contínuo e exclusivo. Memória virtual abstrai as limitações físicas da RAM."
      },
      {
        question: "O registrador de relocação define:",
        options: [
          "Até onde o processo pode acessar",
          "Onde começa a área de memória do processo",
          "O tamanho do HD",
          "O endereço do kernel"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Onde começa a área de memória do processo. O registrador base define o início da região do processo."
      },
      {
        question: "O algoritmo de alocação que escolhe o menor bloco adequado é:",
        options: [
          "First fit",
          "Next fit",
          "Best fit",
          "Worst fit"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Best fit. Best fit procura o menor bloco que seja suficiente para alocar o processo."
      },
      {
        question: "A fragmentação interna ocorre quando:",
        options: [
          "Processos usam memória não contígua",
          "Partições fixas deixam sobras dentro dos blocos",
          "SO impede execução de programas",
          "Endereços lógicos não são convertidos"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Partições fixas deixam sobras dentro dos blocos. Fragmentação interna é o desperdício dentro de blocos alocados."
      }
    ]
  }
];

// Variáveis do quiz
let quizData = [];
let userAnswers = [];
let quizSubmitted = false;
let isFirstLoad = true; // Flag para controlar primeiro carregamento

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
            const newFeedback = question.feedback.replace(/^Resposta correta: [A-E]\)/, `Resposta correta: ${correctLetter})`);
            
            return {
                ...question,
                options: shuffledOptions,
                answer: newCorrectAnswer,
                feedback: newFeedback
            };
        })
    }));
}

// Função para criar dados originais (sem embaralhar)
function createOriginalQuizData() {
    return originalQuizData.map(subject => ({
        ...subject,
        questions: subject.questions.map(question => ({
            ...question,
            // Mantém feedback original
            feedback: question.feedback || `Resposta correta: ${String.fromCharCode(65 + question.answer)}) ${question.options[question.answer]}`
        }))
    }));
}

// Função para mostrar imagem em zoom
function showImageZoom(imageSrc) {
    // Cria overlay para o zoom
    const overlay = document.createElement('div');
    overlay.id = 'image-zoom-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
    `;
    
    // Cria container da imagem
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;
    
    const zoomedImage = document.createElement('img');
    zoomedImage.src = imageSrc;
    zoomedImage.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        border-radius: 4px;
        transform: scale(1.3);
        transform-origin: center center;
        display: block;
        margin: 0 auto;
    `;
    
    // Cria botão de fechar
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
        position: absolute;
        top: -10px;
        right: -10px;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        background: #ff4444;
        color: white;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        transition: background-color 0.2s;
    `;
    
    closeButton.onmouseover = () => closeButton.style.backgroundColor = '#cc0000';
    closeButton.onmouseout = () => closeButton.style.backgroundColor = '#ff4444';
    
    // Função para fechar o zoom
    function closeZoom() {
        document.body.removeChild(overlay);
    }
    
    // Eventos para fechar
    closeButton.onclick = closeZoom;
    overlay.onclick = (e) => {
        if (e.target === overlay) closeZoom();
    };
    
    // Evento de teclado para ESC
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeZoom();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
    
    // Monta os elementos
    imageContainer.appendChild(zoomedImage);
    imageContainer.appendChild(closeButton);
    overlay.appendChild(imageContainer);
    document.body.appendChild(overlay);
}

// Torna a função global para poder ser chamada do HTML
window.showImageZoom = showImageZoom;

// CORREÇÃO: Inicializa o quiz
function initializeQuiz() {
    userAnswers = [];
    quizSubmitted = false;

    // CORREÇÃO: Só embaralha no primeiro carregamento OU quando chamado pelo restart
    if (isFirstLoad) {
        // No primeiro carregamento, usa dados originais (sem embaralhar)
        quizData = createOriginalQuizData();
        isFirstLoad = false;
    }
    // Se não é primeiro carregamento, mantém os dados atuais (quizData já foi definido)

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
                    <div class="question-text">${question.question.replace(/\n/g, '<br>')}</div>
                    ${question.image ? `<div class="question-image">
                        <img src="${question.image}" 
                             alt="Imagem da questão" 
                             style="max-width: 100%; height: auto; margin: 15px 0; border-radius: 6px; cursor: pointer; transition: transform 0.2s;"
                             onclick="showImageZoom('${question.image}')"
                             onmouseover="this.style.transform='scale(1.05)'"
                             onmouseout="this.style.transform='scale(1)'">
                    </div>` : ''}
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

// Função para selecionar opção
function selectOption(questionIndex, optionIndex) {
    if (quizSubmitted) return;
    
    console.log(`Selecionando questão ${questionIndex}, opção ${optionIndex}`);
    userAnswers[questionIndex] = optionIndex;
    console.log('UserAnswers atualizado:', userAnswers);
    showAllQuestions();
}

// Torna a função global
window.selectOption = selectOption;

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
    }, 5000);

    setTimeout(() => {
        if (document.body.contains(alertNotification)) {
            document.body.removeChild(alertNotification);
        }
    }, 5500);
}

// Função para mostrar resultados
function showResults() {
    // Debug: verificar o estado das respostas
    console.log('UserAnswers:', userAnswers);
    console.log('Respostas null:', userAnswers.filter(answer => answer === null).length);
    console.log('Total de questões:', userAnswers.length);
    
    // CORREÇÃO 1: Verifica apenas valores null ou undefined, 0 é uma resposta válida
    const firstUnansweredIndex = userAnswers.findIndex(answer => answer === null || answer === undefined);

    if (firstUnansweredIndex !== -1) {
        console.log('Primeira questão não respondida:', firstUnansweredIndex);
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

    // Calcular resultados
    const allQuestions = [];
    quizData.forEach((subject) => {
        allQuestions.push(...subject.questions);
    });

    const totalQuestions = allQuestions.length;
    const correctAnswers = userAnswers.filter((answer, index) => 
        answer === allQuestions[index].answer
    ).length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    let resultClass = "";
    let resultMessage = "";
    
    if (percentage >= 70) {
        resultClass = "excellent";
        resultMessage = "Excelente! Você domina bem o conteúdo de Sistemas Operacionais.";
    } else if (percentage >= 50) {
        resultClass = "good";
        resultMessage = "Bom trabalho! Continue praticando para melhorar ainda mais.";
    } else {
        resultClass = "needs-improvement";
        resultMessage = "Você precisa revisar o conteúdo. Recomendo estudar mais as aulas.";
    }

    resultsContainer.innerHTML = `
        <div class="results-card ${resultClass}">
            <h3>Resultado Final</h3>
            <div class="score-display">
                <span class="score-number">${correctAnswers}/${totalQuestions}</span>
                <span class="score-percentage">(${percentage}%)</span>
            </div>
            <p class="result-message">${resultMessage}</p>
            <div class="score-breakdown">
                <div class="score-item correct">
                    <span class="score-label">Corretas:</span>
                    <span class="score-value">${correctAnswers}</span>
                </div>
                <div class="score-item incorrect">
                    <span class="score-label">Incorretas:</span>
                    <span class="score-value">${totalQuestions - correctAnswers}</span>
                </div>
            </div>
        </div>
    `;

    if (submitButton) submitButton.style.display = "none";
    if (restartButton) restartButton.style.display = "inline-block";
}

// CORREÇÃO: Reinicia o quiz com novas opções embaralhadas
function restartQuiz() {
    userAnswers = [];
    quizSubmitted = false;

    // AQUI: Agora SIM embaralha as opções (só quando reiniciar)
    quizData = createShuffledQuizData();

    const allQuestions = [];
    quizData.forEach((subject) => {
        allQuestions.push(...subject.questions);
    });
    userAnswers = new Array(allQuestions.length).fill(null);

    showAllQuestions();
    resultsContainer.innerHTML = "";
    if (submitButton) submitButton.style.display = "inline-block";
    if (restartButton) restartButton.style.display = "none";

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

// CORREÇÃO: Função para limpar todas as respostas SEM embaralhar opções
function clearAnswers() {
    const clearButton = document.getElementById('clear');
    if (clearButton && clearButton.disabled) {
        return;
    }

    // CORREÇÃO: NÃO embaralha mais aqui, só limpa respostas
    // Remove: quizData = createShuffledQuizData();

    // Limpa todas as respostas do usuário
    userAnswers.fill(null);

    // Reset quiz submitted status
    quizSubmitted = false;

    // Atualiza a interface das questões
    showAllQuestions();

    // Se estava mostrando resultados, esconde
    resultsContainer.innerHTML = "";

    // Mostra botão de enviar
    if (submitButton) submitButton.style.display = "inline-block";

    // Esconde botão de reiniciar
    if (restartButton) restartButton.style.display = "none";

    // Scroll suave para o topo
    smoothScrollToTop();
}

// Função para revelar todas as respostas
function revealAnswers() {
    const revealButton = document.getElementById('reveal');
    if (revealButton && revealButton.disabled) {
        return;
    }

    // Marca como enviado para mostrar respostas corretas e feedback
    quizSubmitted = true;
    
    // Reutiliza função para renderizar questões com respostas corretas
    showAllQuestions();
    
    // Calcular e mostrar resultados
    const allQuestions = [];
    quizData.forEach((subject) => {
        allQuestions.push(...subject.questions);
    });

    const totalQuestions = allQuestions.length;
    const correctAnswers = userAnswers.filter((answer, index) => 
        answer === allQuestions[index].answer
    ).length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    let resultClass = "";
    let resultMessage = "";
    
    if (percentage >= 70) {
        resultClass = "excellent";
        resultMessage = "Excelente! Você domina bem o conteúdo de Sistemas Operacionais.";
    } else if (percentage >= 50) {
        resultClass = "good";
        resultMessage = "Bom trabalho! Continue praticando para melhorar ainda mais.";
    } else {
        resultClass = "needs-improvement";
        resultMessage = "Você precisa revisar o conteúdo. Recomendo estudar mais as aulas.";
    }

    resultsContainer.innerHTML = `
        <div class="results-card ${resultClass}">
            <h3>Resultado Final - Respostas Reveladas</h3>
            <div class="score-display">
                <span class="score-number">${correctAnswers}/${totalQuestions}</span>
                <span class="score-percentage">(${percentage}%)</span>
            </div>
            <p class="result-message">${resultMessage}</p>
            <div class="score-breakdown">
                <div class="score-item correct">
                    <span class="score-label">Corretas:</span>
                    <span class="score-value">${correctAnswers}</span>
                </div>
                <div class="score-item incorrect">
                    <span class="score-label">Incorretas:</span>
                    <span class="score-value">${totalQuestions - correctAnswers}</span>
                </div>
            </div>
        </div>
    `;
    
    // Esconde botão de enviar
    if (submitButton) submitButton.style.display = "none";
    
    // Desabilita botões limpar e revelar
    const clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.disabled = true;
        clearButton.style.opacity = '0.5';
        clearButton.style.cursor = 'not-allowed';
    }
    
    if (revealButton) {
        revealButton.disabled = true;
        revealButton.style.opacity = '0.5';
        revealButton.style.cursor = 'not-allowed';
    }
    
    // Mostra botão de reiniciar
    if (restartButton) restartButton.style.display = "inline-block";
    
    // Scroll suave para o topo
    smoothScrollToTop();
}

// Event listeners
document.addEventListener("DOMContentLoaded", function() {
    initializeQuiz();
    
    if (submitButton) {
        submitButton.addEventListener("click", showResults);
    }
    
    if (restartButton) {
        restartButton.addEventListener("click", restartQuiz);
    }

    // Adiciona evento ao botão revelar (se existir)
    const revealButton = document.getElementById('reveal');
    if (revealButton) {
        revealButton.addEventListener('click', revealAnswers);
    }

    // Adiciona evento ao botão limpar
    const clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.addEventListener('click', clearAnswers);
    }
});














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

const QUIZ_ID = 'resumo_ava_so'; // ← ALTERE PARA CADA QUIZ (ex: 'matematica_unidade2', 'historia_capitulo1', etc.)

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


// Seleciona os botões de navegação
const btnUp = document.getElementById('btn-up');
const btnLeft = document.getElementById('btn-left');
const btnDown = document.getElementById('btn-down');

// Seleciona os botões da barra lateral (usando IDs diferentes dos botões principais)
const clearButtonSidebar = document.getElementById('clearButton');
const submitButtonSidebar = document.getElementById('submitButton');
const revealButtonSidebar = document.getElementById('revealButton');

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
    window.location.href = '../ava3.html';
});

// Rola para o final da página
btnDown.addEventListener('click', () => {
    smoothScrollTo(document.body.scrollHeight, 1000);
});

// Função para atualizar o ícone do botão enviar/reiniciar
function updateSubmitButtonIcon() {
    const icon = submitButtonSidebar.querySelector('i');
    if (quizSubmitted) {
        // Se o quiz foi enviado ou revelado, mostra ícone de reiniciar
        icon.className = 'fas fa-redo';
        submitButtonSidebar.title = 'Reiniciar Quiz';
    } else {
        // Se o quiz não foi enviado, mostra ícone de enviar
        icon.className = 'fas fa-paper-plane';
        submitButtonSidebar.title = 'Enviar Quiz';
    }
}

// Event listeners para os botões da barra lateral
// Limpar respostas (chama a função clearAnswers já existente)
clearButtonSidebar.addEventListener('click', () => {
    clearAnswers();
    updateSubmitButtonIcon(); // Atualiza o ícone após limpar
});

// Botão enviar/reiniciar - função dupla baseada no estado do quiz
submitButtonSidebar.addEventListener('click', () => {
    if (quizSubmitted) {
        // Se já foi enviado/revelado, reinicia o quiz
        restartQuiz();
    } else {
        // Se não foi enviado, envia o quiz
        showResults();
    }
    updateSubmitButtonIcon(); // Atualiza o ícone após a ação
});

// Revelar respostas (chama a função revealAnswers já existente)
revealButtonSidebar.addEventListener('click', () => {
    revealAnswers();
    updateSubmitButtonIcon(); // Atualiza o ícone após revelar
});

// Inicializa o ícone correto quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    // Aguarda um pouco para garantir que as variáveis estejam carregadas
    setTimeout(() => {
        updateSubmitButtonIcon();
    }, 100);
});
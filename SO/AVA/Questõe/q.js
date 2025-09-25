// Configuração do quiz de Sistemas Operacionais
const originalQuizData = [
  {
    subject: "Algoritmos",
    questions: [
      {
        question: "Em alocação de memória dinâmica, o algoritmo First-fit busca:",
        options: [
          "O menor bloco que caiba",
          "O primeiro bloco livre suficiente encontrado a partir do início da busca",
          "O maior bloco disponível",
          "O bloco imediatamente anterior à última alocação"
        ],
        answer: 1,
        feedback: "Resposta correta: B) O primeiro bloco livre suficiente encontrado a partir do início da busca. O First-fit procura sequencialmente pelo primeiro espaço adequado."
      },
      {
        question: "O algoritmo Best-fit tende a:",
        options: [
          "Minimizar fragmentação externa sempre",
          "Encontrar a primeira partição livre",
          "Escolher o bloco mais próximo do tamanho solicitado, podendo gerar muitos pequenos fragmentos",
          "Alocar em ordem circular a partir da última alocação"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Escolher o bloco mais próximo do tamanho solicitado, podendo gerar muitos pequenos fragmentos. O Best-fit minimiza desperdício mas pode criar fragmentação."
      },
      {
        question: "Em escalonamento de CPU, qual algoritmo exige previsão do tempo de execução para ser ideal?",
        options: [
          "Round Robin",
          "FCFS",
          "SJF (Shortest Job First)",
          "FIFO com quantum"
        ],
        answer: 2,
        feedback: "Resposta correta: C) SJF (Shortest Job First). O SJF precisa conhecer antecipadamente a duração dos processos para funcionar otimamente."
      },
      {
        question: "Qual estratégia de alocação é geralmente mais rápida para encontrar um espaço livre (na média)?",
        options: [
          "Best-fit",
          "First-fit",
          "Worst-fit",
          "Compactação"
        ],
        answer: 1,
        feedback: "Resposta correta: B) First-fit. O First-fit para na primeira ocorrência adequada, sendo mais rápido na busca."
      },
      {
        question: "O algoritmo Worst-fit é recomendado quando se deseja:",
        options: [
          "Reduzir o número de blocos pequenos remanescentes",
          "Criar sobras grandes para futuras alocações (deixar grandes fragmentos)",
          "Minimizar overhead de busca",
          "Garantir alocação contígua mínima"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Criar sobras grandes para futuras alocações (deixar grandes fragmentos). O Worst-fit deixa fragmentos maiores após alocação."
      }
    ]
  },
  {
    subject: "Condição de Corrida",
    questions: [
      {
        question: "Uma condição de corrida ocorre quando:",
        options: [
          "Dois processos acessam dados distintos em memória",
          "A ordem de execução entre processos que acessam recurso compartilhado altera o resultado final",
          "Um processo é trocado de contexto",
          "Um processo faz I/O síncrono"
        ],
        answer: 1,
        feedback: "Resposta correta: B) A ordem de execução entre processos que acessam recurso compartilhado altera o resultado final. Esta é a definição clássica de race condition."
      },
      {
        question: "No exemplo do saldo bancário (saldo=1000; A deposita +100; B saca −50), um interleaving errado pode resultar em 950 em vez de 1050. A principal causa é:",
        options: [
          "Falha de hardware",
          "Condição de corrida por falta de exclusão mútua",
          "Escalonador Round Robin",
          "Fragmentação de memória"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Condição de corrida por falta de exclusão mútua. A falta de sincronização permite intercalação incorreta das operações."
      },
      {
        question: "Qual mecanismo de baixo nível ajuda a prevenir condições de corrida com instruções atômicas?",
        options: [
          "TSL (Test-and-Set Lock)",
          "Round Robin",
          "Best-fit",
          "FIFO"
        ],
        answer: 0,
        feedback: "Resposta correta: A) TSL (Test-and-Set Lock). O Test-and-Set é uma instrução atômica para implementar exclusão mútua."
      },
      {
        question: "Em sistemas multiprocessador, por que desabilitar interrupções não é solução suficiente para exclusão mútua?",
        options: [
          "Porque desabilitar interrupções é proibido em modo kernel",
          "Porque desabilitar interrupções protege apenas um núcleo; outros núcleos ainda podem acessar o recurso",
          "Porque previne contexto de troca",
          "Porque só funciona para semáforos"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Porque desabilitar interrupções protege apenas um núcleo; outros núcleos ainda podem acessar o recurso. Em multiprocessadores, outros CPUs continuam executando."
      },
      {
        question: "Uma estratégia que reduz probabilidade de condição de corrida ao encapsular variáveis compartilhadas e suas operações é:",
        options: [
          "Worst-fit",
          "Monitor",
          "SJF",
          "FCFS"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Monitor. Monitores encapsulam dados e operações, garantindo acesso mutuamente exclusivo."
      }
    ]
  },
  {
    subject: "Memória Virtual / Memória RAM",
    questions: [
      {
        question: "A principal vantagem da memória virtual é:",
        options: [
          "Eliminar a necessidade de MMU",
          "Permitir que processos usem mais memória lógica do que a RAM física, usando disco como extensão",
          "Aumentar a velocidade da RAM física",
          "Evitar qualquer page fault"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Permitir que processos usem mais memória lógica do que a RAM física, usando disco como extensão. Esta é a essência da memória virtual."
      },
      {
        question: "A MMU (Memory Management Unit) tem a função de:",
        options: [
          "Controlar o escalonador de CPU",
          "Converter endereços lógicos/virtuais em endereços físicos",
          "Gerar interrupções de I/O",
          "Compactar memória automaticamente"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Converter endereços lógicos/virtuais em endereços físicos. A MMU realiza a tradução de endereços."
      },
      {
        question: "O efeito negativo chamado thrashing ocorre quando:",
        options: [
          "Há excesso de processadores",
          "O SO está realizando compactação com frequência",
          "Muitas page faults — o sistema gasta tempo movendo páginas entre RAM e disco e a efetividade cai",
          "A memória cache L1 está cheia"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Muitas page faults — o sistema gasta tempo movendo páginas entre RAM e disco e a efetividade cai. Thrashing degrada severamente o desempenho."
      },
      {
        question: "Qual técnica divide a memória em blocos de tamanho fixo para paginação?",
        options: [
          "Segmentação",
          "Paginação",
          "Compactação",
          "Overlay"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Paginação. A paginação usa páginas de tamanho fixo para gerenciar memória."
      },
      {
        question: "A afirmação \"memória virtual reduz sempre a latência de I/O\" é:",
        options: [
          "Verdadeira sempre",
          "Falsa — memória virtual pode aumentar latência quando há muitos page faults",
          "Verdadeira apenas em multiprocessadores",
          "Sem sentido — memória virtual não afeta I/O"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Falsa — memória virtual pode aumentar latência quando há muitos page faults. Page faults podem degradar performance."
      }
    ]
  },
  {
    subject: "Fragmentação de Memória",
    questions: [
      {
        question: "Fragmentação interna acontece quando:",
        options: [
          "Blocos livres estão espalhados pela memória",
          "Há sobras dentro de uma partição ou quadro alocado (espaço desperdiçado dentro do bloco)",
          "O SO não usa MMU",
          "Fragmentos são compactados automaticamente"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Há sobras dentro de uma partição ou quadro alocado (espaço desperdiçado dentro do bloco). Fragmentação interna é desperdício interno ao bloco alocado."
      },
      {
        question: "Fragmentação externa significa:",
        options: [
          "Espaço desperdiçado dentro de blocos alocados",
          "Pequenos blocos livres dispersos que, somados, seriam suficientes, mas não contíguos",
          "Fragmentos que ocorrem somente em SSDs",
          "Ausência de memória virtual"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Pequenos blocos livres dispersos que, somados, seriam suficientes, mas não contíguos. Fragmentação externa impede alocação apesar de espaço total suficiente."
      },
      {
        question: "Qual solução é usada para combater fragmentação externa em alocação contígua?",
        options: [
          "Best-fit",
          "Swapping",
          "Compactação (coalescer e mover processos)",
          "Test-and-Set"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Compactação (coalescer e mover processos). A compactação reorganiza a memória para eliminar fragmentação externa."
      },
      {
        question: "Em sistemas com paginação a demanda, a fragmentação externa:",
        options: [
          "Aumenta muito",
          "Deixa de ser problema significativo, pois páginas são de tamanho fixo",
          "É solucionada por semáforos",
          "Gera deadlock"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Deixa de ser problema significativo, pois páginas são de tamanho fixo. Paginação elimina fragmentação externa."
      },
      {
        question: "Se uma memória tem blocos livres de tamanhos 90, 40, 30 e você precisa alocar 100, isso é um exemplo de:",
        options: [
          "Fragmentação interna",
          "Fragmentação externa — espaço total suficiente (160) mas sem bloco contíguo >= 100",
          "Best-fit bem sucedido",
          "Swap in/out"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Fragmentação externa — espaço total suficiente (160) mas sem bloco contíguo >= 100. Exemplo clássico de fragmentação externa."
      }
    ]
  },
  {
    subject: "Processos / Threads",
    questions: [
      {
        question: "A principal diferença entre processo e thread é:",
        options: [
          "Processos compartilham heap; threads não",
          "Threads pertencem a processos e compartilham o mesmo espaço de endereçamento; processos têm espaços separados",
          "Processos nunca usam CPU",
          "Threads não possuem registradores"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Threads pertencem a processos e compartilham o mesmo espaço de endereçamento; processos têm espaços separados. Esta é a diferença fundamental."
      },
      {
        question: "Qual item faz parte tipicamente do PCB (Process Control Block)?",
        options: [
          "Lista de arquivos abertos, contador de programa, registradores, prioridade",
          "Tabela de páginas do SO toda",
          "Código-fonte do programa",
          "Todos os semáforos do sistema"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Lista de arquivos abertos, contador de programa, registradores, prioridade. O PCB contém informações específicas do processo."
      },
      {
        question: "Quando criar threads ao invés de processos é vantajoso?",
        options: [
          "Quando precise de isolamento rígido de memória",
          "Quando se quer comunicação mais rápida e menor overhead de criação/troca de contexto",
          "Quando quiser evitar qualquer sincronização",
          "Quando o SO não suportar multitarefa"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Quando se quer comunicação mais rápida e menor overhead de criação/troca de contexto. Threads são mais eficientes para comunicação."
      },
      {
        question: "Em multithreading, um risco que aumenta por causa do compartilhamento de memória é:",
        options: [
          "Fragmentação interna",
          "Condição de corrida — exige sincronização",
          "Falta de escalonamento",
          "Swap in excessivo"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Condição de corrida — exige sincronização. O compartilhamento de memória entre threads aumenta o risco de race conditions."
      },
      {
        question: "Threads geralmente têm:",
        options: [
          "Espaço de endereço completamente separado",
          "Pilha e registradores próprios, mas compartilham código e dados do processo",
          "Mais overhead para criar que processos",
          "Nenhuma vantagem em sistemas multicore"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Pilha e registradores próprios, mas compartilham código e dados do processo. Esta é a arquitetura típica de threads."
      }
    ]
  },
  {
    subject: "Escalonamento de Processos",
    questions: [
      {
        question: "No algoritmo FCFS (First-Come, First-Served), uma grande desvantagem é:",
        options: [
          "Alta complexidade de implementação",
          "O convoy effect, em que processos longos atrasam processos curtos",
          "Exige estimativa prévia de duração",
          "Provê fairness perfeito"
        ],
        answer: 1,
        feedback: "Resposta correta: B) O convoy effect, em que processos longos atrasam processos curtos. Este é o principal problema do FCFS."
      },
      {
        question: "Em Round Robin, o parâmetro chave que determina desempenho e overhead é:",
        options: [
          "Prioridade do processo",
          "Tamanho do quantum (fatias de tempo)",
          "Tamanho da memória",
          "Número de CPUs"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Tamanho do quantum (fatias de tempo). O quantum determina o comportamento e eficiência do Round Robin."
      },
      {
        question: "O algoritmo SRTN (Shortest Remaining Time Next) é:",
        options: [
          "Não-preemptivo",
          "Preemptivo — pode interromper um processo quando chega outro com menor tempo restante",
          "Idêntico ao FCFS",
          "Usado apenas em sistemas embarcados"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Preemptivo — pode interromper um processo quando chega outro com menor tempo restante. SRTN é a versão preemptiva do SJF."
      },
      {
        question: "Qual métrica NÃO é diretamente objetivo do escalonador reduzir?",
        options: [
          "Tempo de espera médio",
          "Tempo de turnaround",
          "Tamanho da RAM física",
          "Tempo de resposta em sistemas interativos"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Tamanho da RAM física. O escalonador não controla o hardware, apenas gerencia o uso da CPU."
      },
      {
        question: "Em escalonamento por prioridades, um problema clássico é:",
        options: [
          "Starvation (inanição) de processos de baixa prioridade",
          "Aumento do tamanho do PCB",
          "Fragmentação interna",
          "Thrashing de memória"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Starvation (inanição) de processos de baixa prioridade. Processos de baixa prioridade podem nunca executar."
      }
    ]
  },
  {
    subject: "Cálculo de Tempo de Espera",
    questions: [
      {
        question: "Considerando a tabela abaixo e escalonamento FCFS, qual é o tempo médio de espera?\n\nFórmula: TEP = FP − CP − TAM\nTEP: Tempo de Espera do Processo\nFP: Final do Processo\nCP: Chegada do Processo\nTAM: Tamanho do Processo (duração/CPU burst)",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDQ1MCAyODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQ1MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNmOGY5ZmEiLz4KICA8IS0tIEhlYWRlciAtLT4KICA8cmVjdCB4PSI1MCIgeT0iNDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IiMzNzQxNTEiLz4KICA8cmVjdCB4PSIxNTAiIHk9IjQwIiB3aWR0aD0iMTMwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzc0MTUxIi8+CiAgPHJlY3QgeD0iMjgwIiB5PSI0MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzM3NDE1MSIvPgogIDx0ZXh0IHg9IjEwMCIgeT0iNjMiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UHJvY2Vzc288L3RleHQ+CiAgPHRleHQgeD0iMjE1IiB5PSI2MyIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DaGVnYWRhIChDUCk8L3RleHQ+CiAgPHRleHQgeD0iMzQwIiB5PSI2MyIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EdXJhw6fDo28gKFRBTSk8L3RleHQ+CiAgCiAgPCEtLSBSb3dzIC0tPgogIDxyZWN0IHg9IjUwIiB5PSI4MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI2Q0ZWRkYSIvPgogIDxyZWN0IHg9IjE1MCIgeT0iODAiIHdpZHRoPSIxMzAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiNkNGVkZGEiLz4KICA8cmVjdCB4PSIyODAiIHk9IjgwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjZDRlZGRhIi8+CiAgPHRleHQgeD0iMTAwIiB5PSIxMDMiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlAxPC90ZXh0PgogIDx0ZXh0IHg9IjIxNSIgeT0iMTAzIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0PgogIDx0ZXh0IHg9IjM0MCIgeT0iMTAzIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41PC90ZXh0PgogIAogIDxyZWN0IHg9IjUwIiB5PSIxMjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiNkNGVkZGEiLz4KICA8cmVjdCB4PSIxNTAiIHk9IjEyMCIgd2lkdGg9IjEzMCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI2Q0ZWRkYSIvPgogIDxyZWN0IHg9IjI4MCIgeT0iMTIwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjZDRlZGRhIi8+CiAgPHRleHQgeD0iMTAwIiB5PSIxNDMiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlAyPC90ZXh0PgogIDx0ZXh0IHg9IjIxNSIgeT0iMTQzIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0PgogIDx0ZXh0IHg9IjM0MCIgeT0iMTQzIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0PgogIAogIDxyZWN0IHg9IjUwIiB5PSIxNjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiNkNGVkZGEiLz4KICA8cmVjdCB4PSIxNTAiIHk9IjE2MCIgd2lkdGg9IjEzMCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI2Q0ZWRkYSIvPgogIDxyZWN0IHg9IjI4MCIgeT0iMTYwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjZDRlZGRhIi8+CiAgPHRleHQgeD0iMTAwIiB5PSIxODMiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlAzPC90ZXh0PgogIDx0ZXh0IHg9IjIxNSIgeT0iMTgzIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40PC90ZXh0PgogIDx0ZXh0IHg9IjM0MCIgeT0iMTgzIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj44PC90ZXh0PgogIAogIDxyZWN0IHg9IjUwIiB5PSIyMDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiNkNGVkZGEiLz4KICA8cmVjdCB4PSIxNTAiIHk9IjIwMCIgd2lkdGg9IjEzMCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI2Q0ZWRkYSIvPgogIDxyZWN0IHg9IjI4MCIgeT0iMjAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjZDRlZGRhIi8+CiAgPHRleHQgeD0iMTAwIiB5PSIyMjMiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlA0PC90ZXh0PgogIDx0ZXh0IHg9IjIxNSIgeT0iMjIzIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42PC90ZXh0PgogIDx0ZXh0IHg9IjM0MCIgeT0iMjIzIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0Pgo8L3N2Zz4=",
        options: [
          "3,75",
          "4,25",
          "4,75",
          "5,25"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 4,75. Calculando FCFS: P1 (TEP=0), P2 (TEP=3), P3 (TEP=5), P4 (TEP=11). Média = (0+3+5+11)/4 = 4,75."
      },
      {
        question: "Ainda com FCFS e a mesma tabela, qual é o tempo de espera (TEP) do processo P3?",
        options: [
          "3",
          "5",
          "8",
          "0"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 5. P3 inicia em t=9, finaliza em t=17. TEP = 17 - 4 - 8 = 5."
      },
      {
        question: "Se trocarmos a ordem para SRTN (Shortest Remaining Time Next) com os mesmos CP/TAM, o tempo médio de espera tende a:",
        options: [
          "Permanecer exatamente 4,75 sempre",
          "Geralmente diminuir (melhor para casos com jobs curtos chegando depois)",
          "Sempre aumentar",
          "Tornar-se infinito"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Geralmente diminuir (melhor para casos com jobs curtos chegando depois). SRTN otimiza para jobs mais curtos."
      },
      {
        question: "Na fórmula TEP = FP − CP − TAM, se o processo não sofreu espera (iniciou ao chegar), então TEP será:",
        options: [
          "Igual a TAM",
          "Zero",
          "Negativo",
          "Igual a FP"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Zero. Se não há espera, o processo inicia imediatamente ao chegar."
      },
      {
        question: "Mantendo os mesmos processos, qual ação aumenta o TEP médio no Algoritmo FCFS?",
        options: [
          "Diminuir a chegada de P1 para t=0 (faz CPU não ficar ociosa)",
          "Inserir antes um processo muito longo com chegada t=0 (faz com que processos posteriores esperem mais)",
          "Tornar todos processos I/O-bound",
          "Reduzir duração de todos os processos"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Inserir antes um processo muito longo com chegada t=0 (faz com que processos posteriores esperem mais). Processo longo no início aumenta espera dos demais."
      }
    ]
  },
  {
    subject: "Região Crítica e Exclusão Mútua",
    questions: [
      {
        question: "Uma região crítica é:",
        options: [
          "Um processo que consome muita CPU",
          "Trecho de código que acessa recurso compartilhado e precisa de proteção",
          "O local onde o sistema faz swap",
          "Um tipo de algoritmo de paginação"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Trecho de código que acessa recurso compartilhado e precisa de proteção. Região crítica requer acesso mutuamente exclusivo."
      },
      {
        question: "Qual propriedade NÃO é exigida em uma solução correta de exclusão mútua?",
        options: [
          "Exclusão mútua — dois processos não podem estar simultaneamente na região crítica",
          "Progresso — se nenhum está na região crítica, um competidor deve ser escolhido",
          "Busca ótima de memória — minimizar uso de RAM",
          "Bounded waiting (nenhum processo espera indefinidamente)"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Busca ótima de memória — minimizar uso de RAM. Esta não é uma propriedade requerida para exclusão mútua."
      },
      {
        question: "O Algoritmo de Peterson resolve exclusão mútua para:",
        options: [
          "Qualquer número de processos (n > 2) sem alteração",
          "Dois processos (P0 e P1), usando turn e flag",
          "Apenas em multiprocessadores com TSL",
          "Sistemas sem MMU"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Dois processos (P0 e P1), usando turn e flag. Peterson é específico para 2 processos."
      },
      {
        question: "Um mutex é:",
        options: [
          "Um algoritmo de escalonamento",
          "Uma primitiva que permite lock/unlock para proteger regiões críticas",
          "Um tipo de memória virtual",
          "Um modelo de comunicação por mensagens"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Uma primitiva que permite lock/unlock para proteger regiões críticas. Mutex é uma ferramenta de sincronização."
      },
      {
        question: "Em que situação o uso de semáforos pode ser mais suscetível a erros do que monitores?",
        options: [
          "Quando se precisa de atomicidade de operação",
          "Quando o programador não sincroniza corretamente wait/signal, criando deadlocks ou perda de sinais",
          "Quando a memória é paginada",
          "Quando há apenas um processo"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Quando o programador não sincroniza corretamente wait/signal, criando deadlocks ou perda de sinais. Semáforos requerem uso cuidadoso."
      }
    ]
  },
  {
    subject: "Troca de Contexto",
    questions: [
      {
        question: "A troca de contexto (context switch) envolve:",
        options: [
          "Salvar registradores e o contador de programa do processo atual e carregar os do próximo processo",
          "Mover páginas entre RAM e disco",
          "Compactar a memória",
          "Incrementar o quantum em Round Robin"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Salvar registradores e o contador de programa do processo atual e carregar os do próximo processo. Esta é a essência da troca de contexto."
      },
      {
        question: "Em relação ao custo de troca de contexto, qual afirmação é verdadeira?",
        options: [
          "Troca de contexto é instantânea e sem overhead",
          "Troca de contexto tem overhead (salvar/restaurar estado, possivelmente TLB flush) e excesso de preempções aumenta custo",
          "Só ocorre quando processo termina",
          "Só afeta sistemas com memória virtual"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Troca de contexto tem overhead (salvar/restaurar estado, possivelmente TLB flush) e excesso de preempções aumenta custo. Context switch tem custo significativo."
      },
      {
        question: "Por que threads normalmente têm menor custo de troca de contexto que processos?",
        options: [
          "Porque threads não possuem registradores",
          "Porque threads compartilham espaço de endereço; não precisam trocar tabelas de páginas completas",
          "Porque threads são agendadas pelo hardware",
          "Porque processos nunca trocam contexto"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Porque threads compartilham espaço de endereço; não precisam trocar tabelas de páginas completas. Threads evitam overhead de troca de espaço de endereçamento."
      },
      {
        question: "Um dos efeitos da diminuição do quantum (em Round Robin) é:",
        options: [
          "Menos trocas de contexto",
          "Mais trocas de contexto — overhead aumenta",
          "Quantum não afeta trocas de contexto",
          "TLB nunca precisa ser limpo"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Mais trocas de contexto — overhead aumenta. Quantum menor significa mais interrupções e trocas."
      },
      {
        question: "Qual item do PCB é essencial para restaurar corretamente a execução após troca de contexto?",
        options: [
          "Contador de Programa (Program Counter)",
          "Tamanho do arquivo",
          "Endereço do disco",
          "Prioridade do processo"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Contador de Programa (Program Counter). O PC indica onde o processo deve continuar executando."
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

const QUIZ_ID = 'questões_2_ava_so'; // ← ALTERE PARA CADA QUIZ (ex: 'matematica_unidade2', 'historia_capitulo1', etc.)

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
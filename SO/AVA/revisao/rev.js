// Configuração do quiz de Sistemas Operacionais
const originalQuizData = [
  {
    subject: "Threads vs Processos",
    questions: [
      {
        question: "Um servidor web em produção roda várias instâncias de um processo de uma aplicação. Para melhorar a responsividade, o engenheiro decide reescrever parte da aplicação usando threads em vez de processos separados. Durante a revisão de design, um estudante afirma: 'Usar threads passa a permitir que diferentes partes da aplicação compartilhem o mesmo espaço de memória, o que reduz o custo de criação e comutação entre unidades de execução.' Sobre essa afirmação, assinale a opção correta.",
        options: [
          "A afirmação é falsa — threads nunca compartilham memória por padrão.",
          "A afirmação é verdadeira — threads compartilham espaço de endereçamento com baixo custo de troca de contexto.",
          "A afirmação é falsa — processos e threads têm o mesmo custo de criação.",
          "A afirmação é verdadeira, mas threads isolam automaticamente arquivos abertos entre si.",
          "A afirmação é falsa — threads sempre exigem mecanismos de cópia de memória (copy-on-write) para funcionar."
        ],
        answer: 1,
        feedback: "Resposta correta: B) A afirmação é verdadeira — threads compartilham espaço de endereçamento com baixo custo de troca de contexto. Threads dentro de um mesmo processo compartilham o mesmo espaço de memória, o que reduz significativamente o custo de criação e comutação em comparação com processos separados."
      }
    ]
  },
  {
    subject: "Bloco de Controle de Processo (PCB)",
    questions: [
      {
        question: "Durante uma troca de contexto entre processos, o kernel salva e restaura informações essenciais para retomar a execução. Qual dos itens a seguir é parte típica do Bloco de Controle de Processo (PCB) e é usado para retomar exatamente a instrução seguinte ao ser escalonado novamente?",
        options: [
          "Tamanho do arquivo executável.",
          "Contador de programa (program counter).",
          "Número de threads do processo.",
          "Tempo total de CPU consumido.",
          "Tabela de usuários autorizados."
        ],
        answer: 1,
        feedback: "Resposta correta: B) Contador de programa (program counter). O PC é fundamental no PCB pois indica exatamente qual instrução deve ser executada quando o processo retomar sua execução após uma troca de contexto."
      }
    ]
  },
  {
    subject: "Algoritmos de Escalonamento",
    questions: [
      {
        question: "Considere os seguintes algoritmos de escalonamento de processos:\n\n1. First-Come, First-Served (FCFS)\n2. Shortest Remaining Time First (SRTF)\n3. Round-Robin (RR)\n4. Escalonamento por Prioridade preemptivo\n\nAssocie cada algoritmo à característica abaixo:\n\n( ) É desvantajoso para processos curtos, que podem ter de aguardar longos períodos até a conclusão de processos maiores iniciados anteriormente.\n( ) Usa quantum de tempo e promove justiça entre processos prontos.\n( ) Pode levar a starvation de processos com baixa prioridade se prioridades fixas forem aplicadas.\n( ) Sempre seleciona o processo com o menor tempo restante estimado.",
        options: [
          "1, 3, 4, 2",
          "1, 2, 3, 4",
          "3, 1, 4, 2",
          "2, 3, 1, 4",
          "1, 4, 3, 2"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 1, 3, 4, 2. FCFS é desvantajoso para processos curtos (efeito comboio), Round-Robin usa quantum, Prioridade pode causar starvation, e SRTF sempre escolhe o menor tempo restante."
      }
    ]
  },
  {
    subject: "Funções do Sistema Operacional",
    questions: [
      {
        question: "Um administrador de sistemas afirma que o sistema operacional deve esconder a complexidade do hardware e oferecer ao programador uma visão mais simples para desenvolvimento de software. Essa afirmação descreve a função do sistema operacional como:",
        options: [
          "Gerenciador de Recursos",
          "Máquina Estendida",
          "Escalonador de CPU",
          "Virtualizador de Processos"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Máquina Estendida. Esta é a função clássica do SO de abstrair a complexidade do hardware, oferecendo uma interface mais simples e amigável para os programadores e usuários."
      }
    ]
  },
  {
    subject: "Memória Virtual e MMU",
    questions: [
      {
        question: "No mecanismo de memória virtual, a conversão de endereço lógico (gerado pela CPU) para endereço físico (na RAM) é feita pelo componente denominado:",
        options: [
          "Loader",
          "MMU (Memory Management Unit)",
          "Gerenciador de E/S",
          "Swapper",
          "Scheduler"
        ],
        answer: 1,
        feedback: "Resposta correta: B) MMU (Memory Management Unit). A MMU é o componente de hardware responsável pela tradução de endereços virtuais para endereços físicos na memória."
      }
    ]
  },
  {
    subject: "Fragmentação de Memória",
    questions: [
      {
        question: "Uma máquina com partições dinâmicas de memória apresenta muitas pequenas lacunas livres entre processos alocados, impedindo a entrada de um novo processo grande. O administrador decide usar compactação de memória. Qual problema a compactação tenta resolver?",
        options: [
          "Fragmentação interna.",
          "Fragmentação externa.",
          "Thrashing.",
          "Starvation.",
          "Swap I/O excessivo."
        ],
        answer: 1,
        feedback: "Resposta correta: B) Fragmentação externa. A fragmentação externa ocorre quando há espaço livre suficiente na memória, mas está dividido em pequenos blocos não contíguos, impedindo a alocação de processos grandes."
      }
    ]
  },
  {
    subject: "Algoritmos de Alocação de Memória",
    questions: [
      {
        question: "Os sistemas operacionais utilizam diferentes algoritmos de alocação de memória. Associe cada algoritmo à sua característica:\n\n1. First-fit\n2. Best-fit\n3. Worst-fit\n4. Next-fit\n\n( ) Procura o primeiro bloco livre que caiba no processo.\n( ) Procura o menor bloco suficiente para reduzir desperdício.\n( ) Procura o maior bloco livre para deixar sobras grandes.\n( ) Reinicia a procura a partir do ponto onde parou a última alocação.",
        options: [
          "1, 2, 3, 4",
          "2, 1, 4, 3",
          "1, 3, 2, 4",
          "4, 2, 3, 1",
          "3, 1, 4, 2"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 1, 2, 3, 4. First-fit procura o primeiro bloco adequado, Best-fit o menor suficiente, Worst-fit o maior disponível, e Next-fit continua de onde parou."
      }
    ]
  },
  {
    subject: "Memória Virtual - Conceitos",
    questions: [
      {
        question: "A memória virtual é uma técnica que usa parte do disco como extensão da RAM. Analise as afirmações:\n\nI. A memória virtual permite executar programas maiores que a memória física ao manter apenas partes necessárias em RAM.\nII. Esse mecanismo reduz a latência de I/O porque diminui acessos ao disco.",
        options: [
          "I e II verdadeiras, II justifica I.",
          "I e II verdadeiras, mas II não justifica I.",
          "I verdadeira, II falsa.",
          "I falsa, II verdadeira.",
          "I e II falsas."
        ],
        answer: 2,
        feedback: "Resposta correta: C) I verdadeira, II falsa. A memória virtual permite executar programas maiores que a RAM, mas na verdade aumenta a latência de I/O quando há page faults, pois requer acessos ao disco."
      }
    ]
  },
  {
    subject: "Estados de Processo",
    questions: [
      {
        question: "Sobre os estados que um processo pode assumir. Quando um processo solicita a leitura de dados em disco e está aguardando a conclusão da operação, ele se encontra no estado:",
        options: [
          "Pronto",
          "Em execução",
          "Em espera (bloqueado)",
          "Encerrado"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Em espera (bloqueado). Quando um processo aguarda uma operação de I/O (como leitura de disco), ele é colocado no estado de espera até que a operação seja concluída."
      }
    ]
  },
  {
    subject: "Processos vs Threads - Enade 2011",
    questions: [
      {
        question: "Enade Computação (2011). Analise as afirmações:\n\nI. Os ciclos de vida de processos e threads são idênticos.\nII. Threads de diferentes processos compartilham memória.\nIII. Somente processadores multi-core executam programas multi-threads.\nIV. Em sistemas multitarefa, threads podem migrar de um processo para outro.\n\nQuais afirmações estão corretas?",
        options: [
          "I",
          "II",
          "I e III",
          "I e IV",
          "II e IV"
        ],
        answer: 0,
        feedback: "Resposta correta: A) I. Apenas a afirmação I está correta - processos e threads passam pelos mesmos estados básicos (novo, pronto, executando, bloqueado, terminado). As demais são falsas: threads só compartilham memória dentro do mesmo processo, processadores single-core também executam multi-threads por time-sharing, e threads não migram entre processos."
      }
    ]
  },
  {
    subject: "Seção Crítica - Enade 2021",
    questions: [
      {
        question: "Enade CC (2021). Essa parte do programa onde a memória compartilhada é acessada é chamada de:",
        image: "imagem/questao_11.png",
        options: [
          "Deadlock",
          "Semaphore",
          "Região crítica (seção crítica)",
          "Escalonamento"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Região crítica (seção crítica). A seção crítica é a parte do programa onde recursos compartilhados são acessados e deve ser protegida para evitar condições de corrida."
      }
    ]
  },
  {
    subject: "Exclusão Mútua e Interrupções",
    questions: [
      {
        question: "Avalie as asserções:\n\nI. Exclusão mútua pode ser obtida por desabilitação da interrupção controlada pelo SO.\nII. A desabilitação da interrupção impede que o processador em região crítica seja interrompido, sendo mais eficiente em multiprocessadores.",
        image: "imagem/questao_12.png",
        options: [
          "I e II verdadeiras, II justifica I",
          "I e II verdadeiras, mas II não justifica I",
          "I verdadeira, II falsa",
          "I falsa, II verdadeira",
          "I e II falsas"
        ],
        answer: 2,
        feedback: "Resposta correta: C) I verdadeira, II falsa. A desabilitação de interrupções pode garantir exclusão mútua em sistemas uniprocessador, mas é ineficiente em multiprocessadores pois só afeta um processador, enquanto outros podem continuar acessando o recurso compartilhado."
      }
    ]
  },
  {
    subject: "Transições de Estado - Enade SI 2014",
    questions: [
      {
        question: "Enade SI (2014). No diagrama de estados, as transições causadas pelo escalonador de processos são:",
        options: [
          "1 e 2",
          "1 e 3",
          "1 e 4",
          "2 e 3",
          "2 e 4"
        ],
        answer: 3,
        feedback: "Resposta correta: D) 2 e 3. O escalonador é responsável pelas transições: 2 (de pronto para executando - quando seleciona um processo) e 3 (de executando para pronto - quando o quantum expira ou ocorre preempção)."
      }
    ]
  },
  {
    subject: "Sincronização de Processos - Questão Discursiva Modificada",
    questions: [
      {
        question: "Em uma empresa de desenvolvimento de sistemas financeiros, dois programadores implementaram um módulo de atualização de saldo bancário em um servidor multiprocessado. Durante os testes, a equipe percebeu que os valores finais do saldo variavam de forma inesperada quando múltiplas requisições de clientes eram processadas simultaneamente. O gerente de TI suspeita que o problema esteja relacionado à forma como as operações de leitura e escrita sobre uma variável global (saldo da conta) estão sendo realizadas pelos processos, sem mecanismos adequados de controle de concorrência. Com base nessa situação, identifique o problema:",
        options: [
          "A situação descrita é um exemplo de deadlock, que ocorre quando dois processos esperam indefinidamente pela liberação de um recurso.",
          "A situação é uma condição de corrida, que ocorre quando dois ou mais processos acessam simultaneamente um recurso compartilhado, e o resultado depende da ordem de execução.",
          "A situação representa fragmentação externa, já que há dificuldade de alocação de memória devido ao acesso simultâneo.",
          "Trata-se de starvation, em que um processo nunca consegue acessar a CPU por estar sempre em fila de menor prioridade."
        ],
        answer: 1,
        feedback: "Resposta correta: B) A situação é uma condição de corrida. Quando múltiplos processos acessam simultaneamente uma variável compartilhada (saldo bancário) sem sincronização adequada, o resultado final depende da ordem de execução, caracterizando uma race condition. A solução seria implementar mecanismos de sincronização como mutex, semáforos ou monitores."
      }
    ]
  },
  {
    subject: "Algoritmos de Escalonamento - Enade CC 2021",
    questions: [
      {
        question: "Enade CC (2021). Assinale o algoritmo de escalonamento com ambiente adequado:",
        options: [
          "Primeiro a chegar, último a sair (FILO); sistemas de tempo real.",
          "Tarefa mais curta primeiro; sistemas interativos.",
          "Escalonamento por chave circular (round-robin); propício para sistemas de tempo real.",
          "Escalonamento por prioridades; propício para sistemas interativos."
        ],
        answer: 2,
        feedback: "Resposta correta: C) Escalonamento por chave circular (round-robin); propício para sistemas de tempo real. O Round-Robin, com quantum fixo, oferece previsibilidade temporal que é importante em sistemas de tempo real, embora não seja o mais adequado para tempo real crítico."
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

const QUIZ_ID = 'revisao_1_ava_so'; // ← ALTERE PARA CADA QUIZ (ex: 'matematica_unidade2', 'historia_capitulo1', etc.)

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
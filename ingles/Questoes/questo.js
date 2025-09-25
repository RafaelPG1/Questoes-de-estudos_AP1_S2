// Configuração do quiz de Inglês
const originalQuizData = [
  {
    subject: "Aula 1: Introdução ao Inglês Técnico",
    questions: [
      {
        question: "Qual é a principal finalidade do Inglês Técnico (ESP)?",
        options: [
          "Aprender inglês apenas para viajar",
          "Desenvolver leitura, vocabulário e gramática específicas da área",
          "Aprender apenas expressões coloquiais",
          "Focar exclusivamente em conversação oral"
        ],
        answer: 1,
        feedback: "O Inglês Técnico (ESP - English for Specific Purposes) visa desenvolver habilidades específicas para áreas profissionais ou acadêmicas."
      },
      {
        question: "Identifique o estrangeirismo correto:",
        options: [
          "Deletar → apagar",
          "Comerciar → business",
          "Trabalhar → workar",
          "Dormir → sleepar"
        ],
        answer: 0,
        feedback: "Deletar é um estrangeirismo correto, sendo uma adaptação da palavra inglesa 'delete' para o português."
      },
      {
        question: "Qual letra foi recentemente incorporada ao alfabeto português devido a estrangeirismos?",
        options: [
          "A",
          "Z",
          "K",
          "L"
        ],
        answer: 2,
        feedback: "A letra K foi oficialmente incorporada ao alfabeto português em 2009 devido ao uso em estrangeirismos e nomes próprios."
      },
      {
        question: "Complete a frase: '___ am a student.'",
        options: [
          "You",
          "He",
          "I",
          "It"
        ],
        answer: 2,
        feedback: "O pronome 'I' é sempre seguido pelo verbo 'am' na primeira pessoa do singular no presente do verbo 'to be'."
      },
      {
        question: "Estrutura: Possessive Adjectives → sempre acompanham um substantivo. Complete: 'This is ___ book.' (meu livro)",
        options: [
          "Mine",
          "My",
          "I",
          "Me"
        ],
        answer: 1,
        feedback: "'My' é o adjetivo possessivo que sempre acompanha um substantivo, diferente de 'mine' que é pronome possessivo."
      }
    ]
  },
  {
    subject: "Aula 2: Simple Present",
    questions: [
      {
        question: "Estrutura → Sujeito + Verbo (base) + Complemento. Complete: 'He ___ (play) tennis every weekend.'",
        options: [
          "plays",
          "play",
          "played",
          "playing"
        ],
        answer: 0,
        feedback: "Na terceira pessoa do singular (he, she, it), o verbo no Simple Present recebe 's' ou 'es'."
      },
      {
        question: "Estrutura → Sujeito + do/does + not + Verbo (base). Complete: 'She ___ (not/like) coffee.'",
        options: [
          "don't like",
          "does not like",
          "didn't like",
          "not like"
        ],
        answer: 1,
        feedback: "Para terceira pessoa do singular na forma negativa, usa-se 'does not' + verbo no infinitivo sem 'to'."
      },
      {
        question: "Escolha o advérbio que indica 'sempre':",
        options: [
          "sometimes",
          "never",
          "always",
          "often"
        ],
        answer: 2,
        feedback: "'Always' significa 'sempre' e é um advérbio de frequência que indica 100% das vezes."
      },
      {
        question: "Qual a forma correta para 'study' na frase: 'Rick ___ English every day'?",
        options: [
          "study",
          "studies",
          "studied",
          "studying"
        ],
        answer: 1,
        feedback: "Para verbos terminados em consoante + y na terceira pessoa do singular, troca-se 'y' por 'ies'."
      },
      {
        question: "Para usar no Simple Present, o verbo deve estar no infinitivo com ou sem 'to'?",
        options: [
          "Com 'to'",
          "Sem 'to'",
          "Com '-ing'",
          "No passado"
        ],
        answer: 1,
        feedback: "No Simple Present, o verbo deve estar no infinitivo sem 'to' (bare infinitive)."
      }
    ]
  },
  {
    subject: "Aula 3: Estratégia de Leitura I",
    questions: [
      {
        question: "Qual dos exemplos a seguir é não-verbal?",
        options: [
          "Texto de jornal",
          "Infográfico",
          "Livro",
          "Conversa"
        ],
        answer: 1,
        feedback: "Infográficos são elementos não-verbais que transmitem informações através de imagens, gráficos e símbolos."
      },
      {
        question: "Previsão (Prediction) significa:",
        options: [
          "Ler todos os detalhes do texto",
          "Antecipar o conteúdo usando título, imagens ou gráficos",
          "Ignorar imagens e tabelas",
          "Focar apenas nas palavras desconhecidas"
        ],
        answer: 1,
        feedback: "Previsão é uma estratégia que usa pistas visuais e contextuais para antecipar o conteúdo do texto."
      },
      {
        question: "Ler nas entrelinhas de um texto é chamado de:",
        options: [
          "Skimming",
          "Scanning",
          "Inferência",
          "Tradução literal"
        ],
        answer: 2,
        feedback: "Inferência é a habilidade de deduzir informações implícitas que não estão claramente expressas no texto."
      },
      {
        question: "Qual técnica é usada para procurar informações específicas?",
        options: [
          "Skimming",
          "Scanning",
          "Previsão",
          "Inferência"
        ],
        answer: 1,
        feedback: "Scanning é a técnica de leitura rápida para localizar informações específicas no texto."
      },
      {
        question: "Identifique o falso cognato: 'Parents'",
        options: [
          "Pais",
          "Parentes",
          "Ambos",
          "Nenhum"
        ],
        answer: 0,
        feedback: "'Parents' significa 'pais', não 'parentes'. É um falso cognato comum que pode causar confusão."
      }
    ]
  },
  {
    subject: "Aula 4: Simple Past",
    questions: [
      {
        question: "Estrutura → Sujeito + Verbo no passado + Complemento. Complete: 'I ___ (work) yesterday.'",
        options: [
          "work",
          "works",
          "worked",
          "working"
        ],
        answer: 2,
        feedback: "O verbo 'work' é regular, então no Simple Past adiciona-se 'ed': worked."
      },
      {
        question: "Qual a forma correta do verbo 'study' no passado?",
        options: [
          "studed",
          "studied",
          "studyed",
          "studies"
        ],
        answer: 1,
        feedback: "Para verbos terminados em consoante + y, troca-se 'y' por 'ied': studied."
      },
      {
        question: "Qual a forma correta de 'come' no Simple Past?",
        options: [
          "comed",
          "came",
          "comes",
          "coming"
        ],
        answer: 1,
        feedback: "'Come' é um verbo irregular, sua forma no passado é 'came'."
      },
      {
        question: "Estrutura → Sujeito + did not + Verbo (base) + Complemento. Complete: 'She ___ (not/go) to school yesterday.'",
        options: [
          "didn't went",
          "didn't go",
          "didn't gone",
          "don't go"
        ],
        answer: 1,
        feedback: "Na forma negativa do Simple Past, usa-se 'did not' + verbo no infinitivo sem 'to'."
      },
      {
        question: "Estrutura → Did + Sujeito + Verbo (base) + Complemento + ? Complete: '___ you watch the movie last night?'",
        options: [
          "Do",
          "Did",
          "Does",
          "Done"
        ],
        answer: 1,
        feedback: "Para formar perguntas no Simple Past, usa-se 'did' + sujeito + verbo no infinitivo sem 'to'."
      }
    ]
  },
  {
    subject: "Aula 5: Estratégia de Leitura II",
    questions: [
      {
        question: "Qual o prefixo que indica negação?",
        options: [
          "re-",
          "un-",
          "mid-",
          "bi-"
        ],
        answer: 1,
        feedback: "O prefixo 'un-' indica negação, como em 'unhappy' (infeliz) ou 'unable' (incapaz)."
      },
      {
        question: "Qual sufixo forma adjetivos indicando 'cheio de'?",
        options: [
          "-less",
          "-ful",
          "-able",
          "-ing"
        ],
        answer: 1,
        feedback: "O sufixo '-ful' indica 'cheio de', como em 'helpful' (prestativo) ou 'beautiful' (belo)."
      },
      {
        question: "Skimming é usado para:",
        options: [
          "Localizar dados específicos",
          "Ler rapidamente para captar a ideia geral",
          "Traduzir palavra por palavra",
          "Ignorar o texto"
        ],
        answer: 1,
        feedback: "Skimming é uma leitura rápida e superficial para captar a ideia geral do texto."
      },
      {
        question: "Scanning é útil para:",
        options: [
          "Compreender o tema geral",
          "Localizar informações pontuais",
          "Estudar gramática",
          "Escrever resumos"
        ],
        answer: 1,
        feedback: "Scanning é uma técnica de leitura para encontrar informações específicas rapidamente."
      },
      {
        question: "Qual processo cria uma nova palavra a partir da junção de duas palavras?",
        options: [
          "Affixation",
          "Conversion",
          "Compounding",
          "Inflection"
        ],
        answer: 2,
        feedback: "Compounding é o processo de formar palavras compostas juntando duas palavras, como 'bookstore'."
      }
    ]
  },
  {
    subject: "Aula 6: Simple Future",
    questions: [
      {
        question: "Estrutura → Sujeito + will + verbo (infinitivo sem 'to') + Complemento. Complete: 'We ___ (buy) a new car tomorrow.'",
        options: [
          "buy",
          "will buy",
          "bought",
          "will bought"
        ],
        answer: 1,
        feedback: "No Simple Future, usa-se 'will' + verbo no infinitivo sem 'to'."
      },
      {
        question: "Qual a forma contraída de 'I will'?",
        options: [
          "I'm",
          "I'll",
          "I've",
          "I'd"
        ],
        answer: 1,
        feedback: "'I'll' é a contração de 'I will', muito comum na linguagem falada e informal."
      },
      {
        question: "Estrutura → Sujeito + will not (won't) + verbo (base) + Complemento. Complete: 'They ___ (not/come) to the party.'",
        options: [
          "won't come",
          "will comes",
          "will came",
          "don't come"
        ],
        answer: 0,
        feedback: "'Won't' é a contração de 'will not' e é seguido pelo verbo no infinitivo sem 'to'."
      },
      {
        question: "Estrutura → Will + Sujeito + Verbo (base) + Complemento + ? Complete: '___ you travel next month?'",
        options: [
          "Do",
          "Did",
          "Will",
          "Are"
        ],
        answer: 2,
        feedback: "Para formar perguntas no Simple Future, usa-se 'will' + sujeito + verbo no infinitivo sem 'to'."
      },
      {
        question: "Qual frase indica um plano já decidido?",
        options: [
          "I will call you tonight.",
          "I'm going to study tomorrow.",
          "I go to school every day.",
          "I studied yesterday."
        ],
        answer: 1,
        feedback: "'Going to' é usado para planos já decididos ou intenções, enquanto 'will' é mais espontâneo."
      }
    ]
  },
  {
    subject: "Aula 7: Estratégia de Leitura III",
    questions: [
      {
        question: "Identifique o cognato verdadeiro:",
        options: [
          "Library → livraria",
          "College → colégio",
          "Hospital → hospital",
          "Parents → parentes"
        ],
        answer: 2,
        feedback: "'Hospital' é um cognato verdadeiro, tendo o mesmo significado em inglês e português."
      },
      {
        question: "O termo 'actually' significa:",
        options: [
          "Atualmente",
          "Na verdade",
          "Realmente",
          "Eventualmente"
        ],
        answer: 1,
        feedback: "'Actually' é um falso cognato que significa 'na verdade', não 'atualmente' (currently)."
      },
      {
        question: "Qual conector indica adição de ideias?",
        options: [
          "However",
          "But",
          "And",
          "Because"
        ],
        answer: 2,
        feedback: "'And' é o conector mais comum para adicionar ideias ou informações."
      },
      {
        question: "Qual conector expressa oposição?",
        options: [
          "Because",
          "Although",
          "And",
          "So"
        ],
        answer: 1,
        feedback: "'Although' expressa contraste ou oposição entre duas ideias."
      },
      {
        question: "Qual conector expressa causa/razão?",
        options: [
          "Because",
          "But",
          "However",
          "Or"
        ],
        answer: 0,
        feedback: "'Because' é usado para expressar causa, razão ou explicação."
      },
      {
        question: "'Therefore' é usado para expressar:",
        options: [
          "Comparação",
          "Causa",
          "Consequência",
          "Contraste"
        ],
        answer: 2,
        feedback: "'Therefore' indica consequência ou resultado lógico de algo mencionado anteriormente."
      },
      {
        question: "Qual das situações usa scanning?",
        options: [
          "Procurar o preço de um produto em um anúncio",
          "Ler um livro para entender a ideia geral",
          "Ler uma história por diversão",
          "Traduzir palavra por palavra"
        ],
        answer: 0,
        feedback: "Scanning é usado para localizar informações específicas, como preços em anúncios."
      },
      {
        question: "Qual das situações usa skimming?",
        options: [
          "Procurar uma palavra específica no dicionário",
          "Ler o resumo de um artigo para captar a ideia geral",
          "Traduzir frase por frase",
          "Ler uma lista de compras"
        ],
        answer: 1,
        feedback: "Skimming é usado para captar rapidamente a ideia geral de um texto."
      },
      {
        question: "A estratégia de inferência é usada quando:",
        options: [
          "Traduzimos palavra por palavra",
          "Ignoramos palavras desconhecidas",
          "Deduzimos o sentido pelo contexto",
          "Usamos o dicionário sempre"
        ],
        answer: 2,
        feedback: "Inferência permite deduzir significados através do contexto, sem tradução literal."
      },
      {
        question: "Ao ler um gráfico ou tabela para complementar o texto, o leitor está usando:",
        options: [
          "Conectores",
          "Estratégia de identificação de informações não-verbais",
          "Tradução literal",
          "Scanning apenas"
        ],
        answer: 1,
        feedback: "Informações não-verbais como gráficos e tabelas complementam e enriquecem a compreensão do texto."
      }
    ]
  },
  {
    subject: "Aula 8: Tópicos gramaticais (Present Continuous)",
    questions: [
      {
        question: "O Present Continuous é usado, na língua inglesa, para:",
        options: [
          "Expressar hábitos e rotinas diárias",
          "Indicar ações que ocorreram no passado",
          "Mostrar ações em desenvolvimento no momento da fala",
          "Apontar ações que sempre acontecem em um horário específico"
        ],
        answer: 2,
        feedback: "O Present Continuous é usado para expressar ações que estão acontecendo no momento da fala ou em um período atual."
      },
      {
        question: "Qual das opções está na forma afirmativa correta do Present Continuous?",
        options: [
          "She not is watching TV",
          "She watching TV is",
          "She is watching TV",
          "Is she watching TV"
        ],
        answer: 2,
        feedback: "A estrutura afirmativa do Present Continuous é: Sujeito + verbo to be + verbo -ing + complemento."
      },
      {
        question: "Na forma negativa do Present Continuous, a estrutura correta é:",
        options: [
          "Sujeito + verbo to be + verbo + complemento",
          "Sujeito + verbo to be + verbo -ing + complemento",
          "Verbo to be + sujeito + verbo -ing + complemento",
          "Sujeito + verbo to be + not + verbo -ing + complemento"
        ],
        answer: 3,
        feedback: "A forma negativa do Present Continuous segue a estrutura: Sujeito + verbo to be + not + verbo -ing + complemento."
      },
      {
        question: "Assinale a alternativa em que a regra de formação do -ing foi aplicada corretamente:",
        options: [
          "To dance → danceing",
          "To make → makeing",
          "To run → runing",
          "To cut → cutting"
        ],
        answer: 3,
        feedback: "Para verbos terminados em consoante-vogal-consoante (CVC), dobra-se a consoante final antes de adicionar -ing: cut → cutting."
      },
      {
        question: "Qual das alternativas apresenta uma pergunta correta no Present Continuous?",
        options: [
          "She is going to the park?",
          "Going she is to the park?",
          "Is she going to the park?",
          "She going is to the park?"
        ],
        answer: 2,
        feedback: "A estrutura interrogativa do Present Continuous é: Verbo to be + sujeito + verbo -ing + complemento + ?"
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
            
            // Cria feedback com letra da resposta correta
            const correctLetter = String.fromCharCode(65 + newCorrectAnswer);
            const originalCorrectOption = question.options[question.answer];
            const newFeedback = `Resposta correta: ${correctLetter}) ${originalCorrectOption}. ${question.feedback}`;
            
            return {
                ...question,
                options: shuffledOptions,
                answer: newCorrectAnswer,
                feedback: newFeedback
            };
        })
    }));
}

// Inicializa o quiz SEM embaralhar (mantém ordem após F5)
function initializeQuiz() {
    userAnswers = [];
    quizSubmitted = false;

    // Tenta carregar dados embaralhados do sessionStorage
    const savedQuizData = sessionStorage.getItem('shuffledQuizData');
    
    if (savedQuizData) {
        // Se existem dados salvos, usa eles (mantém ordem após F5)
        quizData = JSON.parse(savedQuizData);
    } else {
        // Se não existem dados salvos, embaralha e salva
        quizData = createShuffledQuizData();
        sessionStorage.setItem('shuffledQuizData', JSON.stringify(quizData));
    }

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
                          userAnswers[questionIndex] === question.answer
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

    // Cria novos dados embaralhados e salva no sessionStorage
    quizData = createShuffledQuizData();
    sessionStorage.setItem('shuffledQuizData', JSON.stringify(quizData));

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

// Função para limpar respostas SEM embaralhar novamente
function clearAnswers() {
    if (clearButton && clearButton.disabled) {
        return;
    }

    // Limpa todas as respostas do usuário
    userAnswers.fill(null);

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
    // Marca como enviado temporariamente para mostrar respostas
    quizSubmitted = true;
    
    // Preenche userAnswers com as respostas corretas para mostrar os feedbacks
    userAnswers = quizData.flatMap(subject => subject.questions.map(q => q.answer));
    
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

const QUIZ_ID = 'Questoes_ingles_2'; // ← ALTERE PARA CADA QUIZ (ex: 'matematica_unidade2', 'historia_capitulo1', etc.)

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
    window.location.href = '../english.html';
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
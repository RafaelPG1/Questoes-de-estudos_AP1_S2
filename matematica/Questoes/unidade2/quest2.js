// Configuração do quiz de Matemática - UNIDADE 1
const quizData = [
  {
    subject: "2.1 Funções de primeiro grau",
    questions: [
      {
        question: "Qual é a lei da função de 1º grau cujo gráfico passa pelos pontos (0,2) e (1,5)?",
        options: [
          "f(x) = 2x + 1",
          "f(x) = 3x + 2", 
          "f(x) = 5x + 2",
          "f(x) = 2x – 3"
        ],
        answer: 1,
        feedback: "Resposta correta: B) f(x) = 3x + 2. Usando dois pontos para encontrar a equação da reta, temos coeficiente angular m = 3 e coeficiente linear b = 2."
      },
      {
        question: "A função f(x) = –2x + 6 tem raiz em:",
        options: [
          "2",
          "–3",
          "3",
          "–2"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 3. Para encontrar a raiz, fazemos f(x) = 0: -2x + 6 = 0, logo x = 3."
      },
      {
        question: "Se f(x) = 4x – 1, o valor de f(2) é:",
        options: [
          "6",
          "7",
          "8", 
          "9"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 7. Substituindo x = 2 na função: f(2) = 4(2) - 1 = 8 - 1 = 7."
      },
      {
        question: "O coeficiente angular da função f(x) = 7x – 3 é:",
        options: [
          "–3",
          "7",
          "3",
          "–7"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 7. Em uma função linear f(x) = ax + b, o coeficiente angular é sempre o valor de 'a'."
      },
      {
        question: "A reta de equação y = –x + 4 corta o eixo x em:",
        options: [
          "(0,4)",
          "(4,0)",
          "(–4,0)",
          "(0,–4)"
        ],
        answer: 1,
        feedback: "Resposta correta: B) (4,0). Para encontrar onde corta o eixo x, fazemos y = 0: 0 = -x + 4, logo x = 4."
      }
    ]
  },
  {
    subject: "2.2 Funções custo, receita e lucro do 1° grau",
    questions: [
      {
        question: "Se o custo C(x) = 50x + 200 e o preço de venda é 70 por unidade, a receita R(x) é:",
        options: [
          "70x + 200",
          "50x + 200", 
          "20x + 200",
          "70x"
        ],
        answer: 3,
        feedback: "Resposta correta: D) 70x. A receita é o preço unitário multiplicado pela quantidade vendida."
      },
      {
        question: "Com os dados da questão anterior, o lucro L(x) é:",
        options: [
          "20x – 200",
          "20x + 200",
          "70x – 50x – 200", 
          "20x – 200"
        ],
        answer: 3,
        feedback: "Resposta correta: D) 20x – 200. Lucro = Receita - Custo = 70x - (50x + 200) = 20x - 200."
      },
      {
        question: "Para que o lucro seja positivo na função L(x) = 20x – 200, x deve ser:",
        options: [
          "x > 10",
          "x ≥ 10",
          "x < 10",
          "x ≤ 10"
        ],
        answer: 0,
        feedback: "Resposta correta: A) x > 10. Para lucro positivo: 20x - 200 > 0, logo x > 10."
      },
      {
        question: "Se a empresa vende 20 unidades, qual será o lucro?",
        options: [
          "100",
          "200",
          "300",
          "400"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 200. L(20) = 20(20) - 200 = 400 - 200 = 200."
      },
      {
        question: "Qual é o ponto de equilíbrio (lucro zero) da função L(x) = 20x – 200?",
        options: [
          "x = 5",
          "x = 10", 
          "x = 15",
          "x = 20"
        ],
        answer: 1,
        feedback: "Resposta correta: B) x = 10. No ponto de equilíbrio: 20x - 200 = 0, logo x = 10."
      }
    ]
  },
  {
    subject: "2.3 Funções demanda e oferta do 1° grau",
    questions: [
      {
        question: "Se a função demanda é D(p) = 100 – 5p, qual é a quantidade demandada para p = 10?",
        options: [
          "50",
          "100", 
          "20",
          "0"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 50. D(10) = 100 - 5(10) = 100 - 50 = 50."
      },
      {
        question: "Se a função oferta é O(p) = 20 + 3p, a quantidade ofertada para p = 10 é:",
        options: [
          "30",
          "40",
          "50",
          "60"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 50. O(10) = 20 + 3(10) = 20 + 30 = 50."
      },
      {
        question: "O preço de equilíbrio ocorre quando D(p) = O(p). Se D(p) = 100 – 5p e O(p) = 20 + 3p, o preço de equilíbrio é:",
        options: [
          "5",
          "8",
          "10",
          "12"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 10. Igualando: 100 - 5p = 20 + 3p, temos 80 = 8p, logo p = 10."
      },
      {
        question: "No preço de equilíbrio da questão anterior, a quantidade é:",
        options: [
          "40",
          "50",
          "60",
          "70"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 50. Substituindo p = 10 em qualquer função: D(10) = O(10) = 50."
      },
      {
        question: "Se a demanda é D(p) = 200 – 10p, qual é o preço máximo para que ainda haja demanda positiva?",
        options: [
          "10",
          "15",
          "20",
          "25"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 20. Para demanda positiva: 200 - 10p > 0, logo p < 20. O preço máximo é 20."
      }
    ]
  },
  {
    subject: "2.4 Função quadrática",
    questions: [
      {
        question: "A função f(x) = x² – 4 tem raízes em:",
        options: [
          "–4 e 4",
          "–2 e 2",
          "–1 e 1",
          "–√2 e √2"
        ],
        answer: 1,
        feedback: "Resposta correta: B) –2 e 2. x² - 4 = 0, logo x² = 4, então x = ±2."
      },
      {
        question: "A concavidade da parábola f(x) = –x² + 3x – 1 é voltada:",
        options: [
          "Para cima",
          "Para baixo",
          "Para os lados",
          "Não possui concavidade"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Para baixo. Como o coeficiente de x² é negativo (-1), a concavidade é voltada para baixo."
      },
      {
        question: "O vértice da parábola f(x) = x² – 6x + 5 é:",
        options: [
          "(3,–4)",
          "(2,1)",
          "(5,0)",
          "(–3,4)"
        ],
        answer: 0,
        feedback: "Resposta correta: A) (3,–4). Xv = -b/2a = 6/2 = 3, e Yv = f(3) = 9 - 18 + 5 = -4."
      },
      {
        question: "A função f(x) = 2x² – 8x + 6 tem valor mínimo igual a:",
        options: [
          "–2",
          "–2",
          "2",
          "4"
        ],
        answer: 0,
        feedback: "Resposta correta: A) –2. Calculando o vértice: Xv = 8/4 = 2, Yv = f(2) = 8 - 16 + 6 = -2."
      },
      {
        question: "As raízes de f(x) = x² – 5x + 6 são:",
        options: [
          "2 e 3",
          "–2 e –3",
          "1 e 6", 
          "–1 e –6"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 2 e 3. Fatorando: (x-2)(x-3) = 0, logo x = 2 ou x = 3."
      }
    ]
  },
  {
    subject: "2.5 Função receita",
    questions: [
      {
        question: "Se o preço é p e a quantidade vendida é q(p) = 100 – p, a receita R(p) é:",
        options: [
          "100 – p",
          "p(100 – p)",
          "100p – 1",
          "100p – p²"
        ],
        answer: 3,
        feedback: "Resposta correta: D) 100p – p². Receita = preço × quantidade = p(100 - p) = 100p - p²."
      },
      {
        question: "Na função da questão anterior, qual preço maximiza a receita?",
        options: [
          "25",
          "50",
          "75", 
          "100"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 50. Para função quadrática R(p) = 100p - p², o máximo ocorre em p = 100/2 = 50."
      },
      {
        question: "A receita máxima da função R(p) = 100p – p² é:",
        options: [
          "1000",
          "2000",
          "2500",
          "5000"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 2500. R(50) = 100(50) - 50² = 5000 - 2500 = 2500."
      },
      {
        question: "Se o preço for p = 20, a receita será:",
        options: [
          "800",
          "1600",
          "1600",
          "2000"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 1600. R(20) = 100(20) - 20² = 2000 - 400 = 1600."
      },
      {
        question: "A função receita é sempre:",
        options: [
          "Linear",
          "Quadrática",
          "Exponencial",
          "Constante"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Quadrática. Quando a demanda é linear, a receita resulta em função quadrática."
      }
    ]
  },
  {
    subject: "2.6 Função lucro quadrática",
    questions: [
      {
        question: "Se R(x) = 100x – x² e C(x) = 20x + 200, o lucro L(x) é:",
        options: [
          "–x² + 80x – 200",
          "–x² + 100x – 200",
          "x² + 80x + 200",
          "–x² + 20x + 200"
        ],
        answer: 0,
        feedback: "Resposta correta: A) –x² + 80x – 200. L(x) = R(x) - C(x) = (100x - x²) - (20x + 200)."
      },
      {
        question: "Qual é o ponto de equilíbrio do lucro L(x) = –x² + 80x – 200?",
        options: [
          "x = 2,5 e x = 80",
          "x = 5 e x = 40",
          "x = 10 e x = 70",
          "x = 20 e x = 60"
        ],
        answer: 0,
        feedback: "Resposta correta: A) x = 2,5 e x = 80. Resolvendo -x² + 80x - 200 = 0 usando fórmula quadrática."
      },
      {
        question: "O valor máximo do lucro L(x) = –x² + 80x – 200 ocorre em:",
        options: [
          "x = 20",
          "x = 30",
          "x = 40",
          "x = 50"
        ],
        answer: 2,
        feedback: "Resposta correta: C) x = 40. O vértice da parábola ocorre em x = -b/2a = -80/(-2) = 40."
      },
      {
        question: "O lucro máximo da função da questão anterior é:",
        options: [
          "1200",
          "1400",
          "1600",
          "1800"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 1600. L(40) = -40² + 80(40) - 200 = -1600 + 3200 - 200 = 1600."
      },
      {
        question: "Se a empresa vende 10 unidades, o lucro será:",
        options: [
          "500",
          "500",
          "600",
          "700"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 500. L(10) = -10² + 80(10) - 200 = -100 + 800 - 200 = 500."
      }
    ]
  },
  {
    subject: "2.7 Função polinomial",
    questions: [
      {
        question: "Qual é o grau do polinômio f(x) = 5x³ – 2x² + 7?",
        options: [
          "1",
          "2", 
          "3",
          "5"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 3. O grau do polinômio é determinado pela maior potência de x."
      },
      {
        question: "A função f(x) = x⁴ – 3x² + 2 é:",
        options: [
          "Polinômio do 2º grau",
          "Polinômio do 3º grau",
          "Polinômio do 4º grau",
          "Não é polinômio"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Polinômio do 4º grau. A maior potência de x é 4."
      },
      {
        question: "O termo independente de f(x) = 2x³ – 5x + 4 é:",
        options: [
          "2",
          "–5",
          "4",
          "3"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 4. O termo independente é aquele que não possui variável."
      },
      {
        question: "Se f(x) = x³ – x, então f(2) = ?",
        options: [
          "6",
          "8",
          "10",
          "12"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 6. f(2) = 2³ - 2 = 8 - 2 = 6."
      },
      {
        question: "O gráfico de uma função polinomial de grau ímpar possui:",
        options: [
          "Apenas máximo",
          "Apenas mínimo",
          "Máximo e mínimo",
          "Pelo menos uma raiz real"
        ],
        answer: 3,
        feedback: "Resposta correta: D) Pelo menos uma raiz real. Funções de grau ímpar sempre atravessam o eixo x."
      }
    ]
  },
  {
    subject: "2.8 Função logaritmo",
    questions: [
      {
        question: "O valor de log₂(8) é:",
        options: [
          "2",
          "3",
          "4",
          "8"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 3. Porque 2³ = 8."
      },
      {
        question: "Qual é o valor de log₁₀(1000)?",
        options: [
          "1",
          "2",
          "3",
          "10"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 3. Porque 10³ = 1000."
      },
      {
        question: "Se log₃(81) = x, então x vale:",
        options: [
          "2",
          "3",
          "4",
          "5"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 4. Porque 3⁴ = 81."
      },
      {
        question: "A função f(x) = log(x) é definida para:",
        options: [
          "x ≥ 0",
          "x > 0",
          "x < 0",
          "Todo x real"
        ],
        answer: 1,
        feedback: "Resposta correta: B) x > 0. O logaritmo só é definido para números positivos."
      },
      {
        question: "O logaritmo natural ln(e) é igual a:",
        options: [
          "0",
          "1",
          "e",
          "10"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 1. Porque e¹ = e."
      }
    ]
  },
  {
    subject: "2.9 Função exponencial",
    questions: [
      {
        question: "Qual é o valor de 2³?",
        options: [
          "6",
          "8",
          "9",
          "12"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 8. 2³ = 2 × 2 × 2 = 8."
      },
      {
        question: "A função f(x) = 3ˣ é sempre:",
        options: [
          "Negativa",
          "Positiva",
          "Zero",
          "Constante"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Positiva. Exponencial com base positiva é sempre positiva."
      },
      {
        question: "Qual é o valor de 10⁰?",
        options: [
          "0",
          "1",
          "10",
          "Não existe"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 1. Qualquer número elevado a zero é igual a 1."
      },
      {
        question: "Se f(x) = 2ˣ, então f(–2) é:",
        options: [
          "–4",
          "–1/4",
          "1/4",
          "4"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 1/4. f(-2) = 2⁻² = 1/2² = 1/4."
      },
      {
        question: "O gráfico de uma função exponencial crescente possui:",
        options: [
          "Base maior que 1",
          "Base entre 0 e 1",
          "Base negativa",
          "Base igual a zero"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Base maior que 1. Para crescimento exponencial, a base deve ser > 1."
      },
      {
        question: "Qual é o valor de 5²?",
        options: [
          "10",
          "20",
          "25",
          "50"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 25. 5² = 5 × 5 = 25."
      },
      {
        question: "A função f(x) = (1/2)ˣ é:",
        options: [
          "Crescente",
          "Decrescente",
          "Constante",
          "Linear"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Decrescente. Base entre 0 e 1 resulta em função decrescente."
      },
      {
        question: "Se f(x) = 4ˣ, então f(0) vale:",
        options: [
          "0",
          "1",
          "2",
          "4"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 1. 4⁰ = 1."
      },
      {
        question: "O valor de 2⁵ é:",
        options: [
          "16",
          "32",
          "64",
          "128"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 32. 2⁵ = 2 × 2 × 2 × 2 × 2 = 32."
      },
      {
        question: "Se f(x) = 3ˣ, o valor de f(–1) é:",
        options: [
          "–3",
          "0",
          "1/3",
          "3"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 1/3. f(-1) = 3⁻¹ = 1/3."
      }
    ]
  }
];

// Variáveis do quiz
let userAnswers = [];
let quizSubmitted = false;
let shuffledQuizData = []; // Nova variável para armazenar dados embaralhados

// Elementos do DOM
const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit");
const restartButton = document.getElementById("restart");
const resultsContainer = document.getElementById("results");

// Função para embaralhar um array usando algoritmo Fisher-Yates
function shuffleArray(array) {
  const newArray = [...array]; // Cria uma cópia do array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Função para embaralhar as opções de todas as questões
function shuffleQuizOptions() {
  shuffledQuizData = quizData.map(subject => ({
    ...subject,
    questions: subject.questions.map(question => {
      // Cria um array com índices das opções
      const optionIndices = question.options.map((_, index) => index);
      const shuffledIndices = shuffleArray(optionIndices);
      
      // Reorganiza as opções baseado nos índices embaralhados
      const shuffledOptions = shuffledIndices.map(index => question.options[index]);
      
      // Encontra o novo índice da resposta correta
      const newCorrectAnswer = shuffledIndices.indexOf(question.answer);
      
      return {
        ...question,
        options: shuffledOptions,
        answer: newCorrectAnswer
      };
    })
  }));
}

// Inicializa o quiz
function initializeQuiz() {
  userAnswers = [];
  quizSubmitted = false;

  // Embaralha as opções na primeira inicialização
  if (shuffledQuizData.length === 0) {
    shuffleQuizOptions();
  }

  // Cria array plano de todas as questões
  const allQuestions = [];
  shuffledQuizData.forEach((subject) => {
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
  let baseQuestionNumber = 50; // Começamos em 50 para que a primeira questão seja 51

  shuffledQuizData.forEach((subject) => {
    questionsHTML += `<div class="subject-title">${subject.subject}</div>`;

    subject.questions.forEach((question, qIndex) => {
      const currentQuestionNumber = baseQuestionNumber + questionIndex + 1;
      questionsHTML += `
                <div class="question-container">
                    <div class="question-number">Questão ${currentQuestionNumber}</div>
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
                      quizSubmitted && userAnswers[questionIndex] !== null
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
    // Função de scroll suave animado (sem usar window.scrollTo diretamente)
    const duration = 800; // duração em milissegundos
    const start = window.pageYOffset;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Função de easing suave
        const ease = progress * (2 - progress); // ease-out
        
        window.scrollTo(0, start * (1 - ease));
        
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }
    
    requestAnimationFrame(animateScroll);
}

/**
 * MOSTRAR NOTIFICAÇÃO DE ALERTA
 */
function showAlertNotification(message) {
    // Cria elemento de notificação
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

    // Adiciona ao DOM
    document.body.appendChild(alertNotification);

    // Animação de entrada
    setTimeout(() => {
        alertNotification.style.opacity = '1';
        alertNotification.style.transform = 'translateX(-50%) translateY(0)';
    }, 50);

    // Remove após 3 segundos
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
    // Encontra a primeira questão não respondida
    const firstUnansweredIndex = userAnswers.findIndex(answer => answer === null);

    if (firstUnansweredIndex !== -1) {
        // Seleciona todos os containers de questões
        const questionContainers = document.querySelectorAll('.question-container');
        const targetQuestion = questionContainers[firstUnansweredIndex];

        if (targetQuestion) {
            // Scroll suave até a questão não respondida
            targetQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Mostra notificação centralizada de alerta
        showAlertNotification("⚠️ Por favor, responda todas as questões antes de enviar.");

        return; // interrompe o envio
    }

    // Se todas respondidas, continua normalmente
    quizSubmitted = true;
    showAllQuestions();

    // DESABILITA O BOTÃO LIMPAR QUANDO ENVIAR RESPOSTAS
    const clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.disabled = true;
        clearButton.style.opacity = '0.5';
        clearButton.style.cursor = 'not-allowed';
    }

    let score = 0;
    let questionIndex = 0;

    shuffledQuizData.forEach((subject) => {
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

// Reinicia o quiz
function restartQuiz() {
    userAnswers = [];
    quizSubmitted = false;

    // EMBARALHA AS OPÇÕES NOVAMENTE
    shuffleQuizOptions();

    const allQuestions = [];
    shuffledQuizData.forEach((subject) => {
        allQuestions.push(...subject.questions);
    });
    userAnswers = new Array(allQuestions.length).fill(null);

    showAllQuestions();
    resultsContainer.style.display = "none";
    submitButton.style.display = "inline-block";
    restartButton.style.display = "none";

    // REABILITA BOTÃO LIMPAR E RESTAURA APARÊNCIA
    const clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.disabled = false;
        clearButton.style.opacity = '1';
        clearButton.style.cursor = 'pointer';
    }

    // REABILITA BOTÃO REVELAR E RESTAURA APARÊNCIA
    const revealButton = document.getElementById('reveal');
    if (revealButton) {
        revealButton.disabled = false;
        revealButton.style.opacity = '1';
        revealButton.style.cursor = 'pointer';
    }

    // Scroll suave para o topo com animação
    smoothScrollToTop();
}

// Seleciona botão LIMPAR
const clearButton = document.getElementById('clear');

// Função para limpar todas as respostas sem reiniciar o quiz
function clearAnswers() {
    // Verifica se o botão está desabilitado
    if (clearButton && clearButton.disabled) {
        return; // não executa se estiver desabilitado
    }

    // EMBARALHA AS OPÇÕES NOVAMENTE
    shuffleQuizOptions();

    // Limpa todas as respostas do usuário
    userAnswers.fill(null);

    // Desmarca todos os inputs de radio/checkbox
    const respostas = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    respostas.forEach(input => {
        input.checked = false;
    });

    // Atualiza a interface das questões (sem esconder resultados ou reiniciar layout)
    showAllQuestions();

    // Se estava mostrando resultados, esconde
    resultsContainer.style.display = "none";

    // Mostra botão de enviar
    submitButton.style.display = "inline-block";

    // Esconde botão de reiniciar (se necessário)
    restartButton.style.display = "none";

    // Scroll suave para o topo com animação
    smoothScrollToTop();
}

// Seleciona o botão
const revealButton = document.getElementById('reveal');
// Função para revelar todas as respostas
function revealAnswers() {
    // Marca como enviado temporariamente para mostrar respostas
    quizSubmitted = true;
    
    // Preenche o array userAnswers com as respostas corretas para mostrar o feedback
    let questionIndex = 0;
    shuffledQuizData.forEach((subject) => {
        subject.questions.forEach((question) => {
            userAnswers[questionIndex] = question.answer;
            questionIndex++;
        });
    });
    
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

// Adiciona evento ao botão
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

const QUIZ_ID = 'Questoes_unidade_2'; // ← ALTERE PARA CADA QUIZ (ex: 'matematica_unidade2', 'historia_capitulo1', etc.)

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
    window.location.href = '../ques.html';
});

// Rola para o final da página
btnDown.addEventListener('click', () => {
    smoothScrollTo(document.body.scrollHeight, 1000);
});

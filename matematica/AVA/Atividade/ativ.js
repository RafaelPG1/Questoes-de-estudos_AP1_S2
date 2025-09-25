// Configuração do quiz de Matemática
const originalQuizData = [
  {
    subject: "Questões 1-10 (UMA QUESTÃO ESTÁ ERRADA, NÃO SEI QUAL É)",
    questions: [
      {
        question: "João é um empresário que está desenvolvendo um novo produto e precisa entender os custos de produção e venda. Ele percebeu que os custos e receitas podem ser modelados por uma expressão quadrática. Após uma análise, ele chegou à seguinte expressão que representa sua situação financeira: C(x)=x²−mx+nx−mn onde: x representa a quantidade de produtos vendidos, m é um custo fixo por unidade, n é um lucro variável por unidade. João quer saber como simplificar essa expressão para facilitar suas análises financeiras. Ele acredita que pode fatorar essa expressão e gostaria de saber qual é a forma fatorada de C(x). Qual é a opção da forma fatorada da expressão C(x)?",
        options: [
          "(x − m)(x + n)",
          "(x − n)(x + m)",
          "(m − x)(m + n)",
          "(x − m)(x − n)"
        ],
        answer: 0,
        feedback: "Resposta correta: A) (x − m)(x + n)"
      },
      {
        question: "Lucas está ajudando sua irmã a organizar uma festa de aniversário. Ele precisa calcular a quantidade de ingredientes para um bolo especial que requer várias etapas e frações. A receita do bolo pede: 1/2 xícara de açúcar, 1/4 xícara de manteiga, 3/8 xícara de leite. Lucas decide que, para fazer a receita, ele precisa de 2 vezes a quantidade dos ingredientes. Depois de calcular, ele percebe que precisa ajustar a quantidade total e fazer as divisões corretamente. Lucas faz os seguintes cálculos: Primeiro, ele soma o dobro da quantidade total dos ingredientes. Em seguida, ele percebe que, após a soma, ele precisa dividir o total por 2 para ajustar a receita. Para finalizar, ele eleva a quantidade total à potência de 2 para saber quanto de cada ingrediente ele precisa em uma receita que será dobrada. Qual é a opção que Lucas deve escolher que representa a quantidade total de ingredientes necessária para a festa?",
        options: [
          "81/64",
          "64/81",
          "82/81",
          "80/61"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 81/64"
      },
      {
        question: "Ana está organizando uma competição de matemática em sua escola. Um dos desafios é calcular a diferença entre os quadrados de dois números consecutivos, 2021 e 2020. Ana se lembrou de que a diferença de dois quadrados pode ser simplificada usando uma identidade matemática. Ela quer saber qual o resultado que representa o desenvolvimento do produto notável (2021² − 2020²). Ana sabe que a fórmula para a diferença de quadrados é: a² − b² = (a − b)(a + b). Qual é a opção correta que Ana deve escolher que representa o resultado desta operação?",
        options: [
          "4442",
          "4041",
          "4441",
          "4040"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 4041"
      },
      {
        question: "Carlos e Ana estão discutindo sobre a classificação de alguns números racionais que encontraram em suas anotações de matemática. Eles decidiram colocar esses números em ordem crescente para facilitar a comparação. Os números que eles encontraram são: -3/4, 1/2, -1/3, 0, 2/5. Qual é a opção que representa a ordem correta dos números em ordem crescente?",
        options: [
          "0, -1/3, 1/2, -3/4, 2/5",
          "-1/3, -3/4, 0, 1/2, 2/5",
          "-3/4, 0, -1/3, 2/5, 1/2",
          "-3/4, -1/3, 0, 2/5, 1/2"
        ],
        answer: 3,
        feedback: "Resposta correta: D) -3/4, -1/3, 0, 2/5, 1/2"
      },
      {
        question: "João fez uma compra em um supermercado no valor de R$ 950,00. Para pagar, ele usou apenas notas de R$ 10,00 e R$ 50,00. No total, João utilizou 47 notas para completar o pagamento. João quer saber quantas notas de R$ 10,00 ele usou. Para isso, vamos definir: x: o número de notas de R$ 10,00 e y: o número de notas de R$ 50,00. A partir das informações, qual a opção representa o número de notas de R$ 10,00 usadas neste pagamento?",
        options: [
          "35 notas",
          "15 notas",
          "20 notas",
          "10 notas"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 35 notas"
      },
      {
        question: "Em uma loja de informática, Paulo comprou um computador no valor de R$ 2.200,00, uma impressora por R$ 800,00 reais e três cartuchos que custaram R$ 90,00 reais cada um. Os objetos foram pagos em 5 vezes iguais sem juros. O valor de cada parcela, em reais, foi igual a:",
        options: [
          "R$ 414,00",
          "R$ 600,00",
          "R$ 494,00",
          "R$ 654,00"
        ],
        answer: 3,
        feedback: "Resposta correta: D) R$ 654,00"
      },
      {
        question: "Ana é estudante de química e está analisando a acidez de uma solução. Ela descobriu que o pH de uma solução é calculado pela fórmula: pH = -log10(H+) onde H+ é a concentração de íons de hidrogênio na solução, medida em mol/L. Ana tem uma solução com uma concentração de íons de hidrogênio de 0,001 mol/L. Ela quer calcular o pH dessa solução. Para isso, Ana decide usar as propriedades dos logaritmos para simplificar seu cálculo. Marque a opção que indica o valor do pH da solução.",
        options: [
          "2",
          "3",
          "1",
          "4"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 3"
      },
      {
        question: "Um aluno da disciplina de matemática está participando de um projeto na escola e precisa calcular a área de um terreno retangular a ser adquirido pela escola. Ele descobriu que a largura do terreno é representada pela fração algébrica: L = 3x/4 e o comprimento é representado por: C = 5x/2. Lucas quer saber a área total do terreno, que é dada pela multiplicação da largura pelo comprimento e o perímetro. Ele também pretende simplificar as expressões resultantes da área e do perímetro. Qual é opção representa a expressão algébrica da área e do perímetro do terreno em sua forma simplificada?",
        options: [
          "A = 15x²/8 e o perímetro 6x",
          "A = 13x²/8 e o perímetro 6x",
          "A = 15x²/8 e o perímetro 5x",
          "A = 12x²/8 e o perímetro 4x"
        ],
        answer: 0,
        feedback: "Resposta correta: A) A = 15x²/8 e o perímetro 6x"
      },
      {
        question: "Três empresas de táxi W, K e L estão fazendo promoções: a empresa W cobra R$ 2,40 a cada quilômetro rodado e com um custo inicial de R$ 3,00; a empresa K cobra R$ 2,25 a cada quilômetro rodado e uma taxa inicial de R$ 3,80 e, por fim, a empresa L, que cobra R$ 2,50 a cada quilômetro rodado e com taxa inicial de R$ 2,80. Uma pessoa está saindo de casa e vai de táxi para uma reunião que é a 15 km do ponto de táxi. Assim, o valor que essa pessoa deverá pagar, para ter a maior economia é:",
        options: [
          "R$ 40,50",
          "R$ 39,00",
          "R$ 37,25",
          "R$ 39,25"
        ],
        answer: 2,
        feedback: "Resposta correta: C) R$ 37,25"
      },
      {
        question: "Maria está estudando logaritmos e precisa entender como eles se aplicam em situações do mundo real. Ela encontrou uma fórmula que usa logaritmos para calcular a intensidade de uma luz em função da distância e da potência da fonte de luz. Em um experimento, Maria observa que a fonte de luz emite uma intensidade proporcional ao produto da potência da lâmpada (representada por 2 watts) e a distância da fonte (representada por 7 metros). Para determinar a intensidade total da luz, Maria precisa calcular log (2×7). Com os valores que ela encontrou: Log 2 = 0,30 e Log 7 = 0,85. Maria precisa encontrar o valor de log 14 para continuar sua análise. Marque a opção que indica o valor de log 14.",
        options: [
          "1,15",
          "0,85",
          "2,30",
          "0,55"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 1,15"
      }
    ]
  },
  {
    subject: "Questões 11-20 (Todas corretas)",
    questions: [
      {
        question: "Uma empresa de produção está avaliando sua lucratividade para um novo produto. O custo para produzir q unidades é representado pela função: C(q) = 24.000 + 7q onde C(q) é o custo total em reais, e q é a quantidade de unidades produzidas. A receita gerada pela venda dessas q unidades é dada pela função: R(q) = 10q onde R(q) é a receita total em reais. Para que a empresa tenha lucro, a receita deve ser maior que o custo. O gerente da empresa deseja saber para quais valores de q a empresa começará a lucrar. Qual é a condição necessária para que a empresa tenha lucro?",
        options: [
          "Para valores maiores e iguais a 8.000",
          "Para valores maiores que 8.000",
          "Para valores menores que 5.000",
          "Para valores maiores que 20.000"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Para valores maiores que 8.000"
      },
      {
        question: "Em uma empresa de manufatura, o gerente está analisando a viabilidade financeira de produzir um novo produto. O custo fixo mensal da fábrica é de R$ 4.200,00. Além disso, cada unidade do produto custa R$ 16,00 para ser produzida. O preço de venda de cada unidade é de R$ 33,00. Para entender melhor o desempenho financeiro do produto, o gerente deseja calcular o lucro gerado pela produção e venda de 300 unidades. O lucro pode ser calculado pela fórmula: Lucro = Receita Total – Custo Total. Onde: A Receita Total é o preço de venda multiplicado pelo número de unidades vendidas. O Custo Total é a soma do custo fixo e o custo variável (custo de produção multiplicado pelo número de unidades). Com essas informações, qual é o valor do lucro para a produção e venda de 300 unidades?",
        options: [
          "R$ 700,00",
          "R$ 950,00",
          "R$ 900,00",
          "R$ 800,00"
        ],
        answer: 2,
        feedback: "Resposta correta: C) R$ 900,00"
      },
      {
        question: "Os irmãos Gustavo e Felipe organizavam suas figurinhas de acordo com os números inscritos em cada uma. O diagrama A representa as figurinhas de Gustavo e B as figurinhas de Felipe.",
        image: "imagem/questão_13.png",
        questionContinuation: "A partir desse diagrama, pode-se afirmar que:",
        options: [
          "Felipe e Gustavo têm as figurinhas 5, 11, 16 e 20 em comum.",
          "Os irmãos possuem cinco figurinhas em comum sendo elas: 2, 4, 7, 15 e 18.",
          "Felipe tem mais figurinhas que Gustavo.",
          "Os dois irmãos têm a mesma quantidade e não possuem figurinhas em comum."
        ],
        answer: 0,
        feedback: "Resposta correta: A) Felipe e Gustavo têm as figurinhas 5, 11, 16 e 20 em comum."
      },
      {
        question: "Em uma aula de matemática, o professor apresentou uma função linear que modela a relação entre a quantidade de horas estudadas e a pontuação em uma prova. A função é dada por f(x)=3x−4, onde x representa o número de horas estudadas e f(x) representa a pontuação obtida. Para entender melhor essa função, o professor pediu aos alunos que calculassem a pontuação de um aluno que estudou por 3 horas a menos do que a média, ou seja, x=3. Qual é o valor de f(3)?",
        options: [
          "5",
          "2",
          "4",
          "3"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 5"
      },
      {
        question: "Maria está organizando uma festa de aniversário e precisa comprar refrigerantes. Ela sabe que cada garrafa de refrigerante contém 2 litros e que cada convidado consome, em média, 0,5 litros durante a festa. Maria convidou 15 amigos e quer garantir que tenha refrigerante suficiente para todos. Para isso, ela estabeleceu que o total de litros de refrigerante (R) que ela comprar deve ser maior ou igual ao total de litros que seus convidados irão consumir. Marque a opção que indica a quantidade mínima de garrafas de refrigerante que Maria deve comprar.",
        options: [
          "2 garrafas",
          "4 garrafas",
          "3 garrafas",
          "5 garrafas"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 4 garrafas"
      },
      {
        question: "Em uma empresa, o custo fixo mensal é de R$ 3.900,00. O custo de produção de cada unidade do produto é de R$ 13,00, enquanto o preço de venda de cada unidade é de R$ 42,00. Mensalmente, a empresa fabrica e vende 380 unidades. Sabendo que o lucro é calculado pela diferença entre a receita e o custo. Qual das opções a seguir representa o lucro dessa empresa?",
        options: [
          "R$ 7.120,00",
          "R$ 7.220,00",
          "R$ 6.120,00",
          "R$ 8.320,00"
        ],
        answer: 0,
        feedback: "Resposta correta: A) R$ 7.120,00"
      },
      {
        question: "Um empresário está analisando o mercado de um novo produto que ele deseja lançar. Para entender como o preço e a quantidade do produto se relacionam, ele estuda as funções de demanda e oferta. A função de demanda é dada por: p = 100 – 0,5x onde p é o preço do produto em reais e x é a quantidade de produtos que os consumidores desejam comprar. A função de oferta é dada por: q = 10 + 0,5x onde q é a quantidade de produtos que os produtores estão dispostos a vender a um determinado preço. Para que o mercado esteja em equilíbrio, a quantidade demandada deve ser igual à quantidade ofertada. O empresário deseja descobrir qual é o ponto de equilíbrio de mercado, ou seja, o preço e a quantidade em que a oferta e a demanda se igualam. Com essas informações, qual é o ponto de equilíbrio do mercado?",
        options: [
          "(90;35)",
          "(90;45)",
          "(80;45)",
          "(90;55)"
        ],
        answer: 3,
        feedback: "Resposta correta: D) (90;55)"
      },
      {
        question: "Em um supermercado, foram vendidas hoje 228 caixas de sabão de duas marcas. A marca 'A' vendeu o triplo da quantidade de caixas vendidas da marca 'B'. Seja x o número de caixas vendidas da marca 'B'. Assim, a quantidade de caixas vendidas da marca 'A' será 3x. Portanto, a equação que representa a situação é: x + 3x = 228 e o valor de x será 57.",
        options: [
          "3x, x + 3x = 228 e x = 57",
          "2x, 3x + 2x = 228 e x = 67",
          "3x, x + 2x = 228 e x = 47",
          "3x, x + 2x = 228 e x = 57"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 3x, x + 3x = 228 e x = 57"
      },
      {
        question: "Durante um projeto de ciência, os alunos estão analisando a relação entre a temperatura em graus Celsius e a energia consumida por um sistema de aquecimento. Essa relação é modelada pela função linear y = ax + b, onde y representa o consumo de energia e x representa a temperatura. Quando x = 1 → y = 4. Quando x = 2 → y = –5. Resolvendo o sistema, obtém-se a = –9 e b = 13.",
        options: [
          "a = –9, b = 13",
          "a = –3, b = 7",
          "a = 9, b = –5",
          "a = 5, b = –1"
        ],
        answer: 0,
        feedback: "Resposta correta: A) a = –9, b = 13"
      },
      {
        question: "As turmas de 9º ano de uma escola foram consultadas sobre a preferência em relação às disciplinas eletivas A e B de Ciências da Natureza. O resultado foi o seguinte: 38 alunos preferem a eletiva A; 30 alunos preferem a eletiva B; 14 alunos gostam das duas; 9 alunos não gostam de nenhuma delas. Assim, quantos alunos foram consultados?",
        options: [
          "60 alunos",
          "63 alunos",
          "68 alunos",
          "77 alunos"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 63 alunos"
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

// Função para usar dados originais SEM embaralhar
function createOriginalQuizData() {
    return originalQuizData.map(subject => ({
        ...subject,
        questions: subject.questions.map(question => {
            // Cria feedback com a letra da resposta correta original
            const correctLetter = String.fromCharCode(65 + question.answer);
            const originalCorrectOption = question.options[question.answer];
            const feedback = `Resposta correta: ${correctLetter}) ${originalCorrectOption}`;
            
            return {
                ...question,
                feedback: feedback
            };
        })
    }));
}

// Inicializa o quiz (PRIMEIRA VEZ - sem embaralhar)
function initializeQuiz() {
    userAnswers = [];
    quizSubmitted = false;

    // USA DADOS ORIGINAIS sem embaralhar na primeira vez
    quizData = createOriginalQuizData();

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

//==============================================================================

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

// Reinicia o quiz com novas opções embaralhadas (AQUI SIM EMBARALHA)
function restartQuiz() {
    userAnswers = [];
    quizSubmitted = false;

    // AGORA SIM cria novos dados embaralhados (só no restart)
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

// Função para limpar todas as respostas SEM embaralhar opções
function clearAnswers() {
    if (clearButton && clearButton.disabled) {
        return;
    }

    // NÃO cria novos dados embaralhados, apenas limpa respostas
    // quizData = createShuffledQuizData(); <- REMOVIDO

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

// Inicializa o quiz quando a página carrega (SEM embaralhar)
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

const QUIZ_ID = 'Atividade_AVA_mat'; // ← ALTERE PARA CADA QUIZ (ex: 'matematica_unidade2', 'historia_capitulo1', etc.)

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
    window.location.href = '../ava.html';
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
// Configuração do quiz de Matemática - UNIDADE 1: Fundamentos de conjuntos numéricos e operações algébricas
const quizData = [
  {
    subject: "1.1 Conjunto dos N, Z e Q",
    questions: [
      {
        question: "Qual dos números abaixo não pertence ao conjunto dos números naturais (N)?",
        options: [
          "0",
          "5",
          "–2",
          "12"
        ],
        answer: 2,
        feedback: "Resposta correta: C) –2. Os números naturais são os números positivos inteiros incluindo o zero: N = {0, 1, 2, 3, ...}. O número –2 é negativo, portanto não pertence aos naturais."
      },
      {
        question: "Qual dos conjuntos está corretamente ordenado como subconjuntos?",
        options: [
          "Q ⊂ Z ⊂ N",
          "N ⊂ Z ⊂ Q",
          "Z ⊂ Q ⊂ N",
          "Q ⊂ N ⊂ Z"
        ],
        answer: 1,
        feedback: "Resposta correta: B) N ⊂ Z ⊂ Q. Todo número natural é inteiro, todo número inteiro é racional, mas nem todo racional é inteiro e nem todo inteiro é natural."
      },
      {
        question: "Qual número pertence ao conjunto dos racionais (Q), mas não pertence aos inteiros (Z)?",
        options: [
          "4",
          "–3",
          "7/2",
          "0"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 7/2. Este número é uma fração (racional) que não pode ser expressa como um número inteiro, pois 7/2 = 3,5."
      },
      {
        question: "Se um número é natural, então ele é necessariamente:",
        options: [
          "Inteiro e racional.",
          "Inteiro, mas não racional.",
          "Racional, mas não inteiro.",
          "Nem inteiro, nem racional."
        ],
        answer: 0,
        feedback: "Resposta correta: A) Inteiro e racional. Todo número natural é também um número inteiro e racional, pois N ⊂ Z ⊂ Q."
      },
      {
        question: "Qual das alternativas apresenta apenas números inteiros (Z)?",
        options: [
          "–5, 0, 8",
          "1/2, 3, –4",
          "√2, –7, 2",
          "–3/4, –2, 0"
        ],
        answer: 0,
        feedback: "Resposta correta: A) –5, 0, 8. Todos esses números são inteiros (negativos, zero e positivos sem parte decimal)."
      }
    ]
  },
  {
    subject: "1.2 O conjunto dos números irracionais",
    questions: [
      {
        question: "Qual dos números abaixo é irracional?",
        options: [
          "9/3",
          "–5",
          "√2",
          "0"
        ],
        answer: 2,
        feedback: "Resposta correta: C) √2. A raiz quadrada de 2 não pode ser expressa como uma fração de números inteiros, portanto é irracional."
      },
      {
        question: "Qual das afirmações é verdadeira?",
        options: [
          "Todo número irracional pode ser escrito como fração.",
          "A raiz quadrada de qualquer número natural é irracional.",
          "O número π é irracional.",
          "Os números irracionais são subconjunto dos inteiros."
        ],
        answer: 2,
        feedback: "Resposta correta: C) O número π é irracional. Pi não pode ser expresso como uma fração de números inteiros."
      },
      {
        question: "Se um número é irracional, então sua representação decimal é:",
        options: [
          "Finitas casas decimais.",
          "Decimal exato.",
          "Decimal periódico.",
          "Decimal infinito e não periódico."
        ],
        answer: 3,
        feedback: "Resposta correta: D) Decimal infinito e não periódico. Os números irracionais têm representação decimal infinita sem padrão de repetição."
      },
      {
        question: "Entre os seguintes números, qual é irracional?",
        options: [
          "√49",
          "3/4",
          "√3",
          "–2"
        ],
        answer: 2,
        feedback: "Resposta correta: C) √3. A raiz quadrada de 3 não pode ser expressa como uma fração de números inteiros."
      },
      {
        question: "Num projeto arquitetônico, um engenheiro encontrou a medida da diagonal de um quadrado de lado 5 m. Essa diagonal é dada por 5√2. O número obtido pertence ao conjunto:",
        options: [
          "N",
          "Z",
          "Q",
          "Irracionais"
        ],
        answer: 3,
        feedback: "Resposta correta: D) Irracionais. Como √2 é irracional, o produto 5√2 também é irracional."
      }
    ]
  },
  {
    subject: "1.3 Operações com polinômios",
    questions: [
      {
        question: "Calcule: (2x² + 3x) + (x² – 5x)",
        options: [
          "3x² – 2x",
          "x² + 8x",
          "3x² – 8x",
          "x² – 2x"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 3x² – 2x. Somando termos semelhantes: (2x² + x²) + (3x – 5x) = 3x² – 2x."
      },
      {
        question: "Efetue a multiplicação: (x + 2)(x – 3)",
        options: [
          "x² – x – 6",
          "x² – x + 6",
          "x² + 5x – 6",
          "x² – 6x + 6"
        ],
        answer: 0,
        feedback: "Resposta correta: A) x² – x – 6. Aplicando a propriedade distributiva: x·x + x·(-3) + 2·x + 2·(-3) = x² – 3x + 2x – 6 = x² – x – 6."
      },
      {
        question: "Se P(x) = 2x³ – x + 4, o grau do polinômio é:",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 3. O grau de um polinômio é o maior expoente da variável, que neste caso é 3 (em 2x³)."
      },
      {
        question: "Efetue a divisão: (x³ – 8) ÷ (x – 2)",
        options: [
          "x² + 2x + 4",
          "x² – 2x + 4",
          "x² + 4x – 2",
          "x² – 4x + 2"
        ],
        answer: 0,
        feedback: "Resposta correta: A) x² + 2x + 4. Esta é uma divisão de diferença de cubos: x³ – 8 = (x – 2)(x² + 2x + 4)."
      },
      {
        question: "O resultado da subtração (5x² + 2x – 3) – (3x² – 4x + 1) é:",
        options: [
          "8x² + 6x – 4",
          "2x² + 6x – 4",
          "2x² – 2x – 2",
          "8x² – 2x + 2"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 2x² + 6x – 4. Subtraindo termo a termo: (5x² – 3x²) + (2x – (–4x)) + (–3 – 1) = 2x² + 6x – 4."
      }
    ]
  },
  {
    subject: "1.4 Propriedades logarítmicas",
    questions: [
      {
        question: "Resolva: log₂ 8",
        options: [
          "1",
          "2",
          "3",
          "8"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 3. Como 2³ = 8, então log₂ 8 = 3."
      },
      {
        question: "Qual propriedade é usada em: log(a × b) = log a + log b?",
        options: [
          "Propriedade da potência",
          "Propriedade da soma",
          "Propriedade do produto",
          "Propriedade do quociente"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Propriedade do produto. Esta é a propriedade fundamental que relaciona o logaritmo de um produto com a soma dos logaritmos."
      },
      {
        question: "Calcule: log₅ 25",
        options: [
          "2",
          "5",
          "10",
          "1"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 2. Como 5² = 25, então log₅ 25 = 2."
      },
      {
        question: "Simplifique: log(100) – log(10)",
        options: [
          "1",
          "2",
          "10",
          "0"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 1. Usando a propriedade do quociente: log(100) – log(10) = log(100/10) = log(10) = 1."
      },
      {
        question: "Se log_a b = x, então b = ?",
        options: [
          "aˣ",
          "xᵃ",
          "a / x",
          "x / a"
        ],
        answer: 0,
        feedback: "Resposta correta: A) aˣ. Esta é a definição fundamental de logaritmo: se log_a b = x, então b = aˣ."
      }
    ]
  },
  {
    subject: "1.5 Equações e inequações do 1º grau",
    questions: [
      {
        question: "Resolva: 3x – 5 = 10",
        options: [
          "5",
          "–5",
          "15",
          "–15"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 5. Resolvendo: 3x = 10 + 5 → 3x = 15 → x = 5."
      },
      {
        question: "Se o dobro de um número aumentado de 7 é igual a 25, qual é esse número?",
        options: [
          "8",
          "9",
          "10",
          "12"
        ],
        answer: 1,
        feedback: "Resposta correta: B) 9. Equação: 2x + 7 = 25 → 2x = 18 → x = 9."
      },
      {
        question: "Resolva a inequação: 2x – 4 > 6",
        options: [
          "x > 5",
          "x > 2",
          "x < 2",
          "x < 5"
        ],
        answer: 0,
        feedback: "Resposta correta: A) x > 5. Resolvendo: 2x > 6 + 4 → 2x > 10 → x > 5."
      },
      {
        question: "Maria tem 3 anos a mais que Pedro. A soma das idades é 27. Qual a idade de Maria?",
        options: [
          "12",
          "13",
          "15",
          "18"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 15. Se Pedro tem x anos, Maria tem x+3. Então x + (x+3) = 27 → 2x = 24 → x = 12. Maria tem 12 + 3 = 15 anos."
      },
      {
        question: "Resolva: 5x + 2 = 3x – 6",
        options: [
          "–4",
          "–2",
          "2",
          "4"
        ],
        answer: 0,
        feedback: "Resposta correta: A) –4. Resolvendo: 5x – 3x = –6 – 2 → 2x = –8 → x = –4."
      }
    ]
  },
  {
    subject: "1.6 Equações e inequações do 2º grau",
    questions: [
      {
        question: "Resolva: x² – 9 = 0",
        options: [
          "x = ±3",
          "x = 3",
          "x = –3",
          "x = 9"
        ],
        answer: 0,
        feedback: "Resposta correta: A) x = ±3. Resolvendo: x² = 9 → x = ±√9 → x = ±3."
      },
      {
        question: "Resolva: x² – 4x + 3 = 0",
        options: [
          "x = 1 ou x = 3",
          "x = –1 ou x = –3",
          "x = 2",
          "x = 3"
        ],
        answer: 0,
        feedback: "Resposta correta: A) x = 1 ou x = 3. Fatorando: (x – 1)(x – 3) = 0, logo x = 1 ou x = 3."
      },
      {
        question: "Uma bola é lançada para cima e sua altura em metros é dada por h(t) = –5t² + 20t. Qual a altura máxima atingida?",
        options: [
          "10",
          "15",
          "20",
          "25"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 20. O vértice da parábola ocorre em t = -b/2a = -20/(-10) = 2. Altura máxima: h(2) = -5(4) + 20(2) = 20 metros."
      },
      {
        question: "O discriminante da equação 2x² – 4x + 2 = 0 é:",
        options: [
          "0",
          "2",
          "4",
          "8"
        ],
        answer: 0,
        feedback: "Resposta correta: A) 0. Δ = b² – 4ac = (-4)² – 4(2)(2) = 16 – 16 = 0."
      },
      {
        question: "Resolva a inequação: x² – 1 < 0",
        options: [
          "–1 < x < 1",
          "x < –1 ou x > 1",
          "x > 0",
          "x = ±1"
        ],
        answer: 0,
        feedback: "Resposta correta: A) –1 < x < 1. A parábola x² – 1 é negativa entre suas raízes -1 e 1."
      }
    ]
  },
  {
    subject: "1.7 Sistemas de equações",
    questions: [
      {
        question: "Resolva o sistema: x + y = 10 e x – y = 4",
        options: [
          "x = 7, y = 3",
          "x = 6, y = 4",
          "x = 8, y = 2",
          "x = 5, y = 5"
        ],
        answer: 0,
        feedback: "Resposta correta: A) x = 7, y = 3. Somando as equações: 2x = 14 → x = 7. Substituindo: 7 + y = 10 → y = 3."
      },
      {
        question: "Se João e Maria têm juntos 30 anos e João tem 4 anos a mais que Maria, qual é a idade de cada um?",
        options: [
          "João 17, Maria 13",
          "João 16, Maria 14",
          "João 18, Maria 12",
          "João 15, Maria 15"
        ],
        answer: 0,
        feedback: "Resposta correta: A) João 17, Maria 13. Sistema: J + M = 30 e J = M + 4. Substituindo: (M + 4) + M = 30 → 2M = 26 → M = 13, J = 17."
      },
      {
        question: "Resolva o sistema: 2x + y = 7 e 3x – y = 8",
        options: [
          "x = 5, y = –3",
          "x = 3, y = 1",
          "x = 2, y = 3",
          "x = 1, y = 5"
        ],
        answer: 1,
        feedback: "Resposta correta: B) x = 3, y = 1. Somando as equações: 5x = 15 → x = 3. Substituindo: 2(3) + y = 7 → y = 1."
      },
      {
        question: "O preço de 3 canetas e 2 cadernos é R$22. O preço de 2 canetas e 3 cadernos é R$23. Qual o preço de cada item?",
        options: [
          "Caneta R$2, Caderno R$8",
          "Caneta R$4, Caderno R$5",
          "Caneta R$6, Caderno R$2",
          "Caneta R$1, Caderno R$7"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Caneta R$4, Caderno R$5. Sistema: 3c + 2d = 22 e 2c + 3d = 23. Resolvendo: c = 4, d = 5."
      },
      {
        question: "Resolva o sistema: x + 2y = 8 e 2x + 4y = 16",
        options: [
          "Infinitas soluções",
          "x = 0, y = 4",
          "x = 2, y = 3",
          "Sem solução"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Infinitas soluções. A segunda equação é o dobro da primeira, portanto o sistema tem infinitas soluções."
      }
    ]
  },
  {
    subject: "1.8 Conceito e notações",
    questions: [
      {
        question: "Qual é a notação correta para indicar que x pertence ao conjunto dos inteiros?",
        options: [
          "x ∈ Z",
          "x ⊂ Z",
          "x ∈ N",
          "x ⊂ N"
        ],
        answer: 0,
        feedback: "Resposta correta: A) x ∈ Z. O símbolo ∈ indica 'pertence a', enquanto ⊂ indica 'está contido em' (para conjuntos)."
      },
      {
        question: "Se A = {1,2,3} e B = {1,2,3,4,5}, podemos dizer:",
        options: [
          "A ⊂ B",
          "B ⊂ A",
          "A ∈ B",
          "B ∈ A"
        ],
        answer: 0,
        feedback: "Resposta correta: A) A ⊂ B. Todos os elementos de A estão contidos em B, portanto A é subconjunto de B."
      },
      {
        question: "O que significa a notação A ∪ B?",
        options: [
          "Interseção entre A e B",
          "Diferença entre A e B",
          "União entre A e B",
          "Complemento de A"
        ],
        answer: 2,
        feedback: "Resposta correta: C) União entre A e B. O símbolo ∪ representa a união de conjuntos."
      },
      {
        question: "Qual é a representação correta de 'todos os elementos que pertencem a A e B simultaneamente'?",
        options: [
          "A ∩ B",
          "A ∪ B",
          "A – B",
          "A^c"
        ],
        answer: 0,
        feedback: "Resposta correta: A) A ∩ B. O símbolo ∩ representa a interseção, ou seja, elementos comuns aos dois conjuntos."
      },
      {
        question: "Se U é o conjunto universal e A ⊂ U, o conjunto complementar de A é:",
        options: [
          "A^c = U – A",
          "A^c = A",
          "A^c = ∅",
          "A^c = U"
        ],
        answer: 0,
        feedback: "Resposta correta: A) A^c = U – A. O complementar de A é formado por todos os elementos de U que não pertencem a A."
      }
    ]
  },
  {
    subject: "1.9 Operações com conjuntos",
    questions: [
      {
        question: "Se A = {1,2,3} e B = {3,4,5}, A ∪ B = ?",
        options: [
          "{1,2}",
          "{3}",
          "{1,2,3,4,5}",
          "{1,5}"
        ],
        answer: 2,
        feedback: "Resposta correta: C) {1,2,3,4,5}. A união contém todos os elementos de A e B, sem repetição."
      },
      {
        question: "Com os mesmos conjuntos, A ∩ B = ?",
        options: [
          "{3}",
          "{1,2,3}",
          "{4,5}",
          "∅"
        ],
        answer: 0,
        feedback: "Resposta correta: A) {3}. A interseção contém apenas os elementos comuns aos dois conjuntos."
      },
      {
        question: "Se A – B = {1,2}, isso significa:",
        options: [
          "Elementos que estão em B mas não em A",
          "Elementos que estão em A e não em B",
          "Elementos que estão em ambos A e B",
          "Elementos que não estão em nenhum dos dois"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Elementos que estão em A e não em B. A diferença A – B contém elementos de A que não pertencem a B."
      },
      {
        question: "O conjunto universal U = {1,2,3,4,5,6}, e A = {2,4,6}. O complemento de A é:",
        options: [
          "{2,4,6}",
          "{1,3,5}",
          "∅",
          "{1,2,3}"
        ],
        answer: 1,
        feedback: "Resposta correta: B) {1,3,5}. O complementar de A contém todos os elementos de U que não estão em A."
      },
      {
        question: "Se A = {1,2}, B = {2,3}, C = {3,4}, então (A ∪ B) ∩ C = ?",
        options: [
          "{2,3}",
          "{3}",
          "{1,4}",
          "{1,2,3,4}"
        ],
        answer: 1,
        feedback: "Resposta correta: B) {3}. Primeiro A ∪ B = {1,2,3}, depois {1,2,3} ∩ {3,4} = {3}."
      }
    ]
  },
  {
    subject: "1.10 Subconjuntos da reta e 1.11 Aplicações",
    questions: [
      {
        question: "Qual é a representação em intervalo de x ≥ 3?",
        options: [
          "[3, ∞)",
          "(3, ∞)",
          "(–∞, 3]",
          "(–∞, 3)"
        ],
        answer: 0,
        feedback: "Resposta correta: A) [3, ∞). Os colchetes indicam que o 3 está incluído no intervalo."
      },
      {
        question: "Qual é a representação de –2 < x < 5?",
        options: [
          "[–2,5]",
          "(–2,5)",
          "[–2,5)",
          "(–2,5]"
        ],
        answer: 1,
        feedback: "Resposta correta: B) (–2,5). Os parênteses indicam que os extremos -2 e 5 não estão incluídos."
      },
      {
        question: "Resolva a inequação x + 3 ≤ 7",
        options: [
          "x ≤ 4",
          "x ≥ 4",
          "x ≤ –4",
          "x ≥ –4"
        ],
        answer: 0,
        feedback: "Resposta correta: A) x ≤ 4. Resolvendo: x ≤ 7 – 3 → x ≤ 4."
      },
      {
        question: "Se x ∈ [–1, 2], isso significa:",
        options: [
          "x > –1 e x < 2",
          "x ≥ –1 e x ≤ 2",
          "x > –1 e x ≤ 2",
          "x ≥ –1 e x < 2"
        ],
        answer: 1,
        feedback: "Resposta correta: B) x ≥ –1 e x ≤ 2. Os colchetes indicam que ambos os extremos estão incluídos."
      },
      {
        question: "Uma fábrica produz 200 unidades por dia. Cada unidade custa R$10 para produzir e é vendida a R$15. Qual o lucro diário?",
        options: [
          "R$500",
          "R$1000",
          "R$2000",
          "R$1500"
        ],
        answer: 1,
        feedback: "Resposta correta: B) R$1000. Lucro por unidade: R$15 – R$10 = R$5. Lucro total: 200 × R$5 = R$1000."
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

  shuffledQuizData.forEach((subject) => {
    questionsHTML += `<div class="subject-title">${subject.subject}</div>`;

    subject.questions.forEach((question, qIndex) => {
      questionsHTML += `
                <div class="question-container">
                    <div class="question-number">Questão ${
                      questionIndex + 1
                    }</div>
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

const QUIZ_ID = 'Questoes_unidade_1'; // ← ALTERE PARA CADA QUIZ (ex: 'matematica_unidade2', 'historia_capitulo1', etc.)

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

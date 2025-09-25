// Configuração do quiz de Inglês
const originalQuizData = [
  {
    subject: "Texto para Análise",
    text: `The Future of Technology
Technology is rapidly advancing, and the future promises many exciting possibilities. One area of growth is artificial intelligence, which is already impacting many industries today. In the future, AI systems may become even more sophisticated and capable of complex tasks.

The rise of renewable energy is another important development as we look to the future. Solar and wind power are becoming cheaper and more accessible than ever before. These clean energy sources can help reduce pollution and combat climate change by decreasing reliance on fossil fuels. Healthcare technology also holds promise for improving lives. With advances in medical research, treatments for various diseases might become more personalized. Innovations like wearable health monitors can help people track their fitness and detect problems early.

While these technologies offer many benefits, they also come with challenges like privacy concerns. It's important to address these issues as we embrace new innovations. Despite potential obstacles, the future of technology looks bright, promising a world of endless opportunities.`,
    questions: []
  },
  {
    subject: "TED",
    questions: [
      {
        question: "O assunto principal do texto é:",
        options: [
          "O impacto negativo da tecnologia na sociedade.",
          "O avanço da tecnologia e suas possibilidades futuras.",
          "A substituição completa dos humanos pela inteligência artificial.",
          "O uso exclusivo de energias fósseis no futuro."
        ],
        answer: 1,
        feedback: "Resposta correta: B) O avanço da tecnologia e suas possibilidades futuras."
      },
      {
        question: "Quais áreas, além da inteligência artificial, são citadas como promissoras?",
        options: [
          "Agricultura e esportes.",
          "Energia renovável e tecnologia na saúde.",
          "Educação e turismo.",
          "Comércio eletrônico e transporte."
        ],
        answer: 1,
        feedback: "Resposta correta: B) Energia renovável e tecnologia na saúde."
      },
      {
        question: "Qual é um dos principais desafios relacionados às novas tecnologias?",
        options: [
          "Dificuldade de acesso à internet.",
          "Aumento dos custos de produção.",
          "Preocupações com privacidade.",
          "Falta de recursos naturais."
        ],
        answer: 2,
        feedback: "Resposta correta: C) Preocupações com privacidade."
      },
      {
        question: "A frase \"Solar and wind power are becoming cheaper and more accessible than ever before\" está no tempo verbal:",
        options: [
          "Simple Past",
          "Simple Present",
          "Present Continuous",
          "Simple Future"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Present Continuous"
      },
      {
        question: "A frase \"In the future, AI systems may become even more sophisticated\" indica:",
        options: [
          "Uma possibilidade futura.",
          "Uma ação concluída no passado.",
          "Um hábito diário.",
          "Uma certeza absoluta no presente."
        ],
        answer: 0,
        feedback: "Resposta correta: A) Uma possibilidade futura."
      },
      {
        question: "O verbo promises está no tempo verbal:",
        options: [
          "Simple Past",
          "Simple Present",
          "Present Continuous",
          "Simple Future"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Simple Present"
      },
      {
        question: "O termo técnico que aparece no texto é:",
        options: [
          "Renewable energy",
          "Fast food",
          "Soccer field",
          "Shopping mall"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Renewable energy"
      },
      {
        question: "A palavra renewable é formada por:",
        options: [
          "Prefixo re- + radical new + sufixo -able",
          "Radical ren + sufixo -able",
          "Prefixo re- + radical able",
          "Prefixo ren- + radical ewable"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Prefixo re- + radical new + sufixo -able"
      },
      {
        question: "A palavra de ligação While no terceiro parágrafo expressa:",
        options: [
          "Adição",
          "Contraste/Oposição",
          "Explicação",
          "Causa e Efeito"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Contraste/Oposição"
      },
      {
        question: "A expressão \"the future looks bright\" pode ser entendida como:",
        options: [
          "O futuro será sombrio.",
          "O futuro parece promissor.",
          "O futuro é incerto.",
          "O futuro está totalmente definido."
        ],
        answer: 1,
        feedback: "Resposta correta: B) O futuro parece promissor."
      }
    ]
  },
  {
    subject: "Questões Extras",
    questions: [
      {
        question: "Qual é a principal ideia do texto?",
        options: [
          "A tecnologia só traz benefícios para a sociedade.",
          "O futuro da tecnologia envolve avanços e também desafios.",
          "A inteligência artificial substituirá totalmente os humanos.",
          "Apenas a área da saúde se beneficiará com a tecnologia."
        ],
        answer: 1,
        feedback: "Resposta correta: B) O futuro da tecnologia envolve avanços e também desafios."
      },
      {
        question: "Segundo o texto, qual área da tecnologia pode ajudar a reduzir a poluição?",
        options: [
          "Inteligência Artificial",
          "Energia Renovável",
          "Wearable Health Monitors",
          "Indústria Automobilística"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Energia Renovável"
      },
      {
        question: "O texto aponta que os avanços na saúde incluem:",
        options: [
          "Uso de robôs para substituir médicos.",
          "Tratamentos mais personalizados e monitores de saúde vestíveis.",
          "Remédios naturais em vez de medicamentos.",
          "A eliminação completa de doenças no futuro imediato."
        ],
        answer: 1,
        feedback: "Resposta correta: B) Tratamentos mais personalizados e monitores de saúde vestíveis."
      },
      {
        question: "Qual é um dos desafios mencionados em relação ao avanço tecnológico?",
        options: [
          "Acesso restrito à internet.",
          "Custos elevados de energia solar.",
          "Questões de privacidade.",
          "Falta de profissionais qualificados."
        ],
        answer: 2,
        feedback: "Resposta correta: C) Questões de privacidade."
      },
      {
        question: "A expressão \"the future looks bright\" pode ser entendida como:",
        options: [
          "O futuro será sombrio.",
          "O futuro é incerto.",
          "O futuro parece promissor.",
          "O futuro está totalmente definido."
        ],
        answer: 2,
        feedback: "Resposta correta: C) O futuro parece promissor."
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

// Inicializa o quiz (mantém ordem após F5)
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
        
        // Se existe texto no assunto (como o texto para análise), mostra ele
        if (subject.text) {
            questionsHTML += `<div class="text-content" style="background-color: #2c2b2bff; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #002752ff; white-space: pre-line; line-height: 1.6;">${subject.text}</div>`;
        }

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

    // REMOVIDO: Não embaralha mais ao limpar
    // quizData = createShuffledQuizData();

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

const QUIZ_ID = 'ted_AVA_ing'; // ← ALTERE PARA CADA QUIZ (ex: 'matematica_unidade2', 'historia_capitulo1', etc.)

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
    window.location.href = '../ava1.html';
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
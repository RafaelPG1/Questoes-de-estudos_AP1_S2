// Configuração do quiz de Inglês
const originalQuizData = [
  {
    subject: "Aula 1: Introdução ao inglês técnico",
    questions: [
      {
        question: "Considerando o English for Specific Purposes (Inglês para Fins Específicos), pode ser compreendido como uma variável do ensino de inglês. Podemos afirmar que ele objetiva:",
        options: [
          "dotar os sujeitos de conhecimentos acadêmicos ou profissionais em língua inglesa, por meio da aquisição de vocabulário requerido para área de atuação, compreensão dos aspectos gramaticais e estratégias de leitura que garantam acesso aos diversos gêneros textuais.",
          "dotar os sujeitos de conhecimentos acadêmicos ou profissionais em língua inglesa, por meio da aquisição de pronúncia requerida para área de atuação, compreensão dos aspectos gramaticais e estratégias de leitura que garantam acesso aos diversos gêneros textuais.",
          "dotar os sujeitos de conhecimentos acadêmicos ou profissionais em língua inglesa, por meio da aquisição de vocabulário, não importando área de atuação, compreensão dos aspectos gramaticais e estratégias de leitura que garantam acesso aos diversos gêneros textuais.",
          "dotar os sujeitos de conhecimentos gerais, não específicos, em língua inglesa, por meio da aquisição de vocabulário, compreensão dos aspectos gramaticais e estratégias de leitura que garantam acesso aos diversos gêneros textuais."
        ],
        answer: 0,
        feedback: "Resposta correta: A) O ESP foca em vocabulário específico da área de atuação profissional ou acadêmica."
      },
      {
        question: "Sobre o campo semântico, é correto afirmar que:",
        options: [
          "é um conjunto de palavras unidas pelo sentido, os quais são escolhidos de acordo com o contexto abordado.",
          "é um conjunto de palavras unidas pelo sentido, os quais não são escolhidos de acordo com o contexto abordado.",
          "é um conjunto de palavras unidas pelo sentido, os quais são escolhidos de acordo com organização gramatical.",
          "é um conjunto de palavras que não são unidas pelo sentido, os quais são escolhidos de acordo com o contexto abordado."
        ],
        answer: 0,
        feedback: "Resposta correta: A) Campo semântico agrupa palavras relacionadas pelo significado e contexto."
      },
      {
        question: "De acordo com a tabela do tópico 1.2, que nos traz alguns exemplos de campo semântico por categorias. Qual das palavras abaixo não pertence ao campo semântico da Informática?",
        image: "imagem/questao_3.png",
        options: [
          "Data",
          "Enter",
          "Best seller",
          "Connection"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 'Best seller' pertence ao campo semântico de literatura/vendas, não informática."
      },
      {
        question: "Considerando as diferenças entre a língua inglesa e a língua portuguesa, qual das alternativas abaixo não está correta?",
        options: [
          "O 'Ç' não é utilizado no alfabeto em Inglês.",
          "O Present Perfect é um tempo verbal que não temos equivalente em Português.",
          "A língua inglesa não é silábica.",
          "Todas as palavras do Inglês são organizadas por gênero (masculino e feminino)."
        ],
        answer: 3,
        feedback: "Resposta correta: D) O inglês não possui sistema de gêneros gramaticais como o português."
      },
      {
        question: "Os pronomes (pronouns) em língua inglesa exercem uma função de grande importância dentro do processo de organização da língua. Sobre os pronomes reflexivos (reflexive pronouns), é correto afirmar que:",
        options: [
          "são classificados em pronomes adjetivos e pronomes substantivos.",
          "têm a função de substituir o substantivo, diferentemente dos pronomes adjetivos, que sempre estão ligados a ele.",
          "são aqueles que aparecem após o verbo, concordando sempre com o sujeito da oração.",
          "indicam que algo pertence a alguém ou alguma coisa."
        ],
        answer: 2,
        feedback: "Resposta correta: C) Pronomes reflexivos concordam com o sujeito e aparecem após o verbo (myself, yourself, etc.)."
      }
    ]
  },
  {
    subject: "Aula 2: Tópicos gramaticais (simple present)",
    questions: [
      {
        question: "Considerando as regras do simple present na forma afirmativa, quais das alternativas abaixo completam corretamente os espaços?\n\nI ______ (To read) a book.\nShe _______ (To love) the song.\nIt _________ (To work) every day.\nThey ________ (To play) the piano.",
        options: [
          "read, love, works, play",
          "read, loves, works, play",
          "To read, To loves, To works, To play",
          "To read, loves, works, To play"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Na terceira pessoa do singular (he/she/it) acrescentamos 's' ou 'es' ao verbo."
      },
      {
        question: "Sobre a utilização dos advérbios de frequência no simple present, é correto afirmar que:",
        options: [
          "nunca, as frases são acompanhadas de expressões de tempo (advérbios).",
          "daily, now, every day, always, never, today, often, sometimes só podem ser utilizadas em algumas situações bem específicas.",
          "daily, now, every day, always, never, today, often, sometimes não podem ser utilizados no Present Simple.",
          "na maioria das vezes, as frases são acompanhadas de expressões de tempo (advérbios)."
        ],
        answer: 3,
        feedback: "Resposta correta: D) O Simple Present frequentemente usa advérbios de tempo e frequência."
      },
      {
        question: "De acordo com as regras da forma negativa (negative form) do simple present, observando a frase abaixo:\n\n'She does not work every day.'\n\nPodemos afirmar que a formação correta dessa sentença acontece respeitando a seguinte ordem:",
        options: [
          "sujeito + not + verbo no infinitivo sem to + complemento",
          "do (verbo auxiliar) + sujeito + verbo principal sem to + complemento",
          "sujeito + do not ou does not + verbo no infinitivo sem to + complemento",
          "do not ou does not + verbo no infinitivo sem to + complemento"
        ],
        answer: 2,
        feedback: "Resposta correta: C) A forma negativa usa do/does + not + verbo no infinitivo sem 'to'."
      },
      {
        question: "Sobre a formação da forma interrogativa do simple present, podemos afirmar que:",
        options: [
          "A formação das frases na forma interrogativa também vai requerer a utilização do verbo auxiliar (do/does), que sempre vai aparecer antes do verbo nas orações.",
          "A formação das frases na forma interrogativa não vai requerer a utilização do verbo auxiliar (do/does), que sempre vai aparecer antes do sujeito nas orações.",
          "A formação das frases na forma interrogativa também vai requerer a utilização do verbo auxiliar (do/does), que sempre vai aparecer antes do sujeito nas orações.",
          "A formação das frases na forma interrogativa também vai requerer a utilização do verbo auxiliar (do/does), que sempre vai aparecer depois do verbo nas orações."
        ],
        answer: 2,
        feedback: "Resposta correta: C) Na forma interrogativa, do/does aparece antes do sujeito."
      },
      {
        question: "O simple present é um tempo verbal utilizado para indicar ações habituais que ocorrem no presente. Ele também é utilizado para:",
        options: [
          "expressar ações que estão ocorrendo naquele exato momento.",
          "expressar verdades universais, sentimentos, desejos, opiniões e preferências.",
          "expressar modo de viver.",
          "expressar vontades e intenções."
        ],
        answer: 1,
        feedback: "Resposta correta: B) O Simple Present expressa verdades universais, sentimentos e fatos gerais."
      }
    ]
  },

  {
    subject: "Aula 3: Tópicos textuais (estratégia de leitura I)",
    questions: [
      {
        question: "(...) a comunicação verbal, que é expressa por meio de palavras escritas ou faladas. Sobre a comunicação não verbal é correto afirmar:",
        options: [
          "comunicação não verbal, que se utiliza de signos visuais, somente gestos e postura.",
          "comunicação não verbal, que se utiliza de signos visuais, tais como, os gestos, postura, ilustrações, placas, músicas, mapas, gráficos e afins.",
          "comunicação não verbal, que se utiliza de signos visuais, somente com músicas, mapas, gráficos e afins.",
          "comunicação não verbal, que se utiliza de signos visuais, somente por meio de ilustrações e placas."
        ],
        answer: 1,
        feedback: "Resposta correta: B) Comunicação não verbal inclui diversos tipos de signos visuais e sonoros."
      },
      {
        question: "Observando o texto 2 do material, que é um exemplo de um texto não verbal. Podemos afirmar que o propósito do texto é:",
        image: "imagem/questao_12.png",
        options: [
          "Alertar sobre a gravidez na adolescência.",
          "Mostrar um panorama dos índices de gravidez na adolescência no Canadá.",
          "Mostrar um panorama dos índices de gravidez na adolescência na cidade de Toronto.",
          "Evidenciar o crescimento do número de adolescentes grávidas em Toronto entre os anos de 1983-1984."
        ],
        answer: 1,
        feedback: "Resposta correta: B) O gráfico apresenta dados estatísticos sobre gravidez na adolescência no Canadá."
      },
      {
        question: "Falsos cognatos, em inglês, são termos escritos com semelhanças em determinadas palavras da língua portuguesa, mas possuem significado diferente, que podem comprometer a compreensão do texto. Considerando essa afirmativa, observe as palavras abaixo:\n\nComedy - Application - Fabric\n\nElas são, respectivamente:",
        image: "imagem/questao_13.png",
        options: [
          "cognata - falsa cognata - falsa cognata",
          "falsa cognata - cognata - cognata",
          "cognata - cognata - cognata",
          "falsa cognata - falsa cognata - cognata"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Comedy (comédia) é cognata; Application (aplicativo/candidatura) e Fabric (tecido) são falsos cognatos."
      },
      {
        question: "Neste módulo, nós estudamos sobre três estratégias de leitura em língua inglesa: previsão (prediction), inferência (inference) e seletividade (selectivity). Sobre a prediction, é correto afirmar que:",
        options: [
          "é a estratégia que utilizamos para compreender e/ou ler aquilo que não está escrito, chamado entre linhas (between lines), mas é necessária à interpretação.",
          "é uma das estratégias de leitura que mais utilizamos, pois ela nos permite prever o que vem a seguir em um texto (verbal ou não verbal).",
          "é a estratégia utilizada quando se selecionam os trechos onde se deseja encontrar uma informação mais específica.",
          "é uma das estratégias de leitura que menos utilizamos, ela nos permite prever o que vem a seguir em um texto."
        ],
        answer: 1,
        feedback: "Resposta correta: B) Prediction é a estratégia de antecipar conteúdo baseado em pistas do texto."
      },
      {
        question: "Neste módulo, nós estudamos sobre três estratégias de leitura em língua inglesa: previsão (prediction), inferência (inference) e seletividade (selectivity). Sobre a inference, é correto afirmar que:",
        options: [
          "é uma das estratégias de leitura que mais utilizamos, pois ela nos permite prever o que vem a seguir em um texto (verbal ou não verbal).",
          "é a estratégia utilizada quando se selecionam os trechos onde se deseja encontrar uma informação mais específica.",
          "é a estratégia que utilizamos para compreender e/ou ler aquilo que não está escrito, chamado entre linhas (between lines), mas é necessária à interpretação.",
          "é uma das estratégias de leitura que menos utilizamos, pois ela nos permite prever o que vem a seguir em um texto."
        ],
        answer: 2,
        feedback: "Resposta correta: C) Inference é a capacidade de compreender informações implícitas no texto."
      }
    ]
  },
  {
    subject: "Aula 4: Tópicos gramaticais (simple past)",
    questions: [
      {
        question: "Considerando as regras do simple past na forma afirmativa e o uso dos verbos regulares e irregulares, quais das alternativas abaixo completam corretamente os espaços?\n\nI ______ (To read) a book.\nShe _______ (To love) the song.\nIt _________ (To work) every day.\nThey ________ (To play) the piano.",
        options: [
          "read, loved, worked e played",
          "reads, loved, worked e played",
          "read, loved, works e played",
          "reads, loves, works e plays"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Read (irregular-mesmo formato), loved/worked/played (regulares com -ed)."
      },
      {
        question: "Sobre o passado dos verbos no simple past, é correto afirmar que:",
        options: [
          "Os verbos regulares terminados em consoante + vogal + consoante (CVC) duplicam a última consoante e acrescentam o -ed.",
          "Os verbos terminados em -y precedido de vogal, acrescenta-se somente o -ied.",
          "Os verbos regulares terminados em -e, acrescenta-se somente o -ed no final do verbo.",
          "Os verbos irregulares possuem um padrão de formação."
        ],
        answer: 0,
        feedback: "Resposta correta: A) Verbos CVC dobram a consoante final antes de adicionar -ed (stopped, planned)."
      },
      {
        question: "De acordo com as regras da forma negativa (negative form) do simple past, observando a frase abaixo:\n\n'She did not work every day.'\n\nPodemos afirmar que a formação correta dessa sentença acontece respeitando a seguinte ordem:",
        options: [
          "sujeito + did not + verbo no infinitivo sem to + complemento",
          "sujeito + verbo principal sem to + complemento",
          "sujeito + not + verbo no infinitivo sem to + complemento",
          "did not + verbo no infinitivo sem to + complemento"
        ],
        answer: 0,
        feedback: "Resposta correta: A) A forma negativa do Simple Past usa did not + verbo no infinitivo."
      },
      {
        question: "Sobre a formação da Forma Interrogativa do Simple Past, podemos afirmar que:",
        options: [
          "A formação das frases na Forma Interrogativa também vai requerer a utilização do verbo auxiliar (did) que sempre vai aparecer antes do sujeito nas orações.",
          "A formação das frases na Forma Interrogativa também vai requerer a utilização do verbo auxiliar (did) que sempre vai aparecer depois do sujeito nas orações.",
          "A formação das frases na Forma Interrogativa também vai requerer a utilização do verbo auxiliar (did) que sempre vai aparecer antes do verbo nas orações.",
          "A formação das frases na Forma Interrogativa não vai requerer a utilização do verbo auxiliar (did)."
        ],
        answer: 0,
        feedback: "Resposta correta: A) Na forma interrogativa, 'did' aparece antes do sujeito."
      },
      {
        question: "O simple past é um tempo verbal utilizado para indicar ações habituais que ocorrem:",
        options: [
          "expressar modos de viver.",
          "expressar ações que estão ocorrendo naquele exato momento.",
          "expressar habilidades e possibilidades.",
          "para expressar a ideia de uma ação no passado, acabada no momento presente da fala."
        ],
        answer: 3,
        feedback: "Resposta correta: D) Simple Past expressa ações concluídas em um tempo específico no passado."
      }
    ]
  },
  {
    subject: "Aula 5: Tópicos textuais (estratégia de leitura II)",
    questions: [
      {
        question: "A formação de palavras acontece a partir da flexibilidade da língua, que permite ao falante nativo transferir palavras de uma categoria a outra, através da adição de afixos. São os principais:",
        options: [
          "Prefixos e Sufixos",
          "Verbos e Prefixos",
          "Prefixos e Substantivos",
          "Verbos e Substantivos"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Prefixos e Sufixos são os principais tipos de afixos na formação de palavras."
      },
      {
        question: "Podemos dizer que na língua inglesa existem três principais processos de formação de palavra, que são estes:",
        options: [
          "affixation, conversion, compounding",
          "skimming, scanning, affixation",
          "affixation, scanning, compounding",
          "skimming, scanning, conversion"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Os três processos principais são afixação, conversão e composição."
      },
      {
        question: "No estudo da formação de palavras, um dos mais utilizados é AFFIXATION, que é o processo pelo qual formamos novas palavras através da adição de prefixos e sufixos. Sobre os PREFIXOS, podemos dizer que:",
        options: [
          "é uma partícula que, quando adicionada depois do radical de uma palavra, gera uma nova palavra, e, por conseguinte, um novo significado.",
          "são morfemas que alteram o significado de uma palavra. Essa partícula é adicionada antes do radical da palavra, dando-lhe um novo significado.",
          "é uma partícula que, quando adicionada antes do radical de uma palavra, gera uma nova palavra, e, por conseguinte, um novo significado.",
          "é uma partícula que, quando adicionada antes ou depois do radical de uma palavra, gera uma nova palavra."
        ],
        answer: 2,
        feedback: "Resposta correta: C) Prefixos são adicionados antes do radical da palavra (un-, re-, pre-)."
      },
      {
        question: "No estudo da formação de palavras, um dos mais utilizados é AFFIXATION. Sobre os SUFIXOS, podemos dizer que:",
        options: [
          "é uma partícula que, quando adicionada depois do radical de uma palavra, gera uma nova palavra, e, por conseguinte, um novo significado.",
          "é uma partícula que, quando adicionada antes do radical de uma palavra, gera uma nova palavra, e, por conseguinte, um novo significado.",
          "são morfemas que alteram o significado de uma palavra. Essa partícula é adicionada antes do radical da palavra, dando-lhe um novo significado.",
          "são morfemas que alteram o significado de uma palavra. Essa partícula é adicionada após o radical da palavra, dando-lhe um novo significado."
        ],
        answer: 3,
        feedback: "Resposta correta: D) Sufixos são morfemas adicionados após o radical da palavra (-tion, -ly, -ness)."
      },
      {
        question: "Qual das estratégias abaixo relacionadas completam corretamente a lacuna?\n\nO ___________ pode ser compreendida como uma estratégia de leitura pela qual observamos o texto apenas para detectar o assunto geral, sem nos preocuparmos com os detalhes.\nO ___________ é uma estratégia de leitura que consiste em correr os olhos pelo texto até localizar a informação específica desejada.",
        options: [
          "skimming, scanning",
          "scanning, affixation",
          "affixation, conversion",
          "scanning, skimming"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Skimming (leitura geral) e Scanning (busca específica) são estratégias complementares."
      }
    ]
  },
  {
    subject: "Aula 6: Tópicos gramaticais (simple future)",
    questions: [
      {
        question: "Considerando as regras do simple future na forma afirmativa e o uso dos verbos regulares e irregulares, quais das alternativas abaixo completam corretamente os espaços?\n\nI ______ (To read) a book.\nShe _______ (To love) the song.\nIt _________ (To work) every day.\nThey ________ (To play) the piano.",
        options: [
          "will reads, will loves, will works e will plays",
          "read'll, loved'll, work'll e play'll",
          "will read, will love, will work e will play",
          "reads will, love will, work will e play will"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Simple Future usa will + verbo no infinitivo sem 'to'."
      },
      {
        question: "Sobre a forma contraída do simple future nas orações afirmativas, é correto afirmar:",
        options: [
          "para isso, basta usar a contração will no lugar de 'll.",
          "para isso, basta usar a contração won't no lugar de will.",
          "para isso, basta usar a contração won't no lugar de 'll.",
          "para isso, basta usar a contração 'll no lugar de will."
        ],
        answer: 3,
        feedback: "Resposta correta: D) A forma contraída de 'will' é 'll (I'll, you'll, he'll, etc.)."
      },
      {
        question: "De acordo com as regras da forma negativa (negative form) do simple future, observando a frase abaixo:\n\n'We will not go out tonight.'\n\nPodemos afirmar que a formação correta dessa sentença acontece respeitando a seguinte ordem:",
        options: [
          "not + sujeito + will + verbo principal no infinitivo sem o to + complemento",
          "sujeito + will + verbo principal no infinitivo sem o to + not + complemento",
          "sujeito + not + will + verbo principal no infinitivo sem o to + complemento",
          "sujeito + will + not + verbo principal no infinitivo sem o to + complemento"
        ],
        answer: 3,
        feedback: "Resposta correta: D) A forma negativa segue: sujeito + will + not + verbo + complemento."
      },
      {
        question: "Sobre a forma contraída do simple future nas orações negativas, é correto afirmar:",
        options: [
          "para isso, basta usar a contração will no lugar de 'll.",
          "para isso, basta usar a contração 'll no lugar de won't.",
          "para isso, basta usar a contração 'll no lugar de will.",
          "para isso, basta usar a contração won't no lugar de will not."
        ],
        answer: 3,
        feedback: "Resposta correta: D) 'Won't' é a forma contraída de 'will not'."
      },
      {
        question: "No simple future, utilizamos comumente algumas expressões com will, também chamadas de marcadores de tempo. São estas:",
        options: [
          "always, I guess, I think, maybe",
          "probably, I guess, I will, maybe",
          "probably, I won't, I think, maybe",
          "probably, I guess, I think, maybe"
        ],
        answer: 3,
        feedback: "Resposta correta: D) Os marcadores comuns são: probably, I guess, I think, maybe."
      }
    ]
  },
  {
    subject: "Aula 7: Tópicos textuais (estratégia de leitura III)",
    questions: [
      {
        question: "Pensando no uso das palavras de ligação, podemos afirmar que os principais tipos são:",
        options: [
          "Introdução, Adição, Oposição, Condição, Causa, Finalidade",
          "Introdução, Adição, Oposição, Contração, Causa, Finalidade",
          "Introdução, Adição, Oposição, Condição, Composição, Finalidade",
          "Introdução, Subtração, Oposição, Condição, Causa, Finalidade"
        ],
        answer: 0,
        feedback: "Resposta correta: A) Os principais tipos de conectores são: Introdução, Adição, Oposição, Condição, Causa e Finalidade."
      },
      {
        question: "Sobre as palavras de ligação, observando o quadro abaixo:\n\nThen - Due to - Finally - In spite of - Unless\n\nElas representam, respectivamente:",
        options: [
          "adição, condição, causa, finalidade, oposição",
          "adição, causa, finalidade, oposição, condição",
          "causa, finalidade, oposição, adição, condição",
          "causa, adição, finalidade, oposição, condição"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Then (adição), Due to (causa), Finally (finalidade), In spite of (oposição), Unless (condição)."
      },
      {
        question: "Sobre os marcadores de frequência/modo e tempo, podemos dizer que a palavra 'soon' é utilizada para expressar a ideia em português de:",
        options: [
          "ultimamente, brevemente, prontamente",
          "logo, brevemente, de repente",
          "logo, brevemente, prontamente",
          "logo, brevemente, prioritariamente"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 'Soon' significa logo, brevemente, prontamente em português."
      },
      {
        question: "Quais das alternativas abaixo não é um marcador de ligação?",
        image: "imagem/questao_35.png",
        options: [
          "In order to",
          "As long as",
          "Suddenly",
          "Because"
        ],
        answer: 2,
        feedback: "Resposta correta: C) 'Suddenly' é um advérbio de modo/tempo, não um marcador de ligação."
      },
      {
        question: "A palavra 'Actually' significa na realidade, na verdade. Ela é utilizada como um marcador de ligação, mais especificamente de adição. No entanto, devemos tomar cuidado quanto ao seu uso, pois...",
        options: [
          "é o que chamamos de falsos marcadores de frequência em português. Embora ela lembre a palavra 'normalmente', seu significado em inglês é outro.",
          "é o que chamamos de verdadeiros cognatos ou verdadeiros amigos em português. Embora ela lembre a palavra 'atualmente', seu significado em inglês é outro.",
          "é o que chamamos de falsos cognatos ou falsos amigos em português. Embora ela lembre a palavra 'atualmente', seu significado em inglês é outro.",
          "é o que chamamos de falsos marcadores de ligação em português. Embora ela lembre a palavra 'atualmente', seu uso em inglês é outro."
        ],
        answer: 2,
        feedback: "Resposta correta: C) 'Actually' é um falso cognato - significa 'na verdade', não 'atualmente'."
      }
    ]
  },
  {
    subject: "Aula 8: Tópicos gramaticais (present continuous)",
    questions: [
      {
        question: "Sobre a utilização do Present Continuous em inglês, é correto afirmar:",
        options: [
          "é um tempo verbal utilizado, na língua Inglesa, para expressar ações no passado que foram desenvolvidas no momento da fala.",
          "é um tempo verbal utilizado, na língua Inglesa, para expressar ações no futuro que serão desenvolvidas no momento da fala.",
          "é um tempo verbal utilizado, na língua Inglesa, para expressar ações habituais que sempre são desenvolvidas no momento da fala.",
          "é um tempo verbal utilizado, na língua Inglesa, para expressar ações que estão sendo desenvolvidas no momento da fala.",
          "é um tempo verbal utilizado, na língua Inglesa, para expressar ações que não estão sendo desenvolvidas no momento da fala."
        ],
        answer: 3,
        feedback: "Resposta correta: D) O Present Continuous expressa ações que estão acontecendo no momento da fala."
      },
      {
        question: "Considerando a organização frasal das orações no Present Continuous, é correto afirmar que na forma afirmativa se utiliza a seguinte disposição:",
        options: [
          "verbo to be + sujeito + verbo com -ing + complemento.",
          "sujeito + verbo to be + verbo + complemento.",
          "sujeito + verbo to be + verbo com -ing + complemento.",
          "verbo to be + sujeito + verbo + complemento.",
          "sujeito + verbo to be + not + verbo com -ing + complemento."
        ],
        answer: 2,
        feedback: "Resposta correta: C) A forma afirmativa segue: sujeito + verbo to be + verbo com -ing + complemento."
      },
      {
        question: "Considerando a organização frasal das orações no Present Continuous, é correto afirmar que na forma negativa se utiliza a seguinte disposição:",
        options: [
          "sujeito + verbo to be + verbo com -ing + complemento.",
          "sujeito + verbo to be + not + verbo + complemento.",
          "sujeito + verbo to be + not + verbo com -ing + complemento.",
          "verbo to be + not + sujeito + verbo com -ing + complemento.",
          "verbo to be + sujeito + verbo com -ing + complemento."
        ],
        answer: 2,
        feedback: "Resposta correta: C) A forma negativa segue: sujeito + verbo to be + not + verbo com -ing + complemento."
      },
      {
        question: "Considerando a organização frasal das orações no Present Continuous, é correto afirmar que na forma interrogativa se utiliza a seguinte disposição:",
        options: [
          "verbo to be + sujeito + verbo com -ing + complemento.",
          "sujeito + verbo to be + not + verbo com -ing + complemento.",
          "verbo to be + verbo + verbo com -ing + complemento.",
          "verbo + sujeito + verbo to be com -ing + complemento.",
          "verbo to be + not + verbo com -ing + complemento."
        ],
        answer: 0,
        feedback: "Resposta correta: A) A forma interrogativa segue: verbo to be + sujeito + verbo com -ing + complemento."
      },
      {
        question: "No Present Continuous, quando o verbo é monossílabo ou dissílabo e segue o padrão de consoante + vogal + consoante (CVC), usa-se um padrão diferente para o acréscimo da partícula -ing. Considerando essa informação, qual das opções abaixo seguiu a regra corretamente?",
        options: [
          "To come (vir, chegar) → coming.",
          "To take (pegar, tomar) → taking.",
          "To make (fazer) → making.",
          "To cut (cortar) → cutting.",
          "To dance (dançar) → dancing."
        ],
        answer: 3,
        feedback: "Resposta correta: D) 'To cut' segue o padrão CVC, então dobramos a consoante final: cutting."
      }
    ]
  }
];
// Variáveis do quiz
let quizData = []; // Dados do quiz (inicialmente sem embaralhar)
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
        transform: scale(1.3); /* zoom menor e mais estável */
        transform-origin: center center;
        display: block;
        margin: 0 auto;
    `;

    
    // Cria botão de fechar
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
        position: absolute;
        top: -25px;
        right: -50px;
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

// Inicializa o quiz
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
                    <div class="question-text">${question.question}</div>
                    ${question.image ? `<div class="question-image">
                        <img src="${question.image}" 
                             alt="Imagem da questão" 
                             style="max-width: 100%; height: auto; margin: 15px 0; border-radius: 6px; cursor: pointer; transition: transform 0.2s;"
                             onclick="showImageZoom('${question.image}')"
                             onmouseover="this.style.transform='scale(1.05)'"
                             onmouseout="this.style.transform='scale(1)'">
                    </div>` : ''}
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
                          userAnswers[questionIndex] !== null && userAnswers[questionIndex] === question.answer
                            ? "correct-feedback"
                            : (userAnswers[questionIndex] === null ? "correct-feedback" : "incorrect-feedback")
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
    
    userAnswers[questionIndex] = optionIndex;
    showAllQuestions();
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
    }, 5000);
}

// Função para mostrar resultados - VERSÃO CORRETA
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
        resultMessage = "Excelente! Você domina bem o conteúdo de Inglês Técnico.";
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

    submitButton.style.display = "none";
    restartButton.style.display = "inline-block";
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

// Função para limpar todas as respostas SEM embaralhar opções
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

    // Desmarca todos os inputs de radio/checkbox
    const respostas = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    respostas.forEach(input => {
        input.checked = false;
    });

    // Atualiza a interface das questões
    showAllQuestions();

    // Se estava mostrando resultados, esconde
    resultsContainer.innerHTML = "";

    // Mostra botão de enviar
    submitButton.style.display = "inline-block";

    // Esconde botão de reiniciar
    restartButton.style.display = "none";

    // Scroll suave para o topo
    smoothScrollToTop();
}

// Função para revelar todas as respostas
function revealAnswers() {
    // Marca como enviado para mostrar respostas corretas e feedback
    quizSubmitted = true;
    
    // Para mostrar o feedback, precisamos garantir que todas as questões tenham uma "resposta"
    // Mesmo que seja null, vamos forçar para mostrar o feedback de todas
    const allQuestions = [];
    quizData.forEach((subject) => {
        allQuestions.push(...subject.questions);
    });

    // Para questões não respondidas, mantém null mas força a exibição do feedback
    // Modifica temporariamente a função showAllQuestions para mostrar feedback mesmo com null
    
    // Reutiliza função para renderizar questões com respostas corretas
    showAllQuestions();
    
    // Calcular e mostrar resultados
    const totalQuestions = allQuestions.length;
    const correctAnswers = userAnswers.filter((answer, index) => 
        answer === allQuestions[index].answer
    ).length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    let resultClass = "";
    let resultMessage = "";
    
    if (percentage >= 70) {
        resultClass = "excellent";
        resultMessage = "Excelente! Você domina bem o conteúdo de Inglês Técnico.";
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
    submitButton.style.display = "none";
    
    // Desabilita botões limpar e revelar
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
    
    // Mostra botão de reiniciar
    restartButton.style.display = "inline-block";
    
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

const QUIZ_ID = 'questoes_AVA_ing'; // ← ALTERE PARA CADA QUIZ (ex: 'matematica_unidade2', 'historia_capitulo1', etc.)

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
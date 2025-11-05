const allQuestions = [
  {
    id: 1,
    question: 'Author of "Politics among Nations: The Struggle for Power and Peace"',
    options: ["Hans J Morgenthau", "Thompson", "Almond", "Powell"],
    answer: "Hans J Morgenthau",
    related: [3, 4, 73]
  },
  {
    id: 2,
    question: '.... is the core point around which whole of realism revolves.',
    options: ["National Interest", "Economy", "Foreign Policy", "INR"],
    answer: "National Interest",
    related: [45, 117]
  },
  {
    id: 3,
    question: 'Realist theory is put forwarded by',
    options: ["Palmer", "Harold Nickolson", "Sydney B Fay", "Morgenthau"],
    answer: "Morgenthau",
    related: [1, 4, 45, 73]
  },
  {
    id: 4,
    question: 'Morgenthau lays stress on',
    options: ["Power", "Terror", "Interest", "Policy"],
    answer: "Power",
    related: [1, 3, 16, 58, 61, 73, 88]
  },
  {
    id: 5,
    question: '"System is a whole which is compounded of many parts" who said it?',
    options: ["Kaplan", "Collin Cherry", "Laswell", "Michael Hass"],
    answer: "Collin Cherry",
    related: [6, 68]
  },
  {
    id: 6,
    question: 'System theory is introduced by',
    options: ["Laswell", "Kaplan", "Collim Cherry", "Marx"],
    answer: "Kaplan",
    related: [5, 68]
  },
  {
    id: 7,
    question: 'In which system states would have equal potential to destroy each other?',
    options: ["The Loose bi polar system", "The veto system", "Universal system", "Tight Bipolar system"],
    answer: "The veto system",
    related: [8, 9, 10, 69]
  },
  {
    id: 8,
    question: 'Which system is equal to world federation?',
    options: ["The Universal International system", "Tight Bi polar", "Loose Bi polar", "Unit Veto"],
    answer: "The Universal International system",
    related: [7, 10]
  },
  {
    id: 9,
    question: 'The system prevailed in 18th and 19th Century is',
    options: ["Veto System", "National System", "Balance of power System", "IN System"],
    answer: "Balance of power System",
    related: [24, 26, 161, 162, 163, 164, 165, 170, 171]
  },
  {
    id: 10,
    question: 'Loose bi polar system may convert into',
    options: ["Tri polar", "Bi polar", "Tight Bi polar", "Universal"],
    answer: "Tight Bi polar",
    related: [7, 8, 113]
  },
  {
    id: 11,
    question: '"Politics is the study of shaping and sharing of power" who said it?',
    options: ["Laswell", "Almond", "Robert", "Jennings"],
    answer: "Laswell",
    related: [23, 25]
  },
  {
    id: 12,
    question: 'World public opinion has a major role in',
    options: ["IN Trade", "Alliances", "INO", "Foreign Policy"],
    answer: "Foreign Policy",
    related: [106, 107, 111]
  },
  {
    id: 13,
    question: '.......... influence deeply the Foreign Policy of a Nation',
    options: ["Culture", "Economy", "Size", "Climate"],
    answer: "Culture",
    related: [33, 89, 91]
  },
  {
    id: 14,
    question: 'First World War came to an end by',
    options: ["Treaty of Versailles", "Treaty of Vienna", "Treaty of Utrecht", "Treaty of West Phalia"],
    answer: "Treaty of Versailles",
    related: [46, 77, 105, 135, 193]
  },
  {
    id: 15,
    question: 'SAARC was founded in',
    options: ["1985", "1990", "1995", "1947"],
    answer: "1985",
    related: []
  },
  {
    id: 16,
    question: '....... is the capacity to affect others behavior',
    options: ["Power", "Force", "Interest", "coercion"],
    answer: "Power",
    related: [4, 58, 61, 73, 88, 145]
  },
  {
    id: 17,
    question: 'Coal, Iron, Copper etc., are',
    options: ["Minerals", "raw materials", "Food stuff", "Agricultural products"],
    answer: "raw materials",
    related: [94, 95]
  },
  {
    id: 18,
    question: '"Team Spirit" is',
    options: ["Power", "Diplomacy", "Morale", "Force"],
    answer: "Morale",
    related: []
  },
  {
    id: 19,
    question: '....is the management of INR',
    options: ["Foreign Policy", "Diplomacy", "INP", "National System"],
    answer: "Diplomacy",
    related: [121, 122, 194]
  },
  {
    id: 20,
    question: '....is an element of National Power',
    options: ["Military", "Diplomacy", "Foreign Policy", "IN system"],
    answer: "Military",
    related: [98, 100, 101]
  },
  {
    id: 21,
    question: 'Author of "International Relations"',
    options: ["Thompson", "Kaplan", "Morgenthau", "Palmer and Perkins"],
    answer: "Palmer and Perkins",
    related: [1, 57, 157]
  },
  {
    id: 22,
    question: '.... is an instrument of peace',
    options: ["War", "Civil War", "Disarmament", "Power"],
    answer: "Disarmament",
    related: [27, 40, 168, 198, 199]
  },
  {
    id: 23,
    question: 'Propaganda is an instrument of',
    options: ["National Power", "National interest", "Collective Security", "Balance of Power"],
    answer: "National interest",
    related: [140, 141, 142, 143]
  },
  {
    id: 24,
    question: 'Equilibrium in distribution of power is',
    options: ["Collective Security", "Balance of Power", "Diplomacy", "Balance of Terror"],
    answer: "Balance of Power",
    related: [9, 26, 43, 44, 161, 162, 163, 164, 165, 170, 171]
  },
  {
    id: 25,
    question: '"One for all and all for one" said by',
    options: ["Morgenthau", "Palmer", "Laswell", "Laski"],
    answer: "Morgenthau",
    related: [1, 3, 4, 11, 172]
  },
  {
    id: 26,
    question: 'Partition is a method of',
    options: ["Balance of Power", "Collective Security", "Diplomacy", "Foreign Policy"],
    answer: "Balance of Power",
    related: [9, 24, 161, 169]
  },
  {
    id: 27,
    question: 'Alliances and ....',
    options: ["Disarmament", "Counter alliance", "Security", "Power"],
    answer: "Counter alliance",
    related: [22, 120, 166]
  },
  {
    id: 28,
    question: 'A State located in between two Super Powers',
    options: ["Neutral Zone", "Buffer Zone", "Trust area", "Nation State"],
    answer: "Buffer Zone",
    related: [167]
  },
  {
    id: 29,
    question: 'The Machinery for joint action',
    options: ["Balance of Power", "Collective Security", "Foreign Policy", "Diplomacy"],
    answer: "Collective Security",
    related: [30, 31, 172, 174, 176, 177]
  },
  {
    id: 30,
    question: 'The First test case of collective Security was',
    options: ["Afghanistan case", "Gulf War", "Korea", "Ghana"],
    answer: "Korea",
    related: [29, 31, 175, 180, 181]
  },
  {
    id: 31,
    question: 'A Mutual Insurance Plan is',
    options: ["Foreign Policy", "Diplomacy", "Collective Security", "Balance of Power"],
    answer: "Collective Security",
    related: [29, 30, 172, 174, 176, 177]
  },
  {
    id: 32,
    question: 'Uniting for peace resolution was in',
    options: ["1945", "1950", "1953", "2013"],
    answer: "1950",
    related: [182]
  },
  {
    id: 33,
    question: 'Napoleon said the F.P of a country is shaped by...',
    options: ["History", "Sociology", "Geography", "Boundary"],
    answer: "Geography",
    related: [13, 89, 91]
  },
  {
    id: 34,
    question: 'CIS Means',
    options: ["Communist Inter National", "Common Wealth of Islamic States", "Communication in status", "Common Wealth of Independent States"],
    answer: "Common Wealth of Independent States",
    related: []
  },
  {
    id: 35,
    question: 'Diplomat is.... of his mother country',
    options: ["Eyes", "Ears", "Eyes and Ears", "Head"],
    answer: "Eyes and Ears",
    related: [123, 129, 130, 131, 132, 133]
  },
  {
    id: 36,
    question: 'Foreign policy is formulated by',
    options: ["People", "Judiciary", "Government", "Pressure groups"],
    answer: "Government",
    related: [12, 13, 106, 107]
  },
  {
    id: 37,
    question: '"Imperialism" is expansion of',
    options: ["Population", "Territory", "Force", "Power"],
    answer: "Territory",
    related: [38, 144, 145, 146, 147, 148, 149, 151]
  },
  {
    id: 38,
    question: '"Dollar Imperialism" is an example of',
    options: ["Economic Imperialism", "Economic and Cultural Imperialism", "Cultural Imperialism", "None of these"],
    answer: "Economic Imperialism",
    related: [37, 144, 146, 147]
  },
  {
    id: 39,
    question: '"Sun Never Sets" in the .... Empire',
    options: ["Roman", "Greek", "British", "Egypt"],
    answer: "British",
    related: []
  },
  {
    id: 40,
    question: '.... is a way of eliminating war',
    options: ["Cold War", "Civil War", "Disarmament", "Total War"],
    answer: "Disarmament",
    related: [22, 152, 153, 168, 198, 199]
  },
  {
    id: 41,
    question: 'UN Security Council has .... members',
    options: ["10", "5", "15", "25"],
    answer: "15",
    related: [102, 103, 119, 160, 177, 178, 179]
  },
  {
    id: 42,
    question: 'John Neuman is associated with',
    options: ["Game theory", "Class theory", "Idealism", "Materialism"],
    answer: "Game theory",
    related: [52, 53]
  },
  {
    id: 43,
    question: 'Equilibrium theory is put forwarded by',
    options: ["Morgenthu", "Palmer", "Marx", "George Liska"],
    answer: "George Liska",
    related: [24, 44, 161]
  },
  {
    id: 44,
    question: 'Idea of Equilibrium is taken from',
    options: ["History", "Sociology", "Economics", "Commerce"],
    answer: "Economics",
    related: [24, 43, 161]
  },
  {
    id: 45,
    question: 'Autonomy in Political Sphere is advocated by',
    options: ["Idealism", "behaviouralism", "Realism", "Gandhism"],
    answer: "Realism",
    related: [2, 3]
  },
  {
    id: 46,
    question: 'Treaty of West Phalia was on',
    options: ["1950", "1947", "1648", "1548"],
    answer: "1648",
    related: [14, 105, 135, 193]
  },
  {
    id: 47,
    question: 'Second World War broke out in',
    options: ["1939", "1917", "1950", "1951"],
    answer: "1939",
    related: [14, 54]
  },
  {
    id: 48,
    question: 'Feeling of "Oneness" is',
    options: ["Regionalism", "Nationalism", "Anarchism", "Materialism"],
    answer: "Nationalism",
    related: [49, 50, 51, 81, 82, 83, 84, 85, 86, 87]
  },
  {
    id: 49,
    question: 'Element of Nationalism is not',
    options: ["Racial unity", "Geographical unity", "Common Economic interest", "War and Peace"],
    answer: "War and Peace",
    related: [48, 50, 83]
  },
  {
    id: 50,
    question: 'Common Language and Literature.... Nationalism',
    options: ["Destroy", "Increase", "Slow down", "Disagree"],
    answer: "Increase",
    related: [48, 49, 83]
  },
  {
    id: 51,
    question: 'National Flag is a Symbol of',
    options: ["Integration", "Disintegration", "Realism", "Gandhism"],
    answer: "Integration",
    related: [48, 81]
  },
  {
    id: 52,
    question: 'Bargaining theory is an extension of',
    options: ["Orthodox game theory", "Bi polar theory", "System theory", "Realist theory"],
    answer: "Orthodox game theory",
    related: [42, 53]
  },
  {
    id: 53,
    question: 'Traditional approach in the study of INP is',
    options: ["Game theory", "Bargaining theory", "Historical approach", "Idealist approach"],
    answer: "Historical approach",
    related: [42, 52, 59, 60, 66, 67, 72]
  },
  {
    id: 54,
    question: 'Liquidation of Colonialism is after',
    options: ["Ist World War", "IInd World War", "1973", "1810"],
    answer: "IInd World War",
    related: [14, 47, 144, 148]
  },
  {
    id: 55,
    question: 'When did INP chair came into existence',
    options: ["1920", "1919", "1925", "1500"],
    answer: "1925",
    related: [56]
  },
  {
    id: 56,
    question: 'Who were the Leaders in the chair of INP',
    options: ["Almond and Powell", "Mortan Kaplan", "Zimmern and Webster", "Palmer"],
    answer: "Zimmern and Webster",
    related: [55]
  },
  {
    id: 57,
    question: 'The study of International Relations was written by',
    options: ["Morgenthau", "Kaplan", "Quincy Wright", "Laswell"],
    answer: "Quincy Wright",
    related: [1, 21, 196]
  },
  {
    id: 58,
    question: 'Interest conflict and .... are the elements of INP',
    options: ["Money", "Muscle", "Nationalism", "Power"],
    answer: "Power",
    related: [4, 16, 61]
  },
  {
    id: 59,
    question: 'Methodology of the study of INR is',
    options: ["Scientific", "Realistic", "Analytic", "Descriptive"],
    answer: "Descriptive",
    related: [53, 60, 67, 72]
  },
  {
    id: 60,
    question: 'Methodology of study of INP is',
    options: ["Realistic", "Analytic", "Organic", "Scientific"],
    answer: "Analytic",
    related: [53, 59, 67, 72]
  },
  {
    id: 61,
    question: 'National Politics and INP Cluster around',
    options: ["Power", "Interest", "Money", "Nation"],
    answer: "Interest",
    related: [2, 4, 16, 58]
  },
  {
    id: 62,
    question: 'In National Politics actors are',
    options: ["Nations", "Capitals", "Individuals", "States"],
    answer: "Individuals",
    related: [63, 64]
  },
  {
    id: 63,
    question: 'In INP actors are',
    options: ["Human beings", "Workers", "Nations", "Independent states"],
    answer: "Independent states",
    related: [62, 64]
  },
  {
    id: 64,
    question: 'In INP individuals are under the authority of',
    options: ["State", "Countries", "UNO", "UNESCO"],
    answer: "State",
    related: [62, 63]
  },
  {
    id: 65,
    question: '"The Clash of Civilizations and the Making of World Order" was written by',
    options: ["Luther", "CAW Manning", "Laski", "Samuel Huntington"],
    answer: "Samuel Huntington",
    related: [200]
  },
  {
    id: 66,
    question: 'Philosophical approach studies',
    options: ["Human Nature", "Nature", "States", "World"],
    answer: "Human Nature",
    related: [53, 59, 60, 71]
  },
  {
    id: 67,
    question: 'Eclectic approach is more',
    options: ["Positive", "Negative", "Scientific", "Realistic"],
    answer: "Scientific",
    related: [53, 59, 60]
  },
  {
    id: 68,
    question: '.... is a whole which is compounded of many parts',
    options: ["World", "System", "Theory", "INP"],
    answer: "System",
    related: [5, 6]
  },
  {
    id: 69,
    question: 'Modern world is',
    options: ["Uni state", "Bistate", "Tristate", "Multistate"],
    answer: "Multistate",
    related: [7]
  },
  {
    id: 70,
    question: 'Decision making approach is known as',
    options: ["KPM model", "CBSW model", "SBC model", "JKF model"],
    answer: "SBC model",
    related: [71]
  },
  {
    id: 71,
    question: '.... plays an important role in decision making',
    options: ["Nature", "Human nature", "Habit", "Environment"],
    answer: "Environment",
    related: [70]
  },
  {
    id: 72,
    question: 'Behavioural approach is developed by',
    options: ["German School", "Ango American School", "Chicago School", "French School"],
    answer: "Chicago School",
    related: [45, 53, 59, 60]
  },
  {
    id: 73,
    question: 'Morgenthau has over-emphasised one factor that is',
    options: ["Power", "Authority", "influence", "Force"],
    answer: "Power",
    related: [1, 3, 4, 16]
  },
  {
    id: 74,
    question: 'Tigris Euphrates state system existed in',
    options: ["600 BC", "700 BC", "1000 BC", "500 BC"],
    answer: "600 BC",
    related: [75, 76]
  },
  {
    id: 75,
    question: 'Warning state system of China was in',
    options: ["700 BC", "400 BC", "500-300 BC", "1000 BC"],
    answer: "500-300 BC",
    related: [74, 76]
  },
  {
    id: 76,
    question: 'Indian State System existed in',
    options: ["500 BC", "700 AD", "1000 AD", "2000 AD"],
    answer: "1000 AD",
    related: [74, 75]
  },
  {
    id: 77,
    question: 'Treaty of Versailles was in',
    options: ["1914", "1895", "1962", "1410"],
    answer: "1914",
    related: [14]
  },
  {
    id: 78,
    question: 'Nations are classified into... on the basis of Industrial development',
    options: ["5", "7", "3", "10"],
    answer: "3",
    related: [79]
  },
  {
    id: 79,
    question: 'On the basis of Power, Nations are divided into',
    options: ["10", "7", "3", "15"],
    answer: "3",
    related: [78]
  },
  {
    id: 80,
    question: 'Sovereignty is internal and ....',
    options: ["Civil", "Permanent", "External", "Western"],
    answer: "External",
    related: []
  },
  {
    id: 81,
    question: 'Nationalism is nation plus a ....',
    options: ["Attachment", "Detachment", "Feeling", "Love"],
    answer: "Feeling",
    related: [48, 49, 50, 51, 82, 83, 84, 85, 86, 87]
  },
  {
    id: 82,
    question: 'Nationalism is a ....',
    options: ["Integration", "State of mind", "Security", "Racialism"],
    answer: "Integration",
    related: [48, 51, 81]
  },
  {
    id: 83,
    question: '.... is a basic element of Nationalism',
    options: ["Common culture", "Diversity", "Material unity", "Prosperity"],
    answer: "Common culture",
    related: [48, 49, 50, 81]
  },
  {
    id: 84,
    question: '"Soul is a Spiritual Principle" in',
    options: ["Regionalism", "Communalism", "Nationalism", "Anarchism"],
    answer: "Nationalism",
    related: [48, 81, 82]
  },
  {
    id: 85,
    question: 'Nationalism is associated with',
    options: ["Syndicalism", "Patriotism", "Revolution", "National Integration"],
    answer: "Patriotism",
    related: [48, 81, 82]
  },
  {
    id: 86,
    question: '.... created National Government in Europe',
    options: ["Liberalism", "Federalism", "Realism", "Totalitarian Nationalism"],
    answer: "Totalitarian Nationalism",
    related: [48, 81, 87]
  },
  {
    id: 87,
    question: 'Extreme Nationalism is called',
    options: ["Monism", "Feudalism", "Chauvinism", "Liberalism"],
    answer: "Chauvinism",
    related: [48, 81, 86]
  },
  {
    id: 88,
    question: 'Power is',
    options: ["Imaginative", "Tentative", "Relational", "Reasonable"],
    answer: "Reasonable",
    related: [4, 16, 58, 61, 73]
  },
  {
    id: 89,
    question: '"Foreign Policy of a Nation is shaped by Geography" who said it',
    options: ["Stalin", "Lenin", "Marx", "Napoleon"],
    answer: "Marx",
    related: [33]
  },
  {
    id: 90,
    question: 'To achieve power size must be',
    options: ["Big", "Small", "Moderate", "Very large"],
    answer: "Moderate",
    related: [13, 91]
  },
  {
    id: 91,
    question: 'Location altitude, rainfall and wind determine',
    options: ["Weather", "Heat", "Climate", "Rain"],
    answer: "Rain",
    related: [13, 33, 89]
  },
  {
    id: 92,
    question: 'National boundaries are of.... Types',
    options: ["10", "7", "3", "2"],
    answer: "3",
    related: [93]
  },
  {
    id: 93,
    question: '.... boundaries are man made',
    options: ["Natural", "Artificial", "Original", "Non Original"],
    answer: "Artificial",
    related: [92]
  },
  {
    id: 94,
    question: '"Gift of Nature" is',
    options: ["Natural Resources", "Climate", "Location", "Land"],
    answer: "Natural Resources",
    related: [17, 95]
  },
  {
    id: 95,
    question: '.... is a part of Natural Resources',
    options: ["Minerals", "Power", "Military", "Force"],
    answer: "Minerals",
    related: [17, 94]
  },
  {
    id: 96,
    question: '.... is a source of burden',
    options: ["Over population", "Climate", "Minerals", "Food stuffs"],
    answer: "Over population",
    related: [97]
  },
  {
    id: 97,
    question: 'The most populated state is',
    options: ["India", "America", "Pakistan", "China"],
    answer: "China",
    related: [96]
  },
  {
    id: 98,
    question: 'ICBM is a PRODUCT of new',
    options: ["Technology", "Religion", "Democracy", "Power"],
    answer: "Technology",
    related: [20]
  },
  {
    id: 99,
    question: '"Espionage" means',
    options: ["War", "Civil War", "Spy work", "Peace"],
    answer: "Spy work",
    related: []
  },
  {
    id: 100,
    question: 'Royal Air Force was owned by',
    options: ["USA", "UK", "China", "India"],
    answer: "UK",
    related: [20, 101, 108, 109]
  },
  {
    id: 101,
    question: 'Largest Army in the world',
    options: ["China", "UK", "USA", "India"],
    answer: "China",
    related: [20, 97, 100]
  },
  {
    id: 102,
    question: 'UN Day is celebrated on',
    options: ["January", "December 31", "October 24", "November 1"],
    answer: "October 24",
    related: [41, 103, 119, 160, 177, 178, 179]
  },
  {
    id: 103,
    question: 'The first International Organisation was',
    options: ["League of Nations", "UNO", "UNESCO", "USSR"],
    answer: "League of Nations",
    related: [41, 102, 160, 176]
  },
  {
    id: 104,
    question: 'Author of "Theoretical aspects of Inter National Politics"',
    options: ["Mahrish", "Surendra Nath", "Mukopadhya", "Mahendra Kumar"],
    answer: "Mahendra Kumar",
    related: [1, 21, 57, 196]
  },
  {
    id: 105,
    question: 'Vienna Congress was in',
    options: ["1917", "1810", "1814", "1815"],
    answer: "1815",
    related: [14, 46, 193]
  },
  {
    id: 106,
    question: '.... affects Foreign Policy',
    options: ["World Public Opinion", "Sovereignty", "Class War", "Power"],
    answer: "World Public Opinion",
    related: [12, 36]
  },
  {
    id: 107,
    question: "The Chief architect of India's Foreign Policy was",
    options: ["Gandhi", "Nehru", "Rajaji", "Patel"],
    answer: "Nehru",
    related: [36, 110, 116, 118]
  },
  {
    id: 108,
    question: 'Henry Kissinger is associated with',
    options: ["UK", "USA", "USSR", "India"],
    answer: "USA",
    related: [100, 109, 114]
  },
  {
    id: 109,
    question: 'Alexander Gromikkov is associated with',
    options: ["UK", "USA", "USSR", "China"],
    answer: "USSR",
    related: [100, 108, 114]
  },
  {
    id: 110,
    question: 'T.P. Sreenivasan is an .... Scholar',
    options: ["Afghan", "Indian", "Korean", "Pakistan"],
    answer: "Indian",
    related: [107]
  },
  {
    id: 111,
    question: 'Reports of the diplomats are the raw materials of',
    options: ["Domestic policy", "Foreign Policy", "Internal affairs", "Violence"],
    answer: "Foreign Policy",
    related: [12, 35, 36, 106, 131]
  },
  {
    id: 112,
    question: 'National values shape...',
    options: ["History", "Geography", "Internal affairs", "Foreign Policy"],
    answer: "Foreign Policy",
    related: [12, 36, 106, 111, 117]
  },
  {
    id: 113,
    question: 'During Cold War World was divided into .... Blocks',
    options: ["10", "3", "1", "2"],
    answer: "2",
    related: [10, 40, 114, 115]
  },
  {
    id: 114,
    question: 'During Cold War there was US Block and .... Block',
    options: ["China", "India", "Pakistan", "USSR"],
    answer: "USSR",
    related: [108, 109, 113, 115]
  },
  {
    id: 115,
    question: 'The Cuban Missile Crisis was on',
    options: ["1950", "1962", "1952", "1971"],
    answer: "1962",
    related: [113, 114]
  },
  {
    id: 116,
    question: '.... gave leadership to Non alignment movement',
    options: ["Stalin", "Nehru", "Wilson", "Lenin"],
    answer: "Nehru",
    related: [107]
  },
  {
    id: 117,
    question: 'Core value and interest is an objective of',
    options: ["Power", "National interest", "Security", "Foreign Policy"],
    answer: "National interest",
    related: [2, 112]
  },
  {
    id: 118,
    question: '"India always hold a Pro-Palestine policy"',
    options: ["False", "Partially True", "True", "Partially False"],
    answer: "True",
    related: [107, 119]
  },
  {
    id: 119,
    question: 'India is Pro-UN in International Relations',
    options: ["False", "True", "Never", "None of the above"],
    answer: "True",
    related: [41, 102, 103, 118, 160]
  },
  {
    id: 120,
    question: 'NATO is a .... alliance',
    options: ["Civil", "Neutral", "Military", "Non Military"],
    answer: "Military",
    related: [27, 166]
  },
  {
    id: 121,
    question: 'Diplomacy is the management of...',
    options: ["IN Politics", "IN Relations", "Foreign Policy", "Foreign Trade"],
    answer: "IN Relations",
    related: [19, 122, 194]
  },
  {
    id: 122,
    question: 'Harold Nicolson says Diplomacy has .... meanings',
    options: ["4", "10", "3", "5"],
    answer: "3",
    related: [19, 121, 157, 194]
  },
  {
    id: 123,
    question: '"Am honest man send abroad to lie for his country" Who?',
    options: ["Political Leader", "Minister", "Diplomat", "Civil Servant"],
    answer: "Diplomat",
    related: [35, 129, 130, 131, 132, 133]
  },
  {
    id: 124,
    question: 'Compromising Diplomacy is',
    options: ["Shop Keeper", "Warrior", "New", "Old"],
    answer: "Shop Keeper",
    related: [125, 126, 127, 134, 138]
  },
  {
    id: 125,
    question: 'Aggressive diplomacy is',
    options: ["New", "Warrior", "Shop keeper", "Old"],
    answer: "Warrior",
    related: [124, 126, 127, 134, 138]
  },
  {
    id: 126,
    question: 'Diplomacy came after Ist World War',
    options: ["New", "Old", "Open", "Closed"],
    answer: "Open",
    related: [14, 124, 125, 127, 134, 137, 138]
  },
  {
    id: 127,
    question: 'Delay is a short coming of.... diplomacy.',
    options: ["Old", "New", "democratic", "Open"],
    answer: "democratic",
    related: [124, 125, 126, 134, 136, 138]
  },
  {
    id: 128,
    question: '"War on Peace: The End of Diplomacy and the Decline of American Influence" was written by',
    options: ["Kissinger", "Lenin", "Ronan Farrow", "None"],
    answer: "Ronan Farrow",
    related: [1, 21, 57, 104, 108]
  },
  {
    id: 129,
    question: '.... is the symbolic representation of a Nation',
    options: ["Diplomat", "Minister", "Governor", "President"],
    answer: "Diplomat",
    related: [35, 123, 130, 131, 132, 133]
  },
  {
    id: 130,
    question: 'A diplomat represents the....',
    options: ["President", "Head of the State", "Cabinet", "Government"],
    answer: "Government",
    related: [35, 36, 123, 129, 131, 132, 133]
  },
  {
    id: 131,
    question: 'Observation and Reporting is done by',
    options: ["Minister", "President", "Diplomat", "Foreign Secretary"],
    answer: "Diplomat",
    related: [35, 111, 123, 129, 130, 132, 133]
  },
  {
    id: 132,
    question: '.... is "Negotiator Par excellence"',
    options: ["Diplomat", "Minister", "Mission", "Head of the State"],
    answer: "Diplomat",
    related: [35, 123, 129, 130, 131, 133]
  },
  {
    id: 133,
    question: 'Which is not a function of diplomat',
    options: ["Reporting", "Representation", "Negotiation", "Transport"],
    answer: "Transport",
    related: [35, 123, 129, 130, 131, 132]
  },
  {
    id: 134,
    question: 'Diplomacy which gave up conventional practices is',
    options: ["open", "New", "Totalitarian", "Democratic"],
    answer: "New",
    related: [124, 125, 126, 127, 138]
  },
  {
    id: 135,
    question: 'Treaty of West Phalia is an example of..',
    options: ["Diplomacy conference", "Closed Diplomacy", "Summit Diplomacy", "Old Diplomacy"],
    answer: "Diplomacy conference",
    related: [14, 46, 105, 136, 193]
  },
  {
    id: 136,
    question: 'Personal diplomacy is otherwise called',
    options: ["Democratic Diplomacy", "Open Diplomacy", "Summit Diplomacy", "Closed Diplomacy"],
    answer: "Summit Diplomacy",
    related: [135, 137]
  },
  {
    id: 137,
    question: 'Atlantic charter is an example of',
    options: ["Closed Diplomacy", "Open Diplomacy", "Summit Diplomacy", "Democratic Diplomacy"],
    answer: "Summit Diplomacy",
    related: [126, 136]
  },
  {
    id: 138,
    question: 'Old Diplomacy is ........... Diplomacy',
    options: ["British", "European", "American", "Indian"],
    answer: "European",
    related: [124, 125, 126, 127, 134]
  },
  {
    id: 139,
    question: 'Representative send to a Common Wealth Country is....',
    options: ["Ambassador", "High commissioner", "Chief", "Manager"],
    answer: "High commissioner",
    related: [34, 129, 130]
  },
  {
    id: 140,
    question: 'Propaganda is like an art of...........',
    options: ["Painting", "Marketing", "Advertising and selling", "Producing"],
    answer: "Painting",
    related: [23, 141, 142, 143]
  },
  {
    id: 141,
    question: 'Slogans are methods of...........',
    options: ["Propaganda", "Publicity", "attention", "security"],
    answer: "Propaganda",
    related: [23, 140, 142, 143]
  },
  {
    id: 142,
    question: 'A good Propaganda is always',
    options: ["Simple", "Hard", "More Simple", "Severe"],
    answer: "More Simple",
    related: [23, 140, 141, 143]
  },
  {
    id: 143,
    question: 'Consistency is a quality of.........',
    options: ["war", "Publicity", "Diplomacy", "Propaganda"],
    answer: "Propaganda",
    related: [23, 140, 141, 142]
  },
  {
    id: 144,
    question: 'Economic Imperialism is called',
    options: ["Anarchism", "Socialism", "Colonialism", "Democracy"],
    answer: "Colonialism",
    related: [37, 38, 54, 145, 146, 147, 148]
  },
  {
    id: 145,
    question: 'Imperialism is expansion of a state..... beyond its limits',
    options: ["Power", "status", "boundary", "Interest"],
    answer: "Power",
    related: [16, 37, 38, 144, 146, 147, 148, 149, 151]
  },
  {
    id: 146,
    question: '........ is the crudest form of Imperialism',
    options: ["Economic", "Military", "Cultural", "Social"],
    answer: "Military",
    related: [37, 38, 144, 145, 147, 148, 149, 151]
  },
  {
    id: 147,
    question: '.. is comparatively modern imperialism',
    options: ["Military", "Economic", "Cultural", "Social"],
    answer: "Economic",
    related: [37, 38, 144, 145, 146, 148, 149, 151]
  },
  {
    id: 148,
    question: 'Imperialism is older than.........',
    options: ["Colonialism", "Socialism", "Democracy", "Secularism"],
    answer: "Colonialism",
    related: [37, 38, 54, 144, 145, 146, 147, 149, 151]
  },
  {
    id: 149,
    question: "White man's Burden is associated with",
    options: ["Socialism", "Imperialism", "Democracy", "Secularism"],
    answer: "Imperialism",
    related: [37, 38, 145, 146, 147, 148, 151]
  },
  {
    id: 150,
    question: 'Satellite is related with',
    options: ["Capitalism", "Democracy", "Socialism", "Social Imperialism"],
    answer: "Capitalism",
    related: [151]
  },
  {
    id: 151,
    question: 'National .... is activated through Imperialism',
    options: ["Security", "order", "Defence", "stability"],
    answer: "Defence",
    related: [37, 38, 145, 146, 147, 148, 149, 150]
  },
  {
    id: 152,
    question: 'Modern War is called .... war',
    options: ["Guerilla war", "cold war", "civil war", "Total war"],
    answer: "Total war",
    related: [40, 113, 153, 154, 155, 156, 157, 190]
  },
  {
    id: 153,
    question: 'A war between two Groups with in a country is',
    options: ["Cold War", "Civil War", "Total War", "Guerilla War"],
    answer: "Civil War",
    related: [40, 152, 154, 155, 156, 157, 190]
  },
  {
    id: 154,
    question: 'Hiroshima and Nagasaki, where Nuclear Weapons were used are in',
    options: ["India", "China", "Japan", "Korea"],
    answer: "Japan",
    related: [47, 152, 155, 156, 198, 199]
  },
  {
    id: 155,
    question: 'A War fought in anticipation of enemies attack is',
    options: ["Limited War", "Unlimited war", "Nuclear War", "pre-emptive war"],
    answer: "pre-emptive war",
    related: [152, 153, 154, 156, 190]
  },
  {
    id: 156,
    question: 'The most destructive was is',
    options: ["Unlimited Nuclear War", "Limited Nuclear War", "Civil War", "Pre-emptive War"],
    answer: "Unlimited Nuclear War",
    related: [152, 153, 154, 155, 190, 198]
  },
  {
    id: 157,
    question: '"War has been the Chief marker of modern world" Who said it',
    options: ["Rousseau", "Hegel", "Palmer and Perkins", "Nicolson"],
    answer: "Rousseau",
    related: [21, 122, 152, 158, 184]
  },
  {
    id: 158,
    question: 'The new nation came into being after the Indo-Pak War is',
    options: ["Bangladesh", "Iran", "Iraq", "Sri Lanka"],
    answer: "Bangladesh",
    related: [152, 157]
  },
  {
    id: 159,
    question: '.... Government can Prevent War',
    options: ["Civil", "World", "Democratic", "Monarchy"],
    answer: "Democratic",
    related: [152, 190]
  },
  {
    id: 160,
    question: '.... is the present Inter National Organisation',
    options: ["WTO", "WMO", "UNO", "NATO"],
    answer: "UNO",
    related: [41, 102, 103, 119]
  },
  {
    id: 161,
    question: 'Balance of Power means .... in distribution of power',
    options: ["Quality", "Equilibrium", "Modernity", "equality"],
    answer: "Equilibrium",
    related: [9, 24, 43, 44, 162, 165, 170, 171]
  },
  {
    id: 162,
    question: 'Balance of Power is "Just Equilibrium" who said it?',
    options: ["Morgenthau", "Laswell", "Sidney B Fay", "Aristotle"],
    answer: "Sidney B Fay",
    related: [9, 24, 43, 44, 161, 165, 170, 171]
  },
  {
    id: 163,
    question: 'The nation which play the role of Balancing is called',
    options: ["City state", "Nation State", "Balancer", "Neutral State"],
    answer: "Balancer",
    related: [9, 24, 161, 164, 167]
  },
  {
    id: 164,
    question: 'For long time .... played the role of balancer.',
    options: ["UK", "USA", "USSR", "France"],
    answer: "UK",
    related: [9, 24, 100, 161, 163]
  },
  {
    id: 165,
    question: 'When Power is concentrated in two states or two groups, it is',
    options: ["Complex", "Simple", "Multiple", "Single"],
    answer: "Simple",
    related: [9, 24, 113, 161, 162, 170, 171]
  },
  {
    id: 166,
    question: 'Alliances Produce',
    options: ["Balance", "Negative", "Disarmament", "Counter alliance"],
    answer: "Balance",
    related: [27, 120, 161]
  },
  {
    id: 167,
    question: 'Switzerland is a.... .country.',
    options: ["Authoritarian", "Monastic", "Neutral", "American"],
    answer: "Neutral",
    related: [28, 163]
  },
  {
    id: 168,
    question: 'Armament and ....',
    options: ["Buffer", "Disarmament", "Terror", "Counter armament"],
    answer: "Counter armament",
    related: [22, 40, 198]
  },
  {
    id: 169,
    question: 'Compensation and ....',
    options: ["Division", "Partition", "Addition", "Subtraction"],
    answer: "Partition",
    related: [26]
  },
  {
    id: 170,
    question: 'Balance of Power creates',
    options: ["War", "Conflict", "Peace", "Law"],
    answer: "Peace",
    related: [9, 24, 161, 162, 165, 171]
  },
  {
    id: 171,
    question: 'Critics say Balance of power today is',
    options: ["Balance less", "Balance of fear", "Balance of terror", "Balance of trade."],
    answer: "Balance of terror",
    related: [9, 24, 161, 162, 165, 170]
  },
  {
    id: 172,
    question: 'Watch word of collective security is',
    options: ["One for all and all for one", "One for all", "All for one", "Each and every one"],
    answer: "One for all and all for one",
    related: [25, 29, 30, 31, 174, 176, 177]
  },
  {
    id: 173,
    question: 'Bankimoon belongs to',
    options: ["North Korea", "South Korea", "Japan", "China"],
    answer: "South Korea",
    related: [175]
  },
  {
    id: 174,
    question: 'Collective Security is a ".... "',
    options: ["Mutual assurance", "Slow action", "Rapid action", "Neutral action."],
    answer: "Mutual assurance",
    related: [29, 30, 31, 172, 176, 177]
  },
  {
    id: 175,
    question: 'In 1950 N. Korea attacked',
    options: ["Japan", "China", "South Korea", "Italy"],
    answer: "South Korea",
    related: [30, 173, 180, 181]
  },
  {
    id: 176,
    question: 'Key articles in League covenant saying about collective security is',
    options: ["10, 15, 16", "10,20,7", "10, 11, 16", "20,10,5"],
    answer: "10, 11, 16",
    related: [29, 31, 103, 172, 174, 177]
  },
  {
    id: 177,
    question: 'Chapter.... of UN Charter says about collective security.',
    options: ["V", "VII", "II", "I"],
    answer: "VII",
    related: [29, 31, 41, 102, 160, 172, 174, 176, 178, 179]
  },
  {
    id: 178,
    question: 'UN character gives right of self defence by',
    options: ["Article 10", "Article 15", "Article 30", "Article 51"],
    answer: "Article 51",
    related: [41, 102, 160, 177, 179]
  },
  {
    id: 179,
    question: 'Article.... provides for military staff committee.',
    options: ["15", "27", "18", "47"],
    answer: "47",
    related: [41, 102, 160, 177, 178, 181]
  },
  {
    id: 180,
    question: 'UN took forces for the first time in',
    options: ["Afgan", "Italy", "America", "Korea"],
    answer: "Korea",
    related: [30, 175, 181]
  },
  {
    id: 181,
    question: 'Leader of Korean action force was',
    options: ["Gen. Mukarji", "Gen Mac Arthur", "Gen. Munro", "Gen Stevenson"],
    answer: "Gen Mac Arthur",
    related: [30, 175, 179, 180]
  },
  {
    id: 182,
    question: 'Uniting for peace Resolution was moved by',
    options: ["China", "Russia", "Germany", "USA"],
    answer: "USA",
    related: [32, 108]
  },
  {
    id: 183,
    question: 'The Law prevailing between states is',
    options: ["Municipal Law", "International Law", "Military Law", "Criminal Law."],
    answer: "International Law",
    related: [184, 185, 186, 187, 189, 190, 191]
  },
  {
    id: 184,
    question: '"The Law of War and Peace" written by',
    options: ["Hegel", "Hugo Grotius", "Bentham", "Rousseau"],
    answer: "Hugo Grotius",
    related: [157, 183, 185]
  },
  {
    id: 185,
    question: 'INL is divided into Law of war and ....',
    options: ["Law of Neutrality", "Law of Civilians", "Law of Peace", "Law of Nations."],
    answer: "Law of Peace",
    related: [152, 183, 184]
  },
  {
    id: 186,
    question: 'International Law is comparatively',
    options: ["Strong", "Weak", "Moderate", "Cruel"],
    answer: "Weak",
    related: [183, 187]
  },
  {
    id: 187,
    question: 'INL has no.... to implement the provisions',
    options: ["Legislature", "Executive", "Judiciary", "Civil Service"],
    answer: "Executive",
    related: [183, 186, 191]
  },
  {
    id: 188,
    question: 'Red Cross Society was formed by',
    options: ["Henry Morgan", "Henry Ford", "Dunkon", "Henry Dunant"],
    answer: "Henry Dunant",
    related: []
  },
  {
    id: 189,
    question: 'There are public International Law and',
    options: ["Municipal Law", "Civil Law", "Private International Law", "Criminal Law"],
    answer: "Private International Law",
    related: [183]
  },
  {
    id: 190,
    question: 'International Law neither prohibit nor .... war.',
    options: ["Recognize", "Outlaw", "Summon", "Enlarge"],
    answer: "Outlaw",
    related: [152, 159, 183, 185]
  },
  {
    id: 191,
    question: 'The seat of International court of justice is',
    options: ["New York", "Paris", "London", "Hague"],
    answer: "Hague",
    related: [183, 187]
  },
  {
    id: 192,
    question: 'Each nation can send .... members to the UN General Assembly',
    options: ["10", "5", "3", "1"],
    answer: "5",
    related: [41, 102, 160]
  },
  {
    id: 193,
    question: 'Modern state system begin with .... treaty.',
    options: ["Vienna", "Westphalia", "Versailles", "Utrecht"],
    answer: "Westphalia",
    related: [14, 46, 105, 135]
  },
  {
    id: 194,
    question: '"Diplomacy" is written by',
    options: ["Palmer", "Harold Nicolson", "Morgenthau", "Laswell"],
    answer: "Harold Nicolson",
    related: [19, 121, 122, 157]
  },
  {
    id: 195,
    question: 'The Asian conference of 1955 was at',
    options: ["Beijing", "New Delhi", "Dublin", "Bandung"],
    answer: "Bandung",
    related: [116]
  },
  {
    id: 196,
    question: '"Foundations of International politics" was written by',
    options: ["William Henry", "Wise man", "Margaret and Harold Sprout", "Charles F Beard"],
    answer: "Margaret and Harold Sprout",
    related: [1, 21, 57, 104]
  },
  {
    id: 197,
    question: 'The Indo- Soviet Treaty of Friendship was in the year',
    options: ["1962", "1985", "1971", "1945"],
    answer: "1971",
    related: [109, 114, 115]
  },
  {
    id: 198,
    question: '.... is the maim need for disarmament',
    options: ["Nuclear Threat", "Anarchy", "Social Problems", "Poverty"],
    answer: "Nuclear Threat",
    related: [22, 40, 154, 156, 168, 199]
  },
  {
    id: 199,
    question: 'A treaty prohibiting nuclear experiments',
    options: ["NATO", "SEATO", "CTBT", "DAS"],
    answer: "CTBT",
    related: [22, 40, 154, 156, 168, 198]
  },
  {
    id: 200,
    question: "Author of the book of 'End of History'?",
    options: ["Samuel P. Huntington", "Larry Diamond", "Alexandre Kojeve", "Francis Fukuyama"],
    answer: "Francis Fukuyama",
    related: [65]
  }
];

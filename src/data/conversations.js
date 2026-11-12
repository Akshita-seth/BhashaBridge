
import phrases from "./phrases";
const kannadaConversations = {
  transport: {
    title: "Taking an Auto",
    language: "Kannada",
    description:
      "Practise asking an auto driver to take you to your destination.",

    steps: [
      {
        id: "destination",

        speaker: "Auto driver",

        speakerLine: {
          native: "ಎಲ್ಲಿಗೆ ಹೋಗಬೇಕು?",
          transliteration: "Ellige hogabeku?",
          meaning: "Where would you like to go?",
        },

        instruction:
          "Tell the driver that you need to go to Ramaiah College.",

        options: [
          {
            id: "destination-correct",
            native: "ನನಗೆ ರಾಮಯ್ಯ ಕಾಲೇಜಿಗೆ ಹೋಗಬೇಕು.",
            transliteration: "Nanage Ramaiah College-ge hogabeku.",
            meaning: "I need to go to Ramaiah College.",
            correct: true,
            explanation:
              "Correct! You have communicated your destination.",
          },
          {
            id: "destination-wrong-1",
            native: "ನನಗೆ ನೀರು ಬೇಕು.",
            transliteration: "Nanage neeru beku.",
            meaning: "I need water.",
            correct: false,
            explanation:
              "This means you need water, not that you want to travel somewhere.",
          },
          {
            id: "destination-wrong-2",
            native: "ಇದು ಎಷ್ಟು?",
            transliteration: "Idu eshtu?",
            meaning: "How much is this?",
            correct: false,
            explanation:
              "This is a question about price. Try another response.",
          },
        ],
      },

      {
        id: "entrance",

        speaker: "Auto driver",

        speakerLine: {
          native: "ಯಾವ ಗೇಟ್ ಬಳಿ ಇಳಿಸಲಿ?",
          transliteration: "Yaava gate bali ilisali?",
          meaning: "Which gate should I drop you near?",
        },

        instruction:
          "Ask the driver to stop near the main gate, please.",

        options: [
          {
            id: "entrance-correct",
            native: "ದಯವಿಟ್ಟು ಮುಖ್ಯ ಗೇಟ್ ಬಳಿ ನಿಲ್ಲಿಸಿ.",
            transliteration: "Dayavittu mukhya gate bali nillisi.",
            meaning: "Please stop near the main gate.",
            correct: true,
            explanation:
              "Correct! This is a polite way to ask the driver to stop.",
          },
          {
            id: "entrance-wrong-1",
            native: "ನನಗೆ ಊಟ ಬೇಕು.",
            transliteration: "Nanage oota beku.",
            meaning: "I need food.",
            correct: false,
            explanation:
              "This expression is about food, not giving a destination instruction.",
          },
          {
            id: "entrance-wrong-2",
            native: "ನನಗೆ ಮನೆಗೆ ಹೋಗಬೇಕು.",
            transliteration: "Nanage manege hogabeku.",
            meaning: "I need to go home.",
            correct: false,
            explanation:
              "This communicates a different destination.",
          },
        ],
      },
    ],
  },

  food: {
    title: "Ordering at a Restaurant",
    language: "Kannada",
    description:
      "Practise ordering food, discussing spice levels and responding politely.",

    steps: [
      {
        id: "food-order",

        speaker: "Waiter",

        speakerLine: {
          native: "ಏನು ಬೇಕು?",
          transliteration: "Enu beku?",
          meaning: "What would you like?",
        },

        instruction:
          "Order one masala dosa, please.",

        options: [
          {
            id: "food-order-correct",
            native: "ಒಂದು ಮಸಾಲೆ ದೋಸೆ ಕೊಡಿ.",
            transliteration: "Ondu masale dose kodi.",
            meaning: "One masala dosa, please.",
            correct: true,
            explanation:
              "Correct! You have politely ordered one masala dosa.",
          },
          {
            id: "food-order-wrong-1",
            native: "ನನಗೆ ನೀರು ಬೇಕು.",
            transliteration: "Nanage neeru beku.",
            meaning: "I need water.",
            correct: false,
            explanation:
              "This means you need water, not that you want to order a dosa.",
          },
          {
            id: "food-order-wrong-2",
            native: "ಬಿಲ್ ಕೊಡಿ.",
            transliteration: "Bill kodi.",
            meaning: "Please give me the bill.",
            correct: false,
            explanation:
              "This expression is used when asking to pay, usually after eating.",
          },
        ],
      },

      {
        id: "food-spice",

        speaker: "Waiter",

        speakerLine: {
          native: "ಎಷ್ಟು ಖಾರ ಬೇಕು?",
          transliteration: "Eshtu khaara beku?",
          meaning: "How spicy would you like it?",
        },

        instruction:
          "Tell the waiter that you would like it mildly spicy.",

        options: [
          {
            id: "food-spice-correct",
            native: "ಸ್ವಲ್ಪ ಖಾರವಾಗಿ ಮಾಡಿ.",
            transliteration: "Swalpa khaaravaagi maadi.",
            meaning: "Please make it mildly spicy.",
            correct: true,
            explanation:
              "Correct! You have communicated your spice preference.",
          },
          {
            id: "food-spice-wrong-1",
            native: "ನನಗೆ ನೀರು ಕೊಡಿ.",
            transliteration: "Nanage neeru kodi.",
            meaning: "Please give me water.",
            correct: false,
            explanation:
              "This asks for water rather than specifying a spice preference.",
          },
          {
            id: "food-spice-wrong-2",
            native: "ನನಗೆ ಬಿಲ್ ಬೇಕು.",
            transliteration: "Nanage bill beku.",
            meaning: "I need the bill.",
            correct: false,
            explanation:
              "This is about payment, not how spicy you want your food.",
          },
        ],
      },

      {
        id: "food-finish",

        speaker: "Waiter",

        speakerLine: {
          native: "ಇನ್ನೇನಾದರೂ ಬೇಕೇ?",
          transliteration: "Innenadaru beke?",
          meaning: "Would you like anything else?",
        },

        instruction:
          "Politely tell the waiter that you don't need anything else.",

        options: [
          {
            id: "food-finish-correct",
            native: "ಬೇಡ, ಧನ್ಯವಾದಗಳು.",
            transliteration: "Beda, dhanyavaadagalu.",
            meaning: "No, thank you.",
            correct: true,
            explanation:
              "Correct! You have politely declined anything else.",
          },
          {
            id: "food-finish-wrong-1",
            native: "ಇನ್ನೊಂದು ದೋಸೆ ಕೊಡಿ.",
            transliteration: "Innondu dose kodi.",
            meaning: "Please give me another dosa.",
            correct: false,
            explanation:
              "This asks for another dosa rather than declining.",
          },
          {
            id: "food-finish-wrong-2",
            native: "ಎಷ್ಟು ಆಗುತ್ತದೆ?",
            transliteration: "Eshtu aguttade?",
            meaning: "How much does it cost?",
            correct: false,
            explanation:
              "This asks about the price instead of responding to the waiter.",
          },
        ],
      },
    ],
  },


  shopping: {
    title: "Shopping at a Local Store",
    language: "Kannada",
    description:
      "Practise asking prices, checking availability and making purchases.",

    steps: [
      {
        id: "shopping-price",

        speaker: "Shopkeeper",

        speakerLine: {
          native: "ಏನು ಬೇಕು?",
          transliteration: "Enu beku?",
          meaning: "What would you like?",
        },

        instruction:
          "Ask the shopkeeper how much this costs.",

        options: [
          {
            id: "shopping-price-correct",
            native: "ಇದರ ಬೆಲೆ ಎಷ್ಟು?",
            transliteration: "Idara bele eshtu?",
            meaning: "How much does this cost?",
            correct: true,
            explanation:
              "Correct! You have politely asked for the price.",
          },
          {
            id: "shopping-price-wrong-1",
            native: "ನನಗೆ ನೀರು ಬೇಕು.",
            transliteration: "Nanage neeru beku.",
            meaning: "I need water.",
            correct: false,
            explanation:
              "This asks for water rather than the price.",
          },
          {
            id: "shopping-price-wrong-2",
            native: "ಬಿಲ್ ಕೊಡಿ.",
            transliteration: "Bill kodi.",
            meaning: "Please give me the bill.",
            correct: false,
            explanation:
              "This is used when asking for the bill.",
          },
        ],
      },

      {
        id: "shopping-quantity",

        speaker: "Shopkeeper",

        speakerLine: {
          native: "ಎಷ್ಟು ಬೇಕು?",
          transliteration: "Eshtu beku?",
          meaning: "How much would you like?",
        },

        instruction:
          "Tell the shopkeeper that you want one kilogram.",

        options: [
          {
            id: "shopping-quantity-correct",
            native: "ಒಂದು ಕಿಲೋ ಕೊಡಿ.",
            transliteration: "Ondu kilo kodi.",
            meaning: "Please give me one kilogram.",
            correct: true,
            explanation:
              "Correct! You have specified the quantity.",
          },
          {
            id: "shopping-quantity-wrong-1",
            native: "ಇದರ ಬೆಲೆ ಎಷ್ಟು?",
            transliteration: "Idara bele eshtu?",
            meaning: "How much does this cost?",
            correct: false,
            explanation:
              "This asks about the price, not the quantity.",
          },
          {
            id: "shopping-quantity-wrong-2",
            native: "ಬೇಡ, ಧನ್ಯವಾದಗಳು.",
            transliteration: "Beda, dhanyavaadagalu.",
            meaning: "No, thank you.",
            correct: false,
            explanation:
              "This politely declines rather than specifying a quantity.",
          },
        ],
      },

      {
        id: "shopping-finish",

        speaker: "Shopkeeper",

        speakerLine: {
          native: "ಇನ್ನೇನಾದರೂ ಬೇಕೇ?",
          transliteration: "Innenadaru beke?",
          meaning: "Would you like anything else?",
        },

        instruction:
          "Tell the shopkeeper that you don't need anything else.",

        options: [
          {
            id: "shopping-finish-correct",
            native: "ಬೇಡ, ಅಷ್ಟೇ ಸಾಕು.",
            transliteration: "Beda, ashte saaku.",
            meaning: "No, that's all.",
            correct: true,
            explanation:
              "Correct! You have politely finished your purchase.",
          },
          {
            id: "shopping-finish-wrong-1",
            native: "ಒಂದು ಕಿಲೋ ಕೊಡಿ.",
            transliteration: "Ondu kilo kodi.",
            meaning: "Please give me one kilogram.",
            correct: false,
            explanation:
              "This requests a quantity rather than ending the purchase.",
          },
          {
            id: "shopping-finish-wrong-2",
            native: "ಇದರ ಬೆಲೆ ಎಷ್ಟು?",
            transliteration: "Idara bele eshtu?",
            meaning: "How much does this cost?",
            correct: false,
            explanation:
              "This asks about the price rather than responding to the shopkeeper.",
          },
        ],
      },
    ],
  },


  college: {
    title: "Meeting Someone at College",
    language: "Kannada",
    description:
      "Practise introducing yourself, asking about classes and interacting with classmates.",

    steps: [
      {
        id: "college-introduction",

        speaker: "Classmate",

        speakerLine: {
          native: "ನಿಮ್ಮ ಹೆಸರು ಏನು?",
          transliteration: "Nimma hesaru enu?",
          meaning: "What is your name?",
        },

        instruction:
          "Introduce yourself by saying your name is Akshita.",

        options: [
          {
            id: "college-intro-correct",
            native: "ನನ್ನ ಹೆಸರು ಅಕ್ಷಿತಾ.",
            transliteration: "Nanna hesaru Akshita.",
            meaning: "My name is Akshita.",
            correct: true,
            explanation:
              "Correct! You have introduced yourself.",
          },
          {
            id: "college-intro-wrong-1",
            native: "ನನಗೆ ನೀರು ಬೇಕು.",
            transliteration: "Nanage neeru beku.",
            meaning: "I need water.",
            correct: false,
            explanation:
              "This asks for water, not an introduction.",
          },
          {
            id: "college-intro-wrong-2",
            native: "ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?",
            transliteration: "Neevu ellige hoguttiddiri?",
            meaning: "Where are you going?",
            correct: false,
            explanation:
              "This asks about someone's destination.",
          },
        ],
      },

      {
        id: "college-class",

        speaker: "Classmate",

        speakerLine: {
          native: "ನೀವು ಯಾವ ತರಗತಿಯಲ್ಲಿದ್ದೀರಿ?",
          transliteration: "Neevu yaava taragatiyalliddiri?",
          meaning: "Which class are you in?",
        },

        instruction:
          "Tell your classmate that you are in the fourth semester.",

        options: [
          {
            id: "college-class-correct",
            native: "ನಾನು ನಾಲ್ಕನೇ ಸೆಮಿಸ್ಟರ್‌ನಲ್ಲಿ ಓದುತ್ತಿದ್ದೇನೆ.",
            transliteration: "Naanu naalkane semester-nalli oduttiddene.",
            meaning: "I am studying in the fourth semester.",
            correct: true,
            explanation:
              "Correct! You have explained which semester you are studying in.",
          },
          {
            id: "college-class-wrong-1",
            native: "ನನ್ನ ಹೆಸರು ಅಕ್ಷಿತಾ.",
            transliteration: "Nanna hesaru Akshita.",
            meaning: "My name is Akshita.",
            correct: false,
            explanation:
              "This is an introduction, not an answer about your semester.",
          },
          {
            id: "college-class-wrong-2",
            native: "ನನಗೆ ಊಟ ಬೇಕು.",
            transliteration: "Nanage oota beku.",
            meaning: "I need food.",
            correct: false,
            explanation:
              "This is about food, not your studies.",
          },
        ],
      },

      {
        id: "college-help",

        speaker: "Classmate",

        speakerLine: {
          native: "ನಿಮಗೆ ಏನಾದರೂ ಸಹಾಯ ಬೇಕೇ?",
          transliteration: "Nimage enadaru sahaaya beke?",
          meaning: "Do you need any help?",
        },

        instruction:
          "Politely ask your classmate to help you find the classroom.",

        options: [
          {
            id: "college-help-correct",
            native: "ದಯವಿಟ್ಟು ತರಗತಿಯನ್ನು ಹುಡುಕಲು ಸಹಾಯ ಮಾಡಿ.",
            transliteration: "Dayavittu taragatiyannu hudukalu sahaaya maadi.",
            meaning: "Please help me find the classroom.",
            correct: true,
            explanation:
              "Correct! You have politely asked for directions to your classroom.",
          },
          {
            id: "college-help-wrong-1",
            native: "ನನಗೆ ನೀರು ಬೇಕು.",
            transliteration: "Nanage neeru beku.",
            meaning: "I need water.",
            correct: false,
            explanation:
              "This asks for water, not help finding a classroom.",
          },
          {
            id: "college-help-wrong-2",
            native: "ಬಿಲ್ ಕೊಡಿ.",
            transliteration: "Bill kodi.",
            meaning: "Please give me the bill.",
            correct: false,
            explanation:
              "This is used when asking for a bill.",
          },
        ],
      },
    ],
  },


  housing: {
    title: "Finding a Place to Rent",
    language: "Kannada",
    description:
      "Practise asking about rent, checking facilities and arranging a house visit.",

    steps: [
      {
        id: "housing-rent",

        speaker: "Landlord",

        speakerLine: {
          native: "ನೀವು ಮನೆ ಬಾಡಿಗೆಗೆ ಹುಡುಕುತ್ತಿದ್ದೀರಾ?",
          transliteration: "Neevu mane badige hudukuttiddira?",
          meaning: "Are you looking for a house to rent?",
        },

        instruction:
          "Tell the landlord that you are looking for a house.",

        options: [
          {
            id: "housing-rent-correct",
            native: "ಹೌದು, ನಾನು ಮನೆ ಹುಡುಕುತ್ತಿದ್ದೇನೆ.",
            transliteration: "Howdu, naanu mane hudukuttiddene.",
            meaning: "Yes, I am looking for a house.",
            correct: true,
            explanation:
              "Correct! You have explained that you are looking for a house.",
          },
          {
            id: "housing-rent-wrong-1",
            native: "ನನಗೆ ನೀರು ಬೇಕು.",
            transliteration: "Nanage neeru beku.",
            meaning: "I need water.",
            correct: false,
            explanation:
              "This asks for water rather than explaining your housing requirement.",
          },
          {
            id: "housing-rent-wrong-2",
            native: "ನಾನು ಊಟ ಮಾಡುತ್ತಿದ್ದೇನೆ.",
            transliteration: "Naanu oota maaduttiddene.",
            meaning: "I am eating food.",
            correct: false,
            explanation:
              "This is about eating, not finding a house.",
          },
        ],
      },

      {
        id: "housing-facilities",

        speaker: "Landlord",

        speakerLine: {
          native: "ನಿಮಗೆ ಯಾವ ಸೌಲಭ್ಯಗಳು ಬೇಕು?",
          transliteration: "Nimage yaava saulabhyagalu beku?",
          meaning: "What facilities do you need?",
        },

        instruction:
          "Ask the landlord whether water is available.",

        options: [
          {
            id: "housing-facilities-correct",
            native: "ನೀರು ಸಿಗುತ್ತದೆಯೇ?",
            transliteration: "Neeru siguttadeye?",
            meaning: "Is water available?",
            correct: true,
            explanation:
              "Correct! You have asked about water availability.",
          },
          {
            id: "housing-facilities-wrong-1",
            native: "ಬಾಡಿಗೆ ಎಷ್ಟು?",
            transliteration: "Badige eshtu?",
            meaning: "How much is the rent?",
            correct: false,
            explanation:
              "This asks about rent rather than water availability.",
          },
          {
            id: "housing-facilities-wrong-2",
            native: "ನನಗೆ ಊಟ ಬೇಕು.",
            transliteration: "Nanage oota beku.",
            meaning: "I need food.",
            correct: false,
            explanation:
              "This is about food, not housing facilities.",
          },
        ],
      },

      {
        id: "housing-visit",

        speaker: "Landlord",

        speakerLine: {
          native: "ನೀವು ಮನೆ ನೋಡಲು ಯಾವಾಗ ಬರುತ್ತೀರಿ?",
          transliteration: "Neevu mane nodalu yaavaga baruttiri?",
          meaning: "When will you come to see the house?",
        },

        instruction:
          "Tell the landlord that you will come tomorrow.",

        options: [
          {
            id: "housing-visit-correct",
            native: "ನಾನು ನಾಳೆ ಬರುತ್ತೇನೆ.",
            transliteration: "Naanu naale baruttene.",
            meaning: "I will come tomorrow.",
            correct: true,
            explanation:
              "Correct! You have arranged to visit the house tomorrow.",
          },
          {
            id: "housing-visit-wrong-1",
            native: "ನೀರು ಸಿಗುತ್ತದೆಯೇ?",
            transliteration: "Neeru siguttadeye?",
            meaning: "Is water available?",
            correct: false,
            explanation:
              "This asks about water availability rather than confirming a visit.",
          },
          {
            id: "housing-visit-wrong-2",
            native: "ಬಾಡಿಗೆ ಎಷ್ಟು?",
            transliteration: "Badige eshtu?",
            meaning: "How much is the rent?",
            correct: false,
            explanation:
              "This asks about the rent, not when you will visit.",
          },
        ],
      },
    ],
  },


  help: {
    title: "Asking for Help",
    language: "Kannada",
    description:
      "Practise asking for assistance, explaining a problem and understanding directions.",

    steps: [
      {
        id: "help-attention",

        speaker: "Local resident",

        speakerLine: {
          native: "ನಿಮಗೆ ಏನಾದರೂ ಸಹಾಯ ಬೇಕೇ?",
          transliteration: "Nimage enadaru sahaaya beke?",
          meaning: "Do you need any help?",
        },

        instruction:
          "Politely tell the person that you need help.",

        options: [
          {
            id: "help-attention-correct",
            native: "ಹೌದು, ನನಗೆ ಸಹಾಯ ಬೇಕು.",
            transliteration: "Howdu, nanage sahaaya beku.",
            meaning: "Yes, I need help.",
            correct: true,
            explanation:
              "Correct! You have clearly asked for assistance.",
          },
          {
            id: "help-attention-wrong-1",
            native: "ನನಗೆ ಊಟ ಬೇಕು.",
            transliteration: "Nanage oota beku.",
            meaning: "I need food.",
            correct: false,
            explanation:
              "This asks for food rather than general assistance.",
          },
          {
            id: "help-attention-wrong-2",
            native: "ಬಿಲ್ ಕೊಡಿ.",
            transliteration: "Bill kodi.",
            meaning: "Please give me the bill.",
            correct: false,
            explanation:
              "This expression is used when asking for a bill.",
          },
        ],
      },

      {
        id: "help-problem",

        speaker: "Local resident",

        speakerLine: {
          native: "ಏನಾಯಿತು?",
          transliteration: "Enayitu?",
          meaning: "What happened?",
        },

        instruction:
          "Explain that you have lost your phone.",

        options: [
          {
            id: "help-problem-correct",
            native: "ನನ್ನ ಫೋನ್ ಕಳೆದುಹೋಗಿದೆ.",
            transliteration: "Nanna phone kaleduhogide.",
            meaning: "I have lost my phone.",
            correct: true,
            explanation:
              "Correct! You have explained what happened.",
          },
          {
            id: "help-problem-wrong-1",
            native: "ನನಗೆ ನೀರು ಬೇಕು.",
            transliteration: "Nanage neeru beku.",
            meaning: "I need water.",
            correct: false,
            explanation:
              "This asks for water rather than explaining the problem.",
          },
          {
            id: "help-problem-wrong-2",
            native: "ನನ್ನ ಹೆಸರು ಅಕ್ಷಿತಾ.",
            transliteration: "Nanna hesaru Akshita.",
            meaning: "My name is Akshita.",
            correct: false,
            explanation:
              "This is an introduction, not an explanation of what happened.",
          },
        ],
      },

      {
        id: "help-directions",

        speaker: "Local resident",

        speakerLine: {
          native: "ನಿಮಗೆ ಪೊಲೀಸ್ ಠಾಣೆಗೆ ಹೋಗಬೇಕೇ?",
          transliteration: "Nimage police thanege hogabeke?",
          meaning: "Do you need to go to the police station?",
        },

        instruction:
          "Ask the person to show you the way, please.",

        options: [
          {
            id: "help-directions-correct",
            native: "ದಯವಿಟ್ಟು ದಾರಿ ತೋರಿಸಿ.",
            transliteration: "Dayavittu daari torisi.",
            meaning: "Please show me the way.",
            correct: true,
            explanation:
              "Correct! You have politely asked for directions.",
          },
          {
            id: "help-directions-wrong-1",
            native: "ನನಗೆ ಊಟ ಬೇಕು.",
            transliteration: "Nanage oota beku.",
            meaning: "I need food.",
            correct: false,
            explanation:
              "This asks for food rather than directions.",
          },
          {
            id: "help-directions-wrong-2",
            native: "ಎಷ್ಟು ಆಗುತ್ತದೆ?",
            transliteration: "Eshtu aguttade?",
            meaning: "How much does it cost?",
            correct: false,
            explanation:
              "This asks about a price rather than directions.",
          },
        ],
      },
    ],
  },

};


const localizedScenarioConfig = {
  transport: {
    title: "Getting Around",
    description: "Practise asking for directions, bus stops and fares.",
    steps: [
      ["bn-p5", "bn-p6", "bn-p7"],
      ["hi-p5", "hi-p6", "hi-p7"],
    ],
  },
  food: {
    title: "Ordering Food",
    description: "Practise ordering meals and communicating food preferences.",
    steps: [
      ["bn-p8", "bn-p9", "bn-p10"],
      ["hi-p8", "hi-p9", "hi-p10"],
    ],
  },
  shopping: {
    title: "Shopping",
    description: "Practise asking prices and purchasing quantities.",
    steps: [
      ["bn-p11", "bn-p12", "bn-p17"],
      ["hi-p11", "hi-p12", "hi-p17"],
    ],
  },
  college: {
    title: "College Conversations",
    description: "Practise introductions and everyday academic conversations.",
    steps: [
      ["bn-p2", "bn-p18", "bn-p19"],
      ["hi-p2", "hi-p18", "hi-p19"],
    ],
  },
  housing: {
    title: "Finding a Home",
    description: "Practise discussing rent and household facilities.",
    steps: [
      ["bn-p20", "bn-p21", "bn-p22"],
      ["hi-p20", "hi-p21", "hi-p22"],
    ],
  },
  help: {
    title: "Asking for Help",
    description: "Practise asking for assistance and directions.",
    steps: [
      ["bn-p22", "bn-p23", "bn-p24"],
      ["hi-p22", "hi-p23", "hi-p24"],
    ],
  },
};

function createLocalizedConversations(languageId, languageName) {
  const languagePhrases = phrases.filter(
    (phrase) => phrase.languageId === languageId
  );

  const phraseMap = Object.fromEntries(
    languagePhrases.map((phrase) => [phrase.id, phrase])
  );

  const result = {};

  Object.entries(localizedScenarioConfig).forEach(
    ([scenarioId, config]) => {
      const ids = config.steps.find((stepIds) =>
        stepIds.every((id) => id.startsWith(languageId === "bengali" ? "bn-" : "hi-"))
      );

      if (!ids) return;

      const steps = ids.map((correctId, index) => {
        const correctPhrase = phraseMap[correctId];

        if (!correctPhrase) return null;

        const distractors = languagePhrases
          .filter(
            (phrase) =>
              phrase.id !== correctId &&
              phrase.category !== correctPhrase.category
          )
          .slice(index * 2, index * 2 + 2);

        const options = [correctPhrase, ...distractors].map(
          (phrase, optionIndex) => ({
            id: phrase.id,
            native: phrase.native,
            transliteration: phrase.transliteration,
            meaning: phrase.meaning,
            correct: phrase.id === correctId,
            explanation:
              phrase.id === correctId
                ? "Correct! This expression fits the situation."
                : "This expression has a different meaning. Try again.",
          })
        );

        return {
          id: `${scenarioId}-${index + 1}`,
          speaker: "Local speaker",
          speakerLine: {
            native: languageId === "bengali" ? "নমস্কার" : "नमस्ते",
            transliteration:
              languageId === "bengali" ? "Nomoshkar" : "Namaste",
            meaning: "Hello.",
          },
          instruction: `Choose the appropriate expression: ${correctPhrase.meaning}`,
          options,
        };
      }).filter(Boolean);

      result[scenarioId] = {
        title: config.title,
        language: languageName,
        description: config.description,
        steps,
      };
    }
  );

  return result;
}

const conversations = {
  kannada: kannadaConversations,
  bengali: createLocalizedConversations("bengali", "Bengali"),
  hindi: createLocalizedConversations("hindi", "Hindi"),
};

export default conversations;


# BhashaBridge — Speak Local. Connect Better.


[🌐 Live Demo](https://bhashabridge-roan.vercel.app/) | [GitHub Repository](https://github.com/Akshita-seth/BhashaBridge)



BhashaBridge is a situation-based Indian language learning application designed to help people communicate more confidently in everyday situations.

Instead of focusing only on vocabulary memorisation, it helps users explore useful expressions, understand their meanings, practise responses and listen to pronunciation.

## Features

- **Multilingual phrase library:** Explore Kannada, Bengali and Hindi phrases.
- **Situation-based learning:** Browse transport, food, shopping, college, housing and help scenarios.
- **Interactive practice:** Test your understanding through multiple-choice quizzes.
- **Conversation exercises:** Practise interactive Kannada conversations and phrase-based Bengali and Hindi exercises.
- **Pronunciation support:** Listen to phrases using browser speech synthesis.
- **Personal phrasebook:** Bookmark useful expressions.
- **Persistent preferences:** Retain saved phrases, language selection and quiz progress using LocalStorage.
- **Responsive interface:** Designed for desktop, tablet and mobile screens.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript | Application logic |
| Vite | Development server and build tool |
| React Router | Client-side navigation |
| HTML5 and CSS3 | Structure and responsive styling |
| LocalStorage | Browser-side data persistence |
| Web Speech API | Text-to-speech pronunciation |
| Git and GitHub | Version control |

## Supported Languages

- Kannada
- Bengali
- Hindi

The initial phrase library contains 24 phrases per language. Language content and transliterations should be reviewed by native speakers before being treated as authoritative learning material.

## Application Modules

1. **Home:** Introduction and navigation.
2. **Explore:** Browse practical communication situations.
3. **Phrase Library:** Search phrases and filter by category.
4. **Practice:** Take randomized vocabulary quizzes and track scores.
5. **My Phrasebook:** Access bookmarked expressions.
6. **Conversation:** Complete interactive scenario-based exercises.

## Project Structure

```text
bhashabridge/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   │   ├── conversations.js
│   │   ├── languages.js
│   │   ├── phrases.js
│   │   └── situations.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── PhraseExplorer.jsx
│   │   ├── Practice.jsx
│   │   ├── SavedPhrases.jsx
│   │   └── Conversation.jsx
│   ├── utils/
│   │   ├── quizUtils.js
│   │   └── speechUtils.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd bhashabridge
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Data and Privacy

BhashaBridge currently operates without a backend or external translation API.

- Phrase and conversation content is stored in local project data files.
- Bookmarks, language preferences and quiz progress are stored in browser LocalStorage.
- Pronunciation uses the browser's built-in speech synthesis support.
- Available pronunciation voices depend on the user's browser and device.

## Current Limitations

- Conversation content is not equally comprehensive across all three languages.
- Language content and pronunciation guides require native-speaker validation.
- Speech synthesis availability varies by device.
- User data is stored locally and does not synchronize between devices.
- There is currently no user authentication or cloud database.

## Future Improvements

- Expand natural, multi-turn conversations across all supported languages.
- Validate and improve translations with native speakers.
- Add listening-based exercises and pronunciation practice.
- Introduce progress visualizations and learning streaks.
- Add backend support for accounts and cross-device synchronization.

## License

This project is developed as an educational and portfolio project. Add an appropriate open-source license before inviting external contributions.

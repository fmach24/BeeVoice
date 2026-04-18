# BeeVoice

BeeVoice is a multimodal React UI generator that turns voice instructions and screenshot annotations into working interface code.

Built as a practical AI engineering project for faster UI prototyping from natural input, where users can evolve selected views instead of regenerating from scratch.

## What BeeVoice Does

- Generates 3 React UI variants from a single product idea.
- Lets the user pick the best variant and request targeted edits.
- Supports screenshot-based feedback (e.g. highlighted area to modify).
- Saves generated components directly to [src/views/first.jsx](src/views/first.jsx), [src/views/second.jsx](src/views/second.jsx), and [src/views/third.jsx](src/views/third.jsx).
- Exposes a simple backend API for creating and editing UI outputs.

## Screenshots

### 1. Prompt and Generation
<img width="1920" height="1168" alt="Screenshot From 2026-04-18 15-27-19" src="https://github.com/user-attachments/assets/acee7891-c90f-4bba-8cd0-df199f970955" />
From one high-level prompt, BeeVoice generates three distinct React UI directions, showing fast ideation and structured AI-assisted output.

### 2. Screenshot-Based Edit

<img width="1920" height="1168" alt="Screenshot From 2026-04-18 16-02-21" src="https://github.com/user-attachments/assets/7835ecd0-b79b-4141-8fc2-5d3863c8a078" />
The user highlights a specific area on a screenshot and applies a targeted instruction, proving practical multimodal editing instead of full regeneration.

### 3. Generated React Result
<img width="1920" height="1168" alt="Screenshot From 2026-04-18 16-31-26" src="https://github.com/user-attachments/assets/87a1b241-123e-4508-bc17-7ccb0c8d0f33" />
The final view is production-like JSX saved directly into project files, demonstrating a complete loop from idea to editable frontend code.

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Create [.env](.env) in the project root and add:

```env
API_KEY=your_gemini_api_key
```

3. Start backend generator (port 4000)

```bash
node generator.js
```

4. Start frontend app

```bash
cd src && npm start
```

## Architecture Summary

- Backend: [generator.js](generator.js) (Express + Multer + Gemini integration)
- Frontend: React app in [src](src)
- Generated output: [src/views](src/views)

## Tech Stack

- Frontend: React, JavaScript
- Backend: Node.js, Express
- AI: Google Gemini API
- File handling: Multer

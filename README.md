# BeeVoice

BeeVoice is a multimodal React UI generator that turns voice instructions and screenshot annotations into working interface code.

Built as a practical AI engineering project, it shows end-to-end skills in prompt design, backend integration, and frontend prototyping speed.

## Why This Project Stands Out

- Solves a real product problem: faster UI prototyping from natural input.
- Uses multimodal AI workflow: text + image context in one generation flow.
- Demonstrates production-style thinking: API handling, upload flow, and generated code persistence.
- Focuses on iteration: users can evolve selected views instead of regenerating from scratch.

## What BeeVoice Does

- Generates 3 React UI variants from a single product idea.
- Lets the user pick the best variant and request targeted edits.
- Supports screenshot-based feedback (e.g. highlighted area to modify).
- Saves generated components directly to [src/views/first.jsx](src/views/first.jsx), [src/views/second.jsx](src/views/second.jsx), and [src/views/third.jsx](src/views/third.jsx).
- Exposes a simple backend API for creating and editing UI outputs.

## Screenshots

Add your screenshots here to show recruiters the workflow in seconds.

Suggested folder:
- [uploads/screenshots](uploads/screenshots)

Example section layout (replace with your files):

### 1. Prompt and Generation
![Prompt and generation screen](uploads/screenshots/01-prompt-generation.png)
From one high-level prompt, BeeVoice generates three distinct React UI directions, showing fast ideation and structured AI-assisted output.

### 2. Screenshot-Based Edit
![Screenshot edit flow](uploads/screenshots/02-screenshot-edit.png)
The user highlights a specific area on a screenshot and applies a targeted instruction, proving practical multimodal editing instead of full regeneration.

### 3. Generated React Result
![Generated React view](uploads/screenshots/03-generated-view.png)
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
- Temporary uploads: [uploads](uploads)

## Tech Stack

- Frontend: React, JavaScript
- Backend: Node.js, Express
- AI: Google Gemini API
- File handling: Multer

## Recruiter Notes

This project was built to demonstrate internship-ready capabilities:

- building an AI-powered feature end-to-end,
- translating user intent into usable UI code,
- handling multimodal inputs and iterative UX feedback,
- keeping the implementation practical and demo-friendly.

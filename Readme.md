# Frontend Mentor - Space tourism multi-page website

This is a solution to the [Space tourism multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1Z8p7). It is a responsive, multi-page travel landing site that showcases destinations, crew profiles, and technology information in a polished, interactive layout.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Features](#features)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Prompt history and what I did](#prompt-history-and-what-i-did)
- [Run locally](#run-locally)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device size
- See hover states for interactive elements and navigation items
- Navigate between Home, Destination, Crew, and Technology pages
- Explore content for each destination, crew member, and technology item
- Use keyboard-accessible selectors that update the displayed content without reloading the page

### Features

- Responsive landing page built with Express and EJS templates
- Shared navigation and page layout across multiple routes
- Content-driven architecture using `data.json`
- Keyboard-friendly tab/selector interactions for the destination, crew, and technology sections
- Clean, modern styling inspired by the Space Tourism design system

### Links

- Repository: [issagoodlifeInc/spacetourism](https://github.com/issagoodlifeInc/spacetourism)
- Live site: [spacetourism via netlify](https://spacetourism-p06x.onrender.com/)
<!-- - Live site: [spacetourism via netlify](https://spacetourism-p06x.onrender.com/) -->

## My process

- Set up the Express app with EJS views and static assets
- Organized the page structure into `home`, `destination`, `crew`, and `technology` views
- Added shared navigation data and current-page awareness in `app.js`
- Moved the content model into `data.json` so the page sections can be rendered dynamically
- Built accessible selectors that update the relevant content without page reloads
- Styled the interface to mirror the space-tourism design direction and improve responsiveness
- Tested the site locally in the browser and refined the layout and navigation behavior

### Built with

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- EJS
- JSON-driven content model

### What I learned

- How to structure a multi-page app with reusable layouts and route-based rendering
- How to separate data from view logic using a centralized JSON file
- How to build accessible tab-style navigation patterns without reloading the page
- How to keep a project organized with clean route handlers, template files, and static assets

### Prompt history and what I did

This project was shaped by a few focused prompts and a follow-up refinement cycle:

- Prompt: "Create a modern space tourism website with a responsive home page, destination section, crew section, and technology section."
  - What I did: set up the Node/Express project, created the EJS view structure, and built the navigation flow between the main pages.

- Prompt: "Make the destination, crew, and technology sections data-driven and keyboard accessible."
  - What I did: moved the page content into `data.json`, added structured rendering logic, and implemented accessible selectors that update content dynamically.

- Prompt: "Document the project clearly in the README and acknowledge the work that was done."
  - What I did: wrote this README to capture the challenge context, process, technologies, and the prompt-driven build journey.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm start
   ```
3. Open the project in your browser at:
   ```text
   http://localhost:3000
   ```

The destination, crew, and technology pages are rendered from `data.json`, and their selectors are keyboard-accessible and update in place without reloading.

## Author

- Name: Lesley Kimutai
- Portfolio: [Lesley Kimutai](https://leskimfamily.herokuapp.com/)
- Frontend Mentor: [@Leskim](https://www.frontendmentor.io/profile/Leskim)
- Twitter: [@KimutaiLesley](https://twitter.com/KimutaiLesley)

## Acknowledgments

This project is a product of the challenge brief, the frontend learning process, and a collaborative build approach with GitHub Copilot.

- Acknowledged builder: GitHub Copilot, for helping structure the app, suggest the implementation flow, and document the work.
- Acknowledged owner: Lesley Kimutai, for guiding the project direction, prompts, and final review.
- Prompt-driven notes: this README reflects the work done to turn a design brief into a functioning, responsive space tourism website.

Thank you for visiting this project and for the prompt-driven process that made it possible.
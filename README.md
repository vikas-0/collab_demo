# Collaborative Editor Demo

This is a simple demo of a real-time collaborative editor using Y.js, Tiptap, and Rails Action Cable. The demo showcases how these three technologies can be integrated to create a seamless collaborative editing experience.

## Features

- **Real-time Collaboration:** Multiple users can edit the same document at the same time.
- **Rich Text Editing:** Advanced text formatting and editing capabilities.
- **Conflict Resolution:** Smooth editing experience without conflicts.

## Demo Video

Watch the demo video to see the editor in action: [demo_video.mov](./demo_video.mov)

## Getting Started

To run the demo locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. **Install dependencies:**
    ```bash
    bundle install
    yarn install
    ```
3. **Run the Rails server:**
    ```bash
    /bin/dev
    ```
4. **Open your browser and navigate to:**
    `http://localhost:3000`

## Technologies Used
    - Y.js: A CRDT implementation for real-time collaboration.
    - Tiptap: A headless, framework-agnostic text editor built on ProseMirror.
    - Rails Action Cable: Integrates WebSockets for real-time updates and communication.
    - Mantine: A modern React component library for building responsive and accessible web applications.

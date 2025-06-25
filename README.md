# Outfit Builder

[cite_start]A web-based WYSIWYG (What You See Is What You Get) editor built with Next.js that allows users to visually mix and match different clothing items by dragging and dropping them into a virtual canvas.

---

## Key Features

- [cite_start]**Drag-and-Drop Interface:** Users can drag clothing items from a categorized sidebar.
- [cite_start]**Visual Outfit Assembly:** A dynamic canvas area displays the selected top, bottom, and shoe to visualize the complete outfit.
- **Responsive Design:** The application features a professional, responsive layout that works on both desktop and mobile devices.
  - On desktop, a two-column layout provides a full view of items and the canvas.
  - On mobile, a "Mini-Canvas" sticky footer provides an excellent user experience for dragging and dropping, while a full preview is available on scroll.
- **State Management:** Uses React hooks to manage the state of the active outfit, saved outfits, and the shopping cart.
- [cite_start]**Cart & Save Logic:** Functional "Add to Cart", "Save Outfit", and "Reset" buttons to manage the created outfits.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- You can download Node.js (which includes npm) from [https://nodejs.org/](https://nodejs.org/)

### Installation

1.  Clone the repository (or download the source code).
2.  Navigate into the project directory:
    ```sh
    cd your-project-name
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

- To run the app in development mode, execute the following command:
  ```sh
  npm run dev
  ```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Additional Instructions

- The clothing assets are located in the `/public` directory, categorized into `tops`, `bottoms`, and `shoes`.
- The project is built with the Next.js App Router and styled using Tailwind CSS.

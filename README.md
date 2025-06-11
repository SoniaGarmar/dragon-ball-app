# Dragon Ball Universe App

Welcome to the Dragon Ball Universe App! This application allows you to search for your favorite Dragon Ball characters and (soon) planets.

## Features

- **Character Search**: Search for characters by name, minimum Ki, and maximum Ki.
- **Character Details**: Click on a character card to view more details (currently a placeholder).
- **Planet Search**: A dedicated page for planet exploration (currently a placeholder).
- **Responsive Design**: The application is designed to work on various screen sizes.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SoniaGarmar/dragon-ball-app.git
    cd dragon-ball-app
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

### Running the Application

Once the dependencies are installed, you can start the development server:

Using npm:
```bash
npm run dev
```
Or using yarn:
```bash
yarn dev
```

This will typically start the application on `http://localhost:5173` (the port might vary if 5173 is in use). Open this URL in your web browser to see the application.

## How to Use

-   **Navigation**: Use the top navigation bar to switch between the "Characters" and "Planets" pages.
-   **Character Search Page**:
    -   The application defaults to the Character Search page.
    -   Enter a character's name in the "Character Name" field.
    -   Specify a Ki range using the "Min Ki" and "Max Ki" fields, along with their respective units (e.g., 1000, 1 Million, 1 Billion).
    -   Click the "Search" button to see the results.
    -   Click the "Clear" button to reset the search form.
    -   Character results are displayed as cards. Click on a card to navigate to the character's detail page.
-   **Character Detail Page (WIP)**:
    -   Use the "Back to Characters" button to return to the character search page.
-   **Planets Page (WIP)**:

## Project Structure

-   `src/components`: Reusable UI components (e.g., `CharacterCard`, `SearchForm`, `Navbar`).
-   `src/pages`: Top-level page components (e.g., `CharactersPage`, `CharacterDetailPage`, `PlanetsPage`).
-   `src/services`: API call logic (e.g., `api.js`).
-   `src/routes`: Application routing configuration (`AppRoutes.jsx`).
-   `src/utils`: Utility functions (e.g., `characterUtils.js`).
-   `public`: Static assets.

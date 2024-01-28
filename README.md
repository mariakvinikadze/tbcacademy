
## Getting Started

This guide will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before setting up the project, ensure you have Node.js installed on your system. You can download it from the [Node.js official website](https://nodejs.org/). You will also need npm (which comes with Node.js) or Yarn, which can be installed from the [Yarn website](https://yarnpkg.com/).

### Installation

After downloading or pulling the project to your local machine, install the dependencies:

#### Using npm:

```
npm install
```

#### Using Yarn:

```
yarn
```

### Running the Project

To start the development server:

#### Using npm:

```
npm run dev
```

#### Using Yarn:

```
yarn dev
```

This command will launch the Vite development server and open the project in your default web browser. For style changes, run SASS watch with `sass --watch styles/styles.scss styles/styles.css` to compile `styles.scss` into `styles.css`.

### Building for Production

To create an optimized build for production:

#### Using npm:

```
npm run build
```

#### Using Yarn:

```
yarn build
```

This command will generate a `dist` folder containing the production-ready assets.

## Built With

- [Vite](https://vitejs.dev/) - A modern frontend build tool
- SASS - For advanced styling capabilities.

## Author

- **Maria Kvinikadze**

## Project Structure

The project has the following directory and file structure:

- `fonts`: Directory for font files.
- `icons`: Directory for icon files.
- `images`: Directory for image files.
- `js`: JavaScript files for the project's functionality.
    - `scripts.js`: Handles UI elements, event listeners, and functions for slides and pagination.
    - `data.js`: Manages structured data, including courses, images, and accordion data.
- `styles`: SASS/SCSS or CSS files for styling.
- `index.html`: The main HTML file of the project.
- `vite.config.js`: Configuration file for Vite.
- `README.md`: This file, containing information about the project.
- `package.json`: Lists project dependencies and scripts.
- `yarn.lock`: Yarn package lock file, ensuring consistent installs across machines.

### Key Files Description
- `README.md`: Provides instructions and information about the project.
- `package.json`: Contains dependencies and scripts for development and build processes.
- `vite.config.js`: Configures Vite, the build tool used in the project.

This structure is designed for efficient development in a modern frontend workflow, with a focus on speed and performance.

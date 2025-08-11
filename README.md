# MC Jazz Site

A modern React website built with Bootstrap components.

## Features

- ⚛️ React 18
- 🎨 Bootstrap 5 & React Bootstrap
- 📱 Fully Responsive Design
- ⚡ Modern and Fast
- 🎯 Ready to Customize

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mcjazzsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Project Structure

```
mcjazzsite/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── package.json
└── README.md
```

## Customization

1. **Update the site title**: Edit the `<title>` in `public/index.html`
2. **Modify the content**: Update `src/App.js` with your content
3. **Change styles**: Customize `src/App.css` and `src/index.css`
4. **Add new components**: Create new React components in the `src/` directory

## Bootstrap Components

This project uses React Bootstrap. You can use any Bootstrap component by importing it:

```javascript
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
```

## Deployment

To build and deploy the project:

```bash
npm run build
```

This creates an optimized build in the `build` folder ready for deployment.

## Learn More

- [React Documentation](https://reactjs.org/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)

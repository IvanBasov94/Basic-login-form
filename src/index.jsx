import ReactDOM from 'react-dom/client';
import App from './App';
import "./scss/index.scss";

const rootElement = document.getElementById('root');

if (rootElement) {
   const root = ReactDOM.createRoot(rootElement);
   root.render(<App />);
};
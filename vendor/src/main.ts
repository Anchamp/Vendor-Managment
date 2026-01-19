import './style.css';

const appRoot: HTMLElement | null = document.getElementById('app');

if (!appRoot) {
  throw new Error('Root element #app not found');
}

appRoot.innerHTML = '<h1>Vendor Management System</h1>';

console.warn('Application initialized');

import './style.css';
import { loadFromStorage } from './app.storage';
import { state } from './app.state';

document.addEventListener('DOMContentLoaded', (): void => {
  console.log('Vendor Management System - Phase 2: State Layer Initialized');
  loadFromStorage();

  console.log('Current state:', state);
  console.log('Vendors loaded:', state.vendors.length);
});

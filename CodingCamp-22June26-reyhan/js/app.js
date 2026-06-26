// Feature: expense-budget-visualizer
// Entry point — wires all modules together and calls init() on DOMContentLoaded.
// Full implementation in task 16.

import './state.js';
import './storage.js';
import './transactions.js';
import './categories.js';
import './limits.js';
import './chart.js';
import './ui.js';
import './theme.js';
import './validation.js';

function init() {
  // Initialisation sequence will be implemented in task 16.
  console.log('Expense & Budget Visualizer — init()');
}

document.addEventListener('DOMContentLoaded', init);

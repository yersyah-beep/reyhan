// Feature: expense-budget-visualizer
// In-memory state module — single source of truth.
// Full implementation in task 3.

/** @type {import('./transactions.js').Transaction[]} */
let transactions = [];
/** @type {string[]} */
let categories = [];
/** @type {Record<string, number>} */
let limits = {};
/** @type {"light" | "dark"} */
let theme = 'light';

export function getTransactions() { return transactions; }
export function setTransactions(t) { transactions = t; }

export function getCategories() { return categories; }
export function setCategories(c) { categories = c; }

export function getLimits() { return limits; }
export function setLimits(l) { limits = l; }

export function getTheme() { return theme; }
export function setTheme(t) { theme = t; }

export function getTotal() {
  return transactions.reduce((sum, tx) => sum + tx.amount, 0);
}

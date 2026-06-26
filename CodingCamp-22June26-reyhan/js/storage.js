// Feature: expense-budget-visualizer
// localStorage read/write with error handling.
// Full implementation in task 4.
// All keys use the "ebv_" prefix.

export const KEYS = {
  transactions: 'ebv_transactions',
  categories:   'ebv_categories',
  limits:       'ebv_limits',
  theme:        'ebv_theme',
};

export function readJSON(key) {
  // Stub — full implementation in task 4.
  return null;
}

export function writeJSON(key, value) {
  // Stub — full implementation in task 4.
  return { ok: true };
}

export function removeKey(key) {
  // Stub — full implementation in task 4.
}

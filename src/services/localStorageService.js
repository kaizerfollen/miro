const STORAGE_KEY = 'cards';

export const saveToLocalStorage = (cards) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
};

export const loadFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

console.log('~~~~~~~~~ Task 2: ~~~~~~~~~');

// Görev 2. Depo

class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    let newItemList = this.#items.filter(item => item !== itemToRemove);
    this.#items = newItemList;
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log('Main: ', storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log('Added: ', storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log('Removed: ', storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

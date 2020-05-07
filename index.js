class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length = this.items.length;
  }

  get(pos) {
    if(pos >= this.items.length){
      throw new Error('OutOfBounds')
    } else if (pos < 0){
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.floor(...this.items)
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;

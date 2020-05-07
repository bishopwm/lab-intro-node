class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
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

  sum() {
    let sum = 0;
    for(let i=0; i<this.items.length; i++){
     sum+=this.items[i];
     
    }
    return sum;
  }

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
    let sum = 0;
    for(let i=0; i<this.items.length; i++){
     sum+=this.items[i];
    }
    return sum/this.items.length;
    }
  }
}

module.exports = SortedList;

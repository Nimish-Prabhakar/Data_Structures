/*

Creating Your Own Array

*/

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Adding data to start of an array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // fetching data at an index
  get(index) {
    return this.data[index];
  }

  // remove item from end of a array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // remove an item from specific index
  delete(index) {
    const item = this.data[index];
    this.unshift(index);
    this.length--;
  }

  // helper function for delete function
  unshift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

/* 数组末尾插入元素 push */
Array.prototype.insertLastPosition = function(...values) {
  const originLength = this.length;

  for (let i = 0; i < values.length; i++) {
    this[originLength + i] = values[i];
  }

  return this.length;
};

/* 数组开头插入元素 unshift */
Array.prototype.insertFirstPosition = function(...values) {
  for (let i = this.length - 1; i >= 0; i--) {
    this[i + values.length] = this[i];
  }

  for (let i = 0; i < values.length; i++) {
    this[i] = values[i];
  }

  return this.length;
}

/* 数组末尾删除元素 pop */
Array.prototype.deleteLastPosition = function() {
  const newArray = [];

  for (let i = 0; i < this.length - 1; i++) {
    newArray[i] = this[i];
  }

  return newArray;
}

/* 数组开头删除元素 shift */
Array.prototype.deleteFirstPosition = function() {
  const newArray = [];

  for (let i = 1; i < this.length; i++) {
    newArray[i - 1] = this[i];
  }

  return newArray;
}

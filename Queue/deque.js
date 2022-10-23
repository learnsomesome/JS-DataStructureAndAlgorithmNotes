/**
 * 双端队列
 * 同时遵循 先进先出 与 后进先出
 */

/* 基于对象的双端队列 */
class DequeBaseObject {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 在双端队列前端添加新的元素
  addFront(...elements) {
    if (this.isEmpty()) {
      this.addBack(...elements);
    } else {
      for (let i = this.lowestCount; i < this.lowestCount + this.count - 1 + elements.length; i++) {
        this.items[i + elements.length] = this.items[i];
      }

      for (let i = this.lowestCount; i < this.lowestCount + elements.length; i++) {
        this.items[i] = elements[elements.length - 1 - (i - this.lowestCount)];
      }

      this.count += elements.length;
    }
  }

  // 在双端队列后端添加新的元素
  addBack(...elements) {
    elements.forEach((element) => {
      this.items[this.count] = element;

      this.count++;
    })
  }

  // 从双端队列前端移除第一个元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const element = this.items[this.lowestCount];

    delete this.items[this.lowestCount];

    this.size() === 0 ? (this.lowestCount = 0) : this.lowestCount++;
    this.count--;

    return element;
  }

  // 从双端队列后端移除第一个元素
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;

    const element = this.items[this.lowestCount + this.count];

    delete this.items[this.lowestCount + this.count];

    return element;
  }

  // 返回双端队列前端的第一个元素
  peekFront() {
    return this.items[this.lowestCount];
  }

  // 返回双端队列后端的第一个元素
  peekBack() {
    return this.items[this.lowestCount + this.count - 1];
  }

  // 队列是否为空
  isEmpty() {
    return this.count === 0;
  }

  // 清空队列
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 返回队列包含的元素个数
  size() {
    return this.count;
  }

  toString() {
    return Object.keys(this.items).sort((a, b) => a - b).map((key) => this.items[key]).toString();
  }
}

/* 应用：回文检查 */
function palindromeChecker(aString) {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) false;

  const deque = new DequeBaseObject();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;

  deque.addBack(...lowerString.split(''));

  while (deque.size() > 1 && isEqual) {
    isEqual = deque.removeFront() === deque.removeBack();
  }

  return isEqual;
}

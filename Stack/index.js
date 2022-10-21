/**
 * 栈
 * 后进先出（LIFO）
 */

/* 基于数组的栈 */
class StackBaseArray {
  constructor() {
    this.items = [];
  }

  // 添加一个（或几个）新元素到栈顶
  push(...elements) {
    this.items.push(...elements);
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop() {
    return this.items.pop();
  }

  // 返回栈顶的元素，不对栈做任何修改
  peek() {
    return this.items.at(-1);
  }

  // 栈内是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 移除栈内所有元素
  clear() {
    this.items = [];
  }

  // 返回栈内元素个数
  size() {
    return this.items.length;
  }

  // 返回栈内容
  toString() {
    return this.items.toString();
  }
}

/* 基于对象的栈 */
class StackBaseObject {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(...elements) {
    elements.forEach((element) => {
      this.items[this.count] = element;

      this.count++;
    })
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;

    const element = this.items[this.count];

    delete this.items[this.count];
  
    return element;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  size() {
    return this.count;
  }

  toString() {
    return Object.values(this.items).toString();
  }
}

/* 应用：十进制转换二进制 */
function decimalToBinary(decNumber) {
  const stack = new StackBaseArray();
  let binaryString = '';

  while (decNumber > 0) {
    stack.push(Math.floor(decNumber % 2));

    decNumber = Math.floor(decNumber / 2);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }

  return binaryString;
}

/* 进阶：十进制转换为基数为2～36的任意进制 */
function baseConverter(decNumber, base) {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const stack = new StackBaseArray();
  let binaryString = '';

  if (base < 2 || base > 36) {
    return '';
  }

  while (decNumber > 0) {
    stack.push(Math.floor(decNumber % base));

    decNumber = Math.floor(decNumber / base);
  }

  while (!stack.isEmpty()) {
    binaryString += digits[stack.pop()];
  }

  return binaryString;
}

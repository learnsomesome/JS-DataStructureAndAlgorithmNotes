/**
 * 队列
 * 先进先出（FIFO）
 */

/* 基于对象的队列 */
class QueueBaseObject {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 向队列尾部添加一个（或多个）新的项
  enqueue(...elements) {
    elements.forEach((element) => {
      this.items[this.lowestCount + this.count] = element;

      this.count++;
    })
  }

  // 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const element = this.items[this.lowestCount];

    delete this.items[this.lowestCount];

    this.size() === 0 ? (this.lowestCount = 0) : this.lowestCount++;
    this.count--;

    return element;
  }

  // 返回队列中第一个元素
  peek() {
    return this.items[this.lowestCount];
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
    return Object.values(this.items).toString();
  }
}

/* 应用：击鼓传花 */
function hotPotato(elements, num) {
  const queue = new QueueBaseObject();
  const elimitatedList = [];

  queue.enqueue(...elements);

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    elimitatedList.push(queue.dequeue());
  }

  return {
    elimitated: elimitatedList,
    winner: queue.peek(),
  };
}

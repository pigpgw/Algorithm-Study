class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 1 &&
      this.heap[Math.floor(currentIndex / 2)] > this.heap[currentIndex]
    ) {
      [this.heap[Math.floor(currentIndex / 2)], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[Math.floor(currentIndex / 2)],
      ];
      currentIndex = Math.floor(currentIndex / 2);
    }
  }

  remove() {
    const smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap.pop();
      let currentIndex = 1;
      let leftChildIndex = currentIndex * 2;
      let rightChildIndex = currentIndex * 2 + 1;

      while (
        this.heap[leftChildIndex] &&
        (this.heap[currentIndex] > this.heap[leftChildIndex] ||
          this.heap[currentIndex] > this.heap[rightChildIndex])
      ) {
        if (
          !this.heap[rightChildIndex] ||
          this.heap[leftChildIndex] < this.heap[rightChildIndex]
        ) {
          [this.heap[currentIndex], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[currentIndex],
          ];
          currentIndex = leftChildIndex;
        } else {
          [this.heap[currentIndex], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[currentIndex],
          ];
          currentIndex = rightChildIndex;
        }

        leftChildIndex = currentIndex * 2;
        rightChildIndex = currentIndex * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.pop();
    } else {
      return 0;
    }

    return smallest || 0;
  }
}

// 입력 처리
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = parseInt(input[0], 10);
const operations = input.slice(1).map(Number);

const heap = new MinHeap();
for (const op of operations) {
  if (op === 0) {
    console.log(heap.remove());
  } else {
    heap.insert(op);
  }
}

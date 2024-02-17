class MinHeap {
  heapArr;

  constructor(arr) {
    if (Array.isArray(arr)) {
      this.heapArr = arr;
      this.heapify();
    } else {
      this.heapArr = [];
    }
  }

  get heap() {
    return this.heapArr;
  }

  get front() {
    return this.heapArr[0];
  }

  getLeftChild(index) {
    return 2 * index + 1;
  }

  getRightChild(index) {
    return 2 * index + 2;
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  push(num) {
    this.heapArr.push(num);
    this.heapifyUp(this.heapArr.length - 1);
  }

  pop() {
    const poppedElement = this.heapArr[0];
    if (this.heapArr.length > 1) {
      this.heapArr[0] = this.heapArr.pop();
      this.heapifyDown(0);
    } else {
      this.heapArr.pop();
    }

    return poppedElement;
  }

  heapifyUp(index) {
    const parentIdx = this.getParent(index);

    if (parentIdx < 0) {
      return;
    }

    if (this.heapArr[parentIdx] > this.heapArr[index]) {
      [this.heapArr[parentIdx], this.heapArr[index]] = [
        this.heapArr[index],
        this.heapArr[parentIdx],
      ];
      this.heapifyUp(parentIdx);
    }
  }

  heapifyDown(index) {
    const leftChildIdx = this.getLeftChild(index);
    const rightChildIdx = this.getRightChild(index);

    if (leftChildIdx < this.heapArr.length) {
      let minElementIndex;
      if (rightChildIdx < this.heapArr.length) {
        // compare here
        minElementIndex = this.heapArr[leftChildIdx] <= this.heapArr[rightChildIdx] ? leftChildIdx : rightChildIdx;         
      } else {
        // go ahead with leftChildIdx
        minElementIndex = leftChildIdx;
      }

      if (this.heapArr[minElementIndex] < this.heapArr[index]) {
        [this.heapArr[minElementIndex], this.heapArr[index]] = [this.heapArr[index], this.heapArr[minElementIndex]];
        this.heapifyDown(minElementIndex);
      }
    }
  }

  heapify() {
    const startingPoint = this.getParent(this.heapArr.length - 1)
    for (let i = startingPoint; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
}



// const minHeap = new MinHeap();
// minHeap.push(1);
// console.log(minHeap.getFront());

// minHeap.push(100);
// console.log(minHeap.getFront());

// minHeap.push(-2);
// console.log(minHeap.getFront());

// console.log(minHeap.pop());
// console.log(minHeap.getFront());

const minHeap = new MinHeap([1, 6, 7, 4, 89, 12]);
console.log(minHeap.heap);
// console.log(minHeap.pop());
// console.log(minHeap.pop());
// console.log(minHeap.pop());
// console.log(minHeap.pop());
// console.log(minHeap.pop());
// console.log(minHeap.heap);


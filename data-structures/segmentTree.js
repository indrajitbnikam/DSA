class SegmentTree {
  constructor(value, leftIdx, rightIdx) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.leftIdx = leftIdx; 
    this.rightIdx = rightIdx; 
  }

  static build(arr, leftIdx, rightIdx) {
    if (leftIdx === rightIdx) {
      return new SegmentTree(arr[leftIdx], leftIdx, rightIdx);
    }

    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let leftChild = SegmentTree.build(arr, leftIdx, midIdx);
    let rightChild = SegmentTree.build(arr, midIdx + 1, rightIdx);
    const node = new SegmentTree(leftChild.value + rightChild.value, leftIdx, rightIdx);
    node.left = leftChild;
    node.right = rightChild;

    return node;
  }

  // O(logn)
  update(value, idx) {
    if (idx === this.leftIdx && idx === this.rightIdx) {
      this.value = value;
      return;
    }

    const mid = Math.floor((this.leftIdx + this.rightIdx) / 2);

    if (idx <= mid) {
      this.left.update(value, idx);
    } else {
      this.right.update(value, idx);
    }

    this.value = this.left.value + this.right.value;
  }

  // O(logn)
  // indexes are inclusive
  query(startIdx, endIdx) {
    if (startIdx === this.leftIdx && endIdx === this.rightIdx) {
      return this.value;
    }

    const midIdx = Math.floor((this.leftIdx + this.rightIdx) / 2);
    if (endIdx <= midIdx) {
      return this.left.query(startIdx, endIdx);
    } else if (startIdx > midIdx) {
      return this.right.query(startIdx, endIdx);
    } else {
      return this.left.query(startIdx, midIdx) + this.right.query(midIdx + 1, endIdx);
    }
  }
}

// Build
const arr = [0, 1, 2, 3, 4];
const sTree = SegmentTree.build(arr, 0, arr.length - 1);

// Test/Operations
// console.log(sTree.value);
// console.log(sTree.left.value);
// console.log(sTree.left.left.value);
// console.log(sTree.left.left.left.value);
// console.log(sTree.query(0, 0));
// console.log(sTree.query(2, 3));
// sTree.update(2, 1);

// console.log(sTree.value);
// console.log(sTree.left.value);
// console.log(sTree.left.left.value);
// console.log(sTree.left.left.left.value);

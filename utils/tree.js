class TreeNode {
  constructor(value, leftChild, rightChild) {
    this.val = value;
    this.leftChild = leftChild !== undefined ? leftChild : null;
    this.rightChild = rightChild !== undefined ? rightChild : null;;
  }
}

// Can print any tree in below format
// given the leftChild/rightChild key name is same as below
// * 1
// - - L: 2
// - - - - L: 3
// - - R: 4
// - - - - R: 5
// - - - - - - L: 6
const printTree = (node, spaceCount = 0, label = '* ') => {
  if (!node) {
    return;
  }

  console.log(`${'- '.repeat(spaceCount)}${label}${node.val}`);

  printTree(node.leftChild, spaceCount + 2, 'L: ');
  printTree(node.rightChild, spaceCount + 2, 'R: ');
}
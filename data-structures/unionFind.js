class UnionFind {
  constructor() {
    this.parent = new Map();
    this.rank = new Map();
  }

  // enhanced with path compression
  find(num) {
    if (!this.parent.has(num)) {
      // when you don't know all the nums in advance
      this.parent.set(num, num);
      this.rank.set(num, 0);
    } else {
      if (num !== this.parent.get(num)) {
        const currParent = this.parent.get(num);
        this.parent.set(num, this.find(currParent)); // Path compression
      }
    }
    return this.parent.get(num);
  }

  union(num1, num2) {
    const [parent1, parent2] = [this.find(num1), this.find(num2)];
    
    if (parent1 === parent2) {
      // found cycle
      return false;
    }

    if (this.rank.get(parent1) > this.rank.get(parent2)) {
      this.parent.set(parent2, parent1);
    } else if (this.rank.get(parent1) < this.rank.get(parent2)) {
      this.parent.set(parent1, parent2);
    } else {
      this.parent.set(parent1, parent2);
      this.rank.set(parent2, this.rank.set(parent2) + 1);
    }

    return true;
  }
}
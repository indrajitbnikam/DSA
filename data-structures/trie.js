class TrieNode {
  constructor(value) {
    this.value = value ? value : null;
    this.isEndOfWord = false;
    this.children = new Map();
  }

  isEndOfWord() {
    return this.isEndOfWord;
  }
}

class Trie {
  constructor() {
    this.trieRootNode = new TrieNode();
  }

  insert(word) {
    let currNode = this.trieRootNode;

    word.split('').forEach((ch, index) => {
      if (!currNode.children.has(ch)) {
        currNode.children.set(ch, new TrieNode(ch));
      }
      currNode = currNode.children.get(ch);

      if (index === (word.length - 1)) {
        currNode.isEndOfWord = true;
      }
    })
  }

  search(word) {
    let currNode = this.trieRootNode;

    for (let ch of word) {
      if (currNode.children.has(ch)) {
        currNode = currNode.children.get(ch);
      } else {
        return `${word} does not exist!`;
      }      
    }

    return word + ' exists!';
  }
}

// Test

const trie = new Trie();
console.log(trie.search("asdasd"));

trie.insert('Phoenix');
console.log(trie.search('Phoenix'));
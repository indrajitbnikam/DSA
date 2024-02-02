// simple graph
class Graph {
  #adjList;

  constructor() {
    this.#adjList = new Map();
  }

  
  get graph() {
    return this.#adjList;
  }

  #addIfNotPresent(nodeKey) {
    if (!this.#adjList.has(nodeKey)) {
      this.#adjList.set(nodeKey, []);
    }
  }

  add(srcNode, destNode) {
    this.#addIfNotPresent(srcNode);
    this.#addIfNotPresent(destNode);

    const srcNodeConnections = this.#adjList.get(srcNode);
    const destNodeNodeConnections = this.#adjList.get(destNode);

    // add entries
    this.#adjList.set(srcNode, [...srcNodeConnections, destNode]);
  }
}

const graphObj = new Graph;
graphObj.add(0, 1);
graphObj.add(0, 2);
graphObj.add(1, 2);
graphObj.add(2, 0);
graphObj.add(2, 3);
graphObj.add(3, 3);

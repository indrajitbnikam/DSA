const dfsRecursive = (graph, sourceNode, visitedNodes = new Set()) => {
  if (visitedNodes.has(sourceNode)) {
    return;
  }

  visitedNodes.add(sourceNode);
  console.log(sourceNode);

  for (let connection of graph.get(sourceNode)) {
    dfsRecursive(graph, connection, visitedNodes);
  }
}

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
    // to make graph undirected repeat above step for destNode by adding srcNode in it's connections
  }
}

const graphObj = new Graph;
graphObj.add(0, 1);
graphObj.add(0, 2);
graphObj.add(1, 2);
graphObj.add(2, 0);
graphObj.add(2, 3);
graphObj.add(3, 3);

dfsRecursive(graphObj.graph, 0);

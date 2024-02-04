const dfsIterativePreOrder = (graph, sourceNode) => {
  const stack = [sourceNode];
  const visitedNodes = new Set();

  while (stack.length) {
    const currNode = stack.pop();
    console.log(currNode);

    if (!visitedNodes.has(currNode)) {
      visitedNodes.add(currNode);
    }

    for (let nei of graph.get(currNode)) {
      if (!visitedNodes.has(nei)) {
        stack.push(nei);
      }
    }
  }
}

const dfsIterativePostOrder = (graph, sourceNode) => {
  const stack = [sourceNode];
  const visitedNodes = new Set();

  while (stack.length !== graph.size) {
    const currNode = stack[stack.length - 1];

    if (!visitedNodes.has(currNode)) {
      visitedNodes.add(currNode);
    }

    for (let nei of graph.get(currNode)) {
      if (!visitedNodes.has(nei)) {
        stack.push(nei);
      }
    }
  }

  stack.reverse();
  console.log(stack);
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
// graphObj.add(2, 0);
graphObj.add(2, 3);
// graphObj.add(3, 3);

// dfsIterativePreOrder(graphObj.graph, 0);
dfsIterativePostOrder(graphObj.graph, 0);

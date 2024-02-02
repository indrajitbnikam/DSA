const bfsRecursive = (graph, queue, visitedSet = new Set()) => {
  if (!queue.length) {
    return;
  }
  const currNode = queue.shift();
  visitedSet.add(currNode);
  console.log(currNode);

  for (let nextNode of graph.get(currNode)) {
    if (!visitedSet.has(nextNode)) {
      visitedSet.add(nextNode); // This step is important as we might end up adding duplicate nodes at this step in the for loop
      queue.push(nextNode);
    }
  }

  bfsRecursive(graph, queue, visitedSet);
}

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
graphObj.add(0, 2);
graphObj.add(0, 1);
graphObj.add(1, 2);
graphObj.add(2, 0);
graphObj.add(2, 3);
graphObj.add(3, 3);

bfsRecursive(graphObj.graph, [0]);
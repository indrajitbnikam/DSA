const BellmanFord = (edges, source) => {
  const numOfEdges = edges.length;

  let currentMinDisatanceMap = new Map();

  // add starting distance for all the nodes
  edges.forEach(([sourceNode, destNode]) => {
    if (!currentMinDisatanceMap.has(sourceNode)) {
      currentMinDisatanceMap.set(sourceNode, Infinity);
    }

    if (!currentMinDisatanceMap.has(destNode)) {
      currentMinDisatanceMap.set(destNode, Infinity);
    }
  })

  // set sourceNode distance to 0
  currentMinDisatanceMap.set(source, 0);

  // relax all edges (numOfEdges - 1) times
  for (let i=0; i<numOfEdges-1; i++) {
    currentMinDisatanceMap = relaxEdges(currentMinDisatanceMap, edges)
  }

  // run relaxation one more time to find -ve cycle
  const newDistanceMap = relaxEdges(currentMinDisatanceMap, edges);
  for (let key of newDistanceMap.keys()) {
    if (newDistanceMap.get(key) !== currentMinDisatanceMap.get(key)) {
      console.error('Cycle detected');
    }
  }

  return currentMinDisatanceMap;
}

const relaxEdges = (currentMinDisatanceMap, edges) => {
  // copy prevDistanceMap
  const newRelaxationMap = new Map(currentMinDisatanceMap);

  edges.forEach(([sourceNode, destNode, distance]) => {
    const newDistanceBetweenEdge = currentMinDisatanceMap.get(sourceNode) + distance;

    if (newDistanceBetweenEdge < currentMinDisatanceMap.get(destNode)) {
      newRelaxationMap.set(destNode, newDistanceBetweenEdge);
    }
  })

  return newRelaxationMap;
}

// graph with -ve edge but no cycle
const edges = [['a', 'b', 10], ['a', 'c', 5], ['b', 'c', -8]];
// graph with -ve cycle
const edgesWithCycle = [['a', 'b', 10], ['b', 'c', 20], ['c', 'b', -30]];

console.log(BellmanFord(edges, 'a'));

// Kahn's algorithm (in-degree wala)
// helps with finding number of semesters taken to complete all courses
var minimumSemesters = function(n, relations) {
  const inDegree = Array(n + 1).fill(0);
  const graph = new Map();

  for (let i = 1; i < n + 1; i++) {
      graph.set(i, []);
  }

  relations.forEach(relation => {
      const [prerequisite, dependent] = relation;
      graph.get(prerequisite).push(dependent);
      inDegree[dependent]++;
  })

  let semester = 0;
  let coursesLearned = 0;
  let queue = [];

  for (let i = 1; i < n + 1; i++) {
      if (!inDegree[i]) {
          queue.push(i);
      }
  }

  while (queue.length) {
      semester++;
      const nextQueue = [];
      for (let course of queue) {
          coursesLearned++;
          for (let dependentCourse of graph.get(course)) {
              inDegree[dependentCourse]--;
              if (inDegree[dependentCourse] === 0) {
                  nextQueue.push(dependentCourse);
              }
          }
      }

      queue = nextQueue;
  }

  return coursesLearned === n ? semester : -1;
};
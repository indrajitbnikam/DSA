const fibonachi = (num, map = {}) => {
  if (num <= 1) {
    return 1;
  }
  if (num in map) {
    return map[num];
  }

  map[num] = fibonachi(num - 1, map) + fibonachi(num - 2, map);
  return map[num];
}

const t1 = performance.now();
console.log(fibonachi(5));
const t2 = performance.now();
console.log(`Took ${t2 - t1} ms`);
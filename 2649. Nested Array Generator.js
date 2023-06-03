/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    const inorderArray = [];
    const solve = (arr) => {
      for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])) solve(arr[i]);
        else inorderArray.push(arr[i]);
      }
    }
    solve(arr);
    for(let i=0;i<inorderArray.length;i++){
      yield inorderArray[i];
    }
};
/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */

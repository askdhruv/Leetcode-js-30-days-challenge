/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
      const results = []; // Array to store the results of the executed functions

        async function evaluateNext() {
            if (functions.length === 0) return;
            const fn = functions.shift();
            const result = await fn();
            results.push(result);
            await evaluateNext();
        }

        const nPromises = Array(n).fill().map(evaluateNext);
        await Promise.all(nPromises);

        return [results, results[results.length - 1]];
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

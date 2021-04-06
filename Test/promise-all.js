const a = () => new Promise(resolve => setTimeout(() => resolve("A"), 60));

const b = () => new Promise(resolve => setTimeout(() => resolve("B"), 50));
        
const c = () => new Promise(resolve => setTimeout(() => resolve("C"), 4000));

Promise.all([a(), b(), c(), {a: 1}])
    .then(console.log)
    .catch(console.log);

var name = "John";

 (function() {
     console.assert(typeof name === 'undefined'); // 1

     var name = "Jane";

     console.assert(name === 'Jane');// 2
 })()

console.assert(name === 'John'); // 3
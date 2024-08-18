// Immediately Invoked Function Expressions (IIFE)

(function chai() { // this is named IIFE
   console.log(`DB CONNECTED`);
})();// ; is needed to stop IIFE
/* its a function which executes immediately as soon as it is defined
it also helps prevent polluting the global scope by creating private 
scope for variables
*/

((name) => {
   console.log(`DB CONNECTED TWO ${name}`);
})("salik");

/* chai aur code video 25
1.every program has a global EC(execution contest) at the start
Function execution context
Eval execution context(in case of database)
2.Then comes the memory phase(all memory allocations are done here)
3.Execution phase(values are assigned and function are executed)
A new virtual environment and execution thread is created for every
function and after its usage its deleted also
Everything is added and removed from a call stack depending upon its
execution state
*/
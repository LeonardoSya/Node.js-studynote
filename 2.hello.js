console.log('hello Node.js!');
// setTimeout(() => {
//     console.log(global)  // Node.js中的顶级对象是 global
// }, 1000);

// node.js中不能使用bom和dom的api，但是可以使用console和定时器api
console.log(globalThis)  // 和 global指向的是同一个对象


// 进程是程序的一次执行过程  一个进程包含至少一个线程
// 线程是一个进程中hi这些的一个执行流  一个线程是属于某个进程的
// // Buffer 缓冲区 是一个类似Array的对象 用于表示固定长度的字节序列 
// // 换句话说 buffer就是一段固定长度的内存空间 用于处理二进制数据

// // 特点: buffer大小固定且无法调整 它的性能较好 可以直接对计算机内存进行操作 每个元素大小为1字节(byte)

// // 三种buffer的创建

// // 1. 用alloc创建的buffer 每一个二进制位都会归零
// const buf = Buffer.alloc(10)  // 创建一个10字节的buffer    <Buffer 00 00 00 00 00 00 00 00 00 00>  

// // 2. 用allocUnsafe创建的buffer 可能包含旧的内存数据 但创建的速度会较快 因为不需要做归零的操作
// const buf_2 = Buffer.allocUnsafe(10)   // 输出结果和alloc一样  但是allocUnsafe创建的buffer可能会包含旧的内存数据

// // 3. 用from把 字符串或数组 转为buffer 
// const buf_3 = Buffer.from('hello')   // <Buffer 68 65 6c 6c 6f>
// const buf_4 = Buffer.from([1, 2, 3, 4, 6])   // <Buffer 01 02 03 04 06>

// // 操作Buffer
// // buffer与字符串的转化
// // console.log(buf_3.toString())  // toString 默认是按照 utf-8 编码方式进行转换的。

// // buffer的读写
// // Buffer 可以直接通过 [] 的方式对数据进行处理。
// console.log(buf_3[1])  // 101
// buf_3[1] = 97
// console.log(buf_3.toString())  // hallo
// 注意： 1. 如果修改的数值超过 255 ，则超过 8 位数据会被舍弃   2. 一个 utf - 8 的字符 一般 占 3 个字节
// 溢出
const buff = Buffer.from('你好')  // 在utf-8中 一个汉字占3个字节
console.log(buff)  // <Buffer e4 bd a0 e5 a5 bd>








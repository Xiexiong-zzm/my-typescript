// 定义一个数字枚举 数字递增 反向映射

enum Direction {
    // Up,
    Up = 6,
    Down,
    Left,
    Right
}
// 枚举成员会被赋值为从 0 开始递增的数字
console.log(Direction.Up)        // 0
console.log(Direction.Down)      // 1
console.log(Direction.Left)      // 2
console.log(Direction.Right)     // 3

// 枚举会对枚举值到枚举名进行反向映射
console.log(Direction[0])      // Up
console.log(Direction[1])      // Down
console.log(Direction[2])      // Left
console.log(Direction[3])      // Right

// 如果枚举第一个元素赋有初始值，就会从初始值开始递增
console.log(Direction.Up)        // 6
console.log(Direction.Down)      // 7
console.log(Direction.Left)      // 8
console.log(Direction.Right)     // 9


// 枚举的意义在于，可以定义一些带名字的常量集合，清晰地表达意图和语义，更容易地理解代码和调试
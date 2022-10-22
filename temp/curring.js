function currying(Func) {
    if(typeof Func !== 'function') return false;

    return function curryied(...args) {
        if(args.length>=Func.length) {
            return Func.apply(this,args)
        }
        return function(...args2) {
            console.log(args2);
            return curryied.apply(this,args.concat(args2))
        }
    }
}

function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = currying(sum);
  
  console.log(curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
  console.log( curriedSum(1)(2,3) ); // 6，对第一个参数的柯里化
  console.log( curriedSum(1)(2)(3) ); // 6，全柯里化
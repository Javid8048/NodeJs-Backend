let compose = function(functions) {
    let num;
    return function(x) {
        let func = functions;
        console.log(func[0])
        num += x;
        let ind = -1;
        let newFunc = func.at(ind++);
        console.log(newFunc)
    }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4))
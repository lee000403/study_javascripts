// 표준 function
function calculateSumFirst(first, second) {
    return first + second
}
let third = calculateSumFirst(4, 6);

let calcullateSubSecond = (first, second) => {
    return first - second;
};
// calcullateSubSecond(2,1)
// 1

// calback function
function calculateForth(functionName, param1, param2) {
    let result = functionName(param1, param2);
    result += 10;
    return result;
}

var _this = this;
function add(n1, n2) {
    console.log(typeof n1);
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
Array.prototype.test = function () {
    console.log(_this);
};
[1, 2].test();

var Parent = /** @class */ (function () {
    function Parent(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Parent.prototype.print = function () {
        console.log("\uC774\uB984\uC740 ".concat(this._name, "\uC774\uACE0, \uB098\uC774\uB294 ").concat(this._age, "\uC785\uB2C8\uB2E4."));
    };
    return Parent;
}());
var p = new Parent('Kim', 10);
p.print();

var SingletonTS = /** @class */ (function () {
    function SingletonTS() {
        this.random = Math.random();
    }
    SingletonTS.getInstance = function () {
        if (!this.instance) {
            this.instance = new SingletonTS();
        }
        return this.instance;
    };
    return SingletonTS;
}());
var singleton = SingletonTS.getInstance();
var singleton1 = SingletonTS.getInstance();
console.log(singleton.random);
console.log(singleton1.random);

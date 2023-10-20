var LoginContext = /** @class */ (function () {
    function LoginContext(strategy) {
        this.setStrategy(strategy);
    }
    LoginContext.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    LoginContext.prototype.login = function (user, password) {
        return this.strategy.login(user, password);
    };
    return LoginContext;
}());
var LoginDBStrategy = /** @class */ (function () {
    function LoginDBStrategy() {
    }
    LoginDBStrategy.prototype.login = function (user, password) {
        if (user === "admin" && password === "12345") {
            console.log("successful connection DB");
            return true;
        }
        return false;
    };
    return LoginDBStrategy;
}());
var LoginGoogleStrategy = /** @class */ (function () {
    function LoginGoogleStrategy() {
    }
    LoginGoogleStrategy.prototype.login = function (user, password) {
        if (user === "admin" && password === "12346") {
            console.log("successful connection Google");
            return true;
        }
        return false;
    };
    return LoginGoogleStrategy;
}());
var access = new LoginContext(new LoginDBStrategy());
access.login("admin", "12345");
access.setStrategy(new LoginGoogleStrategy());
access.login("admin", "12346");

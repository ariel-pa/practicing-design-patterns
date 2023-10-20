interface Strategy {
    login(user: string, password: string): boolean;

}

class LoginContext{
    private strategy: Strategy;

    constructor(strategy: Strategy){
        this.setStrategy(strategy);
    }

    setStrategy(strategy: Strategy){
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean{
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy{
    login(user: string, password: string): boolean {
        if(user === "admin" && password==="12345"){
            console.log("successful connection DB");
            return true;
        }
        return false;
    }
}

class LoginGoogleStrategy implements Strategy{
    login(user: string, password: string): boolean {
        if(user === "admin" && password==="12346"){
            console.log("successful connection Google");
            return true;
        }
        return false;
    }
}


const access = new LoginContext(new LoginDBStrategy());
access.login("admin", "12345");

access.setStrategy(new LoginGoogleStrategy());
access.login("admin", "12346");


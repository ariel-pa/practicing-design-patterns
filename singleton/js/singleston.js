class Singleston {
    constructor() {
        if (Singleston.instance) {
            return Singleston.instance;
        }
        Singleston.instance = this;
    }
}

const singleton = new Singleston();
const singleton1 = new Singleston();
//condicion es true
console.log(singleton === singleton1);
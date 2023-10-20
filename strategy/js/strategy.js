class SaleContext {
    constructor(stratrgy) {
        this.stratrgy = stratrgy;
    }

    //Seteamos la estrategy
    setSatrategy(stratrgy){
        this.stratrgy = stratrgy;
    }

    calculate(amount) {
        return this.stratrgy.calculate(amount);
    }
}

class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax;
    }

    calculate(amount) {
        return amount + (amount * this.tax);
    }
}

class DiscountSaleStrategy {
    constructor(tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount) {
        return amount + (amount * this.tax) - this.discount;
    }
}

class ForeignSaleStrategy{
    getDollarPrice(){
        return 20;
    }
    calculate(amount){
        return amount * this.getDollarPrice();
    }
}
const RegularSale = new RegularSaleStrategy(0.16);
const discountSale = new DiscountSaleStrategy(0.16, 3)
const foreignSale = new ForeignSaleStrategy();

const sale = new SaleContext(RegularSale);
console.log(sale.calculate(10));

sale.setSatrategy(discountSale)
console.log(sale.calculate(10));

sale.setSatrategy(foreignSale)
console.log(sale.calculate(10));
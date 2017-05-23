var coffeeShop = {
  beans: 40,
  money: 100,
  drinkRequirements: {
    latte: {beansCost: 10, price: 20}, 
    americano: {beansCost: 5, price: 10},
    doubleShot: {beansCost: 15, price: 30},
    frenchPress: {beansCost: 12, price: 24}
  },
  buySupplies: function(amount){
    this.beans += amount;
    this.money -= amount;
  },
  makeDrink: function(drinkType) {
    if(!(drinkType in coffeeShop.drinkRequirements)) {
      alert("Sorry, we don't make " + drinkType);
      return false;
    }
    else if(this.beans-this.drinkRequirements[drinkType].beansCost<0)  {
      alert('sry no beans');
      return false;
    }
    else  {
      this.beans -= this.drinkRequirements[drinkType].beansCost;
      alert(this.beans);
      return true;
    }
  },
  buyDrink: function(drinkType) {
    if(this.makeDrink(drinkType))  {
      this.money+= this.drinkRequirements[drinkType].price;
    }
  }
}
coffeeShop.buySupplies(10);
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");
var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if(drinkType in coffeeShop.drinkRequirements) {
      if(this.beans-this.drinkRequirements[drinkType]<0)  {
        alert('sry no beans');
      }
      else  {
        this.beans -= this.drinkRequirements[drinkType];
        alert(this.beans);
      }
      
    }
    else  {
      alert("Sorry, we don't make " + drinkType);
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
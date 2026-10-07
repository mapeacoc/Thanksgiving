const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
        },
    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost : 25.0,
    senior_discount: .10,
    prettyPrint : function(){
        let greeting = "Happy Thanksgiving"
        let exeGreeting = document.querySelector('.greeting');
        exeGreeting.textContent = greeting;
        // Collate the menu here
       // display the content of the starter, the entree and the dessert
       let menuStr = `Start this years festivities with fresh ${thanksgivingMeal.starter.fruit} and a glass of 
       ${thanksgivingMeal.starter.wine}. Enjoy a nice entree of ${thanksgivingMeal.entree.meat} or ${thanksgivingMeal.entree.alt} 
       along with ${thanksgivingMeal.entree.vegetables.potatoes}, ${thanksgivingMeal.entree.vegetables.greens}, and ${thanksgivingMeal.entree.vegetables.salad}. 
       Sides include ${thanksgivingMeal.entree.sides.bread} and ${thanksgivingMeal.entree.sides.pasta}. 
       Finally dessert includes ${thanksgivingMeal.dessert.ice_cream} and ${thanksgivingMeal.dessert.cake}.`;
       let menu = document.querySelector('.fullMeal');
       menu.textContent = menuStr;
    },
    totalPrice(isSenior) {
        // display the total price, given indicator isSenior - true or false
        if (isSenior == true){
            let discountTotal = (this.total_cost * this.senior_discount);
            console.log(discountTotal)
            let finalPrice = (this.total_cost - discountTotal);
            console.log(finalPrice)
            let priceStr = `Seniors get a 10% discount, the total cost of your Thanksgiving meal. Seniors: ${finalPrice}.`;
            let price = document.querySelector('.priceInfo')
            price.textContent = priceStr
        }
        else{
            let priceStr = `Adults pay full price of your Thanksgiving meal. Adults: ${thanksgivingMeal.total_cost}`
            let price = document.querySelector('.priceInfo')
            price.textContent = priceStr
        }

    },
    totalCalories : function() {
        // Add the total calories
        let FullCalories = (this.starter.calories + this.entree.calories + this.dessert.calories)
        return ("The total calories for the meal is "+FullCalories)    },
    caloriesFrom: function(mealPiece) {
    switch (mealPiece) {
        case 1:
            return this.starter.calories;
        case 2:
            return this.entree.calories;
        case 3:
            return this.dessert.calories;
    }
}


    }
thanksgivingMeal.prettyPrint();
thanksgivingMeal.totalPrice(true);

let totcalories = thanksgivingMeal.totalCalories();


let calories = document.querySelector('.calorieInfo');
    
calories.textContent = totcalories;

        // get the total calories for the indicator
  
       // 1 - starter, 2 - entree, 3 - dessert
     


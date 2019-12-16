// business logic
function pizzaOptions(sizes,crusts,toppings){
    this.size = sizes;
    this.crust = crusts;
    this.topping =toppings
};
function pizzaSizes(small,medium,large){
    this.small=small;
    this.medium=medium;
    this.large=large;
};
function pizzaCrusts(crispy,stuffed,gluttenfree){
    this.crispy=crispy;
    this.stuffed=stuffed;
    this.gluttenfree=gluttenfree;
};
function pizzaToppings(pineapple,pepperoni,mushrooms,onion,sausages){
    this.pineapple=pineapple;
    this.pepperoni=pepperoni;
    this.mushrooms=mushrooms;
    this.onion=onion;
    this.sausages=sausages;
};
// user interface
$(document).ready(function(){
    $(".blanks form").submit(function(event){

        event.preventDefault();
    });
});
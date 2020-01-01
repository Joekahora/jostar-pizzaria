// business logic
// function pizzaOptions(sizes,crusts,toppings){
//     this.sizes = sizes;
//     this.crusts = crusts;
//     this.topping =toppings;
// };
function pizzaSizes(size,prize){
    this.size=size;
    this.prize=prize;
};
var small = new pizzaSizes("Small", 400);
var medium = new pizzaSizes("Medium", 800);
var large = new pizzaSizes("Large",1000);

function pizzaCrusts(crust,prize){
    this.crust=crust;
    this.prize=prize;
};

var crispy = new pizzaCrusts("Crispy", 100);
var stuffed = new pizzaCrusts("Stuffed", 150);
var gluttenFree = new pizzaCrusts("Glutten-Free", 200);

function pizzaToppings(topping,prize){
    this.topping=topping;
    this.prize=prize;
};
var pineapple = new pizzaToppings("Pineapple", 50);
var pepperoni = new pizzaToppings("Pepperoni", 60);
var mushroom = new pizzaToppings("Mushroom", 50);
var onion = new pizzaToppings("Onions", 30);
var saugage = new pizzaToppings("Sausage",60);

// user interface
$(document).ready(function(){
    $(".blanks form").submit(function(event){
        var pizzaSize = parseInt($(".sizes option:selected").val());
        var pizzaCrust = parseInt($(".crust option:selected").val());
        var pizzaTopping = parseInt($(".toppings option:selected").val());
        var noOfPizza = parseInt($("#nooforder").val());
        var pizzaTotal = noOfPizza * (pizzaSize + pizzaCrust + pizzaTopping) 
        if (pizzaSize === 0 || pizzaCrust === 0 || pizzaTopping === 0){
            alert("Please select a pizza Size ")
        }else{
            alert("So You Have choosen " + $(".sizes option:selected").text() + "\n" +"with the crust " + $(".crust option:selected").text()
               + "\n" + "and topping of " + $(".toppings option:selected").text() + "\n" + "Here is your Total " + pizzaTotal);
        }
        var pizzaDelivery = ($(".delivery option:selected").val());
        if(pizzaDelivery === "yes"){
            var deliveryAddress = prompt("Please input your Delivery address: ")
            alert("The Pizza Shall be delivered to: " + deliveryAddress)
        }else{
            alert("There is no delivery charge");
        }  
        event.preventDefault();
    });
});
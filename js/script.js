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
        var pizzaSizeInput = $(".sizes").val();
        // if (pizzaSizes === "Small"){
        //     alert("You Choose " + small.size + " pizza Size" + " that costs " + small.prize);
        // };
        // if(pizzaSizes === $("input#medium")){
        //     alert("You Choose " + medium.size + " pizza Size" + " that costs " + medium.prize);
        // };
        // if(pizzaSizes === $("input#large")){
        //     alert("You Choose " + large.size + " pizza Size" + " that costs " + large.prize);
        // };
        // $("input#small").val(alert("You Choose " + small.size + " pizza Size"+ " that costs " + small.prize));
        // $("input#medium").val(alert("You Choose " + medium.size + " pizza Size" + " that costs " + medium.prize));
        // $("input#large").val(alert("You Choose " + large.size + " pizza Size" + " that costs " + large.prize));  
        if (pizzaSizeInput === $("input#small").val()){
            alert("You Choose " + small.size + " pizza Size" + " that costs " + small.prize);
            return;
        };
        if (pizzaSizeInput === $("input#medium").val()){
            alert("You Choose " + medium.size + " pizza Size" + " that costs " + medium.prize);
            return;
        };
        if (pizzaSizeInput === $("input#large").val()){
            alert("You Choose " + large.size + " pizza Size" + " that costs " + large.prize);
            return;
        }    
        event.preventDefault();
    });
});
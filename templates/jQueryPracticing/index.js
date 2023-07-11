$("h1").css("color","blue")
$("button.green").css("background-color" , "green")
$("button#mavi").css("color" , "blue")
$("#container button.brown").css("background-color", "brown")

console.log($("#container button.brown").css("width"));

const makeButtonBigger = () => {
    $("#container button.brown").addClass("bigButton space");
    setTimeout( function(){ 
        $("#container button.brown").removeClass("bigButton");
      }  , 3000 );
}

function makeBigTitle(){
    if(!($("h1").hasClass("bigTitle"))){
        $("h1").addClass("bigTitle")
    }else{
        $("h1").removeClass("bigTitle")
    }
}

function changeTheHeading(){
    // $("h1#heading").text("merhabalarrr")
    $("h1#heading").html("<h1><em>merhabalarrr</em></h1>")
}

const classOfButton = $("#container button.brown").attr("class");

function getClassOfButton() {
    $("p#paragraph").html(classOfButton)
}

function toggleImg() {
    if($("img").attr("src")!=="https://docsd.toyzzshop.com/product/600x600/1f5fc_Cars_Ilk_Arabam_.jpg"){
        $("img").attr("src" , "https://docsd.toyzzshop.com/product/600x600/1f5fc_Cars_Ilk_Arabam_.jpg")
    }else{
        $("img").attr("src" , "https://arabam-blog.mncdn.com/wp-content/uploads/2020/10/peugeot-208-1.jpg")
    }
}

// how to add event listener in jQuery.
$("h1").click(function(){
    $("h1").css("color","white");
})

// how to add event listener to multiple html element
// in vanillaJS we must write for loop to access all elements one by one.
// but in jQuery $("h1") already access all the h1 tags. 


// console.log($("#button-container div#result").css("background-color"));

$("#button-container button").click(function () {
    if($("#button-container div#result").css("background-color")=="rgb(0, 128, 0)"){
        $("#button-container div#result").css("background-color","blue")
    }else{
        $("#button-container div#result").css("background-color","green")
    }
})

$("body").keypress(function(event) {
    $("h2").text(event.key)
})

$("body").keypress(function(event) {
    if(event.key == "Enter"){
        alert("Enter key is pressed")
    }
})

$("h2").on("mouseover", function() {
    $("h2").css("color","purple")
})
$("h2").on("mouseout", function() {
    $("h2").css("color","black")
})

// how to add html elements using jQuery
// for that there are 4 methods:
// before() => içine aldığı parametreden(html elementi) önce oluşturur
// after()  => içine aldığı parametreden(html elementi) önce oluşturur
// prepend() => içine aldığı parametrenin(html elementi) içine oluşturur (ör: div) ama içindeki contend'den daha önce oluşturur
// append() => içine aldığı parametrenin(html elementi) içine oluşturur (ör: div) ama içindeki contend'den daha sonra oluşturur

$("div#create-element").before("<p id='before'>this element is created before the div</p>");
$("div#create-element").after("<p>this element is created after the div</p>");
$("div#create-element").prepend("<p class='prepend'>this element is created in the div but before the content of the div</p>");
$("div#create-element").append("<p>this element is created in the div but after the content of the div</p>")

// kelime anlamları:
// prepend: başa eklemek
// append: katmak, sona eklemek

// how to remove html elements:

$("#remove-prepend-button").on("click", function () {
    $("div#create-element p.prepend").remove();
})

// hide(), show(), toggle()
$("#hide-show-button").on("click", function(){
    $("#car-image").toggle();
})

// jQuery animation
// fadein and fadeout:

$("#fade-button").on("click", function(){
    // $("#car-image").fadeOut();
    // $("#car-image").fadeIn();
    $("#car-image").fadeToggle();
}) 

$("#slide-button").on("click", function(){
    $("#car-image").slideToggle();
}) 

// animate() methodu : 
// içine curl braces içinde yeni css stillerini yazarız. sadece sayısal css stilleri yazılabilir.

$("#animate-button").click(function() {
    console.log(typeof($("#car-image").css("opacity")));
    console.log(($("#car-image").css("margin"))) //0 px
    if($("#car-image").css("opacity")==1){
        $("#car-image").animate({opacity: 0.5, margin:100})
    }else{
        $("#car-image").animate({opacity: 1, margin:0});
    }
})





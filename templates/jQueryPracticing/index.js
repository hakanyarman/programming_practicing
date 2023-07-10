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
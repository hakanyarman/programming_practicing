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


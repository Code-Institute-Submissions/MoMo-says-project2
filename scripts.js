$("document").ready(function() {

    $("#elephant").click(function(){ // When I click on <p> run this code });
        $("#elephant").css("border", "solid 7px red").css("opacity", "0.6");
    });    
    $("#pig").click(function(){
        $("#pig").css("border", "solid 7px green").css("opacity", "0.6");
    });
    $("#rattlesnake").click(function(){
        $("#rattlesnake").fadeOut(1000).fadeIn(1000);
    });
    $("#sealion").click(function(){
        $("#sealion").fadeTo(500, 0.5).fadeTo(500, 1);
    });

});
// $(document).ready(function(){
//   $("button").click(function(){
//     $("#div1").fadeTo("slow", 0.15);
//     $("#div2").fadeTo("slow", 0.4);
//     $("#div3").fadeTo("slow", 0.7);
//   });
// });



console.log("Hello");

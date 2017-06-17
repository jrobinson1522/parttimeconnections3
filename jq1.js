
$(document).ready(function(){
      $('#details').click(function(){
       $('#slidedown').slideToggle("slow");
   });
    $('#details1').click(function(){
       $('#slidedown1').slideToggle("slow");
   });
    $('#details2').click(function(){
       $('#slidedown2').slideToggle("slow");
   });
    $('#details3').click(function(){
       $('#slidedown3').slideToggle("slow");
   });
    $('#details4').click(function(){
       $('#slidedown4').slideToggle("slow");
   });
    
    $("#hide").click(function(){
        $("#div1").hide("slow");
    });
    $("#show").click(function(){
        $("#div1").show("slow");
        $("#div1").text("Show!");
    });
    
     $("#buttona").click(function(){
        $("#div2").animate({
            height: '+=150px',
            width: '+=150px',
            fontSize: '+=32px',
               });
         $("#div2 p").animate({
            height: '+=150px',
            width: '+=150px',
            fontSize: '+=32px',
               }); 
          $("#bigger").text("Bigger...");
    });
      $("#buttonb").click(function(){
        $("#div2").animate({
            height: '-=150px',
            width: '-=150px',
            fontSize: '-=32px',
          });
          $("#div2 p").animate({
            height: '-=150px',
            width: '-=150px',
            fontSize: '-=32px',
          });
          $("#bigger").text("Smaller...");
    });

});



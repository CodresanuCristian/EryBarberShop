$(document).ready(function(){
    
    $("#moreaboutbtn").click(function(){
        if ($("#moreaboutbtn").html() === "MORE ABOUT US"){
            $("#moreaboutbtn").html("LESS ABOUT US");
            $("#imgabout").fadeOut("slow");
            $("#h3about").fadeOut("slow");
            $("#pabout").fadeOut("slow", function(){
                $("#pabout").fadeIn("slow");
                $("#pabout").css("text-align", "left");
                $("#pabout").html("Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boy's hair. A barber's place of work is known as a 'barbershop' or a 'barbers'. Barbershops are alse places of social interaction and public discourse. in some instances, barbershops are also public forums.Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boy's hair. A barber's place of work is known as a 'barbershop' or a 'barbers'. Barbershops are alse places of social interaction and public discourse. in some instances, barbershops are also public forums.Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boy's hair. A barber's place of work is known as a 'barbershop' or a 'barbers'. Barbershops are alse places of social interaction and public discourse. in some instances, barbershops are also public forums.Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boy's hair. ");
            });
            $("#h1about").fadeOut("slow", function(){
                $("#h1about").css("text-align","left");
                $("#barberpole").attr('src', 'Icon/barberpole.png');
                $("#h1about").fadeIn('slow');
                $("#h1about").html("ABOUT <br/><br/>"); 
                $("#barberpole").fadeIn("slow");
            });
        
        }else{    
            $("#moreaboutbtn").html("MORE ABOUT US");
            $("#barberpole").fadeOut("slow");
            $("#pabout").fadeOut("slow", function(){
                $("#imgabout").fadeIn("slow");
                $("#h3about").fadeIn("slow");
                $("#pabout").fadeIn("slow");
                $("#pabout").html("Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boy's hair. A barber's place of work is known as a 'barbershop' or a 'barbers'. Barbershops are alse places of social interaction and public discourse. in some instances, barbershops are also public forums.");
            });
            $("#h1about").fadeOut("slow", function(){
                $("#h1about").css("text-align", "center");
                $("#pabout").css("text-align", "center");
                $("#h1about").fadeIn('slow');
                $("#h1about").html("ERY Barber Shop<br/>Since 2020");
            });
        }
        
        
    })
    
})
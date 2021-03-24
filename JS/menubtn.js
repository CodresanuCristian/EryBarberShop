/*$(document).ready(function(){
    
    $("#menubtn").click(function(){
        var icon = ($(this).attr('src') === 'Icon/menu.png')
            ? 'Icon/close.png'
            : 'Icon/menu.png';
         $(this).attr('src', icon);
    })
      
})


.minimenu{
        display: block;
    }
    $(this).attr('src')
    */


$(document).ready(function(){
    $("#menubtn").click(function(){
        if ($(this).attr('src') === 'Icon/menu.png'){
            $(this).attr('src', 'Icon/close.png')
            $("#minimenu ul").click(function(){
                $("#menubtn").attr('src', 'Icon/menu.png')
                $("#minimenu ul").fadeOut();   
            })
        }
        else{
            $(this).attr('src', 'Icon/menu.png')
        }  
        
        $("#minimenu ul").slideToggle("slow");
    })
})
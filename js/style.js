//==================== nav menu ====================

$("header nav .open-menu").click(function (){
    $(this).animate({
        left : "260"
    } ,500);
    $("header nav .links").animate({
        width : "250"
    } ,500);
    $("header .caption").animate({
        left : "18%"
    } ,500);
});



$("header nav .links .closebtn").click(function (){
    $("header nav .open-menu").animate({
        left : "10"
    } ,500);
    $("header nav .links").animate({
        width : "0"
    } ,500);
    $("header .caption").animate({
        left : "0"
    } ,500);
});






//====================== nav links =======================

$(".links ul li").click(function (){
    
    var offsetTop = $($(this).attr("data-class")).offset().top;

   $("html , body").animate({
       scrollTop : offsetTop
   } , 1000);
    
});






//================== details section =====================

(function (){
    $(".details .details-item .details-text").not(":first").css("display" , "none");
})();


$(".details .details-item .details-header").click(function (){
    $(".details-text").not($(this).next(".details-text")).slideUp(500);
    $(this).next(".details-text").slideToggle(500);
});





//=================== duration section ====================


function counter() {
    
        var now = new Date(),
            date = new Date(2018, 12, 18),
            nowTime = now.getTime(),
            eventTime = date.getTime(),
            time = eventTime - nowTime,

             sec   = Math.floor(time / 1000),
             min   = Math.floor(sec / 60),
             hours = Math.floor(min / 60),
             days  = Math.floor(hours / 24)-30;
    
        
        sec   = sec % 60;
        min   = min % 60;
        hours = hours % 24;


        if(hours < 10)
            {
                hours = "0" + hours;
            }
        else
            {
                hours = hours;
            }


        if(min < 10)
            {
                min = "0" + min;
            }
        else
            {
                min = min;
            }


         if(sec < 10)
            {
                sec = "0" + sec;
            }
        else
            {
                sec = sec;
            }



        $(".duration .item h3 .day").text(days);
        $(".duration .item h3 .hour").text(hours);
        $(".duration .item h3 .min").text(min);
        $(".duration .item h3 .sec").text(sec);


        setTimeout(counter, 1000);

    }

    counter();






//==================== contact section =====================


var msgCounter = $(".contact-form .message-length").text();

$(".contact-form textarea").keyup(function (){
    
    var msgLength = $(this).val().length,
    msgCounterDown = msgCounter - msgLength ;
    
    if(msgCounterDown > 0)
        {
            $(".contact-form .message-length").text(msgCounterDown);
        }
    else
        {
            $(".contact-form .message-length").text("your available character finished ");
        }
    
})









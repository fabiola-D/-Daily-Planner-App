$(document).ready(function(){

     // listen for save button clicks

     $(".saveBtn").on("click", function(){
         console.log(`It saved`); 

         let timeID = $(this).parent().attr("id")
         let value = $(this).siblings(".description").val();

         console.log(timeID);
         console.log(value);

         localStorage.setItem(timeID, value);

         $(".notification").addClass(`show`);


         setTimeout(function(){
             $(".notification").removeClass("show")

         }, 5000)

     })


     function hourUpdate(){
        let currentHour = moment().hour();
        
       // $(".time-block").each(function(){
       //  let blockHour = parseInt($(this).attr("id").split("-")[1]);
       //     alert(blockHour);
       // })
    
       for(let i = 0 ; i< $(".time-block").length; i++){
            let hour = parseInt($(".time-block")[i].getAttribute("id").split("_")[1])
            console.log(hour)
            console.log(currentHour)
            if (hour < currentHour-1){
                $(".time-block")[i].addClass("past")
            } else if(hour === currentHour){
                $(".time-block")[i].classList.add("past")
                $(".time-block")[i].classList.remove("present")
            }else {
                $(".time-block")[i].classList.add("past")
                $(".time-block")[i].classList.remove("present")
                $(".time-block")[i].classList.add("future")
            }
              

        }





     }






     hourUpdate();



     let interval = setInterval(hourUpdate,15000);

     $("hour-9 .description").val(localStorage.getItem("hour-9"))
     $("hour-10 .description").val(localStorage.getItem("hour-10"))
     $("hour-11 .description").val(localStorage.getItem("hour-11"))
     $("hour-12 .description").val(localStorage.getItem("hour-12"))
     $("hour-13  .description").val(localStorage.getItem("hour-13"))
     $("hour-14 .description").val(localStorage.getItem("hour-14"))
     $("hour-9 .description").val(localStorage.getItem("hour-9"))
     $("hour-9 .description").val(localStorage.getItem("hour-9"))
     $("hour-9 .description").val(localStorage.getItem("hour-9"))
     $("hour-9 .description").val(localStorage.getItem("hour-9"))
     $("hour-9 .description").val(localStorage.getItem("hour-9"))

     $("#currentDay").text(moment().format("dddd, MM/DD/YYYY"));






})
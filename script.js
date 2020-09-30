$(document).ready(function () {
    $("#current-day").text(moment().format("D dddd MMMM"));


$(".saveBtn").on("click", function(){
    // Pull value from the textarea of chosen save button. This will serve as the value for out setItem
    var value = $(this).val();

    // Pull the id of the clicked element to server as the id
    var time = $(this).attr("id");
 
    // This is where you will save the date to local storage
    localStorage.setItem(value, time);
});



// Function to update the color of the time display
function hourUpdater() {
    var currenttime = moment().hours()

    // pull the id from each id within the time columns
    

    $(".time-block").each(function(){
        

            // take the value from each id and setting it to the variable block. HINT parseInt
            var block = parseInt($(this).attr("id").split("hour")[1]);
                console.log( block, currentTime)

            // if statements to ask: Is the current time before the block? after the block or equal to the block

            // in each if statement will need to add a class and remove a class
            if(block < currentTime){
                $(this).addClass("past"); // add the class of past to that element
                $(this).removeClass("future");
                $(this).removeClass("present");
               
            }
            else if (block === currentTime){
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else{
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }


    }) 


}


hourUpdater();

var interval = setInterval(hourUpdater, 15000);





// here we need to access the values from localstorage and GET the times to display them on screen

$("#hour-9 .descript").val(localStorage.getItem("hour-9"));
$("#hour-10 .descript").val(localStorage.getItem("hour-10"));
$("#hour-11 .descript").val(localStorage.getItem("hour-11"));
$("#hour-12 .descript").val(localStorage.getItem("hour-12"));
$("#hour-13 .descript").val(localStorage.getItem("hour-13"));
$("#hour-14 .descript").val(localStorage.getItem("hour-14"));
$("#hour-15 .descript").val(localStorage.getItem("hour-15"));
$("#hour-16 .descript").val(localStorage.getItem("hour-16"));
$("#hour-17 .descript").val(localStorage.getItem("hour-17"));

})
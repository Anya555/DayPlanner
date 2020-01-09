
// displaying current day once the page loads using $(document).ready(function()

$(document).ready(function(){

  // using moment() method to update current date using moment.js library
  var currentDay = moment().format('dddd, MMMM Do');

  // creating an h2 alement and asigning it's value to currentDay value
  var h2 = $("<h2>");
  h2.text(currentDay);
  $("#day").append(h2);
  h2.addClass("col-12 offset-4");

});

//-------------------------------------------------------------------------------------------------------//

// an array of standard business hours (9 a.m. to 5 p.m.). 
var hour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

renderEvents();

// function that creates an input area for each hour, event from 9am to 5 pm (total hours = 9) and save buttons
function renderEvents() {


    for (var i = 0; i < 9; i++) {
        var now = hour[i];
         
        var row = $("<div>");
        row.addClass("row");

    // input area for hours
        var hourBlock = $("<div>");
        hourBlock.addClass("col-1 hour-block");
        hourBlock.text(hour[i]);

    // input area for user to write down the events
        var textBlock = $("<div>");
        textBlock.addClass("col-6 text-block");
        var textarea = $("<textarea>");
        textarea.value = event;
        textBlock.append(textarea);

    // creating save buttons    
        var saveBlock = $("<div>");
        saveBlock.addClass("col-1 save-block");
        var button = $("<button>");
        button.text("Save");
        saveBlock.append(button);
        
        row.append(hourBlock);
        row.append(textBlock);
        row.append(saveBlock);

        $("#put-calendar-here").append(row);
        row.addClass("col-12 offset-2");

        var currentHour = moment().format('h A');
        console.log(currentHour);
    
    
    if (currentHour === hour[i]){
        $("<textarea>").css("background-color","red");
    }
    
    if(currentHour < hour[i]){
        $("<textarea>").css("background-color","gray");
    }
    
    else{
        $("<textarea>").css("background-color","green");
    }
    }
}

//-------------------------------------------------------------------------------------------------//

//  each hour should be color coded to reflect whether the time slot is in the past, the present, or the future.
// This will change depending on the time of day.

// $(document).ready(function(){

// // using moment() method to check for current hour using moment.js library
//     var currentHour = moment().format('h A');
//     console.log(currentHour);


// if (currentHour === hour[i]){
//     $("<textarea>").css("background-color","red");
// }

// if(currentHour < hour[i]){
//     $("<textarea>").css("background-color","gray");
// }

// else{
//     $("<textarea>").css("background-color","green");
// }
// renderEvents();
// });

//---------------------------------------------------------------------------------------------------//



// Clicking on the save button will store the time and user input in localStorage


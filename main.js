
// displaying current day once the page loads using $(document).ready(function()

$(document).ready(function () {

    // using moment() method to update current date using moment.js library
    
    var currentDayObj = moment();
    var currentDay = currentDayObj.format('dddd, MMMM Do');

    // creating an h2 alement and asigning it's value to currentDay value
    var h2 = $("<h2>");
    h2.text(currentDay);
    $("#day").append(h2);
    h2.addClass("col-12 offset-4");

    //-------------------------------------------------------------------------------------------------//

    var storedData = {
        "9am": "",
        "10am": "",
        "11am": "",
        "12pm": "",
        "1pm": "",
        "2pm": "",
        "3pm": "",
        "4pm": "",
        "5pm": ""
    }

    // Put data OBJECT into local storage
    localStorage.setItem("storedData", JSON.stringify(storedData));

    // TODO: Grab data from localStorage and assign it to storedData variable
    


    var data = JSON.parse(localStorage.getItem("storedData"));
    console.log(data);

    // TODO: Save storedData to localStorage
    var button;

    var saveToLocalStorage = function(){
        // Pull out the JSON OBJECT from local storage
        let textData = localStorage.getItem('storedData');
        console.log(textData);

        // Parse The JSON OBJECT into a JavaScript OBJECT
        let parsedData = JSON.parse(textData);
        console.log(parsedData);

        // Add the new data to the storedData JS OBJECT
        // How do we grab the textareas value???
        // let temp = $(this).attr('data-time');
        let temp = $(this).siblings(".text-block");
        console.log(temp);

        storedData["9"] = 0;
        console.log(storedData);

        localStorage.setItem("storedData", JSON.stringify(data));
        console.log(data);
    }

    
    // console.log(storedData["9am"]);

    // an array of standard business hours (9 a.m. to 5 p.m.). 
   
    var hour = [9,10,11,12,13,14,15,16,17];

   
    // creating an input area for each hour, event from 9am to 5 pm (total hours = 9) and save buttons
  
        for (var i = 0; i < hour.length; i++) {
            var timeText = (moment().hour(hour[i]).format("ha"));

            var row = $("<div>");
            row.addClass("row");

            // input area for hours
            var hourBlock = $("<div>");
            hourBlock.addClass("col-1 hour-block");
            hourBlock.text(timeText);

            // input area for user to write down the events
            var textBlock = $("<div>");
            textBlock.addClass("col-6 text-block");
          
            // Determine color
            var bgColor = getTextBgColor(hour[i]);
            textBlock.css("backgroundColor", bgColor);
            var textarea = $("<textarea>");
            textarea.attr("data-time", timeText);
            textarea.val(storedData[timeText]);
            textBlock.append(textarea);

            // creating save buttons    
            var saveBlock = $("<div>");
            saveBlock.addClass("col-1 save-block");


            button = $('<button>');
            button.text("Save");
            button.addClass("save-btn");
            button.attr("data-time", timeText);
            button.on("click", saveToLocalStorage);   //   ????
            saveBlock.append(button);

            row.append(hourBlock);
            row.append(textBlock);
            row.append(saveBlock);

            $("#put-calendar-here").append(row);
            row.addClass("col-12 offset-2");
        }
    


    // Each timeblock is color coded to indicate whether it is in a past, present, or future hour.
    function getTextBgColor(){
        var color = "";
        // current
        if( hour[i] == moment().format("H")){
            console.log('equals');
            color = "red";
        // past
        } else if ( hour[i] < moment().format("H")) {
            // console.log('current');
            color = "lightgray";
        // future
        } else if ( hour[i] > moment().format("H")){
                color = "lightgreen";
        }
        return color;
    }
   
});


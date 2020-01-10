
// displaying current day once the page loads using $(document).ready(function()

$(document).ready(function () {

    // using moment() method to update current date using moment.js library
    var currentDayObj = moment();
    var currentDay = currentDayObj.format('dddd, MMMM Do');
    currentDayObj.set('hour', 9);

    console.log(currentDayObj);

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

    // TODO: Grab data from localStorage and assign it to storedData variable
    var getFromLocalStorage = function(){
        var data = JSON.parse(localStorage.getItem("storedData"));
    }

    // TODO: Save storedData to localStorage
   
    // save-btn.addEventListener("click", saveToLocalStorage);
    var saveToLocalStorage = function(){
        localStorage.setItem("storedData", JSON.stringify(data));
    }

    
    console.log(storedData["9am"]);

    // an array of standard business hours (9 a.m. to 5 p.m.). 
   
    var hour = [
        currentDayObj,
        currentDayObj.clone().add(1, "hour"), 
        currentDayObj.clone().add(2, "hour"),
        currentDayObj.clone().add(3, "hour"),
        currentDayObj.clone().add(4, "hour"),
        currentDayObj.clone().add(5, "hour"),
        currentDayObj.clone().add(6, "hour"),
        currentDayObj.clone().add(7, "hour"),
        currentDayObj.clone().add(8, "hour")
    ];

    // ------------------------------------------------------------------------------------------------//

    renderEvents();

    // creating an input area for each hour, event from 9am to 5 pm (total hours = 9) and save buttons
    function renderEvents() {
        for (var i = 0; i < hour.length; i++) {
            var now = hour[i];
            var timeText = hour[i].format("ha");

            console.log(hour[i])
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
            var button = $("<button>");
            button.text("Save");
            button.addClass("save-btn");
            button.attr("data-time", timeText);
            saveBlock.append(button);

            row.append(hourBlock);
            row.append(textBlock);
            row.append(saveBlock);

            $("#put-calendar-here").append(row);
            row.addClass("col-12 offset-2");

        }
    }


    // Each timeblock is color coded to indicate whether it is in a past, present, or future hour.
    function getTextBgColor(hour){
        var now = moment();
        console.log(now.format("H") + "|" + hour.format("H"));
        var color = "";
        // future
        if( hour.format("H") < now.format("H")){
            console.log('less');
            color = "green";
        // current
        } else if ( hour.format("H") === now.format("H")){
            console.log('current');
            color="red";
        // past
        } else {
            console.log('greater');
            color="gray";
        }
        return color;
    }
});


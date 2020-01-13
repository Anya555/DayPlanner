
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

    var storedData = [];

    var getFromLocalStorage = function(){
        var localStoredData = localStorage.getItem("storedData");
        console.log(localStoredData);
        if (localStoredData){
            console.log('found');
            storedData = JSON.parse(localStoredData);
        } else {
            storedData = {
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
        }
    }

    getFromLocalStorage();

   
    // TODO: Save storedData to localStorage
    var button;

    var updateData = function(e){
        e.preventDefault();
        var dataTime = $(this).attr("data-time");
        var thisData = $("textarea[data-time = " + dataTime + "]").val();
        storedData[dataTime] = thisData;
        saveToLocalStorage();
    }

    var saveToLocalStorage = function(){
        
        localStorage.setItem("storedData", JSON.stringify(storedData));
    }
    

    // an array of standard business hours (9 a.m. to 5 p.m.). 
   
    var hour = [9,10,11,12,13,14,15,16,17];

   
    // creating an input area for each hour, event from 9am to 5 pm (total hours = 9) and save buttons
  
        for (var i = 0; i < hour.length; i++) {
            var timeText = (moment().hour(hour[i]).format("ha"));

            var row = $("<div>");
            row.addClass("row");


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
            button.on("click", updateData);
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
            color = "red";
        // past
        } else if ( hour[i] < moment().format("H")) {
            color = "lightgray";
        // future
        } else if ( hour[i] > moment().format("H")){
            color = "lightgreen";
        }
        return color;
    }
   
});


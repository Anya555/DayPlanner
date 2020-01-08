
var eventsList = [];

renderEvents();

// function that creates an input area for each hour, event from 9am to 5 pm (total hours = 9) and save buttons
function renderEvents() {

    for (var i = 0; i < 9; i++) {
        var event = eventsList[i];
        
    // making a row    
        var row = $("<div>");
        row.addClass("row");

    // input area for hours
        var hourBlock = $("<div>");
        hourBlock.addClass("col-1 hour-block");
        hourBlock.text();

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
        
    }
}
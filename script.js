
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  const timeBlocks = [
  { // 9AM
    id: "hour-9",
    class: "row time-block future",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "9AM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true",
    time: "9"
  },
  { //10 AM
    id: "hour-10",
    class: "row time-block future",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "10AM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true",
    time: "10"
  },
  { //11 AM
    id: "hour-11",
    class: "row time-block future",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "11AM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: "11"
  },
  { //12 PM
    id: "hour-12",
    class: "row time-block future",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "12PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: "12"
  },
  { //13 PM
    id: "hour-13",
    class: "row time-block future",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "1PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: "13"
  },
  { //14 PM
    id: "hour-14",
    class: "row time-block future",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "2PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: "14"
  },
  { //15 PM
    id: "hour-15",
    class: "row time-block future",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "3PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: "15"
  },
  { //16 PM
    id: "hour-16",
    class: "row time-block future",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "4PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: "16"
  },
  { //17 PM
    id: "hour-17",
    class: "row time-block future",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "5PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: "17"
  }
  ]

  function addBlocks () {
    for (let i = 0; i < timeBlocks.length; i++) {
      const hour = timeBlocks[i].hour
      
      const divTag = $("<div>").attr("id",timeBlocks[i].id).addClass(timeBlocks[i].class) ;
      const divTime = $("<div>").addClass(timeBlocks[i].timeClass).text(`${hour}`);
      const textArea = $("<textarea>").addClass( timeBlocks[i].textarea );
      const button = $("<button>").addClass( timeBlocks[i].button ) ;
      const eyes = $("<i>").addClass(timeBlocks[i].eye);
      
      $("#block").append(divTag.append(divTime,textArea,button.append(eyes))) ;
      
      // console.log(timeBlocks[i]);
      function checkTime () {
        const timeOfDay = dayjs().hour() ;
        for (let x = 0; x < timeBlocks.length; x++ ) {
          // console.log(timeBlocks[x].time)
          // console.log(timeOfDay)
    
          if (timeOfDay === timeBlocks[x].time) {
            divTag.removeClass("future").addClass("present")
          }  else if ( timeOfDay > timeBlocks[x].time ) {
            divTag.removeClass("future").addClass("past")
        }}
      }
      checkTime() ;
    }
    }
  addBlocks() ;
  
  $("btn").click(saveEvent)


  function saveEvent () {
    const blockId = timeBlocks(this).id ;
    const textContent = $("<textarea>") ;
    const localStor = localStorage.setItem("id", "text")

    localStor(blockId, textContent.val(this)) 
    console.log(textContent.val(this))
    
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
function showToday () {
var today = dayjs();
// console.log(today)
$('#currentDay').text(today.format('MMMM DD, YYYY'));
}
showToday()
});

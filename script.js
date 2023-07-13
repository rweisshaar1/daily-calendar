$(function () {


  const timeBlocks = [
  { // 9AM
    id: "hour-9",
    class: "row time-block",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "9AM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true",
    time: 9
  },
  { //10 AM
    id: "hour-10",
    class: "row time-block",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "10AM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true",
    time: 10
  },
  { //11 AM
    id: "hour-11",
    class: "row time-block",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "11AM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: 11
  },
  { //12 PM
    id: "hour-12",
    class: "row time-block",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "12PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: 12
  },
  { //13 PM
    id: "hour-13",
    class: "row time-block",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "1PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: 13
  },
  { //14 PM
    id: "hour-14",
    class: "row time-block",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "2PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: 14
  },
  { //15 PM
    id: "hour-15",
    class: "row time-block",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "3PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: 15
  },
  { //16 PM
    id: "hour-16",
    class: "row time-block",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "4PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: 16
  },
  { //17 PM
    id: "hour-17",
    class: "row time-block",
    timeClass: "col-2 col-md-1 hour text-center py-3",
    hour: "5PM",
    textarea: "col-8 col-md-10 description rows = 3",
    button: "btn saveBtn col-2 col-md-1 ariaLabel = save",
    eye: "fas fa-save ariaHidden = true" ,
    time: 17
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
      const timeOfDay = dayjs().hour() ;
      const timeVar = timeBlocks[i].time
      // console.log(timeOfDay)
      // console.log(timeVar)
          
      // loops over past present and future
      if (timeOfDay == timeVar) {
        // console.log(timeOfDay)
        // console.log(divTag )
        divTag.addClass("present") ;
            
      } else if ( timeOfDay < timeVar ) {
        console.log(timeVar)
        divTag.addClass("future")
      } else if ( timeOfDay > timeVar) {
        divTag.addClass("past");
      }
    }
    }
  addBlocks() ;
  
  const memoryArr = [] || parsedMemories

  const button = $(":button")
  button.on("click",saveEvent)

  function saveEvent () {
    const text = $(this).prev().val() ;
    const timeId = $(this).parent().text();
    
    // memoryArr.push(timeId, text)
    // console.log(memoryArr)
    // setStorage();
    localStorage.setItem(timeId , text) ;
  }
  function setStorage(){
    const stringifiedMemory = JSON.stringify(memoryArr)

    getStorage()
  }

  function getStorage() {

    for (let i = 9; i < 18; i++) {
      if (i < 12) {
        $(`#hour-${i} textarea`).val(localStorage.getItem(`${i}AM`))
      } else if (i === 12 ) {
        $(`#hour-${i} textarea`).val(localStorage.getItem(`${i}PM`))
      } else {
        let j = i - 12 ;
        $(`#hour-${i} textarea`).val(localStorage.getItem(`${j}PM`))
      }
      
      
    }
  }
  getStorage();
function showToday () {
var today = dayjs();
// console.log(today)
$('#currentDay').text(today.format('MMMM DD, YYYY'));
}
showToday()
});
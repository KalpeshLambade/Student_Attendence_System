
function dispalyingStudentAttendance() {
    // var divFromHtml = document.getElementById("studentsAttendance");
    var divFromHtml = document.getElementById("displayDates");
    
    var dateFromLs = JSON.parse(localStorage.getItem("StudentList"));
  
    var dates = [];
  
    for (var k = 0; k < dateFromLs.length; k++) {
      for (var l = 0; l < dateFromLs[k].attendance.length; l++) {
  
        // console.log(dateFromLs[k].attendance[l]);
        // console.log(Object.keys(dateFromLs[k].attendance[l][0]));
  
        if( !dates.includes(`<p>${(Object.keys(dateFromLs[k].attendance[l])[0])}</p>`)){
          // dates.push(`<p>${(Object.keys(dateFromLs[k].attendance[l])[0])}</p>`);
  
          dates += `<p>${(Object.keys(dateFromLs[k].attendance[l])[0])}</p>`;
        }
        // dates.push((Object.keys(dateFromLs[k].attendance[l])[0]));
    
      }
    }
  
    console.log(dates, "dates here");
  
    divFromHtml.innerHTML =dates;
  }
  dispalyingStudentAttendance();
  
  
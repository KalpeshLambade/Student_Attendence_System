function addStudent() {
  // alert("student added");

  var StudentName = document.getElementById("addingStudent").value;
  console.log(StudentName, "studentName");

  var StudentList = JSON.parse(localStorage.getItem("StudentList")) || [];

  StudentList.push({ nameOfStudent: StudentName, attendance: [] });

  localStorage.setItem("StudentList", JSON.stringify(StudentList));

  document.getElementById("addingStudent").value = "";
  markingAttence();
  displayStudentList();

  // dispalyStatus();
  // displayDate();
}

function getRealTime() {
  var dateAndTime = new Date();
  var date = dateAndTime.toJSON().slice(0, 10); //
  //   console.log(dateAndTime.toJSON());
  var addDate = document.getElementById("dateHere");
  addDate.innerText = date;
}
getRealTime();

function markingAttence() {
  var studentList = JSON.parse(localStorage.getItem("StudentList"));
  console.log(studentList, "studentList");

  var divFromHtml = document.getElementById("markingAttendance");
  console.log(divFromHtml, "divFromHtml");

  var student = [
    `<div><p>Roll no</p><p>Name of students</p><p>Is present?</p><p>Is absent?</p></div>`,
  ];

  for (var i = 0; i < studentList.length; i++) {
    student += `<div><p>${i + 1}</p><p>${
      studentList[i].nameOfStudent
    }</p><p><i class="fa-solid fa-check" onClick="present(${i})"></i></p>
    <p><i class="fa-solid fa-xmark" onClick="absent(${i})"></i></p></div>`;
  }

  //   console.log(student, "student");

  divFromHtml.innerHTML = student;
}

function present(index) {
  // alert("Working");
  // console.log("index",index);
  var dateAndTime = new Date();
  var date = dateAndTime.toJSON().slice(0, 10);
  // console.log(date);

  var studentListFromLs = JSON.parse(localStorage.getItem("StudentList"));
  var user = studentListFromLs[index];

  var flag = false;
  for (var i = 0; i < user.attendance.length; i++) {
    if (!!user.attendance[i][date]) {
      flag = true;
    }
  }

  if (flag == false) {
    var obj = {};
    obj[date] = "Present";
    user.attendance.push(obj);
    localStorage.setItem("StudentList", JSON.stringify(studentListFromLs));
  } else {
    alert("already Marked");
  }
}
function absent(index) {
  // alert("Working");
  // console.log("index",index);
  var dateAndTime = new Date();
  var date = dateAndTime.toJSON().slice(0, 10);
  // console.log(date);

  var studentListFromLs = JSON.parse(localStorage.getItem("StudentList"));
  var user = studentListFromLs[index];

  var flag = false;
  for (var i = 0; i < user.attendance.length; i++) {
    if (!!user.attendance[i][date]) {
      flag = true;
    }
  }

  if (flag == false) {
    var obj = {};
    obj[date] = "Absent";
    user.attendance.push(obj);
    localStorage.setItem("StudentList", JSON.stringify(studentListFromLs));
  } else {
    alert("already Marked");
  }
}

markingAttence();

function displayStudentList() {
  var studentList = JSON.parse(localStorage.getItem("StudentList"));
  // console.log(studentList, "studentList");

  var divFromHtml = document.getElementById("studentsNames");
  // console.log(divFromHtml, "divFromHtml");

  var student = [];

  for (var i = 0; i < studentList.length; i++) {
    student += `<div><p>${studentList[i].nameOfStudent}</p></div>`;

    // displayDate(i);
    // dispalyStatus(i);
  }
  //   console.log(student, "student");

  divFromHtml.innerHTML = student;
}
displayStudentList();

// // *********dispaly dates of attendance
// function displayDate(index) {
//   var dateFromLS = JSON.parse(localStorage.getItem("StudentList"));
//   var dateOfStudent = dateFromLS[index].attendance;

//   // console.log(nameOfStudent);
//   var result = dateOfStudent.flatMap(Object.keys);
//   // console.log(result);

//   var divFromHtml = document.getElementById("displayDates");

//   var dates = [];

//   for (var j of result) {
//     // console.log(j);
//     dates += `<div><p>${j}</p></div>`;
//   }

//   // console.log(dates);
//   divFromHtml.innerHTML = dates;
// }

// displayDate();

// //********** display Present or Not
// function dispalyStatus(index) {
//   // console.log(index);
//   var dateFromLS = JSON.parse(localStorage.getItem("StudentList"));
//   var statusOfStudent = dateFromLS[index].attendance;

//   // console.log(nameOfStudent);
//   var result = statusOfStudent.flatMap(Object.values);
//   // console.log(result);

//   var divFromHtml = document.getElementById("displayStatus");

//   var status = [``];

//   for (var j of result) {
//     // console.log(j);
//     status += `<div><p>${j}</p></div>`;
//   }

//   // console.log(status);
//   divFromHtml.innerHTML = status;
// }

// dispalyStatus();

function dispalyingStudentAttendance() {
  var for25 = document.getElementById("first");
  
  var dataFromLs = JSON.parse(localStorage.getItem("StudentList"));

  var dates = [];

  for (var k = 0; k < dataFromLs.length; k++) {
    for (var l = 0; l < dataFromLs[k].attendance.length; l++) {

      // console.log(dateFromLs[k].attendance[l]);
      // console.log(Object.keys(dateFromLs[k].attendance[l][0]));

      if( !dates.includes((Object.keys(dataFromLs[k].attendance[l])[0]))){
        dates.push((Object.keys(dataFromLs[k].attendance[l])[0]));
      }
      // dates.push((Object.keys(dateFromLs[k].attendance[l])[0]));
  
    }
  }

  // console.log(dates, "dates here");
  var finalArrayWithAtt = [];
  var settingDates = ['2023-02-25'];

  for(var i=0; i < dataFromLs.length ; i++){

    console.log(dataFromLs[i].attendance,"heree");
      if (dataFromLs[i].attendance.length) {
          for (var j = 0; j < dataFromLs[i].attendance.length; j++) {
              for (var k = 0; k < settingDates.length; k++) {
                  if (dataFromLs[i].attendance[j][settingDates[k]]) {
                      // console.log((dataFromLs[i].attendance[j][settingDates[k]]), dataFromLs[i].nameOfStudent, dd[k])
                      finalArrayWithAtt += `<div>${dataFromLs[i].attendance[j][settingDates[k]]}</div>`;
                  }
              }
          }
      } else {
          finalArrayWithAtt += `<div>No data</div>`;
      }
  }
  // console.log(check, 'check')
  for25.innerHTML = finalArrayWithAtt;
}

dispalyingStudentAttendance();


// function displayingStudentsAttendance() {
//   var for25 = document.getElementById("first");
//   // console.log(idFromHTML, 'idFromHTML')
//   var dataFromLs = JSON.parse(localStorage.getItem("StudentsList"));
//   var dates = [];
//   for (var k = 0; k < dataFromLs.length; k++) {
//       for (var l = 0; l < dataFromLs[k].attendance.length; l++) {
//           // console.log(dataFromLs[k].attendance[l])
//           // console.log((Object.keys(dataFromLs[k].attendance[l])[0]))
//           if (!dates.includes((Object.keys(dataFromLs[k].attendance[l])[0]))) {
//               dates.push((Object.keys(dataFromLs[k].attendance[l])[0]));
//           }

//       }
//   }
//   var finalArrayWithAtt = [];
//   var settingDates = ['2023-02-25']
//   for (var i = 0; i < dataFromLs.length; i++) {
//       // console.log(dataFromLs[i].attendance,"heree");
//       if (dataFromLs[i].attendance.length) {
//           for (var j = 0; j < dataFromLs[i].attendance.length; j++) {
//               for (var k = 0; k < settingDates.length; k++) {
//                   if (dataFromLs[i].attendance[j][settingDates[k]]) {
//                       // console.log((dataFromLs[i].attendance[j][settingDates[k]]), dataFromLs[i].nameOfStudent, dd[k])
//                       finalArrayWithAtt += `<div>${dataFromLs[i].attendance[j][settingDates[k]]}</div>`;
//                   }
//               }
//           }
//       } else {
//           finalArrayWithAtt += `<div>No data</div>`;
//       }
//   }
//   // console.log(check, 'check')
//   for25.innerHTML = finalArrayWithAtt;
// }
// displayingStudentsAttendance();


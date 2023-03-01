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
    }</p><p><i class="fa-solid fa-circle-check" onClick="present(${i})"></i></p>
    <p><i class="fa-solid fa-circle-xmark" onClick="absent(${i})"></i></p></div>`;
  }

  //   console.log(student, "student");
  divFromHtml.innerHTML = student;
}

function present(index) {
  // alert("Working");
  // console.log("index",index);
  var dateAndTime = new Date();
  var date = dateAndTime.toJSON().slice(0, 10);
  console.log(date);

  var studentListFromLs = JSON.parse(localStorage.getItem("StudentList"));
  var user = studentListFromLs[index];

  var flag = false;
  for (var i = 0; i < user.attendance.length; i++) {
    if (!!user.attendance[i][date]) {
      flag = true;
    }
  }

  if (flag == false) {
    var obj = {}; // obj ={date:"present"}
    obj[date] = "Present"; // {25-02-2023 :"present"}
    user.attendance.push(obj);
    localStorage.setItem("StudentList", JSON.stringify(studentListFromLs));
    test();
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
    test();
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
    student += `<div><p class="font-size">${studentList[i].nameOfStudent}</p></div>`;
  }

  divFromHtml.innerHTML = student;
  test();
}
displayStudentList();

function test() {
  var ItemFromLS = JSON.parse(localStorage.getItem("StudentList"));
  // console.log(ItemFromLS[0].attendance);

  var obj = {};
  var storeDates = [];
  // var storeAttedance =[];

  for (var i = 0; i < ItemFromLS.length; i++) {
    //loop for student
    // console.log(ItemFromLS[i].attendance, "Indentifier");

    for (var j = 0; j < ItemFromLS[i].attendance.length; j++) {
      // loop for attendance array
      // console.log(ItemFromLS[i].attendance[j], "Indentifier2");

      for (var [key, value] of Object.entries(ItemFromLS[i].attendance[j])) {
        // console.log(`${key}: ${value} keys and values`);

        if (!storeDates.includes(key)) {
          storeDates.push(key);

          obj[key] = [];
        }
        obj[key].push(value);
      }
    }
    if(ItemFromLS[i].attendance.length === 0){
      obj[key].push("No Data");
    }
    //Object.entries() return key and value
  }
  // console.log(storeDates, "Dates");
  // console.log(storeAttedance,"attendance");
  console.log(obj);

  var displayDatesFromHtml = document.getElementById("displayDates");
  var displayStatusFromHtml = document.getElementById("attendance-status");

  var displayDates = [];
  var displayStatus = [];

  for (var [key, value] of Object.entries(obj)) {
    // console.log(key,"keys");
    console.log(value,"value");
    displayDates += `<div><p class="font">${key}</p></div>`;

    var statusTemp = []; //add temp array to solve the problem of inline addding of attendance
    for (var k of value) {
      statusTemp += `<p>${k}</p>`; //adding attendance to temp variable
    }
    displayStatus += `<div class="font-size">${statusTemp}</div>`; //passing temp array to display array which creates black view for new date
  }

  console.log(displayDates);

  displayStatusFromHtml.innerHTML = displayStatus;
  displayDatesFromHtml.innerHTML = displayDates;
}

test();
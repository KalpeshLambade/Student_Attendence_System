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
    obj[date] = "Present";  // {25-02-2023 :"present"} 
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

  }
  
  divFromHtml.innerHTML = student;
}
displayStudentList();

function test() {
  var ItemFromLS = JSON.parse(localStorage.getItem("StudentList"));
  // console.log(ItemFromLS[0].attendance);


  var obj ={};
  var storeDates = [];
  // var storeAttedance =[];

  for (var i = 0; i < ItemFromLS.length; i++) { //loop for student
    // console.log(ItemFromLS[i].attendance, "Indentifier");

    for (var j = 0; j < ItemFromLS[i].attendance.length; j++) { // loop for attendance array
      // console.log(ItemFromLS[i].attendance[j], "Indentifier2");

      for (var [key, value] of Object.entries(ItemFromLS[i].attendance[j])) {
        // console.log(`${key}: ${value} keys and values`);

        if (!storeDates.includes(key)) {
          storeDates.push(key);
          
          obj[key] =[];
        }
        obj[key].push(value);
        
      }
    }
    //Object.entries() return key and value
  }
  // console.log(storeDates, "Dates");
  // console.log(storeAttedance,"attendance");
  console.log(obj);

  
}

test();





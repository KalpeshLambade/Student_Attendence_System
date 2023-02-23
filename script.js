function addStudent(){
    // alert("student added");

    var StudentName = document.getElementById("addingStudent").value;
    console.log(StudentName , "studentName");

    var StudentList = JSON.parse(localStorage.getItem("StudentList")) || [] ;

    StudentList.push(StudentName);

    localStorage.setItem("StudentList", JSON.stringify(StudentList));
}


function displayStudentList(){
    var studentList = JSON.parse(localStorage.getItem('StudentList'));
    console.log(studentList ,'studentList');

    var divFromHtml = document.getElementById('displayingStudentsList');
    console.log(divFromHtml, 'divFromHtml');

    var student =[`<div id="sheet-mark"><p>ID</p><p>Date</p><p>Student Name</p><p>status</p></div>`];

    for( var i=0; i < studentList.length; i++){
        student += `<div><p>${studentList[i]}</p></div>`;

    }

    console.log(student,'student');

    divFromHtml.innerHTML =student;
}
displayStudentList();


function markingAttence(){
    var studentList = JSON.parse(localStorage.getItem('StudentList'));
    console.log(studentList ,'studentList');

    var divFromHtml = document.getElementById('markingAttendance');
    console.log(divFromHtml, 'divFromHtml');

    var student =[`<div id="sheet-mark"><p>ID</p><p>Date</p><p>Student Name</p><p>Present/Absent</p></div>`];

    for( var i=0; i < studentList.length ; i++){
        student += `<div><p>${studentList[i]}</p></div>`;

    }

    console.log(student,'student');

    divFromHtml.innerHTML =student;
}
markingAttence();
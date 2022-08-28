function changeColor() {
  var head1 = document.getElementById("head1");
  var head2 = document.getElementById("head2");
  setInterval(function () {
    let c2; //color of heading 2 using let
    if (head1.style.color == "red") {
      var c1 = "blue"; //color of heading 1 using var
    } else {
      c1 = "red";
    }

    if (head2.style.color == "green") {
      c2 = "red";
    } else {
      c2 = "green";
    }
    head1.style.color = c1;
    head2.style.color = c2;
  }, 1000);
}

// pr 3(b)
class Student {
  constructor() {
    this.rno = 0;
    this.fname = "";
    this.lname = "";
  }
  getStudent() {
    // alert(
    //   "Student Details: Roll No.: " +
    //     this.rno +
    //     "\n First Name: " +
    //     this.fname +
    //     "\n Last Name: " +
    //     this.lname
    // );
    document.getElementById("stuData").innerHTML =
      "Student Details:<br/>  Roll No.: " +
      this.rno +
      "<br/>  First Name: " +
      this.fname +
      "<br/>  Last Name: " +
      this.lname;
  }
  setStudent(r, fn, ln) {
    this.rno = r;
    this.fname = fn;
    this.lname = ln;
  }
}

var form = document.forms["studentForm"];
form.onsubmit = (e) => {
  e.preventDefault();
  let r = form.rno.value;
  let f = form.fname.value;
  let l = form.lname.value;
  var stu = new Student();
  stu.setStudent(r, f, l);
  stu.getStudent();
};

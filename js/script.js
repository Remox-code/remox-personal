alert(
  " خوش آمدید به وبلاگ شخصی من توی این وبلاگ  نمونه کار های خودم،درباره خودم،راه های تماس با خودم و یه سری اصلاعات درباره برنامه نویسی به شما میدم، امیدوارم لذت بیرد."
);
prompt( "نامتان را وارد کنید","علی")

// let hour = new Date().getHours()
// if (hour >= 5 && hour < 12) {
//   console.log("صبح بخیر");
// }
// else if (hour >= 12 && hour < 16) {
//   console.log("ضهر بخیر");
// }
// else if (hour >= 16 && hour < 19) {
//   console.log("عصر بخیر");
// }
// else {
//   console.log("شب بخیر");
// }
// let h2 =document.querySelector("#h2").innerText
//  document.querySelector("#h2").innerText=

 let hour = new Date().getHours();
let message = "";  

if (hour >= 5 && hour < 12) {
    message = "صبح بخیر";
}
else if (hour >= 12 && hour < 16) {
    message = "ظهر بخیر";
}
else if (hour >= 16 && hour < 19) {
    message = "عصر بخیر";
}
else {
    message = "شب بخیر";
}

document.querySelector("#h2").innerText = message;
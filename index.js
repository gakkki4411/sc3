console.log("Hello kkorld");

function gu(num1) {
const dom_qu = document.getElementById("qu");
var now = null;
now = new Date();
var num1 = now.getSeconds();
if (num1%3 ===0) {
  dom_qu.innerHTML="グー";
} else if (num1%3 ===1) {
  dom_qu.innerHTML="チョキ";
} else {
  dom_qu.innerHTML="パー";
}



}

const loveName="Mahmoud";
const input=document.getElementById("input").value;
console.log(input);
const divImg=document.getElementsByClassName("img-div")[0]
const lov=document.getElementsByClassName("lov")[0]
const Img=document.getElementsByClassName("img")[0]
console.log(Img);
console.log(divImg);
body.addEventListener("click", function() {

  divImg.style.transform ="translateX(0)"
  lov.style.transform ="translateX(0)"
});
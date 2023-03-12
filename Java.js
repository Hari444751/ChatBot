function toggleBtn()
{
    var Btn=document.getElementById("Btn");
    Btn.classList.toggle("active");
    var bg=document.getElementById("bg");
    bg.classList.toggle("on");
    var Nav=document.getElementById("Nav");
    Nav.classList.toggle("onnav");
}
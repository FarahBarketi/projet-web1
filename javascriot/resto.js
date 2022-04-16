let plus = document.querySelectorAll(".plus");
// console.log(plus);
let minus = document.querySelectorAll(".minus");
// console.log(minus);



for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        plus[i].nextElementSibling.innerHTML++;
        total()
    })
}

for (let i = 0; i < minus.length; i++) {

    minus[i].addEventListener("click", function() {
        if (minus[i].previousElementSibling.innerHTML > 0) {
            minus[i].previousElementSibling.innerHTML--;
            total()
        }
    })
}




window.addEventListener('scroll',function(){
    const header =document.querySelector('header');
header.classList.toggle("sticky", window.scrollY > 0 );
});
function toggleMenu {
    const toggleMenu =document.querySelector('.menutoggle');
    const navbar = document.querySelector('navbar');
    menutoggle.classList.toggle('active');
    navbar.classList.toggle('active');
} 
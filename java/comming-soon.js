// calling for time 

let time = document.querySelector(".time").children;

let now = new Date("jun 29 2023").getTime();


let x = setInterval(function(){
    let nowTime =new Date().getTime();
    let distance = now - nowTime;
    let months = Math.floor(distance / (1000 * 30 * 60 * 60 * 24));
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    time[0].innerHTML =`${months}<span>اشهر</span>`;
    time[1].innerHTML =`${days}<span>ايام</span>`;
    time[2].innerHTML =`${hours}<span>ساعات</span>`;
    time[3].innerHTML =`${minutes}<span>دقائق</span>`;
    time[4].innerHTML =`${seconds}<span>ثواني</span>`;

    
    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



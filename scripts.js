// navbar scroll
document.addEventListener('scroll', () => {

  let navbar = document.querySelector('navbar')
  let scrolled = window.pageYOffset;



  if (scrolled > 50) {
    navbar.classList.add('shadow', 'bg-first')
  } else {
    navbar.classList.remove('shadow', 'bg-first')
  }

})



// progess bar scores 

let scores = {
  "violenza": 40,
  "razzismo": 12,
  "sangue": 50,
  "contenuto medico": 67,
  "contenuto per adulti": 20,
}

let scoresArray = Object.entries(scores).sort((a, b) => b[1] - a[1])
console.log(scoresArray);

let scoresWrapper = document.querySelector("#scoresWrapper")


scoresArray.forEach(el => {

  let color;

  if (el[1] < 34) {
    color = "success"
  } else if (el[1] < 66) {
    color = "warning"
  } else {
    color = "danger"
  }


  let div = document.createElement('div')
  div.classList.add('col-12', 'my-3')
  div.innerHTML =
    `
     <p class=" mb-0 text-first font-weight-bold">
            ${el[0].toUpperCase()}: ${el[1]}
          </p>
          <div class="progress bg-light shadow"> 
            <div class="progress-bar bg-${color}" role="progressbar" style="width:${el[1]}%" ></div>
          </div>
     
     `
  scoresWrapper.appendChild(div)


})



function myClock() {
    let currentDate = new Date();
    time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    document.getElementById("clocks").innerHTML = time;
    setTimeout(myClock, 1000);
  }
  myClock();

//////////////////////////////////////////////////////

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n =>{
  for(slide of slides){
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const currentSlideIndex = ind =>{
  activeSlide(ind);
  activeDot(ind);
}
const nextSlide = () =>{
  if(index == slides.length - 1){
    index = 0;
    currentSlideIndex(index);
  }else{
    index++;
    currentSlideIndex(index);
  }
}
const prevSlide = () =>{
  if(index == 0){
    index = slides.length - 1;
    currentSlideIndex(index);
  }else{
    index--;
    currentSlideIndex(index);
  }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

const activeDot = n =>{
  for(dot of dots){
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', ()=>{
    index = indexDot;
    currentSlideIndex(index);
  })

})
setInterval(nextSlide, 2000);




////////////////
let k = 4;
const students = [-1, -3, 0, 4, 1];
function angryProfessor(k, student) {
  
  let onTime = student.filter(function(value){
    return value < 1;
  });
  if (onTime.length < k){
    return "YES";                 
  }else{
    return "NO";
  }
}
console.log(angryProfessor(k, students));

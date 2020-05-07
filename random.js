document.onmousemove = animateCircles;
  
  var colors = ["#9daabd"];

function animateCircles(event){
  var circle = document.createElement('div');
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);
  
  
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px"; 
  
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.backgroundColor = color;
  
  circle.style.transition = "all 7s linear .2s"
  
  circle.style.left = circle.offsetLeft - 200 + "px";
  circle.style.top = circle.offsetTop - 800 + "px";
  
  circle.style.width = '400px';
  circle.style.height = '400px';
  circle.style.borderWidth = '0px'
  circle.style.opacity = 0;

}




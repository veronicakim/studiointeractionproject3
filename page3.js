document.onmousemove = animateCircles;
  
  var colors = ["#8d99a1"];

function animateCircles(event){
  var circle = document.createElement('div');
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);
  
  
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px"; 
  
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.backgroundColor = color;
  
  circle.style.transition = "all 4s linear 0s"
  
  circle.style.left = circle.offsetLeft - 200 + "px";
  circle.style.top = circle.offsetTop - 1000 + "px";
  
  circle.style.width = '600px';
  circle.style.height = '600px';
  circle.style.borderWidth = '0px'
  circle.style.opacity = 0;

}
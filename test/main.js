function resize() {
	var outer = document.querySelector(".outer");
  //outer.style.height = window.innerHeight + "px";
  
  var rect = document.querySelector(".footer").getBoundingClientRect();
  document.querySelector(".header").innerText = outer.style.height + " -- " + rect.top;
}

window.resize = resize;
resize();
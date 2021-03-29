//darkmode
console.log("darkmode.js");
var darkmode = document.getElementByID('darkmode');
var light = localStorage['light'] || 'true';
setDarkMode();
darkmode.addEventListener('click', function(event) {
  if(light === 'true'){
    light = 'false';
    localStorage['light']='false';
  }else{
    light = 'true';
    localStorage['light']='true';
  };
  setDarkMode();
});

function setDarkMode() {
	console.log("setDarkMode called");
	if (light) {
	{
		text.innerText = "Dark Mode";
		document.documentElement.style.setProperty('--backgroundcolor', '');
		document.documentElement.style.setProperty('--textcolor', '');
		document.documentElement.style.setProperty('--colspancolor', '');
		document.documentElement.style.setProperty('--textboxfocuscolor', '');
		document.documentElement.style.setProperty('--navbackground', '');
		document.documentElement.style.setProperty('--navbackgroundhover', '');
		document.documentElement.style.setProperty('--navtext', '');
		document.documentElement.style.setProperty('--navtexthover', '');
		document.documentElement.style.setProperty('--navtextactive', '');
		document.documentElement.style.setProperty('--navchildbackground', '');
		document.documentElement.style.setProperty('--navchildbackgroundhover', '');
		document.documentElement.style.setProperty('--navchildtext', '');
		document.documentElement.style.setProperty('--navchildtexthover', '');
		document.documentElement.style.setProperty('--navchildtextactive', '');
	}
	else
	{
		text.innerText = "Light Mode";
		document.documentElement.style.setProperty('--backgroundcolor', 'white');
		document.documentElement.style.setProperty('--textcolor', 'black');
		document.documentElement.style.setProperty('--colspancolor', 'gray');
		document.documentElement.style.setProperty('--textboxfocuscolor', 'lightgray');
		document.documentElement.style.setProperty('--navbackground', 'white');
		document.documentElement.style.setProperty('--navbackgroundhover', 'rgb(51, 51, 51)');
		document.documentElement.style.setProperty('--navtext', 'black');
		document.documentElement.style.setProperty('--navtexthover', 'white');
		document.documentElement.style.setProperty('--navtextactive', 'black');
		document.documentElement.style.setProperty('--navchildbackground', 'rgb(51, 51, 51)');
		document.documentElement.style.setProperty('--navchildbackgroundhover', 'rgb(112, 112, 112)');
		document.documentElement.style.setProperty('--navchildtext', 'black');
		document.documentElement.style.setProperty('--navchildtexthover', 'white');
		document.documentElement.style.setProperty('--navchildtextactive', 'white');
	}
}
function comenzar () {
			// variable global

			relleno1=document.getElementById('relleno1');
			relleno2=document.getElementById('relleno2');
			relleno3=document.getElementById('relleno3');
			comentar1=document.getElementById('comentar1');
			comentar2=document.getElementById('comentar2');
			comentar3=document.getElementById('comentar3');
			boton1=document.getElementById('boton1');
			boton2=document.getElementById('boton2');
			boton3=document.getElementById('boton3');
			boton1.addEventListener('click',comentario,false);
			boton2.addEventListener('click',comentario,false);
			boton3.addEventListener('click',comentario,false);
			}
function comentario(e){
								
				if (e.target.id =='boton1') {
					var texto1=comentar1.value;
					relleno1.innerHTML +="<br>"+"-"+ texto1+".";
					texto1=comentar1.value="";
				}else if (e.target.id == 'boton2') {
					var texto2=comentar2.value;
					relleno2.innerHTML +="<br>"+"-"+ texto2+".";
					texto2=comentar2.value="";
				}else{
					var texto3=comentar3.value;
					relleno3.innerHTML +="<br>"+"-"+ texto3+".";
					texto3=comentar3.value="";
				}
					
		}


function _(x){

    return document.getElementById(x);}
// Variables for bubble array, bubble index, and the setInterval() variable
var ba, bi=0, intrvl;
// bca - Bubble Content Array. Put your content here.
var bca = [
    '<div id="rey1"><img  width="100%" src="imagenes/html5.jpg"></div>',
    '<div id="rey2"><img  width="100%" src="imagenes/javascript.png"></div>',
    '<div id="rey3"><img  width="100%" src="imagenes/css.jpg"></div>'
    
];

// This function is triggered by the bubbleSlide() function below

function bubbles(bi){
    // Fade-out the content
    _("bubblecontent").style.opacity = 0;
    // Loop over the bubbles and change all of their background color
    for(var i=0; i < ba.length; i++){
        ba[i].style.background = "rgba(0,0,0,.1)";
    }
    // Change the target bubble background to be darker than the rest
    ba[bi].style.background = "#000";
    // Stall the bubble and content changing for just 300ms
    setTimeout(function(){
        // Change the content
        _("bubblecontent").innerHTML = bca[bi];
        // Fade-in the content
        _("bubblecontent").style.opacity = 1;
    }, 300);
}
// This function is set to run every 5 seconds(5000ms)
function bubbleSlide(){
    
    bi++; // Increment the bubble index number
    // If bubble index number is equal to the amount of total bubbles
    if(bi == ba.length){
        bi = 0; // Reset the bubble index to 0 so it loops back at the beginning
    }
    // Make the bubbles() function above run
    bubbles(bi);
}
// Start the application up when document is ready
window.addEventListener("load", function(){
    // Get the bubbles array
    ba = _("bubbles").children;
    // Set the interval timing for the slideshow speed
    intrvl = setInterval(bubbleSlide, 6000);
});



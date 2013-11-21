function updateClock()
{
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
	
	var handRotation = 0; //the degrees
	
	handRotation = currentMinutes*6; // adds 6 degrees to the rotation
	
	
	var RightEye = document.getElementById("RightEye"); 
var RightPupil = document.getElementById("RightPupil");
	
	//var bb = rightPupil.getBoundingBox();
	
	//var cx = bb.x + bb.width/2;
	//var cy = bb.y + bb.height/2;
	
	var cx = RightPupil.getAttribute("cx");
	var cy = RightPupil.getAttribute("cy");

	
	
	var transformTxt =  "rotate("+ handRotation + ","+cx+","+cy+")"; 
	//console.log (transformTxt); 
	
	RightEye.setAttribute('transform',transformTxt);

	
	
	
	handRotation = 360*(currentHours % 12)/12; // adds 6 degrees to the rotation
	
	
	var LeftEye = document.getElementById("LeftEye"); 
var LeftPupil = document.getElementById("LeftPupil");
	
	//var bb = rightPupil.getBoundingBox();
	
	//var cx = bb.x + bb.width/2;
	//var cy = bb.y + bb.height/2;
	
	var cxLeft = LeftPupil.getAttribute("cx");
	var cyLeft = LeftPupil.getAttribute("cy");

	
	
	var transformTxtHours =  "rotate("+ handRotation + ","+cxLeft+","+cyLeft+")"; 
	console.log (transformTxtHours); 
	
	LeftEye.setAttribute('transform',transformTxtHours);

	 
	
	
}
 
 
 
setInterval(updateClock, 20);

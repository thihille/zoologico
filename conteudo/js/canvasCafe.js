	var cSpeedCafe=50;
	var cWidthCafe=85;
	var cHeightCafe=134;
	var cTotalFramesCafe=5;
	var cFrameWidthCafe=85;
	var cImageSrcCafe='images/spritesCafe.png';
	
	var cImageTimeoutCafe=false;
	var cIndexCafe=0;
	var cXposCafe=0;
	var SECONDS_BETWEEN_FRAMESCafe=0;
	
	function startAnimationCafe(){
		
		document.getElementById('loaderCafe').style.backgroundImage='url('+cImageSrcCafe+')';
		document.getElementById('loaderCafe').style.width=cWidthCafe+'px';
		document.getElementById('loaderCafe').style.height=cHeightCafe+'px';
		
		//FPS = Math.round(100/(maxSpeed+2-speed));
		FPSCafe = Math.round(100/cSpeedCafe);
		SECONDS_BETWEEN_FRAMESCafe = 1 / FPSCafe;
		
		setTimeout('continueAnimationCafe()', SECONDS_BETWEEN_FRAMESCafe/1000);
		
	}
	
	function continueAnimationCafe(){
		
		cXposCafe += cFrameWidthCafe;
		//increase the index so we know which frame of our animation we are currently on
		cIndexCafe += 1;
		 
		//if our cIndex is higher than our total number of frames, we're at the end and should restart
		if (cIndexCafe >= cTotalFrames) {
			cXposCafe =0;
			cIndexCafe=0;
		}
		
		document.getElementById('loaderCafe').style.backgroundPosition=(-cXposCafe)+'px 0';
		
		setTimeout('continueAnimationCafe()', SECONDS_BETWEEN_FRAMESCafe*1000);
	}
	
	function imageLoaderCafe(s, fun)//Pre-loads the sprites image
	{
		clearTimeout(cImageTimeoutCafe);
		cImageTimeouCafet=0;
		genImageCafe = new Image();
		genImageCafe.onload=function (){cImageTimeout=setTimeout(fun, 0)};
		genImageCafe.onerror=new Function('alert(\'Could not load the image\')');
		genImageCafe.src=s;
	}
	
	//The following code starts the animation
	new imageLoaderCafe(cImageSrcCafe, 'startAnimationCafe()');
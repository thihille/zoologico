var cSpeedGlobo=60;
	var cWidthGlobo=113;
	var cHeightGlobo=113;
	var cTotalFramesGlobo=5;
	var cFrameWidthGlobo=113;
	var cImageSrcGlobo='images/spritesGlobo.png';
	
	var cImageTimeoutGlobo=false;
	var cIndexGlobo=0;
	var cXposGlobo=0;
	var SECONDS_BETWEEN_FRAMESGlobo=0;
	
	function startAnimationGlobo(){
		
		document.getElementById('loaderGlobo').style.backgroundImage='url('+cImageSrcGlobo+')';
		document.getElementById('loaderGlobo').style.width=cWidthGlobo+'px';
		document.getElementById('loaderGlobo').style.height=cHeightGlobo+'px';
		
		//FPS = Math.round(100/(maxSpeed+2-speed));
		FPSGlobo = Math.round(100/cSpeedGlobo);
		SECONDS_BETWEEN_FRAMESGlobo = 1 / FPSGlobo;
		
		setTimeout('continueAnimationGlobo()', SECONDS_BETWEEN_FRAMESGlobo/1000);
		
	}
	
	function continueAnimationGlobo(){
		
		cXposGlobo += cFrameWidthGlobo;
		//increase the index so we know which frame of our animation we are currently on
		cIndexGlobo += 1;
		 
		//if our cIndex is higher than our total number of frames, we're at the end and should restart
		if (cIndexGlobo >= cTotalFramesGlobo) {
			cXposGlobo =0;
			cIndexGlobo=0;
		}
		
		document.getElementById('loaderGlobo').style.backgroundPosition=(-cXposGlobo)+'px 0';
		
		setTimeout('continueAnimationGlobo()', SECONDS_BETWEEN_FRAMESGlobo*1000);
	}
	
	function imageLoaderGlobo(s, fun)//Pre-loads the sprites image
	{
		clearTimeout(cImageTimeoutGlobo);
		cImageTimeoutGlobo=0;
		genImageGlobo = new Image();
		genImageGlobo.onload=function (){cImageTimeoutGlobo=setTimeout(fun, 0)};
		genImageGlobo.onerror=new Function('alert(\'Could not load the image\')');
		genImageGlobo.src=s;
	}
	
	//The following code starts the animation
	new imageLoaderGlobo(cImageSrc, 'startAnimationGlobo()');

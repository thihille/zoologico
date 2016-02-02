var cSpeedImpressora=70;
	var cWidthImpressora=279;
	var cHeightImpressora=295;
	var cTotalFramesImpressora=4;
	var cFrameWidthImpressora=279;
	var cImageSrcImpressora='images/spritesImpressora.png';
	
	var cImageTimeoutImpressora=false;
	var cIndexImpressora=0;
	var cXposImpressora=0;
	var SECONDS_BETWEEN_FRAMESImpressora=0;
	
	function startAnimationImpressora(){
		
		document.getElementById('loaderImpressora').style.backgroundImage='url('+cImageSrcImpressora+')';
		document.getElementById('loaderImpressora').style.width=cWidthImpressora+'px';
		document.getElementById('loaderImpressora').style.height=cHeightImpressora+'px';
		
		//FPS = Math.round(100/(maxSpeed+2-speed));
		FPSImpressora = Math.round(100/cSpeedImpressora);
		SECONDS_BETWEEN_FRAMESImpressora = 1 / FPSImpressora;
		
		setTimeout('continueAnimationImpressora()', SECONDS_BETWEEN_FRAMESImpressora/1000);
		
	}
	
	function continueAnimationImpressora(){
		
		cXposImpressora += cFrameWidthImpressora;
		//increase the index so we know which frame of our animation we are currently on
		cIndexImpressora += 1;
		 
		//if our cIndex is higher than our total number of frames, we're at the end and should restart
		if (cIndexImpressora >= cTotalFramesImpressora) {
			cXposImpressora =0;
			cIndexImpressora=0;
		}
		
		document.getElementById('loaderImpressora').style.backgroundPosition=(-cXposImpressora)+'px 0';
		
		setTimeout('continueAnimationImpressora()', SECONDS_BETWEEN_FRAMESImpressora*1000);
	}
	
	function imageLoaderImpressora(s, fun)//Pre-loads the sprites image
	{
		clearTimeout(cImageTimeoutImpressora);
		cImageTimeoutImpressora=0;
		genImageImpressora = new Image();
		genImageImpressora.onload=function (){cImageTimeoutImpressora=setTimeout(fun, 0)};
		genImageImpressora.onerror=new Function('alert(\'Could not load the image\')');
		genImageImpressora.src=s;
	}
	
	//The following code starts the animation
	new imageLoaderImpressora(cImageSrc, 'startAnimationImpressora()');
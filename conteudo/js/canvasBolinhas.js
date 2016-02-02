	var cSpeedBolinha=10;
	var cWidthBolinha=130;
	var cHeightBolinha=78;
	var cTotalFramesBolinha=2;
	var cFrameWidthBolinha=130;
	var cImageSrcBolinha='images/spritesBolinhas.png';
	
	var cImageTimeoutBolinha=false;
	var cIndexBolinha=0;
	var cXposBolinha=0;
	var SECONDS_BETWEEN_FRAMESBolinha=0;
	
	function startAnimationBolinha(){
		
		document.getElementById('loaderBolinha').style.backgroundImage='url('+cImageSrcBolinha+')';
		document.getElementById('loaderBolinha').style.width=cWidthBolinha+'px';
		document.getElementById('loaderBolinha').style.height=cHeightBolinha+'px';
		
		//FPS = Math.round(100/(maxSpeed+2-speed));
		FPSBolinha = Math.round(100/cSpeed);
		SECONDS_BETWEEN_FRAMESBolinha = 1 / FPSBolinha;
		
		setTimeout('continueAnimationBolinha()', SECONDS_BETWEEN_FRAMESBolinha/1000);
		
	}
	
	function continueAnimationBolinha(){
		
		cXposBolinha += cFrameWidthBolinha;
		//increase the index so we know which frame of our animation we are currently on
		cIndexBolinha += 1;
		 
		//if our cIndex is higher than our total number of frames, we're at the end and should restart
		if (cIndexBolinha >= cTotalFramesBolinha) {
			cXposBolinha =0;
			cIndexBolinha=0;
		}
		
		document.getElementById('loaderBolinha').style.backgroundPosition=(-cXposBolinha)+'px 0';
		
		setTimeout('continueAnimationBolinha()', SECONDS_BETWEEN_FRAMESBolinha*1000);
	}
	
	function imageLoaderBolinha(s, fun)//Pre-loads the sprites image
	{
		clearTimeout(cImageTimeoutBolinha);
		cImageTimeoutBolinha=0;
		genImageBolinha = new Image();
		genImageBolinha.onload=function (){cImageTimeoutBolinha=setTimeout(fun, 0)};
		genImageBolinha.onerror=new Function('alert(\'Could not load the image\')');
		genImageBolinha.src=s;
	}
	
	//The following code starts the animation
	new imageLoaderBolinha(cImageSrcBolinha, 'startAnimationBolinha()');
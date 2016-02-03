var verificar_inicio_cnd;
var txtLvl = 0;

var musica = new Howl({
    urls: ['media/audio/musica.mp3'],
    volume: 1,
    onend: function() {
        musica.stop().play();
    }
});
var som_bemvindo = new Howl({
    urls: ['media/audio/bemvindo.mp3'],
    volume: 1,
    onend: function() {
        $('.personagem1').addClass('dly0 atencao');
        $('.personagem2').addClass('dly1 atencao');
    }
});
var gameoverp1 = new Howl({
    urls: ['media/audio/gameover-p1.mp3'],
    volume: 1,
    onend: function() {
        
    }
});
var gameoverp2 = new Howl({
    urls: ['media/audio/gameover-p2.mp3'],
    volume: 1,
    onend: function() {
        
    }
});
var correto = new Howl({
    urls: ['media/audio/correto.mp3'],
    volume: 1,
    onend: function() {
        
    }
});
var erro = new Howl({
    urls: ['media/audio/erro.mp3'],
    volume: 1,
    onend: function() {
        
    }
});
var pergunta_girafa = new Howl({
    urls: ['media/audio/texto-girafa.mp3']
});
var texto_girafa_acerto = new Howl({
    urls: ['media/audio/texto-girafa-acerto.mp3']
});
var texto_girafa_erro = new Howl({
    urls: ['media/audio/texto-girafa-erro.mp3']
});
// Configurações dos textos do botão de ajuda... Se houver mais de um texto do botão de ajuda, no arquivo FUNÇÕES.JS de desenvolvimento insira apenas a variavel "txtLvl = NUMERO DO TEXTO DO BOTÃO DE AJUDA QUE APARECERÁ, no local da função de desenvolvimento do projeto.
function textosInstrucoes(txtLvl){
	
	if(txtLvl == 0){
		$("#instrucoes").html("Clique nos elementos da tela para responder às perguntas.");
	}else if(txtLvl == 1){
		$("#instrucoes").html("Arraste os elementos na tela para responder às perguntas.");
	}else if(txtLvl == 2){
		$("#instrucoes").html("");
	}
}
// Configura Objeto
var config = {
	create: function(){
		engine("matematica"); // 1 - português // 2 - matemática // 3 - ciências // 4 - história // 5 - geografia
	},
	titulo: "Zoológico das unidades de medida",
	tipo: "Pnld 2016",
	colecao: "Jimboe",
	ano: "MATEMÁTICA | 2º Ano",
	genero: "home", // 1 - infografico / 2 - jogo / 3 - video/ 4-dragindrop
	
	matematica: {
		cp1: "rgba(46,86,166,1)",
		cp2: "rgba(136,178,223,1)",
		cp3: "rgba(14,49,120,1)",
		cp4: "rgba(18,23,57,1)",
		cs1: "rgba(246,140,61,1)",
		cs2: "rgba(253,209,176,1)",
		cs3: "rgba(251,178,115,1)",
		cs4: "rgba(192,102,22,1)",
		bck: "url(img/background-matematica.gif) repeat center",
		btnOptions: "url(img/btnOptionsMatematica.png) no-repeat bottom right"
	},
	ciencias: {
		cp1: "rgba(1,186,189,1)",
		cp2: "rgba(119,205,208,1)",
		cp3: "rgba(0,125,126,1)",
		cp4: "rgba(0,72,74,1)",
		cs1: "rgba(237,26,59,1)",
		cs2: "rgba(245,151,149,1)",
		cs3: "rgba(241,102,106,1)",
		cs4: "rgba(196,18,47,1)",
		bck: "url(img/background-ciencias.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsCiencias.png) no-repeat bottom right"
	},
	historia: {
		cp1: "rgba(112,89,166,1)",
		cp2: "rgba(176,163,208,1)",
		cp3: "rgba(92,46,145,1)",
		cp4: "rgba(52,12,61,1)",
		cs1: "rgba(209,162,28,1)",
		cs2: "rgba(238,221,140,1)",
		cs3: "rgba(225,198,102,1)",
		cs4: "rgba(163,139,16,1)",
		bck: "url(img/background-historia.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsHistoria.png) no-repeat bottom right"
	},
	portugues: {
		cp1: "rgba(237,20,91,1)",
		cp2: "rgba(245,152,157,1)",
		cp3: "rgba(176,4,65,1)",
		cp4: "rgba(93,0,35,1)",
		cs1: "rgba(0,169,100,1)",
		cs2: "rgba(165,217,201,1)",
		cs3: "rgba(79,190,149,1)",
		cs4: "rgba(0,98,58,1)",
		bck: "url(img/background-portugues.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsPortugues.png) no-repeat bottom right"
	},
	geografia: {
		cp1: "rgba(180,62,151,1)",
		cp2: "rgba(199,142,191,1)",
		cp3: "rgba(143,43,120,1)",
		cp4: "rgba(104,0,89,1)",
		cs1: "rgba(77,184,72,1)",
		cs2: "rgba(196,223,155,1)",
		cs3: "rgba(151,203,89,1)",
		cs4: "rgba(33,116,52,1)",
		bck: "url(img/background-geografia.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsGeografia.png) no-repeat bottom right"
	}
}

$(window).resize(function(){
	telaScale();
});

// Executa esta função "start" após o carregamento das imagens
function start(){

var canvas;
var ctx;
var confettiHandler;
//canvas dimensions
var W;
var H;
var mp = 50; //max particles
var particles = [];

$(window).resize(function () {
    canvas = document.getElementById("canvas");
    //canvas dimensions
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
});
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    //canvas dimensions
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W, //x-coordinate
            y: Math.random() * H, //y-coordinate
            r: randomFromTo(5, 30), //radius
            d: (Math.random() * mp) + 10, //density
            color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.7)",
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleIncremental: (Math.random() * 0.07) + .05,
            tiltAngle: 0
        });
    }
    
    


function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < mp; i++) {
        var p = particles[i];
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;  // Green path
        ctx.moveTo(p.x + p.tilt + (p.r / 4), p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.r / 4));
        ctx.stroke();  // Draw it
    }

    update();
}
function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
var TiltChangeCountdown = 5;
//Function to move the snowflakes
//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
var angle = 0;
var tiltAngle = 0;
function update() {
    angle += 0.01;
    tiltAngle += 0.1;
    TiltChangeCountdown--;
    for (var i = 0; i < mp; i++) {
        
        var p = particles[i];
        p.tiltAngle += p.tiltAngleIncremental;
        //Updating X and Y coordinates
        //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
        //Every particle has its own density which can be used to make the downward movement different for each flake
        //Lets make it more random by adding in the radius
        p.y += (Math.cos(angle + p.d) + 1 + p.r / 2) / 2;
        p.x += Math.sin(angle);
        //p.tilt = (Math.cos(p.tiltAngle - (i / 3))) * 15;
        p.tilt = (Math.sin(p.tiltAngle - (i / 3))) * 15;

        //Sending flakes back from the top when it exits
        //Lets make it a bit more organic and let flakes enter from the left and right also.
        if (p.x > W + 5 || p.x < -5 || p.y > H) {
            if (i % 5 > 0 || i % 2 == 0) //66.67% of the flakes
            {
                particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngle: p.tiltAngle, tiltAngleIncremental: p.tiltAngleIncremental };
            }
            else {
                //If the flake is exitting from the right
                if (Math.sin(angle) > 0) {
                    //Enter from the left
                    particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngleIncremental: p.tiltAngleIncremental };
                }
                else {
                    //Enter from the right
                    particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d, color: p.color, tilt: Math.floor(Math.random() * 10) - 10, tiltAngleIncremental: p.tiltAngleIncremental };
                }
            }
        }
    }
}
function StartConfetti() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    confettiHandler = setInterval(draw, 15);
}
function StopConfetti() {
    clearTimeout(confettiHandler);
    if (ctx == undefined) return;
    ctx.clearRect(0, 0, W, H);
}
var personagem1 = {
    seletor:$(".personagem1")

}
var personagem2 = {
    seletor:$(".personagem2")
}
	
	
function movendo(tempoExe){
    setTimeout(function(){
        if($(".sucesso").length == "0"){

            $(".somLoop").prop("volume",.3);
            pergunta_girafa.stop().play();
            conteudo(100, "id1");
        }else if($(".sucesso").length == "1"){
            somFx("texto-elefantes",1800);
            $(".pgrMap2-"+id).fadeIn(500);
            conteudo(2000, "id2");
        }else if($(".sucesso").length == "2"){
            somFx("texto-camelo",1800);
            $(".pgrMap3-"+id).fadeIn(500);
            conteudo(2000, "id3");
            txtLvl = 1;
        }else if($(".sucesso").length == "3"){
            somFx("texto-gorila",1800);
            $(".pgrMap4-"+id).fadeIn(500);
            txtLvl = 0;
            conteudo(2000, "id4");
        }else if($(".sucesso").length == "4"){
            somFx("texto-tigres",1800);
            $(".pergunta .exercicio").css({background:"rgba(255,255,255,.9) url(img/tigre.png) no-repeat bottom center"});

            $(".pgrMap5-"+id).fadeIn(500);
            conteudo(2000, "id5");
        }else if($(".sucesso").length == "5"){
            somFx("texto-urso",1800);
            $(".pergunta .exercicio").css({background:"rgba(255,255,255,.9) no-repeat"});
            $(".pgrMap6-"+id).fadeIn(500);
            conteudo(2000, "id6");
        }else if($(".sucesso").length == "6"){
            somFx("texto-andorinhas",1800);
            $(".pgrMap7-"+id).fadeIn(500);
            $(".pergunta .exercicio").css({background:"url(img/bgPerguntaId7.jpg) no-repeat"});
            conteudo(2000, "id7");
        }else if($(".sucesso").length == "7"){
            somFx("texto-relogio",1800);
            $(".pergunta .descricao").hide();
            $(".pergunta .exercicio").css({width:"910px", background:"rgba(255,255,255,.9) no-repeat"});
            $(".pgrMap8-"+id).fadeIn(500);
            conteudo(2000, "id8");
        }else if($(".sucesso").length == "8"){
            somFx("texto-final",800);
            somMusica("somSucesso",800);
            $(".pgrMap9-"+id).show().addClass("animated fadeInDown");
            $(".fala2").show().addClass("animated fadeInUp");

            StartConfetti();
            $("canvas").show();
            setTimeout(function(){
                $("canvas").fadeOut(1000,function(){
                    //location.href = "index.html";
                    sessionStorage.setItem('reiniciar_oed', 'sim');
                });
            },13000);
        }
    },tempoExe);
}
	function feedback(tipo, yPos,xPos,yWid,yHei,valbalao,msg, audio){
		
		var efeito = {
			aparece: "fadeIn",
			aparece1: "fadeInUp",
			desaparece: "fadeOut",
			desaparece1: "fadeOutUp",
			desliza: "slideInRight",
			zoom: {
				entra: "bounceInUp",
				sai: "bounceOutDown"
			}
		},
		balao = {
			position: $("#feedback div:first-child"),
			marcador: $("#feedback div:first-child span"),
			texto: $("#feedback div:first-child p"),
			engine: function(){
				balao.marcador.css("bottom",valbalao);
				balao.texto.html(msg);
				balao.position.css({marginTop:yPos,marginLeft:xPos,height: yHei,width: yWid});
			}
		},
		certo = {
			background: $("#feedback"),
			instrutor: $(".professorF"),
			engine:function(){
				certo.instrutor.show().addClass("animated "+ efeito.zoom.entra);
				certo.background.css({"background":"url(img/bckCerto.jpg) no-repeat"}).show().addClass("animated "+efeito.aparece1);
			}
		},
		erro = {
			background: $("#feedback"),
			instrutor: $(".professorF"),
			engine:function(){
				erro.instrutor.show().addClass("animated "+ efeito.zoom.entra);
				erro.background.css({"background":"url(img/bckErro.jpg) no-repeat"}).show().addClass("animated "+efeito.aparece1);
			}
		},
		gameover = {
			background: $("#feedback"),
			instrutor: $(".professorF"),
			engine:function(){
				gameover.instrutor.show().addClass("animated "+ efeito.zoom.entra);
				gameover.background.css({"background":"url(img/gameover-"+id+".jpg) no-repeat"}).show().addClass("animated "+efeito.aparece1);
			}
		};

		if(tipo == "correto"){
			balao.engine();
			certo.engine();
			setTimeout(function(){
				balao.position.show().addClass("animated "+ efeito.aparece);
				if(audio == "texto-girafa-acerto"){
                    texto_girafa_acerto.stop().play();
                }
				setTimeout(function(){
					movendo(velPgr);
					certo.instrutor.removeClass(efeito.desliza);certo.instrutor.addClass(efeito.zoom.sai);certo.background.removeClass(efeito.aparece1);certo.background.addClass(efeito.desaparece1);balao.position.removeClass(efeito.aparece);	balao.position.addClass(efeito.desaparece);
					setTimeout(function(){
						certo.background.removeClass(efeito.desaparece1).hide();certo.instrutor.removeClass(efeito.zoom.sai).hide();balao.position.removeClass(efeito.desaparece).hide();
					},1000);
				},8000);
			},1000);
		}else if(tipo == "errado"){
			if(vidas != 0){
			setTimeout(function(){
				balao.engine();
				erro.engine();
				setTimeout(function(){
					balao.position.show().addClass("animated "+ efeito.aparece);
					if(audio == "texto-girafa-erro"){
                        texto_girafa_erro.stop().play();
                    }else if(audio == "texto-elefantes-erro"){
                        
                    }
					setTimeout(function(){
						erro.instrutor.removeClass(efeito.desliza);erro.instrutor.addClass(efeito.zoom.sai);erro.background.removeClass(efeito.aparece1);erro.background.addClass(efeito.desaparece1);balao.position.removeClass(efeito.aparece);	balao.position.addClass(efeito.desaparece);
						setTimeout(function(){
							erro.background.removeClass(efeito.desaparece1).hide();erro.instrutor.removeClass(efeito.zoom.sai).hide();balao.position.removeClass(efeito.desaparece).hide();
						},1000);
					},7000);
				},1000);
			},800);
			}else {
				balao.engine();
				gameover.engine();
				setTimeout(function(){
					balao.position.show().addClass("animated "+ efeito.aparece);
					setTimeout(function(){
						//location.href = "index.html";
						sessionStorage.setItem('reiniciar_oed', 'sim');
					},7000);
				},1000);
			}
		}
	} // Função Feedback perfeito
			
	var velPgr = 1000,
		vidas = 5;
	function conteudo(tempo, idPergunta){
		setTimeout(function(){
			$("#"+idPergunta).show().addClass("animated lightSpeedIn");
		},tempo);		
	}

	function marcacao(marcar, elemento){
		if(marcar == "correto"){
			$(elemento).addClass("sucesso").css({"color":"#090"});
			correto.stop().play();
		}else if(marcar == "errado"){
			
			if(vidas === 0){
				if(id == "p1"){
					gameoverp1.stop().play();
					feedback("errado","326px","355px","400px","60px","30px","Seja bem-vindo novamente! Boa sorte em seu novo passeio!");
					document.querySelector(".professorF").style.bottom="20px";
					
				}else if(id == "p2"){
					gameoverp2.stop().play();
					feedback("errado","326px","355px","400px","60px","30px","Seja bem-vinda novamente! Boa sorte em seu novo passeio!");
					document.querySelector(".professorF").style.bottom="20px";
				}
			}else{
				erro.stop().play();
				var retira = "40";
				$(elemento).css({"opacity":".6","color":"#F00","text-decoration":"line-through"}).off("click");
				$(".chances img:first-child").remove();
				$(".chances").css({width: "-="+retira+"px"})
				vidas--; 
			}
		}
	}
	
	$("#id1 ul li").on("click",function(){
		if($(this).hasClass("acerto")){
			marcacao("correto",this);
			
			$("#id1 .resposta1").show().addClass("animated bounceIn");
			setTimeout(function(){
				$("#id1").removeClass("animated lightSpeedIn").addClass("animated lightSpeedOut");
				feedback("correto","314px","375px","365px","60px","30px", "Você acertou! A altura do pescoço da girafa da tela é de 130 cm. Parabéns!","texto-girafa-acerto"); // Carrega feed de acerto
			},2000);
		}else{
			feedback("errado","320px","350px","400px","60px","30px","Infelizmente, esse não é o comprimento do pescoço da girafa.","texto-girafa-erro");
			marcacao("errado",this);
			
		}
	});

	$("#id2 ul li").on("click",function(){
		var este = $(this).children().attr("src");
		if($(this).hasClass("acerto")){
			marcacao("correto",this);
			$("#id2").removeClass("animated lightSpeedIn").addClass("animated lightSpeedOut");
			feedback("correto","248px","327px","420px","275px","170px","Você acertou! A forma de você distribuir as frutas na balança equilibrou-a. Parabéns!<br><br><img src='img/"+este+"' alt=''>","texto-elefantes-acerto"); // Carrega feed de acerto
		}else{
			
			feedback("errado","248px","337px","400px","275px","170px","Infelizmente, a forma de você distribuir as frutas na balança desequilibrou-a.<br><br><img src='img/"+este+"' alt=''>","texto-elefantes-erro");
			marcacao("errado",this);
		}
	});
	
	
	/* ID3 */
	$("#id3 .exercicio ul li:nth-child(1)").draggable({
		revert: true,
		start:function(event,ui){
			click.x = event.clientX;
			click.y = event.clientY;
			$(this).removeClass("recipiente2").addClass("recipiente2-virado");
		},
		drag: function(event, ui) {
			var zoom = scaleFixDrag;
			var original = ui.originalPosition;
			ui.position = {
				left: (event.clientX - click.x + original.left) / zoom,
				top:  (event.clientY - click.y + original.top ) / zoom
			};
		},
		stop:function(event,ui){
			$(this).removeClass("recipiente2-virado").addClass("recipiente2");
		}
	});
	$("#id3 .exercicio ul li:nth-child(2)").draggable({
		revert: true,
		start:function(event,ui){
			click.x = event.clientX;
			click.y = event.clientY;
			$(this).removeClass("recipiente3").addClass("recipiente3-virado");
		},
		drag: function(event, ui) {
			var zoom = scaleFixDrag;
			var original = ui.originalPosition;
			ui.position = {
				left: (event.clientX - click.x + original.left) / zoom,
				top:  (event.clientY - click.y + original.top ) / zoom
			};
		},
		stop:function(event,ui){
			$(this).removeClass("recipiente3-virado").addClass("recipiente3");
		}
	});
	$("#id3 .exercicio ul li:nth-child(3)").draggable({
		revert: true,
		start:function(event,ui){
			click.x = event.clientX;
			click.y = event.clientY;
			$(this).removeClass("recipiente4").addClass("recipiente4-virado");
		},
		drag: function(event, ui) {
			var zoom = scaleFixDrag;
			var original = ui.originalPosition;
			ui.position = {
				left: (event.clientX - click.x + original.left) / zoom,
				top:  (event.clientY - click.y + original.top ) / zoom
			};
		},
		stop:function(event,ui){
			$(this).removeClass("recipiente4-virado").addClass("recipiente4");
		},
	});
	$(".recipiente4").draggable("disable");
	
	$(".preencher-vazio").droppable({ 
		accept:".recipiente3-virado, .recipiente2-virado, .recipiente3, .recipiente2",
		drop:function(event,ui){
			var id = ui.draggable.attr("name");
			
			if(id == "recipiente3"){
				$(this).hide();
				$(".preencher-medio").show();
				ui.draggable.css({"background":"url(img/rec3-vazio.png) no-repeat"});
				
				setTimeout(function(){
					$(".recipiente4").show();
					$(".recipiente3").hide();
					$(".preencher-vazio").hide();
				},600);
			}else{
				feedback("errado","320px","345px","400px","60px","30px","Infelizmente, você colocou a quantidade incorreta de água. Tente novamente.","texto-camelo-erro");
				marcacao("errado","a");
			}
		}
	});
	$(".preencher-medio").droppable({ 
		accept:".recipiente4-cheio, .recipiente2-virado",
		drop:function(event,ui){
			var id = ui.draggable.attr("name");
			
			if(id == "recipiente4"){
				$(this).hide();
				$(".preencher-cheio").show();
				$("#id3 .exercicio ul li:nth-child(3)").removeClass("recipiente4-cheio").addClass("recipiente4-vazio");
				$("#id3 .exercicio ul li:nth-child(1)").draggable("disable");
				$("#id3 .exercicio ul li:nth-child(2)").draggable("disable");
				$("#id3 .exercicio ul li:nth-child(3)").draggable("disable");
				setTimeout(function(){
					$("#id3 .exercicio li:first-child").addClass("sucesso");
					marcacao("correto",this);
					$("#id3").removeClass("animated lightSpeedIn").addClass("animated lightSpeedOut");
					feedback("correto","320px","363px","385px","60px","30px","Muito bem, você acertou a quantidade de água para dar ao camelo!","texto-camelo-acerto"); // Carrega feed de acerto
				},2000);
			}else{
				feedback("errado","320px","345px","400px","60px","30px","Infelizmente, você colocou a quantidade incorreta de água. Tente novamente.","texto-camelo-erro");
				marcacao("errado","a");
			}
		}
	});
	$(".recipiente2").droppable({ 
		accept:".recipiente3-virado, .recipiente3, .recipiente4, .recipiente4-virado",
		drop:function(){
			feedback("errado","320px","345px","400px","60px","30px","Infelizmente, você colocou a quantidade incorreta de água. Tente novamente.","texto-camelo-erro");
			marcacao("errado","a");
		}
	});
	$(".recipiente3").droppable({ 
		accept:".recipiente2-virado",
		drop:function(){
			feedback("errado","320px","345px","400px","60px","30px","Infelizmente, você colocou a quantidade incorreta de água. Tente novamente.","texto-camelo-erro");
			marcacao("errado","a");
		}
	});
	$(".recipiente4").droppable({ 
		accept:".recipiente2-virado, .recipiente2",
		drop:function(event,ui){
			$("#id3 .exercicio ul li:nth-child(1)").css({"background":"url(img/rec2-medio.png) no-repeat"});
			$(this).removeClass("recipiente4").addClass("recipiente4-cheio");
			$(".recipiente4-cheio").draggable("enable");
		}
	});
	
	/*ID4*/
	$("#id4 ul li").on("click",function(){
		if($(this).hasClass("acerto")){
			marcacao("correto",this);
			$(".metrica").animate({margin:"275px 0 0 94px",width:"251px"},1000);
			setTimeout(function(){
				$("#id4").removeClass("animated lightSpeedIn").addClass("animated lightSpeedOut");
				feedback("correto","320px","257px","490px","60px","30px","Você acertou! A fita métrica é mais adequada para medir a distância entre as pegadas. Parabéns!","texto-gorila-acerto"); // Carrega feed de acerto
			},3500);
		}else{
			var este = $(this).children().attr("src");
			feedback("errado","325px","355px","380px","87px","60px","Infelizmente, este não é o instrumento mais adequado para medir a distância entre as pegadas. Tente novamente.","texto-gorila-erro");
			marcacao("errado",this);
		}
	});
	
	/*ID5*/
	$("#id5 ul li").on("click",function(){
		if($(this).hasClass("acerto")){
			marcacao("correto",this);
			$("#id5 .exercicio h2 img").hide(200, function(){
				$("#id5 .exercicio h2 span").text("4 kg").show(200);
			});
			
			setTimeout(function(){
				$("#id5").removeClass("animated lightSpeedIn").addClass("animated lightSpeedOut");
				feedback("correto","320px","368px","380px","60px","30px","Você acertou! Juntos, os tigres comem 4 kg de carne por dia. Parabéns!","texto-tigre-acerto"); // Carrega feed de acerto
			},3000);
		}else{
			var este = $(this).children().attr("src");
			feedback("errado","320px","345px","400px","60px","30px","Infelizmente, não é essa a quantidade de carne que comem por dia.","texto-tigre-erro");
			marcacao("errado",this);
		}
	});

	/*ID6*/
	$("#id6 ul li").on("click",function(){
		if($(this).hasClass("acerto")){
			marcacao("correto",this);
			$("#id6 .exercicio span").show(400);
			setTimeout(function(){
				$("#id6").removeClass("animated lightSpeedIn").addClass("animated lightSpeedOut");
				feedback("correto","320px","403px","345px","60px","30px","Você acertou! Eles dormem 8 horas diariamente. Parabéns!","texto-urso-acerto"); // Carrega feed de acerto
			},2000);
		}else{
			var este = $(this).children().attr("src");
			feedback("errado","320px","345px","450px","60px","30px","Infelizmente, esse não é o tempo que os ursos dormem diariamente. Tente novamente.","texto-urso-erro");
			marcacao("errado",this);
		}
	});

	/*ID7*/
	$("#id7 ul li").on("click",function(){
		if($(this).hasClass("acerto")){
			marcacao("correto",this);
			$("#id7 .exercicio h2 img").hide(200, function(){
				$("#id7 .exercicio h2 span").text("600").show(200);
			});
			
			setTimeout(function(){
				$("#id7").removeClass("animated lightSpeedIn").addClass("animated lightSpeedOut");
				feedback("correto","320px","370px","375px","60px","30px","Você acertou! Elas chegam a percorrer 600 km por dia. Parabéns!","texto-andorinha-acerto"); // Carrega feed de acerto
			},3000);
		}else{
			var este = $(this).children().attr("src");
			feedback("errado","320px","345px","400px","60px","30px","Infelizmente, essa não é a quantidade percorrida em um dia.","texto-andorinha-erro");
			marcacao("errado",this);
		}
	});
	
	/*ID8*/
	$("#id8 ul li").on("click",function(){
		if($(this).hasClass("acerto")){
			marcacao("correto",this);
			$("#id8").removeClass("animated lightSpeedIn").addClass("animated lightSpeedOut");
			feedback("correto","320px","360px","385px","60px","30px","Você acertou! Foram 3 horas de passeio no zoológico. Parabéns!","texto-relogio-acerto"); // Carrega feed de acerto
		}else{
			var este = $(this).children().attr("src");
			feedback("errado","320px","265px","400px","60px","30px","Infelizmente, não foi esse o tempo que durou seu passeio no zoológico.","texto-relogio-erro");
			marcacao("errado",this);
		}
	});
	//Variáveis da capa
	var 
	capa = {
		imagem: $("#capa"),
		cabecalho: $("#capa .header"),
		subcapa: $("#capa .subheader"),
		tituloCabecalho: $("#capa .header h1"),
		botaoIniciar: $("#capa .acoes div:first-child"),
		botaoCredito: $("#capa .acoes div:nth-child(2)"),
		creditos: {
			janela: $("#creditos"),
			texto: $(".text-creditos"),
			botaoFechar: $(".btnFechaCreditos")
		}
	}
	// Variáveis do menu Opções do Objeto
	var 
	opcoes = {
		ativo:0,
		tool: $(".actionOptions"),
		botoes: $("#navOptions"),
		overlay: $(".overlayOptions"),
		menu: {
			geral: $("#navOptions li"),
			background: $("#btnOptions"),
			atualizar: $(".imghome"),
			principal: $(".btnMenu"),
			som: $(".btnSom"),
			somOff: $(".btnSomOff"),
			instrucoes: $(".btnInstrucoes")
		},
		cntInstrucoes: $("#instrucoes"),
		textoInstrucoes: "Selecione um personagem para iniciar o passeio."
	}
	
	//Carrega Capa
	capa.cabecalho.show().addClass("animated slideInRight");
	capa.tituloCabecalho.text(config.titulo);
	setTimeout(function(){
		capa.subcapa.css({"margin-top":"-222px",opacity:"1"});
		capa.botaoIniciar.show().addClass("animated lightSpeedIn");
		setTimeout(function(){capa.botaoIniciar.removeClass("animated lightSpeedIn");},1000);
		capa.botaoCredito.delay(500).fadeIn(500);
	},1000);
			
	
// --------------------------- Botões Padrões
	// Inicia Objeto
	//capa.botaoIniciar.on("click",function(){
		function iniciar_oed_funcoes(){
		capa.cabecalho.css({marginTop:"-380px"});
		capa.botaoIniciar.css({width:"0", marginRight:"-50px"});
		capa.botaoCredito.css({marginLeft:"250px"});
        musica.stop().play();
		setTimeout(function(){
			capa.imagem.fadeOut(300,function(){
			setTimeout(function(){
				capa.imagem.fadeOut(300,function(){
					$(this).remove();
					//audioTrilha.get(0).play();
					setTimeout(function(){
						$("#bemvindo").show().addClass("animated fadeInUp");
						setTimeout(function(){
							personagem1.seletor.show(0).addClass("animated fadeInUp");
							setTimeout(function(){
								personagem2.seletor.show(0).addClass("animated fadeInUp");
								setTimeout(function(){
                                    musica.volume(.3);
									$(".personagem1, .personagem2").removeClass("fadeInUp");
									$("#bemvindo").removeClass("animated fadeInUp");
									$(".professor").show().addClass("animated fadeInUp");
									setTimeout(function(){
										$("#bemvindo .fala").show().addClass("animated fadeInUp");
										som_bemvindo.stop().play();
										personagem1.seletor.on({
											mouseover:function(){
												$(this).find("img").attr("src","img/personagem1-hover.png")
												$(this).addClass("animated bounce")
											},
											mouseleave:function(){
												$(this).find("img").attr("src","img/personagem1.png")
												$(this).removeClass("animated bounce")
											}
										});
										personagem2.seletor.on({
											mouseover:function(){
												$(this).find("img").attr("src","img/personagem2-hover.png")
												$(this).addClass("animated bounce")
											},
											mouseleave:function(){
												$(this).find("img").attr("src","img/personagem2.png")
												$(this).removeClass("animated bounce")
											}
										});
										personagem1.seletor.on({
											click:function(){
                                                som_bemvindo.stop();
												id = "p1";
												personagem1.seletor.off("click");
												$("#bemvindo").addClass("animated fadeOutDown");
												setTimeout(function(){
													$("#bemvindo").remove();
													$(".pgrMap1-"+id).fadeIn(500);
												},1000);
												$(".pergunta .chances").children("img").attr("src","img/vida-"+id+".png");
												movendo(3500);
												opcoes.textoInstrucoes = "Clique nos elementos na tela para responder às perguntas."
											}
										})
										personagem2.seletor.on({
											click:function(){
                                                som_bemvindo.stop();
												id = "p2";
												personagem2.seletor.off("click");
												$("#bemvindo").addClass("animated fadeOutDown");
												setTimeout(function(){
													$("#bemvindo").remove();
													$(".pgrMap1-"+id).fadeIn(500);
												},1000);
												$(".pergunta .chances").children("img").attr("src","img/vida-"+id+".png");
												movendo(3500);
												opcoes.textoInstrucoes = "Clique nos elementos na tela para responder às perguntas."
											}
										})
									},500);
								},500);
							},300);
						},500);
					},1000);
					
				});
			},400);
			});
		},800);
	};
	
	// Botão Volta pra capa
	opcoes.menu.atualizar.on("click",function(){
		//location.href="index.html"
		sessionStorage.setItem('reiniciar_oed', 'sim');
	});
	
	verificar_inicio();
	function verificar_inicio(){
	  verificar_inicio_cnd = setInterval(function(){
	  if(window.sessionStorage.getItem('iniciar_oed')=='sim'){
		  //alert("iniciar_oed");
	      //startGame.init();
		  iniciar_oed_funcoes();
	      clearInterval(verificar_inicio_cnd);
	    }
	  }, 1000);
	}
}

	function iniciar_com_tap(){
        iniciar_oed_funcoes();
	clearInterval(verificar_inicio_cnd);
}
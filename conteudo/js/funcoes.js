var verificar_inicio_cnd;
var txtLvl = 0;

var musica = new Howl({
    urls: ['media/audio/musica.mp3'],
    volume: 1,
    onend: function() {
        musica.stop().play();
    }
});
var narracao = new Howl({
    urls: ['media/audio/narracao.mp3'],
    sprite: {
        loading: [0, 186],
        
        intro: [0, 16700],
        gameover_garoto: [17400, 4700],
        gameover_garota: [23200, 4800],
        
        final: [29200, 11700],
        correto: [42622, 2900],
        errado: [48000, 2000],
    },
    onend: function() {
        $('.personagem1').addClass('dly0 atencao');
        $('.personagem2').addClass('dly1 atencao');
    }
});

var narracao1 = new Howl({
    urls: ['media/audio/narracao1.mp3'],
    sprite: {
        loading: [0, 186],
        
        girafa: [242, 19187],
        girafa_certo: [19652, 8312],
        girafa_errado: [28411, 4774],
        
        elefante: [33993, 17620],
        elefante_certo: [52424, 6911],
        elefante_errado: [60555, 5777],
        
        camelo: [67900, 22046],
        camelo_certo: [91900, 4814],
        camelo_errado: [98500, 5865],
        
        gorila: [106105, 28000],
        gorila_certo: [136460, 7700],
        gorila_errado: [146116, 8146],
    }
});

var narracao2 = new Howl({
    urls: ['media/audio/narracao2.mp3'],
    sprite: {
        loading: [0, 186],

        tigre: [274, 23000],
        tigre_certo: [24200, 6700],
        tigre_errado: [31800, 4750],
        
        urso: [38350, 37250],
        urso_certo: [77200, 5750],
        urso_errado: [85000, 6000],
        
        andorinha: [93400, 18750],
        andorinha_certo: [114100, 7000],
        andorinha_errado: [122412, 4600],
        
        relogio: [128700, 6900],
        relogio_certo: [138515, 5800],
        relogio_errado: [147600, 4700],
    }
});

// Executa esta função "start" após o carregamento das imagens

var personagem1 = {
    seletor:$(".personagem1")

}
var personagem2 = {
    seletor:$(".personagem2")
}
	
	
function movendo(tempoExe){
    musica.volume(1);
    setTimeout(function(){
        if($(".sucesso").length == "0"){
            conteudo(100, "id1");
        }else if($(".sucesso").length == "1"){
            $(".pgrMap2-"+id).fadeIn(500);
            conteudo(1000, "id2");
        }else if($(".sucesso").length == "2"){
            $(".pgrMap3-"+id).fadeIn(500);
            conteudo(1000, "id3");
            txtLvl = 1;
        }else if($(".sucesso").length == "3"){
            $(".pgrMap4-"+id).fadeIn(500);
            txtLvl = 0;
            conteudo(2000, "id4");
        }else if($(".sucesso").length == "4"){
            $(".pergunta .exercicio").css({background:"rgba(255,255,255,.9) url(img/tigre.png) no-repeat bottom center"});
            $(".pgrMap5-"+id).fadeIn(500);
            conteudo(2000, "id5");
        }else if($(".sucesso").length == "5"){
            $(".pergunta .exercicio").css({background:"rgba(255,255,255,.9) no-repeat"});
            $(".pgrMap6-"+id).fadeIn(500);
            conteudo(2000, "id6");
        }else if($(".sucesso").length == "6"){
            $(".pgrMap7-"+id).fadeIn(500);
            $(".pergunta .exercicio").css({background:"url(img/bgPerguntaId7.jpg) no-repeat"});
            conteudo(2000, "id7");
        }else if($(".sucesso").length == "7"){
            $(".pergunta .descricao").hide();
            $(".pergunta .exercicio").css({width:"910px", background:"rgba(255,255,255,.9) no-repeat"});
            $(".pgrMap8-"+id).fadeIn(500);
            conteudo(2000, "id8");
        }else if($(".sucesso").length == "8"){
            narracao.stop().play("final");
            $(".pgrMap9-"+id).show().addClass("animated fadeInDown");
            setTimeout(function(){
                $(".fala2").show().addClass("animated fadeInUp");
            },1500);

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
            if(audio == "girafac"){
                narracao1.stop().play("girafa_certo");
            }else if(audio == "elefantec"){
                narracao1.stop().play("elefante_certo");
            }else if(audio == "cameloc"){
                narracao1.stop().play("camelo_certo");
            }else if(audio == "gorilac"){
                narracao1.stop().play("gorila_certo");
            }else if(audio == "tigrec"){
                narracao2.stop().play("tigre_certo");
            }else if(audio == "ursoc"){
                narracao2.stop().play("urso_certo");
            }else if(audio == "andorinhac"){
                narracao2.stop().play("andorinha_certo");
            }else if(audio == "relogioc"){
                narracao2.stop().play("relogio_certo");
            }
            setTimeout(function(){
                movendo(velPgr);
                certo.instrutor.removeClass(efeito.desliza);
                certo.instrutor.addClass(efeito.zoom.sai);
                certo.background.removeClass(efeito.aparece1);
                certo.background.addClass(efeito.desaparece1);
                balao.position.removeClass(efeito.aparece);
                balao.position.addClass(efeito.desaparece);
                setTimeout(function(){
                    certo.background.removeClass(efeito.desaparece1).hide();
                    certo.instrutor.removeClass(efeito.zoom.sai).hide();
                    balao.position.removeClass(efeito.desaparece).hide();
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
                if(audio == "girafae"){
                    narracao1.stop().play("girafa_errado");
                }else if(audio == "elefantee"){
                    narracao1.stop().play("elefante_errado");
                }else if(audio == "cameloe"){
                    narracao1.stop().play("camelo_errado");
                }else if(audio == "gorilae"){
                    narracao1.stop().play("gorila_errado");
                }else if(audio == "tigree"){
                    narracao2.stop().play("tigre_errado");
                }else if(audio == "ursoe"){
                    narracao2.stop().play("urso_errado");
                }else if(audio == "andorinhae"){
                    narracao2.stop().play("andorinha_errado");
                }else if(audio == "relogioe"){
                    narracao2.stop().play("relogio_errado");
                }
                setTimeout(function(){
                    erro.instrutor.removeClass(efeito.desliza);
                    erro.instrutor.addClass(efeito.zoom.sai);
                    erro.background.removeClass(efeito.aparece1);
                    erro.background.addClass(efeito.desaparece1);
                    balao.position.removeClass(efeito.aparece);
                    balao.position.addClass(efeito.desaparece);
                    setTimeout(function(){
                        erro.background.removeClass(efeito.desaparece1).hide();
                        erro.instrutor.removeClass(efeito.zoom.sai).hide();
                        balao.position.removeClass(efeito.desaparece).hide();
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
            musica.volume(.2);
            if(idPergunta == "id1") narracao1.stop().play("girafa");
            if(idPergunta == "id2") narracao1.stop().play("elefante");
            if(idPergunta == "id3") narracao1.stop().play("camelo");
            if(idPergunta == "id4") narracao1.stop().play("gorila");
            if(idPergunta == "id5") narracao2.stop().play("tigre");
            if(idPergunta == "id6") narracao2.stop().play("urso");
            if(idPergunta == "id7") narracao2.stop().play("andorinha");
            if(idPergunta == "id8") narracao2.stop().play("relogio");
            if(idPergunta == "id9") narracao.stop().play("final");
		},tempo);		
	}

	function marcacao(marcar, elemento){
		if(marcar == "correto"){
			$(elemento).addClass("sucesso").css({"color":"#090"});
			narracao.stop().play("correto");
		}else if(marcar == "errado"){
			
			if(vidas === 0){
				if(id == "p1"){
                    narracao1.stop();
                    narracao2.stop();
					narracao.stop().play("gameover_garoto");
					feedback("errado","326px","317px","400px","60px","30px","Seja bem-vindo novamente! Boa sorte em seu novo passeio!");
					document.querySelector(".professorF").style.bottom="20px";
					
				}else if(id == "p2"){
                    narracao1.stop();
                    narracao2.stop();
                    narracao.stop().play("gameover_garota");
					feedback("errado","326px","317px","400px","60px","30px","Seja bem-vinda novamente! Boa sorte em seu novo passeio!");
					document.querySelector(".professorF").style.bottom="20px";
				}
			}else{
				narracao.stop().play("errado");
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
				feedback("correto","314px","375px","365px","60px","30px", "Você acertou! A altura do pescoço da girafa da tela é de 130 cm. Parabéns!","girafac"); // Carrega feed de acerto
			},2000);
		}else{
			feedback("errado","320px","350px","400px","60px","30px","Infelizmente, esse não é o comprimento do pescoço da girafa.","girafae");
			marcacao("errado",this);
			
		}
	});

	$("#id2 ul li").on("click",function(){
		var este = $(this).children().attr("src");
		if($(this).hasClass("acerto")){
			marcacao("correto",this);
			$("#id2").removeClass("animated lightSpeedIn").addClass("animated lightSpeedOut");
			feedback("correto","248px","327px","420px","275px","170px","Você acertou! A forma de você distribuir as frutas na balança equilibrou-a. Parabéns!<br><br><img src='img/"+este+"' alt=''>","elefantec"); // Carrega feed de acerto
		}else{
			
			feedback("errado","248px","337px","400px","275px","170px","Infelizmente, a forma de você distribuir as frutas na balança desequilibrou-a.<br><br><img src='img/"+este+"' alt=''>","elefantee");
			marcacao("errado",this);
		}
	});
	
	
	/* ID3 */
	$("#id3 .exercicio ul li:nth-child(1)").draggable({
		revert: true,
		start:function(event,ui){
			$(this).removeClass("recipiente2").addClass("recipiente2-virado");
		},
		stop:function(event,ui){
			$(this).removeClass("recipiente2-virado").addClass("recipiente2");
		}
	});
	$("#id3 .exercicio ul li:nth-child(2)").draggable({
		revert: true,
		start:function(event,ui){
			$(this).removeClass("recipiente3").addClass("recipiente3-virado");
		},
		stop:function(event,ui){
			$(this).removeClass("recipiente3-virado").addClass("recipiente3");
		}
	});
	$("#id3 .exercicio ul li:nth-child(3)").draggable({
		revert: true,
		start:function(event,ui){
			$(this).removeClass("recipiente4").addClass("recipiente4-virado");
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
				feedback("errado","320px","345px","400px","60px","30px","Infelizmente, você colocou a quantidade incorreta de água. Tente novamente.","cameloe");
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
					feedback("correto","320px","363px","385px","60px","30px","Muito bem, você acertou a quantidade de água para dar ao camelo!","cameloc"); // Carrega feed de acerto
				},1000);
			}else{
				feedback("errado","320px","345px","400px","60px","30px","Infelizmente, você colocou a quantidade incorreta de água. Tente novamente.","cameloe");
				marcacao("errado","a");
			}
		}
	});
	$(".recipiente2").droppable({ 
		accept:".recipiente3-virado, .recipiente3, .recipiente4, .recipiente4-virado",
		drop:function(){
			feedback("errado","320px","345px","400px","60px","30px","Infelizmente, você colocou a quantidade incorreta de água. Tente novamente.","cameloe");
			marcacao("errado","a");
		}
	});
	$(".recipiente3").droppable({ 
		accept:".recipiente2-virado",
		drop:function(){
			feedback("errado","320px","345px","400px","60px","30px","Infelizmente, você colocou a quantidade incorreta de água. Tente novamente.","cameloe");
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
				feedback("correto","320px","257px","490px","60px","30px","Você acertou! A fita métrica é mais adequada para medir a distância entre as pegadas. Parabéns!","gorilac"); // Carrega feed de acerto
			},2500);
		}else{
			var este = $(this).children().attr("src");
			feedback("errado","325px","355px","380px","87px","60px","Infelizmente, este não é o instrumento mais adequado para medir a distância entre as pegadas. Tente novamente.","gorilae");
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
				feedback("correto","320px","368px","380px","60px","30px","Você acertou! Juntos, os tigres comem 4 kg de carne por dia. Parabéns!","tigrec"); // Carrega feed de acerto
			},2000);
		}else{
			var este = $(this).children().attr("src");
			feedback("errado","320px","345px","400px","60px","30px","Infelizmente, não é essa a quantidade de carne que comem por dia.","tigree");
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
				feedback("correto","320px","403px","345px","60px","30px","Você acertou! Eles dormem 8 horas diariamente. Parabéns!","ursoc"); // Carrega feed de acerto
			},2000);
		}else{
			var este = $(this).children().attr("src");
			feedback("errado","320px","305px","450px","60px","30px","Infelizmente, esse não é o tempo que os ursos dormem diariamente. Tente novamente.","ursoe");
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
				feedback("correto","320px","370px","375px","60px","30px","Você acertou! Elas chegam a percorrer 600 km por dia. Parabéns!","andorinhac"); // Carrega feed de acerto
			},3000);
		}else{
			var este = $(this).children().attr("src");
			feedback("errado","320px","345px","400px","60px","30px","Infelizmente, essa não é a quantidade percorrida em um dia.","andorinhae");
			marcacao("errado",this);
		}
	});
	
	/*ID8*/
	$("#id8 ul li").on("click",function(){
		if($(this).hasClass("acerto")){
			marcacao("correto",this);
			$("#id8").removeClass("animated lightSpeedIn").addClass("animated lightSpeedOut");
			feedback("correto","320px","360px","385px","60px","30px","Você acertou! Foram 3 horas de passeio no zoológico. Parabéns!","relogioc"); // Carrega feed de acerto
		}else{
			var este = $(this).children().attr("src");
			feedback("errado","320px","265px","400px","60px","30px","Infelizmente, não foi esse o tempo que durou seu passeio no zoológico.","relogioe");
			marcacao("errado",this);
		}
	});

startGame = {
    init:function(){
        musica.stop().play();
        $(".professor").fadeIn(1000,function(){
            $("#bemvindo .fala").show().addClass("animated fadeInUp");
            narracao.stop().play("intro");
            musica.volume(.2);
        });
    }
}

$(".personagem1").on({
    mouseover:function(){
        $(this).find("img").attr("src","img/personagem1-hover.png")
        $(this).addClass("animated bounce")
    },
    mouseleave:function(){
        $(this).find("img").attr("src","img/personagem1.png")
        $(this).removeClass("animated bounce")
    },
    click:function(){
        narracao.stop();
        id = "p1";
        $(".personagem1").off("click");
        $("#bemvindo").addClass("animated fadeOutDown");
        setTimeout(function(){
            $("#bemvindo").remove();
            $(".pgrMap1-"+id).fadeIn(500);
        },1000);
        $(".pergunta .chances").children("img").attr("src","img/vida-"+id+".png");
        movendo(3500);
    }
});
$(".personagem2").on({
    mouseover:function(){
        $(this).find("img").attr("src","img/personagem2-hover.png")
        $(this).addClass("animated bounce")
    },
    mouseleave:function(){
        $(this).find("img").attr("src","img/personagem2.png")
        $(this).removeClass("animated bounce")
    },
    click:function(){
        narracao.stop();
        id = "p2";
        $(".personagem2").off("click");
        $("#bemvindo").addClass("animated fadeOutDown");
        setTimeout(function(){
            $("#bemvindo").remove();
            $(".pgrMap1-"+id).fadeIn(500);
        },1000);
        $(".pergunta .chances").children("img").attr("src","img/vida-"+id+".png");
        movendo(3500);
    }
});
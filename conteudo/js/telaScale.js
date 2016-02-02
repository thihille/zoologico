var scaleFixDrag;
var click = {
    x: 0,
    y: 0
};
function telaScale() {
    var elemento = $('.container');

    var larguraJanela = $(window).width();
    var alturaJanela = $(window).height();
    var larguraInicialElemento = 1024;
    var alturaInicialElemento = 660;
    var relacaoAspecto = larguraInicialElemento / alturaInicialElemento;

	if(alturaJanela <= larguraJanela) {
		var alturaRedimensionada = alturaJanela;
		var larguraRedimensionada = alturaRedimensionada * relacaoAspecto;
		if (larguraJanela < larguraRedimensionada) {
			var larguraRedimensionada = larguraJanela;
			var alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
		}
	}else {
		var larguraRedimensionada = larguraJanela;
		var alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
	}
	
	var escalaLargura = ((larguraRedimensionada / larguraInicialElemento) * 100) / 100.1;
	var escalaAltura = ((alturaRedimensionada / alturaInicialElemento) * 100) / 100.1;
	if(escalaLargura <= 1){
		elemento.css({
			'-webkit-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'-moz-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'-ms-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'-o-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')'
		});
	}else{
		elemento.css({
			'-webkit-transform': 'scale(1))',
			'-moz-transform': 'scale(1)',
			'-ms-transform': 'scale(1)',
			'-o-transform': 'scale(1)',
			'transform': 'scale(1)'
		});
	}
	scaleFixDrag = escalaLargura;
};
/*
INSERIR ESTE CODIGO DO DRAG ABAIXO PARA CORRIGIR A PROPORÇÃO DA SCALA X DRAG
	objetoDragavel.draggable({
		CODIGO ABAIXO
		//////////////////////////////////////////////////////////////////////////////////////////			
		start: function(event) {
			click.x = event.clientX;
			click.y = event.clientY;
		},
		drag: function(event, ui) {
			var zoom = scaleFixDrag;
			var original = ui.originalPosition;
			ui.position = {
				left: (event.clientX - click.x + original.left) / zoom,
				top:  (event.clientY - click.y + original.top ) / zoom
			};
		}
		//////////////////////////////////////////////////////////////////////////////////////////
	});
*/

//FUNCTION DO BOTÃO INICIAR JOGO
function iniciarJogo() {
	var jogador1 = document.getElementById('nick01').value;
	var jogador2 = document.getElementById('nick02').value;

	document.getElementById('txtNomeJogador1').value = jogador1;

	if (document.getElementById('nome02').value != '' &&
	document.getElementById('nick02').value != '' &&
	document.getElementById('idade02').value != '' ) {
		document.getElementById('txtNomeJogador2').value = jogador2;
	} else {
		document.getElementById('txtNomeJogador2').value = 'CPU';
	}
	
	$('#bodyPage').removeClass("backgroundStyle");
	$('#bodyPage').addClass("backgroundStyle2");
	
	$('#divInicial').hide();
	$('#alerta').show();
	
	setTimeout(function () {
        $('#alerta').hide();
		$('#divJogo').show();
    }, 2500);
}

//FUNCTION PARA OBTER FUNÇÃO ALEATÓRIA
function obterNumeroAleatorio(n1, n2) {
	const min = Math.ceil(n1);
	const max = Math.floor(n2);
	return Math.floor(Math.random() * (max - min)) + min;
}

//FUNCTION DO BOTÃO GIRAR DADOS
function sorteio() {
	console.log('entrou');
	var sorteio = obterNumeroAleatorio(1, 7);

	if (sorteio == 1) {
		console.log("teste")
		document.getElementById("dado").src ="Imagens/face1.png";
	} else if (sorteio == 2) {
		console.log("teste1")
		document.getElementById("dado").src ="Imagens/face2.png";
	} else if  (sorteio == 3) {
		console.log("teste2")
		document.getElementById("dado").src ="Imagens/face3.png";
	} else if  (sorteio == 4) {
		console.log("teste3")
		document.getElementById("dado").src ="Imagens/face4.png"; 
	} else if  (sorteio == 5) {
		console.log("teste4")
		document.getElementById("dado").src ="Imagens/face5.png";
	} else if  (sorteio == 6) {
		console.log("teste5")
		document.getElementById("dado").src ="Imagens/face6.png";
	} else { 
		console.log("teste6")
		document.getElementById("dado").src ="Imagens/face1.png"; 
	}
	
	$('#girar').prop('disabled', true);
	$('#girar2').prop('disabled', false);
	
	document.getElementById('hdnValorPlacar1').value = sorteio;
}   

function decisao() {
	var sorteio2 = obterNumeroAleatorio(1, 7);
	var nmrSorteio1 = document.getElementById('hdnValorPlacar1').value;
	console.log('valor sorteio 1');
	console.log(nmrSorteio1);
	console.log(sorteio2);
	
// VARIÁVEIS PARA PEGAR O VALUE DA INPUT DO PLACAR	
	var placar1 = document.getElementById('placar1').value;
	var placar2 = document.getElementById('placar2').value;

// VARIÁVEIS PARA PEGAR O NOME DOS JOGADORES
	var jogadorPri = document.getElementById('txtNomeJogador1').value;
	var jogadorSeg = document.getElementById('txtNomeJogador2').value;
	
/* === IF'S PARA VERIFICAR QUAL IMG DE DADO IRÁ APARECER NA TELA, DE ACORDO COM O NÚMERO ALEATÓRIO GERADO E ARMAZENADO
	NA VARIÁVEL DE SORTEIO2 === */
	if (sorteio2 == 1) {
		console.log('1');
		document.getElementById("dado3").src ="Imagens/face1.png";
	} else if (sorteio2 == 2) {
		console.log('2');
		document.getElementById("dado3").src ="Imagens/face2.png";
	} else if  (sorteio2 == 3) {
		console.log('3');
		document.getElementById("dado3").src ="Imagens/face3.png";
	} else if  (sorteio2 == 4) {
		console.log('4');
		document.getElementById("dado3").src ="Imagens/face4.png"; 
	} else if  (sorteio2 == 5) {
		console.log('5');
		document.getElementById("dado3").src ="Imagens/face5.png";
	} else if  (sorteio2 == 6) {
		console.log('6');
		document.getElementById("dado3").src ="Imagens/face6.png";
	} else {
		console.log('7');
		document.getElementById("dado3").src ="Imagens/face1.png";
	}  

// VERIFICAR QUAL JOGADOR FEZ O PONTO DA RODADA
	if(nmrSorteio1 !='' && sorteio2 !='') {
		if(nmrSorteio1 > sorteio2) {
			/* VARIAVEL NUMERO 1 MAIOR QUE O NUMERO 2, ENTAO O CAMPO DO PLACAR
			DO JOGADOR 2, SUBTRAI 1 */
			
			$('.labelPontuacao').html('Ponto para \n' + jogadorPri);
			$('#colpontuacao').addClass('pontuacao');
			$('#colpontuacao').removeClass('pontuacao1');
			$('#pontuacao').show();
			document.getElementById("placar2").value=placar2-1;
			var placar2 = document.getElementById('placar2').value
			console.log(placar2)

			document.getElementById('hdnValorPlacar1').value = '';
			sorteio2 = '';
			$('#girar2').prop('disabled', true);
			$('#girar').prop('disabled', false);
		} else if (sorteio2 > nmrSorteio1) {
			/* VARIAVEL NUMERO 2 MAIOR QUE O NUMERO 1, ENTAO O CAMPO DO PLACAR
			DO JOGADOR 1, SUBTRAI 1 */
			document.getElementById("placar1").value = placar1 - 1;
			var placar1 = document.getElementById('placar1').value;
			console.log(placar1);
			
			$('.labelPontuacao').html('Ponto para \n' + jogadorSeg);
			$('#colpontuacao').addClass('pontuacao');
			$('#colpontuacao').removeClass('pontuacao1');
			$('#pontuacao').show();
			document.getElementById('hdnValorPlacar1').value = '';
			sorteio2 = '';
			$('#girar2').prop('disabled', true);
			$('#girar').prop('disabled', false);
		} else if (nmrSorteio1 == sorteio2) {
			$('.labelPontuacao').html('Empate');
			$('#pontuacao').addClass('pontuacao1');
			$('#colpontuacao').removeClass('pontuacao');
			$('#colpontuacao').show();
			$('#girar2').prop('disabled', true);
			$('#girar').prop('disabled', false);
		}
	}
		
// CONCLUSÃO DO JOGO - VERIFICAR SE ALGUM DOS PLACARES ZEROU
	if (placar1 == 0 || placar2 == 0) {
		var nomeJogador1 = document.getElementById('txtNomeJogador1').value;
		var nomeJogador2 = document.getElementById('txtNomeJogador2').value;

		$('#girar').hide();
		$('#girar1').hide();
		$('#pontuacao').hide();
		$('#reiniciar').show();
		$('#voltar').show();

		if (placar1 == 0) {
			$('#jogador2').html(nomeJogador2 + '\n GANHOU!!!');
			$('#divJogo').hide();
			$('#pontuacao').hide();
			$('#ganhadores').show();
			$('#Btnreiniciar').show();
			$('#jogador2').show();
		} else if (placar2 == 0) {
			$('#jogador1').html(nomeJogador1 + '\n GANHOU!!!');
			$('#divJogo').hide();
			$('#pontuacao').hide();
			$('#ganhadores').show();
			$('#Btnreiniciar').show();
			$('#jogador1').show();
		}
	} 
}

//FUNCTION PARA INPUT ACEITAR APENAS NÚMEROS
function somenteNumeros(e) {
	var charCode = e.charCode ? e.charCode : e.keyCode;
	// charCode 8 = backspace   
	// charCode 9 = tab
	if (charCode != 8 && charCode != 9) {
		// charCode 48 equivale a 0   
		// charCode 57 equivale a 9
		if (charCode < 48 || charCode > 57) {
			return false;
		}
	}
}

//FUNCTION DO PRIMEIRO BOTÃO OK 
function ok1() {
	if (document.getElementById('nome01').value != '' &&
		document.getElementById('nick01').value != '' &&
		document.getElementById('idade01').value != '' ) {
			$('#iniciar').show(); 
	} else {
		alert("preencha todos os campos")
	}
}

function reinicia () {
	document.getElementById('placar1').value = 10;
	document.getElementById('placar2').value = 10;
	document.getElementById('placar2').value = 10;
	
	$('.labelPontuacao').html('Começar');
	
	$('#pontuacao').show();
	$('#divJogo').show();
	$('#girar').show();
	$('#Btnreiniciar').hide();
	$('#jogador2').hide();
	$('#jogador1').hide();
	$('#ganhadores').hide();
}
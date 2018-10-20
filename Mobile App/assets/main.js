function toSecondScreen(){
	var element = document.getElementById('firstScreen');
	var element2 = document.getElementById('secondScreen');
	element.className +=" animated bounceOutUp";
	setTimeout(function(){
		element.style.display="none";
		element2.style.display ="block";
		element2.className +=" animated bounceInUp";
	},820);
}

function showContentScreen(i){

	var sc1 = document.getElementById("firstContentScreen");
	var sc2 = document.getElementById("secondContentScreen");
	var sc3 = document.getElementById("thirdContentScreen");
	var sc4 = document.getElementById("fourthContentScreen");
	var sh1 = document.getElementById("shadow1");
	var sh2 = document.getElementById("shadow2");
	var sh3 = document.getElementById("shadow3");
	var sh4 = document.getElementById("shadow4");
	if(i==1){
		sc1.style.display="block";
		sc2.style.display="none";
		sc3.style.display="none";
		sc4.style.display="none";

		sh1.style.display="block";
		sh2.style.display="none";
		sh3.style.display="none";
		sh4.style.display="none";
	}
	else if(i==2){
		sc1.style.display="none";
		sc2.style.display="block";
		sc3.style.display="none";
		sc4.style.display="none";

		sh1.style.display="none";
		sh2.style.display="block";
		sh3.style.display="none";
		sh4.style.display="none";
	}
	else if (i==3) {
		sc1.style.display="none";
		sc2.style.display="none";
		sc3.style.display="block";
		sc4.style.display="none";

		sh1.style.display="none";
		sh2.style.display="none";
		sh3.style.display="block";
		sh4.style.display="none";

	}
	else{
		sc1.style.display="none";
		sc2.style.display="none";
		sc3.style.display="none";
		sc4.style.display="block";

		sh1.style.display="none";
		sh2.style.display="none";
		sh3.style.display="none";
		sh4.style.display="block";
	}
}


function shownoti(data){
	document.getElementById("notify").style.display="block";
	document.getElementById("notify").className="notification animated slideInRight";
	document.getElementById("notificationContent").innerHTML = data;
	setTimeout(function(){
		document.getElementById("notify").className="notification animated slideOutRight";
		setTimeout(function(){
			document.getElementById("notify").style.display="none";
		},400);
	},4000);
}

function populateCardsFirstScreen(quantity,icon,name,weight){
	var data='<div class="card" id="contentsCard"><div id="quantity"><i class="fa fa-circle" style="color: '+quantity+';"></i></div><div id="articleIcon"><i class="fa fa-bitbucket" style="color:'+icon+';"></i></div><div id="detail">'+name+'</div><div id="weight">'+weight+'</div></div>';

	document.getElementById("populateCards").innerHTML += data;
}

//update the below function. Change whole fx
function populateCardsSecondScreen(icon,name,prize){
	var data='<div class="card" id="buyCard"><div id="articleIcon1"><i class="fa fa-bitbucket" style="color:'+icon+';"></i></div><div id="detail1">'+name+'</div><div id="prize">'+prize+'</div>  <div id="addCart" onclick="addToCart(this.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.style.color, this.previousElementSibling.previousElementSibling.innerHTML,this.previousElementSibling.innerHTML)"><i class="fa fa-cart-plus" style="color: #6dbfe2;"></i></div></div>';

	document.getElementById("populateBuyCards").innerHTML += data;
}

function dummyFxToPopulateCard(){
	populateCardsFirstScreen('yellow','green','Apna Kisaan','30kg');
	populateCardsSecondScreen('magenta','Apna Kisaan',Math.floor((Math.random()*10)+1));
}

function dummyFxToPopulateBuyCard(){
	populateCardsSecondScreen('green','Apna Kisaan','Rs.30');
}

function dummyFxToCallNotification(){
	shownoti('green aseed sdred awrff');
}

//added fx.
function addToCart(x,y,z){
	var element = document.getElementById('secondScreen');
	var element2 = document.getElementById('thirdScreen');
	element.className ="screens animated bounceOutUp";
	setTimeout(function(){
		element.style.display="none";
		element2.style.display ="block";
		element2.className ="screens animated bounceInUp";
	},820);
	document.getElementById("prize3").innerHTML=z;
	document.getElementById("detail3").innerHTML=y;
	document.getElementById("articleIcon3").style.color=x;	
	showRecomandations(x);
}

function closeThirdScreen(){
	var element = document.getElementById('thirdScreen');
	var element2 = document.getElementById('secondScreen');
	element.className ="screens animated bounceOutDown";
	setTimeout(function(){
		element.style.display="none";
		element2.style.display ="block";
		element2.className ="screens animated bounceInDown";
	},820);
}

function showRecomandations(x){
	if (x=="black") {
		document.getElementById("capsi").style.display="block";
		document.getElementById("sausage").style.display="block";
	}
	else if(x=="magenta"){
		document.getElementById("custard").style.display="block";
	}
	else{
		document.getElementById("capsi").style.display="none";
		document.getElementById("sausage").style.display="none";
		document.getElementById("custard").style.display="none";
	}
}

setInterval(function(){
	if(document.getElementById("populateBuyCards").childElementCount>2){
		document.getElementById('youCant').style.display="block";
		document.getElementById('toCookGif').style.display="block";
		document.getElementById('food').style.display="none";
	}
	else{
		document.getElementById('youCant').style.display="none";
		document.getElementById('toCookGif').style.display="none";
		document.getElementById('food').style.display="block";
	}
},2000)
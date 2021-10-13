Object.defineProperties(Array.prototype, {
	count: {
		value: function(value) {
			return this.filter(x => x==value).length;
		}
	}
});

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }

var dicefun = {
	init: async function(){
		var container = document.getElementById('dicebox');
		$('.redpacket').remove();
		var dices = this.randomFun();
		for (var i = 0 ; i < 6; i++) {
			container.appendChild(this.createDice(dices[i]+1,i));
		}
		var result = this.getResult(dices);
		await sleep(2333);
		alert(result);
	},
	randomFun:function(){
		var arr = [];
		for (var i = 0 ; i < 6; i++ ) {
			arr.push(Math.floor(Math.random()*6));
		}
		return arr;
	},
	createDice:function(num,i){
		var image = document.createElement('img');
   		  	image.setAttribute("class","redpacket");
   		  	image.id = "redpacket" + i;
    	  	image.src = 'img/' + num +'.jpg';
    	  	return image;
	},
	getResult:function(dices) {
		if (dices.count(4) == 4 && dices.count(1) == 2)
			result = "状元插金花";
		else if (dices.count(4) == 6)
			result = "满堂红";
		else if (dices.count(1) == 6)
			result = "遍地锦";
		else if (dices.count(2) == 6)
			result = "六勃黑";
		else if (dices.count(4) >= 5)
			result = "五王";
		else if (dices.count(2) >= 5)
			result = "五子";
		else if (dices.count(4) >= 4)
			result = "状元";
		else if (dices.count(1) == 1 && dices.count(2) == 1 && dices.count(3) == 1 && dices.count(4) == 1 && dices.count(5) == 1 && dices.count(6) == 1)
			result = "对堂";
		else if (dices.count(4) >= 3)
			result = "三红";
		else if (dices.count(2) >= 4)
			result = "四进";
		else if (dices.count(4) >= 2)
			result = "二举";
		else if (dices.count(4) >= 1)
			result = "一秀";
		else
			result = "未中奖";
		return result;
	}
}


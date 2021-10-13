# EE308_Lab4

| **The Link Your Class**                    | https://bbs.csdn.net/forums/MUEE308FZ?category=0 |
| ------------------------------------------ | ------------------------------------------------ |
| The Link of Requirement of This Assignment | https://bbs.csdn.net/topics/601188617            |
| MU STU ID and FZU STU ID                   | 19104359 & 831902113                             |
| Teammate's MU STU ID and FZU STU ID        |                                                  |
| Teammate's blog link                       |                                                  |
| The Aim of This Assignment                 | Develop a BoBing software                        |

## PSP Form

| PSP                            | Estimated Time/minutes | Completed Time/minutes |
| :----------------------------- | :--------------------- | :--------------------- |
| Planning                       | 20                     | 20                     |
| Estimate                       | 15                     | 30                     |
| Development                    | -                      | -                      |
| Analysis                       | 80                     | 100                    |
| Design                         | 40                     | 40                     |
| Coding Standard                | 40                     | 40                     |
| Coding                         | 1200                   | 1500                   |
| Test                           | 60                     | 90                     |
| Reporting                      | -                      | -                      |
| Test Report                    | 60                     | 60                     |
| Size Measurement               | 30                     | 30                     |
| Postmortem&Process Improvement | 120                    | 80                     |
| Total                          | 1586                   | 1990                   |

## Environment

http://8.135.15.73:2333/

## Detail

The game is a website placing on a server so there is no need to install it.

You can open it with a browser and play it anywhere.

We use JavaScript to implement to logic of Bobing game.

The result of each dice is random by using `Math.random()` function.

```javascript
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
```

The result will be display when the game is finished

```javascript
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
```

By the way, there is no count function for array in JavaScript, so we modify its prototype.

```javascript
Object.defineProperties(Array.prototype, {
	count: {
		value: function(value) {
			return this.filter(x => x==value).length;
		}
	}
});
```

##  Summary

There are still a lot of gains from this homework. For example, in order to meet the requirements of the commit information specification, I learned how to develop a webpage using html/css/javascript, learned simple javascipt program performance analysis and optimization. in addition
The only downside is that I am a little tired after finishing this homework.


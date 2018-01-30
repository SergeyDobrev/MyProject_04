$('body').css({	'margin': '0 auto',
				'background-color': 'black',
				'overflow': 'hidden',
				'text-align': 'center'
			});

var objScene = document.createElement('div');
$('body').append(objScene);
$(objScene).addClass('preserve3d');
objScene.style.transform = 'rotateX(45deg) rotateZ(45deg)';
$(objScene).css({	'height': '70vh',
					'width': '70vh',
					'margin': '0 auto',
					'margin-top': '10vh' 
				});

var lengthArray = 20;
var objArray = new Array();
for (var i = 0; i < lengthArray; i++) {
	objArray[i] = new Array();
	for (var j = 0; j < lengthArray; j++) {
		objArray[i][j] = document.createElement('div');
		$(objScene).append(objArray[i][j]);
		$(objArray[i][j]).addClass('preserve3d');
		$(objArray[i][j]).css({	'height': '6vh',
								'width': '6vh',
								'position': 'absolute'
							});
		objArray[i][j].style.transform = 'translateX(' + i * 3 + 'vh) translateY(' + j * 3 + 'vh)';
		objArray[i][j].style.transition = 'transform 0.75s';

		var sideArray = ['rotateX(-90deg)', 'rotateY(90deg)',''];
		for (var n = 0; n < sideArray.length; n++) {
			var objSide = document.createElement('div');
			$(objSide).addClass('preserve3d');
			$(objArray[i][j]).append(objSide);
			$(objSide).css({	'height': '3vh',
								'width': '3vh',
								'margin': '0 auto',
								'position': 'absolute',
								'background-color': 'rgb(' + (70 + 45 * n) + ',0,' + (70 + 45 * n) + ')',
								'transform': sideArray[n] + 'translateZ(1.5vh)'
							});
		}
	}
}

var intervalID = setInterval(myIntervalFun, 2500);

function myIntervalFun() {

	var TimerId1 = setTimeout(myTimeoutFun1, 750);
	var TimerId2 = setTimeout(myTimeoutFun2, 1500);

	for (var i = 0; i < objArray.length; i++) {
		for (var j = 0; j < objArray.length; j++) {
			var t = 15 * Math.cos(j/6+29.8) * Math.sin(i/6);
			objArray[i][j].style.transform = 'translateX(' + i * 3 + 'vh) translateY(' + j * 3 + 'vh) translateZ(' + t +'vh)';
		}
	}

	function myTimeoutFun1() {
		for (var i = 0; i < objArray.length; i++) {
			for (var j = 0; j < objArray.length; j++) {
				var t = - 15 * Math.cos(j/6+29.8) * Math.sin(i/6);
				objArray[i][j].style.transform = 'translateX(' + i * 3 + 'vh) translateY(' + j * 3 + 'vh) translateZ(' + t + 'vh)';
			}
		}		
	}

	function myTimeoutFun2() {
		for (var i = 0; i < objArray.length; i++) {
			for (var j = 0; j < objArray.length; j++) {
				objArray[i][j].style.transform = 'translateX(' + i * 3 + 'vh) translateY(' + j * 3 + 'vh) translateZ(' + 0 + 'vh)';
			}
		}		
	}
}

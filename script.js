var objArray = new Array();
var sideArray = ['rotateX(-90deg)', 'rotateY(-90deg)', 'rotateY(90deg)', ''];

var a = 45;		// angle of rotation of objScene
var b = 0;
var g = 45;

var vh = $(window).height();

if ($(window).height() > $(window).width()) {
	vh = $(window).width();
}

$('body').css({	'margin': '0 auto',
				'background-color': 'black',
				'overflow': 'hidden',
				'text-align': 'center'
			});

var objScene = document.createElement('div');
$('body').append(objScene);
$(objScene).addClass('preserve3d');
objScene.style.transform = 'rotateX(' + a + 'deg) rotateY(' + b + 'deg) rotateZ(' + g + 'deg)';
$(objScene).css({	'height': 0.7 * vh,
					'width': 0.7 * vh,
					'margin': '0 auto',
					'margin-top': 0.1 * vh,
					'border': '1px solid rgba(0,0,255,0.5)',
					'background-color': 'rgba(0,0,255,0.1)'
				});

for (var i = 0; i < 18; i++) {
	objArray[i] = new Array();
	for (var j = 0; j < 18; j++) {
		objArray[i][j] = document.createElement('div');
		$(objScene).append(objArray[i][j]);
		$(objArray[i][j]).addClass('preserve3d');
		$(objArray[i][j]).css({	'height': '8vh',
								'width': '8vh',
								'position': 'absolute'
							});
		objArray[i][j].style.transform = 'translateX(' + i * 4 + 'vh) translateY(' + j * 4 + 'vh)';
		objArray[i][j].style.transition = 'transform 1s';

		for (var n = 0; n < sideArray.length; n++) {
			var objSide = document.createElement('div');
			$(objSide).addClass('preserve3d');
			$(objArray[i][j]).append(objSide);
			$(objSide).css({	'height': '4vh',
								'width': '4vh',
								'margin': '0 auto',
								'position': 'absolute',
								'background-color': 'rgb(' + (50 + 50 * n) + ',0,' + (50 + 50 * n) + ')',
								'transform': sideArray[n] + 'translateZ(2vh)'
							});
		}
	}
}

var IntervalId = window.setInterval(function() {
	var m = 0;
	var n = 0;

/*	objArray[m][n].style.transform = 'translateX(' + m * 4 + 'vh) translateY(' + n * 4 + 'vh) translateZ(5vh)';
	var TimerId = setTimeout(function() {
		objArray[m][n].style.transform = 'translateX(' + m * 4 + 'vh) translateY(' + n * 4 + 'vh) translateZ(-5vh)';
	}, 1000);

*/
	m++;
	var TimerId1 = window.setTimeout(function() {
		objArray[m][n].style.transform = 'translateX(' + m * 4 + 'vh) translateY(' + n * 4 + 'vh) translateZ(5vh)';
	}, 100);
	var TimerId2 = window.setTimeout(function() {
		objArray[m][n].style.transform = 'translateX(' + m * 4 + 'vh) translateY(' + n * 4 + 'vh) translateZ(-5vh)';
	}, 1100);

	n++;
	var TimerId3 = window.setTimeout(function() {
		objArray[m][n].style.transform = 'translateX(' + m * 4 + 'vh) translateY(' + n * 4 + 'vh) translateZ(5vh)';
	}, 2200);
	var TimerId4 = window.setTimeout(function() {
		objArray[m][n].style.transform = 'translateX(' + m * 4 + 'vh) translateY(' + n * 4 + 'vh) translateZ(-5vh)';
	}, 2300);


} ,5000);


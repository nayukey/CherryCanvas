function Cherry(content){
	this.ctx = content;
	this.head.draw(content);
	this.ear.draw(content);
	this.face.draw(content);
	this.mouse.draw(content);
	this.eye.draw(content);
	this.hair.draw(content);
}

Cherry.prototype = {
	constructor: Cherry,
	//head
	head:{
		draw:function(content){
			var ct = content;
			ct.beginPath();
			ct.moveTo(58.5,196.69);
			ct.lineTo(44.5,206.28);
			ct.bezierCurveTo(44.5,206.28,81.78,51.28,185.14,58.28);
			ct.bezierCurveTo(288.5,65.28,307.5,197.28,307.5,197.28);
			ct.bezierCurveTo(307.5,197.28,311.5,220.28,311.5,220.28);
			ct.lineTo(298.44,215.19);
			ct.stroke();
		}
	},
	//hair part
	hair:{
		draw:function(content){
			var ct = content;
			ct.beginPath();
			ct.moveTo(61.5,202.19);
			ct.lineTo(65.5,173.19);
			ct.lineTo(78.5,190.19);
			ct.lineTo(86.5,146.19);
			ct.lineTo(100.5,171.13);
			ct.lineTo(111.5,120.19);
			ct.lineTo(121.5,150.19);
			ct.lineTo(141.5,96.19);
			ct.lineTo(159.5,136.19);
			ct.lineTo(185.5,89.19);
			ct.lineTo(200.5,140.19);
			ct.lineTo(223.14,110.19);
			ct.lineTo(232.14,164.19);
			ct.lineTo(253.5,141.19);
			ct.lineTo(267.5,189.19);
			ct.lineTo(281.5,165.19);
			ct.lineTo(290.5,197.19);
			ct.stroke();
		}
	},
	//ears
	ear:{
		draw:function(content){
			var ct = content;
			ct.beginPath();
			//left
			ct.moveTo(62,201.35);
			ct.bezierCurveTo(62,201.35,56.48,193.62,53,208.35);
			ct.bezierCurveTo(48.33,228.11,75,237.35,75,237.35);
			//right
			ct.moveTo(289.44,196.69);
			ct.bezierCurveTo(289.44,196.69,299.82,196.1,299.82,209.24);
			ct.bezierCurveTo(299.82,222.38,278.5,233.69,278.5,233.69);
			ct.stroke();
		}
	},
	//eyes
	eye:{
		draw:function(content){
			var ct = content;
			ct.beginPath();
			//left from bottom to top
			ct.moveTo(105.64,188.91);
			ct.bezierCurveTo(105.64,188.91,106.7,175.91,120.95,175.91);
			ct.bezierCurveTo(135.21,175.91,148.75,188.91,148.75,188.91);
			
			ct.moveTo(136.09,169.07);
			ct.bezierCurveTo(136.09,169.07,148.09,170.41,150.75,184.41);
			
			ct.moveTo(159.03,155.65);
			ct.bezierCurveTo(159.03,155.65,157.3,164.32,159.3,168.91);
			
			//right from bottom to top
			ct.moveTo(189.5,188.52);
			ct.bezierCurveTo(189.5,188.52,207.67,179.23,218.82,177.04);
			ct.bezierCurveTo(229.97,174.86,239,196.17,239,196.17);
			
			ct.moveTo(189.5,182.91);
			ct.bezierCurveTo(189.5,182.91,198.83,170.91,210.17,168.91);
			
			ct.moveTo(181.58,155.65);
			ct.bezierCurveTo(181.58,155.65,177.75,165.78,181.58,168.91);
			
			ct.stroke();
		}
	},
	mouse:{
		draw:function(content){
			var ct = content;
			ct.beginPath();
			
			ct.moveTo(116.16,256.51);
			ct.bezierCurveTo(116.16,256.51,115.31,233.71,132.35,232.09);
			ct.bezierCurveTo(150.96,230.33,146.92,240.61,166.34,240.04);
			ct.bezierCurveTo(185.76,239.47,177.27,236.04,197.5,231.52);
			ct.bezierCurveTo(220.73,226.34,223.8,243.45,225.02,261.05);
			ct.bezierCurveTo(226.23,278.66,212.47,286.04,202.76,289.45);
			ct.bezierCurveTo(191.88,293.26,182.07,284.79,166.34,283.77);
			ct.bezierCurveTo(148.94,282.63,129.42,283.95,125.07,279.22);
			ct.bezierCurveTo(116.16,269.57,116.16,256.51,116.16,256.51);
			ct.stroke();
		}
	},
	face:{
		draw:function(content){
			var ct = content;
			ct.beginPath();			
			ct.moveTo(58.5,196.69);
			ct.bezierCurveTo(58.5,196.69,64.5,203.69,72.5,222.5);
			ct.bezierCurveTo(75.98,235.27,78.31,251.52,89.06,264.83);
			ct.bezierCurveTo(102.98,282.08,128.33,295.76,160.5,297.69);
			ct.bezierCurveTo(203.17,300.24,228.46,297.8,251.41,275.26);
			ct.bezierCurveTo(259.06,267.75,265.5,258.1,278.5,233.69);
			ct.bezierCurveTo(291.5,209.28,290.5,193.19,290.5,193.19);
			
			ct.moveTo(97,248.28);
			ct.arc(88.5,248.28,8.5,0,Math.PI * 2,true);
			ct.moveTo(256.5,257.78)
			ct.arc(248,257.78,8.5,0,Math.PI * 2,true);
			ct.stroke();
		}
	}	
}

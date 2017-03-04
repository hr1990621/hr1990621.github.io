var Tips = (function(){

	var $tipBox = $(".tips-box");

	var bind = function(){

	}

	bind();
	return {
		show: function(){
			$tipBox.removeClass("hide");
		},
		hide: function(){
			$tipBox.addClass("hide");
		},
		init: function(){
			
		}
	}
})();

var BackPic = (function(){
	var pics = ['http://7ximdq.com1.z0.glb.clouddn.com/1432371755835?imageView2/2/w/600/format/jpg',
                'http://7ximdq.com1.z0.glb.clouddn.com/1432458568441?imageView2/2/w/660/format/jpg',
                'http://7ximdq.com1.z0.glb.clouddn.com/1432458576572?imageView2/2/w/640/format/jpg',
                'http://7ximdq.com1.z0.glb.clouddn.com/1432456940456?imageView2/2/w/640/format/jpg',
                'http://7ximdq.com1.z0.glb.clouddn.com/1432458590760?imageView2/2/w/640/format/jpg',
                'http://7ximdq.com1.z0.glb.clouddn.com/1432458591836?imageView2/2/w/650/format/jpg',
                'http://7ximdq.com1.z0.glb.clouddn.com/1432458593460?imageView2/2/w/600/format/jpg',
                'http://7ximdq.com1.z0.glb.clouddn.com/1432457205540?imageView2/2/w/550/format/jpg'];
	var num = Math.floor(Math.random()*pics.length);
	var url = pics[num];
	return {
		init: function(){
			//$('.left-col').css('background', 'url('+ url +') center no-repeat');
			$.ajax({
				url: 'http://weiboxb.sinaapp.com/background',
				type: 'POST',
				data: { bg: 'bg'},
				success: function(url) {
					$('.left-col').css('background', 'url('+ url +') no-repeat center');
				},
				error: function(e) {
					$('.left-col').css('background', 'url('+ url +') no-repeat center');
				}
			})
		}
	}
})();

var Main = (function(){

	var resetTags = function(){
		var tags = $(".tagcloud a");
		tags.css({"font-size": "12px"});
		for(var i=0,len=tags.length; i<len; 0="" 5="" i++){="" var="" num="parseInt(Math.random()*5+1);" %="" +1;="" tags[i].classname="" ;="" tags.eq(i).addclass("color"+num);="" }="" slide="function(idx){" $wrap="$(".switch-wrap");" $wrap.css({="" "transform":="" "translate(-"+idx*100+"%,="" )"="" });="" $(".icon-wrap").addclass("hide");="" $(".icon-wrap").eq(idx).removeclass("hide");="" bind="function(){" switchbtn="$("#myonoffswitch");" tagcloud="$(".second-part");" navdiv="$(".first-part");" switchbtn.click(function(){="" if(switchbtn.hasclass("clicked")){="" switchbtn.removeclass("clicked");="" tagcloud.removeclass("turn-left");="" navdiv.removeclass("turn-left");="" }else{="" switchbtn.addclass("clicked");="" tagcloud.addclass("turn-left");="" navdiv.addclass("turn-left");="" resettags();="" timeout;="" isenterbtn="false;" isentertips="false;" $(".icon").bind("mouseenter",="" function(){="" tips.show();="" }).bind("mouseleave",="" settimeout(function(){="" if(!isentertips){="" tips.hide();="" },="" 100);="" $(".tips-box").bind("mouseenter",="" if(!isenterbtn){="" $(".tips-inner="" li").bind("click",="" idx="$(this).index();" slide(idx);="" fancyinit="function(){" isfancy="$(".isFancy");" if(isfancy.length="" !="0){" imgarr="$(".article-inner" img");="" for(var="" i="0,len=imgArr.length;i<len;i++){" src="imgArr.eq(i).attr("src");" title="imgArr.eq(i).attr("alt");" imgarr.eq(i).replacewith("<a="" href=""+src+"" rel="fancy-group" class="fancy-ctn fancybox"><img src=""+src+"" title=""+title+"">");
			}
			$(".article-inner .fancy-ctn").fancybox();
		}
	}

	var enterAnm = function(){
		//avatar
		$(".js-avatar").attr("src", $(".js-avatar").attr("lazy-src"));
		$(".js-avatar")[0].onload = function(){
			$(".js-avatar").addClass("show");
		}

		//article
		function showArticle(){
			$(".article").each(function(){
				if( $(this).offset().top </len;>
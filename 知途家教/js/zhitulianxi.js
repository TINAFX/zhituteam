 var teach=new Vue({
	    	el:'#app',
	    	data:{
	    		banner:[],
	    		teacher:[],
	    		subjects:[],
	    		subject:[]

	    	},
	    	mounted:function(){
               this.getData();
               // this.getGoodHerf();
              
	    	},
	    	methods:{
                // getGoodHerf:function(item){
                // 	return'./zhituxiangqing.html?id='+item
                // },
	    		getData:function(){
	    			var that=this;
	    			$.ajax({
	    				'url':"http://api.zhituteam.com/api/index",
	    				 'type':"get",
	    				 'dataType':"json",
	    				 data:{

	    				 },
	    				 
	    				 success:function(res){
	    				 	console.log(res)
	    				 	
	    				 	console.log(res.data.subjects)
	    				 	that.teacher=res.data.teacher
                            that.banner=res.data.banner
	    				 	that.subjects=res.data.subjects
	    				 }
	    			})
	    		}
	    	}
	    });
$(function(){
     // $(".hot-teacher>ul>li").click(function(){
     // 	window.location.href="./zhituxiangqing.html"
     // })
	// function goleft(){
	// 	$(".subject>ul").stop(true,true).animate({
	// 		marginLeft:"0",
	// 	},500,function(){
	// 		$(".subject>ul").css("margin-left","0")
	// 	})
	// }
	// function goright(){
	// 	$(".subject>ul").stop(true,true).animate({
	// 		marginLeft:"-100%",
	// 	},500,function(){
	// 		$(".subject>ul").css("margin-left","-100%")
	// 	})
	// }
	$(".right").click(function(){
       $(this).addClass("select")
       $(".left").removeClass("select")
        goright()


	})
	$(".left").click(function(){
		goleft()
		$(this).addClass("select")
       $(".right").removeClass("select")
	})
});

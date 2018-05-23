##### 本项目是模拟知途家教的移动端项目
#####  本项目使用vue框架 js html css3  编写的 本项目分别由首页、详情页、教师列表筛选页构成的
###  首页
######  用ajax调用的接口：http://api.zhituteam.com/api/index
**请求方式：**
- get
######  首页的内容通过vue实现双项数据绑定渲染，并且点击教师列表会通过教师id跳转到教师详情页
###  详情页
###### 用ajax调用的接口：http://api.zhituteam.com/api/teacher/info/
**请求方式**
-  get
**参数说明**
|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |string |教师的id|
####  id通过调用getquery（）方法的得到的，具体代码
######  getQuery:function(){
           var str=(location.search.length>0 ? location.search.substring(1):''),
           args={},
           items=str.length ? str.split("&"):[],
           item=null,
           name=null,
           value=null;
           for(i=0;i<items.length;i++){
             item=items[i].split("=");
             name=decodeURIComponent(item[0]);
             value=decodeURIComponent(item[1]);
             if(name.length){
               args[name]=value;
             }
           }
            return args;
         },
######  通过首页绑定id跳转详情页  实现页面的传递
###  教师列表筛选页
######  用ajax调用的接口：http://api.zhituteam.com/api/teacher/lists
**请求方式**
-  get
**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|grade |是  |string |年级|
|type |是  |string |教师类型|
|subject |是  |string |类型 接口调用传json|
|offset |是  |string |当前|
|limit |是  |string |最大显示|
######  本页面如首页跳转详情页一样 通过首页绑定id并且在列表页通过getquery（）方法获得参数id
######  本页面在筛选上通过vue来实现三级联动  通过学科，年级，类型来筛选教师 并通过grade，type，subject，offset，limit控制筛选条件
**具体实现：**
 ####   var data={
            	'grade': this.searchGrade,
                'type': this.searchType,
                'subject': this.searchSubject,
                'offset': 0,
                'limit': 20,
            }
            this.getData(data)
	   	}

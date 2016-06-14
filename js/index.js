var toutiao=angular.module('toutiao',['ngAnimate','ngRoute','ngTouch']);
toutiao.controller('indexCtrl',['$scope',function($scope){
      
}])
toutiao.directive('uqYinDao',[function(){
	return{
	replace:true,
		restrict:'E',
		templateUrl:'views/directive/uq-yindao.html',
		link:function($scope,elem){
		var mySwiper = new Swiper('.swiper-container', {
	
    loop: true,
})
	}
}
}]);
toutiao.directive('uqTabBar',[function(){
	return{
	replace:true,
		restrict:'E',
		templateUrl:'views/directive/uq-tabBar.html'
	}	
}]);

   toutiao.controller('shuaxinCtrl',['$scope',function($scope){
       
}]);
    toutiao.controller('tvCtrl',['$scope',function($scope){
     
}]);   
    toutiao.controller('careCtrl',['$scope',function($scope){
        $scope.guanxin=[
           {touxiang:'../../image/c4.png',biao:'汽车',neirong:'2.5万人关心',state:false},
           {touxiang:'../../image/c6.png',biao:'升学考试',neirong:'64万人关心',state:false},
           {touxiang:'../../image/c5.png',biao:'手机',neirong:'354万人关心',state:false},
           {touxiang:'../../image/c6.png',biao:'奇葩',neirong:'255万人关心',state:false},
            {touxiang:'../../image/c7.png',biao:'科普',neirong:'2.5万人关心',state:false},
             {touxiang:'../../image/c8.png',biao:'数学',neirong:'7.7万人关心',state:false},
              {touxiang:'../../image/c9.png',biao:'英语',neirong:'52.5万人关心',state:false},
        ]

        $scope.shanchu=function(v){
        	v.state=!v.state
        }
       
}]);
        toutiao.controller('tiaoCtrl',['$scope',function($scope){
     
}]);
    toutiao.controller('meCtrl',['$scope',function($scope){
     
}]);
toutiao.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		controller:'shuaxinCtrl',
		templateUrl:'views/template/shuaxin.html'
	}).when('/shuaxin',{
		controller:'shuaxinCtrl',
		templateUrl:'views/template/shuaxin.html'
	}).when('/tv',{
		controller:'tvCtrl',
		templateUrl:'views/template/tv.html'
	}).when('/care',{
		controller:'careCtrl',
		templateUrl:'views/template/care.html'
	}).when('/tiao',{
         controller:'tiaoCtrl',
         templateUrl:'views/template/tiao.html'
	}).when('/me',{
		controller:'meCtrl',
		templateUrl:'views/template/me.html'
	}).otherwise({
          redirectTo:'/'
      });
}])
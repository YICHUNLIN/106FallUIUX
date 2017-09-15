var ctrl = angular.module('UXD_controllers',[]);


ctrl.controller('mailcontroller', ['$scope','MailService', function($scope,MailService){
	var self = this;
	console.log('mail controller');

	$scope.maildata = {
					frommail:'',
					name:'',
					subject:'',
					content:''
				};
	$scope.sendMail = ()=>{
		console.log($scope.maildata);
		if(($scope.maildata.frommail != "") && ($scope.maildata.name != "") && ($scope.maildata.subject != "") && ($scope.maildata.content != "")){
			MailService.send($scope.maildata, function(result){
				if(result['data']['CODE'] == "SUCCESS"){
					
					console.log(result);
					$scope.maildata = {
						frommail:'',
						name:'',
						subject:'',
						content:''
					};
				}
			});
		}
		console.log("click");
	}
	
}]);
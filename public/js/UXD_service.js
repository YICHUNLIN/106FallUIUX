var service = angular.module('UXD_services',[]);

//var api_addr = "127.0.0.1:3000";
var api_addr = "https://uiux.kmtree.me";

service.factory('MailService',['$http',function($http){
	return {
		send: function(maildata, fn){
			
			$http({
				method:'POST',
				headers:{
					'Content-Type': 'application/json'
				},
				data:{
					frommail:maildata.frommail,
					name:maildata.name,
					subject:maildata.subject,
					content:maildata.content
				},
				url:api_addr+'/mail/send'
			}).then(function(suc){
				fn(suc);
			},function(failed){
				fn(failed);
			});
		}
	};
}]);
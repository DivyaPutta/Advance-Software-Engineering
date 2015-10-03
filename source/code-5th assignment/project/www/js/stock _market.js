var angularApp = angular.module('apiApp', []);
			angularApp.controller('apiController', function($scope, $http) {
				$scope.imageURL = "";
				$scope.showCharts=false;
				$scope.showSpeakingMessage=false;
				$scope.RenderChart=function(){
					$scope.showCharts=true;
					$scope.showSpeakingMessage=false;
					$scope.imageURL="http://chart.finance.yahoo.com/z?s="+$scope.chartHeight+"&t=3m&q=l&z=l&p=m50,m200";	
				};
				}
			);
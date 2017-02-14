'use strict';


class WriteController {



constructor($http) {
  this.$http = $http;
  this.alert("testing");

}

}
angular.module('mannamApp')
  .controller('WriteController', WriteController);

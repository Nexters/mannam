'use strict';


class WriteController {

notice = {};
errors = {};
submitted = false;


constructor($http) {
  this.$http = $http;

}

write(form) {
  console.log("yes");
  this.submitted = true;

  if (form.$valid) {
    alert("yes");
  }

}
}
angular.module('mannamApp')
  .controller('WriteController', WriteController);

'use strict';


class WriteController {

notice = {};
errors = {};
submitted = false;


constructor($http, $state) {
  this.$http = $http;
  this.$state = $state;

}

write(form) {
  console.log("yes");
  this.submitted = true;

  if (form.$valid) {
    alert("yes");
    this.$http.post('/api/board', { "user" : {"name" : "qweq11", "category" : "213"}, "boardTitle" : "123123", "boardContent" : "bbbb"}).then(response => {
    alert(response);
    })
    .then(() => {
      // Logged in, redirect to home
      this.$state.go('main');
    })
    .catch(err => {
      this.errors.other = err.message;
    });
  }

}
}
angular.module('mannamApp')
  .controller('WriteController', WriteController);

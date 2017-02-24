'use strict';


class WriteController {


errors = {};
submitted = false;


constructor($http, $state) {
  this.$http = $http;
  this.$state = $state;
  this.notice = {};
}

write(form) {
  console.log("yes");
  this.submitted = true;

  if (form.$valid) {
    alert(this.notice.team);
    this.$http.post('/api/board', { "user" : {"name" : "글쓴이", "category" : this.notice.team}, "boardTitle" : this.notice.title, "boardContent" : this.notice.content}).then(response => {
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

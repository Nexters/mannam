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
    this.$http.post('/api/board', { "user" : {"name" : "qweq11", "category" : "213"}, "boardTitle" : "123123", "boardContent" : "123"}).then(response => {
    alert(response);
    });


    })
  }

}
}
angular.module('mannamApp')
  .controller('WriteController', WriteController);

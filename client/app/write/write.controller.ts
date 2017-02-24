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
    this.$http.get('/api/board/1').then(response => {
      alert(response.data[0].boardContent);
    });
    })
  }

}
}
angular.module('mannamApp')
  .controller('WriteController', WriteController);

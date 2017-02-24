'use strict';

(function() {

class MainController {

constructor($http) {
  this.$http = $http;

  this.pageCnt = 1;
  this.notices = [];
}

  $onInit() {
    this.$http.get('/api/board/' + this.pageCnt).then(response => {
        this.notices = response.data;
    });
  }

  
}

angular.module('mannamApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();

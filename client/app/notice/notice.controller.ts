'use strict';

(function() {

class NoticeController {

  constructor($http) {
    this.$http = $http;

    this.boardID = 1;
    this.notices;
  }

  $onInit() {
    this.$http.get('/api/board/detail/' + this.boardID).then(response => {
        this.notices = response.data;
    }); 
  }
}

angular.module('mannamApp')
  .component('notice', {
    templateUrl: 'app/notice/notice.html',
    controller: NoticeController
  });

})();



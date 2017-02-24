'use strict';

(function() {

class MainController {

constructor($http) {
  this.$http = $http;
  this.awesomeThings = [];

  this.notices = [
    {
        type : '#4EBEDA',
        category : '넥스터즈 전체', 
        title : '1월 3주차 정기모임 안내',
        writer : 'Nexters CEO',
        location : '마루180',
        date : '17.01.04 07:00',
        time : '17.03.12 06:00'
    },
    {
        type : '#4EBEDA',
        category : 'MANNAM 팀', 
        title : '이번주에도 아지트에서 모입니다.',
        writer : '만남대장',
        location : '창의재단',
        date : '17.01.04 07:00',
        time : '17.03.12 06:00'
    },
    {
        type : '#4EBEDA',
        category : '개발자', 
        title : '개발 스터디 멤버를 구하고 있습니다.',
        writer : '김넥터',
        time : '17.03.12 06:00'
    },
    {
        type : '#4EBEDA',
        category : '자유글', 
        title : '집에 같이 가실분 찾아요',
        writer : '김넥터',
        time : '17.03.12 06:00'
    }
  ];
}

  $onInit() {
    this.$http.get('/api/things').then(response => {

    });
  }

  
}

angular.module('mannamApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();

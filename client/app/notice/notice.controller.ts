'use strict';

(function() {

class NoticeController {

constructor($http) {
  this.$http = $http;

  this.notice = {
      type : '#4EBEDA',
      target : '넥스터즈 전체', 
      title : '1월 3주차 정기모임 안내 만남팀 멤버 전격 영입',
      writer : 'Nexters CEO',
      location : '창의재단',
      date : '2017. 01. 04',
      time : '17.03.12 06:00',
      content : '안녕하세요 1주차 미션 \n -프로젝트 일정 짜기(개발 및 디자인 일정) \n - 개발 : 적용기술 확정 및 앱 구체적 설계'
    };
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {

    });
  }
}

angular.module('mannamApp')
  .component('notice', {
    templateUrl: 'app/notice/notice.html',
    controller: NoticeController
  });

})();

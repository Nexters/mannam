'use strict';

(function() {

class NoticeController {

  constructor($http) {
    this.$http = $http;

    this.notices = [{
        type : '#4EBEDA',
        category : '넥스터즈 전체', 
        title : '1월 3주차 정기모임 안내 만남팀 멤버 전격 영입',
        writer : 'Nexters CEO',
        location : '창의재단',
        date : '17.01.04 07:00',
        time : '17.03.12 06:00',
        content : '안녕하세요 1주차 미션\n\n- 프로젝트 일정 짜기(개발 및 디자인 일정)\n- 개발 : 적용기술 확정 및 앱 구체적 설계\n- 디자인 : 컨셉 2가지(확정은 아님)\n\n위 내용으로 이번주 발표 예정이니 팀장분들은 미션 관련해서 PT로 만들어 주시기 바랍니다. 발표 자료 폴더는 따로 공지하겠습니다.\n\n아래 설문조사와 시간대 조사도 꼭 작성해 주시기 바랍니다.\n\n위 내용으로 이번주 발표 예정이니 팀장분들은 미션 관련해서 PT로 만들어 주시기 바랍니다.\n'
      }];
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



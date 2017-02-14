'use strict';

(function() {

class MainController {

constructor($http) {
  this.$http = $http;
  this.awesomeThings = [];

  this.notices = [
    {
      type : '#4EBEDA',
      target : '넥스터즈 전체',
      title : '1월 3주차 정기모임 안내',
      writer : '넥스터즈 CEO',
      location : '창의재단',
      time : '2017.01.04 | 17:04'
    },
    {
      type : '#4DB0A6',
      target : 'mannam',
      title : '이번주 미팅 공지',
      writer : '넥스터즈 CEO',
      location : '아지트',
      time : '2017.01.04'
    },
    {
      target : 'somebody',
      title : 'ux 스터디 함께할 친구들',
      writer : 'N10 우종희',
      location : '',
      time : ''
    },
    {
      target : 'somebody',
      title : '서비스를 위한 설문조사',
      writer : 'N10 우종희',
      location : '',
      time : ''
    }
  ];
}

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('mannamApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
})();

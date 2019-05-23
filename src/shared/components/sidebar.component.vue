<template>
  <div id="sidebar" class="tm-sidebar-left uk-background-default" :class="{open: isSidebarOpen, close: !isSidebarOpen}">
    <center>
      <div class="user">
        <img id="avatar" width="100" class="uk-border-circle" src="../../assets/images/avatar.jpg"/>
        <div class="uk-margin-top"></div>
        <h4 id="name" class="uk-text-truncate m0">{{this.userFullName}}</h4>
        <h5 id="email" class="uk-text-truncate m0">{{user && user.email}}</h5>
        <span id="status" data-enabled="true" data-online-text="آنلاین" data-away-text="Away"
              data-interval="10000" class="uk-margin-top uk-label uk-label-success"></span>
      </div>
      <br/>
    </center>
    <ul class="uk-nav uk-nav-default">
      <li class="uk-nav-header">امکانات</li>
      <li>
        <router-link to="/"><span class="uk-margin-small-left uk-margin-small-right" uk-icon="icon: home"></span>صفحه نخست</router-link>
      </li>
      <li>
        <router-link to="/profile"><span class="uk-margin-small-left uk-margin-small-right" uk-icon="icon: user"></span>صفحه پروفایل</router-link>
      </li>
      <li>
        <router-link to="/orders"><span class="uk-margin-small-left uk-margin-small-right" uk-icon="icon: table"></span>لیست درخواست‌ها</router-link>
      </li>
      <li class="uk-nav-header">صفحات</li>
      <li><a href="#"><span class="uk-margin-small-left uk-margin-small-right" uk-icon="icon: sign-in"></span>ورود</a></li>
      <li><a href="#"><span class="uk-margin-small-left uk-margin-small-right" uk-icon="icon: file-edit"></span>ثبت نام</a></li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery';
import '../../../node_modules/jquery.transit/jquery.transit.js';

import * as types from '../../store/types';
import store from '../../store';

export default {
  name: 'app-sidebar',
  computed: {
    isSidebarOpen() {
      return this.$store.getters[types.APP_GET_IS_SIDEBAR_OPEN];
    },
    user() {
      return this.$store.getters[types.AUTH_GET_USER];
    },
    userFullName() {
      return this.$store.getters[types.AUTH_GET_USER_FULLNAME];
    }
  },
  created: function() {
    initializeEvents();
  },
  watch: {
    isSidebarOpen() {
      var sidebar = $('#sidebar');
      if (sidebar.css('x') === '-300px' || sidebar.css('display') === 'none') {
        sidebarToggle(true);
      } else {
        sidebarToggle(false);
      }
    }
  }
};

function sidebarToggle(toogle) {
  var sidebar = $('#sidebar');
  var padder = $('.content-padder');
  if (toogle) {
    $('.notyf').removeAttr('style');
    sidebar.css({display: 'block', x: 300});
    sidebar.transition({opacity: 1, x: 0}, 250, 'in-out', function() {
      sidebar.css('display', 'block');
    });
    if ($(window).width() > 960) {
      padder.transition({marginRight: sidebar.css('width')}, 250, 'in-out');
    }
  } else {
    $('.notyf').css({
      width: '90%',
      margin: '0 auto',
      display: 'block',
      right: 0
    });
    sidebar.css({display: 'block', x: '0px'});
    sidebar.transition({x: 300, opacity: 0}, 250, 'in-out', function() {
      sidebar.css('display', 'none');
    });
    padder.transition({marginRight: 0}, 250, 'in-out');
  }
}

function resize() {
  var sidebar = $('#sidebar');
  var padder = $('.content-padder');
  padder.removeAttr('style');
  if ($(window).width() < 960 && sidebar.css('display') === 'block') {
    store.commit(types.APP_SET_IS_SIDEBAR_OPEN, false);
  } else if ($(window).width() > 960 && sidebar.css('display') === 'none') {
    store.commit(types.APP_SET_IS_SIDEBAR_OPEN, true);
  }
}

function initializeEvents() {
  if ($(window).width() < 960) {
    store.commit(types.APP_SET_IS_SIDEBAR_OPEN, false);
  }

  $(window).resize(function() {
    resize();
  });

  $(document).on('click', '.content-padder', function() {
    if ($(window).width() < 960) {
      store.commit(types.APP_SET_IS_SIDEBAR_OPEN, false);
    }
  });
}
</script>

<style scoped>
#sidebar.open {
  display: block;
}
#sidebar.close {
  display: none;
}
.tm-sidebar-left {
  position: fixed;
  z-index: 100;
  top: 80px;
  bottom: 0;
  box-sizing: border-box;
  width: 240px !important;
  padding: 40px 40px 60px 40px;
  border-left: 1px #e5e5e5 solid;
  overflow-y: auto;
  overflow-x: hidden;
}

.tm-sidebar-left::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.tm-sidebar-left::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.tm-sidebar-left::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #bdbdbd;
}

.tm-sidebar-right {
  position: absolute;
  top: 0;
  right: calc(100% + 0px);
  width: 200px;
}

@media (max-width: 960px) {
  .tm-sidebar-left {
    opacity: 0;
  }
}

@media (min-width: 1200px) {
  .tm-sidebar-right {
    right: calc(100% + 0px);
  }

  .tm-sidebar-left + .tm-main {
    padding-right: 40px;
    opacity: 0 !important;
  }
}

@media (min-width: 1400px) {
  .tm-sidebar-left {
    width: 300px !important;
    padding: 45px 45px 60px 45px;
  }

  .tm-sidebar-right {
    right: calc(100% + 60px);
  }

  .tm-sidebar-left + .tm-main {
    padding-right: 40px;
  }
}
</style>

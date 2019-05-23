<template>
    <div id="navbar" uk-sticky class="uk-navbar-container tm-navbar-container uk-active">
      <div class="uk-container uk-container-expand">
        <nav uk-navbar>
          <div class="uk-navbar-right">
            <!-- <a class="uk-navbar-toggle" @click="toggleSidebar()" uk-navbar-toggle-icon></a> -->
            <a href="#" class="uk-navbar-item uk-logo">
              <img src="../../assets/images/logo.svg"/>
            </a>
          </div>
          <div class="uk-navbar-left uk-light">
            <ul class="uk-navbar-nav">
              <li class="uk-active">
                <a href="#"><span class="uk-margin-small-left uk-margin-small-right"
                                  uk-icon="icon: chevron-down"></span>{{userFullName}}</a>
                <div uk-dropdown="pos: bottom-right; mode: click; offset: -17;">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-nav-header">تنظیمات</li>
                    <li><a href="#"><span class="uk-margin-small-left uk-margin-small-right"
                                          uk-icon="icon: cog"></span>ویرایش
                      پروفایل</a></li>
                    <li class="uk-nav-header">عملیات</li>
                    <li><a @click="logout()"><span class="uk-margin-small-left uk-margin-small-right" uk-icon="icon: sign-out"></span>خروج</a></li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="hamburger hamburger--slider"
                 @click="toggleSidebar()"
                 :class="{'is-active':isSidebarOpen}">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
import * as types from '../../store/types';

export default {
  name: 'app-header',
  computed: {
    user() {
      return this.$store.getters[types.AUTH_GET_USER];
    },
    isSidebarOpen() {
      return this.$store.getters[types.APP_GET_IS_SIDEBAR_OPEN];
    },
    userFullName() {
      return this.$store.getters[types.AUTH_GET_USER_FULLNAME];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch(types.AUTH_ACT_LOGOUT);
    },
    toggleSidebar() {
      this.$store.commit(types.APP_SET_IS_SIDEBAR_OPEN, !this.isSidebarOpen);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_component.scss";
.uk-navbar-container {
  background-color: $primary-color !important;
  .uk-logo {
    img {
      height: 90%;
    }
  }
  .uk-navbar-toggle,
  .uk-navbar-toggle:hover,
  .uk-navbar-toggle:active,
  .uk-navbar-toggle:visited {
    color: #ffffff;
    padding-top: 2px;
  }
  .hamburger-box {
    vertical-align: middle;
  }
}
</style>

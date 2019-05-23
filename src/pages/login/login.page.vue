<template>
  <app-anonymous-layout>
    <div id="login-page">
      <div class="uk-section-small">
        <div class="uk-margin uk-logo">
          <img src="../../assets/images/lightLogo.svg" class="uk-align-center">
        </div>
        <div class="uk-container uk-container-large">
          <div class="uk-flex uk-flex-center">
            <div class="uk-width-1-1@s uk-width-2-5@l uk-width-1-3@xl" style="perspective: 1300px">
              <div id="username-card" class="uk-card uk-card-default" :class="{ 'rotate-left': mode==2, 'rotate-right': mode==1 }">
                <div class="uk-card-body">
                  <form @submit.prevent="verifyUsername()">
                    <fieldset class="uk-fieldset">
                      <h2 class="uk-form-label">جهت ورود شماره موبایل خود را وارد نمایید</h2>
                      <div class="uk-margin">
                        <floating-labeled-input
                          v-model="user.username"
                          title="شماره موبایل"
                          icon="user">
                        </floating-labeled-input>
                        <span class="uk-text-danger" ng-if="preLoginError">{{preLoginError}}</span>
                      </div>
                      <div class="uk-margin uk-clearfix">
                        <loading-button
                          type="submit"
                          class="uk-button-primary uk-float-left"
                          :loading="isLoading">
                          <span uk-icon="icon: chevron-right">بعدی</span>
                        </loading-button>
                      </div>

                      <form class="has-separate-password">
                        <div class="uk-grid-small m0" uk-grid>
                          <input class="uk-input uk-text-center uk-background-muted uk-width-1-5" type="text" maxLength="1" size="1" min="0" max="9" autofocus/>
                          <input class="uk-input uk-text-center uk-background-muted uk-width-1-5" type="text" maxLength="1" size="1" min="0" max="9" />
                          <input class="uk-input uk-text-center uk-background-muted uk-width-1-5" type="text" maxLength="1" size="1" min="0" max="9" />
                          <input class="uk-input uk-text-center uk-background-muted uk-width-1-5" type="text" maxLength="1" size="1" min="0" max="9" />
                          <input class="uk-input uk-text-center uk-background-muted uk-width-1-5" type="text" maxLength="1" size="1" min="0" max="9" />
                        </div>
                      </form>

                      <hr class="uk-divider-icon uk-clearfix">

                      <center>
                        <label class="uk-form-label uk-clearfix">چنانچه حساب کاربری ندارید ثبت نام کنید</label>
                        <a href="register.html" class="uk-button uk-button-default uk-margin">
                          <strong>ایجاد حساب کاربری</strong>
                        </a>
                      </center>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div id="password-card" class="uk-card uk-card-default" :class="{ 'rotate-left': mode==2, 'rotate-right': mode==1}">
                <div class="uk-card-body">
                  <form  @submit.prevent="login()">
                    <fieldset class="uk-fieldset">
                      <floating-labeled-input
                        v-model="user.password"
                        title="شناسه عبور"
                        type="password"
                        icon="unlock">
                      </floating-labeled-input>
                      <span class="uk-text-danger" ng-if="loginError">{{loginError}}</span>
                      <div class="uk-margin uk-clearfix">
                        <loading-button class="uk-button-primary uk-float-left" type="submit" :loading="isLoading">
                          <span uk-icon="icon: chevron-right">ورود</span>
                        </loading-button>
                        <button type="button" class="uk-button uk-button-default uk-float-right uk-form-icon-flip" @click="setMode(1)">
                          <span href="index.html" uk-icon="icon: chevron-left"></span>بازگشت
                        </button>
                      </div>

                      <hr class="uk-divider-icon uk-clearfix">

                      <center>
                        <label class="uk-form-label uk-clearfix">چنانچه شناسه عبور را دریافت ننموده‌اید کلیک کنید</label>
                        <a class="uk-button uk-button-default uk-margin">
                          <strong>دریافت مجدد</strong>
                        </a>
                      </center>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-anonymous-layout>
</template>

<script>
import * as types from '../../store/types';
import * as authService from '../../services/auth.service';

export default {
  data() {
    return {
      isLoading: false,
      loginError: null,
      mode: 0, // 1: username. 2: password
      user: {
        username: '',
        password: ''
      },
      preLoginError: ''
    };
  },
  computed: {
    isLogedin() {
      return this.$store.getters[types.AUTH_GET_IS_LOGEDIN];
    }
  },
  methods: {
    setMode(mode) {
      this.mode = mode;
    },
    verifyUsername() {
      this.isLoading = true;
      authService.preAuthenticate(this.user.username).then((result) => {
        this.mode = 2;
        this.isLoading = false;
        this.preLoginError = '';
      }).catch(() => {
        this.preLoginError = 'شماره موبایل صحیح نمی باشد';
        this.isLoading = false;
      });
    },
    login() {
      this.isLoading = true;
      this.$store.dispatch(types.AUTH_ACT_LOGIN, this.user).then((result) => {
        this.$router.push('/');
      }).catch(() => {
        this.loginError = 'کلمه عبور صحیح نمی باشد';
        this.isLoading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  #login-page {
    .uk-logo {
      img {
        width: 200px;
        height: 150px;
      }
    }
    #username-card,
    #password-card {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    #username-card.rotate-left {
      transform: rotateY(-90deg);
      opacity: 0;
      transition: all 0.3s ease-out 0s;
    }
    #username-card.rotate-right {
      transform: rotateY(0);
      opacity: 1;
      transition: all 0.3s ease-out 0.3s;
    }
    #password-card {
      opacity: 0;
      transform: rotateY(90deg);
    }
    #password-card.rotate-left {
      opacity: 1;
      transform: rotateY(0);
      transition: all 0.3s ease-out 0.3s;
    }
    #password-card.rotate-right {
      opacity: 0;
      transform: rotateY(90deg);
      transition: all 0.3s ease-out 0s;
    }
  }
</style>

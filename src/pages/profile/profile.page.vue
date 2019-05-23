<template>
  <app-layout>
    <div class="uk-container uk-container-large">
      <div class="uk-section-small">
        <div class="uk-card uk-padding uk-card-default">
          <bread-crumb title="صفحه پروفایل" icon="user"></bread-crumb>
          <entity-selector
            :entity-name="'user'"
            :canCreate="true"
            :options="['فرزاد', 'نیما', 'پیام', 'مجید']"
            v-model="user_items">
          </entity-selector>
          <form class="uk-form-stacked">
            <form-field caption="نام خانوادگی" :validation="$v.fullName">
                <input type="text" class="uk-input" v-model="$v.fullName.$model" placeholder="نام خانوادگی"/>
            </form-field>
            <form-field caption="دوستان" :validation="$v.users">
              <v-select dir="rtl" v-model="$v.users.$model"
                        :options="['فرزاد', 'نیما', 'پیام', 'مجید']"></v-select>
            </form-field>
            <form-field caption="تاریخ تولد" :validation="$v.birthDate">
              <date-picker v-model="$v.birthDate.$model"></date-picker>
            </form-field>
            <pre dir="ltr">{{$v}}</pre>
          </form>
          <div class="uk-margin">
            <floating-labeled-input v-model="username" title="نام کاربری یا شماره تلفن" icon="user"></floating-labeled-input>
          </div>
          <div  class="uk-margin">
            <date-picker v-model="date"></date-picker>
          </div>
          <v-select dir="rtl" v-model="singleSelected" :options="['فرزاد', 'نیما', 'پیام', 'مجید']"></v-select>
          <h4 class="uk-margin">مقدار: {{ singleSelected }}</h4>
          <v-select multiple dir="rtl" v-model="multiSelected"
                    :options="['فرزاد', 'نیما', 'پیام', 'مجید']"></v-select>
          <h4 class="uk-margin">مقدار: {{ multiSelected }}</h4>
        </div>
      </div>
      <div class="uk-section-small">
        <div class="uk-card uk-padding uk-card-default">
          <div class="uk-grid-small uk-child-width-1-2@m uk-grid-match uk-grid uk-margin" uk-grid>
            <div class="uk-width-1-4">
              <floating-labeled-input v-model="username" title="نام" icon="user"></floating-labeled-input>
            </div>
            <div class="uk-width-1-4">
              <floating-labeled-input v-model="username" title="نام خانوادگی" icon="user"></floating-labeled-input>
            </div>
            <div class="uk-width-1-4">
              <date-picker v-model="date"></date-picker>
            </div>
            <div class="uk-width-1-4">
              <v-select dir="rtl" v-model="singleSelected" :options="['فرزاد', 'نیما', 'پیام', 'مجید']"></v-select>
            </div>
          </div>
          <div class="uk-grid-small uk-child-width-1-2@m uk-grid-match uk-grid" uk-grid>
            <div class="uk-width-1-4">
              <floating-labeled-input v-model="username" title="نام کاربری یا شماره تلفن" icon="user"></floating-labeled-input>
            </div>
            <div class="uk-width-1-4">
              <floating-labeled-input v-model="username" title="نام کاربری یا شماره تلفن" icon="user"></floating-labeled-input>
            </div>
            <div class="uk-width-1-4">
              <floating-labeled-input v-model="username" title="نام کاربری یا شماره تلفن" icon="user"></floating-labeled-input>
            </div>
            <div class="uk-width-1-4">
              <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">جستجو</button>
            </div>
          </div>
          <div class="uk-grid-small uk-child-width-1-2@m uk-grid-match uk-grid" uk-grid>
            <div class="uk-width-1-4">
              <form-field caption="نام خانوادگی" :validation="$v.fullName">
                  <input type="text" class="uk-input" v-model="$v.fullName.$model" placeholder="نام خانوادگی"/>
              </form-field>
            </div>
            <div class="uk-width-1-4">
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">نام خانوادگی</label>
                <input class="uk-input" id="form-stacked-text" type="text" placeholder="نام خانوادگی">
              </div>
            </div>
            <div class="uk-width-1-4">
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">تاریخ تولد</label>
                <date-picker v-model="date"></date-picker>
              </div>
            </div>
            <div class="uk-width-1-4">
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">جنسیت</label>
                <v-select dir="rtl" v-model="singleSelected" :options="['فرزاد', 'نیما', 'پیام', 'مجید']"></v-select>
              </div>
            </div>
          </div>
          <div class="uk-grid-small uk-child-width-1-2@m uk-grid-match uk-grid" uk-grid>
            <div class="uk-width-1-4">
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">نام</label>
                <input class="uk-input uk-form-danger" id="form-stacked-text" type="text" placeholder="نام">
              </div>
            </div>
            <div class="uk-width-1-4">
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">نام خانوادگی</label>
                <input class="uk-input uk-form-danger" id="form-stacked-text" type="text" placeholder="نام خانوادگی">
              </div>
            </div>
            <div class="uk-width-1-4">
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">تاریخ تولد</label>
                <date-picker v-model="date"></date-picker>
              </div>
            </div>
            <div class="uk-width-1-4">
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">جنسیت</label>
                <v-select multiple dir="rtl" v-model="multiSelected" :options="['فرزاد', 'نیما', 'پیام', 'مجید']"></v-select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-section-small uk-padding-remove-top">
        <div class="uk-card uk-card-default">
          <table class="uk-table uk-table-responsive uk-table-divider">
            <thead>
            <tr>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>سن</th>
              <th>پست اداری</th>
            </tr>
            </thead>
            <tbody class="uk-text-center uk-text-right@m">
            <tr>
              <td><strong class="uk-hidden@m ml10">نام:</strong>فرزاد</td>
              <td><strong class="uk-hidden@m ml10">نام خانوادگی:</strong>مهانیان</td>
              <td><strong class="uk-hidden@m ml10">سن:</strong>۳۰</td>
              <td><strong class="uk-hidden@m ml10">پست اداری:</strong>برنامه نویس</td>
            </tr>
            <tr>
              <td><strong class="uk-hidden@m ml10">نام:</strong>پیام</td>
              <td><strong class="uk-hidden@m ml10">نام خانوادگی:</strong>حروفچین</td>
              <td><strong class="uk-hidden@m ml10">سن:</strong>۳۵</td>
              <td><strong class="uk-hidden@m ml10">پست اداری:</strong>مدیر کل همه شرکت</td>
            </tr>
            <tr>
              <td><strong class="uk-hidden@m ml10">نام:</strong>نیما</td>
              <td><strong class="uk-hidden@m ml10">نام خانوادگی:</strong>بغدادی</td>
              <td><strong class="uk-hidden@m ml10">سن:</strong>۳۳</td>
              <td><strong class="uk-hidden@m ml10">پست اداری:</strong>برنامه نویس</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'profile-page',
  data: () => {
    return {
      username: 'nima',
      date: '',
      birthDate: '',
      singleSelected: '',
      multiSelected: '',
      fullName: '',
      users: null,
      user_items: []
    };
  },
  validations: {
    fullName: {
      required,
      minLength: minLength(2)
    },
    users: {
      required
    },
    birthDate: {
      required
    }
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss">
</style>

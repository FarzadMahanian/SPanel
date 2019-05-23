<template>
  <app-layout>
    <div class="uk-section-small">
      <div class="uk-container uk-container-large">
        <bread-crumb title="داشبورد" icon="lifesaver"/>
        <div uk-grid class="uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-4@xl">
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <span class="statistics-text">کاربران جدید</span><br/>
              <span class="statistics-number">
                  ۶۷۵۷
                  <span class="uk-label uk-label-success">
                      ۷% <span class="ion-arrow-up-c"></span>
                  </span>
              </span>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <span class="statistics-text">تعداد سفارشات</span><br/>
              <span class="statistics-number">
                  ۵۴۳۳۴
                  <span class="uk-label uk-label-danger">
                      ۱۳% <span class="ion-arrow-down-c"></span>
                  </span>
              </span>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <span class="statistics-text">مجموع پرداخت‌ها</span><br/>
              <span class="statistics-number">
                  ۱۲۳
                  <span class="uk-label uk-label-success">
                      ۲۷% <span class="ion-arrow-up-c"></span>
                  </span>
              </span>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <span class="statistics-text">سود ماهانه</span><br/>
              <span class="statistics-number">
                  ۶۵۴۰۰ ریال
              </span>
            </div>
          </div>
        </div>
        <div uk-grid class="uk-child-width-1-1@s uk-child-width-1-2@l">
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-header">نمودار ماهانه</div>
              <div class="uk-card-body">
                <canvas id="chart1"></canvas>
              </div>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-header">فروش روزانه</div>
              <div class="uk-card-body">
                <canvas id="chart2"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
export default {
  name: 'home-page',
  data: () => {
    return {
    };
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style>

</style>

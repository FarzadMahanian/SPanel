<template>
  <app-layout>
    <div class="uk-container uk-container-large">
      <div class="uk-section-small">
        <div class="uk-card uk-padding uk-card-default">
          <bread-crumb title="لیست درخواست‌ها" icon="table"></bread-crumb>
          <form class="has-gray-inputs">
            <div class="uk-grid-small uk-grid-match uk-grid uk-margin" uk-grid>
              <div class="uk-width-1-2@s uk-width-1-4@l">
                <form-field caption="نوع درخواست">
                  <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></span>
                  <v-select placeholder="نوع درخواست" dir="rtl" v-model="singleSelected" :options="['نگهداری', 'پرستاری', 'تعمیرات', 'نظافت']"></v-select>
                </form-field>
              </div>
              <div class="uk-width-1-2@s uk-width-1-4@l">
                <form-field caption="وضعیت درخواست">
                  <v-select placeholder="وضعیت درخواست" dir="rtl" v-model="singleSelected" :options="['در حال انجام', 'درخواست جدید', 'انجام شده', 'متوقف شده']"></v-select>
                </form-field>
              </div>
              <div class="uk-width-1-2@s uk-width-1-4@l">
                <form-field caption="از تاریخ">
                  <date-picker v-model="date" placeholder="از تاریخ"></date-picker>
                </form-field>
              </div>
              <div class="uk-width-1-2@s uk-width-1-4@l">
                <form-field caption="شماره تلفن">
                  <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: receiver"></span>
                  <input class="uk-input" type="number" min="0" placeholder="شماره تلفن">
                </form-field>
              </div>
              <div class="uk-width-1-2@s uk-width-1-4@l">
                <form-field caption="کاربران درخواست">
                  <v-select multiple dir="rtl" placeholder="کاربران درخواست" v-model="multiSelected" :options="['فرزاد', 'نیما', 'پیام', 'مجید']"></v-select>
                </form-field>
              </div>
              <div class="uk-width-1-2@s uk-width-1-4@l">
                <form-field caption="وضعیت پرداخت">
                  <v-select dir="rtl" v-model="singleSelected" placeholder="وضعیت پرداخت" :options="['در حال انجام', 'درخواست جدید', 'انجام شده', 'متوقف شده']"></v-select>
                </form-field>
              </div>
              <div class="uk-width-1-2@s uk-width-1-4@l">
                <form-field caption="تا تاریخ">
                  <date-picker v-model="date" placeholder="تا تاریخ"></date-picker>
                </form-field>
              </div>
              <div class="uk-width-1-2@s uk-width-1-4@l">
                <form-field>
                  <button class="uk-button uk-button-primary uk-width-1-1">جستجو</button>
                </form-field>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="uk-section-small uk-padding-remove-top">
        <div class="uk-card uk-card-default">
          <div class="uk-padding-small">
            <p class="m0" uk-margin>
              <button class="uk-button uk-button-primary" uk-toggle="target: #new-order-modal"><span class="uk-margin-small-left" uk-icon="icon: plus"></span>اضافه کردن</button>
              <button class="uk-button uk-button-default"><span class="uk-margin-small-left" uk-icon="icon: trash"></span>پاک کردن</button>
            </p>
          </div>
          <hr class="m0">
          <data-table
            @queryChanged="fetchOrdersData"
            :columns="ordersTable.columns"
            :query="ordersTable.query"
            :data="ordersTable.data">
          </data-table>
        </div>
      </div>
    </div>

    <div id="new-order-modal" class="uk-modal" uk-modal>
      <div class="uk-modal-dialog uk-width-1-1">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
          <h3>ثبت درخواست</h3>
        </div>
        <div class="uk-modal-body p0">
          <div class="uk-grid-small m0" uk-grid>
            <div class="uk-width-1-2@s uk-width-3-4@m uk-background-default uk-padding">
              <form>
                <label>درخواست دهنده</label>
                <p uk-margin>
                  <button class="uk-button uk-button-default"><span class="uk-margin-small-left" uk-icon="icon: search"></span>انتخاب مشتری</button>
                  <button class="uk-button uk-button-primary" uk-toggle="target: #new-order-modal"><span class="uk-margin-small-left" uk-icon="icon: plus"></span>اضافه کردن مشتری جدید</button>
                </p>
                <div class="uk-grid-small" uk-grid>
                  <div class="uk-width-1-3@m">
                    <form-field caption="نوع درخواست">
                      <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
                      <input class="uk-input" type="text" placeholder="مثلا درخواست نظافت">
                    </form-field>
                    <label><input class="uk-checkbox" type="checkbox"> نوع خدمت را نمی داند و احتیاج به مشاوره دارد</label>
                  </div>
                </div>
                <div class="uk-grid-small" uk-grid>
                  <div class="uk-width-1-3@m">
                    <form-field caption="تاریخ سرویس">
                      <date-picker v-model="date" placeholder="تاریخ سرویس"></date-picker>
                    </form-field>
                  </div>
                  <div class="uk-width-1-3@m">
                    <form-field caption="به مدت">
                      <v-select placeholder="به مدت" dir="rtl" v-model="singleSelected" :options="['۱ روز', '۲ روز', '۳ روز', '۴ روز', '۵ روز', '۶ روز', '۷ روز']"></v-select>
                    </form-field>
                  </div>
                  <div class="uk-width-1-3@m">
                    <form-field caption="هر">
                      <v-select placeholder="هر" dir="rtl" v-model="singleSelected" :options="['هفته', 'ماه', 'سال']"></v-select>
                    </form-field>
                  </div>
                </div>
                <form-field caption="درباره درخواست">
                  <textarea class="uk-textarea" rows="7"></textarea>
                </form-field>
              </form>
            </div>
            <div class="uk-width-1-2@s uk-width-1-4@m uk-background-muted uk-padding">
              <form>
                <form-field caption="وضعیت درخواست" class="m0">
                  <v-select placeholder="وضعیت درخواست" dir="rtl" v-model="singleSelected" :options="['در حال انجام', 'درخواست جدید', 'انجام شده', 'متوقف شده']"></v-select>
                </form-field>
                <form-field class="m0">
                  <textarea class="uk-textarea" rows="5" placeholder="توضیح درباره تغییر وضعیت"></textarea>
                </form-field>
                <form-field caption="ثبت کننده درخواست">
                  <input class="uk-input" type="text" placeholder="مثلا فرزاد مهانیان">
                </form-field>
                <form-field caption="تاریخ درخواست">
                  <date-picker v-model="date" placeholder="تاریخ درخواست"></date-picker>
                </form-field>
                <form-field caption="توضیحات">
                  <textarea class="uk-textarea" rows="5"></textarea>
                </form-field>
              </form>
            </div>
          </div>
        </div>
        <div class="uk-modal-footer uk-text-right">
          <button class="uk-button uk-button-primary" type="button">ذخیره و ثبت</button>
          <button class="uk-button uk-button-default uk-modal-close" type="button">انصراف</button>
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
      username: '',
      date: '',
      birthDate: '',
      singleSelected: '',
      multiSelected: '',
      fullName: '',
      users: null,
      ordersTable: {
        query: {
          sort: 'number',
          direction: 'dsc',
          pageSize: 4,
          pageIndex: 0,
          totalCount: 10
        },
        columns: [{
          field: 'id',
          caption: '',
          sortable: false,
          render: (item) => (h) => {
            return (
              <td class="uk-text-middle uk-text-center">
                <div class="uk-inline">
                  <span class="more-option" uk-icon="icon: more"></span>
                  <div class="uk-padding-small" uk-dropdown="mode: click">
                    <ul class="uk-nav uk-dropdown-nav uk-text-right">
                      <li>
                        <a href="#"><span class="uk-margin-small-left" uk-icon="icon: file-edit"></span>ویرایش</a>
                      </li>
                      <li><a href="#"><span class="uk-margin-small-left" uk-icon="icon: trash"></span>حذف</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            );
          }
        }, {
          field: 'number',
          caption: 'شماره',
          sortable: true,
          render: (item) => (h) => {
            return (
              <td class="uk-text-middle uk-width-small">
                <strong class="uk-hidden@m ml10">شماره:</strong>
                <span>{item.id}</span>
                <span class={'uk-label uk-label-' + item.color}></span>
              </td>
            );
          }
        }, {
          field: 'status',
          caption: 'نوع و آخرین وضعیت',
          sortable: true,
          render: (item) => (h) => {
            return (
              <td class="uk-text-middle">
                <strong class="uk-hidden@m ml10">نوع و آخرین وضعیت:</strong>
                <h6 class="mb10">{item.type} <span class={'uk-text-' + item.color}>({item.status})</span></h6>
                <h6 class="uk-text-muted">{item.address}</h6>
              </td>
            );
          }
        }, {
          field: 'client',
          caption: 'خدمت رسان و خدمت خواه',
          sortable: true,
          render: (item) => (h) => {
            return (
              <td class="uk-text-middle">
                <strong class="uk-hidden@m ml10">خدمت رسان و خدمت خواه:</strong>
                <h6 class="mb10"><span class="uk-margin-small-left" uk-icon="icon: user"></span>{item.user}</h6>
                <h6><span class="uk-margin-small-left" uk-icon="icon: nut"></span>{item.client}</h6>
              </td>
            );
          }
        }, {
          field: 'payment',
          caption: 'وضعیت پرداخت',
          sortable: true,
          render: (item) => (h) => {
            return (
              <td class="uk-text-middle">
                <strong class="uk-hidden@m ml10">وضعیت پرداخت:</strong>
                <span uk-icon={'icon: ' + item.payment + '; ratio: 2'}></span>
              </td>
            );
          }
        }, {
          field: 'date',
          caption: 'زمان درخواست',
          sortable: true,
          render: (item) => (h) => {
            return (
              <td class="uk-text-middle">
                <strong class="uk-hidden@m ml10">زمان درخواست:</strong>{item.time}
              </td>
            );
          }
        }],
        data: []
      }
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
    fetchOrdersData(query) {
      console.log(query);
      this.ordersTable.data = [{
        id: 1234,
        color: 'primary',
        type: 'درخواست نظافت',
        status: 'درحال انجام',
        address: 'بلوارآفریقا - خ خلیل زاده شماره ۲۸',
        user: 'پیام حروفچین',
        client: 'سعید تبریزی',
        payment: 'cash',
        time: '۲ ساعت پیش'
      }, {
        id: 1235,
        color: 'success',
        type: 'درخواست نظافت',
        status: 'درحال انجام',
        address: 'بلوارآفریقا - خ خلیل زاده شماره ۲۸',
        user: 'پیام حروفچین',
        client: 'سعید تبریزی',
        payment: 'credit-card',
        time: '۲ ساعت پیش'
      }, {
        id: 1236,
        color: 'warning',
        type: 'درخواست نظافت',
        status: 'درحال انجام',
        address: 'بلوارآفریقا - خ خلیل زاده شماره ۲۸',
        user: 'پیام حروفچین',
        client: 'سعید تبریزی',
        payment: 'cash',
        time: '۲ ساعت پیش'
      }, {
        id: 1237,
        color: 'danger',
        type: 'درخواست نظافت',
        status: 'درحال انجام',
        address: 'بلوارآفریقا - خ خلیل زاده شماره ۲۸',
        user: 'پیام حروفچین',
        client: 'سعید تبریزی',
        payment: 'credit-card',
        time: '۲ ساعت پیش'
      }];
    }
  }
};
</script>

<style lang="scss">
</style>

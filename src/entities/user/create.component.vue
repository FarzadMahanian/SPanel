<template>
  <form class="uk-form-stacked">
    <form-field caption="نام خانوادگی"
      :validation="$v.fullName">
      <input type="text"
        class="uk-input"
        v-model="$v.fullName.$model"
        placeholder="نام خانوادگی" />
    </form-field>
    <form-field caption="دوستان"
      :validation="$v.users">
      <v-select dir="rtl"
        v-model="$v.users.$model"
        :options="['فرزاد', 'نیما', 'پیام', 'مجید']"></v-select>
    </form-field>
    <form-field caption="تاریخ تولد"
      :validation="$v.birthDate">
      <date-picker v-model="$v.birthDate.$model"></date-picker>
    </form-field>
    <div class="uk-margin-small-top">
      <button class="uk-button uk-button-primary" @click="onSubmit">
        انتخاب
      </button>
      <button class="uk-button uk-button-secondary" @click="$emit('cancel')">
        بازگشت
      </button>
    </div>
  </form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'user-create-component',
  data: () => {
    return {
      birthDate: '',
      fullName: '',
      users: null
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
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return null;
      }
      const result = {
        birthDate: this.birthDate,
        fullName: this.fullName,
        users: this.users
      };
      this.$emit('submit', result);
    }
  }
};
</script>

<template>
  <div class="form-validation-wrapper" v-if="invalid">
    <span class="error" v-if="!validation.required">
        فیلد {{caption}} الزامی می باشد.
    </span>
    <span class="error" v-if="!validation.minLength">
      فیلد {{caption}} باید حداقل {{minLength}} حرف داشته باشد.
    </span>
  </div>
</template>

<script>
export default {
  name: 'validation-messages',
  props: {
    caption: String,
    validation: Object
  },
  computed: {
    invalid() {
      return this.validation && this.validation.$invalid && this.validation.$dirty;
    },
    minLength() {
      return this.validation.$params.minLength && this.validation.$params.minLength.min;
    }
  }
};
</script>

<style lang="scss">
.form-validation-wrapper {
  span {
    display: none;
    margin-right: 5px;
    font-size: .7em;
    margin-top: 5px;
  }
  span:first-child {
    display: block;
  }
}
</style>

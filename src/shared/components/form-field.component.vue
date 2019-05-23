<template>
  <div class="uk-margin form-field" :class="{'uk-form-danger': invalid}">
    <label class="uk-form-label" v-html="caption"></label>
    <div class="uk-form-controls">
      <slot></slot>
      <validation-messages :validation="validation" :caption="caption"></validation-messages>
    </div>
  </div>
</template>

<script>
import ValidationMessages from './validation-messages.component.vue';

export default {
  components: {
    ValidationMessages
  },
  props: {
    caption: {
      type: String,
      default: '&nbsp;'
    },
    validation: Object
  },
  data: () => {
    return {

    };
  },
  computed: {
    invalid() {
      return this.validation && this.validation.$invalid && this.validation.$dirty;
    }
  }
};
</script>

<style lang="scss">
.form-field {
  position: relative;

  .uk-icon {
    padding-top: 20px;
  }
}
</style>

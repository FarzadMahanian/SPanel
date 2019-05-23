<template>
  <div class="uk-margin labeled-input uk-margin" :class="{'form-invalid': invalid}">
    <div class="uk-position-relative" :class="{ focused: focused==true || value!='' }">
      <label :for="id">{{title}}</label>
      <span class="uk-form-icon uk-form-icon-flip" :uk-icon="'icon: '+icon"></span>
      <input :id="id"
             class="uk-input"
             :class="{'uk-form-danger': invalid }"
             :type="type"
             :value="value"
             @input="emitChange($event.target.value)"
             @focus="focused=true"
             @blur="focused=false"/>
    </div>
    <validation-messages :validation="validation" :caption="title"></validation-messages>
  </div>
</template>

<script>
import ValidationMessages from './validation-messages.component.vue';
import utilityService from '../../services/utility.service';

export default {
  name: 'floating-labeled-input',
  components: {ValidationMessages},
  props: {
    title: String,
    icon: String,
    value: String,
    validation: Object,
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      focused: false
    };
  },
  computed: {
    id() {
      return utilityService.randomString(5);
    },
    invalid() {
      return this.validation && this.validation.$invalid && this.validation.$dirty;
    }
  },
  methods: {
    emitChange(val) {
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../../node_modules/uikit/src/scss/variables";

  .labeled-input {
    label {
      position: absolute;
      left: auto;
      right: 10px;
      top: 50%;
      color: #999;
      background-color: #FFFFFF;
      padding: 0 7px;
      transform: translateY(-50%);
      transition: all 0.2s ease-out 0s;
    }
    .focused {
      label {
        top: -10px;
        color: #333;
        font-size: 12px;
        transform: translateY(0);
      }
    }
    &.form-invalid {
      color: $global-danger-background;
      .focused {
        label {
          font-weight: bold;
          color: $global-danger-background;
        }
      }
    }
  }
</style>

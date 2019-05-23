<template>
  <div>
    <v-select v-model="selectValue" :options="options"></v-select>
    <div class="uk-margin-small-top">
      <button class="uk-button uk-button-primary" @click="$emit('input',selectValue)">
        انتخاب
      </button>
      <button class="uk-button uk-button-secondary" @click="$emit('cancel')">
        بازگشت
      </button>
    </div>
  </div>

</template>

<script>
export default {
  props: ['value', 'options'],
  data() {
    return {
      selectValue: this.value
    };
  }
};
</script>

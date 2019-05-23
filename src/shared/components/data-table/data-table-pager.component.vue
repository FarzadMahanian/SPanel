<template>
    <ul class="uk-pagination uk-flex-center uk-padding-small" uk-margin v-if="pageCount>1">
      <li><a @click="goto(0)"><span uk-pagination-previous></span></a></li>
      <li v-for="p in pageCount"
          :key="p"
          :class="{'uk-active':(p-1)===pageIndex}">
          <a @click="goto(p-1)">{{p}}</a>
      </li>
      <li><a @click="goto(pageCount-1)"><span uk-pagination-next></span></a></li>
    </ul>
</template>

<script>
export default {
  props: ['totalCount', 'pageSize', 'pageIndex'],
  computed: {
    pageCount() {
      return Math.ceil(this.totalCount / this.pageSize);
    }
  },
  methods: {
    goto(page) {
      if (page !== this.pageIndex) {
        this.$emit('pageChanged', page);
      }
    }
  }
};
</script>

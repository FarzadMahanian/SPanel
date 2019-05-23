<template>
  <table class="uk-table uk-table-responsive uk-table-divider uk-table-striped data-table">
    <thead>
      <tr>
        <th v-for="col in columns"
            :key="col.field"
            :class="{sortable: col.sortable, sorted: query.sort===col.field}"
            @click="sort(col)">
          <span>{{col.caption}}</span>
          <span v-if="query.sort===col.field"
                class="uk-margin-small-right uk-float-left arrow-icon"
                uk-icon="icon: arrow-down"
                :class="query.direction+'-sort'"></span>
        </th>
      </tr>
    </thead>
    <tbody class="uk-text-center uk-text-right@m">
      <tr v-for="item in data" :item="item" :key="item.id">
        <jsx-renderer
          v-for="col in columns"
          :key="col.field"
          :renderi="col.render(item, col)"></jsx-renderer>
      </tr>
      <!-- <slot v-for="item in data" :item="item"></slot> -->
    </tbody>
    <tfoot>
      <tr class="t-footer">
        <td :colspan="columns.length">
          <data-table-pager v-bind="query" @pageChanged="pageChanged"></data-table-pager>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import DataTablePager from './data-table-pager.component.vue';

export default {
  name: 'data-table',
  components: {
    DataTablePager
  },
  props: {
    columns: {
      required: true,
      type: Array
    },
    data: {
      required: true,
      type: Array
    },
    query: {
      required: true,
      type: Object
    }
  },
  mounted() {
    this.$emit('queryChanged', this.query);
  },
  data() {
    return {};
  },
  methods: {
    sort(col) {
      if (!col.sortable) {
        return;
      }
      if (col.field === this.query.sort) {
        this.query.direction = this.query.direction === 'asc' ? 'dsc' : 'asc';
      } else {
        this.query.sort = col.field;
        this.query.direction = 'asc';
      }
      this.$emit('queryChanged', this.query);
    },
    pageChanged(page) {
      this.query.pageIndex = page;
      this.$emit('queryChanged', this.query);
    }
  }
};
</script>

<style lang="scss">
  @import "../../../assets/styles/component";
  .data-table {
    thead {
      th {
        &.sortable {
          cursor: pointer;
          &:hover {
            background-color: $bg-gray;
          }
        }
        .arrow-icon {
          @include transition(all 0.3s ease-out 0s);
          &.asc-sort {
            @include rotate(0);
          }
          &.dsc-sort {
            @include rotate(180deg);
          }
        }
      }
    }
    tbody {
      tr {
        &:hover {
          .more-option {
            opacity: 1;
          }
        }
        td {
          h1, h2, h3, h4, h5, h6 {
            margin: 0;
          }
          .uk-dropdown {
            margin-top: 3px;
          }
          .uk-label {
            width: 20px;
            height: 20px;
            padding: 0;
            @include border-radius(50%);
          }
          .more-option {
            cursor: pointer;
            opacity: 1;
            padding: 3px;
            @include transition(all 0.3s ease-out 0s);
            @include breakpoint($medium) {
              opacity: 0;
            }
            &:hover {
              background-color: #ccc;
            }
          }
        }
      }
      .t-footer {
        background-color: $bg-gray;
        tr {
          td {
            .uk-pagination {
              li {
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
</style>

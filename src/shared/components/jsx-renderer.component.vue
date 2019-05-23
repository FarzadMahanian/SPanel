<script>
export default {
  props: {
    renderi: {
      required: true,
      type: Function
    }
  },
  render(h) {
    return this.renderi(h);
  }
};
</script>

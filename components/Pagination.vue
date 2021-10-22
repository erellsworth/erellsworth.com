<template>
  <section>
    <hr />
    <b-pagination
      :total="total"
      v-model="current"
      range-before="3"
      range-after="1"
      order="is-centered"
      :per-page="perPage"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      @change="pageChange()"
    />
  </section>
</template>

<script>
export default {
  name: "Pagination",
  props: ["total", "perPage", "page"],
  methods: {
    pageChange() {
      this.$emit("pageChange", this.current);
    },
  },
  data() {
    return {
      current: this.page,
      rangeBefore: 3,
      rangeAfter: 1,
    };
  },
};
</script>
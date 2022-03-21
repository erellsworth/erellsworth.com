<template>
  <section class="section">
    <CanvasNav />

    <ContentGrid :contents="contents" />
    <Pagination
      :total="total"
      perPage="6"
      :page="page"
      @pageChange="pageChange($event)"
    />
  </section>
</template>

<script>
export default {
  name: "HomePage",
  head: {
    title: "E.R. Ellsworth",
  },
  methods: {
    pageChange(page) {
      this.$router.push("/blog/" + page);
    },
  },
  async asyncData({ $axios, params }) {
    let url = "api";

    if (params.page) {
      url += `/blog/${params.page}`;
    }

    let response = await $axios.$get(url);

    return response.data;
  },
};
</script>

<template>
  <section class="section">
    <ContentGrid :contents="contents" />
    <Pagination
      :total="total"
      :perPage="6"
      :page="page"
      @pageChange="pageChange($event)"
    />
  </section>
</template>

<script>
export default {
  name: "Tag",
  head() {
    return {
      title: `E.R. Ellsworth - ${this.params.tag}`,
    };
  },
  methods: {
    pageChange(page) {
      console.log("page change");
      this.$router.push(`/tag/${this.params.tag}/${page}`);
    },
  },
  async asyncData({ params, $axios, error }) {
    let url = `api/tag/${params.tag}`;
    if (params.page) {
      url += `/${params.page}`;
    }
    const response = await $axios.$get(url);

    if (!response.success) {
      error({
        statusCode: response.error.code,
        message: response.error.message,
      });
      return;
    }

    const { contents, total, page } = response.data;

    return {
      contents,
      total,
      page,
      params,
    };
  },
};
</script>

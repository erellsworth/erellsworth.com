<template>
  <section class="section">
    <ContentGrid :contents="contents" />
    <Pagination
      :total="contents.count"
      :perPage="contents.perPage"
      :current="page"
      @pageChange="pageChange($event)"
    />
  </section>
</template>

<script>
const params = {
  page: 1,
};

export default {
  name: "HomePage",
  head: {
    title: "E.R. Ellsworth",
  },
  methods: {
    async pageChange(page) {
      params.page = page;
      this.contents = await this.$axios.$get("api", { params });
    },
  },
  async asyncData({ $axios }) {
    const contents = await $axios.$get("api", { params });
    return {
      contents,
      page: params.page,
    };
  },
};
</script>

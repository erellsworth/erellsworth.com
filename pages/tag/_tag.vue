<template>
  <div class="container">
    <section class="hero has-background-black">
      <h1 class="title has-text-primary-light py-3">{{ name }}</h1>
      <b-image v-if="image" :src="image.full" />
    </section>
    <section class="section">
      <ContentGrid :contents="contents" />
      <Pagination
        :total="total"
        :perPage="6"
        :page="page"
        @pageChange="pageChange($event)"
      />
    </section>
  </div>
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
      this.$router.push(`/tag/${this.params.tag}/${page}`);
    },
  },
  async asyncData({ params, $axios, error }) {
    let url = `api/tag/${params.tag}`;
    let page = 1;

    if (params.page) {
      url += `/${params.page}`;
      page = params.page;
    }

    const response = await $axios.$get(url);

    if (!response.success) {
      error({
        statusCode: response.error.code,
        message: response.error.message,
      });
      return;
    }

    const { content, image, name } = response.data;
    const { contents, total } = content;

    return {
      contents,
      name,
      image,
      total,
      page: parseInt(page),
      params,
    };
  },
};
</script>

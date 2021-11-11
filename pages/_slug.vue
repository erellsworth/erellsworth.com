<template>
  <div class="container">
    <section class="section">
      <h1 class="title">{{ content.title }}</h1>
      <img :src="content.thumbnail" />
    </section>
    <section class="section columns is-centered">
      <div class="content column is-half is-medium" v-html="content.html"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Content",
  head() {
    return {
      title: `E.R. Ellsworth - ${this.content.title}`,
    };
  },
  async asyncData({ params, $axios, error }) {
    const response = await $axios.$get(`api/${params.slug}`);

    if (!response.success) {
      error({
        statusCode: response.error.code,
        message: response.error.message,
      });
      return;
    }

    return { content: response.data, params };
  },
};
</script>

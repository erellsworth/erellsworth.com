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
  async asyncData({ params, $axios }) {
    const content = await $axios.$get(`api/${params.slug}`);
    console.log("content", content);
    return { content, params };
  },
};
</script>

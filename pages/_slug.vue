<template>
  <div class="container">
    <section class="section">
      <h1 class="title">{{ content.title }}</h1>
      <img :src="content.thumbnail" />
    </section>
    <section class="section columns is-centered">
      <div class="content column is-half is-medium" v-html="content.html"></div>
    </section>
    <section class="section columns is-centered">
      <TagLinks :tags="content.Taxonomies" />
    </section>
  </div>
</template>

<script>
import { getMeta } from "../helpers";

export default {
  name: "Content",
  head() {
    return {
      title: `E.R. Ellsworth - ${this.content.title}`,
      meta: this.meta,
      link: [
        {
          rel: "canonical",
          href: `https://erellsworth.com/${this.content.slug}`,
        },
      ],
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

    const meta = getMeta(response.data);

    return { content: response.data, params, meta };
  },
};
</script>

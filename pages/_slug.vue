<template>
  <div class="container">
    <TitleImage :title="content.title" :image="image" />
    <section class="section has-background-dark">
      <div class="columns is-centered">
        <div
          class="
            content
            dynamic-content
            column
            is-half is-medium
            has-text-primary-light
          "
          v-html="content.html"
        ></div>
      </div>
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
  mounted() {
    const readContentIds = this.$root.context.$localStore.get(
      "readContentIds",
      []
    );
    if (!readContentIds.includes(this.content.id)) {
      readContentIds.push(this.content.id);
      this.$root.context.$localStore.save("readContentIds", readContentIds);
    }
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

    let image;

    if (response.data.image) {
      image = response.data.image.full;
    }

    return { content: response.data, image, params, meta };
  },
};
</script>

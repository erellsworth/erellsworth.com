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
            is-two-thirds is-medium
            has-text-primary-light
          "
          v-html="html"
        ></div>
      </div>
    </section>

    <section class="columns is-centered">
      <TagLinks :tags="content.Taxonomies" />
    </section>

    <hr />

    <section class="columns is-centered">
      <b-button
        tag="a"
        href="https://erellsworth.substack.com/"
        target="_blank"
        label="Subscribe"
        type="is-primary"
        size="is-medium"
        title="Subscribe on Substack"
      />
    </section>
  </div>
</template>

<script>
import { getMeta } from "../helpers";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Video from "../components/tiptap/VideoNode";
import FigCaption from "../components/tiptap/FigCaption";
import FigureNode from "../components/tiptap/FigureNode";

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

    const content = response.data;
    let html = content.html;

    if (content.content) {
      html = generateHTML(content.content, [
        StarterKit,
        Image,
        Video,
        FigCaption,
        FigureNode,
      ]);
    }

    return { content, html, image, params, meta };
  },
};
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <NuxtLink :to="`/${content.slug}`">
          <b-image
            v-if="content.image"
            :src="content.image.thumbnail"
            :alt="content.title"
            ratio="16by9"
          ></b-image>
        </NuxtLink>
      </figure>
    </div>
    <div class="card-content has-background-primary">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">
            <NuxtLink :to="`/${content.slug}`" class="has-text-light">{{
              content.title
            }}</NuxtLink>
          </p>
        </div>
      </div>

      <div class="content">
        <p class="has-text-black">
          <strong>{{ content.seo.description }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLink",
  props: ["content"],
};
</script>

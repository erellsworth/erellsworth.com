<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <NuxtLink :to="`/${content.slug}`">
          <b-image
            :src="content.thumbnail"
            alt="The Buefy Logo"
            ratio="16by9"
          ></b-image>
        </NuxtLink>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">
            <NuxtLink :to="`/${content.slug}`">{{ content.title }}</NuxtLink>
          </p>
        </div>
      </div>

      <div class="content">
        <p>{{ content.seo.description }}</p>
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

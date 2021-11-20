<template>
  <section class="hero has-background-black">
    <h1 class="title has-text-primary-light p-3">{{ title }}</h1>
    <b-image v-if="image" :src="image" />
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-top: 2rem;
  h1 {
    position: absolute;
    z-index: 10;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
  }
  .image {
    position: relative;
    z-index: 1;
  }
}
</style>

<script>
export default {
  name: "TitleImage",
  props: ["title", "image"],
};
</script>
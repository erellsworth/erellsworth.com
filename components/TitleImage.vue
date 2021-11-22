<template>
  <section class="hero" v-if="image">
    <h1 class="title has-text-light p-3 with-image">{{ title }}</h1>
    <b-image :src="image" />
  </section>
  <section class="hero" v-else>
    <h1 class="title has-text-light p-3">{{ title }}</h1>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-top: 2rem;
  h1 {
    position: absolute;
    z-index: 10;
    width: 100%;
    &.with-image {
      background: rgba(0, 0, 0, 0.3);
    }
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
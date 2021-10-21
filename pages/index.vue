<template>
  <section class="section">
    <ContentGrid :contents="contents" />
  </section>
</template>

<script>
export default {
  name: "HomePage",
  head: {
    title: "E.R. Ellsworth",
  },
  async asyncData({ $axios }) {
    const contents = await $axios.$get("api");
    return { contents };
  },
};
</script>

<template>
  <section class="section">
    <ul>
      <li v-for="content in contents" :key="content.id">{{ content.title }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  head: {
    title: "E.R. Ellsworth",
  },
  async asyncData({ $axios }) {
    const contents = await $axios.$get("api/content");
    return { contents };
  },
};
</script>

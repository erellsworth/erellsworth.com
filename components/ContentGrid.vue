<template>
  <section class="content_section section">
    <div class="columns is-multiline">
      <div class="column is-half" v-for="content in contents" :key="content.id">
        <CardLink :content="content" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContentGrid",
  props: ["contents"],
};
</script>

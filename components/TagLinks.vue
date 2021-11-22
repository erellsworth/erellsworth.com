<template>
  <section>
    <div class="buttons">
      <b-button
        tag="router-link"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/tag/${tag.slug}`"
        type="is-primary"
      >
        {{ tag.name }}
      </b-button>
    </div>
  </section>
</template>

<script>
export default {
  name: "TagLinks",
  props: ["tags"],
};
</script>
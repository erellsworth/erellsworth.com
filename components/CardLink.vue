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
    <div class="card-content" v-bind:class="backgroundClass">
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
        <p>
          <strong v-bind:class="descriptionClass">{{
            content.seo.description
          }}</strong>
          <b-icon
            v-if="hasBeenRead"
            icon="checkbox-marked-circle"
            size="is-small"
            type="is-info"
          >
          </b-icon>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const componentData = {
  readIds: [],
};

export default {
  name: "CardLink",
  props: ["content"],
  data() {
    return componentData;
  },
  mounted() {
    componentData.readIds = this.$root.context.$localStore.get(
      "readContentIds",
      []
    );
  },
  computed: {
    hasBeenRead() {
      return componentData.readIds.includes(this.content.id);
    },
    backgroundClass() {
      if (this.hasBeenRead) {
        return "has-background-grey-dark";
      }
      return "has-background-primary";
    },
    descriptionClass() {
      if (this.hasBeenRead) {
        return "has-text-primary-light";
      }
      return "";
    },
  },
};
</script>

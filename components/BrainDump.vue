<template>
  <b-dropdown aria-role="menu" position="is-bottom-left" :triggers="['hover']">
    <template #trigger>
      <b-button
        icon-right="mastodon"
        type="is-primary"
        size="is-medium"
        title="Eat the Rich"
        tag="a"
        rel="me"
        href="https://eattherich.club/@erellsworth"
        target="_blank"
      />
    </template>

    <b-dropdown-item
      aria-role="menu-item"
      :focusable="false"
      custom
      class="has-background-dark"
      v-for="item in feed"
      :key="item.id"
    >
      <div class="media">
        <a :href="item.url" target="_blank" class="media-content">
          <span v-html="item.content" class="has-text-primary-light"></span>
        </a>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<style lang="scss">
.dropdown {
  &-content {
    background: #111314;
  }

  &-menu {
    width: 500px;
  }
}
</style>

<script>
export default {
  name: "BrainDump",
  data() {
    return {
      feed: [],
      active: false,
    };
  },
  async fetch() {
    try {
      const feed = await this.$axios.get("api/ext/mastadon");
      this.feed = feed.data.data;
    } catch (e) {
      console.log("mastadon feed failed");
    }
  },
};
</script>
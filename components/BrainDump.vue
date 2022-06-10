<template>
  <div>
    <b-button
      icon-right="mastodon"
      type="is-primary"
      size="is-medium"
      title="Eat the Rich"
      @click="active = true"
    />
    <b-modal v-model="active" :width="640">
      <div class="card has-background-dark brain-dump">
        <header class="card-header has-background-primary" v-if="accountData">
          <a
            :href="accountData.url"
            rel="me"
            class="card-header-title"
            target="_blank"
            >Brain Dump</a
          >
        </header>
        <div class="card-content">
          <client-only>
            <div class="content">
              <a
                :href="item.url"
                target="_blank"
                v-for="item in feed"
                :key="item.id"
              >
                <div
                  v-html="item.content"
                  class="
                    media-content
                    content
                    has-text-primary-light
                    brain-dump-content
                  "
                ></div>
              </a>
            </div>
          </client-only>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<style lang="scss">
.brain-dump {
  .card-header-title {
    color: #000;

    &:hover {
      color: #bcbc93;
      text-shadow: 1px 1px #000;
    }
  }

  &-content {
    padding: 0.25rem;
    border-bottom: 1px solid #bcbc93;
    margin-top: 1.5rem;
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
  computed: {
    accountData() {
      if (this.feed.length > 0) {
        return this.feed[0].account;
      }
      return false;
    },
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
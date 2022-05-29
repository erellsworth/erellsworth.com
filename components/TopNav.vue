<template>
  <div>
    <b-navbar class="has-background-primary">
      <template #brand>
        <b-navbar-item
          class="has-text-light"
          tag="router-link"
          :to="{ path: '/' }"
        >
          <p>E.R. Ellsworth</p>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <b-button
            label="Subscribe"
            type="is-primary"
            size="is-medium"
            @click="showSubscribe = true"
          />
        </b-navbar-item>
      </template>
    </b-navbar>
    <b-modal
      v-model="showSubscribe"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      close-button-aria-label="Close"
      aria-modal
      class="nav-modal"
    >
      <template>
        <div class="subscribe-wrapper has-background-primary">
          <SubStack />
        </div>
      </template>
    </b-modal>
  </div>
</template>

<style lang="scss">
.subscribe-wrapper {
  border-radius: 10px;
}

.nav-modal {
  .animation-content {
    z-index: 999;
  }
}
</style>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      showSubscribe: false,
    };
  },
};
</script>
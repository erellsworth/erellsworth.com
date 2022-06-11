<template>
  <footer class="footer has-background-grey-dark">
    <div class="content has-text-centered has-text-primary-light">
      <p>Copyright {{ year }} E.R. Ellsworth</p>
      <b-button
        type="is-ghost"
        size="is-large"
        icon-right="cookie"
        @click="showCookieModal = true"
        title="Cookie policy"
      />
    </div>
    <b-modal v-model="showCookieModal" :width="640">
      <div class="content box">
        <h3 class="title has-text-primary">Cookie policy</h3>
        <p>
          Chocolate chip cookies are the best. Those are incompatible with
          modern web browsers, therefore this site doesn't use any cookies at
          all.
        </p>
      </div>
    </b-modal>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
      showCookieModal: false,
    };
  },
};
</script>
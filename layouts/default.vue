<template>
  <div>
    <TopNav />
    <section class="main-content columns has-background-dark">
      <div class="container column is-12">
        <Nuxt />
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>Copyright {{ year }} E.R. Ellsworth</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

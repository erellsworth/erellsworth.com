<template>
  <div>
    <nav
      class="navbar header is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/"> Home </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns has-background-black">
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

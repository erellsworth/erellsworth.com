<template>
  <div class="container">
    <section class="section">
      <div class="content">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>Sorry, but this shit is busted.</h1>
        <p>{{ error.message }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
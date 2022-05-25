<template>
  <div class="container">
    <section class="section">
      <div class="content box has-background-dark has-text-primary-light">
        <h1 v-if="error.statusCode === 404" class="has-text-primary-light">
          Page not found
        </h1>
        <h1 v-else class="has-text-primary-light">
          Sorry, but this shit is busted.
        </h1>
        <div v-html="error.message"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
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
            tag="a"
            href="https://erellsworth.substack.com/"
            target="_blank"
            label="Subscribe"
            type="is-primary"
            size="is-medium"
            title="Subscribe on Substack"
          />
        </b-navbar-item>

        <b-navbar-item tag="div">
          <BrainDump />
        </b-navbar-item>
        <b-navbar-item tag="div">
          <b-button
            tag="a"
            href="https://github.com/erellsworth/erellsworth.com"
            target="_blank"
            icon-right="github"
            type="is-primary"
            size="is-medium"
            title="Github"
          />
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>
<template>
  <layout>
    <router-view slot="content"/>
  </layout>
</template>

<script>
  import Layout from 'src/components/layout/Layout.vue';

  export default {
      name: 'App',
      components: {
        Layout,
      },
      data() {
          return { showModal: false };
      },
  };
</script>

<style lang="scss" type="text/scss">
  @import './assets/index.scss';
</style>

<template>
  <div class="layout">
    <div class="container">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Layout',
  };
</script>

<style scoped lang="scss" type="text/scss">
  @import "../../assets/variables";

  .layout {
    display: flex;
    justify-content: center;

    .container {
      max-width: 117rem;
      width: 95%;
      @media (max-width: $screen-size-md) {
        width: 100%;
      }
      ._spinner {
        height: 100vh;
        display: flex;
        justify-content: center;
      }

      ._modal-container {
        text-align: center;
        padding: 2rem;
        h4 {
          margin-bottom: 2rem;
        }
      }
    }
  }
</style>

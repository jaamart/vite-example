<script>
export default {
  props: {
    copy: {
      type: String,
      default: "",
    },
    source: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
$black: #333;
$white: #ddd;

footer {
  background-color: $black;
  color: $white;
  width: 100%;
}
</style>

<template>
  <footer>
    <p>Site made by {{ copy }}</p>
    <p>API used: {{ source }}</p>
  </footer>
</template>

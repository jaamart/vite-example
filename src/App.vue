<script>
import MyFooter from "./components/MyFooter.vue";

export default {
  components: {
    MyFooter,
  },
};
</script>

<style lang="scss">
$btn-bg: #5cc8ff;
$black: #333;
$white: #ddd;
$btn-hover: #4cb8ee;

button,
a {
  background-color: $btn-bg;
  color: $black;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  margin: 0 10px;
}

a {
  text-decoration: none;
}

button:hover,
a:hover {
  background-color: $btn-hover;
}

nav ul {
  display: flex;
  flex-direction: row;
}

li {
  list-style: none;
}

img {
  max-width: 300px;
}
</style>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/randomrecipe">Random Recipe</RouterLink>
      </li>
      <li>
        <RouterLink to="/searchbycategory">Search By Category</RouterLink>
      </li>
      <li>
        <RouterLink to="/searchbyname">Search By Name</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <MyFooter copy="jaamart" source="https://www.themealdb.com" />
</template>

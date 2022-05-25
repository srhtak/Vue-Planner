<template>
  <h1>Serhat</h1>
  {{ data }}
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/projects")
      .then((response) => (this.data = response.data));
  },
};
</script>

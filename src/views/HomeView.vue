<template>
  <div class="text-red-500" v-if="loading">loading....</div>
  <div class="flex flex-col justify-center items-center" v-else>
    <div data-aos="fade-up" v-for="project in data" :key="project.id">
      <single-project :project="project" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AOS from "aos";
import SingleProject from "../components/SingleProject.vue";
export default {
  name: "HomeView",
  components: {
    SingleProject,
  },
  data() {
    return {
      data: null,
      loading: true,
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/projects")
      .then((response) => (this.data = response.data))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.loading = false));
    AOS.init();
  },
};
</script>

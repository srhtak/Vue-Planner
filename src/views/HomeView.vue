<template>
  <div class="flex">
    <side-bar />

    <div class="flex w-2/3 flex-col justify-center items-center">
      <div class="text-red-500 text-center" v-if="loading">loading....</div>
      <div v-else data-aos="fade-up" v-for="project in data" :key="project.id">
        <single-project
          :project="project"
          @complete="handleComplete"
          @delete="handleDelete"
        />
      </div>
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
      data: [],
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
  methods: {
    handleDelete(id) {
      this.data = this.data.filter((project) => project.id !== id);
    },
    handleComplete(id) {
      let p = this.data.find((project) => project.id === id);
      p.complete = !p.complete;
    },
  },
};
</script>

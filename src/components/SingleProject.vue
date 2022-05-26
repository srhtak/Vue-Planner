<script>
export default {
  props: ["project"],
  data() {
    return {
      show: false,
      url: "http://localhost:3000/projects/" + this.project.id,
      complete: "from-green-500 to-green-600",
      todo: "from-red-400 to-red-600",
    };
  },
  methods: {
    deleteProject() {
      this.axios
        .delete(this.url)
        .then(this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
    toggleComplete() {
      this.axios
        .put(this.url, {
          ...this.project,
          complete: !this.project.complete,
        })
        .then(this.$emit("complete", this.project.id));
    },
  },
};
</script>

<template>
  <div
    class="all m-2 relative border-gray-100 border-1 rounded-md p-6 bg-gradient-to-r"
    :class="[project.complete ? complete : todo]"
  >
    <h1
      @click="show = !show"
      class="cursor-pointer text-xl text-white font-bold absolute top-1 left-2"
    >
      {{ project.title }}
    </h1>
    <div class="absolute top-2 right-3">
      <span class="material-icons"> edit </span>
      <span @click="toggleComplete" class="material-icons"> done </span>
      <span @click="deleteProject" class="material-icons"> delete</span>
    </div>
    <div
      class="text-white font-semibold text-md mt-2"
      data-aos="zoom-in-up"
      v-if="show"
    >
      {{ project.details }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.all {
  width: 600px;
}
.material-icons {
  color: white;
  cursor: pointer;
  width: 26px;
  &:hover {
    color: rgb(175, 162, 162);
  }
}
</style>

<template>
  <div
    class="all m-2 relative border-gray-100 border-1 rounded-md p-6 bg-gradient-to-r from-cyan-500 to-blue-500"
  >
    <h1
      @click="show = !show"
      class="cursor-pointer text-xl text-white font-bold absolute top-1 left-2"
    >
      {{ project.title }}
    </h1>
    <div class="absolute top-2 right-3">
      <span class="material-icons"> edit </span>
      <span class="material-icons"> done </span>
      <span class="material-icons"> delete</span>
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

<script>
export default {
  props: ["project"],
  data() {
    return {
      show: false,
    };
  },
};
</script>

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

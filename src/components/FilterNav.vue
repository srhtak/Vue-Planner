<template>
  <div
    class="inline-flex items-center -space-x-px text-xs rounded-md bg-white mb-2 fixed top-36"
  >
    <button
      @click="updateFilter('all')"
      class="px-5 py-3 font-medium border rounded-l-md hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 active:opacity-75"
      :class="{ 'bg-gray-100': current === 'all' }"
      type="button"
    >
      All
    </button>

    <button
      @click="updateFilter('completed')"
      class="px-5 py-3 font-medium border hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 active:opacity-75"
      :class="{ 'bg-gray-100': current === 'completed' }"
      type="button"
    >
      Completed
    </button>

    <button
      @click="updateFilter('ongoing')"
      class="px-5 py-3 font-medium border rounded-r-md hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 active:opacity-75"
      :class="{ 'bg-gray-100': current === 'ongoing' }"
      type="button"
    >
      Ongoing
    </button>
  </div>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("update", by);
    },
  },
};
</script>

<style></style>

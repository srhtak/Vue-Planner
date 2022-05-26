<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },
};
</script>

<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <form
        @submit.prevent="handleSubmit"
        class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
      >
        <h1 class="mb-8 text-3xl text-center">Add Todo</h1>
        <input
          v-model="title"
          required
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="title"
          placeholder="Title"
        />

        <textarea
          v-model="details"
          required
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="details"
          placeholder="details"
        />

        <button
          type="submit"
          class="w-full text-center py-3 rounded bg-green text-white font-bold bg-green-400 focus:outline-none my-1"
        >
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>

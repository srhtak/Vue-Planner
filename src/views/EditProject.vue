<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      url: "http://localhost:3000/projects/" + this.id,
    };
  },
  methods: {
    handleEdit() {
      this.axios
        .patch(this.url, {
          title: this.title,
          details: this.details,
        })
        .then(this.$router.push({ name: "Home" }));
    },
  },
  mounted() {
    this.axios.get(this.url).then((response) => {
      (this.title = response.data.title),
        (this.details = response.data.details);
    });
  },
};
</script>

<template>
  <div class="bg-grey-lighter min-h-screen flex flex-row">
    <side-bar />
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <form
        data-aos="fade-up"
        @submit.prevent="handleEdit"
        class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
      >
        <h1 class="mb-8 text-3xl text-center">Edit</h1>
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
          Edit
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>

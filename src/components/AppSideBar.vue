<template>
  <div class="flex flex-col justify-between w-1/3 h-screen bg-white border-r">
    <div class="px-4 py-6">
      <div class="text-center">
        <span class="font-bold px-6 py-2 bg-black text-white rounded-lg"
          >Planner</span
        >
      </div>

      <nav class="flex flex-col mt-6 space-y-1">
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span class="ml-3 text-sm font-medium"> Projects </span>
        </router-link>

        <router-link
          :to="{ name: 'AddProject' }"
          class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>

          <span class="ml-3 text-sm font-medium"> Add </span>
        </router-link>
      </nav>
    </div>

    <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <a
        href=""
        class="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0"
      >
        <img
          class="object-cover w-10 h-10 rounded-full"
          src="https://www.hyperui.dev/photos/man-4.jpeg"
          alt="Simon Lewis"
        />

        <div class="ml-1.5">
          <p class="text-xs">
            <strong class="block font-medium">Serhat Ak</strong>

            <span> srhtak777@fakemail.com </span>
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

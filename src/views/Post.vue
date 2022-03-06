<template>
  <div
    class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
    style="
      background-image: url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    "
  >
    <div class="hello">
      <div v-for="post in posts" :key="post.id">
        <div
          class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md mx-auto"
        >
          <div class="flex justify-between items-center">
            <a
              class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
              href="#"
              >Post</a
            >
          </div>
          <div class="mt-2">
            <a
              class="text-2xl text-gray-700 font-bold hover:text-gray-600"
              href="#"
              >{{ post.title }}</a
            >
            <p class="mt-2 text-gray-600">
              {{ post.body }}
            </p>
          </div>
          <div class="flex justify-between items-center mt-4">
            <div>
              <a class="flex items-center" href="#">
                <img
                  class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                  src="https://scontent.fcgk27-1.fna.fbcdn.net/v/t1.6435-9/107793561_1477224619155349_4061913840775516234_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFEyjQ-ZSN-DRuXBT_CXzOfmQPLgQJjvWCZA8uBAmO9YB9Exrc5NdiGGT7t92lEtAO9HlvwtuHYgFQo5vC4WeMJ&_nc_ohc=JDqdTZGJIkQAX9GMmIU&_nc_ht=scontent.fcgk27-1.fna&oh=00_AT_Gv7kieCB-Jo-jcgSmM2cdinn62MZWEumBNqcPwCAL_w&oe=6206BE82"
                  alt="avatar"
                />
                <h1 class="text-gray-700 font-bold">
                  Sektiawan Bimo Prihpambudi
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPost",
  data() {
    return {
      msg: "Xignature List Of Post",
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
  mounted() {
    this.$store.dispatch("getPosts")
  },
}
</script>

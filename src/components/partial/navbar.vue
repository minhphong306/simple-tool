<template>
  <div class="mx-auto mt-5">
    <div class="row">
      <vue-typed-js
          :strings="greetings"
          :loop="true">
        <h1><span class="typing"></span></h1>
      </vue-typed-js>
    </div>
    <div class="row">
      <blockquote>
        <p id="main_quote">If you want to do somethings, you will find a way. If not, you will find an excuse</p>
        <footer><cite title="Author" id="main_quote_author">Jim Rohn</cite></footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data: () => {
    return {
      greetings: ["Minh Phong 306", "Make things simple"]
    }
  },
  components: {}
}
</script>

<style scoped>

</style>
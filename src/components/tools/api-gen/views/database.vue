<template>
  <div>
    <b-container fluid>
      <b-row class="mt-2">
        <b-col sm="2">
          <label for="textarea-large">Code:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
              id="textarea-large"
              size="lg"
              placeholder="Large textarea"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-button
          class="mt-2 ml-auto"
          variant="primary">
        <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
        Copy
      </b-button>
    </b-container>
  </div>

</template>

<script>
export default {
  name: "Database"
}
</script>

<style scoped>

</style>
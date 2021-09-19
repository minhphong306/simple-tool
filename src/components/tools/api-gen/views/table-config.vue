<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
          label-cols-lg="12"
          label="Table configuration"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
      >
        <b-form-group
            label="Host:"
            label-for="nested-street"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="nested-street" v-model="host"></b-form-input>
        </b-form-group>

        <b-form-group
            label="Database name:"
            label-for="nested-street"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="nested-street" v-model="dbname"></b-form-input>
        </b-form-group>

        <b-form-group
            label="Username:"
            label-for="nested-street"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="nested-street" v-model="user"></b-form-input>
        </b-form-group>

        <b-form-group
            label="Password:"
            label-for="nested-street"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="nested-street" v-model="pwd"></b-form-input>
        </b-form-group>

        <b-button
            class="mt-2 ml-auto"
            variant="info">
          <b-icon icon="journal-code" aria-hidden="true"></b-icon>
          Generate code
        </b-button>

      </b-form-group>
    </b-card>

  </div>
</template>

<script>
export default {
  name: "TableConfig",
  data: () => {
    return {
      host: '127.0.0.1',
      dbname: 'mydb',
      user: '',
      pwd: ''
    }
  }
}
</script>

<style scoped>

</style>
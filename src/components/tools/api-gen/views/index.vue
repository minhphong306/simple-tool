<template>
  <div>
    <b-row>
      <b-tabs content-class="mt-3" justified>
        <b-tab title="Table config" active>
          <table-config></table-config>
        </b-tab>
        <b-tab title="Model config">
          <model-config></model-config>
        </b-tab>
      </b-tabs>

    </b-row>
    <hr>
    <hr>
    <b-row>
      <b-tabs content-class="mt-3" justified>
        <b-tab title="Database" active>
          <database></database>
        </b-tab>
        <b-tab title="Model">
          <model></model>
        </b-tab>
      </b-tabs>
    </b-row>
  </div>
</template>

<script>
import TableConfig from './table-config'
import ModelConfig from './model-config'
import Database from './database'
import Model from './model'

export default {
  name: "api_generator",
  components: {
    TableConfig,
    ModelConfig,
    Database,
    Model
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <b-card bg-variant="light">
      <b-form class="mt-2" inline v-for="field in fields" :key="field.id">
        <b-form-input
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="field.name"
            placeholder="Field name"
        ></b-form-input>

        <b-form-select
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="field.type"
            :options="types"
            placeholder="Field type"
        ></b-form-select>

        <b-button
            @click="removeField(field.id)"
            variant="danger"
            v-b-tooltip.hover
            title="Remove this property">
          <b-icon-trash></b-icon-trash>
        </b-button>
      </b-form>

      <b-button
          @click="addField"
          class="mt-2"
          variant="success">
        <b-icon-plus-square></b-icon-plus-square>
        Add field
      </b-button>

      <b-button
          class="mt-2 ml-2"
          variant="info">
        <b-icon icon="journal-code" aria-hidden="true"></b-icon>
        Generate code
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ModelConfig",
  data: () => {
    return {
      fields: [
        {
          id: 1,
          name: 'id',
          type: 'bigint'
        },
        {
          id: 2,
          name: 'name',
          type: 'varchar'
        }
      ],

      types: [
        {
          value: 'int',
          text: 'int'
        },
        {
          value: 'bigint',
          text: 'bigint'
        },
        {
          value: 'varchar',
          text: 'varchar'
        }
      ]
    }
  },
  methods: {
    addField() {
      this.fields.push({
        id: new Date().getTime(),
        name: '',
        type: 'int'
      })
    },
    removeField(id) {
      this.fields = this.fields.filter(item => item.id !== id)
    }
  }
}
</script>

<style scoped>

</style>
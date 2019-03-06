<template>
  <div class="header">
    <h4>
      AFL
      <span>AddressBook</span>
    </h4>
    <form v-if="creating">
      <ul>
        <li>
          <input type="text" v-model="newAddress.firstName" placeholder="First Name">
          <input type="text" v-model="newAddress.lastName" placeholder="Last Name">
          <input type="text" v-model="newAddress.civicNumber" placeholder="Civic Number">
          <input type="text" v-model="newAddress.street" placeholder="Street">
          <input type="text" v-model="newAddress.city" placeholder="City">
          <button @click.prevent="addNewAddress()">Add</button>
        </li>
      </ul>
    </form>
    <span class="toAdd" v-if="!creating">Please click in +Create to see the form to add new address.</span>
    <div class="create" @click="$emit('handleCreateClick')">
      <a>
        +
        <span>C</span>reate
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    creating: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      newAddress: {
        firstName: '',
        lastName: '',
        civicNumber: '',
        street: '',
        city: ''
      }
    }
  },
  methods: {
    addNewAddress () {
      this.$emit('handleAddAddress', this.newAddress)
      this.newAddress.firstName = ''
      this.newAddress.lastName = ''
      this.newAddress.civicNumber = ''
      this.newAddress.street = ''
      this.newAddress.city = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .toAdd {
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-left: 10px;
    color: #000;
  }
  h4 {
    margin-left: 10px;
    color: #41b883;
    span {
      color: #35495e;
    }
  }
  .create {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 20px;
    color: #41b883;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    span {
      color: #35495e;
    }
  }
  form {
    input {
      font-size: 9px;
      margin-right: 3px;
      width: 14.8%;
    }
    button {
      color: #fff;
      width: 70px;
      margin-right: 10px;
      float: right;
      background-color: #41b883;
      border-radius: 5px;
    }
  }
}
</style>

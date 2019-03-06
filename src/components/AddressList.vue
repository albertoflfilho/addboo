<template>
  <div>
    <h4>
      <span>R</span>eading...
    </h4>
    <ul v-for="address in addresses" :key="address.id">
      <li>
        <span class="idAddress">[ {{ address.id }} ]</span>
        <span class="contactLabel">Contact</span>
        <span class="fullname">{{ address.firstName + ' ' + address.lastName }}</span>
        <i>
          <input class="civicNumber" type="text" v-model="address.civicNumber">
          <input class="street" type="text" v-model="address.street">
          <input class="city" type="text" v-model="address.city">
        </i>
        <button @click="$emit('destroyAddress', address)">Delete</button>
        <button @click="$emit('saveAddress', address)">Update</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    addresses: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scope>
h4 {
  margin-left: 10px;
  color: #41b883;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  span {
    color: #35495e;
  }
}

ul {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding-left: 3%;
  list-style-type: none;
  li {
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 95%;
    .idAddress {
      text-align: center;
      display: inline-block;
      width: 6%;
      font-size: 10px;
      padding: 1px 2px;
      color: black;
      background-color: #fff;
      border-radius: 4px;
      margin-right: 5px;
    }
    .contactLabel {
      font-size: 12px;
      padding: 0 2px;
      background-color: white;
      color: #41b883;
      border-radius: 4px;
      border: 1px solid #41b883;
      margin-right: 10px;
    }
    .fullname {
      text-align: center;
      background-color: #35495e;
      color: #fff;
      font-size: 15px;
      display: inline-block;
      border: 1px solid #41b883;
      border-radius: 4px;
      padding: 0 5px;
      width: 20%;
      margin-right: 10px;
    }
    .civicNumber {
      background-color: #fff;
      text-align: center;
      border: 1px solid #41b883;
      width: 5%;
      margin: 0 5px;
    }
    .street {
      background-color: #fff;
      padding-left: 3px;
      text-align: left;
      border: 1px solid #41b883;
      width: 15%;
      margin: 0 5px;
    }
    .city {
      background-color: #fff;
      padding-left: 3px;
      text-align: left;
      border: 1px solid #41b883;
      width: 15%;
      margin: 0 5px;
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

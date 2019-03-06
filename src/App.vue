<template>
  <div id="app">
    <Header :creating="creating" @handleCreateClick="createClick" @handleAddAddress="addAddress"/>
    <hr>
    <address-list :addresses="addresses" @destroyAddress="destroy" @saveAddress="save"/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import AddressList from './components/AddressList.vue'

export default {
  data () {
    return {
      creating: false,
      addresses: []
    }
  },
  components: {
    Header, AddressList
  },
  methods: {
    createClick () {
      if (this.creating) {
        this.creating = false
      } else {
        this.creating = true
      }
    },
    save (address) {
      this.$http.put('http://localhost:3000/addresses/' + address.id, {
        firstName: address.firstName,
        lastName: address.lastName,
        civicNumber: address.civicNumber,
        street: address.street,
        city: address.city
      }).then((res) => {
        console.log(res)
        alert('saved')
      }, (res) => {
        console.log('err', res)
      })
    },
    destroy (address) {
      this.$http.delete('http://localhost:3000/addresses/' + address.id)
        .then((res) => {
          this.addresses = this.addresses.filter(a => a !== address)
        }, (res) => {
          console.log('err', res)
        })
    },
    addAddress (newAddressData) {
      this.$http.post('http://localhost:3000/addresses/', {
        id: Math.floor(Math.random() * 65536),
        ...newAddressData
      }).then((data) => {
        this.addresses.push(data.body)
        this.creating = false
      })
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/addresses')
      .then((res) => {
        this.addresses = res.body
      }).catch((err) => {
        console.log('err', err)
      })
  }
}
</script>

<style lang="scss">
#app {
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 4px;
  width: 100%;
}
</style>

<template>
  <div id="app">
    <div class="ui active dimmer">
      <div class="ui loader"></div>
    </div>
    <div class="header">
      <h4>
        A d d
        <span>r e s s</span> B o o
        <span>k</span>
      </h4>
      <form v-if="creating">
        <ul>
          <li>
            <input type="text" v-model="newAddress.firstName" placeholder="First Name">
            <input type="text" v-model="newAddress.lastName" placeholder="Last Name">
            <input type="text" v-model="newAddress.civicNumber" placeholder="Civic Number">
            <input type="text" v-model="newAddress.street" placeholder="Street">
            <input type="text" v-model="newAddress.city" placeholder="City">
            <button v-on:click.prevent="addAddress">Add</button>
          </li>
        </ul>
      </form>
      <div class="create" @click="createClick()">
        <a>
          +
          <span>C</span>reate
        </a>
      </div>
    </div>
    <h4>
      <span>R</span>eading...
    </h4>
    <ul v-for="address in addresss" :key="address.id">
      <li>
        <span class="idAddress">[ {{ address.id }} ]</span>
        <span class="labelFullName">Full Name</span>
        <span class="fullname">{{ address.firstName + ' ' + address.lastName }}</span>
        <i>
          <input class="civicNumber" type="text" v-model="address.civicNumber">
          <input class="street" type="text" v-model="address.street">
          <input class="city" type="text" v-model="address.city">
        </i>
        <a @click="destroy(address)">
          <span>D</span>elete
        </a>
        <a @click="save(address)">
          <span>U</span>pdate
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      creating: true,
      addresss: [],
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
    createClick () {

    },
    save (address) {
      this.$http.put('http://localhost:3000/addresss/' + address.id, {
        firstName: address.firstName,
        lastName: address.lastName,
        civicNumber: address.civicNumber,
        street: address.street,
        city: address.city
      }).then((res) => {
        console.log(res)
        // this.addresss.push(data.body)
      }, (res) => {
        console.log('err', res)
      })
    },
    destroy (address) {
      this.$http.delete('http://localhost:3000/addresss/' + address.id)
        .then((res) => {
          this.addresss = this.addresss.filter(a => a !== address)
        }, (res) => {
          console.log('err', res)
        })
    },
    addAddress () {
      this.$http.post('http://localhost:3000/addresss/', {
        id: Math.floor(Math.random() * 65536),
        firstName: this.newAddress.firstName,
        lastName: this.newAddress.lastName,
        civicNumber: this.newAddress.civicNumber,
        street: this.newAddress.street,
        city: this.newAddress.city
      }).then((data) => {
        this.addresss.push(data.body)
        this.newAddress.firstName = ''
        this.newAddress.lastName = ''
        this.newAddress.civicNumber = ''
        this.newAddress.street = ''
        this.newAddress.city = ''
      })
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/addresss')
      .then((res) => {
        this.addresss = res.body
      }).catch((err) => {
        console.log('err', err)
      })
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-color: #000;
  border: 1px solid gray;
  border-radius: 4px;
  width: 100%;

  .header {
    h4 {
      margin-left: 10px;
      color: pink;
      span {
        color: #fff;
      }
    }
    .create {
      position: absolute;
      top: 30px;
      right: 20px;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      span {
        color: pink;
      }
    }
    form {
      input {
        font-size: 9px;
        margin-right: 3px;
        width: 14.8%;
      }
      button {
        width: 70px;
        margin-right: 10px;
        float: right;
        background-color: rgb(240, 89, 220);
        border-radius: 5px;
      }
    }
  }

  h4 {
    margin-left: 10px;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    span {
      color: pink;
    }
  }

  ul {
    padding-left: 3%;
    list-style-type: none;
    li {
      padding: 5px;
      border: 1px solid rgb(240, 89, 220);
      border-radius: 5px;
      width: 95%;
      .idAddress {
        text-align: center;
        display: inline-block;
        width: 6%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 10px;
        padding: 1px 2px;
        color: black;
        background-color: #fff;
        border-radius: 4px;
        margin-right: 5px;
      }
      .labelFullName {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 12px;
        padding: 0 2px;
        color: white;
        background-color: rgb(101, 4, 121);
        border-radius: 4px;
        border: 1px solid white;
        margin-right: 10px;
      }
      .fullname {
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: pink;
        display: inline-block;
        border: 1px solid pink;
        border-radius: 4px;
        padding: 0 5px;
        width: 20%;
        margin-right: 10px;
      }
      .civicNumber {
        background-color: #fff;
        text-align: center;
        border: 1px solid pink;
        width: 5%;
        margin: 0 5px;
      }
      .street {
        background-color: #fff;
        padding-left: 3px;
        text-align: left;
        border: 1px solid pink;
        width: 15%;
        margin: 0 5px;
      }
      .city {
        background-color: #fff;
        padding-left: 3px;
        text-align: left;
        border: 1px solid pink;
        width: 15%;
        margin: 0 5px;
      }
      a {
        cursor: pointer;
        color: white;
        span {
          color: pink;
        }
        float: right;
        padding-right: 10px;
      }
    }
  }
}
</style>

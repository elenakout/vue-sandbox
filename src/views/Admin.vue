<template>
  <div class="admin container">
    <h1>Admin dashboard</h1>
    <v-card>
      <v-card-title>
        Users
        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="allUsers" :search="search">
        <template v-slot:item.isAdmin="{ item }">
          <v-chip :color="getColor(item.isAdmin)" dark>{{ item.isAdmin }}</v-chip>
        </template>

        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          <v-icon small @click="sendemail(item)">mdi-email</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'admin',
  data() {
    return {
      search: '',
      headers: [
        { text: 'Username', value: 'username' },
        { text: 'Date', value: 'date' },
        { text: 'Email', value: 'email' },
        { text: 'Is Admin', value: 'isAdmin' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
    };
  },
  methods: {
    ...mapActions(['fetchUsers']),
    getColor(isAdmin) {
      if (isAdmin) return 'green';
      return 'red';
    },
    editItem(item) {
      console.log(item);
    },
    async deleteItem(item) {
      // 7487b140-444e-11eb-aa5e-47990eb5b682
      // https://app.zipcodebase.com/api/v1/search?apikey=7487b140-444e-11eb-aa5e-47990eb5b682&codes=63074&country=GR
      try {
        const resp = await fetch('https://app.zipcodebase.com/api/v1/search?apikey=7487b140-444e-11eb-aa5e-47990eb5b682&codes=63074&country=GR', {
          method: 'GET',
        });
        const result = await resp.json();
        const keys = result.results;
        const tk = keys[Object.keys(keys)[0]];
        console.log(tk[0].city);
      } catch (err) {
        console.log(err);
      }
      console.log(item);
    },
    async sendemail(item) {
      const maildata = {
        username: item.username,
        email: item.email,
        isAdmin: item.isAdmin,
        userId: item.userId,
        date: item.date,
      };

      const response = await fetch('http://localhost:5000/api/v1/send-email',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type, x-requested-with',
          },
          body: JSON.stringify(maildata),
        });

      const res = await response;

      const returndata = await res.json();

      console.log(returndata);
    },
  },
  computed: {
    ...mapGetters(['allUsers']),
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>
</style>

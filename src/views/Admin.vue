<template>
    <div class="admin container" >
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
          <v-data-table
            :headers="headers"
            :items="allUsers"
            :search="search"
          >
            <template v-slot:item.isAdmin="{ item }">
              <v-chip :color="getColor(item.isAdmin)" dark>{{ item.isAdmin }}</v-chip>
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
      ],
    };
  },
  methods: {
    ...mapActions(['fetchUsers']),
    getColor(isAdmin) {
      if (isAdmin) return 'green';
      return 'red';
    },
  },
  computed: {
    ...mapGetters(['allUsers']),
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>

</style>

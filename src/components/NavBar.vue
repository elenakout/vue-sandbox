<template>
    <nav>
    <v-navigation-drawer
        v-model="drawer"
        clipped
        class="blue-grey darken-3"
        dark
        app
        v-if="this.activeuser"
        >
            <v-subheader >Menu</v-subheader>
            <v-list>
                <v-list-item >
                    <v-list-item-avatar>
                        <v-img src="https://i.imgur.com/mDSKItg.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item >
                    <v-list-item-content>
                        <v-list-item-title class="title">{{activeuser.username}}</v-list-item-title>
                        <v-list-item-subtitle>{{activeuser.email}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>


            <v-list shaped>
                <v-list-item-group color="grey" >
                    <v-list-item
                    v-for="(item, index) in drawerItems"
                    :key="index" router
                    :to="item.route"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
    </v-navigation-drawer>

        <v-app-bar
        app

        clipped-left
        dark color="blue-grey darken-4">
            <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            v-if="this.activeuser"
            ></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title router to="/">
                <span class="font-weight-light">GetShit</span>
                <span>Done</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <!-- <v-btn text router to="/">Dashboard</v-btn> -->
                <v-btn text router to='/signup' v-if="!this.activeuser">
                    <span>Sign Up</span>
                    <v-icon right>mdi-login-variant</v-icon>
                </v-btn >
                <v-btn
                text
                 @click="logout"
                 v-if="this.activeuser"
                 >
                    <span>Log Out</span>
                    <v-icon right>mdi-logout-variant</v-icon>
                </v-btn >
            </v-toolbar-items>
        </v-app-bar>


    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      drawer: false,
      drawerItems: [
        { icon: 'mdi-view-dashboard', title: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', title: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', title: 'Team', route: '/team' },
      ],

    };
  },
  computed: {
    ...mapGetters(['activeuser']),
  },
  methods: {
    ...mapActions(['signUserOut']),
    logout() {
      this.signUserOut();
      this.$router.push({ name: 'home' });
    },

  },


};
</script>

<style lang="scss" scoped>

</style>

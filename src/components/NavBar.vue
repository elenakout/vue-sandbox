<template>
    <nav>
        <v-app-bar flat dark color="blue-grey darken-4">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <span class="font-weight-light">GetShit</span>
                <span>Done</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <!-- <v-btn text router to="/">Dashboard</v-btn> -->
                <v-btn text router to='/signup'>
                    <span>Sign Up</span>
                    <v-icon right>mdi-login-variant</v-icon>
                </v-btn >
            </v-toolbar-items>
        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        absolute
        class="blue-grey darken-3"
        dark
        temporary
        >
            <v-subheader>Menu</v-subheader>
            <v-list>
                <v-list-item >
                    <v-list-item-avatar>
                        <v-img src="https://i.imgur.com/mDSKItg.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item >
                    <v-list-item-content>
                        <v-list-item-title class="title">Elena Kout</v-list-item-title>
                        <v-list-item-subtitle>elenakout@gmail.com</v-list-item-subtitle>
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
    </nav>
</template>

<script>
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

};
</script>

<style lang="scss" scoped>

</style>

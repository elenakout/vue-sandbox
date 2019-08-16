<template>
    <div class="home">
        <v-container
        fill-height
        fluid
        >
            <v-row
            align="center"
            justify="center"
            class="fill-height"
            >
                <v-col
                cols="12"
                sm="8"
                md="4"
                >
                    <v-card class="elevation-12">
                        <v-toolbar
                            color="blue-grey darken-3"
                            dark
                            flat
                        >
                            <v-toolbar-title>SignIn form</v-toolbar-title>
                            <v-spacer></v-spacer>

                        </v-toolbar>

                        <v-card-text>
                            <v-form
                            ref="formin"
                            v-model="valid"
                            lazy-validation
                            >
                            <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="Email"
                            required
                            ></v-text-field>

                            <v-text-field
                            v-model="password"
                            :rules="[passwordRules.required, passwordRules.min]"
                            type="password"
                            label="Password"
                            hint="At least 6 characters"
                            class="input-group--focused"
                            :counter="6"
                            required
                            ></v-text-field>

                            <v-btn
                            :disabled="!valid"
                            color="blue-grey darken-2"
                            dark
                            class="mr-4 mt-4"
                            @click="onSubmit"
                            >
                            Submit
                            </v-btn>

                            <v-btn
                            class="mt-4"
                            color="white"
                            @click="goBack"
                            >
                            Cancel
                            </v-btn>

                            </v-form>
                        </v-card-text>
                    </v-card>
                    <v-alert type="error" v-if="feedback">
                        {{feedback}}
                    </v-alert>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'signin',
  data() {
    return {
      valid: true,

      email: '',
      password: '',

      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: {
        required: v => !!v || 'Password is required',
        min: v => v.length >= 6 || 'Min 6 characters',
      },
    };
  },
  computed: {
    ...mapGetters(['activeuser', 'feedback', 'admin']),
  },
  methods: {
    ...mapActions(['signUserIn', 'feedbackReset']),
    onSubmit() {
      if (this.email !== '' && this.password !== '') {
        const userData = {
          email: this.email,
          password: this.password,
          router: this.$router,
        };

        this.signUserIn(userData);
      }
    },
    goBack() {
      this.$refs.formin.reset();
      this.$router.push({ name: 'home' });
    },

  },

};
</script>

<style lang="scss" scoped>

</style>

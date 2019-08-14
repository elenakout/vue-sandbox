<template>
    <div class="signup">
        <v-container
        class="fill-height"
        fluid
        fill-height
        >
            <v-row
            align="center"
            justify="center"
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
                        <v-toolbar-title>SignUp form</v-toolbar-title>

                        </v-toolbar>
                        <v-card-text>
                            <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                            >
                            <v-text-field
                            v-model="username"
                            :counter="10"
                            :rules="nameRules"
                            label="Username"
                            required
                            ></v-text-field>

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

                            <v-text-field
                            v-model="rePassword"
                            :rules="[
                                        passwordRules.required,
                                        passwordRules.min,
                                        passwordConfirmationRule
                                    ]"
                            type="password"
                            label="Retype Password"
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
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'signup',
  data: () => ({
    valid: true,

    slug: null,
    username: '',
    nameRules: [
      v => !!v || 'Username is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    rePassword: '',
    passwordRules: {
      required: v => !!v || 'Password is required',
      min: v => v.length >= 6 || 'Min 6 characters',

    },
  }),
  computed: {
    ...mapGetters(['activeUser']),
    passwordConfirmationRule() {
      return () => (this.password === this.rePassword) || 'Password must match';
    },
  },
  watch: {
    activeUser(value) {
      if (value !== null && value !== undefined) {
        this.$router.push({ name: 'dashboard' });
      }
    },
  },
  methods: {
    ...mapActions(['signUserUp']),
    onSubmit() {
      if (this.username !== '' && this.email !== '' && this.password !== '' && this.rePassword !== '') {
        console.log('submit');
      }
    },
    goBack() {
      this.$refs.form.reset();
      this.$router.push({ name: 'dashboard' });
    },

  },

};
</script>

<style lang="scss" scoped>


</style>

<template>
  <div class="signup">
    <v-container class="fill-height" fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12" :loading="loading">
            <v-toolbar color="blue-grey darken-3" dark flat>
              <v-toolbar-title>SignUp form</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="username"
                  :counter="10"
                  :rules="nameRules"
                  label="Username"
                  required
                ></v-text-field>

                <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>

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
                    passwordRules.match
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
                >Submit</v-btn>

                <v-btn class="mt-4" color="white" @click="goBack">Cancel</v-btn>
              </v-form>
            </v-card-text>
          </v-card>

          <v-alert type="error" v-if="feedback">{{feedback}}</v-alert>
          <v-alert type="error" v-if="lfeedback">{{lfeedback}}</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import slugify from 'slugify';
// import db from '@/firebase/init';

export default {
  name: 'signup',
  data: vm => ({
    valid: true,
    loading: false,

    slug: null,
    username: '',
    email: '',
    password: '',
    rePassword: '',
    lfeedback: '',

    nameRules: [
      v => !!v || 'Username is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: {
      required: v => !!v || 'Password is required',
      min: v => v.length >= 6 || 'Min 6 characters',
      match: v => v === vm.password || 'Passwords must match',
    },
  }),
  computed: {
    ...mapGetters(['activeuser', 'feedback']),
  },
  watch: {
    activeuser(value) {
      if (value !== null && value !== undefined) {
        this.$router.push({ name: 'dashboard' });
      }
    },
    feedback(value) {
      if (value) {
        this.loading = false;
      }
    },
    lfeedback(value) {
      if (value) {
        this.loading = false;
      }
    },
  },
  methods: {
    ...mapActions(['signUserUp', 'feedbackReset']),
    onSubmit() {
      this.feedbackReset();
      this.loading = true;
      if (
        this.username !== '' &&
        this.email !== '' &&
        this.password !== '' &&
        this.rePassword !== ''
      ) {
        this.slug = slugify(this.username, {
          replacement: '-',
          remove: /[$_*+~.()'"!\-:@]/g,
          lower: true,
        });

        const userData = {
          slug: this.slug,
          email: this.email,
          username: this.username,
          password: this.password,
        };

        this.signUserUp(userData);
      } else {
        this.lfeedback = 'Cant Submit an empty form';
      }
    },
    goBack() {
      this.$refs.form.reset();
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

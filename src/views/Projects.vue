<template>
    <div class="container">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">Card</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">Name of step 3</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12 md5"
              flat
            >


                        <v-card-text>
                            <v-form
                            ref="formin"

                            lazy-validation
                            >
                            <v-text-field

                            label="Email"
                            required
                            ></v-text-field>

                            <v-text-field

                            type="password"
                            label="Password"
                            hint="At least 6 characters"
                            class="input-group--focused"
                            :counter="6"
                            required
                            ></v-text-field>

                            </v-form>
                        </v-card-text>
            </v-card>

            <v-btn
              color="primary"
              @click="e1 = 2"
            >
              Continue
            </v-btn>

            <v-btn text @click="e1 = 3">Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn
              color="primary"
              @click="e1 = 3"
            >
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn
              color="primary"
              @click="e1 = 1"
            >
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
</template>

<script>
export default {
  name: 'projects',
  data: () => ({
    e1: 0,
  }),
};
</script>

<style lang="scss" scoped>

</style>

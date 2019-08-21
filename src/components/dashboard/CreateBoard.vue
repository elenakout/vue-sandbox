<template>
    <div>
        <v-dialog v-model="value" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">New Board</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            v-model="name"
                            label="Board Name*"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>

                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="toggle()">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="save()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
export default {
  name: 'createBoard',
  props: ['value'],
  data() {
    return {
      name: '',
    };
  },
  methods: {
    toggle() {
      this.name = '';
      this.$emit('input', !this.value);
    },
    save() {
      this.$emit('save', this.name);
      this.name = '';
    },
  },
};
</script>

<style lang="scss" scoped>


</style>

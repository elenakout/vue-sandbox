<template>
  <div class="add">
    <div>
      <!-- <span class="mdi mdi-plus-circle-outline"></span> -->
      <v-icon class="add__icon"> mdi-plus-circle-outline</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddImage',
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {},
};
</script>

<style scoped lang="scss">
.add {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;
  border: 1px solid rgb(48, 48, 199);
  border-radius: 8px;

  i {
    cursor: pointer;
    color: rgb(48, 48, 199);
    font-size: 40px;
  }
}
</style>

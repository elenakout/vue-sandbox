<template>
  <div class="container team">
    <h1 class="display-2 mb-6">team</h1>
    <!-- <info-card></info-card> -->

    <wysiwyg v-model="myHTML" />

    <div class="text mt-6 ml-7" v-html="myHTML"></div>
  </div>
</template>

<script>
// import InfoCard from '@/components/team/InfoCard.vue';

export default {
  name: 'team',
  data() {
    return {
      myHTML: '',
    };
  },
  components: {
    // InfoCard,
  },
};
</script>

<style lang="scss" scoped>
@import '~vue-wysiwyg/dist/vueWysiwyg.css';

.text {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  line-height: 1.4;
  max-width: 40%;
  color: red;
}
</style>

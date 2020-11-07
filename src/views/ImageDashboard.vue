<template>
  <div class="dashboard">
    <h1 class="title">Image Upload dashboard</h1>
    <add-image></add-image>
  </div>
</template>

<script>
import AddImage from '@/components/imagedashboard/AddImage.vue';

export default {
  name: 'ImageDashboard',
  components: {
    AddImage,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.dashboard {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  margin-bottom: 24px;
}
</style>

<template>
  <div class="dashboard">
    <h2 class="text-h2">Send Email Template</h2>
    <send-email-form></send-email-form>
    <h1 class="titl display-1 mt-7">Image Upload dashboard</h1>
    <add-image></add-image>
  </div>
</template>

<script>
import AddImage from '@/components/imagedashboard/AddImage.vue';
import SendEmailForm from '@/components/imagedashboard/SendEmailForm.vue';

export default {
  name: 'ImageDashboard',
  components: {
    AddImage,
    SendEmailForm,
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.titl {
  margin-bottom: 24px;
}
</style>

<template>
  <div class="info-card oval-corners with-shadow p-8 text-grey">
    <div class="title grey-background oval-corners p-l-4">{{ title }}</div>
    <img :src="imgUrl" alt />
    <div class="body">
      <p v-html="data"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCardContent',
  props: {
    title: {
      type: String,
      default: 'Default Card Title',
    },
    data: {
      type: String,
      default: 'Default Data',
    },
    imgUrl: {
      type: String,

    },
  },

  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
.info-card {
  width: 250px;
  background-color: #fff;
  font-weight: 100;
  min-height: 128px;
}

.info-card .title {
  position: relative;
  color: #adadad;
  font-weight: bold;
}

.oval-corners {
  border-radius: 5px;
}

.grey-background {
  background-color: #f7f7f7;
}

.text-grey {
  color: #6d6d6d;
}

.with-shadow {
  -webkit-box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.2);
  -moz-box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.2);
  box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.2);
}

.p-8 {
  padding: 8px;
}

.p-4 {
  padding: 4px;
}

.p-l-4 {
  padding-left: 4px;
}
</style>

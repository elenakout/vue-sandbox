<template>
  <div class="dashboard">
    <!-- <h2 class="text-h2">Send Email Template</h2>
    <send-email-form></send-email-form> -->
    <h1 class="titl display-1 mt-7">Image Upload dashboard</h1>
    <add-image></add-image>
    <GmapMap
    ref="mapRef"
      :center="{ lat: 40.24946670752413, lng: 23.70017059783489 }"
      :zoom="14"
      :options="mapOptions"
      map-type-id="hybrid"
      style="width: 500px; height: 300px"
    >

      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import AddImage from '@/components/imagedashboard/AddImage.vue';
// import SendEmailForm from '@/components/imagedashboard/SendEmailForm.vue';

export default {
  name: 'ImageDashboard',
  components: {
    AddImage,
    // SendEmailForm,
  },
  data() {
    return {
      markers: [
        {
          position: {
            lat: 40.24946670752413,
            lng: 23.70017059783489,
          },
          title: 'Hello Worls',
          label: {
            text: 'Really big label',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '24px',
          },
          name: 'Marker Name',
          description: 'Marker description',
        },
      ],
      mapOptions: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUI: false,
      },
    };
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({ lat: 40.24946670752413, lng: 23.70017059783489 });
    });
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

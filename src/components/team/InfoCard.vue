<template>
  <div class="flip-container">
    <div class="flipper">
      <div class="front" :class="{ 'flip-front': frontActive }" @click="frontClicked">
        <card-image :image="img">
          <template v-slot:card-description>{{ desc }}</template>
          <template v-slot:card-distance>{{ dist }}</template>
        </card-image>
      </div>
      <div class="back" :class="{ 'flip-back': backActive }" @click="backClicked">
        <!-- <card-content
          title="back Title"
          data="back Data"
          imgUrl="https://images.unsplash.com/photo-1583122624875-e5621df595b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
        />-->
        <!-- <card-content title="Front Title" data="front Data"></card-content> -->
        <card-image>
          <template v-slot:card-description>{{ desc }}</template>
          <template v-slot:card-distance>{{ dist }}</template>
        </card-image>
      </div>
    </div>
  </div>
</template>

<script>
// import CardContent from '@/components/team/InfoCardContent.vue';
import CardImage from '@/components/team/CardImage.vue';

export default {
  name: 'InfoCard',
  data: () => ({
    backActive: false,
    frontActive: false,
    desc: 'Κρουαζιέρα του Αγίου Όρους από τον Όρμο Παναγίας',
    dist: '3.1 χλμ.',
    img: 'https://images.unsplash.com/photo-1583502831326-c78cb79f89e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  }),
  methods: {
    frontClicked() {
      this.backActive = true;
      this.frontActive = true;
    },
    backClicked() {
      this.frontActive = false;
      this.backActive = false;
    },
  },
  computed: {},
  components: {
    // CardContent,
    CardImage,
  },
};
</script>

<style scoped lang="scss">
.flip-container {
  width: 400px;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}

.flip-container {
  min-height: 120px;
}

.flipper {
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;

  position: relative;
}

.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;

  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;

  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;

  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;

  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;

  transition: 0.6s;
  transform-style: preserve-3d;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
}

.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

// .flip-container:hover .back {
//   -webkit-transform: rotateY(0deg);
//   -moz-transform: rotateY(0deg);
//   -o-transform: rotateY(0deg);
//   -ms-transform: rotateY(0deg);
//   transform: rotateY(0deg);
// }

// .flip-container:hover .front {
//   -webkit-transform: rotateY(180deg);
//   -moz-transform: rotateY(180deg);
//   -o-transform: rotateY(180deg);
//   -ms-transform: rotateY(180deg);
//   transform: rotateY(180deg);
// }

.flip-back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.flip-front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.front {
  z-index: 2;
}
</style>

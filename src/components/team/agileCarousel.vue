<template>
  <div class="agileCarousel">
    <agile
      :nav-buttons="false"
      :autoplay-speed="5000"
      :speed="2500"
      fade
      pause-on-hover
      pause-on-dots-hover
      autoplay
      centerMode
    >
      <img
        class="slide"
        src="https://q-cf.bstatic.com/images/hotel/max1280x900/199/199700894.jpg"
        alt
      />

      <img
        class="slide"
        src="https://q-cf.bstatic.com/images/hotel/max1280x900/199/199719932.jpg"
        alt
      />

      <img
        src="https://r-cf.bstatic.com/images/hotel/max1280x900/199/199688544.jpg"
        alt="img"
        class="slide"
      />

      <img
        src="https://q-cf.bstatic.com/images/hotel/max1280x900/199/199689840.jpg"
        alt="img"
        class="slide"
      />
    </agile>
    <div>
      <ul class="agile__dots">
        <li class="agile__dot">
          <button type="button">1</button>
        </li>
        <li class="agile__dot">
          <button type="button">1</button>
        </li>
        <li class="agile__dot">
          <button type="button">1</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';

export default {
  components: {
    agile: VueAgile,
  },
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.agile {
  &__dots {
    bottom: 10px;
    flex-direction: column;
    right: 30px;
    position: absolute;
  }

  &__dot {
    margin: 5px 0;
  }

  button {
    background-color: transparent;
    border: 1px solid #fff;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    transition-duration: 0.3s;
    width: 10px;

    &--current,
    &:hover button {
      background-color: #fff;
    }
  }
}

.slide {
  display: block;
  height: 85vh;
  object-fit: cover;
  width: 100%;
}
</style>

<template>
  <div class="card">
    <div class="card__image">
      <img v-if="image" class="card__img" :src="image" alt="card-img" />
      <div
        class="card__info"
        v-else
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, doloribus sint? Molestias nobis non hic.</div>
    </div>
    <div class="card__details">
      <span class="card__description">
        <slot name="card-description"></slot>
      </span>
      <span class="card__distance">
        <slot name="card-distance"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardImage',
  props: {
    image: {
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
.card {
  position: relative;
  width: 400px;
  transition: transform 0.3s ease-out;

  &__image {
    height: 300px;
  }

  &__info {
    height: 100%;
    border: 1px solid #2877c2;
    border-radius: 6px;
    padding: 10px;
  }

  &__img {
    border-radius: 6px;
    z-index: 0;

    box-shadow: 9px 9px 8px -4px rgba(23, 65, 105, 0.8);
  }

  &__details {
    position: relative;
    z-index: 3;

    display: flex;
    flex-direction: column;

    border-bottom: 3px solid #2877c2;
    border-radius: 4px;

    margin: 0 auto;
    width: 80%;
    background-color: #fff;
    margin-top: -45px;
    padding: 10px;

    box-shadow: 9px 9px 8px -4px rgba(23, 65, 105, 0.8);
  }

  &__description {
    color: #2877c2;
    font-size: 13px;

    font-weight: bold;
    margin-bottom: 5px;

    text-align: start;
  }

  &__distance {
    color: #575965;
    font-size: 12px;
    align-self: flex-end;
  }

  // &:hover {
  //   transform: translateY(-1.5rem) scale(1.03);
  // }
}
@media (max-width: 900px) {
  .card {
    width: 25rem;
  }
  .card + .card {
    margin-top: 2rem;
  }
}
</style>

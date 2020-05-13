<template>
  <div class="main-container">
    <div class="comp-container">
      <div class="description">
        <h1 class="title">Humburger Animation</h1>
        <p>YouTube tutorial</p>
      </div>
      <hamburger />
    </div>
    <div class="comp-container">
      <div class="description">
        <h1 class="title">Lines</h1>
        <p>Before and After Pseudo Elements Easily Explained [CSS]</p>
        <p>
          codeSTACKr
          <a href="https://www.youtube.com/watch?v=-bwR9S5MmOI" target="_blank">
            <v-icon color="red">mdi-youtube</v-icon>
          </a>
        </p>
        <p>Basic example</p>
      </div>
      <line-pseudo />
    </div>
    <div class="comp-container">
      <div class="description">
        <h1 class="title">Hover effect</h1>
        <p>Before and After Pseudo Elements Easily Explained [CSS]</p>
        <p>
          codeSTACKr
          <a href="https://youtu.be/-bwR9S5MmOI?t=761" target="_blank">
            <v-icon color="red">mdi-youtube</v-icon>
          </a>
        </p>
        <p>cool effect</p>
      </div>
      <btn-hover />
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/designsys/hamburger-animation.vue';
import LinePseudo from '@/components/designsys/lines-pseudo.vue';
import BtnHover from '@/components/designsys/btn-hover.vue';

export default {
  name: 'designsys',
  components: {
    Hamburger,
    LinePseudo,
    BtnHover,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  // background-color: gray;
  height: 100vh;
  margin: 5px;
  padding: 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  grid-auto-rows: min-content;
  grid-gap: 15px;
}

.comp-container {
  // min-width: 600px;
  border: 1px solid black;
  // box-shadow: 4px 7px 16px -3px rgba(0,0,0,0.75);
  box-shadow: 12px 11px 16px -11px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-between;
  padding: 15px;

  a {
    text-decoration: none;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 10px;
  }
}
</style>

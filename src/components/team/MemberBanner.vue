<template>
  <div>
    <h1>banner</h1>
    <v-img src="https://i.imgur.com/Z2LSTzB.jpg" contain class="grey lighten-2" max-width="100vw"
      max-height="500" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
      <v-row align="center" justify="space-around"
        class="lightbox white--text pa-2  fill-height flex">

        <div class="logo">
          <v-img
            src="https://i.imgur.com/mDSKItg.png"
            max-width="80"
            max-height="80"
            contain
            class="logo__img mr-2"></v-img>
          <div class="logo__txt">
            <h3 class="display-1 font-weight-black">INTER</h3>
            <h4 class="headline font-weight-bold">Club</h4>
          </div>

        </div>
        <div class="display-3 font-weight-black">Προνόμια μελών</div>
        <div class="action">
          <v-btn router to="/home" rounded color="primary " large dark>Γινε μελος</v-btn>
        </div>
      </v-row>
    </v-img>
  </div>
</template>


<style lang="scss" scoped>
  .logo {
    display: flex;

    &__img {
      border-radius: 50%;
    }

    &__txt {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

</style>

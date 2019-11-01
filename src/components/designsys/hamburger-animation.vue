<template>
  <div class="hamburger-container">
    <div class="menu-btn" v-bind:class="{ open: isOpen }" @click="isOpen = !isOpen">
      <div class="menu-btn__burger"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hamburger-animation',
  data: () => ({
    isOpen: false,
  }),
};
</script>

<style lang="scss" scoped>
.hamburger-container {
  background: #272727;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
}

// Burger Menu
.menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border: 3px solid #fff;
}
.menu-btn__burger {
  width: 25px;
  height: 4px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 4px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before {
  transform: translateY(-10px);
}
.menu-btn__burger::after {
  transform: translateY(10px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
</style>

<template>
  <section class="nabar-1">
    <header>
      <nav class="navigation">
        <div class="logo">
          <h4>Company Name</h4>
        </div>
        <ul class="nav-links " v-bind:class="{ open: isOpen }">
          <li><router-link class="nav-item" :to="{ path: 'projects' }">Home</router-link></li>
          <li><a href="#" class="nav-item">Events</a></li>
          <li><a href="#" class="nav-item">Projects</a></li>
          <li><a href="#" class="nav-item">About</a></li>
        </ul>
        <div class="burger">
          <div class="menu-btn" v-bind:class="{ open: isOpen }" @click="isOpen = !isOpen">
            <div class="menu-btn__burger"></div>
          </div>
        </div>
      </nav>
    </header>
  </section>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
};
</script>

<style lang="scss" scoped>
.nabar-1 {
  margin-top: 20px;
}

.navigation {
  background-color: black;
  height: 0px;
  min-height: 8vh;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  position: relative;
}

.logo {
  color: rgb(224, 223, 223);
  font-size: 20px;
  text-transform: uppercase;
  align-self: center;
}

.nav-links a {
  color: rgb(224, 223, 223);
  text-decoration: none;
}

.nav-links li {
  list-style: none;
}

.v-application ul {
  padding: 0;
}

.nav-links {
  // background-color: red;
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  &:hover,
  &:active {
    color: rgba(224, 223, 223, 0.747);
    border-top: 2.75px solid rgba(224, 223, 223, 0.747);
    padding-top: 5px;
  }
}

.hlshow {
  display: none;
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
  // border: 3px solid #fff;
}

.menu-btn__burger {
  width: 25px;
  height: 2.5px;
  background: rgb(224, 223, 223);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 2.5px;
  background: rgb(224, 223, 223);
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

.burger {
  display: none;
}

// RESPONSIVE
@media screen and (max-width: 1100px) {
  .nav-links {
    width: 45%;
  }
}

@media screen and (max-width: 768px) {
  body {
    overflow-y: hidden;
  }
  .burger {
    display: block;
  }

  .nav-links {
    padding: 20px 0;
    position: absolute;
    right: 0px;
    height: 50vh;
    width: 100%;
    top: 8vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.5s ease-in-out;

    &li {
      opacity: 0;
    }
  }

  .nav-links.open {
    opacity: 1;
    transform: translateY(0);

    &li {
      opacity: 1;
    }
  }

  .nav-item:hover {
    border-top: 2.75px solid rgba(224, 223, 223, 0.747);
    padding-top: 5px;

    color: rgba(224, 223, 223, 0.452);
  }

  .v-application ul {
    padding: 15px 0;
  }

  .hlshow {
    display: block;
    width: 30%;
  }
}
</style>

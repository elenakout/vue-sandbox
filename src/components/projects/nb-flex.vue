<template>
  <header class="navbar-flex">
    <nav class="navbar">
      <div class="navbar-home">
        <router-link :to="{ path: 'projects' }">
          <img
            src="http://www.freelogovectors.net/wp-content/uploads/2016/12/airbnb_logo.png"
            alt="airbnb_logo"
            class="logo"
          />
        </router-link>
        <button class="toggle" @click="isOpen = !isOpen">
          <v-icon v-html="isOpen ? 'mdi-chevron-down' : 'mdi-chevron-up'"></v-icon>
        </button>
      </div>
      <ul class="navbar-links" v-bind:class="{ closed: isOpen }">
        <li class="navbar-link"><router-link :to="{ path: 'projects' }">Home</router-link></li>
        <li class="navbar-link"><router-link :to="{ path: 'projects' }">About</router-link></li>
        <li class="navbar-link"><router-link :to="{ path: 'projects' }">Events</router-link></li>
        <li class="navbar-link"><router-link :to="{ path: 'projects' }">Projects</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    isOpen: true,
  }),
};
</script>

<style scoped>
.navbar-flex {
  --height-lg-screens: 80px;
  padding: 16px;
  width: 90%;
  margin: 0 auto;
}
/*  Global Resets */
.v-application a {
  text-decoration: none;
  color: #484848;
}

li {
  list-style-type: none;
}

button {
  background-color: transparent;
  border: none;
}

button:focus {
  outline: 0;
}

.logo {
  width: 34px;
  height: 34px;
}

/* Navbar flex */

.navbar {
  background-color: white;
  display: flex;
  /* by default: align-items: strech -> child elements' heights = the container's height */
  justify-content: space-between;

  height: var(--height-lg-screens); /* set a fixed height */
}

.navbar-home {
  height: var(--height-lg-screens); /* it needs to stay inside the nav bar */
  box-sizing: border-box;
}

.navbar-links {
  display: flex;
  /* align-items: stretch; by default */
}

.navbar-home,
.navbar-link {
  display: flex;
  align-items: center; /* we want children to be centered vertically*/

  padding: 16px; /* with paddings on the sides */
}

.navbar-link:hover {
  background-color: #e9e9e9;
}

.toggle {
  display: none;
  padding: 8px;
  font-size: 16px;
}

/**
*
* Smaller screen + Mobile
*
*/
@media screen and (max-width: 1127px) {
  .navbar {
    flex-direction: column; /* change the direction of the container */

    height: auto; /* overrides the height of 80px set for large screens */
    background-color: white;
  }

  .navbar-links {
    flex-direction: column;
    /* align-items: center; */
  }

  .navbar-links.closed {
    /* when toggled, hide the main nav*/
    display: none;
  }

  .toggle {
    display: block;
  }

  .navbar-link {
    border-bottom: none;
  }
}
</style>

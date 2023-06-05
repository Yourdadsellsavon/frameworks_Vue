<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Media from './pages/Media.vue'
import Navbar from "./components/Navbar.vue"

const routes = {
  '/': Home,
  '/about': About,
  '/home': Home,
  '/media': Media
}

export default {
  name: "App",
  components: {
    Navbar,
  },
  
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}

</script>

<template>
  <div class="app">
    <Navbar/>
  


  <component :is="currentView" />
  </div>
</template>

<style scoped>
/* scoped means only affecting this page. remove to affect ALL pages */
/* @import url();//font from google */
.top-bar-spread{
  color: blueviolet;
}
.top-bar-nav{
  color: burlywood;
  /* width: 200px; */
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #a89494;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}

</style>
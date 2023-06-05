
<template>
    <button class="app-button">
      <font-awesome-icon icon="fa-solid fa-arrow-up" />
    </button>
  </template>


<script>
// import AppButton from "./components/AppButton.vue";
import { onMounted, ref, onBeforeMount } from "vue";
export default {
  name: "AppButton",
  setup() {
    const appButton = ref();
    const userScroll = () => {
      if (window.scrollY > 0) {
        appButton.value.classList.add("showButton");
        console.log('scrolled');
      } else {
        appButton.value.classList.remove("showButton");
        console.log('top');
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", userScroll);
    });
    onBeforeMount(() => {
      window.removeEventListener("scroll", userScroll);
    });
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return { appButton };
  },
};
</script>

<style scoped>

</style>


<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font: inherit;
}
html {
	font-family: "Nunito", sans-serif;
}
body {
	font-size: 15px;
	color: #000000;
	background: #fff;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	color: #000000;
}
img {
	max-width: 100%;
}
ul {
	list-style: none;
}
a {
	text-decoration: none;
	display: inline-block;
}
.app-container {
	max-width: 82rem;
	margin: auto;
	padding: 3rem 1rem;
}
  .app-button {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 4px;
  box-shadow: 2px 2px #e9e9e9;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  display: none;
  right: 40px;
}

.showButton {
  display: block;
}
</style>



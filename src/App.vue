<template>
  <div id="app">
    <Menubar :model="items">
      <template #end>
        <h3 :style="{ 'margin-left': '0 .5em' }">zchristmas.dev</h3>
      </template>
    </Menubar>
    <div class="app-container">
      <router-view></router-view>
    </div>

    <Toast />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/"
        },
        {
          label: "Labs",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Lab 1 (Home Page)",
              icon: "pi pi-fw pi-star",
              to: "/"
            }
          ]
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
}
.app-container {
  text-align: center;
}
body {
  margin: 0px !important;
}
body #app .p-button {
  margin-left: 0.2em;
}
form {
  margin-top: 2em;
}
</style>

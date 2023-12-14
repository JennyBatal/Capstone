<!-- App.vue -->
<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-3 col-lg-2 sidebar">
          <DrawerMenu @menuSelected="handleMenuSelection" />
        </div>

        <!-- Main content -->
        <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DrawerMenu from "@/components/DrawerMenu.vue";

export default {
  name: "App",
  components: {
    DrawerMenu,
  },
  methods: {
    handleMenuSelection(selectedItem) {
      this.$router.push(`/${selectedItem.toLowerCase()}`);
    },
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding-top: 56px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
}

/* Add more styles as needed */
</style>

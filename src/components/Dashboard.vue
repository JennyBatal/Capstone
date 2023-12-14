<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <DrawerMenu v-if="isDrawerOpen" />
    <router-view />
    <DrawerMenu v-if="isDrawerOpen" @close-drawer="closeDrawer" />
  </div>
</template>

<script>
import DrawerMenu from './DrawerMenu.vue';

export default {
  components: {
    DrawerMenu,
  },
  data() {
    return {
      isDrawerOpen: false, // Initial value for isDrawerOpen
    };
  },
  methods: {
    closeDrawer() {
      this.isDrawerOpen = false;

      // After closing the drawer, navigate to the "Create Accomplishment" page
      this.$router.push("/create/accomplishment");
    },
  },
};
</script>

<style scoped>
/* Add styles for the dashboard component */
.dashboard {
  padding: 20px;
}
</style>

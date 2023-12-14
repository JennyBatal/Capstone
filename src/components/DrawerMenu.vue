<template>
  <div class="drawer-menu">
    <button class="btn btn-outline-dark close-btn" @click="closeDrawer">
      <span aria-hidden="true">&times;</span>
    </button>
    <ul>
      <li>
        Reports
        <ul>
          <li @click="navigateTo('/create/accomplishment')">Accomplishment</li>
          <li @click="navigateTo('/create/itinerary')">Itinerary</li>
        </ul>
      </li>
      <li>
        Create
        <ul>
          <li @click="navigateTo('/create/accomplishment')">Accomplishment</li>
          <li @click="navigateTo('/create/itinerary')">Itinerary</li>
        </ul>
      </li>
      <li @click="navigateTo('/history')">History</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
    closeDrawer() {
      this.isDrawerOpen = false;
      this.$emit('close-drawer');
    },
  },
};
</script>

<style scoped>
/* Add styles for the drawer menu component */
.drawer-menu {
  list-style: none;
  padding: 0;
}

.drawer-menu li {
  cursor: pointer;
}

.drawer-menu li ul {
  list-style: none;
  padding-left: 10px;
  display: none;
}

.drawer-menu li:hover ul {
  display: block;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>

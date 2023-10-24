<script type="text/javascript">
/*$(document).ready(function () {
  $(".sub-btn").click(function({
    $this.next('.sub-menu').slideToggle()
  }))
});*/

export default {
  data() {
    return {
      showSubMenu: false,
      showSubMenu2: false,
      active: false,
      active2: false,
      activemenu: false,
      usermenu: false,
    };
  },
  methods: {
    toggleSubMenu() {
      this.showSubMenu = !this.showSubMenu;
    },
    toggleSubMenu2() {
      this.showSubMenu2 = !this.showSubMenu2;
    },
    rot() {
      this.active = !this.active;
    },
    rot2() {
      this.active2 = !this.active2;
    },
    menuShow() {
      this.activemenu = !this.activemenu;
    },
    userMenu() {
      this.usermenu = !this.usermenu;
    },
    swt() {
      this.$router.push("/Dashboard");
    },
    vitin() {
      this.$router.push("/VItinerary");
    },
    vacom() {
      this.$router.push("/VAccomplishment");
    },
    vmyrep() {
      this.$router.push("/VMyrep");
    },
    vmyprof() {
      this.$router.push("/Profile");
    },
  },
};
</script>

<template>
  <div class="header">
    <div
      class="menu-btn"
      @click="menuShow()"
      :aria-pressed="activemenu ? 'true' : 'false'"
    >
      <i class="fas fa-bars"></i>
    </div>
    <div>
      <img
        class="user-pic"
        src="./user.png"
        @click="userMenu()"
        :aria-pressed="usermenu ? 'true' : 'false'"
      />
      <h4 class="uname">Admin</h4>
      <div
        :class="{ openmenu: usermenu }"
        class="sub-menu-wrap"
        v-show="usermenu"
      >
        <div class="sub-menu2">
          <div class="user-info">
            <a href="" class="sub-menu-link">
              <img class="" src="./user.png" />
              <p>My profile</p>
              <div class="item">
                <a @click.prevent="vmyprof" class="sub-item">Itinerary</a>
              </div>
              <span>></span>
            </a>
            <a href="" class="sub-menu-link">
              <img class="" src="./log-out.png" />
              <p>Logout</p>
              <span>></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div :class="{ sbar: activemenu }" class="side-bar" v-show="activemenu">
    <div
      @click="menuShow()"
      :aria-pressed="activemenu ? 'false' : 'true'"
      class="close-btn"
    >
      <i class="fas fa-times"></i>
    </div>
    <div class="ldisp">
      <img class="logo" src="./climbsL.jpg" />
      <h1 class="txt">CLIMBS</h1>
    </div>
    <div class="menu">
      <div class="item">
        <a @click.prevent="swt()"> <i class="fas fa-desktop"></i>Dashboard </a>
      </div>
      <div class="item">
        <a
          class="sub-btn"
          @click="toggleSubMenu(), rot()"
          :aria-pressed="active ? 'true' : 'false'"
        >
          <i class="fas fa-table"></i>View Reports
          <i
            :class="{ rotate: active }"
            class="fas fa-angle-right dropdown"
          ></i>
        </a>
        <div class="sub-menu" v-show="showSubMenu">
          <a @click.prevent="vitin" class="sub-item">Itinerary</a>
          <a @click.prevent="vacom" class="sub-item">Accomplishment</a>
          <a @click.prevent="vmyrep" class="sub-item">My Reports</a>
        </div>
      </div>
      <div class="item">
        <a
          class="sub-btn"
          @click="toggleSubMenu2(), rot2()"
          :aria-pressed="active2 ? 'true' : 'false'"
        >
          <i class="fas fa-th"></i>Create Report
          <i
            :class="{ rotate: active2 }"
            class="fas fa-angle-right dropdown"
          ></i>
        </a>
        <div class="sub-menu" v-show="showSubMenu2">
          <a href="#" class="sub-item">Itinerary</a>
          <a href="#" class="sub-item">Accomplishment</a>
          <a href="#" class="sub-item">My Reports</a>
        </div>
      </div>
      <div class="item">
        <a href="#"> <i class="fas fa-history"></i>History </a>
      </div>
    </div>
  </div>
</template>
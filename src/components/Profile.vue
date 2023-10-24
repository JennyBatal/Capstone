<template>
    <div class="containerD">
      <div class="contentsD">
        <h3 class="pt">Accomplishment Report</h3>
        <div class="VitinInfo">
          <h4>Date <input type="date" /></h4>
          <h4 class="Ps">
            Position
            <select class="Pselect" name="" id="">
              <option>ASM</option>
              <option>RSM</option>
              <option>Sales Agent</option>
            </select>
          </h4>
          <h4 class="Aselect">
            Agent
            <input type="text" v-model="search" placeholder=" --" />
          </h4>
        </div>
      </div>
      <div class="IInfo">
        <h3>Time</h3>
        <h3>Itinerary Report</h3>
        <h3>Status</h3>
      </div>
      <div class="profile">
        <div class="profile-outline">
          <!-- Profile content goes here -->
          <h2>Profile</h2>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <!-- End of profile content -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .containerD {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  
  .contentsD {
    flex: 1;
  }
  
  .VitinInfo h4,
  .IInfo h3 {
    margin: 10px 0;
  }
  
  .profile {
    border: 2px solid #000;
    padding: 10px;
  }
  
  .profile-outline {
    border: 2px solid #000;
    padding: 20px;
  }
  </style>
  
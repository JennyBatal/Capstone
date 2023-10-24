<script>
export default {};
</script>
<template>
  <div class="containerD">
    <div class="contentsD">
      <h3 class="pt">My Report</h3>
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
    <div class="line"></div>
  </div>
</template>
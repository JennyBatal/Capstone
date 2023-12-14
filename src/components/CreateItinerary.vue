<template>
    <div>
      <h2>Create Itinerary</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="date">Date:</label>
          <input type="text" v-model="date" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="name">Name of Coop:</label>
          <input type="text" v-model="name" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="city">Municipality/City:</label>
          <input type="text" v-model="city" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="typeacc">Type of Account:</label>
            <select v-model="typeacc" class="form-control" required>
                <option value="new">New</option>
                <option value="old">Old</option>
                <option value="existing">Existing</option>
            </select>
            </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        date: '',
        name: '',
        city: '',
        typeacc: '',
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Date:', this.date);
        console.log('Name:', this.name);
        console.log('City:', this.city);
        console.log('TypeAcc:', this.typeacc);
      },
    },
  };
  </script>
  
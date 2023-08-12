<template>
    <div class="plan-page">
      <div class="background"></div>
      <div class="content">
        <h2>Choose Your Plan</h2>
        <div class="plan-options">
          <div class="plan-option">
            <h3>Basic Plan</h3>
            <p>Access to basic features</p>
            <button @click="selectPlan('basic')">Select</button>
          </div>
          <div class="plan-option">
            <h3>Standard Plan</h3>
            <p>Access to standard features</p>
            <button @click="selectPlan('standard')">Select</button>
          </div>
          <div class="plan-option">
            <h3>Premium Plan</h3>
            <p>Access to premium features</p>
            <button @click="selectPlan('premium')">Select</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlanPage',
    methods: {
      selectPlan(plan) {
        
        console.log('Selected plan:', plan);
      }
    }
  }
  </script>
  
  <style scoped>
  @import "./style/plans\ style.css";
  </style>
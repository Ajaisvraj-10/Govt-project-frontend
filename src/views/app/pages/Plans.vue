<template>
    <div class="plan-page">
      <div class="background"></div>
      <div class="content">
        <h2>Choose Your Plan</h2>
        <div class="plan-options">
          <div class="plan-option">
            <h3 class="price">Lite</h3>
            <p>Access to basic features</p>
            <hr />
            <h1 class="price">$149/mo</h1>
            <p>+$1.99 per paid member/mo</p>
            <button class="slct-btn" @click="selectPlan('basic')">Select</button><br>
            <div class="learn-more" ><a href="#">Learn more</a></div>
          </div>

          <div class="plan-option">
            <div class="recomd-plan">Recommended Plan</div>
            <h3 class="price">Pro</h3>
            <p>Access to standard features</p>
            <hr />
            <h1 class="price">$499/mo</h1>
            <p>+$0.99 per paid member/mo</p>
            <button class="slct-btn" @click="selectPlan('standard')">Select</button><br>
            <div class="learn-more" ><a href="#">Learn more</a></div>
          </div>

          <div class="plan-option">
            <h3 class="price">Premium</h3>
            <p>Access to premium features</p>
            <hr />
            <h1 class="price">Custom Pricing</h1>
            <p>Custom per paid member pricing</p>
            <button class="slct-btn" @click="selectPlan('premium')">Select</button><br>
            <div class="learn-more" ><a href="#">Learn more</a></div>
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
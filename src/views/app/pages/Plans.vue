<template>
    <div class="plan-page">
      <div class="background"></div>
      <div class="content1">
        
        <div class="plan-options">
          <div class="plan-option1">
            <h3 class="price">Lite</h3>
            <p class="access">Access to basic features</p>
            <p>For creators focused on growing a <br> small video membership online</p>
            <hr />
            <h1 class="price-main">$149/mo</h1>
            <p>+$1.99 per paid member/mo</p>
            <div class="points">
            <li>0% fee on one-time purchases</li>
            <li>Netflix-style video catalog</li>
            <li>Live streaming up to 1 hour</li>
            <li class="decor">Community up to 5 channels</li>
          </div>
            <button class="slct-btn" @click="selectPlan('basic')">Select</button><br>
            <div class="learn-more" ><a href="#">Learn more</a></div>
          </div>

          <div class="plan-option">
            <div class="recomd-plan">Recommended Plan</div>
            <h3 class="price">Pro</h3>
            <p class="access">Access to standard features</p>
            <p>For serious creators growing a robust <br> community on mobile & web</p>
            <hr />
            <h1 class="price-main">$499/mo</h1>
            <p>+$0.99 per paid member/mo</p>
            <div class="points">
            <li>0% fee on one-time purchases </li>
            <li>Netflix-style video catalog</li>
            <li>Live streaming up to 1 hour</li>
            <li>Community up to 5 channels</li>
          </div>
            <button class="slct-btn" @click="selectPlan('standard')">Select</button><br>
            <div class="learn-more" ><a href="#">Learn more</a></div>
          </div>

          <div class="plan-option3">
            <h3 class="price">Premium</h3>
            <p class="access">Access to premium features</p>
            <p>For established creators needing full  brand control on all devices</p>
            <hr />
            <h1 class="price-main">Custom Pricing</h1>
            <p>Custom per paid member pricing</p>
            <div class="points">
            <li>Full-featured mobile apps</li>
            <li>TV streaming apps</li>
            <li>Custom live stream packages</li>
            <li>API access</li>
          </div>
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
  @import "./style/plansstyle.css";
  </style>
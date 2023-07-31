<template>

  <div class="container">
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>


    <div><br>
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>


      <div><br>
        <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>


      <div class="px-3 py-2"><br>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>


    <div><br>
      <b-row>
    <b-col md="auto">
      <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
    </b-col>
    
  </b-row>

  <div><br><br>
  <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Tab 1" active><b-card-text>Hai</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Hello</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>GoodBye</b-card-text></b-tab>
    </b-tabs>
  </b-card>

  <div><br><br>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First Slide"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
  </b-carousel>

  <div><br><br><br>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      Toggle Collapse
    </b-button>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>Hi Hello </b-card>
    </b-collapse>

    <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted">
      I accept the terms and use
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div><br><br> 

    <div>
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: {{ text }}</div><br><br>

    <div>
    <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Option A</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">Option B</b-form-radio>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div><br><br><br>

    <div>
    <b-form-rating v-model="value"></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>

    <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>

    <div>
    <label for="demo-sb">Spin Button</label>
    <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
    <p>Value: {{ value }}</p>

    <div>
    <label for="tags-basic">Type a new tag and press enter</label>
    <b-form-tags input-id="tags-basic" v-model="tags"></b-form-tags>
    <p class="mt-2">Value: {{ tags }}</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</div>
</div>
    </div>
      </div>
    </div>
  </div>
</template>

<style>
.container{
  text-align: center;
}
body{
  background-color:aquamarine ;
}
.mt-2{
  font-size: large;
}
</style>



<script>
export default {
  data() {
    return {
      value: '',
      context: null,
      visible: true ,
      status: 'not_accepted',
      text: '',
      selected: '',
      options: [
          { value: null, text: 'Please select some item' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        value: 50,
        tags: ['apple', 'orange']
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    }
  }
};
</script>
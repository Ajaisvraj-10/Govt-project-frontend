<template>
    <div>
        
        <a href="#"
            ><i class="i-Add-User text-white mr-2"></i><b-dropdown text="Contact Owner"  >
              <b-dropdown-item href="#">Today</b-dropdown-item>
              <b-dropdown-item href="#">Yesterday</b-dropdown-item>
              <b-dropdown-item href="#">Tomarrow</b-dropdown-item>
              <b-dropdown-item href="#">This Week</b-dropdown-item>
            </b-dropdown>
          </a>
          <a href="#"
            ><i class="i-Add-User text-white mr-2"></i><b-dropdown text="Create Date"  >
              <b-dropdown-item href="#">Today</b-dropdown-item>
              <b-dropdown-item href="#">Yesterday</b-dropdown-item>
              <b-dropdown-item href="#">Tomarrow</b-dropdown-item>
              <b-dropdown-item href="#">This Week</b-dropdown-item>
            </b-dropdown>
          </a>
          <a href="#"
            ><i class="i-Add-User text-white mr-2"></i><b-dropdown text="Last Activity Date"  >
              <b-dropdown-item href="#">Today</b-dropdown-item>
              <b-dropdown-item href="#">Yesterday</b-dropdown-item>
              <b-dropdown-item href="#">Tomarrow</b-dropdown-item>
              <b-dropdown-item href="#">This Week</b-dropdown-item>
            </b-dropdown>
          </a>
          <a href="#"
            ><i class="i-Add-User text-white mr-2"></i><b-dropdown text="Lead Status"  >
              <b-dropdown-item href="#">New</b-dropdown-item>
              <b-dropdown-item href="#">Open</b-dropdown-item>
              <b-dropdown-item href="#">In Progress</b-dropdown-item>
              <b-dropdown-item href="#">Unqualified</b-dropdown-item>
            </b-dropdown>
            </a>

          <a href="#"
            ><i class="i-Add-User text-white mr-2"></i>
            <b-button v-b-toggle.sidebar-1>More Filters</b-button>
            <b-sidebar id="sidebar-1" title="More filters" width="320px" bg-variant="white" text-variant="light" right shadow>
              <div class="px-4 py-2">
               <div class="form-group search-views">
               <h4 class="px-2 py-2"><strong>Contact Properties</strong></h4>
                        
                  <input class="form-control" id="recipient-name-1" type="text" placeholder="Search ">
              </div>
                      <b-form-group id="input-group-4" class="filter-group py-2">
                      <h5><strong>Contact Activity</strong></h5>
                      <div v-for="field in fields" :key="field.id ">
                      <b-form-checkbox ><h6 v-b-toggle="field.id" class="m-1">{{field.displayName}}</h6 ></b-form-checkbox>
                        <b-collapse :id="field.id">

                          <b-card v-if="field.type=='Text' | field.type=='Tag' | field.type=='URL' | field.type=='Email' | field.type=='Textarea' | field.type=='Mobile' | field.type=='Phone' | field.type=='Lookup'">
                                <b-dropdown id="dropdown-buttons" text="Contains" class="my-2" >
                                  <input class="form-control"  placeholder="Search " >
                                  <b-dropdown-item-button> Contains</b-dropdown-item-button>
                                  <b-dropdown-item-button active> Does not Contains</b-dropdown-item-button>
                                  <b-dropdown-item-button> Is</b-dropdown-item-button>
                                  <b-dropdown-item-button> Is not</b-dropdown-item-button>
                                  <b-dropdown-item-button> Starts with</b-dropdown-item-button>
                                  <b-dropdown-item-button> Ends with</b-dropdown-item-button>
                                </b-dropdown>
                                <input class="form-control" >
                              <b-button variant="primary" class="my-2">+ Add Filter</b-button>
                          </b-card>
                          
                          <b-card v-else-if="field.type == 'DateTime' ">
                                <b-dropdown id="dropdown-buttons" text="Is" class="my-2" >
                                  <input class="form-control"  placeholder="Search " >
                                  <b-dropdown-item-button>Is not</b-dropdown-item-button>
                                  <b-dropdown-item-button active> Before</b-dropdown-item-button>
                                  <b-dropdown-item-button>After</b-dropdown-item-button>
                                  <b-dropdown-item-button>Today</b-dropdown-item-button>
                                  <b-dropdown-item-button>Tomorrow</b-dropdown-item-button>
                                </b-dropdown>
                                  <b-form-datepicker
                                    id="datepicker-dateformat1"
                                    :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
                                    locale="en">
                                  </b-form-datepicker>
                              <b-button  variant="primary my-2 sm">+ Add Filter</b-button>
                          </b-card>

                          <b-card v-else-if="field.type == 'Decimal' |  field.type == 'Integer'">
                                <b-dropdown id="dropdown-buttons" text="Is" class="my-2" >
                                  <input class="form-control"  placeholder="Search " >
                                  <b-dropdown-item-button>Is not</b-dropdown-item-button>
                                  <b-dropdown-item-button active>Greater than</b-dropdown-item-button>
                                  <b-dropdown-item-button>Less than</b-dropdown-item-button>
                                  <b-dropdown-item-button>Is unknown</b-dropdown-item-button>
                                  <b-dropdown-item-button>has any value</b-dropdown-item-button>
                                </b-dropdown>
                                  <input class="form-control" >
                              <b-button  variant="primary" class="my-2">+ Add Filter</b-button>                             
                          </b-card>

                          <b-card v-else>
                              <b-form-select v-model="selected" class="mb-3">
                                  <input class="form-control"  placeholder="Search " >
                                  <b-form-select-option :value="null">Select</b-form-select-option>
                                  <b-form-select-option value="a">Is True</b-form-select-option>
                                  <b-form-select-option value="b">Is False</b-form-select-option> 
                                </b-form-select>
                              <b-button  variant="primary my-2 sm">Apply Filter</b-button>
                          </b-card>

                        </b-collapse>
                      </div>
                                  
                        
                      </b-form-group>
                    
                     
              </div>
                      <div class="save-button">
                                <b-button v-b-modal.modal-sm  variant="info my-2 sm">Save as view</b-button>
                                        <b-modal id="modal-sm" title="Save View">
                                          <div class="modal-body">
                                              
                                              <form>
                                                  <div class="form-group">
                                                     
                                                      <input class="form-control" id="recipient-name-1" placeholder="Enter New view Name" type="text" />
                                                  </div>
                                                  
                                                  <label class="checkbox checkbox-info">
                                                      <input type="checkbox" checked="checked"><span>Share this view</span><span class="checkmark"></span>
                                                  </label>
                                              </form>
                                          </div>
                                          <template #modal-footer>
                                             
                                              <button class="btn btn-primary" type="button" style="background-color:#203d75">Save</button>
                                              <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                          </template>
                                      </b-modal>
                                <b-button  variant="secondary my-2 sm">Reset</b-button>
                      </div>         
            </b-sidebar>
            </a>
            
    </div>
</template>
<script>
export default {
    name: 'filters', 
    props:['fields',],
    data() {
    return {
        
    };
  },
   mounted () {
    
    
    
  },

   
};
</script>
<style>


.save-button button.btn.btn-info.my-2.sm {
    margin: 10px 10px 10px 30px;
}
label#datepicker-dateformat1__value_ {
    margin: 0;
}
.custom-checkbox .custom-control-label::before {
  
    margin: 3px 0;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
    
    margin: 0;
}
.b-sidebar > .b-sidebar-header {
   
    padding: 0.63rem 1rem;
   
    font-size: 1.2rem;
   
}

.filter-group1 .dropdown-toggle.btn {
    padding-right: 10px!important;
}
.filter-group button#dropdown-buttons__BV_toggle_ {
    width: 100%;
    text-align: left;
    border:1px solid #afafaf;
    outline:none;
}
div#dropdown-buttons {
    width: 100%;
}
.block-a a{
  display:block;
  font-size:12px;
  color: #afafaf!important;
}
.filter-group h6.m-1.collapsed {
    padding: 5px;
    font-size: 14px;
    margin:0!important;
}

.custom-control:hover {

    background-color: #e3ecfe;
}
.custom-control {

    padding-left:30px;
}
.b-sidebar-body {
    margin-top: 20px!important;
}
.filter-group h5 {
    margin: 10px 0;
    font-weight: 400;
}
.filter-group button{
  padding: 5px 17px!Important;
}
.form-group label {
  
  
    margin-bottom: 6px;
    margin-top: 6px;
}
.bv-no-focus-ring {
    height: 60vh!important;
 
    overflow: auto;
}
</style>

<style scoped>

.b-sidebar > .b-sidebar-body {
 
    overflow-y: hidden;
}
.save-button{
  position:absolute;
  bottom:10px;
  left: 0px;
}
.save-button button{
  Margin:0 5px;
}
</style>
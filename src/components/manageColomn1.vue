<template>
    <div style="display: contents;">
        <a href="#" 
            v-b-modal.bd-example-modal-lg
            style="display: contents;"
            @click="assign();"
            ><i class="i-Add-User text-white mr-2"></i>Edit Colomns
          </a>

       <b-modal  id="bd-example-modal-lg" size="lg" class="fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"  style="display: none;" aria-hidden="true" >
                            <div slot="modal-header">
                                <h5 class="modal-title text-white" id="exampleModalCenterTitle">Manage Columns</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span type="button" v-b-modal.customFieldModal aria-hidden="true">Add Custom Field ×</span></button>
                            </div>
                            <div class="modal-body edit_colmns_content">
                              <div class="row">
                                  <div class="col-md-6">

                                    <div class="model-edit-item">
                                        <div class="fixed-heading-sectiom">
                                            <h5>All Available Fields</h5>
                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label class="btn btn-secondary edit_radio active">
                                                    <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Contact
                                                </label>
                                                <label class="btn btn-secondary edit_radio">
                                                    <input type="radio" name="options" id="option2" autocomplete="off"> Company
                                                </label>
                                            </div>
                                            <a href="#" v-on:click="SelectAll" class="float-right select_all_tag">Select All</a>
                                            <div class="form-group">
                                                <input type="text" v-on:keyup="Search($event.target.value)" class="form-control edit_search" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search Fields">
                                                
                                            </div>
                                        </div>
                                        <div class="sysytem_fields">

                                            <h4>System Fields</h4>

                                            <div v-for="group in groups" :key="group" class="contact-group-item">
                                            <h5>{{group}}</h5>
                                            <draggable class="list-group" :list="options" group="fields">
                                            <div class="checkbox_item" v-for="field in options" :key="field.index">
                                              <div v-if="field.groupName == group">
                                                <label >
                                                    <input type="checkbox" name="new1" class="card-input-element" readonly="" disabled="">


                                                    <div class="offer-part new">
                                                      <span class="offer"><i class="fa fa-ellipsis-v"></i>{{field.displayName}}</span>
                                                    </div>


                                                </label>
                                              </div>
                                            </div>
                                            </draggable>
                                            </div>
                                        </div>
                                    </div>
                                      
                                  </div>
                                  <div class="col-md-6">

                                    <div class="model-edit-item">
                                        <div class="fixed-heading-sectiom">
                                            <h5>Current Fields</h5>
                                            
                                            <div class="form-group">
                                                <input type="text" v-on:keyup="SearchCurrent($event.target.value)" class="form-control edit_search" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search Fields">
                                                
                                            </div>
                                        </div>
                                        <div class="sysytem_fields ht-2">
                                            <draggable class="list-group" :list="current" group="fields">
                                            <div class="checkbox_item" v-for="field in current" :key="field.displayName">
                                                <label >
                                                    <input type="checkbox" name="new1" class="card-input-element" readonly="" disabled="">
                    

                                                    <div class="offer-part new">
                                                      <span class="offer"><i class="fa fa-ellipsis-v"></i>{{field.displayName}}</span>
                                                    </div>


                                                </label>
                                            </div>
                                            </draggable>
                                            
                                          
                                        </div>
                                    </div>
                                      
                                  </div>
                              </div>

                            </div>
                            <div slot="modal-footer" class="d-block">
                                <!-- <button class="btn btn-secondary float-left" type="button" >Reset To Default Columns</button> -->
                                <div class="right-edit-button">
                                <button class="btn btn-primary ml-2" type="button" style="background: #203d75;
    border-color: #203d75;">Save</button>

                                <button class="btn btn-secondary" type="button" @click="$bvModal.hide('bd-example-modal-lg'); assign();">Cancel</button>
                            </div>
                            </div>
                      
          </b-modal>
    </div>
</template>
<script>
export default {
    name: 'manageColomn', 
    props:['groups','current_fields','field_options'],
    data() {
    return {
        current : [],
        options : [],
        current_copy : [],
        options_copy : [],
    };
  },
   mounted () {
       this.assign()
  },
  methods : {
     SelectAll: function () {
       var newArray = this.current.concat(this.options);
       this.current = newArray
       this.current_copy = newArray
       this.options =[]
       this.options_copy = []
       
    }, 
    assign: function(){
        this.current = this.current_fields
        this.options = this.field_options
        this.current_copy = this.current_fields
        this.options_copy = this.field_options
    },

    Search: function (value) {
       this.options = []
       for (var i=0; i < this.options_copy.length; i++) {
        if (this.options_copy[i].displayName.includes(value)) {
             this.options.push(this.options_copy[i]);
        }
    }
    },

    SearchCurrent: function (value) {
       this.current = []
       for (var i=0; i < this.current_copy.length; i++) {
        if (this.current_copy[i].displayName.includes(value)) {
             this.current.push(this.current_copy[i]);
        }
    }
    },

  }
   
}
</script>

<style scoped>
 /*property crm*/
    .scrollpoint{
        height: 70vh;
        overflow-y: scroll;
        box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%), 0 1px 4px rgb(0 0 0 / 8%);
        margin: 10px;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.25rem;
        padding: 10px;
                                                                   
        }
    .section-scroll{
        display: inline-flex; 
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
    }

    .section-scroll:hover{
    background-color: #ebf2fe;
    }
    .section-scroll p{
        margin-left: 20px;
    }

    .scrollpoint::-webkit-scrollbar {
  width: 5px;
}

.scrollpoint::-webkit-scrollbar-thumb {
  background: #203d75; 
  border-radius: 10px;
}

/* Handle on hover */
.scrollpoint::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
.modal-header {

    background-color: #203d75;
}
.modal-title {
   
    color: white;
}
.close span{

    color: white;

}
  
  ul.buttons-content {
    
    position: relative;
    left: 65%;
}
ul.buttons-content li {
    border: 1px solid #F44336;
    padding: 7px 10px !important;
    border-radius: 3px;
}
ul.buttons-content li a {
    color: #F44336 !important;
}
li.contact-back {
    background: #F44336;
    color: #fff;
}
li.contact-back a {
    color: #fff !important;
}
a.anchor-item {
    padding: 10px;
    color: #144fd6 !important;
}
.search-bar.table-search {
    border-radius: 5px !important;
    margin-left: 10px;
    height: 35px !important;
}
.main-header.searchbar {
    position: inherit !important;
    box-shadow: none !important;
    background: none !important;
}
ul.search-table-filters li {
    padding: 0px;
}
ul.search-table-filters li a {
    color: #144fd6 !important;
}
ul.search-table-filters {
    display: inline-flex;
    list-style-type: none;
    float: none;
    position: relative;
    left: -24%;
    margin: 10px;
}
li.float-right {
    position: relative;
    right: -42%;
}
section.contact-list .card {
    box-shadow: none;
    margin: 0;
    padding: 0;
}
section.contact-list .card-body{

  padding-left: 0;
}
section.contact-list table.dataTable {
    border: 1px solid #ccc;
    }
    ul.links {
    list-style-type: none;
    text-align: left;
    padding: 5px;
}
ul.links li {
    padding: 10px;
    color: #000;
}
ul.links li a{

  color: #000 !important;
}
.dropdown-menu.text-left.table_menu.show {
    height: 230px;
    overflow-y: scroll;
    overflow-x: hidden;
}


.search-container input[type=text] {
  padding: 6px;
    margin-top: 0px;
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.search-container button {
  float: right;
    position: relative;
    top: -28px;
    left: -7px;
    color: #1b3570;
    
    background: none;
    font-size: 14px;
    border: none;
    cursor: pointer;
}

.search-container button:hover {
  background: #ccc;
}
.search-container.create_date input[type=text] {
    width: 66%;
    font-size: 10px;
    
}
.search-container.create_date button {
    float: right;
    position: relative;
    top: 4px;
    left: -44px;
    color: #1b3570;
    background: none;
    font-size: 14px;
    border: none;
    cursor: pointer;
}
/*filter*/
a.btn.text-muted.dropdown-toggle.filter:after {
    display: none;
}
.dropdown-menu.text-left.table_menu.filter-menu.show {
    height: auto;
    overflow: hidden;
    position: absolute;
    left: 172% !important;
    width: 250px;
    top: 44px !important;
}
a.btn.text-muted.dropdown-toggle.filetr_match {
    padding: 4px 16px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 10px;
    margin-top: -6px;
    margin-left: 15px;
}
ul.search-table-filters li h5 {
    font-weight: 700;
    font-size: 14px;
    margin-left: 10px;
}
.search-container.filetr_serach {
   margin: 0;
    padding: 0px 10px;
}
.search-container.filetr_serach input {
    width: 100%;
}
h5.list-heading {
    color: #144fd6;
    margin: 15px;
}
ul.links.filetr_links li {
    padding: 3px 10px;
}
ul.links.filetr_links {
    /* padding: 0; */
    margin-top: -16px;
}
.apply_filter_button {
    text-align: center;
    padding: 10px;
}
a.add_filetr_btn {
    color: #222 !important;
    border: 1px solid #Ccc;
    padding: 5px;
    }
    ul.search-table-filters.bg-gray {
    display: block;
    left: 0;
    background: #efefef;
    padding: 10px;
}
a.btn.text-muted.dropdown-toggle.filetr_match.select-dropdown {
    background: #fff;
    margin-bottom: 5px !important;
    width: 100%;
    text-align: left;
    margin: 0;
    color: #222 !important;
}

/*contact model*/
.contact-group-item {
    margin-bottom: 20px;
}
.contact-group-item h6 {
    font-weight: bold;
    font-size: 15px;
}
header.modal-header.contact_model {
    background: #203d75;
    border-radius: 3px;
    color: #fff;
    opacity: 1;
    display: inline-block;
}
.modal-header.contact-model h5, .modal-header.contact-model span {
    color: #fff;
}
.modal-body.contact_model_content .form-group {
    margin-bottom: 0;
}
.modal-body.contact_model_content .form-group label {
    margin-bottom: 0;
}
.modal-body.contact_model_content {
    height: 500px;
    overflow-y: scroll;
}
.modal-content.contact_model {
    /*float: right;
    left: 35%;*/
    top: -25px;
}
.modal.fade.model-right.show {
    position: fixed;
    right: 0;
    left: inherit;
    width: 600px;
}
button.btn.btn-primary.craete_btn {
    background: #e0e1e2;
    border: none;
    color: #222;
    border-radius: 2px;
    padding: 5px 5px;
    font-size: 12px;
}
button.btn.btn-secondary.border_btn {
    padding: 4px 10px;
    color: #F44336 !important;
    border-color: #F44336;
    border-radius: 2px;
}
/*edit colms model*/
.modal-dialog.modal-lg.w-70 {
    max-width: 70%;
}
.modal-header.edit_cols_header {
    background: #203d75;
    border-radius: 3px;
}
.modal-header.edit_cols_header h5 {
    color: #fff;
}
.modal-header.edit_cols_header span {
    color: #fff;
    font-size: 14px;
    font-weight: normal;
}
.modal-header.edit_cols_header button {
    opacity: 1;
}
.modal-body.edit_colmns_content {
    background: #f7f9fc;
}
label.btn.btn-secondary.edit_radio.active {
    background-color: #edf0f7 !important;
    border-color: #d3d9e6 !important;
    box-shadow: inset 0 0 0 transparent !important;
}
label.btn.btn-secondary.edit_radio {
    border-color: #ccc !important;
    font-weight: 700;
    color: #324061!important;
}
input.form-control.edit_search {
    background: #fff;
    border-radius: 3px;
    margin-bottom: 0px !important;
    margin: 20px auto;
    border-color: #d3d9e6 !important;
}
.fixed-heading-sectiom {
    background: #f7f9fc;
    border: 1px solid #e6eaf2;
    border-radius: 3px 3px 0 0;
    padding: 20px;
}
a.float-right.select_all_tag {
    color: #203d75;
}
.card-input-element {
    display: none;
}

.card-input {
    margin: 10px;
    padding: 00px;
}

.card-input:hover {
    cursor: pointer;
}
.panel.panel-default.card-input{

    border: 1px solid #f1f3f4;
    width: 100%;
    padding: 22px 0px;
    margin-left: 31px;
    border-radius: 10px;
    margin-bottom: 27px;
    min-height: 135px;

}
button#__BVID__31__BV_toggle_ {
    background: blue;
}
.card-input-element:checked + .card-input {
     
   /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);*/
    box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
 }
 .card-input-element:checked + .offer-part.new{

   background: #f7f9fc;
    padding: 10px;



 }
 .sysytem_fields.ht-2 {
    height: calc(100vh - 350px)!important;
}
 .card-input-element:checked + .view-card{

  box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);


 }

 .sysytem_fields {
    padding: 10px 10px;
    height: calc(100vh - 405px)!important;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;
    background: #fff;
    border: 1px solid #e6eaf2;
    border-top: 0;
    border-radius: 0 0 3px 3px;
    padding: 10px 10px;
    overflow-x: hidden;
    overflow-y: scroll;
}
.checkbox_item label {
    width: 100%;
    margin-bottom: 1px;
    
}
.offer-part.new {
    border-bottom: 1px solid #e6eaf2;
    padding: 10px;
    color: #636d7a !important;
}
.sysytem_fields h5 {
    margin-bottom: 0 !important;
}
.sysytem_fields h5 {
    padding: 10px !important;
    margin-bottom: 0px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
}
.model-edit-item h5 {
    font-weight: 800;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 1.2;
    margin-bottom: 20px;
    color: #17274d;
}
button.btn.btn-secondary.float-left {
    border-color: #d3d9e6;
}
/*.model-edit-item {
    border: 1px solid #ccc;
    padding: 10px;
}*/
.right-edit-button {
    float: right;
}
li.border-none {
    border: none !important;
    padding: 0 !important;
}
button.btn.btn-outline-danger.dropdown-toggle.action_btn {
    padding: 5px 20px !important;
    position: relative;
    top: 7px;
    left: 7px;
}

/*more filter*/
/*chat*/

    /* Button used to open the chat form - fixed at the bottom of the page */
    .open-button {
        color: #3F51B5;
    background: none !important;
    padding: 0;
    margin: 6px 10px;
    border: none;
    cursor: pointer;
        outline: none !important;

    }
    .open-button:focus{

        outline: none !important;
    }

    /* The popup chat - hidden by default */
    .chat-popup {
        display: none;
        position: fixed;
        top: 20%;
        right: 15px;
        border: 3px solid #f1f1f1;
        z-index: 9999999;
    }

    /* Add styles to the form container */
    .form-container.filter {
        max-width: 270px;
        height: 500px;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 10px;
        background-color: white;
    }

    /*new header*/

    span.item-name {
    color: #000;
}
a.btn.text-muted.dropdown-toggle.color-white,.color-white {
    color: #fff !important;
}
.main-content-wrap.sidenav-open.d-flex.flex-column.top-header-content {
    width: 100% !important;
    margin-top: 30px !important;
}
button.btn.btn-rounded.btn-primary.btn-block.mt-2:hover {
    background: #203d75;
    border-color: #203d75;
}

/*set up*/

.settings_accordian {
    z-index: 2;
    position: fixed;
    width: 22%;
    background: #fff;
    border-right: 1px solid #e6eaf2;
  }
  .settings_item {
    color: #17274d;
    font-size: 14px;
    padding: 10px 20px;
}
.settings_item a.text-default.collapsed,.settings_item a.text-default {
    color: #17274d;
    font-size: 15px;
    }

    ul.accordion_content {
    list-style-type: none;
    padding: 0;
}
ul.accordion_content li a {
    padding: 8px;
    display: block;
    font-size: 14px;
    color: #203d75;
}
.breadcrumb.setup {
    background: #fff;
    padding: 15px;
    margin: 0;
    position: fixed;
    width: 77%;
    right: -20px;
    z-index: 99;
    border-bottom: 1px solid #e6eaf2;
    }
    .setup_content_Section {
    padding-top: 100px;
}
ul.float-right-buttons {
    position: relative;
    left: 57%;
  }
  .breadcrumb.setup ul li {
    padding: 0;
}
  a.text-default.collapsed.content_accordian:before,a.text-default.content_accordian:before {
    right: 80% !important;
}
span.float-right.accordin_right_edit a:before {
    display: none;
}
span.float-right.accordin_right_edit a {
    color: #576380;
    font-size: 14px;
    margin-right: 15px;
}
ul.accordian_list_item {
    list-style-type: none;
    padding: 0;
    padding-top: 60px;
}
.card-body.accordian-list-item {
    padding: 0;
  }
  button.accordian_action.dropdown-toggle.setup_button {
    background: #fff;
    border: 1px solid #c1c7d6;
    color: #576380;
    padding: 2px 15px;
}
button.accordian_action.dropdown-toggle.setup_button:hover {
    background: #edf0f7;
    }
li.offer-part.new:hover {
    background: #f7f9fc;
}
.accordion.settings_dropdown {
    border-radius: 3px;
    margin-bottom: 30px;
    border: 1px solid #e6eaf2;
    box-shadow: 0 0 0 rgba(0,0,0,.05);
    background: #fff;
}

.inactive_field_sec h5 {
    color: #17274d;
    font-size: 16px;
    padding: 15px;
    font-weight: 700;
}
.breadcrumb.setup h1 {
    color: #17274d;
    font-size: 18px;
    font-weight: 700;
}
li.offer-part.new:last-child {
    border-bottom: none;
}
.main-content.setting-section {
    margin-top: -12px;
}
.inactive_field_sec li {
    padding-left: 20px !important;
}
.inactive_field_sec {
    position: fixed;
    width: 22%;
    /*top: 144px;*/
    height: calc(100% - 165px);
    overflow: auto;
}

/*custom-field model*/
.select-field-listing {
    height: calc(100vh - 280px);
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 10px;
}
ul.field-list-type li {
    font-size: 14px;
    padding: 10px;
    padding-bottom: 30px;
    cursor: pointer;
    border: 1px solid #f0f2f7;
    background: #fff;
}
ul.field-list-type li a{

  color: #333;
}
ul.field-list-type li a:hover{

  color: #fff;
}
ul.field-list-type li:hover {
    background: #203d75;
    color: #fff;
}
ul.field-list-type {
    border-radius: 3px;
    list-style-type: none;
    padding: 0;
}
a.change-anchor {
    color: #203d75 !important;
    float: right !important;
    position: relative;
    left: 15%;
    font-size: 14px;
}


.field_width{
  width: auto;
}



  /*end property crm*/
</style>

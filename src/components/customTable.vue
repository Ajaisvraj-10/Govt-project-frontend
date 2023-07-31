<template>
    <div>
        
        <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                <label class="form-checkbox">
                                    <input type="checkbox" v-model="selectAll" @click="select">
                                    <i class="form-icon"></i>
                                </label>
                            </th>
                            <th scope="col">#</th>
                            <th v-for="(column, index) in current_fields" :key="index" scope="col"> {{column.displayName}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in rows_full" :key="index">
                            <td>
                                <label class="form-checkbox">
                                    <input type="checkbox" :value="item" v-model="selected">
                                    <i class="form-icon"></i>
                                </label>
                            </td>
                            <td scope="row">{{index+1}}</td>
                            <td v-for="(column, index) in current_fields" :key="index" @click="routerLinkToDetails">{{item[column.fieldName]}}</td>
                        </tr>
                    </tbody>
                  </table>
                </div>  

    </div>
</template>
<script>
export default {
    name: 'customTable', 
    props:['current_fields','current_rows','rows_full'],
    data() {
    return {
        
    };
  },
   mounted () {
    
    
  },

  methods : {
        
  }
   
}
</script>
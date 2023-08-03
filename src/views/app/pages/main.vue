
<template>
  <div class="main-content">
    <h1>Home </h1>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  metaInfo: {
    title: "Home"
  },
  components:{
    draggable
  },
  data() {
      return {
        cols : [],
        tasks : [],
        completed_tasks:[],
        sets:2,
        draw_cols : [],
        draw_sets:1,
        task_name:'',
        task_color:'#0052cc;',
        main_width:500,
      };
    },
    mounted(){
      var url_string = window.location.href
      var url = new URL(url_string);
      // var po_id = url.searchParams.get("communication")
      this.drawCols()
    },
    methods: {
      nodePositionIndex(e) {
      // console.log(e.newIndex)
      console.log(e.oldIndex)

      //  
    },

      addTask(){
        var name = this.cols.length+1
        this.tasks.push({name:name, task:this.task_name, set:0, width:0, height:0, top:0, left:0, bg_color:this.task_color})
        this.task_color = '#0052cc;'
        // this.task_name = ''
        // this.changeCol()
      },
      changeTask(){
        // this.changeCol()
      },
      changeCol() {
        var cols = this.cols
        this.sets = parseInt(cols.length/7)
        if(cols.length%7!=0){
          this.sets+=1
        }
        this.cols = []
        var width=0,height=0,top=0,left = 0,key=0;
        for(var set=1;set<=this.sets;set++){
          var col_len = 7 
          for(var d=1;d<this.sets;d++){
            var min_col = (d-1)*7
            col_len = cols.length-min_col
          }
          for(var i=1;i<=col_len;i++){
            if(i==1){
              width = 50
              height = 60
              left = 0
              top = 0
            }else if(i==2){
              width = 50
              height = 40
              left = 0
              top = 60
            }else if(i==3){
              width = 25
              height = 25
              left = 50
              top = 0
            }else if(i==4){
              width = 25
              height = 25
              left = 50
              top = 25
            }else if(i==5){
              width = 25
              height = 20
              left = 75
              top = 0
            }else if(i==6){
              width = 25
              height = 15
              left = 75
              top = 20
            }else if(i==7){
              width = 25
              height = 15
              left = 75
              top = 35
            }
            var name = key+1
            var bg_color = '#0052cc;'
            var task_name = ''
            if(cols.length>0){
              name = cols[key].name
              bg_color = cols[key].bg_color
              task_name = cols[key].task
            }
            this.cols.push({name:name, set:set, width:width, task:task_name, height:height, top:top, left:left, bg_color:bg_color})
            key++
          }
        }
      },
      drawCols() {
        var cols = this.draw_cols
        this.draw_cols = []
        var width=0,height=0,top=0,left = 0,key=0;
        for(var set=1;set<=this.draw_sets;set++){
          var col_len = 7 
          for(var i=1;i<=col_len;i++){
            if(i==1){
              width = 50
              height = 60
              left = 0
              top = 0
            }else if(i==2){
              width = 50
              height = 40
              left = 0
              top = 60
            }else if(i==3){
              width = 25
              height = 25
              left = 50
              top = 0
            }else if(i==4){
              width = 25
              height = 25
              left = 50
              top = 25
            }else if(i==5){
              width = 25
              height = 20
              left = 75
              top = 0
            }else if(i==6){
              width = 25
              height = 15
              left = 75
              top = 20
            }else if(i==7){
              width = 25
              height = 15
              left = 75
              top = 35
            }
            var name = key+1
            var bg_color = '#0052cc'
            var task_name = ''
            if(cols.length>0){
              name = cols[key].name
              bg_color = cols[key].bg_color
              task_name = cols[key].task
            }
            this.draw_cols.push({name:name, set:set, width:width, task:task_name, height:height, top:top, left:left, bg_color:bg_color})
            key++
          }
        }
      },
    },
};
</script>
<style scoped>

@import './style/style.css';
  
</style>


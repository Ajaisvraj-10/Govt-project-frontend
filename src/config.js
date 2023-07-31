import Vue from "vue";


Vue.prototype.$appName = 'Leadfinder Crm';
// Vue.prototype.api_url = 'http://127.0.0.1:8000';
Vue.prototype.api_url = 'https://leadfinder.live';
Vue.prototype.base_url = window.location.origin
Vue.prototype.domain_name = window.location.hostname
Vue.prototype.currency = {symbol:'₹',text:'RS',name:'INR'}
Vue.prototype.google_map_apikey ='cdb)zz322PfkN)$9SN'
Vue.prototype.this_year = new Date().getFullYear()
Vue.prototype.statuses = ['new','follow_up','client','rejected']



Vue.mixin({
  data() {
    return {
      onLine: navigator.onLine,
    	userId:'',
    };
  },
  mounted() {
    if(localStorage.getItem("token"))
    {
      if(localStorage.getItem("token")!=''){
        this.$root.token = localStorage.getItem("token")
      }
    }
  },
  watch: {

  },
  methods: {
    onlyNumberKey(evt,code='') {
      var x = evt.target.value.replace(/\D/g, '').match(/(\d{0,14})/);
      if(code!=''){
        if(evt.target.value[0]==code){
          code = code
        }else{
          code = ''
        }
      }else{
        x = evt.target.value.replace(/\D/g, '').match(/(\d{0,10})/);
      }
      evt.target.value = code+x[1];
    },
    checkAlphaNumeric(value){
      var b = value.replace(/[^a-z0-9]/gi,'');
      return b
    },
    checkMult(num) {
      var mult = 's'
      if(num==1){
        mult = ''
      }
      return mult
    },
    pagination(items,page=10){
      var datas=[];
      var key=0;
      items.forEach(function(value,index){
        if((index%page)==0 || index==0){
          datas[key]=[]
        }
        datas[key].push(value)
        index = index+1
        if((index%page)==0){
          key++;
        }
      })
      key=datas.length
      if(datas.length<=1){key=0}
      return {total:key,datas:datas}
    },
    scroll_top: function(x=0,y=0){
      var i = 10;
      var int = setInterval(function() {
        window.scrollTo(0, i);
        i += 10;
        if (i >= y) clearInterval(int);
      }, 10);
      // window.scrollTo(x,y);
    },
    goBack(pages=1){
      history.back(pages)
    },
    scrollToRefer(refer,block="end") {
      var el = this.$refs[refer];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: block });
      }
    },
    currentDate(){
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      return yyyy + '-' + mm + '-' + dd;
    },
    dateFormate(date,is_time=false){
      var mydate = new Date(date);
      var month = ["Jan", "Feb", "Mar", "Apr", "May", "June",
      "July", "Aug", "Sept", "Oct", "Nov", "Dec"][mydate.getMonth()];
      var time = '';
      if(is_time){
        var hour = mydate.getHours();
        var min = mydate.getMinutes();
        var sec = mydate.getSeconds();
        time = mydate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        if(hour==0&&min==0&&sec==0){
          time='';
        }
      }
      var str = mydate.getDate()+' '+month + ' ' +mydate.getFullYear()+' '+time;

      return str
    },
    slugify(string){
      string = string.toLowerCase()
      string = string.replace(' ','_')
      for (var i = 0; i < string.length; i++) {
        string = string.replace(' ','_') 
        string = string.replace('-','_')
        string = string.replace('/','_')
        string = string.replace('.','_')
      }
      return string
    },
    slugToWord(string){
      string = string.replace("_", " ");
      for (var i = 0; i < string.length; i++) {
        string = string.replace('_',' ') 
        string = string.replace('-',' ')
        string = string.replace('/',' ')
        string = string.replace('.',' ')
      }
      var splitStr = string.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
      }
      string = splitStr.join(' '); 

      return string;
    },
    dateString(date){
      var dateTime = new Date(date)
      return dateTime.getTime();
    },
    showAlert(message='',type2="success",time=1500){
      if(type2=='error'){
        this.$swal({
          type: "error",
          title: "Oops...",
          text: message,
          footer: "<a href>Why do I have this issue?</a>"
        });
      }
      else if(type2=='success') {
        this.$swal({
          position: "top-end",
          type: "success",
          title: message,
          showConfirmButton: false,
          timer: 15000
        });
      }
      else if(type2=='confirm') {
        this.$swal({
          title: "Are you sure?",
          text: message,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(result => {
          if (result.value) {
            this.$swal("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    }
  }
});

Vue.prototype.country_codes  =  [
                                  {
                                    "code": "+91",
                                    "name": "India"
                                  },
                                  {
                                    "code": "+7 840",
                                    "name": "Abkhazia"
                                  },
                                  {
                                    "code": "+93",
                                    "name": "Afghanistan"
                                  },
                                  {
                                    "code": "+355",
                                    "name": "Albania"
                                  },
                                  {
                                    "code": "+213",
                                    "name": "Algeria"
                                  },
                                  {
                                    "code": "+1 684",
                                    "name": "American Samoa"
                                  },
                                  {
                                    "code": "+376",
                                    "name": "Andorra"
                                  },
                                  {
                                    "code": "+244",
                                    "name": "Angola"
                                  },
                                  // {
                                  //   "code": "+1 264",
                                  //   "name": "Anguilla"
                                  // },
                                  // {
                                  //   "code": "+1 268",
                                  //   "name": "Antigua and Barbuda"
                                  // },
                                  // {
                                  //   "code": "+54",
                                  //   "name": "Argentina"
                                  // },
                                  // {
                                  //   "code": "+374",
                                  //   "name": "Armenia"
                                  // },
                                  // {
                                  //   "code": "+297",
                                  //   "name": "Aruba"
                                  // },
                                  // {
                                  //   "code": "+247",
                                  //   "name": "Ascension"
                                  // },
                                  // {
                                  //   "code": "+61",
                                  //   "name": "Australia"
                                  // },
                                  // {
                                  //   "code": "+672",
                                  //   "name": "Australian External Territories"
                                  // },
                                  // {
                                  //   "code": "+43",
                                  //   "name": "Austria"
                                  // },
                                  // {
                                  //   "code": "+994",
                                  //   "name": "Azerbaijan"
                                  // },
                                  // {
                                  //   "code": "+1 242",
                                  //   "name": "Bahamas"
                                  // },
                                  // {
                                  //   "code": "+973",
                                  //   "name": "Bahrain"
                                  // },
                                  // {
                                  //   "code": "+880",
                                  //   "name": "Bangladesh"
                                  // },
                                  // {
                                  //   "code": "+1 246",
                                  //   "name": "Barbados"
                                  // },
                                  // {
                                  //   "code": "+1 268",
                                  //   "name": "Barbuda"
                                  // },
                                  // {
                                  //   "code": "+375",
                                  //   "name": "Belarus"
                                  // },
                                  // {
                                  //   "code": "+32",
                                  //   "name": "Belgium"
                                  // },
                                  // {
                                  //   "code": "+501",
                                  //   "name": "Belize"
                                  // },
                                  // {
                                  //   "code": "+229",
                                  //   "name": "Benin"
                                  // },
                                  // {
                                  //   "code": "+1 441",
                                  //   "name": "Bermuda"
                                  // },
                                  // {
                                  //   "code": "+975",
                                  //   "name": "Bhutan"
                                  // },
                                  // {
                                  //   "code": "+591",
                                  //   "name": "Bolivia"
                                  // },
                                  // {
                                  //   "code": "+387",
                                  //   "name": "Bosnia and Herzegovina"
                                  // },
                                  // {
                                  //   "code": "+267",
                                  //   "name": "Botswana"
                                  // },
                                  // {
                                  //   "code": "+55",
                                  //   "name": "Brazil"
                                  // },
                                  // {
                                  //   "code": "+246",
                                  //   "name": "British Indian Ocean Territory"
                                  // },
                                  // {
                                  //   "code": "+1 284",
                                  //   "name": "British Virgin Islands"
                                  // },
                                  // {
                                  //   "code": "+673",
                                  //   "name": "Brunei"
                                  // },
                                  // {
                                  //   "code": "+359",
                                  //   "name": "Bulgaria"
                                  // },
                                  // {
                                  //   "code": "+226",
                                  //   "name": "Burkina Faso"
                                  // },
                                  // {
                                  //   "code": "+257",
                                  //   "name": "Burundi"
                                  // },
                                  // {
                                  //   "code": "+855",
                                  //   "name": "Cambodia"
                                  // },
                                  // {
                                  //   "code": "+237",
                                  //   "name": "Cameroon"
                                  // },
                                  // {
                                  //   "code": "+1",
                                  //   "name": "Canada"
                                  // },
                                  // {
                                  //   "code": "+238",
                                  //   "name": "Cape Verde"
                                  // },
                                  // {
                                  //   "code": "+ 345",
                                  //   "name": "Cayman Islands"
                                  // },
                                  // {
                                  //   "code": "+236",
                                  //   "name": "Central African Republic"
                                  // },
                                  // {
                                  //   "code": "+235",
                                  //   "name": "Chad"
                                  // },
                                  // {
                                  //   "code": "+56",
                                  //   "name": "Chile"
                                  // },
                                  // {
                                  //   "code": "+86",
                                  //   "name": "China"
                                  // },
                                  // {
                                  //   "code": "+61",
                                  //   "name": "Christmas Island"
                                  // },
                                  // {
                                  //   "code": "+61",
                                  //   "name": "Cocos-Keeling Islands"
                                  // },
                                  // {
                                  //   "code": "+57",
                                  //   "name": "Colombia"
                                  // },
                                  // {
                                  //   "code": "+269",
                                  //   "name": "Comoros"
                                  // },
                                  // {
                                  //   "code": "+242",
                                  //   "name": "Congo"
                                  // },
                                  // {
                                  //   "code": "+243",
                                  //   "name": "Congo, Dem. Rep. of (Zaire)"
                                  // },
                                  // {
                                  //   "code": "+682",
                                  //   "name": "Cook Islands"
                                  // },
                                  // {
                                  //   "code": "+506",
                                  //   "name": "Costa Rica"
                                  // },
                                  // {
                                  //   "code": "+385",
                                  //   "name": "Croatia"
                                  // },
                                  // {
                                  //   "code": "+53",
                                  //   "name": "Cuba"
                                  // },
                                  // {
                                  //   "code": "+599",
                                  //   "name": "Curacao"
                                  // },
                                  // {
                                  //   "code": "+537",
                                  //   "name": "Cyprus"
                                  // },
                                  // {
                                  //   "code": "+420",
                                  //   "name": "Czech Republic"
                                  // },
                                  // {
                                  //   "code": "+45",
                                  //   "name": "Denmark"
                                  // },
                                  // {
                                  //   "code": "+246",
                                  //   "name": "Diego Garcia"
                                  // },
                                  // {
                                  //   "code": "+253",
                                  //   "name": "Djibouti"
                                  // },
                                  // {
                                  //   "code": "+1 767",
                                  //   "name": "Dominica"
                                  // },
                                  // {
                                  //   "code": "+1 809",
                                  //   "name": "Dominican Republic"
                                  // },
                                  // {
                                  //   "code": "+670",
                                  //   "name": "East Timor"
                                  // },
                                  // {
                                  //   "code": "+56",
                                  //   "name": "Easter Island"
                                  // },
                                  // {
                                  //   "code": "+593",
                                  //   "name": "Ecuador"
                                  // },
                                  // {
                                  //   "code": "+20",
                                  //   "name": "Egypt"
                                  // },
                                  // {
                                  //   "code": "+503",
                                  //   "name": "El Salvador"
                                  // },
                                  // {
                                  //   "code": "+240",
                                  //   "name": "Equatorial Guinea"
                                  // },
                                  // {
                                  //   "code": "+291",
                                  //   "name": "Eritrea"
                                  // },
                                  // {
                                  //   "code": "+372",
                                  //   "name": "Estonia"
                                  // },
                                  // {
                                  //   "code": "+251",
                                  //   "name": "Ethiopia"
                                  // },
                                  // {
                                  //   "code": "+500",
                                  //   "name": "Falkland Islands"
                                  // },
                                  // {
                                  //   "code": "+298",
                                  //   "name": "Faroe Islands"
                                  // },
                                  // {
                                  //   "code": "+679",
                                  //   "name": "Fiji"
                                  // },
                                  // {
                                  //   "code": "+358",
                                  //   "name": "Finland"
                                  // },
                                  // {
                                  //   "code": "+33",
                                  //   "name": "France"
                                  // },
                                  // {
                                  //   "code": "+596",
                                  //   "name": "French Antilles"
                                  // },
                                  // {
                                  //   "code": "+594",
                                  //   "name": "French Guiana"
                                  // },
                                  // {
                                  //   "code": "+689",
                                  //   "name": "French Polynesia"
                                  // },
                                  // {
                                  //   "code": "+241",
                                  //   "name": "Gabon"
                                  // },
                                  // {
                                  //   "code": "+220",
                                  //   "name": "Gambia"
                                  // },
                                  // {
                                  //   "code": "+995",
                                  //   "name": "Georgia"
                                  // },
                                  // {
                                  //   "code": "+49",
                                  //   "name": "Germany"
                                  // },
                                  // {
                                  //   "code": "+233",
                                  //   "name": "Ghana"
                                  // },
                                  // {
                                  //   "code": "+350",
                                  //   "name": "Gibraltar"
                                  // },
                                  // {
                                  //   "code": "+30",
                                  //   "name": "Greece"
                                  // },
                                  // {
                                  //   "code": "+299",
                                  //   "name": "Greenland"
                                  // },
                                  // {
                                  //   "code": "+1 473",
                                  //   "name": "Grenada"
                                  // },
                                  // {
                                  //   "code": "+590",
                                  //   "name": "Guadeloupe"
                                  // },
                                  // {
                                  //   "code": "+1 671",
                                  //   "name": "Guam"
                                  // },
                                  // {
                                  //   "code": "+502",
                                  //   "name": "Guatemala"
                                  // },
                                  // {
                                  //   "code": "+224",
                                  //   "name": "Guinea"
                                  // },
                                  // {
                                  //   "code": "+245",
                                  //   "name": "Guinea-Bissau"
                                  // },
                                  // {
                                  //   "code": "+595",
                                  //   "name": "Guyana"
                                  // },
                                  // {
                                  //   "code": "+509",
                                  //   "name": "Haiti"
                                  // },
                                  // {
                                  //   "code": "+504",
                                  //   "name": "Honduras"
                                  // },
                                  // {
                                  //   "code": "+852",
                                  //   "name": "Hong Kong SAR China"
                                  // },
                                  // {
                                  //   "code": "+36",
                                  //   "name": "Hungary"
                                  // },
                                  // {
                                  //   "code": "+354",
                                  //   "name": "Iceland"
                                  // },
                                  // {
                                  //   "code": "+62",
                                  //   "name": "Indonesia"
                                  // },
                                  // {
                                  //   "code": "+98",
                                  //   "name": "Iran"
                                  // },
                                  // {
                                  //   "code": "+964",
                                  //   "name": "Iraq"
                                  // },
                                  // {
                                  //   "code": "+353",
                                  //   "name": "Ireland"
                                  // },
                                  // {
                                  //   "code": "+972",
                                  //   "name": "Israel"
                                  // },
                                  // {
                                  //   "code": "+39",
                                  //   "name": "Italy"
                                  // },
                                  // {
                                  //   "code": "+225",
                                  //   "name": "Ivory Coast"
                                  // },
                                  // {
                                  //   "code": "+1 876",
                                  //   "name": "Jamaica"
                                  // },
                                  // {
                                  //   "code": "+81",
                                  //   "name": "Japan"
                                  // },
                                  // {
                                  //   "code": "+962",
                                  //   "name": "Jordan"
                                  // },
                                  // {
                                  //   "code": "+7 7",
                                  //   "name": "Kazakhstan"
                                  // },
                                  // {
                                  //   "code": "+254",
                                  //   "name": "Kenya"
                                  // },
                                  // {
                                  //   "code": "+686",
                                  //   "name": "Kiribati"
                                  // },
                                  // {
                                  //   "code": "+965",
                                  //   "name": "Kuwait"
                                  // },
                                  // {
                                  //   "code": "+996",
                                  //   "name": "Kyrgyzstan"
                                  // },
                                  // {
                                  //   "code": "+856",
                                  //   "name": "Laos"
                                  // },
                                  // {
                                  //   "code": "+371",
                                  //   "name": "Latvia"
                                  // },
                                  // {
                                  //   "code": "+961",
                                  //   "name": "Lebanon"
                                  // },
                                  // {
                                  //   "code": "+266",
                                  //   "name": "Lesotho"
                                  // },
                                  // {
                                  //   "code": "+231",
                                  //   "name": "Liberia"
                                  // },
                                  // {
                                  //   "code": "+218",
                                  //   "name": "Libya"
                                  // },
                                  // {
                                  //   "code": "+423",
                                  //   "name": "Liechtenstein"
                                  // },
                                  // {
                                  //   "code": "+370",
                                  //   "name": "Lithuania"
                                  // },
                                  // {
                                  //   "code": "+352",
                                  //   "name": "Luxembourg"
                                  // },
                                  // {
                                  //   "code": "+853",
                                  //   "name": "Macau SAR China"
                                  // },
                                  // {
                                  //   "code": "+389",
                                  //   "name": "Macedonia"
                                  // },
                                  // {
                                  //   "code": "+261",
                                  //   "name": "Madagascar"
                                  // },
                                  // {
                                  //   "code": "+265",
                                  //   "name": "Malawi"
                                  // },
                                  // {
                                  //   "code": "+60",
                                  //   "name": "Malaysia"
                                  // },
                                  // {
                                  //   "code": "+960",
                                  //   "name": "Maldives"
                                  // },
                                  // {
                                  //   "code": "+223",
                                  //   "name": "Mali"
                                  // },
                                  // {
                                  //   "code": "+356",
                                  //   "name": "Malta"
                                  // },
                                  // {
                                  //   "code": "+692",
                                  //   "name": "Marshall Islands"
                                  // },
                                  // {
                                  //   "code": "+596",
                                  //   "name": "Martinique"
                                  // },
                                  // {
                                  //   "code": "+222",
                                  //   "name": "Mauritania"
                                  // },
                                  // {
                                  //   "code": "+230",
                                  //   "name": "Mauritius"
                                  // },
                                  // {
                                  //   "code": "+262",
                                  //   "name": "Mayotte"
                                  // },
                                  // {
                                  //   "code": "+52",
                                  //   "name": "Mexico"
                                  // },
                                  // {
                                  //   "code": "+691",
                                  //   "name": "Micronesia"
                                  // },
                                  // {
                                  //   "code": "+1 808",
                                  //   "name": "Midway Island"
                                  // },
                                  // {
                                  //   "code": "+373",
                                  //   "name": "Moldova"
                                  // },
                                  // {
                                  //   "code": "+377",
                                  //   "name": "Monaco"
                                  // },
                                  // {
                                  //   "code": "+976",
                                  //   "name": "Mongolia"
                                  // },
                                  // {
                                  //   "code": "+382",
                                  //   "name": "Montenegro"
                                  // },
                                  // {
                                  //   "code": "+1664",
                                  //   "name": "Montserrat"
                                  // },
                                  // {
                                  //   "code": "+212",
                                  //   "name": "Morocco"
                                  // },
                                  // {
                                  //   "code": "+95",
                                  //   "name": "Myanmar"
                                  // },
                                  // {
                                  //   "code": "+264",
                                  //   "name": "Namibia"
                                  // },
                                  // {
                                  //   "code": "+674",
                                  //   "name": "Nauru"
                                  // },
                                  // {
                                  //   "code": "+977",
                                  //   "name": "Nepal"
                                  // },
                                  // {
                                  //   "code": "+31",
                                  //   "name": "Netherlands"
                                  // },
                                  // {
                                  //   "code": "+599",
                                  //   "name": "Netherlands Antilles"
                                  // },
                                  // {
                                  //   "code": "+1 869",
                                  //   "name": "Nevis"
                                  // },
                                  // {
                                  //   "code": "+687",
                                  //   "name": "New Caledonia"
                                  // },
                                  // {
                                  //   "code": "+64",
                                  //   "name": "New Zealand"
                                  // },
                                  // {
                                  //   "code": "+505",
                                  //   "name": "Nicaragua"
                                  // },
                                  // {
                                  //   "code": "+227",
                                  //   "name": "Niger"
                                  // },
                                  // {
                                  //   "code": "+234",
                                  //   "name": "Nigeria"
                                  // },
                                  // {
                                  //   "code": "+683",
                                  //   "name": "Niue"
                                  // },
                                  // {
                                  //   "code": "+672",
                                  //   "name": "Norfolk Island"
                                  // },
                                  // {
                                  //   "code": "+850",
                                  //   "name": "North Korea"
                                  // },
                                  // {
                                  //   "code": "+1 670",
                                  //   "name": "Northern Mariana Islands"
                                  // },
                                  // {
                                  //   "code": "+47",
                                  //   "name": "Norway"
                                  // },
                                  // {
                                  //   "code": "+968",
                                  //   "name": "Oman"
                                  // },
                                  // {
                                  //   "code": "+92",
                                  //   "name": "Pakistan"
                                  // },
                                  // {
                                  //   "code": "+680",
                                  //   "name": "Palau"
                                  // },
                                  // {
                                  //   "code": "+970",
                                  //   "name": "Palestinian Territory"
                                  // },
                                  // {
                                  //   "code": "+507",
                                  //   "name": "Panama"
                                  // },
                                  // {
                                  //   "code": "+675",
                                  //   "name": "Papua New Guinea"
                                  // },
                                  // {
                                  //   "code": "+595",
                                  //   "name": "Paraguay"
                                  // },
                                  // {
                                  //   "code": "+51",
                                  //   "name": "Peru"
                                  // },
                                  // {
                                  //   "code": "+63",
                                  //   "name": "Philippines"
                                  // },
                                  // {
                                  //   "code": "+48",
                                  //   "name": "Poland"
                                  // },
                                  // {
                                  //   "code": "+351",
                                  //   "name": "Portugal"
                                  // },
                                  // {
                                  //   "code": "+1 787",
                                  //   "name": "Puerto Rico"
                                  // },
                                  // {
                                  //   "code": "+974",
                                  //   "name": "Qatar"
                                  // },
                                  // {
                                  //   "code": "+262",
                                  //   "name": "Reunion"
                                  // },
                                  // {
                                  //   "code": "+40",
                                  //   "name": "Romania"
                                  // },
                                  // {
                                  //   "code": "+7",
                                  //   "name": "Russia"
                                  // },
                                  // {
                                  //   "code": "+250",
                                  //   "name": "Rwanda"
                                  // },
                                  // {
                                  //   "code": "+685",
                                  //   "name": "Samoa"
                                  // },
                                  // {
                                  //   "code": "+378",
                                  //   "name": "San Marino"
                                  // },
                                  // {
                                  //   "code": "+966",
                                  //   "name": "Saudi Arabia"
                                  // },
                                  // {
                                  //   "code": "+221",
                                  //   "name": "Senegal"
                                  // },
                                  // {
                                  //   "code": "+381",
                                  //   "name": "Serbia"
                                  // },
                                  // {
                                  //   "code": "+248",
                                  //   "name": "Seychelles"
                                  // },
                                  // {
                                  //   "code": "+232",
                                  //   "name": "Sierra Leone"
                                  // },
                                  // {
                                  //   "code": "+65",
                                  //   "name": "Singapore"
                                  // },
                                  // {
                                  //   "code": "+421",
                                  //   "name": "Slovakia"
                                  // },
                                  // {
                                  //   "code": "+386",
                                  //   "name": "Slovenia"
                                  // },
                                  // {
                                  //   "code": "+677",
                                  //   "name": "Solomon Islands"
                                  // },
                                  // {
                                  //   "code": "+27",
                                  //   "name": "South Africa"
                                  // },
                                  // {
                                  //   "code": "+500",
                                  //   "name": "South Georgia and the South Sandwich Islands"
                                  // },
                                  // {
                                  //   "code": "+82",
                                  //   "name": "South Korea"
                                  // },
                                  // {
                                  //   "code": "+34",
                                  //   "name": "Spain"
                                  // },
                                  // {
                                  //   "code": "+94",
                                  //   "name": "Sri Lanka"
                                  // },
                                  // {
                                  //   "code": "+249",
                                  //   "name": "Sudan"
                                  // },
                                  // {
                                  //   "code": "+597",
                                  //   "name": "Suriname"
                                  // },
                                  // {
                                  //   "code": "+268",
                                  //   "name": "Swaziland"
                                  // },
                                  // {
                                  //   "code": "+46",
                                  //   "name": "Sweden"
                                  // },
                                  // {
                                  //   "code": "+41",
                                  //   "name": "Switzerland"
                                  // },
                                  // {
                                  //   "code": "+963",
                                  //   "name": "Syria"
                                  // },
                                  // {
                                  //   "code": "+886",
                                  //   "name": "Taiwan"
                                  // },
                                  // {
                                  //   "code": "+992",
                                  //   "name": "Tajikistan"
                                  // },
                                  // {
                                  //   "code": "+255",
                                  //   "name": "Tanzania"
                                  // },
                                  // {
                                  //   "code": "+66",
                                  //   "name": "Thailand"
                                  // },
                                  // {
                                  //   "code": "+670",
                                  //   "name": "Timor Leste"
                                  // },
                                  // {
                                  //   "code": "+228",
                                  //   "name": "Togo"
                                  // },
                                  // {
                                  //   "code": "+690",
                                  //   "name": "Tokelau"
                                  // },
                                  // {
                                  //   "code": "+676",
                                  //   "name": "Tonga"
                                  // },
                                  // {
                                  //   "code": "+1 868",
                                  //   "name": "Trinidad and Tobago"
                                  // },
                                  // {
                                  //   "code": "+216",
                                  //   "name": "Tunisia"
                                  // },
                                  // {
                                  //   "code": "+90",
                                  //   "name": "Turkey"
                                  // },
                                  // {
                                  //   "code": "+993",
                                  //   "name": "Turkmenistan"
                                  // },
                                  // {
                                  //   "code": "+1 649",
                                  //   "name": "Turks and Caicos Islands"
                                  // },
                                  // {
                                  //   "code": "+688",
                                  //   "name": "Tuvalu"
                                  // },
                                  // {
                                  //   "code": "+1 340",
                                  //   "name": "U.S. Virgin Islands"
                                  // },
                                  // {
                                  //   "code": "+256",
                                  //   "name": "Uganda"
                                  // },
                                  // {
                                  //   "code": "+380",
                                  //   "name": "Ukraine"
                                  // },
                                  // {
                                  //   "code": "+971",
                                  //   "name": "United Arab Emirates"
                                  // },
                                  // {
                                  //   "code": "+44",
                                  //   "name": "United Kingdom"
                                  // },
                                  // {
                                  //   "code": "+1",
                                  //   "name": "United States"
                                  // },
                                  // {
                                  //   "code": "+598",
                                  //   "name": "Uruguay"
                                  // },
                                  // {
                                  //   "code": "+998",
                                  //   "name": "Uzbekistan"
                                  // },
                                  // {
                                  //   "code": "+678",
                                  //   "name": "Vanuatu"
                                  // },
                                  // {
                                  //   "code": "+58",
                                  //   "name": "Venezuela"
                                  // },
                                  // {
                                  //   "code": "+84",
                                  //   "name": "Vietnam"
                                  // },
                                  // {
                                  //   "code": "+1 808",
                                  //   "name": "Wake Island"
                                  // },
                                  // {
                                  //   "code": "+681",
                                  //   "name": "Wallis and Futuna"
                                  // },
                                  // {
                                  //   "code": "+967",
                                  //   "name": "Yemen"
                                  // },
                                  // {
                                  //   "code": "+260",
                                  //   "name": "Zambia"
                                  // },
                                  // {
                                  //   "code": "+255",
                                  //   "name": "Zanzibar"
                                  // },
                                  // {
                                  //   "code": "+263",
                                  //   "name": "Zimbabwe"
                                  // }
                                ];
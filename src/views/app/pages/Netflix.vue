<template>
    <div class="background-container">

        <div class="netflix_logo">
            <img src="/netflix/netflix_logo.jpg" alt="logo ">
            <div>
               <h1 class="main_head">Unlimited movies, TV shows and more</h1>
               <div>
                <h2 class="secnd_head">Watch anywhere. Cancel anytime.</h2><br>
                <h2 class="thrd_hhead">Ready to watch? Enter your email to create or restart your membership.</h2><br>
                <div class="container-btn">
                    <button class="btn_strt">Get Started ></button><br>
                </div>
                <div class="container">
                    <input class="input_field" type="text" placeholder="Email address">
                </div>
                <div class="signin">
                    <button class="btn-signin">Sign in</button>
                </div>
                <div class="opt_select">
                    <select class="slct" name="language" id="">
                        <option value="eng">🌐 English</option>
                        <option value="hin">Hindi</option>
                    </select>
                </div>
                <div class="scnd_div_main">
                    <div class="scnd_div">
                        <div class="enjoytv_head"><h1 class="enjoytv">Enjoy on your TV</h1></div>
                        <div><h2 class="subhead">Watch on smart TVs, PlayStation, Xbox, Chromecast,<br> Apple TV, Blu-ray players and more.</h2></div>
                        <div class="tvlogo"><img class="nettv" src="/netflix/netflix_smarttv.png" alt="tv">
                        </div>
                        <div class="tvborder"> <img class="border2" src="/netflix/tv.png" alt=""></div>
                    </div>
                </div>
                
                <div class="thrd_div_main">
                    <div class="thrd_div">
                        <div class="dwnld_head"><h1 class="dwlnd_show">Download your shows <br> to watch offline</h1></div>
                        <div><h2 class="subhead-2">Save your favourites easily and always have something <br> to watch.</h2></div>
                        <div class="mobile-logo"><img class="mblogo" src="/netflix/netflix_mobile.jpg" alt="mobile"></div>

                    </div>

                </div>
               </div>
            </div>
            
        </div>
    </div>
    

</template>


<script>
export default{
    name: 'Netflix'
};

</script>

<style>
.background-container {
  background-image: url('/netflix/netflix.jpg');
  background-repeat: no-repeat;
  height: 109vh;
}
.netflix_logo {
    margin-left: 125px;
    background-size: contain;
    background-position: top left;
    width: 190px;
    height: 100px;
    position: absolute;
    z-index: 1;
}
.main_head {
    margin-left: 190px;
    margin-top: 175px;
    font-weight: 800;
    color: white;
    width: 900px;
    font-size: xxx-large;

}.secnd_head{
    margin-left: 380px;
    font-weight: 700;
    width: 530px;
    color: white;
    font-size: xx-large;
}
.thrd_hhead{
    margin-left: 240px;
    width: 1041px;
    color: white;
    font-size: x-large;
}
.btn_strt{
    font-size: large;
    font-weight: 900;
    color: white;
    border-radius: 7px;
    margin-left: 700px;
    background-color: #ff1414;
    height: 55px;
    width: 187px;
}
.input_field{
    margin-left: 370px;
    background-color: rgba(141, 141, 141, 0);
    height: 55px;
    width: 310px;

}
.container {
    margin-top: -53px;
    margin-left: 480px;
    max-width: 960px;
}
.btn-signin{
    border-radius: 9px;
    width: 90px;
    height: 40px;
    color: white;
    background-color: red;
    background-position: top right;
}
.signin {
    width: 77px;
    height: 42px;
    margin-top: -515px;
    margin-left: 1172px;

}
.opt_select {
    margin-top: -38px;
    margin-left: 1030px;

}
.slct {
    border-radius: 6px;
    font-size: medium;
    color: white;
    background-color: #ffffff00;
    width: 130px;
    height: 35px;
}
.scnd_div{
    margin-left: -125px;
    background-color: black;
    height: 600px;
    width: 1520px;
}
.scnd_div_main {
    margin-top: 713px;

}
.enjoytv{
    color: white;
    font-size: xxx-large;
    font-weight: 900;

}
.enjoytv_head{
    padding-left: 200px;
    padding-top: 223px;
}
.subhead{
    padding-left: 200px;
    color: white;
}
.tvlogo{
    position: absolute;
    z-index: 1;
     background-size: contain;
     background-position: bottom right;
}
.nettv{
    width: 466px;
    margin-top: -169px;
    height: 263px;
    margin-left: 909px;
}
.tvborder {
    margin-top: -269px;
    margin-left: 825px;

}
.border2 {
    border: 1px solid #000000 !important
}
.thrd_div_main{

}

.thrd_div{
    margin-left: -125px;
    margin-top: 13px;
    background-color: black;
    height: 600px;
    width: 1520px;

}
.dwlnd_show{
    font-weight: 800;
    font-size: xxx-large;
    color: white;
    padding-top: 250px;
    padding-left: 825px;

}
.dwnld_head{

}
.subhead-2{
    padding-left: 825px;
    color: white;
}
.mobile-logo{
    margin-left: 200px;
    margin-top: -318px;

}
.mblogo{
    width: 500px;
    height: 390px;

}
</style>
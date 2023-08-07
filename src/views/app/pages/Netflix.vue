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
                <div class="fourth_div_main">
                    <div class="fourth_div">
                        <div class="watch_head"><h1 class="watchevr">Watch everywhere</h1></div>
                        <div><h2 class="subhead-3">Stream unlimited movies and TV shows on your <br> phone, tablet, laptop, and TV.</h2></div>
                        <div class="all_in_one"><img class="all-inone" src="/netflix/netflix-all.png" alt=""></div>
                    </div>
                </div>

                <div class="fifth_div_main">
                    <div class="fifth_div">
                        <div class="kids_head"><h1 class="forkids">Create profiles for kids</h1></div>
                        <div><h2 class="subhead-4">Send children on adventures with their favourite <br> characters in a space made just for them—free with <br> your membership.</h2></div>
                        <div><img class="children" src="/netflix/netflix-children.png" alt=""></div>
                    </div>
                </div>

                <div class="sixth_div_main">
                    <div class="fifth_div">
                        <div class="quest_head"><h1 class="questions">Frequently Asked Questions</h1></div>
                        <div class="ques-1"><h1 class="subhead-5">What is Netflix ?</h1>
                            
                        </div>
                    </div>
                </div>

                <div class="sevnth_div_main">
                    <div class="sevnth_div">
                        <div class="ques-2"><h1 class="subhead-6">How much does Netflix cost ?</h1> 
                        </div>
                    </div>
                </div>

                <div class="eight_div_main">
                    <div class="eight_div">
                        <div class="ques-3"><h1 class="subhead-7">Where can i watch ?</h1> 
                        </div>
                    </div>
                </div>

                <div class="nineth_div_main">
                    <div class="ninth_div">
                        <div class="ques-4"><h1 class="subhead-8">How do i cancel ?</h1> 
                        </div>
                    </div>
                </div>

                <div class="tenth_div_main">
                    <div class="tenth_div">
                        <div class="ques-5"><h1 class="subhead-9">What can i watch on Netflix ?</h1> 
                        </div>
                    </div>
                </div>

                <div class="eleventh_div_main">
                    <div class="eleventh_div">
                        <div class="ques-6"><h1 class="subhead-10">Is Netflix good for kids ?</h1> 
                        </div>
                    </div>
                </div>

                <div class="emailbox">
                    <div class="getstarted"><h3 class="forh3">Ready to watch? Enter your email to create or restart your membership.</h3></div>
                </div>
                <div class="email2"><input class="getaddress" type="text" placeholder="Email address"></div>

                <div class="btnget">
                    <div><button class="getbtn">Get Started ⨠</button></div>
                </div>

                <div class="footer_div_main">
                    <div class="footer_div">
                        <footer class="footer">
                            Questions? Call 000-800-919-1694
                            <br>
                            <a href="#">FAQ</a>
                            <a href="#">Help Centre</a>
                            <a href="#">Account</a>
                            <a href="#">Media Centre</a>
                            <a href="#">Investor Relations</a>
                            <a href="#">Jobs</a>
                            <a href="#">Ways to Watch</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Privacy</a>
                            <a href="#">Cookie Preferences</a>
                            <a href="#">Corporate Information</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Speed Test</a>
                            <a href="#">Legal Notices</a>
                            <br>
                            Only on Netflix
                            <br>
                            <a href="#">English</a>
                            <br>
                            Netflix India
                        </footer>
                        
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
.fourth_div{
    margin-top: 10px;
    margin-left: -125px;
    background-color: black;
    height: 600px;
    width: 1520px;
}
.watchevr{
    font-weight: 800;
    font-size: xxx-large;
    color: white;
    padding-top: 195px;
    padding-left: 250px;
}
.subhead-3{
    font-weight: 600;
    font-size: x-large;
    color: white;
    padding-left: 255px;
}
.all-inone{
    margin-top: -228px;
    margin-left: 830px;
    width: 540px;
}
.fifth_div{
    margin-left: -125px;
    background-color: black;
    height: 835px;
    width: 1520px;
    margin-top: 15px;
}
.forkids{
    font-weight: 800;
    font-size: xxx-large;
    color: white;
    padding-top: 240px;
    padding-left: 745px;
}
.subhead-4{
    font-weight: 600;
    font-size: x-large;
    color: white;
    padding-left: 750px;
}
.children{
    margin-left: 100px;
    height: 380px;
    margin-top: -300px;
}
.questions{
    font-weight: 900;
    font-size: xxx-large;
    color: white;
    padding-top: 40px;
    padding-left: 420px;
}
.ques-1{
    margin-left: 170px;
    height: 75px;
    background-color: #474c4c;
    width: 1180px;
}
.subhead-5{
    font-weight: 600;
    font-size: x-large;
    padding-top: 23px;
    color: white;
    padding-left: 57px;
}
.ques-2{
    margin-left: 45px;
    margin-top: -645px;
    background-color: #474c4c;
    height: 75px;
    width: 1180px;
}
.subhead-6{
    font-weight: 600;
    font-size: x-large;
    padding-top: 23px;
    color: white;
    padding-left: 57px;
}
.ques-3{
    margin-left: 45px;
    margin-top: 10px;
    background-color: #474c4c;
    height: 75px;
    width: 1180px;
}
.subhead-7{
    font-weight: 600;
    font-size: x-large;
    padding-top: 23px;
    color: white;
    padding-left: 57px;
}
.ques-4{
    margin-left: 45px;
    margin-top: 10px;
    background-color: #474c4c;
    height: 75px;
    width: 1180px;
}
.subhead-8{
    font-weight: 600;
    font-size: x-large;
    padding-top: 23px;
    color: white;
    padding-left: 57px;
}
.ques-5{
    margin-left: 45px;
    margin-top: 10px;
    background-color: #474c4c;
    height: 75px;
    width: 1180px;
}
.subhead-9{
    font-weight: 600;
    font-size: x-large;
    padding-top: 23px;
    color: white;
    padding-left: 57px;
}
.ques-6{
    margin-left: 45px;
    margin-top: 10px;
    background-color: #474c4c;
    height: 75px;
    width: 1180px;
}
.subhead-10{
    font-weight: 600;
    font-size: x-large;
    padding-top: 23px;
    color: white;
    padding-left: 57px;
}
.getstarted{

}
.forh3{
    padding-top: 50px;
    padding-left: 231px;
    width: 980px;
    color: white;
}
.email2{

}
.getaddress{
    background-color: #51574659;
    margin-left: 263px;
    width: 445px;
    height: 54px;
    border-radius: 3px;
}
.getbtn{
    font-size: large;
    color: white;
    background-color: red;
    border-radius: 6px;
    margin-left: 715px;
    height: 52px;
    width: 190px;
}
.btnget{
    margin-top: -52px;
}
.footer_div{
    margin-top: 100px;
    margin-left: -125px;
    background-color: rgb(0, 0, 0);
    height: 215px;
    width: 1520px;
}
.footer {
      background-color: #000000;
      color: #fcfcfc;
      padding: 20px 0;
      text-align: center;
      font-size: 14px;
    }
    .footer {
    background-color: #000000;
    padding-top: 80px;
}

    .footer a {
      color: #ffffff;
      text-decoration: none;
      margin: 0 10px;
    }

    .footer a:hover {
      color: #e50914;
    }
</style>
<template>
    <div class="background-container">

        <div class="netflix_logo">
            <img src="/netflix/netflix_logo.jpg" alt="logo ">
            <div>
               <h1 class="main_head">Unlimited movies, TV shows and more</h1>
               <div>
                <h2 class="secnd_head">Watch anywhere. Cancel anytime.</h2><br>
                <h2 class="thrd_hhead">Ready to watch? Enter your email to create or restart your membership.</h2><br>
                <button class="btn_strt">Get Started</button><br>
                <input class="input_field" type="text" placeholder="Email address">
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
  height: 100vh;
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
    border-radius: 7px;
    margin-left: 278px;
    background-color: #5544443b;
    height: 55px;
    width: 415px;
}
.input_field{
    background-color: red;
    height: 55px;
    width: 225px;

}
</style>
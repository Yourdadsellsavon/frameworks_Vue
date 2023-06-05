<template>
  <div class="media">
    <section class="hero">
      <div class="hero-text container">
        <br><br><br><br><br><br>
        <h2><span class="hello">Hello,</span><br><br/>I'm Reece Chappell</h2>
        <h4>Web designer and software developer based in Lancashire, UK</h4>
      </div>
    </section>
    <!-- section 1 -->
    <section class="section1"><h2 class="title">Video + Music</h2>
      <h4 class="title2">This page showcases a variety of media.</h4><br>
      <div class="section1_content">
        <div class="section1_first">
          <p class="title3">As the most contentful page in the website, this is the home for content.
             By packing this page full of content, we can simulate the performance expectancies seen in a large-scale web project.
             <br><br>
             So relax, explore and enjoy some of my favourite music, videos and images.</p>
          <br>
        </div>
        <div class="section1_second">
          <div class="polaroid">
            <video class="images" src="../assets/b_roll_muted.mp4" autoplay="true" controls="true" loop="true"></video>
            <div class="pol_container">
              <p>B-roll Footage</p>
            </div>
          </div>
        </div>
      </div>
      <iframe class="spotify" src="https://open.spotify.com/embed/track/1umlNFq4EhrBQX4T8WNAmx?utm_source=generator&theme=0"  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <transition name="fade">
        <div id="pagetop" v-show="scY > 300" @click="toTop">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000"
              stroke-width="3" stroke-linecap="square" stroke-linejoin="arcs">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </div>
      </transition>
    </section>

   <!-- section 2                            -->
    <section class="section2">
      <h2 class="title">Gallery of Graphics</h2>
      <div class="section2_content">
        <slider></slider>
      </div>      
      <p class="title3"><i>"Art is what makes us unique and it should be encouraged!"</i></p><br>
      <transition name="fade">
        <div id="pagetop" v-show="scY > 300" @click="toTop">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000"
              stroke-width="3" stroke-linecap="square" stroke-linejoin="arcs">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </div>
      </transition>
    </section>

    <!-- section 3                           -->
    <section class="section3">
      <h2 class="title">Entertaining Extras</h2>
      <h4 class="title2">All work and no play is simply too much work.</h4><br>
      <div class="section3_content">
        <div class="section3_first">
          <iframe class="responsive_iframe" src="https://www.youtube.com/embed/Jnb6uYAzuno" />
        </div>
        <div class="section3_second">
          <iframe class="responsive_iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37482.68970297935!2d-2.8423424298868496!3d54.04415565975026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b6141d2138751%3A0xbea089595c0b389!2sLancaster!5e0!3m2!1sen!2suk!4v1685462407067!5m2!1sen!2suk" />
        </div>
      </div>
      <transition name="fade">
        <div id="pagetop" v-show="scY > 300" @click="toTop">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000"
              stroke-width="3" stroke-linecap="square" stroke-linejoin="arcs">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </div>
      </transition>
    </section>

    <!-- section 4 -->
    <section class="section4">
      <br>
      <div class="links">
         <a href="http://www.facebook.com/"><img src="../components/icons/fb.png" alt="facebook icon" height="50px" width="50px"/></a>
         <a href="http://www.instagram.com/"><img src="../components/icons/ig.png" alt="instagram icon" height="50px" width="50px"/></a>
         <a href="http://www.twitter.com/"><img src="../components/icons/twitter.png" alt="twitter icon" height="50px" width="50px"/></a>
         <a href="http://www.reddit.com/"><img src="../components/icons/reddit.png" alt="reddit icon" height="50px" width="50px"/></a>
         <a href="http://www.youtube.com/"><img src="../components/icons/yt.png" alt="youtube icon" height="50px" width="50px"/></a>
         <a href="http://www.pinterest.co.uk/"><img src="../components/icons/pin.png" alt="pinterest icon" height="50px" width="50px"/></a>
         <a href="http://www.linkedin.com/"><img src="../components/icons/linkedin.png" alt="linkedin icon" height="50px" width="50px"/></a>
         <a href="http://www.github.com/"><img src="../components/icons/git.png" alt="github icon" height="50px" width="50px"/></a>
         <a href="http://www.snapchat.com/"><img src="../components/icons/sc.png" alt="snapchat icon" height="50px" width="50px"/></a>
         <a href="http://www.spotify.com/"><img src="../components/icons/spotify.png" alt="spotify icon" height="50px" width="50px"/></a>
      </div>
      <br>
      <p class="title">Services Offered:</p><br>
      <div class="services">
        <ul class="web"><u>Website:</u>
          <li>Web Design</li>
          <li>Web Development</li>
          <li>Front-end UI/UX Implementation</li>
        </ul>
        <ul class="graphic"><u>Graphics:</u>
          <li>Graphic Design</li>
          <li>Logo Creation + Branding</li>
          <li>Other Graphic-styled media</li>
        </ul>
        <ul class="software"><u>Software:</u>
          <li>Software Design</li>
          <li>Software Development</li>
          <li>UX Design + Implementation</li>
          <li>Application Development</li>
        </ul>
      </div>
      <p class="copyright">©Reece Chappell 2023</p>
      <transition name="fade">
        <div id="pagetop" v-show="scY > 300" @click="toTop">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000"
              stroke-width="3" stroke-linecap="square" stroke-linejoin="arcs">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </div>
      </transition>
    </section>
  </div>
</template>
  
  <script>
  // @ is an alias to /src
  import Slider from "@/components/Slider.vue"

  export default {
    name: "Media",
    components: {Slider},
    data() {
      return {
        scTimer: 0,
        scY: 0,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
  
  #pagetop{
      position: fixed; 
      right: 0;
      bottom: 0;
    }
  .media{
    font-family: 'Sora', sans-serif;
  }
  .hero {
    background-image: url("../assets/b3.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    height: 100vh;  
  
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  
    .hero-text {
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      color: #fff;
      margin-left: 20px;

      @media (min-width: 990px) {
          height: 100%;
        }

      .hello{
        color: #000;

        @media (max-width: 990px) {
          color: #fff;
        }
      }
  
      h4 {
        text-transform: uppercase;
        font-size: 22px;
        padding-bottom: 4px;
        margin-left: 16px;
        font-weight: 600;
      }
  
      h2 {
        font-size: 50px;
        margin-left: 16px;
        @media (max-width: 334px) {
          font-size: 40px;
        }
        @media (min-width: 550px) {
          font-size: 60px;
        }
        @media (min-width: 769px) {
          font-size: 70px;
        }
        @media (min-width: 900px) {
          font-size: 80px;
        }
      }
  
      hr:nth-child(2) {
        max-width: 365px;
        margin-bottom: 16px;
      }
      hr:nth-child(4) {
        height: 6px;
        background-color: #fff;
        border: none;
        max-width: 85px;
        margin-top: 16px;
      }
    }
  }
  .section1 {
    color: #000000;
    background-color: #0c3927b9;
    box-sizing: border-box;
  
    .title{
      text-align: center;
      color: #fff;
      font-family: 'Sora', sans-serif;
      font-size: 32px;
    }

    .title2{
      text-align: center;
      color: #fff;
      font-family: 'Sora', sans-serif;
      font-size: 26px;
      @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 12px;
        }
    }
    .title3{
      text-align: left;
      color: #fff;
      font-family: 'Sora', sans-serif;
      font-size: 20px;
      @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 12px;
        }
    }
    .spotify{
      justify-self: center;
      border-radius:12px;
      height: 152px;
      width: 95%;
      margin-left: 15px;
    }
    .section1_content{
      display: flex;
      text-align: center;
      justify-content: center;
      box-sizing: border-box;

      div.polaroid {
          width: 90%;
          background-color: #d4af37c3;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          margin-bottom: 25px;
        }
        div.pol_container {
          text-align: center;
          padding: 10px 20px;
          color: #fff;
          @media (max-width: 620px) {
          font-size: 12px;
          }
        }
      .section1_first{
        width: 100%;
        float: left;
        color: #fff;
        font-family: 'Sora', sans-serif;
        font-size: 24px;
        margin-left: 20px;
        text-align: left;
        @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 12px;
        }
        @media (min-width: 1440px) {//dont forget to add these everywhere (support mobile first)
          width: 70%;
        }
      }
      .section1_second{
        width: 60%;
      }
    }
  }
  .section2{
    color: #000000;
    background-color: rgb(208, 207, 101);
    box-sizing: border-box;
    .title{
      text-align: center;
      color: #000000;
      font-family: 'Sora', sans-serif;
      font-size: 32px;
    }
    .title2{
      text-align: left;
      color: #000000;
      font-family: 'Sora', sans-serif;
      font-size: 20px;
      @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 12px;
        }
    }
    .title3{
      text-align: center;
      color: #000000;
      font-family: 'Sora', sans-serif;
      font-size: 20px;
      @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 12px;
        }
    }
    .button_about{
      background-color: #0c3927;
      border-radius: 5px;
      color: white;
      padding: 16px 32px;
      font-size: 16px;
      font-weight: 600;
      margin: 40px 2px 20px 10px;
      cursor: pointer;
      border: 2px solid #000;

      @media (max-width: 768px) {//dont forget to add these everywhere (support mobile first)
          font-size: 12px;
          width: 80%;
          height: 40%;
          padding: 16px 16px;
      }
      @media (max-width: 580px) {//dont forget to add these everywhere (support mobile first)
          padding: 0px;
      }

      @media (min-width: 1024px) {//dont forget to add these everywhere (support mobile first)
        margin-top: 60px;
      }
    }
    .section2_content{
      display: flex;
      text-align: left;
      @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
        font-size: 12px;
      }
    }
  }
  .section3{
    color: #000000;
    background-color: rgb(205, 224, 96);
    box-sizing: border-box;
    min-height: 350px;

    @media (min-width: 769px) {//dont forget to add these everywhere (support mobile first)
          height: 450px;
      }
    .title{
      text-align: center;
      color: #000000;
      font-family: 'Sora', sans-serif;
      font-size: 32px;
    }
    .title2{
      text-align: center;
      color: #000000;
      font-family: 'Sora', sans-serif;
      font-size: 20px;
      @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 12px;
      }
    }
    .section3_content{
      display: flex;
      text-align: left;
      .responsive_iframe{
        width: 100%;
        height: 300px;
        border: 2px solid #0c3927;
        @media (max-width: 768px) {//dont forget to add these everywhere (support mobile first)
          width: 90%;
          height: 220px;
          margin-left: 20px;
        }
        @media (max-width: 445px) {//dont forget to add these everywhere (support mobile first)
          width: 90%;
          height: 200px;
          margin-left: 10px;
        }
      }
      .section3_first{
        width:50%;
        position: absolute;
        left: 0;
        float: left;
        color: #000000;
        font-family: 'Sora', sans-serif;
        font-size: 20px;
      }
      .section3_second{
        width:50%;
        position: absolute;
        right: 0;
        float: right;
        color: #000000;
        font-family: 'Sora', sans-serif;
        font-size: 20px;
      }

      .game{
        display: block;
        width:100%;
        width: 800px;
        height: 500px;
      }
    }
  }
  
  .section4{
    color: #fff;
    background-color: #0c3927b9;
    padding-left: 10px;
    font-size: 16px;
    .copyright{
      padding-left: 10px;
      padding-top: 10px;
    }
    .links{
      width: 100%;
      display: flex;
      justify-content: center;
      a{
        margin: 30px;
        @media (max-width: 1440px) {//dont forget to add these everywhere (support mobile first)
            margin: 15px;
        }
        @media (max-width: 1024px) {//dont forget to add these everywhere (support mobile first)
            margin: 10px;
        }
        @media (max-width: 768px) {//dont forget to add these everywhere (support mobile first)
            margin: 2px;
        }
      }
      @media (max-width: 550px) {//dont forget to add these everywhere (support mobile first)
          display: block;  
        }
    }
    .title{
      text-align: center;
      color: #fff;
      font-family: 'Sora', sans-serif;
      font-size: 32px;
      @media (max-width: 770px) {//dont forget to add these everywhere (support mobile first)
        font-size: 16px;
      }
    }
    .services{
      display: flex;
      justify-content: center;
      font-size: 16px;
      @media (max-width: 770px) {//dont forget to add these everywhere (support mobile first)
        font-size: 14px;
      }
      @media (max-width: 450px) {//dont forget to add these everywhere (support mobile first)
        font-size: 10px;
      }
      @media (max-width: 370px) {//dont forget to add these everywhere (support mobile first)
        font-size: 8px;
      }
    }
  }
  
  .images{//images found in sections
    border-radius: 10px;
    max-width: 100%;
    height: auto;
    width: auto;
    padding: 5px;
  }
  


  </style>
  
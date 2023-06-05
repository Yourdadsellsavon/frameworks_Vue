<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <br><br><br><br><br>
        <h2>Hello,<br/>I'm Reece Chappell</h2>
        <h4>Web designer and software developer based in Lancashire, UK</h4>
      </div>
    </section>
    <!-- section 1 -->
    <section class="section1"><h2 class="title">What Do I Do?</h2><br>
      <h4 class="title2">Here’s some of my previous work in Web Design, Graphic Design and Software Design.</h4>
      <div class="section1_content">
        <div class="section1_first">
          <div class="polaroid">
            <img src="../assets/gal1.png" alt="Image of a website created by the author" style="width:100%">
            <img src="../assets/gal3.png" alt="Image of a website created by the author" style="width:100%">
            <div class="pol_container">
              <p>Web Design</p>
            </div>
          </div>
        </div>
        <div class="section1_second">
          <div class="polaroid">
            <img src="../assets/d6.png" alt="Image of a graphic created by the author" style="width:100%">
            <img src="../assets/d9.png" alt="Image of a graphic created by the author" style="width:100%">
            <div class="pol_container">
              <p>Graphic Design</p>
            </div>
          </div>
        </div>
        <div class="section1_third">
          <div class="polaroid">
            <video class="images" src="../assets/eug3.mp4" autoplay="true" controls="true" loop="true"></video>
            <img src="../assets/sw.png" alt="Image of a game created by the author" style="width:100%">
            <div class="pol_container">
              <p>Software Design</p>
            </div>
          </div>
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

   <!-- section 2                            -->
    <section class="section2">
      <h2 class="title">Who Am I?</h2>
      <br>
      <div class="section2_content">
        <div class="section2_first">
            <div class="polaroid">
              <img src="../assets/a3.jpg" alt="Graphic-styled Image of the author created by the author" style="width:100%">
          </div>
        </div>
        <div class="section2_second">
          <p class="title2">Born and raised in England, UK. <br>
            I’m a masters computer science student studying at Lancaster University, building up my skills for a career in web development.
            I enjoy going on adventures, making the most out of life and I never shy away from a photographic moment. 
          </p><br>
        </div>
        <div class="section2_fourth">
          <button onclick="window.location.href='#/about'" class="button_about">Learn More <i class='fa fa-arrow-right' aria-hidden="true"></i></button>
        </div>
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
      <h2 class="title">Get In Touch</h2>
      <h4 class="title2">Like what you see or have any questions? Drop me a message and I’ll get back to you.</h4>
      <div class="section3_content">
        <div class="form" required>
          <form id="formId" method="get" autocomplete="on">
            <label for="fullname">Full Name:</label><br>
            <input type="text" id="fullname" name="fullname" placeholder="Joe Bloggs" required><br><br>
            <label for="email">Email:</label><br>
            <input type="text" id="email" name="email" placeholder="joebloggs@gmail.com" required><br><br> 		   
            <label for="pnumber">Phone Number:</label><br>
            <input type="number" id="pnumber" name="pnumber" placeholder="07123456789" required><br><br>
            <label for="message">Your Message:</label><br>
            <textarea  id="message" name="message" rows="10" cols="50" placeholder="Enter your message here..." required></textarea><br><br>
            <input type="submit" id="submit" value="Submit" required >
            <!-- onclick="alert('Your message has been submitted, thank you!')"  -->
          </form>
        </div>
        <div class="images">
          <img src="../assets/d8.png" alt="Graphic-styled image created by the author" style="width:100%">
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
  export default {
    name: "Home",
    components: {},
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
  .home{
    font-family: 'Sora', sans-serif;
  }
  .hero {
    background-image: url("../assets/t2_edit11.jpg");
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
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      color: #000000;
  
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
    background-color: #504b4b;
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
      text-align: center;
      color: #fff;
      font-family: 'Sora', sans-serif;
      font-size: 14px;
      @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 12px;
        }
    }
    .section1_content{
      display: flex;
      text-align: center;
      justify-content: center;
      box-sizing: border-box;

      div.polaroid {
          width: 90%;
          background-color: #0c3927;
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
        width: 30%;
        float: left;
        margin-left: 20px;
      }
      .section1_second{
        width: 30%;
      }
      .section1_third{
        width: 30%;
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
      @media (max-width: 370px)  {
          .section2_first .polaroid,.section2_third .polaroid {width: 80%; display: none;}
      }
      .section2_first{
        width: 25%;
        color: #fff;
        font-family: 'Sora', sans-serif;
        font-size: 22px;
        margin-left: 5px;
        @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 12px;
        }
        @media (max-width: 370px) {//dont forget to add these everywhere (support mobile first)
          width: 0%;
        }
        div.polaroid {
          width: 90%;
          height: 100%;
          background-color: transparent;
          margin-bottom: 25px;

          img{
            height: 100%;
            width: 100%;

            @media (max-width: 768px) {//dont forget to add these everywhere (support mobile first)
              height: 80%;
            }

            @media (max-width: 375px) {//dont forget to add these everywhere (support mobile first)
              height: 70%;
            }
          }
        }
      }
      .section2_second{
        width:60%;
        float: left;
        color: #000000;
        font-family: 'Sora', sans-serif;
        font-size: 20px;
        @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 10px;
        }
        @media (max-width: 768px) {//dont forget to add these everywhere (support mobile first)
          width: 50%;
        }
      }

      .section2_fourth{
        width:15%;
        float: right;
        justify-content: right;
        color: #000000;
        font-family: 'Sora', sans-serif;
        font-size: 20px;
        margin-right: 10px;
        @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 10px;
        }
        @media (max-width: 768px) {//dont forget to add these everywhere (support mobile first)
          width: 20%;
        }
        @media (max-width: 370px) {//dont forget to add these everywhere (support mobile first)
          width: 40%;
        }
      }
    }
  }
  .section3{
    color: #000000;
    background-color: rgb(205, 224, 96);
    box-sizing: border-box;
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
      .form{
        width: 65%;
        float: left;
        color: #000;
        font-family: 'Sora', sans-serif;
        font-size: 22px;
        margin-left: 10px;
        @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 14px;
        }
        label{
          font-weight: 600;
        }
        #fullname{
          width: 80%;
          height: 40px;
          background-color: transparent;
          border: none;
          border-bottom: 2px solid #000000;
          font-size: 16px;
          @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 14px;
          }
        }
        #email{
          width: 80%;
          height: 40px;
          background-color: transparent;
          border: none;
          border-bottom: 2px solid #000000;
          font-size: 16px;
          @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 14px;
          }
        }
        #pnumber{
          width: 80%;
          height: 40px;
          background-color: transparent;
          border: none;
          border-bottom: 2px solid #000000;
          font-size: 16px;
          @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 14px;
          }
        }
        #message{
          width: 80%;
          min-width: 200px;
          min-height: 50px;
          max-height: 80px;
          max-width: 80%;
          background-color: transparent;
          border: none;
          border-bottom: 2px solid #000000;
          font-size: 16px;
          @media (max-width: 620px) {//dont forget to add these everywhere (support mobile first)
          font-size: 14px;
          }
        }
        #submit{
          background-color: #0c3927b9;
          border: none;
          color: white;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          margin: -10px 20px 20px 10px;
          cursor: pointer;
          border: 2px solid #000;
        }
      }
      .images{
        width: 50%;
        height: 50%;
        float: right;
        margin-right: 10px;
        max-width: 500px;
        max-height: 400px;
        img{
          width: 100%;
          border-radius: 15px;  
          margin-top: 40px;
        }
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
  
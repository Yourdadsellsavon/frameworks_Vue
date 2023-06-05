<template>
  <div class="carousel-wrapper">
    <span id="item-1"></span>
    <span id="item-2"></span>
    <span id="item-3"></span>
    <span id="item-4"></span>
    <span id="item-5"></span>
    <span id="item-6"></span>
    <span id="item-7"></span>
    <span id="item-8"></span>
    <span id="item-9"></span>
    <span id="item-10"></span>

    <div class="carousel-item item-1">
      <a href="#item-10" class="arrow-prev arrow"></a>
      <a href="#item-2" class="arrow-next arrow"></a>
    </div>

    <div class="carousel-item item-2">
      <a href="#item-1" class="arrow-prev arrow"></a>
      <a href="#item-3" class="arrow-next arrow"></a>
    </div>

    <div class="carousel-item item-3">
      <a href="#item-2" class="arrow-prev arrow"></a>
      <a href="#item-4" class="arrow-next arrow"></a>
    </div>

    <div class="carousel-item item-4">
      <a href="#item-3" class="arrow-prev arrow"></a>
      <a href="#item-5" class="arrow-next arrow"></a>
    </div>

    <div class="carousel-item item-5">
      <a href="#item-4" class="arrow-prev arrow"></a>
      <a href="#item-6" class="arrow-next arrow"></a>
    </div>

    <div class="carousel-item item-6">
      <a href="#item-5" class="arrow-prev arrow"></a>
      <a href="#item-7" class="arrow-next arrow"></a>
    </div>

    <div class="carousel-item item-7">
      <a href="#item-6" class="arrow-prev arrow"></a>
      <a href="#item-8" class="arrow-next arrow"></a>
    </div>

    <div class="carousel-item item-8">
      <a href="#item-7" class="arrow-prev arrow"></a>
      <a href="#item-9" class="arrow-next arrow"></a>
    </div>

    <div class="carousel-item item-9">
      <a href="#item-8" class="arrow-prev arrow"></a>
      <a href="#item-10" class="arrow-next arrow"></a>
    </div>

    <div class="carousel-item item-10">
      <a href="#item-9" class="arrow-prev arrow"></a>
      <a href="#item-1" class="arrow-next arrow"></a>
    </div>

  </div>
  
</template>



<script>
export default {
  // name: "Slider",
  // components: { Slider },
  };
</script>

<style>

.carousel-wrapper {
  width: 80%;
  height: 600px;
  position: relative;
  width: 800px;
  display: block;
  margin: 50px auto ;
  border: 2px solid #0c3927;

  @media (min-width: 1024px) {
    width: 40%;
    height: 380px;
  }
  @media (max-width: 1024px) {
    width: 50%;
    height: 400px;
  }
  @media (max-width: 870px) {
    width: 60%;
    height: 400px;
  }
  @media (max-width: 480px) {
    height: 300px;
  }
  @media (max-width: 440px) {
    height: 250px;
  }
  @media (max-width: 400px) {
    height: 200px;
  }
}

.carousel-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px 50px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.arrow{
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 12px;
}
.arrow-prev {
  left: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(135deg);

}
.arrow-next {
  right: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

[id^= "item"] {
  display: none;
}
.item-1 {
  z-index: 2;
  opacity: 1;
  background: url('../assets/s1.png');
  background-size: contain;
  background-size: 770px 630px;

  @media (min-width: 1024px) {
    background-size: 600px 400px;
  }
  @media (max-width: 1024px) {
    background-size: 470px 420px;
  }
  @media (max-width: 768px) {
    background-size: 450px 400px;
  }
  @media (max-width: 658px) {
    background-size: 400px 400px;
  }
  @media (max-width: 590px) {
    background-size: 350px 400px;
  }
  @media (max-width: 550px) {
    background-size: 300px 400px;
  }
  @media (max-width: 480px) {
    background-size: 270px 300px;
  }
  @media (max-width: 440px) {
    background-size: 250px 250px;
  }
  @media (max-width: 400px) {
    background-size: 220px 200px;
  }
}
.item-2 {
  background: url('../assets/s2.png');
  background-size: contain;
  background-size: 770px 630px;
  @media (min-width: 1024px) {
    background-size: 600px 400px;
  }
  @media (max-width: 1024px) {
    background-size: 470px 420px;
  }
  @media (max-width: 768px) {
    background-size: 450px 400px;
  }
  @media (max-width: 658px) {
    background-size: 400px 400px;
  }
  @media (max-width: 590px) {
    background-size: 350px 400px;
  }
  @media (max-width: 550px) {
    background-size: 300px 400px;
  }
  @media (max-width: 480px) {
    background-size: 270px 300px;
  }
  @media (max-width: 440px) {
    background-size: 250px 250px;
  }
  @media (max-width: 400px) {
    background-size: 220px 200px;
  }
}
.item-3 {
  background: url('../assets/s3.png');
  background-size: contain;
  background-size: 770px 630px;
  @media (min-width: 1024px) {
    background-size: 600px 400px;
  }
  @media (max-width: 1024px) {
    background-size: 470px 420px;
  }
  @media (max-width: 768px) {
    background-size: 450px 400px;
  }
  @media (max-width: 658px) {
    background-size: 400px 400px;
  }
  @media (max-width: 590px) {
    background-size: 350px 400px;
  }
  @media (max-width: 550px) {
    background-size: 300px 400px;
  }
  @media (max-width: 480px) {
    background-size: 270px 300px;
  }
  @media (max-width: 440px) {
    background-size: 250px 250px;
  }
  @media (max-width: 400px) {
    background-size: 220px 200px;
  }
}
.item-4 {
  background: url('../assets/s4.png');
  background-size: contain;
  background-size: 770px 630px;
  @media (min-width: 1024px) {
    background-size: 600px 400px;
  }
  @media (max-width: 1024px) {
    background-size: 470px 420px;
  }
  @media (max-width: 768px) {
    background-size: 450px 400px;
  }
  @media (max-width: 658px) {
    background-size: 400px 400px;
  }
  @media (max-width: 590px) {
    background-size: 350px 400px;
  }
  @media (max-width: 550px) {
    background-size: 300px 400px;
  }
  @media (max-width: 480px) {
    background-size: 270px 300px;
  }
  @media (max-width: 440px) {
    background-size: 250px 250px;
  }
  @media (max-width: 400px) {
    background-size: 220px 200px;
  }
}
.item-5 {
  background: url('../assets/s5.png');
  background-size: contain;
  background-size: 770px 630px;
  @media (min-width: 1024px) {
    background-size: 600px 400px;
  }
  @media (max-width: 1024px) {
    background-size: 470px 420px;
  }
  @media (max-width: 768px) {
    background-size: 450px 400px;
  }
  @media (max-width: 658px) {
    background-size: 400px 400px;
  }
  @media (max-width: 590px) {
    background-size: 350px 400px;
  }
  @media (max-width: 550px) {
    background-size: 300px 400px;
  }
  @media (max-width: 480px) {
    background-size: 270px 300px;
  }
  @media (max-width: 440px) {
    background-size: 250px 250px;
  }
  @media (max-width: 400px) {
    background-size: 220px 200px;
  }
}
.item-6 {
  background: url('../assets/s6.png');
  background-size: contain;
  background-size: 770px 630px;
  @media (min-width: 1024px) {
    background-size: 600px 400px;
  }
  @media (max-width: 1024px) {
    background-size: 470px 420px;
  }
  @media (max-width: 768px) {
    background-size: 450px 400px;
  }
  @media (max-width: 658px) {
    background-size: 400px 400px;
  }
  @media (max-width: 590px) {
    background-size: 350px 400px;
  }
  @media (max-width: 550px) {
    background-size: 300px 400px;
  }
  @media (max-width: 480px) {
    background-size: 270px 300px;
  }
  @media (max-width: 440px) {
    background-size: 250px 250px;
  }
  @media (max-width: 400px) {
    background-size: 220px 200px;
  }
}
.item-7 {
  background: url('../assets/s7.png');
  background-size: contain;
  background-size: 770px 630px;
  @media (min-width: 1024px) {
    background-size: 600px 400px;
  }
  @media (max-width: 1024px) {
    background-size: 470px 420px;
  }
  @media (max-width: 768px) {
    background-size: 450px 400px;
  }
  @media (max-width: 658px) {
    background-size: 400px 400px;
  }
  @media (max-width: 590px) {
    background-size: 350px 400px;
  }
  @media (max-width: 550px) {
    background-size: 300px 400px;
  }
  @media (max-width: 480px) {
    background-size: 270px 300px;
  }
  @media (max-width: 440px) {
    background-size: 250px 250px;
  }
  @media (max-width: 400px) {
    background-size: 220px 200px;
  }
}
.item-8 {
  background: url('../assets/s8.png');
  background-size: contain;
  background-size: 770px 630px;
  @media (min-width: 1024px) {
    background-size: 600px 400px;
  }
  @media (max-width: 1024px) {
    background-size: 470px 420px;
  }
  @media (max-width: 768px) {
    background-size: 450px 400px;
  }
  @media (max-width: 658px) {
    background-size: 400px 400px;
  }
  @media (max-width: 590px) {
    background-size: 350px 400px;
  }
  @media (max-width: 550px) {
    background-size: 300px 400px;
  }
  @media (max-width: 480px) {
    background-size: 270px 300px;
  }
  @media (max-width: 440px) {
    background-size: 250px 250px;
  }
  @media (max-width: 400px) {
    background-size: 220px 200px;
  }
}
.item-9 {
  background: url('../assets/s9.png');
  background-size: contain;
  background-size: 770px 630px;
  @media (min-width: 1024px) {
    background-size: 600px 400px;
  }
  @media (max-width: 1024px) {
    background-size: 470px 420px;
  }
  @media (max-width: 768px) {
    background-size: 450px 400px;
  }
  @media (max-width: 658px) {
    background-size: 400px 400px;
  }
  @media (max-width: 590px) {
    background-size: 350px 400px;
  }
  @media (max-width: 550px) {
    background-size: 300px 400px;
  }
  @media (max-width: 480px) {
    background-size: 270px 300px;
  }
  @media (max-width: 440px) {
    background-size: 250px 250px;
  }
  @media (max-width: 400px) {
    background-size: 220px 200px;
  }
}
.item-10 {
  background: url('../assets/s10.png');
  background-size: contain;
  background-size: 770px 630px;
  @media (min-width: 1024px) {
    background-size: 600px 400px;
  }
  @media (max-width: 1024px) {
    background-size: 470px 420px;
  }
  @media (max-width: 768px) {
    background-size: 450px 400px;
  }
  @media (max-width: 658px) {
    background-size: 400px 400px;
  }
  @media (max-width: 590px) {
    background-size: 350px 400px;
  }
  @media (max-width: 550px) {
    background-size: 300px 400px;
  }
  @media (max-width: 480px) {
    background-size: 270px 300px;
  }
  @media (max-width: 440px) {
    background-size: 250px 250px;
  }
  @media (max-width: 400px) {
    background-size: 220px 200px;
  }
}

*:target ~ .item-1{
  opacity: 0;
}
#item-1:target ~ .item-1 {
  opacity: 1;

}
#item-2:target ~ .item-2, #item-3:target ~ .item-3, #item-4:target ~ .item-4, #item-5:target ~ .item-5, #item-6:target ~ .item-6, #item-7:target ~ .item-7, #item-8:target ~ .item-8, #item-9:target ~ .item-9, #item-10:target ~ .item-10 {
  z-index: 3;
  opacity: 1;
} 
</style>
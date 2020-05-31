<template>
  <div>
    <div id="app">
      <div id="hamburger" @click="naviOpen" :class="{ 'is-active': active }">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="eyecatch"></div>
      <transition name="navi">
        <nav class="menu-content" :class="{ 'is-slidein': slidein }">
          <ul class="menu-content_inner">
            <li>
              <a href="#one" @click="navHandler">Style</a>
            </li>

            <li>
              <a href="#two" @click="navHandler;">Product</a>
            </li>

            <li>
              <a href="#three" @click="navHandler;">Salon</a>
            </li>

            <li>
              <a href="#five" @click="navHandler;">Model</a>
            </li>
            <li>
              <a href="#four" @click="navHandler">Blog</a>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
    <div class="hairstyle">
      <transition name="fadein">
        <div class="hair" :class="{ fadein: scrollY > 200 }">
          <h1>
            Hairstyle inspired
            <br />by fassion. <br />Hair produced <br />by Salon.
          </h1>
        </div>
      </transition>
      <div class="square1">
        <img src="../assets/image/oma-ju2/ダウンロード.jpg" class="blond" />
      </div>
    </div>

    <div class="main-wrap" id="one">
      <div class="photo01">
        <transition name="rightin">
          <h1 class="wrap style" :class="{ rightin: scrollY > 500 }">
            STYLE
            <span class="number first">01</span>
          </h1>
        </transition>
        <transition name="bottomin">
          <img
            src="../assets/image/oma-ju2/OIP (5).jpg"
            class="photo1 sample"
            :class="{ bottomin: scrollY > 700 }"
        /></transition>
        <transition name="bottomin"
          ><img
            src="../assets/image/oma-ju2/OIP (4).jpg"
            class="photo2 sample"
            :class="{ bottomin: scrollY > 800 }"
        /></transition>
      </div>
      <div class="content">
        <transition name="fadeon">
          <p class="style-top" :class="{ fadeon: scrollY > 800 }">
            Salonでは髪質・骨格に合わせたカットに、
            <br />ライフスタイルを掛け合わせ、リアルトレンドをご設定します。
          </p>
        </transition>
        <transition name="fadeon">
          <p class="style-bottom" :class="{ fadeon: scrollY > 800 }">
            また、トレンドや髪質に合わせたセットの仕方、ドライヤー、
            <br />アイロンの使い方など役立つ知識も提供しています。
          </p>
        </transition>
      </div>
      <div class="read top">
        READ MORE
        <span class="plus">+</span>
      </div>
      <div class="column line">
        <img src="../assets/image/oma-ju2/Vector 1.png" class="line" />
        <img src="../assets/image/oma-ju2/Salon.png" class="salon" />
        <img src="../assets/image/oma-ju2/Vector 2.png" class="line" />
      </div>
    </div>

    <div class="main2" id="two">
      <div class="product">
        <div class="container">
          <transition name="produin">
            <h1 class="wrap produ" :class="{ produin: scrollY > 1600 }">
              PRODUCT
              <span class="number second">02</span>
            </h1>
          </transition>
          <transition name="fadeon">
            <p class="protop" :class="{ fadeon: scrollY > 1300 }">
              Salonが目指したのは、性別、年代に関わらずすべて
              <br />の人が安心して利用できるプロダクトです。
            </p>
          </transition>
          <div class="read middle">
            READ MORE
            <span class="plus">+</span>
          </div>
          <div class="store">
            <img src="../assets/image/oma-ju2/OIP (7).jpg" class="beauty" />
            <div class="a">
              <p class="online">ONLINE STORE</p>
              <p class="link">→LINK</p>
            </div>
          </div>
          <div class="column">
            <img src="../assets/image/oma-ju2/Vector 1.png" class="line2" />
            <div class="pro">product</div>
            <img src="../assets/image/oma-ju2/Vector 2.png" class="line2" />
          </div>
        </div>
      </div>
      <img
        src="../assets/image/oma-ju2/9870695814_6b361f2826_z-1.jpg"
        class="shampoo"
      />
    </div>

    <div class="main3" id="three">
      <div class="salon-wrap">
        <transition name="salin">
          <h1 class="wrap sal" :class="{ salin: scrollY > 2300 }">
            SALON
            <span class="number third">03</span>
          </h1>
        </transition>
        <div class="text">
          <h2 class="hairmake">Hair make Salon</h2>
          <p class="kana">ヘアメイク サロン</p>
          <p class="locate">
            XXX-XXXX
            <br />東京都渋谷区道玄坂99-9 〇〇ビル2F
          </p>
          <p class="tel">Tel: 0120 - xx - xxxx</p>
        </div>
        <div class="room">
          <div class="frame">
            <transition name="room1in">
              <img
                src="../assets/image/oma-ju2/OIP (8).jpg"
                class="room1"
                :class="{ room1in: scrollY > 2500 }"
            /></transition>
            <transition name="room2in">
              <img
                src="../assets/image/oma-ju2/OIP (10).jpg"
                class="room2"
                :class="{ room2in: scrollY > 2800 }"
                id="five"
            /></transition>
          </div>
        </div>
        <div class="column line sub">
          <img src="../assets/image/oma-ju2/Vector 1.png" class="line" />
          <img src="../assets/image/oma-ju2/Salon.png" class="salon" />
          <img src="../assets/image/oma-ju2/Vector 2.png" class="line" />
        </div>
      </div>
    </div>

    <div class="askew">
      <div class="model">
        <div class="model-inner">
          <div class="fontmodel">MODEL</div>
          <transition name="model1in">
            <img
              src="../assets/image/oma-ju2/OIP (2).jpg"
              class="model1"
              :class="{ model1in: scrollY > 3300 }"
          /></transition>
          <div class="model-bottom">
            <transition name="model2in">
              <img
                src="../assets/image/oma-ju2/OIP (13).jpg"
                class="model2"
                :class="{ model2in: scrollY > 3500 }"
            /></transition>
            <transition name="model3in">
              <img
                src="../assets/image/oma-ju2/ダウンロード (1).jpg"
                class="model3"
                :class="{ model3in: scrollY > 3800 }"
            /></transition>
          </div>
          <div class="read foot">
            READ MORE
            <span class="plus">+</span>
          </div>
        </div>
      </div>
    </div>

    <div class="menues">
      <div class="each">
        <div class="menu">
          <p>MENU</p>
        </div>
        <div class="coupon">
          <p>COUPON</p>
        </div>
        <div class="staff">
          <p>STAFF</p>
        </div>
        <div class="sty">
          <p>STYLE</p>
        </div>
      </div>
    </div>

    <div class="lastsection" id="four">
      <h2 class="blog">BLOG</h2>
      <transition name="artin">
        <div class="articles" :class="{ artin: scrollY > 4600 }">
          <div class="article">
            <a href class="js-modal-open">
              <img
                src="../assets/image/oma-ju2/ダウンロード (2).jpg"
                class="cake"
              />
              <p class="arttxt">
                2019.03.08| プライベート
                <br />祝っていただきました！
              </p>
            </a>
            <div class="modal">
              <div class="bigimg">
                <img src alt />
                <p></p>
              </div>
              <p class="closebtn">
                <a href>✖</a>
              </p>
            </div>
          </div>
          <div class="article">
            <a href class="js-modal-open">
              <img src="../assets/image/oma-ju2/OIP (15).jpg" class="woman" />
              <p class="arttxt">
                2019.02.28| お知らせ
                <br />ホームページをリニューアルしました！...
              </p>
            </a>
            <div class="modal">
              <div class="bigimg">
                <img src alt />
                <p></p>
              </div>
              <p class="closebtn">
                <a href>✖</a>
              </p>
            </div>
          </div>
          <div class="article">
            <a href class="js-modal-open">
              <img src="../assets/image/oma-ju2/OIP (16).jpg" class="shop" />
              <p class="arttxt">
                2019.02.24| お知らせ
                <br />青山支店が開店しました！
              </p>
            </a>
            <div class="modal">
              <div class="bigimg">
                <img src alt />
                <p></p>
              </div>
              <p class="closebtn">
                <a href>✖</a>
              </p>
            </div>
          </div>
        </div>
      </transition>
      <div class="read last">
        READ MORE
        <span class="plus">+</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      active: false,
      // navi: false,
      slidein: false,
      isfadein: true,
      scrollY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    clickSmoothScroll() {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector("#one"), 700, null, null, "y"),
        this.$SmoothScroll(
          document.querySelector("#two"),
          700,
          null,
          null,
          "y"
        ),
        this.$SmoothScroll(
          document.querySelector("#three"),
          700,
          null,
          null,
          "y"
        ),
        this.$SmoothScroll(
          document.querySelector("#four"),
          700,
          null,
          null,
          "y"
        ),
        this.$SmoothScroll(
          document.querySelector("#five"),
          700,
          null,
          null,
          "y"
        );
    },
    naviOpen: function() {
      this.active = !this.active;
      // this.navi = !this.navi;
      this.slidein = !this.slidein;
    },
    navHandler: function() {
      this.clickSmoothScroll;
      this.naviOpen;
    },
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style scoped>
.menu-content,
.menu-title {
  margin: 40px, 20px;
  font-size: 2.2rem;
  color: #332930;
  text-align: left;
  font-weight: bold;
}
/* .drawer {
  position: fixed;
} */
.menu-content {
  margin-top: 150px;
  width: calc(100% - 80px);
  height: 80%;
  text-align: center;
  bottom: 0px;
  background-color: #fff;
  color: #332930;
  opacity: 0.8;
  box-shadow: -80px 0 rgba(39, 37, 24, 0.6) inset;
  z-index: 100;
  position: fixed;
  left: -100%;
  transition: 0.7s;
}
.menu-content-inner {
  height: 100%;
}
.menu-content.is-slidein {
  left: 0;
}
/* .menu-content-enter,
.menu-content-leave-to {
  opacity: 0.5;
  transition: 0.8s;
}
.menu-content-enter-to,
.menu-content-leave {
  opacity: 1;
}
.menu-content-enter-active,
.menu-content-leave-active {
  transition: 1.2s;
  opacity: 0.8;
} */

.menu-content li a {
  color: #332930;
  margin: 15px;
  padding: 5px;
  border-bottom: 0.5px solid #e5e2c6;
  text-decoration: none;
  display: block;
}
.menu-content li {
  width: 100%;
  text-align: left;
}

#hamburger {
  width: 40px;
  height: 40px;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 100;
  cursor: pointer;
  transition: 0.4s;
}
#hamburger span {
  width: 35px;
  height: 4px;
  border-radius: 5px;
  position: absolute;
  left: 2px;
  display: block;
  background-color: #b576ad;
  transition: 0.8s;
}
#hamburger span:nth-of-type(1) {
  top: 10px;
}
#hamburger span:nth-of-type(2) {
  top: 20px;
}
#hamburger span:nth-of-type(3) {
  top: 30px;
}
.is-active span:nth-of-type(1) {
  top: 20px;
  transform: rotate(45deg);
}
.is-active span:nth-of-type(2) {
  opacity: 0;
}
.is-active span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 20px;
}
#eyecatch {
  background-image: url(../assets/image/oma-ju2/OIP.jpg);
  background-size: cover;
  background-position: center;
  height: 600px;
  position: relative;
  top: 100px;
}

.hairstyle {
  margin: 0 auto;
  position: relative;
  top: 50px;
  height: 700px;
}
.square1 {
  width: 60%;
  height: 80%;
  background-color: #e5e2c6;
  position: absolute;
  top: 100px;
  right: 0;
  z-index: -2;
}
.blond {
  width: 80%;
  height: 80%;
  position: absolute;
  top: 40px;
  right: 0;
  z-index: -1;
}
.hair {
  width: 50%;
  height: 50%;
  padding: 10% 10%;
  font-size: 70px;
  font-family: italic;
  color: #332930;
  position: relative;
  left: -55%;
  opacity: 0.5;
  transition: all 1s;
}
.hair.fadein {
  opacity: 1;
  left: 0;
}

.main-wrap {
  margin: 0 auto;
  height: 1200px;
}
.photo01 {
  position: relative;
}
.sample {
  position: relative;
  top: -10px;
  left: 60px;
  width: 25%;
  height: 25%;
  z-index: -1;
  opacity: 0;
  transition: all 1.2s;
}
.bottomin {
  top: 40px;
  opacity: 1;
}
.wrap {
  font-size: 100px;
  color: #332930;
}
.style {
  position: absolute;
  bottom: 700px;
  left: 100%;
  transition: all 1s;
}
.style.rightin {
  opacity: 1;
  left: 25%;
}

.number {
  font-size: 250px;
  color: #e5e2c6;
  font-family: "Times New Roman";
}
.first {
  position: relative;
  right: 50px;
  opacity: 0.7;
}
.style-top,
.style-bottom {
  position: relative;
  left: 40%;
  color: #332930;
  font-size: 20px;
  line-height: 30px;
}
.style-top {
  bottom: 600px;
}
.style-bottom {
  bottom: 500px;
}
.read {
  width: 250px;
  height: 30px;
  background-color: #332920;
  color: #dedede;
  text-align: center;
  padding: 20px 0;
  font-size: 25px;
  cursor: pointer;
}
.read:hover {
  opacity: 0.8;
}
.top {
  position: relative;
  bottom: 400px;
  left: 70%;
}
.plus {
  font-size: 30px;
  padding-left: 10px;
}
.column {
  width: 2px;
  height: 600px;
}
.line {
  position: relative;
  bottom: 600px;
  left: 95%;
  height: 400px;
  box-shadow: none;
}
.salon {
  position: relative;
  bottom: 600px;
  left: 100%;
  padding: 30px 0;
  width: 10px;
  height: 30px;
  box-shadow: none;
}
.main2 {
  margin-top: 100px auto;
}
.container {
  width: 100%;
  height: 100%;
  z-index: -1;
}
.product {
  position: relative;
  width: 800px;
  height: 700px;
  background-color: #e2e5c6;
  opacity: 0.8;
  position: relative;
}
.produ {
  font-size: 80px;
  position: absolute;
  left: -50%;
  padding-top: 100px;
  transition: all 1s;
}
.produ.produin {
  left: 5%;
}
.second {
  position: absolute;
  left: 350px;
  top: 20px;
  z-index: -1;
  color: #fff;
}
.protop,
.middle {
  position: relative;
  top: 300px;
  left: 10%;
}
.protop {
  color: #332920;
  font-size: 20px;
  line-height: 30px;
  position: relative;
  z-index: 10;
}
.middle {
  margin: 50px;
}
.shampoo {
  width: 40%;
  height: 40%;
  position: relative;
  bottom: 550px;
  left: 60%;
  z-index: 0;
}
.beauty {
  width: 40%;
  height: 100%;
}
.store {
  display: flex;
  width: 520px;
  height: 150px;
  position: relative;
  top: 300px;
  left: 30%;
  border: 2px solid #332920;
  background-color: #fff;
  cursor: pointer;
}
.online {
  font-size: 35px;
  padding: 40px 0 0 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
}
.link {
  padding: 40px 0 0 220px;
  font-size: 20px;
  cursor: pointer;
}
.line2 {
  position: relative;
  left: 10px;
  height: 200px;
  bottom: 250px;
  box-shadow: none;
}
.pro {
  margin-left: 10px;
  padding: 30px 0;
  width: 10px;
  height: 30px;
  position: relative;
  bottom: 250px;
  box-shadow: none;
  height: 40px;
}
.main3 {
  margin: 0 auto;
  position: relative;
  top: -400px;
}
.sal {
  position: absolute;
  left: 100%;
  bottom: 200px;
  transition: all 1s;
}
.sal.salin {
  left: 40%;
}
.third {
  position: relative;
  left: -10%;
  z-index: -1;
}
.text {
  position: absolute;
  top: 300px;
  right: 20%;
}
.hairmake {
  font-size: 30px;
  color: #332920;
}
.locate,
.tel {
  padding-top: 30px;
  font-size: 20px;
  color: #332920;
}
.frame {
  width: 400px;
  height: 200px;
  border: 2px solid #000;
  margin-left: 150px;
  position: absolute;
  top: 200px;
}
.room1,
.room2 {
  width: 80%;
  height: 100%;
}
.room1 {
  position: relative;
  top: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  transition: all 1s;
}
.room1.room1in {
  top: -30%;
  right: -40%;
  opacity: 1;
}
.room2 {
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  transition: all 1s;
  opacity: 0;
}
.room2.room2in {
  top: -40%;
  left: -20%;
  opacity: 1;
}
.sub {
  position: relative;
  top: 250px;
}
.sub > .line {
  height: 300px;
}

.model {
  position: relative;
  overflow: hidden;
  margin: 10px 0;
  padding: 80px 0;
  top: -400px;
  height: 1000px;
}
.model::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 1200px;
  margin: 3% -10% 0;
  background-color: #e2e5c6;
  opacity: 0.8;
  transform-origin: left center;
  transform: rotate(5deg);
  z-index: -2;
}
.model-inner {
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 100px 10px 120px;
}
.fontmodel {
  font-size: 150px;
  color: #dedede;
  font-family: "Ubuntu Mono";
  font-weight: bold 700 italic;
  position: relative;
  top: 80px;
  left: 60px;
}
.model::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 80%;
  margin: 3% -10% 0;
  background-color: #332920;
  opacity: 0.6;
  transform-origin: right center;
  transform: rotate(-5deg);
  z-index: -1;
}
.model1,
.model2,
.model3 {
  position: absolute;
  overflow: hidden;
  top: -300px;
  box-shadow: none;
}
.model1,
.model2,
.model3 {
  content: "";
  width: 120%;
  height: 80px;
  margin: 3% -10% 0;
  transform-origin: right center;
  transform: rotate(-5deg);
  z-index: -1;
}
.model1 {
  width: 60%;
  height: 50%;
  position: absolute;
  top: 10px;
  left: 100%;
  opacity: 0;
  transition: all 0.8s;
}
.model1.model1in {
  left: 53%;
  opacity: 1;
}

.model2 {
  width: 60%;
  height: 45%;
  position: absolute;
  top: 41%;
  left: -100%;
  opacity: 0;
  transition: all 0.8s;
}
.model2.model2in {
  left: 2%;
  opacity: 1;
}
.model3 {
  width: 50%;
  height: 35%;
  position: absolute;
  top: 46%;
  left: 100%;
  opacity: 0;
  transition: all 0.8s;
}
.model3.model3in {
  left: 61%;
  opacity: 1;
}
.foot {
  position: relative;
  top: 750px;
  left: 75%;
}
.menues {
  position: relative;
  bottom: 410px;
  background-color: #e2e5c6;
  height: 700px;
  opacity: 0.8;
  z-index: -2;
  margin: 0 auto;
}
.each {
  width: 80%;
  height: 450px;
  margin: 0 auto;
  padding: 100px 30%;
}
.menu,
.coupon,
.staff,
.sty {
  width: 50%;
  margin: 0 10px;
  width: 300px;
  height: 200px;
  box-sizing: border-box;
  color: #332920;
  border: 1px solid #332920;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  cursor: pointer;
  opacity: 0.8;
}

.coupon {
  position: relative;
  bottom: 170px;
  left: 310px;
}
.staff {
  position: relative;
  bottom: 180px;
}
.sty {
  position: relative;
  bottom: 350px;
  left: 310px;
}

.lastsection {
  margin: 0 80px;
  position: relative;
  bottom: 500px;
}
.blog {
  text-align: center;
  font-size: 40px;
  padding: 20px 0;
  color: #332920;
}
.articles {
  display: flex;
  justify-content: space-around;
  margin: 0 10px;
  opacity: 0;
  transition: all 1s;
}
.articles.artin {
  opacity: 1;
}
.article {
  margin: 0 10px;
}
.cake,
.woman,
.shop {
  width: 300px;
  height: 200px;
}
.cake:hover,
.woman:hover,
.shop:hover {
  opacity: 0.8;
}
.js-modal-open {
  text-decoration: none;
  color: #332920;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}
.bigimg {
  position: absolute;
  width: 80%;
  max-width: 800px;
  top: 80px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.closebtn {
  color: #fff;
  font-size: 40px;
  position: fixed;
  right: 20px;
  top: 0;
  z-index: 999;
}
.closebtn a {
  color: #fff;
  text-decoration: none;
}
.arttext {
  display: block;
  color: #332920;
}
.last {
  position: relative;
  top: 100px;
  left: 41%;
}

@media screen and (max-width: 768px) {
  #eyecatch {
    top: 0px;
  }
  .hairstyle {
    margin: 0 auto;
    position: static;
  }
  .square1 {
    margin-top: 700px;
    height: 300px;
  }
  .hair {
    font-size: 50px;
    padding: 10% 5%;
  }
  .hair.fadein {
    opacity: 1;
    left: 0;
  }
  .style {
    position: absolute;
    bottom: 500px;
    left: 0%;
  }
  .photo1,
  .photo2 {
    top: -50px;
    left: 5%;
  }

  .column,
  line,
  .salon {
    display: none;
  }
  .style-top,
  .style-bottom {
    overflow-wrap: break-word;
    width: 50%;
    bottom: 500px;
  }
  .style-bottom {
    padding-top: 40px;
  }
  .top {
    left: 60%;
    bottom: 300px;
  }
  .main2 {
    margin: 0 auto;
    position: relative;
    bottom: 400px;
  }
  .produ {
    font-size: 80px;
  }
  .shampoo {
    position: absolute;
    top: 320px;
    left: 560px;
    width: 25%;
    height: 25%;
    z-index: 0;
  }
  .store {
    left: 10%;
  }
  .main3 {
    height: 800px;
  }
  .sal {
    left: -10%;
    bottom: 290px;
    margin-top: 80px;
  }
  .third {
    left: 40%;
    bottom: 250px;
  }
  .text {
    top: 240px;
    left: 30%;
    font-size: 30px;
  }
  .frame {
    top: 500px;
  }
  .fontmodel {
    font-size: 120px;
    top: 0px;
    left: 20px;
  }
  .model {
    height: 700px;
  }
  .model1 {
    top: 0px;
    height: 380px;
  }

  .model2 {
    top: 40%;
  }

  .model3 {
    height: 42%;
    top: 39%;
  }
  .foot {
    left: 60%;
    top: 500px;
  }
  .each {
    padding: 100px 10%;
  }
  .menu,
  .coupon,
  .staff,
  .sty {
    text-align: center;
  }

  .lastsection {
    margin: 0;
    height: 100px;
  }
  .cake,
  .woman,
  .shop {
    width: 220px;
    height: 150px;
  }
  .last {
    left: 35%;
    top: 100px;
  }
}

@media screen and (max-width: 480px) {
  header {
    width: 100%;
  }
  .header-logo {
    margin-left: 10px;
    margin-right: 0px;
  }
  #eyecatch {
    height: 400px;
  }
  .main-wrap {
    height: 700px;
  }
  .hair {
    font-size: 35px;
  }
  .square1 {
    width: 80%;
    margin-top: 500px;
  }
  .style {
    font-size: 70px;
    left: -100%;
    bottom: 300px;
    transition: all 1s;
  }
  .style.stylein {
    left: -2%;
  }
  .first {
    font-size: 120px;
  }
  .photo1,
  .photo2 {
    top: -200px;
  }
  .style-top,
  .style-bottom {
    bottom: 450px;
    opacity: 0;
    transition: all 1s;
    font-size: 15px;
  }
  .fadeon {
    opacity: 1;
  }
  .top {
    left: 30%;
    bottom: 400px;
  }

  .main2 {
    margin: 0;
  }
  .product {
    width: 100%;
    height: 700px;
  }
  .produ {
    font-size: 70px;
    font-weight: bold;
    left: 2%;
  }
  .second {
    font-size: 150px;
    left: 30%;
    top: -10px;
  }
  .protop {
    left: 0%;
    top: 200px;
    font-size: 18px;
    opacity: 0;
    transition: all 1s;
  }
  .fadeon {
    opacity: 1;
  }
  .middle {
    margin-left: 20px;
    top: 200px;
  }
  .shampoo {
    display: none;
  }
  .store {
    left: 10px;
    width: 350px;
    top: 200px;
  }
  .online {
    font-size: 25px;
    padding-left: 5px;
  }
  .link {
    padding-left: 140px;
  }
  .main3 {
    width: 375px;
  }
  .sal {
    left: 10px;
    font-size: 70px;
    bottom: 370px;
  }
  .third {
    font-size: 200px;
    bottom: 160px;
  }
  .text {
    left: 5%;
  }
  .frame {
    width: 200px;
    height: 150px;
    left: -20%;
    top: 500px;
  }
  .model {
    height: 500px;
  }
  .model::before {
    transform: rotate(3deg);
    height: 600px;
  }
  .model::after {
    height: 400px;
  }
  .fontmodel {
    font-size: 40px;
    top: -60px;
  }
  .model1 {
    width: 55%;
    height: 30%;
    left: 220px;
    top: 0px;
    opacity: 1;
  }
  .model2 {
    width: 50%;
    top: 33%;
    left: 10%;
    height: 30%;
    opacity: 1;
  }
  .model3 {
    top: 30%;
    left: 60%;
    height: 30%;
    opacity: 1;
  }
  .foot {
    left: 5%;
    top: 250px;
  }

  .menues {
    bottom: 600px;
    height: 1200px;
  }
  .each {
    display: block;
  }
  .menu,
  .coupon,
  .staff,
  .sty {
    position: static;
    margin-left: 0px;
    margin-bottom: 10px;
    margin-top: 50px;
  }

  .lastsection {
    bottom: 700px;
    padding-top: 300px;
    height: 200px;
  }
  .articles {
    margin-top: 20px;
    display: block;
  }
  .article {
    padding-left: 60px;
    margin-top: 20px;
  }
  .last {
    left: 18%;
  }
}
</style>

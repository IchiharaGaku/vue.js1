<template>
  <div>
    <div id="eyecatch"></div>
    <nav class="menu-content">
      <ul class="menu-content_inner">
        <li>
          <a href="#1" @click="clickSmoothScroll">Style</a>
        </li>
        <li>
          <a href="#2" @click="clickSmoothScroll">Product</a>
        </li>
        <li>
          <a href="#3" @click="clickSmoothScroll">Salon</a>
        </li>
        <li>
          <a href="#5" @click="clickSmoothScroll">Model</a>
        </li>
        <li>
          <a href="#4" @click="clickSmoothScroll">Blog</a>
        </li>
      </ul>
    </nav>

    <div class="hairstyle">
      <div class="hair">
        <h1>
          Hairstyle inspired
          <br />by fassion.
          <br />Hair produced
          <br />by Salon.
        </h1>
      </div>
      <div class="square1">
        <img src="../assets/image/oma-ju2/ダウンロード.jpg" class="blond" />
      </div>
    </div>

    <div class="main-wrap" id="1">
      <div class="photo01">
        <img src="../assets/image/oma-ju2/OIP (5).jpg" class="photo1 sample" />
        <img src="../assets/image/oma-ju2/OIP (4).jpg" class="photo2 sample" />
      </div>
      <div class="content">
        <h1 class="wrap style">
          STYLE
          <span class="number first">01</span>
        </h1>
        <p class="style-top">
          Salonでは髪質・骨格に合わせたカットに、
          <br />ライフスタイルを掛け合わせ、リアルトレンドをご設定します。
        </p>
        <p class="style-bottom">
          また、トレンドや髪質に合わせたセットの仕方、ドライヤー、
          <br />アイロンの使い方など役立つ知識も提供しています。
        </p>
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

    <div class="main2" id="2">
      <div class="product">
        <div class="container">
          <h1 class="wrap produ">
            PRODUCT
            <span class="number second">02</span>
          </h1>
          <p class="protop">
            Salonが目指したのは、性別、年代に関わらずすべて
            <br />の人が安心して利用できるプロダクトです。
          </p>
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
      <img src="../assets/image/oma-ju2/9870695814_6b361f2826_z-1.jpg" class="shampoo" />
    </div>

    <div class="main3" id="3">
      <div class="salon-wrap">
        <h1 class="wrap sal">
          SALON
          <span class="number third">03</span>
        </h1>
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
            <img src="../assets/image/oma-ju2/OIP (8).jpg" class="room1" />
            <img src="../assets/image/oma-ju2/OIP (10).jpg" class="room2" id="5" />
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
          <img src="../assets/image/oma-ju2/OIP (2).jpg" class="model1" />
          <div class="model-bottom">
            <img src="../assets/image/oma-ju2/OIP (13).jpg" class="model2" />
            <img src="../assets/image/oma-ju2/ダウンロード (1).jpg" class="model3" />
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

    <div class="lastsection" id="4">
      <h2 class="blog">BLOG</h2>
      <div class="articles">
        <div class="article">
          <a href class="js-modal-open">
            <img src="../assets/image/oma-ju2/ダウンロード (2).jpg" class="cake" />
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
  methods: {
    clickSmoothScroll() {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector("#1"), 700, null, null, "y"),
        this.$SmoothScroll(document.querySelector("#2"), 700, null, null, "y"),
        this.$SmoothScroll(document.querySelector("#3"), 700, null, null, "y"),
        this.$SmoothScroll(document.querySelector("#4"), 7000, null, null, "y"),
        this.$SmoothScroll(document.querySelector("#5"), 700, null, null, "y");
    }
  }
};
</script>

<style scoped>
#eyecatch {
  background-image: url(../assets/image/oma-ju2/OIP.jpg);
  background-size: cover;
  background-position: center;
  height: 600px;
  position: relative;
  top: 100px;
}
.menu-content {
  display: none;
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
  position: relative;
  bottom: 800px;
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
  padding: 30px 0;
  width: 10px;
  height: 30px;
  position: relative;
  bottom: 230px;
  left: 20px;
  box-shadow: none;
  height: 40px;
  transform: rotate(-90deg);
}
.main3 {
  margin: 0 auto;
  position: relative;
  top: -400px;
}
.sal {
  position: relative;
  left: 100%;
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
  position: relative;
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
  height: 60%;
  position: relative;
  top: -320px;
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
  top: 200px;
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
    margin-top: 800px;
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
  .photo1,
  .photo2 {
    top: 0px;
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
    bottom: 600px;
  }
  .style-bottom {
    padding-top: 40px;
  }
  .top {
    left: 60%;
    bottom: 500px;
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
  .main3 {
    height: 750px;
  }
  .sal {
    left: 10%;
    margin-top: 80px;
  }
  .third {
    left: 40%;
    bottom: 180px;
  }
  .text {
    bottom: 400px;
    left: 30%;
    font-size: 30px;
  }
  .frame {
    top: 450px;
  }
  .fontmodel {
    font-size: 120px;
    top: 0px;
    left: 20px;
  }
  .model1 {
    top: -290px;
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
  .hair {
    font-size: 30px;
  }
  .square1 {
    width: 80%;
    margin-top: 500px;
  }
  .style {
    font-size: 70px;
    left: -100%;
    bottom: 650px;
    transition: all 1s;
  }
  .style.stylein {
    left: -2%;
  }
  .first {
    font-size: 150px;
  }
  .photo1,
  .photo2 {
    top: -200px;
  }
  .style-top,
  .style-bottom {
    bottom: 650px;
    opacity: 0;
    transition: all 1s;
  }
  .fadeon {
    opacity: 1;
  }
  .top {
    left: 30%;
    bottom: 600px;
  }

  .main2 {
    margin: 0;
  }
  .product {
    width: 100%;
    height: 800px;
  }
  .produ {
    font-size: 70px;
    font-weight: bold;
    left: 2%;
  }
  .second {
    font-size: 150px;
    left: 30%;
    top: 10px;
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
  }
  .shampoo {
    display: none;
  }
  .store {
    left: 10px;
    width: 350px;
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
    left: -10%;
  }
  .model::before {
    transform: rotate(3deg);
    height: 600px;
  }
  .model::after {
    height: 200px;
  }
  .fontmodel {
    font-size: 40px;
    top: -120px;
  }
  .model1 {
    width: 55%;
    height: 40%;
    left: 220px;
    top: -215px;
  }
  .model2 {
    width: 50%;
    top: 17%;
    left: 10%;
    height: 18%;
  }
  .model3 {
    top: 14%;
    left: 60%;
    height: 18%;
  }
  .foot {
    left: 5%;
    top: 30px;
  }

  .menues {
    bottom: 600px;
    height: 1100px;
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
  }

  .lastsection {
    bottom: 700px;
    height: 300px;
  }
  .articles {
    display: block;
  }
  .article {
    padding-left: 60px;
  }
  .last {
    left: 18%;
  }
}
</style>

<template>
  <div>
    <div id="head"></div>
    <header>
      <div class="flex between">
        <h1 class="header-logo">Salon</h1>
        <nav class="header-nav">
          <ul>
            <li class="a"><a href="#one">Style</a></li>
            <li><a href="#two">Product</a></li>
            <li><a href="#three">Salon</a></li>
            <li><a href="#four">Blog</a></li>
          </ul>
        </nav>
        <div id="app">
          <div
            id="hamburger"
            @click="naviOpen"
            :class="{ 'is-active': active }"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
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
      <div id="top-btn" @click="clickTopScroll">↑</div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      navi: false,
      slidein: false,
    };
  },
  methods: {
    clickTopScroll() {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector("#head"), 700, null, null, "y");
    },
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
      this.navi = !this.navi;
      this.slidein = !this.slidein;
    },
    navHandler: function() {
      this.clickSmoothScroll;
      this.naviOpen;
    },
  },
};
</script>

<style scoped>
header {
  margin: 0 auto;
  height: 120px;
  position: fixed;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.9);
}
header.transform {
  background-color: rgba(0, 0, 0, 0.3);
  height: 95px;
}

.flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.header-logo {
  margin-left: 40px;
  margin-right: 790px;
  padding: 20px 0;
  color: #dedede;
  font-size: 70px;
}
.header-nav ul {
  display: flex;
}
.header-nav li {
  margin: 30px 0px;
  font-size: 25px;
  border-right: 2px solid #dedede;
  padding: 20px;
}
.header-nav li:last-of-type {
  border-right: none;
  letter-spacing: 2px;
}
.header-nav a {
  display: inline-block;
  text-decoration: none;
  color: #dedede;
}
#top-btn {
  background-color: #332930;
  color: #b576ad;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  position: fixed;
  font-size: 30px;
  padding: auto 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}
.menu-content {
  display: none;
}

@media screen and (max-width: 768px) {
  * {
    margin: 0;
    width: 100%;
  }

  header {
    position: static;
  }
  .header-nav {
    display: none;
  }
  .a {
    margin-left: 0;
  }
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
    display: block;
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
}
@media screen and (max-width: 480px) {
  header {
    width: 100%;
  }
  .header-logo {
    margin-left: 10px;
    margin-right: 0px;
  }
}
</style>

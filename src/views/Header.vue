<template>
  <header id="top">
    <div class="flex between">
      <h1 class="header-logo">Salon</h1>
      <nav class="header-nav">
        <ul>
          <li class="a">
            <a href="#1" @click="clickSmoothScroll">Style</a>
          </li>
          <li>
            <a href="#2" @click="clickSmoothScroll">Product</a>
          </li>
          <li>
            <a href="#3" @click="clickSmoothScroll">Salon</a>
          </li>
          <li>
            <a href="#4" @click="clickSmoothScroll">Blog</a>
          </li>
        </ul>
      </nav>
      <div id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="top-btn" @click="clickTopScroll">↑</div>
  </header>
</template>

<script>
export default {
  methods: {
    clickTopScroll() {
      debugger;
      event.preventDefault();
      this.$SmoothScroll(document.querySelector("#top"), 700, null, null, "y");
    },
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
@media screen and (max-width: 768px) {
  * {
    margin: 0;
    width: 100%;
  }
  #hamburger.active span:nth-of-type(1) {
    top: 20px;
    transform: rotate(45deg);
  }
  #hamburger.active span:nth-of-type(2) {
    opacity: 0;
  }
  #hamburger.active span:nth-of-type(3) {
    top: 20px;
    transform: rotate(-45deg);
  }
  #hamuburger,
  .menu-content {
    display: block;
  }
  .menu-content,
  .menu-title {
    margin: 40px, 20px;
    font-size: 2.2rem;
    color: #332930;
    text-align: left;
    font-weight: bold;
  }
  .menu-content {
    margin-top: 150px;
    width: calc(100% - 80px);
    height: 100%;
    text-align: center;
    transition: 1.2s;
    position: fixed;
    top: 0;
    right: calc(-100% - 80px);
    background-color: #fff;
    color: #332930;
    opacity: 0.8;
    box-shadow: -80px 0 rgba(39, 37, 24, 0.6) inset;
    z-index: 100;
  }

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
  .menu-content.open {
    right: 0;
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
  header {
    position: static;
  }
  .header-nav {
    display: none;
  }
  .a {
    margin-left: 0;
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
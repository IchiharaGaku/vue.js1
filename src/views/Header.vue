<template>
  <div>
    <div id="head"></div>
    <header>
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
      </div>
      <div id="top-btn" @click="clickTopScroll">↑</div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    clickTopScroll() {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector("#head"), 700, null, null, "y");
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
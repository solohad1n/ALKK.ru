<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item" v-for="(item, index) in navItems" :key="item">
        <a class="nav__link" href="#">
          {{ item }}
        </a>
        <span v-if="index !== navItems.length -1">/</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: ["Акции", "О компании", "Контакты"],
    };
  },
};
</script>

<style>
.nav__list {
  display: flex;
}

.nav__link + span {
  margin-right: 25px;
  margin-left: 25px;
}

.nav__link,
.nav__link + span {
  display: inline-block;
  font-family: "Fira Sans Extra Condensed";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #333333;
  text-decoration: none;
}
.nav__item:first-child .nav__link {
  margin-left: 0;
}
@media (max-width: 756px) {
  .nav {
    display: none;
  }
}
</style>
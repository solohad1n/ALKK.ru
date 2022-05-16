<template>
  <section class="portfolio">
    <div class="container">
      <TagH className="portfolio__title" type="h2">Н2 - ПОРТФОЛИО САЙТОВ</TagH>
      <div class="portfolio__row">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>
  </section>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import Item from "./Item.vue";
export default {
  components: { Item, TagH },
};
</script>

<style>
.portfolio__title {
  margin: 30px 0 45px;
}
.portfolio-item {
  width: 25%;
  background: #f5f7f9;
  border-radius: 20px;
  padding: 20px 25px;
  text-align: center;
  margin-right: 15px;
}
.portfolio-item:last-child {
  margin-right: 0px;
}
.portfolio__row {
  display: flex;
}
.portfolio__subtitle {
  text-align: left;
}
.portfolio__subtitle h5 {
  text-align: left;
}
</style>
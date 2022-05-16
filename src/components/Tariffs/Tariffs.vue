<template>
  <section class="tariffs">
    <div class="container">
      <TagH className="tariffs__title" type="h2">Тарифы</TagH>
      <div class="tariffs__row">
        <Item
          v-for="color in colors"
          :key="color"
          :style="{ background: color }"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import Item from "./Item.vue";
export default {
  components: { Item, TagH },
  data() {
    return {
      colors: ["#93E7FF", "#FFD773", "#A3A3FF", "#D1CAFF"].sort(
        () => Math.random() - 0.5
      ),
    };
  },
};
</script>

<style>
.tariffs {
  padding: 80px 0;
}
.tariffs__title {
  margin-bottom: 45px;
}
.tariffs-item {
  width: 25%;
  background: #93e7ff;
  border-radius: 20px;
  padding: 40px 20px 20px;
  text-align: center;
  margin-right: 15px;
}
.tariffs-item:last-child {
    margin-right: 0px;
}
.tariffs-item img {
  margin: 30px 0 40px;
}
.tariffs-item__price {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin: 15px 0 25px;
}
.tariffs-item__description {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
}
.tariffs__row {
  display: flex;
}
</style>
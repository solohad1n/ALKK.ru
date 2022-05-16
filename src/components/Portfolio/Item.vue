<template>
  <div class="portfolio-item">
    <img :src="Portfolio1Img" alt="" />
    <div class="portfolio__subtitle">
      <TagH className="portfolio__title" type="h5"
        >Продвижение по позициям</TagH
      >
      <div class="portfolio-item__description">ecutools.ru</div>
    </div>
  </div>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import Portfolio1Img from "@/assets/Portfolio1.png";
export default {
  components: { TagH },
  data() {
    return {
      Portfolio1Img,
    };
  },
};
</script>

<style>
</style>
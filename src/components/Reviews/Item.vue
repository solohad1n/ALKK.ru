<template>
  <div class="reviews-item">
    <img :src="reviewsIcon" />
    <div class="reviews-item__title">
      <TagH type="h5"> Заголовок #1 </TagH>
      <p>Небольшое описание в 2 строчки</p>
    </div>
  </div>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import reviewsIcon from "@/assets/reviews-item-1.svg";
export default {
  components: { TagH },
  data() {
    return {
      reviewsIcon,
    };
  },
};
</script>

<style>
</style>
<template>
  <section class="subtitle">
    <img :src="subtitleIcon" alt="" />
    <TagH className="subtitle__title" type="h1"> Создание сайтов </TagH>
  </section>
</template>

<script>
import subtitleIcon from "@/assets/subtitle.svg";
import TagH from "../TagH/TagH.vue";
export default {
  components: { TagH },
  data() {
    return {
      subtitleIcon,
    };
  },
};
</script>

<style>
.subtitle {
  position: relative;
}
.subtitle img{
  width: 100%;

}
.subtitle__title {
  font-family: Fira Sans Extra Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 100%;
  text-transform: uppercase;
  color: #333333;
  position: absolute;
  top: 35%;
  left: 0;
  width: 100%;
}
</style>
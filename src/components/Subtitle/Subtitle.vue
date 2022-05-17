<template>
  <section class="subtitle">
    <img :src="subtitleIcon" alt="" />
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

</style>
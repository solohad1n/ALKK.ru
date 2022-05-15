<template>
  <main>
    <section class="hero">
      <img class="hero__img" :src="heroImg" alt="Our Work Routine" />
      <TagH className="hero__title" type="h1"> Продвижение сайтов </TagH>
    </section>
  </main>
</template>

<script>
import TagH from '../components/TagH/TagH.vue'
import heroImg from "@/assets/hero.jpg";
export default {
  components: { TagH },
  data() {
    return {
      heroImg,
    };
  },
}
</script>

<style>

main {
  height: 500vh;
}

.hero__img {
  min-height: 358px;
  max-height: 558px;
}
.hero__title {
  margin: 80px 0 45px;
}
.hero img{
  position: relative;
  width: 100%;
  min-height: 200px;
}

</style>
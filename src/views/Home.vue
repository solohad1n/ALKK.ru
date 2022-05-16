<template>
  <main>
    <section class="hero">
      <img class="hero__img" :src="heroImg" alt="Our Work Routine" />
      <TagH className="hero__title" type="h1"> Продвижение сайтов </TagH>
    </section>
    <Calculator/>
    <Rates/>
    <ApplyForm/>
    <Reviews/>
    <Tariffs/>
  </main>
</template>

<script>
import TagH from '../components/TagH/TagH.vue'
import heroImg from "@/assets/hero.jpg";
import Calculator from '../components/Calculator/Calculator.vue';
import Dropdown from '../components/Dropdown/Dropdown.vue';
import Rates from '../components/Rates/Rates.vue';
import ApplyForm from '../components/ApplyForm/ApplyForm.vue';
import Reviews from '../components/Reviews/Reviews.vue';
import Tariffs from '../components/Tariffs/Tariffs.vue';
export default {
  components: { TagH, Calculator, Dropdown, Rates, ApplyForm,Reviews, Tariffs },
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
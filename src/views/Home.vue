<template>
  <main>
    <section class="hero">
      <img class="hero__img" :src="heroImg" alt="Our Work Routine" />
      <TagH className="hero__title" type="h1"> Продвижение сайтов </TagH>
    </section>
    <Calculator />
    <Rates />
    <ApplyForm />
    <Reviews />
    <Tariffs />
    <Portfolio />
  </main>
</template>

<script>
import Calculator from "@/components/Calculator/Calculator.vue";
import Rates from "@/components/Rates/Rates.vue";
import ApplyForm from "../components/ApplyForm/ApplyForm.vue";
import Reviews from "../components/Reviews/Reviews.vue";
import Portfolio from "../components/Portfolio/Portfolio.vue";
import Tariffs from "../components/Tariffs/Tariffs.vue";
import heroImg from "@/assets/hero.jpg";
import TagH from "../components/TagH/TagH.vue";
export default {
  components: {
    Calculator,
    Rates,
    TagH,
    ApplyForm,
    Reviews,
    Tariffs,
    Portfolio,
  },
  data() {
    return {
      heroImg,
    };
  },
};
</script>

<style>
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
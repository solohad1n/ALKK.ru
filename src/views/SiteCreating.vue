<template>
  <main>
      <Subtitle/>
      <TagH className="subtitle__title" type="h1"> Создание сайтов </TagH>
      <Description/>
      <ApplyForm/>
      <Reviews/>
      <Tariffs/>
      <Rates/>
      <Portfolio/>
  </main>
</template>

<script>
import Subtitle from "../components/Subtitle/Subtitle.vue"
import ApplyForm from "../components/ApplyForm/ApplyForm.vue";
import Reviews from "../components/Reviews/Reviews.vue";
import Portfolio from "../components/Portfolio/Portfolio.vue";
import Tariffs from "../components/Tariffs/Tariffs.vue";
import TagH from "../components/TagH/TagH.vue";
import Description from '../components/Description/Description.vue';
export default {
  components: {
    TagH,
    ApplyForm,
    Reviews,
    Tariffs,
    Portfolio,
    Subtitle,
    Description,
  },
};
</script>

<style>
.subtitle__title {
  font-family: Fira Sans Extra Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 100%;
  text-transform: uppercase;
  color: #333333;
  position: absolute;
  top: 25%;
  left: 0;
  width: 100%;
}
</style>
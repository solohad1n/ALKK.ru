<template>
  <main>
      <Subtitle/>
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

</style>
<template>
  <div class="tariffs-item">
    <TagH className="tariffs__title" type="h5">Продвижение по позициям</TagH>
    <img :src="tariffImg" alt="" />
    <div class="tariffs-item__description">
      Продвинем 10 сылок на первые места
    </div>
    <span class="tariffs-item__price">15000 руб</span>
    <Button className="btn-light" text="Оставить заявку" />
  </div>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import tariffImg from "@/assets/tariffs-item-1.png";
import Button from "../Buttons/Buttons.vue";
export default {
  components: { TagH, Button },
  data() {
    return {
      tariffImg,
    };
  },
};
</script>

<style>
</style>
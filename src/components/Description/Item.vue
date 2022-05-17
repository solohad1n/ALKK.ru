<template>
  <div class="description-item">
    <TagH type="h5"> <span>1047</span> </TagH>
    <p>Небольшое описание в 2 строчки</p>
  </div>
</template>

<script>
import TagH from "../TagH/TagH.vue";
export default {
  components: { TagH },
};
</script>

<style>
.description-item {
  border-right: 2px solid #eaecef;
}
.description-item:last-child {
  border: none;
}

.description-item span {
  background: linear-gradient(
    270deg,
    rgba(255, 4, 4, 0.35) 0%,
    rgba(255, 4, 4, 0) 100%
  );
  padding: 0.26px 0px;
  font-family: "Fira Sans Extra Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  color: #333333;
}
.description-item p {
  margin: 12px 0 0 0;
  font-family: "Gilroy";
  font-style: normal;
  line-height: 16px;
  color: #272727;
}
</style>
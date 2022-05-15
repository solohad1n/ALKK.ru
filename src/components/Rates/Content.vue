<template>
  <div class="table__item">
    <TagH className="table__subtitle" type="h5"> {{title}} </TagH>
    <p>{{description}}</p>
  </div>
</template>

<script>
import TagH from "@/components/TagH/TagH.vue";
export default {
  props: ["title","description"],
  components: { TagH },
};
</script>

<style>
.table__subtitle {
  text-align: left;
  margin-bottom: 10px;
}
.table__item {
  padding-bottom: 20px;
  width: 50%;
}
</style>
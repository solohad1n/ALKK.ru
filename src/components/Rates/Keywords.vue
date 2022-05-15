<template>
  <div class="keywords">
    <TagH className="keywords__title" type="h3"> Глубокий анализ </TagH>
    <div class="test">
      <div class="keywords__row" v-for="item in items" :key="item.id">
        <Content :title="item.title" :description="item.description" />
        <Marks :marks="item.marks" />
      </div>
    </div>
  </div>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import Content from "./Content.vue";
import Marks from "./Marks.vue";
export default {
  components: { TagH, Content, Marks },
  props: ["items"],
};
</script>

<style>
.keywords__title {
  padding: 8px 0;
  border-radius: 5px;
  background: linear-gradient(0deg, #77CBFA, #77CBFA), #F4F7FE;
}
.keywords__row {
  display: flex;
  border-bottom: 1px solid #EAECEF;
  margin-bottom: 20px;
}
.keywords__row:first-child .table__item{
  padding-top: 35px;
} 
.keywords__row:last-child{
  border-bottom: none;
}
.keywords__row:last-child .table__item{
  padding-bottom: 35px;
}
.keywords__subtitle {
  text-align: left;
  margin-bottom: 10px;
}
</style>
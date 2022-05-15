<template>
  <div class="table__marks">
    <div class="table__mark" v-for="(mark, i) in marks" :key="i">
      <div v-if="mark === true">
        <img :src="markIcon" />
      </div>
      <div v-else>
        <img :src="markGrayIcon" />
      </div>
    </div>
  </div>
</template>

<script>
import markIcon from "@/assets/mark.svg";
import markGrayIcon from "@/assets/mark-gray.svg";
export default {
  props: ["marks"],
  data() {
    return {
      markIcon,
      markGrayIcon,
    };
  },
};
</script>

<style>
.table__marks {
  display: flex;
  width: 50%;
}
.table__mark {
  width: 25%;
  text-align: center;
  display: flex;
  align-items: center;
}
.table__mark div {
  border-right: 2px solid #EAECEF;
  width: 100%;
}
.table__mark:last-child div{
  border: none;
}
.table__mark div img {
  width: 12px;
  height: 8px;
}
</style>
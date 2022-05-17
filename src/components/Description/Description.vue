<template>
  <section class="description">
    <div class="container">
      <div class="description__row">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
      </div>
    </div>
  </section>
</template>

<script>
import Item from "./Item.vue"
export default {
components: { Item,}
}
</script>

<style>
.description__row {
  display: flex;
  text-align: center;
}
.descriptions-item {
  width: 25%;
  text-align: center;
}
.description{
  padding: 60px;
}
</style>
<template>
  <div class="promote">
    <div class="promote__row">
      <PromoteItem label="1 мес." :items="firstMonth" />
      <PromoteItem label="2 мес." :items="secondMonth" />
      <PromoteItem label="3 мес." :items="thirdMonth" />
    </div>
  </div>
</template>

<script>
import PromoteItem from "./PromoteItem.vue";
export default {
  components: { PromoteItem },
  data() {
    return {
      firstMonth: [
        "Общий аудит сайта",
        "Создание резервной копии сайта",
        "Поиск и устранение дублей сайта",
        "Поиск и удаление битых ссылок",
        `Пропишем тег <link rel="canonical">`,
        "Создадим XML-карту сайта",
      ],
      secondMonth: [
        "Создание резервной копии сайта",
        "Поиск и устранение дублей сайта",
        "Поиск и удаление битых ссылок",
        `Пропишем тег <link rel="canonical">`,
        "Создадим XML-карту сайта",
      ],
      thirdMonth: [
        "Поиск и устранение дублей сайта",
        "Поиск и удаление битых ссылок",
        `Пропишем тег <link rel="canonical">`,
        "Создадим XML-карту сайта",
      ],
    };
  },
};
</script>

<style>
.promote {
  padding: 0 25px;
  margin-right: -20px;
  box-sizing: border-box;
}
.promote__row {
  display: flex;
}
.promote-item {
  width: 33%;
  border-right: 2px solid #f0edea;
  padding-left: 20px;
  box-sizing: border-box;
}
.promote-item:first-child {
  padding-left: 0;
}
.promote-item:nth-child(3n) {
  border-right: none;
}

.promote-item:last-child {
  border-right: none;
}
.promote-item__title {
  margin-bottom: 22px;
}
.promote-list__item {
  position: relative;
  padding-left: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  opacity: 0.9;
  margin-bottom: 20px;
}
.promote-list__item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  background: #ff0404;
  border-radius: 50%;
}
</style>
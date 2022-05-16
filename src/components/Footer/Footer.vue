<template>
  <section class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__logo">
          <img :src="logoIcon" alt="Allk.ru - интернет агенство" />
        </div>
        <div class="footer__promote">
          <FotterItem label="Продвижение сайтов" :items="promote" />
        </div>
        <div class="footer__development">
          <FotterItem label="Создание сайтов" :items="development" />
        </div>
        <div class="footer__advertising">
          <FotterItem label="Контекстная реклама " :items="advertising" />
        </div>
      </div>
      <div class="footer__map">
        <span>с 2021. ALKK</span>
        <span>Карта сайта</span>
      </div>
    </div>
  </section>
</template>
			
			
			
<script>
import logoIcon from "@/assets/Logo-white.svg";
import FotterItem from "../Footer/FooterItems.vue";
export default {
  components: { FotterItem },
  data() {
    return {
      logoIcon,
      promote: ["По позициям", "По трафику"],
      development: ["Визитки", "Каталог"],
      advertising: ["Яндекс Директ", "Google Adwords"],
    };
  },
};
</script>

<style>
.footer {
  background: #333333;
  padding: 80px 0 25px;
}
.footer__row {
  display: flex;
  white-space: nowrap;
}
.footer__logo {
  min-width: 124px;
  min-height: 180px;
  margin-right: 170px;
}
.footer__promote {
  margin-right: 60px;
}
.footer__development {
  margin-right: 60px;
}
.footer__map {
  margin: 30px 0 0 0;
  border-top: 1px solid #666666;
  display: flex;
  justify-content: space-between;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.footer__map span{
    padding-top: 15px;
}
</style>
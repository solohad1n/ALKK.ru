<template>
  <div class="footer-item">
    <TagH className="footer-item__title" type="h5">{{ label }}</TagH>
    <span class="footer__red"
      ><svg
        width="35"
        height="3"
        viewBox="0 0 35 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.116943"
          y1="1.49121"
          x2="34.1169"
          y2="1.49121"
          stroke="#FF0404"
          stroke-width="2"
        />
      </svg>
    </span>
    <ul class="footer-list">
      <li v-for="item in items" :key="item" class="footer-list__item">
        <svg
          width="6"
          height="7"
          viewBox="0 0 6 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.43259 4.55671C5.40434 4.58571 5.29764 4.70971 5.19829 4.81171C4.61574 5.45321 3.09599 6.50321 2.30059 6.82371C2.17979 6.87521 1.87437 6.98421 1.7112 6.99121C1.55484 6.99121 1.40579 6.95521 1.26356 6.88221C1.08626 6.78021 0.944028 6.61971 0.866093 6.43021C0.815922 6.29871 0.737988 5.90521 0.737988 5.89821C0.660053 5.46771 0.617188 4.76821 0.617188 3.99521C0.617188 3.25871 0.660052 2.58771 0.723862 2.15071C0.731167 2.14371 0.809102 1.65471 0.894342 1.48721C1.0507 1.18121 1.35611 0.991211 1.68294 0.991211H1.7112C1.92406 0.998711 2.37169 1.18871 2.37169 1.19571C3.12424 1.51671 4.60889 2.51521 5.20559 3.17871C5.20559 3.17871 5.37364 3.34921 5.44669 3.45571C5.56069 3.60871 5.61719 3.79821 5.61719 3.98771C5.61719 4.19921 5.55339 4.39621 5.43259 4.55671Z"
            fill="white"
          />
        </svg>

        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import TagH from "@/components/TagH/TagH.vue";
export default {
  props: ["items", "label"],
  components: { TagH },
};
</script>

<style>
span.footer__red {
  margin: 0;
  padding: 0;
}
.footer-item__title {
  margin: 0 0 15px 0;
  font-family: "Fira Sans Extra Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
}
.footer-list {
  margin: 20px 0 0 0;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.footer-list__item {
  position: relative;
  margin: 0 0 13px 15px;
  cursor: pointer;
}
.footer-list__item svg {
  position: absolute;
  top: 6px;
  left: -15px;
}
</style>
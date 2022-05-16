<template>
	<div>
		<div class="footer__item">
			<FotterItem label="Продвижение сайтов" :items="promote" />
			<FotterItem label="Создание сайтов" :items="development" />
			<FotterItem label="Контекстная реклама " :items="advertising" />
		</div>
	</div>
</template>

<script>
import FotterItem from "../Footer/FooterItems.vue";
export default {
	components: { FotterItem },
	data() {
		return {
			promote: [
				"По позициям",
				"По трафику",
			],
			development: [
				"Визитки",
				"Каталог",
			],
			advertising: [
				"Яндекс Директ",
				"Google Adwords",
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
.footer__item {
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
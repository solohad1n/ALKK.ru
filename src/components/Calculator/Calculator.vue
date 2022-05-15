<template>
	<section class="calculator container">
		<div class="container">
			<TagH className="calculator__title" type="h2">Калькулятор</TagH>
			<div class="calculator__row calculator__filter">
				<div>
					<Dropdown
						v-for="(dropdown, index) in dropdowns"
						:class="{ active: index === openDropdownIndex }"
						@click="handleDropdownOpen(index)"
						:key="dropdown.label"
						:label="dropdown.label"
						:items="dropdown.items"
					/>
				</div>
				<Checkbox label="Сайт продвигается" name="promote" />
			</div>
			<div class="calculator__row calculator__prices">
				<span class="calculator-price__label">Цена</span>
				<div><span>{{priceValue ? priceValue : 0}}</span> руб./мес.</div>
			</div>
			<Slider @actualValue="priceValue = $event" min="0" max="28000" value="0" step="0"/>
			<div class="calculator__button">
				<Button text="Рассчитать"/>
			</div>
		</div>
		<div class="container">
				<TagH className="calculator__title" type="h3">План продвижения на 3 месяца</TagH>
				<PromoteList />
		</div>
	</section>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import Dropdown from "../Dropdown/Dropdown.vue";
import Checkbox from "../Inputs/Checkbox.vue";
import Slider from "../Inputs/Slider.vue";
import Button from '../Buttons/Buttons.vue';
import PromoteList from './PromoteList.vue';
export default {
	components: { TagH, Dropdown, Checkbox, Slider,Button,PromoteList },
	data() {
		return {
			openDropdownIndex: null,
			priceValue: '',
			dropdowns: [
				{
					label: "Регион",
					items: [
						"Название Один",
						"Название Два",
						"Название Три",
						"Название Четыре",
						"Название Пять",
					],
				},
				{
					label: "Поиск. сист.",
					items: [
						"Вурдалак",
						"Франкенштейн",
						"Название Три",
						"Название Четыре",
						"Название Пять",
					],
				},
				{
					label: "Тематика",
					items: [
						"Аида",
						"Сергей",
						"Марлен",
						"Название Четыре",
						"Название Пять",
					],
				},
			],
		};
	},
	methods: {
		handleDropdownOpen(index) {
			if (this.openDropdownIndex === index) {
				this.openDropdownIndex = null;
			} else {
				this.openDropdownIndex = index;
			}
		},
	},
};
</script>

<style>
.calculator {
	background: linear-gradient(0deg, #ffffff, #ffffff), #f4f7fe;
	box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
	padding: 45px;
}
.calculator__button {
	display: flex;
	justify-content: center;
	margin: 35px 0 45px;
}
.calculator__row {
	display: flex;
	justify-content: space-between;
}
.calculator__prices {
	margin: 45px 0 10px;
	align-items: center;
}
.calculator-price__label {
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	line-height: 150%;
	text-transform: uppercase;
	color: #333333;
}
.calculator__prices {
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 150%;
	color: #333333;
}
.calculator__prices div span {
	font-weight: 700;
}
.calculator__title {
	margin-bottom: 35px;
}
</style>
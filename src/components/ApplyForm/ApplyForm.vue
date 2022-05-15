<template>
  <section class="apply-form">
    <div class="container">
      <TagH className="apply-form__title" type="h2"> Форма заявки </TagH>
      <form class="apply-form__form">
        <div class="apply-form__left">
          <div>
            <input type="text" placeholder="Имя" />
            <input type="tel" placeholder="+ (000) 000 000" />
          </div>
          <div>
            <input type="text" placeholder="Введите данные" />
            <input type="text" placeholder="Введите данные" />
          </div>
        </div>
        <div>
          <Checkbox
            class="apply-form__checkbox"
            name="apply-form"
            label="Нажимая на кнопку, вы соглашаетесь 
с нашей политикой обработки"
          />
          <Button className="btn-primary" text="Оставить заявку" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import TagH from "../TagH/TagH.vue";
import Button from "../Buttons/Buttons.vue";
import Checkbox from "../Inputs/Checkbox.vue";
import Input from "../Inputs/Input.vue";
export default {
  components: { TagH, Button, Checkbox, Input },
};
</script>

<style>
.apply-form__left {
  padding-right: 20px;
}
.apply-form__left div {
  display: flex;
}
input {
  margin-bottom: 20px;
  margin-right: 20px;
  max-width: 314px;
}
input:last-child {
  margin-right: 0;
}
.apply-form {
  padding: 80px 0;
  background: #333333;
}
.apply-form__form button {
  width: 100%;
}
.apply-form__form {
  display: flex;
}
.apply-form__title {
  margin-bottom: 45px;
}
.apply-form__title,
.apply-form .apply-form__checkbox span {
  color: #fff;
}
.apply-form .apply-form__checkbox {
  margin-bottom: 28px;
  display: flex;
}
.apply-form .apply-form__checkbox label::before {
  top: 50%;
  transform: translateY(-50%);
}
.apply-form .apply-form__checkbox span {
  font-size: 14px;
  font-weight: 500;
}
</style>
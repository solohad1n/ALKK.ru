<template>
	<header class="header">
		<div class="container">
			<div class="header__row">
				<Logo />
				<Nav />
				<Contacts />
			</div>
		</div>
		<Services />
	</header>
</template>
<script>
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
import Contacts from "./Contacts.vue";
import Services from "./Services.vue";
export default {
	components: { Logo, Nav, Contacts, Services },
};
</script>
<style>
.header__row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
}
.header .container{
	max-width: 1180px;
}
</style>
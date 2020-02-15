<template>
	<div id="play">
		<div class="columns">
			<div class="column is-8 is-offset-2">
				<router-view></router-view>

				<br/><b-button type="is-info" size="is-medium" icon-left="arrow-left-bold" tag="router-link" to="/" outlined>GO BACK</b-button>
			</div>
		</div>
	</div>
</template>

<script>
//import lvl1 from '@/components/Lvl1.vue'
export default{
name: 'play',
components:{
	//lvl1,

}
}
</script>
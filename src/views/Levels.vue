<template>
<div id="levels">
	<h2 class="title">
		
		&nbsp; Levels
	</h2><br/>
<div class="columns is-mobile">
<div class="column is-three-fifths is-offset-one-fifth">
<div class="columns is-mobile is-5-desktop is-2-mobile is-variable">
<div class="column is-3 is-primary">
	<b-button size="is-large" type="is-info" expanded tag="router-link" to="/play/lvl0">0</b-button>
</div>
<div class="column is-3">
	<b-button size="is-large" type="is-info" expanded tag="router-link" to="/play/lvl1">1</b-button>
</div>
<div class="column is-3">
	<b-button size="is-large" type="is-info" expanded tag="router-link" to="/play/lvl2">2</b-button>
</div>
<div class="column is-3">
	<b-button size="is-large" type="is-info" expanded @click="alert">3</b-button>
</div>
</div>
</div>
</div>
<div class="columns is-mobile">
<div class="column is-three-fifths is-offset-one-fifth">
<div class="columns is-mobile is-5-desktop is-2-mobile  is-variable">
<div class="column is-3 is-primary">
	<b-button size="is-large" type="is-info" expanded @click="alert">4</b-button>
</div>
<div class="column is-3">
	<b-button size="is-large" type="is-info" expanded @click="alert">5</b-button>
</div>
<div class="column is-3">
	<b-button size="is-large" type="is-info" expanded @click="alert">6</b-button>
</div>
<div class="column is-3">
	<b-button size="is-large" type="is-info" expanded @click="alert">7</b-button>
</div>
</div>
</div>
</div>
	<br/><b-button type="is-info" size="is-medium" icon-left="arrow-left-bold" tag="router-link" to="/" outlined>GO BACK</b-button>
</div>
</template>

<script>

export default{
name: 'levels',
components:{},
methods:{
	alert()
	{
		this.$buefy.dialog.alert("I haven't programmed that path yet")
	}
}
}
</script>

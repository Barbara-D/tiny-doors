<template>
	<div id="home">
		<div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">
                <br/>
                
    
                  <b-button type="is-info is-large" icon-left="gamepad-variant" expanded tag="router-link" to="/play/lvl1">PLAY</b-button><br/><br/>
                  <b-button type="is-info is-large" icon-left="eye" expanded outlined tag="router-link" to="/help">HELP</b-button><br/><br/>
                  <b-button type="is-info is-large" icon-left="layers" expanded outlined tag="router-link" to="/levels">LEVELS</b-button><br/>
              </div>
          </div>
      </div>
</template>

<script>

	export default{
		name: 'home',
		components:{
			
		}
	}
</script>




<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
 -->
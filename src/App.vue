<template>
  <div id="app">
    <section class="hero is-black is-bold is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <header class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <router-link class="navbar-item" to="/">
                  <img alt="Vue logo" src="./assets/tiny-doors-logo.png">
              </router-link>
            </div>
            </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <router-view/>
      </div>
  </div>
  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot has-text-centered">
   <p class="is-1">PWA 2019</p>
  </div>
</section>
  </div>
</template>


<script>
 /* import index from '@/components/Index.vue'*/
  export default{
    name: 'app',
    components:{

      
    }
  }
</script>


<style>

</style>

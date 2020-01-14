<template>
	<div id="lvl1">
		<b>LEVEL 1</b><br/>
		<i>{{ msg }} </i><br/><br/>
		<div class="l1-parent">
			<img class="imgl1" src="../assets/l1.png">
			<div :class="{ 'is-active': kos === true }" class="l1-kos hov"
			@click.once="kosM"
			@mouseover="hover=true"
			@mouseleave="hover=false">
			</div>
		</div>

	<div class="columns is-mobile is-1 is-variable">
		<div v-for="n in 8" :key="n" class="column">
			<div class="inventory">
				<div class="image is-square">
					<img :id="n" src="https://bulma.io/images/placeholders/128x128.png">
				</div>
			</div>
		</div>

	</div>


	</div>
</template>

<script>
export default {
  name: "lvl1",
  data() {
    return {
	hover:false,
      kos: false,
      msg: "Look around the room by clicking on objects!",
    };
  },
  methods: {
    kosM() {
      this.kos = !this.kos;
      if (this.kos)
      {
		this.msg="You picked up a crumpled paper ball from the bin!";
		let i1=document.getElementById("1");
		// i1.src="../assets/l1.png";
		i1.src="http://atlas-content-cdn.pixelsquid.com/stock-images/crumpled-paper-n1KArDA-600.jpg";
      }

    }
  }
};
</script>

<style>
.l1-parent {
  position: relative;
}

.imgl1 {
  max-width: 100%;
}

.l1-kos {
  background: rgb(202, 201, 201);
  opacity: 0.3;
  width: 7.5%;
  height: 18%;
  position: absolute;
  left: 50%;
  top: 59%;
  transition: 300ms;
}

.hov
{
	cursor:pointer;
}

.l1-kos.is-active {
  opacity: 0;
}
.inventory{border-radius: 10%; padding: 10%; background:white; text-align: center;}

</style>

<!-- <p v-if=“vrata”>Pokazi ovaj paragraf ako su vrata otvorena</p>
 -->

<!--<template>
	<div class="card">
			<header class="card-header">
				<p class="card-header-title is-right">
					Level 1
				</p>
			</header>
			<div class="mapa-parent">
      {{ kutija }}
      <img class="mapa" src="../assets/l1.png">
      <div :class="{ 'is-active': kutija === true }" @click="openChest" class="mapa-kutija"></div>
    </div>
	<div class="card-image">
				<figure class="image is-16by9 parnt">
					<img src="../assets/l1.png" alt="Level image" class="mapa">
					<div :class="{ 'is-active': kutija === true }" @click="openChest" class="mapa-kutija">
					</div>
				</figure>

			</div> 
			<div class="card-content">
				Click on something in the room.
			</div>
			<footer class="card-footer">
				<span class="card-footer-item">Inventory:</span>
				<a href="#" class="card-footer-item">1</a>
				<a href="#" class="card-footer-item">2</a>
				<a href="#" class="card-footer-item">3</a>
				<a href="#" class="card-footer-item">4</a>
				<a href="#" class="card-footer-item">5</a>
				<a href="#" class="card-footer-item">6</a>
			</footer>
	</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      kutija: false
    };
  },
  methods: {
    openChest() {
      this.kutija = !this.kutija;
    }
  }
};
</script>

<style>
.mapa-parent {
  position: relative;
}

.mapa {
  max-width: 100%;
}

.mapa-kutija {
  background: rgb(202, 201, 201);
  opacity: 1;
  width: 50%;
  height: 50%;
  position: absolute;
  left: 43%;
  top: 38%;
  transition: 300ms;
}

.mapa-kutija.is-active {
  opacity: 0;
}




 <map name="image-map">
    <area target="" alt="doors" title="doors" href="" coords="1207,424,1246,482" shape="rect">
    <area target="" alt="desk-cabinet" title="desk-cabinet" href="" coords="1173,572,1071,444" shape="rect">
    <area target="" alt="drawer1" title="drawer1" href="" coords="753,448,855,487" shape="rect">
    <area target="" alt="drawer2" title="drawer2" href="" coords="854,524,754,489" shape="rect">
    <area target="" alt="drawer3" title="drawer3" href="" coords="853,564,755,528" shape="rect">
    <area target="" alt="desk-books" title="desk-books" href="" coords="754,397,853,427" shape="rect">
    <area target="" alt="laptop" title="laptop" href="" coords="1031,196,1130,240,1113,313,1065,361,964,314,1015,274" shape="poly">
    <area target="" alt="mouse" title="mouse" href="" coords="1127,355,1148,340,1132,328,1115,341,1115,352" shape="poly">
    <area target="" alt="desk-notebook" title="desk-notebook" href="" coords="779,298,837,280,873,318,873,332,816,349,777,312" shape="poly">
    <area target="" alt="pencil" title="pencil" href="" coords="888,293,903,294,900,319,886,331" shape="poly">
    <area target="" alt="wall-map" title="wall-map" href="" coords="404,28,717,217" shape="rect">
    <area target="" alt="bin" title="bin" href="" coords="642,451,670,434,707,436,731,448,736,468,724,545,706,559,678,559,654,549,642,472" shape="poly">
    <area target="" alt="pillows" title="pillows" href="" coords="404,460,454,445,530,417,581,459,585,474,575,480,586,535,572,546,446,544,407,535" shape="poly">
    <area target="" alt="books1" title="books1" href="" coords="53,99,317,191" shape="rect">
    <area target="" alt="books2" title="books2" href="" coords="51,211,318,302" shape="rect">
    <area target="" alt="books3" title="books3" href="" coords="215,328,317,409" shape="rect">
    <area target="" alt="toy-car" title="toy-car" href="" coords="79,393,100,361,111,358,141,363,154,371,185,382,172,401,160,416,142,416,93,404" shape="poly">
    <area target="" alt="box-l" title="box-l" href="" coords="55,440,181,526" shape="rect">
    <area target="" alt="box-r" title="box-r" href="" coords="185,440,314,527" shape="rect">
</map> -->


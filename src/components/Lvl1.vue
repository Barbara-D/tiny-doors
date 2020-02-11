<template>
	<div id="lvl1">
		<b>LEVEL 1</b><br/>
		<i>{{ msg }} </i><br/><br/>
		<div class="l1-parent">
			<img class="imgl1" src="../assets/l1.png">
			<div :class="{ 'is-active': kos === true }" class="l1-kos hov"
			@click="kosM"
			@mouseover="hover=true" @mouseleave="hover=false">
			</div>
      <div :class="{'is-active':lap=== true}" class="l1-lap hov"
      @click="lapM"
      @mouseover="hover=true" @mouseleave="hover=false"
      ></div>
      <div class="l1-car hov" @click="carM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l1-lbox hov" @click="lboxM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l1-rbox hov" @click="rboxM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l1-pil hov" @click="pilM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l1-note hov" @click="noteM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l1-book1 hov" @click="bookM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l1-book2 hov" @click="bookM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l1-book3 hov" @click="bookM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l1-dra hov" @click="draM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div id="l1-map" class="hov" @click="mapM" 
      @mouseover="hover=true" @mouseleave="hover=false">
        <img id="safe" src="https://lh3.googleusercontent.com/proxy/4tbFfnaQUZGC3UTV4XPn7X68D3I6L9tHgWqp5UZXA2jYpTDbYIgxkw7WvloNWkMoiPLr4VzEYwYtwxcnZmKD_WkE1lFvD7wpl1amQgYRjQ" width="50%"/>
      </div>
      <div class="l1-loc hov" @click="locM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
		</div>

	<div class="columns is-mobile is-1 is-variable">
		<div v-for="n in 8" :key="n" class="column">
			<div class="inventory">
				<div class="image is-square">
					<img :id="n" src="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg" @click="inventory(n)">
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
      box: false,
      img1: false,
      lap:false,
      scis: false,
      note: false,
      dra: false,
      pilopen: false,
      map:true,
      safe:false,
      loc:true,
      msg: "Look around the room by clicking on objects!",
    };
  },
  methods: {
    kosM() 
    {
      if (!this.kos)
      {
        this.kos=true;
        this.msg="You picked up a crumpled paper ball from the bin!";
        let i1=document.getElementById("1");
        // i1.src="../assets/l1.png";
        i1.src="http://atlas-content-cdn.pixelsquid.com/stock-images/crumpled-paper-n1KArDA-600.jpg";
        this.img1=true;
      }
      else
      {
        this.msg="Nothing but trash in the bin!";
      }
    },

    lapM()
    {
      if (!this.lap)
    {
        this.$buefy.dialog.prompt({
                    message: `Input password:`,
                    inputAttrs: {
                        placeholder: 'e.g. pass123',
                        maxlength: 7
                    },
                    trapFocus: true,
                    onConfirm: (value) => 
                    {
                      if(value=="T1D00r5")
                      {
                        this.$buefy.toast.open("Computer unlocked!");
                        this.lap=!this.lap;
                        this.msg="There is an open document that says: 'Hint for the safe pin: BOOKS'";
                        //other stuff that happens w laptop
                      }
                      else
                        this.$buefy.toast.open("Wrong password!");
                      }

                    //this.$buefy.toast.open(`Your name is: ${value}`)
                })}
        else
        {
          this.msg="There is an open document that says: 'Hint for the safe pin: BOOKS'";
        }
      },

    carM()
    {
      this.msg="It's just a toy car!"
    },
    lboxM()
    {
      this.msg="There's nothing in the left box."
    },
    bookM()
    {
      this.msg="I wonder how many books are there in this room..."
    },
    rboxM()
    {
      if (!this.box)
      {
        this.box=true;
        this.msg="You found some scissors in the box!";
        let i2=document.getElementById("2");
        i2.src="https://atlas-content-cdn.pixelsquid.com/stock-images/black-scissor-scissors-v10Jqa2-600.jpg";
      }
      else
      {
        this.msg="There is nothing else in the box!";
      }
    },    
    pilM()
    {
      if(this.pilopen)
      {
        this.msg="Nothing else there."
      }
      else if (!this.scis){
        this.msg="There is nothing under the pillows, but it seems like there might be something inside.";}
      else if (this.scis){
        this.msg="You found some keys in the pillow.";
        let i6=document.getElementById("6");
        i6.src="https://static.turbosquid.com/Preview/2014/05/26__05_08_43/keyB.jpg4c718207-b50f-4603-91e5-3e79cebfb976Larger.jpg";
        this.pilopen=true;
      }
    },
    noteM()
    {
      if (!this.note)
      {
        this.note=true;
        this.msg="You found a piece of paper.";
        let i3=document.getElementById("3");
        i3.src="https://i.imgur.com/BufeC1I.png";
      }
      else
      {
        this.msg="There's nothing interesting in the book."
      }
    },
    draM()
    {
      if(!this.dra)
      {
        this.dra=true;
        this.msg="You found a round metal piece. Part of a key perhaps?"
        let i4=document.getElementById("4");
        i4.src="https://i.imgur.com/HC4orAK.jpg";
        //i4.src="https://i.imgur.com/kKmsElI.jpg";<fullkey
      }
      else
      {
        this.msg="There's nothing else in the drawers."
      }
    },
    mapM()
    {
      if (this.map)
      {
        document.getElementById("safe").style.visibility="visible";
        document.getElementById("l1-map").style.opacity="1";
        this.msg="There is a safe behind the map!";
        this.map=false;
       }
       else if (!this.safe)
       {
          this.$buefy.dialog.prompt({
          message: `PIN:`,
                    inputAttrs: {
                      type: 'number',
                        placeholder: 'e.g. 89',
                        maxlength: 2},
                    trapFocus: true,
                    onConfirm: (value) => 
                    {
                      if(value=="32")
                      {
                        this.$buefy.toast.open("Safe unlocked!");
                        this.safe=true;
                        this.msg="You have unlocked the safe and found a metal piece!";
                        let i5=document.getElementById("5");
                        i5.src="https://i.imgur.com/xN0uNmI.jpg";
                      }
                      else
                        this.$buefy.toast.open("Wrong PIN!");
                    }
       })}else this.msg="The safe is empty!";
      },
      locM()
      {
        if (document.getElementById(6).classList.contains("inv-sel"))
        {
          this.msg="You have unlocked the drawer and picked up some superglue.";
          this.loc=false;
          document.getElementById("7").src="https://www.dhresource.com/600x600/f2/albu/g6/M01/FB/91/rBVaR1qZXByAFDH_AAOomdMGQfw669.jpg";
        }
        else if (this.loc)
        {
          this.msg="This desk drawer is locked. Try finding a key.";
        }
        else this.msg="Nothing else inside."
      },

    //pw=T1D00r5
    inventory(n)
    {
      if (n==1 && this.img1)
      {
        this.msg="The writing on the paper says: 'T1D0'...but the rest of it seems to be torn off.";
      }
      else if (n==2 && this.box)
      {
        this.msg="You have selected the scissors. Click on where you want to use them in the scene.";
        let current=document.getElementById(n);
        current.classList.toggle("inv-sel");
        document.getElementById(4).classList.remove("inv-sel");        
        if (!current.classList.contains("inv-sel"))
        {
          this.msg="";
          this.scis=false;
        }
        else this.scis=true;
      }
      else if (n==3 && this.note)
      {
        this.msg="'0r5' is written on this scrap piece of paper. What could it mean?";
      }
      else if (n==4 && this.dra)
      {
        this.msg="You have selected the metal part."
        let current=document.getElementById(n);
        current.classList.toggle("inv-sel");
        document.getElementById(2).classList.remove("inv-sel");
        document.getElementById(5).classList.remove("inv-sel");
        document.getElementById(6).classList.remove("inv-sel");
        if (!current.classList.contains("inv-sel"))
        {
          this.msg="";
        }
      }
      else if (n==6 && this.pilopen)
      {
        this.msg="You have selected the keys. Try unlocking something."
        let current=document.getElementById(n);
        current.classList.toggle("inv-sel");
        document.getElementById(2).classList.remove("inv-sel");
        document.getElementById(4).classList.remove("inv-sel");
        document.getElementById(5).classList.remove("inv-sel");
        if (!current.classList.contains("inv-sel"))
        {
          this.msg="";
        }
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
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 7.5%; height: 18%;
  position: absolute; left: 50%; top: 59%;
  transition: 300ms;
}
.l1-lap
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 11%; height: 19%;
  position: absolute; left: 77%; top: 28%;
  transition: 300ms;
}

.l1-car
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 9%; height: 9%;
  position: absolute; left: 6%; top: 48%;
  transition: 300ms;
}
.l1-lbox
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 10%; height: 13%;
  position: absolute; left: 4%; top: 60%;
  transition: 300ms;
}
.l1-rbox
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 10%; height: 13%;
  position: absolute; left: 15%; top: 60%;
  transition: 300ms;
}
.l1-pil
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 13%; height: 15%;
  position: absolute; left: 32%; top: 60%;
  transition: 300ms;
}
.l1-note
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 7%; height: 10%;
  position: absolute; left: 61%; top: 38%;
  transition: 300ms;
}
.l1-book1
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 21%; height: 13%;
  position: absolute; left: 4%; top: 13%;
  transition: 300ms;
}
.l1-book2
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 21%; height: 13%;
  position: absolute; left: 4%; top: 28%;
  transition: 300ms;
}
.l1-book3
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 8%; height: 11%;
  position: absolute; left: 17%; top: 45%;
  transition: 300ms;
}
.l1-dra
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 7.5%; height: 15%;
  position: absolute; left: 59%; top: 62%;
  transition: 300ms;
}
.l1-loc
{
  background: rgb(202, 201, 201); opacity: 0.3;
  width: 7.5%; height: 15%;
  position: absolute; left: 84%; top: 62%;
  transition: 300ms;
}
#l1-map
{
  background: rgb(248, 224, 188); opacity: 0.3;
  width: 26%; height: 26%;
  position: absolute; left: 31%; top: 4%;
  transition: 1000ms;
}
#safe{padding-top: 5%; visibility: hidden;}

.hov{cursor:pointer;}
.l1-kos.is-active {opacity: 0;}

.inventory{border-radius: 10%; padding: 10%; background:white; text-align: center;}

.inv-sel
{
  border:2px solid lightblue;
}

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


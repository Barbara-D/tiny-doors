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
      <div class="l1-door hov" @click="doorM" 
      @mouseover="hover=true" @mouseleave="hover=false"
      ><b-button :class="{'is-active':door=== true}" class="next2" type="is-info" tag="router-link" to="/play/lvl2">2</b-button></div>
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
      glue: false,
      door:false,
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
        this.msg="You found a tiny metal piece. Part of a key perhaps?"
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
                        this.msg="You have unlocked the safe and found a tiny metal piece!";
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
          this.msg="This desk drawer is locked. Try looking for a key.";
        }
        else this.msg="Nothing else inside."
      },
    doorM()
    {
      if (document.getElementById("8").classList.contains("inv-sel"))
      {
          this.$buefy.toast.open("Doors unlocked!");
          this.msg="Click on the door again to get to level 2."
          this.door=true;
      }
      else this.msg="This seems to be the exit, but it's locked.";
    },

    //pw=T1D00r5
    inventory(n)
    {
      //toggling the selected item class
      let current=document.getElementById(n);
      if (n!=4 && n!=5) this.glue=false;
      for (let i=1; i<=8; i++)
      {
        let temp=document.getElementById(i);
        if (i!=n && temp.src!="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg") 
          temp.classList.remove("inv-sel");
        else if (i==n && temp.src!="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg")
          current.classList.toggle("inv-sel");
      }
      
      if (n==1 && this.img1)
      {
        this.msg="The writing on the paper says: 'T1D0'...but the rest of it seems to be torn off.";
      }
      else if (n==2 && this.box)
      {
        this.msg="You have selected the scissors. Click on where you want to use them in the scene.";      
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
        this.msg="You have selected the tiny metal part, but it is useless right now."
        if (!current.classList.contains("inv-sel"))
        {
          this.msg="";
        }
        else if (this.glue)
        {
          document.getElementById("8").src="https://i.imgur.com/kKmsElI.jpg";
          document.getElementById("5").src="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg";
          document.getElementById("4").src="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg";
          this.msg="You have successfully glued the key pieces together.";
          current.classList.remove("inv-sel");
        }
      }
      else if (n==5 && this.safe)
      {
        this.msg="If you tried using this piece on its own it would just get stuck in the lock."
        if (!current.classList.contains("inv-sel"))
        {
          this.msg="";
        }
        else if (this.glue)
        {
          document.getElementById("8").src="https://i.imgur.com/kKmsElI.jpg";
          document.getElementById("5").src="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg";
          document.getElementById("4").src="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg";
          this.msg="You have successfully glued the key pieces together.";
          current.classList.remove("inv-sel");
        }
      }
      else if (n==6 && this.pilopen)
      {
        this.msg="You have selected the keys. Try unlocking something."
        if (!current.classList.contains("inv-sel"))
        {
          this.msg="";
        }
      }
      else if (n==7 && !this.loc)
      {
        this.msg="You have selected the glue. Click on something to use it.";
        this.glue=true;
        if (!current.classList.contains("inv-sel"))
        {
          this.msg="";
          this.glue=false;
        }
      }
      else if (n==8 && current.src!="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg")
      {
        this.msg="You have selected the tiny key.";
      }
      if (!current.classList.contains("inv-sel")) this.msg="";
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
  background: rgb(202, 201, 201); opacity: 0;
  width: 7.5%; height: 18%;
  position: absolute; left: 50%; top: 59%;
  transition: 300ms;
}
.l1-lap
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 11%; height: 19%;
  position: absolute; left: 77%; top: 28%;
  transition: 300ms;
}

.l1-car
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 9%; height: 9%;
  position: absolute; left: 6%; top: 48%;
  transition: 300ms;
}
.l1-lbox
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 10%; height: 13%;
  position: absolute; left: 4%; top: 60%;
  transition: 300ms;
}
.l1-rbox
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 10%; height: 13%;
  position: absolute; left: 15%; top: 60%;
  transition: 300ms;
}
.l1-pil
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 13%; height: 15%;
  position: absolute; left: 32%; top: 60%;
  transition: 300ms;
}
.l1-note
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 7%; height: 10%;
  position: absolute; left: 61%; top: 38%;
  transition: 300ms;
}
.l1-book1
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 21%; height: 13%;
  position: absolute; left: 4%; top: 13%;
  transition: 300ms;
}
.l1-book2
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 21%; height: 13%;
  position: absolute; left: 4%; top: 28%;
  transition: 300ms;
}
.l1-book3
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 8%; height: 11%;
  position: absolute; left: 17%; top: 45%;
  transition: 300ms;
}
.l1-dra
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 7.5%; height: 15%;
  position: absolute; left: 59%; top: 62%;
  transition: 300ms;
}
.l1-loc
{
  background: rgb(202, 201, 201); opacity: 0;
  width: 7.5%; height: 15%;
  position: absolute; left: 84%; top: 62%;
  transition: 300ms;
}
.l1-door
{
  background: rgb(202, 201, 201); opacity: 1;
  width: 4%; height: 8%;
  position: absolute; left: 93.5%; top: 57%;
  transition: 300ms;
}
#l1-map
{
  background: rgb(248, 224, 188); opacity: 0;
  width: 26%; height: 26%;
  position: absolute; left: 31%; top: 4%;
  transition: 1000ms;
}
#safe{padding-top: 5%; visibility: hidden;}

.hov{cursor:pointer;}
.l1-kos.is-active {opacity: 0;}
.next2{visibility: hidden;}
.next2.is-active{visibility: visible;   transition: 1000ms;
}

.inventory{border-radius: 10%; padding: 10%; background:white; text-align: center;}

.inv-sel
{
  border:2px solid lightblue;
}

</style>


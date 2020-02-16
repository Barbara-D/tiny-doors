<template>
	<div id="lvl0">
		<b>TUTORIAL</b><br/>
		<i>{{ msg }} </i><br/><br/>
		<div class="l0-parent">
			<img class="imgl0" src="../assets/l0.png">
      <div class="l0-img hov" @click="imgM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l0-tab hov" @click="tabM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l0-pla hov" @click="plaM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div class="l0-pil hov" @click="pilM" 
      @mouseover="hover=true" @mouseleave="hover=false"></div>
      <div id="l0-tv" class="hov" @click="tvM" 
      @mouseover="hover=true" @mouseleave="hover=false">
        <img id="tvpw" src="../assets/pw.png" width="100%"/>
      </div>
      <div class="l0-door hov" @click="doorM" 
      @mouseover="hover=true" @mouseleave="hover=false">
        <b-button :class="{'is-active':door=== true}" class="next1" type="is-info" tag="router-link" to="/play/lvl1">1</b-button>
      </div>


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
  name: "lvl0",
  data() {
    return {
      hover:false,
      pla: false,
      pil:false,
      rem:false,
      bat: false,
      tvr:false,
      door:false,
      //vars

      msg: "Look around the room by clicking on objects!",
    };
  },
  methods: {
    //functions
    imgM() 
    {
      this.msg="It's just an abstract painting. Try looking elsewhere.";
    },    
    tabM() 
    {
      this.msg="There's some coffee. Try looking elsewhere.";
    },
    plaM() 
    {
      if (!this.pla)
      {
        this.pla=true;      
        this.msg="You found some batteries in the plant. They have been placed in your inventory.";
        let i1=document.getElementById("1");
        i1.src="https://static.turbosquid.com/Preview/2014/07/04__07_48_53/Duracell%20AA%20Battery_main_400.jpg3e378d10-26e5-4561-9855-37dab17ab652Large.jpg";
      }
      else
      {
        this.msg="Nothing interesting in the plant! Try using those batteries you found.";
      }
    },
    pilM() 
    {
      if (!this.pil)
      {
        this.pil=true;      
        this.msg="You found a remote under the pillows. It has been placed in your inventory.";
        let i2=document.getElementById("2");
        i2.src="https://cgaxisimg.ams3.cdn.digitaloceanspaces.com/2014/09/cgaxis_models_41_02a.jpg";
      }
      else
      {
        this.msg="Nothing under the pillows! Try finding some batteries for the remote.";
      }
    },

    tvM()
    {
      if (!this.tvr)
      {
        this.msg="The TV isn't working. Try looking for a remote and batteries.";
      }
      else if (document.getElementById("2").classList.contains("inv-sel"))
      {
        this.msg="You have turned the TV on.";
        document.getElementById("l0-tv").style.opacity="1";

      }

    },
    doorM()
    {
         if (!this.door)
       {
          this.$buefy.dialog.prompt({
          message: `Enter a pin to unlock the doors:`,
                    inputAttrs: {
                      type: 'number',
                        placeholder: 'e.g. 1234',
                        maxlength: 4},
                    trapFocus: true,
                    onConfirm: (value) => 
                    {
                      if(value=="1702")
                      {
                        this.$buefy.toast.open("Doors unlocked!");
                        this.door=true;
                        this.msg="Click on the doors again to get to the next level!";
                      }
                      else
                        this.$buefy.toast.open("Wrong PIN!");
                    }
       })}
          else this.msg="Next level!";

    },

    inventory(n)
    {
      //toggling the selected item class
      let current=document.getElementById(n);
      if (n!=2) this.bat=false;
      for (let i=1; i<=8; i++)
      {
        let temp=document.getElementById(i);
        if (i!=n && temp.src!="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg") 
          temp.classList.remove("inv-sel");
        else if (i==n && temp.src!="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg")
          current.classList.toggle("inv-sel");
      }
      
      if (n==1 && this.pla)
      {
        if (this.pil)
          this.msg="You have selected the batteries. Click on the remote in your inventory to use them.";
        else
          this.msg="You have selected the batteries. Try finding something to use them with."
        if (!current.classList.contains("inv-sel"))
        {
          this.msg="";
          this.bat=false;
        }
        else this.bat=true;
      }
      else if (n==2 && this.pil)
      {
        if (!this.bat)
          this.msg="You have selected the remote, but its missing some batteries.";   
          else{
            this.msg="The remote is working now. Try using it on the tv.";
            document.getElementById("1").src="https://newpathways.org/wp-content/uploads/2015/02/48164948_l.jpg";
            this.tvr=true;
          }   
        if (!current.classList.contains("inv-sel"))
        {
          this.msg="";
          this.rem=false;
        }
        else this.rem=true;
      }
      }
  }
};
</script>

<style>
.l0-parent {
  position: relative;
}

.imgl0 {
  max-width: 100%;
}

.l0-img {
  background: rgb(202, 201, 201); opacity: 0;
  width: 17%; height: 32%;
  position: absolute; left: 14%; top: 0%;
  transition: 300ms;
}
.l0-tab {
  background: rgb(202, 201, 201); opacity: 0;
  width: 17%; height: 20%;
  position: absolute; left: 24%; top: 56%;
  transition: 300ms;
}
.l0-pla {
  background: rgb(202, 201, 201); opacity: 0;
  width: 7%; height: 16%;
  position: absolute; left: 47%; top: 50%;
  transition: 300ms;
}
.l0-pil {
  background: rgb(202, 201, 201); opacity: 0;
  width: 25%; height: 20%;
  position: absolute; left: 66%; top: 72%;
  transition: 300ms;
}
.l0-door {
  background: rgb(202, 201, 201); opacity: 0;
  width: 3%; height: 9%;
  position: absolute; left: 76%; top: 37%;
  transition: 300ms;
}
#l0-tv {
  background: rgb(202, 201, 201); opacity: 0;
  width: 29.5%; height: 24%;
  position: absolute; left: 62%; top: 5%;
  transition: 300ms;
  overflow: hidden;
  border-radius: 5px;
}
.tvpw
{
}
.hov{cursor:pointer;}
.l1-kos.is-active {opacity: 0;}

.inventory{border-radius: 10%; padding: 10%; background:white; text-align: center;}

.inv-sel
{
  border:2px solid lightblue;
}
.next1{visibility: hidden;}
.next1.is-active{visibility: visible; opacity:0;}

</style>


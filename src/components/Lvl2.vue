<template>
	<div id="lvl1">
		<b>LEVEL 2</b><br/>
		<i>{{ msg }} </i><br/><br/>
		<div class="l2-parent">
      <!--replace the placeholder level-->
			<img class="imgl2" src="../assets/lvl2.jpg">
			<div :class="{ 'is-active': kos === true }" class="l1-kos hov"
			@click="kosM"
			@mouseover="hover=true" @mouseleave="hover=false">
			</div>
      <!--boxes-->
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
  name: "lvl2",
  data() {
    return {
      hover:false,
      //vars

      msg: "Look around the room by clicking on objects!",
    };
  },
  methods: {
    //functions
    kosM() 
    {

    },

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
      }
  }
};
</script>

<style>
.l2-parent {
  position: relative;
}

.imgl2 {
  max-width: 100%;
}

.l1-kos {
  background: rgb(202, 201, 201); opacity: 0;
  width: 7.5%; height: 18%;
  position: absolute; left: 50%; top: 59%;
  transition: 300ms;
}
.hov{cursor:pointer;}
.l1-kos.is-active {opacity: 0;}

.inventory{border-radius: 10%; padding: 10%; background:white; text-align: center;}

.inv-sel
{
  border:2px solid lightblue;
}

</style>


<template>
	<div id="play">
		<div class="columns">
  <div class="column is-8 is-offset-2">
		<div class="card">
			<div class="card-image">
				<figure class="image is-16by9">
					<img src="https://bulma.io/images/placeholders/640x360.png" alt="Placeholder image">
				</figure>
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

		<br/><b-button type="is-info" size="is-medium" icon-left="arrow-left-bold" tag="router-link" to="/" outlined>GO BACK</b-button>
		</div>
</div>
	</div>
</template>

<script>

export default{
name: 'play',
components:{

}
}
</script>

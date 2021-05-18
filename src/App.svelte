<script>
	import Header from "./components/Header.svelte";
	import List from "./components/List.svelte";
	import Holdings from "./components/Holdings.svelte";
	import ListHoldings from "./components/ListHoldings.svelte";
</script>

<style> 
.container {
	width: 500px;
	background: #009579;
}

:global(.container *) {
	font-family: sans-serif;
}

</style>
<div class="container">
	<Header/>
	<List/>
</div>
<div class="container">
	<Holdings/>
	
</div>	

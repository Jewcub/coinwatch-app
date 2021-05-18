<script> 
    import { onMount } from "svelte";
    import { TodoApi } from "../TodoApi";
    import { items } from "../stores";

    function handleNewItem(e) {}


    function handleUpdate(e)  {}



    function handleDelete(e)  {}


    onMount(async  () => {
        $items = await TodoApi.getall
    });
</script>
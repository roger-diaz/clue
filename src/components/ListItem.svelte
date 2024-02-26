<script>
  import App from "../App.svelte";

    export let value;
    export let width = "12";
    export let height = "12";
    export let rounded = true;
    let checked = false;
    $: color = (checked)? "grayscale" : "grayscale-0";
    $: decoration = (checked)? "line-through" : "";
    $: roundedClass = (rounded)? "rounded-full": "";

    function select() {
        checked = !checked
    }
</script>

<button on:click={select} class="w-24 flex flex-col items-center content-center">
    <img class="w-{width} h-{height} border {roundedClass} {color}" src="images/{value.toLowerCase()}.png" alt="" />
    <span class="text-black dark:text-white text-xs text-wrap {decoration}">{value}</span>
</button>

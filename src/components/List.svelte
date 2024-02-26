<script>
  import ListItem from "./ListItem.svelte";
  
  export let title = "Title";
  export let values = [];
  export let width = "12";
  export let height = "12";
  export let rounded = true;
</script>

<div class="flex flex-col m-4">
    <h3 class="font-semibold text-gray-900 dark:text-white">{title}</h3>
    <div class="flex items-center justify-around gap-y-3 flex-wrap">
        {#each values as value}
            <ListItem value={value} height={height} width={width} rounded={rounded}/>
        {/each}
    </div>
</div>
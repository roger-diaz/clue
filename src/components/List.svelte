<script>
  import ListItem from "./ListItem.svelte";

    export let title = "Title";
    export let values = [];
</script>

<div class="flex flex-col m-4">
    <h3 class="font-semibold text-gray-900 dark:text-white">{title}</h3>
    <ul class="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {#each values as value, i (value)}
            <ListItem value={value} index={i} />
        {/each}
    </ul>
</div>
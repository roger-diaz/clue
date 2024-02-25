<script>
    export let type;
    export let value;
    export let index;
    let checked = false;
    $: color = (checked)? "text-blue-600" : "text-gray-900";
    $: darkColor = (checked)? "text-blue-600" : "text-gray-200";
</script>

<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
    <div class="flex items-center ps-3">
        <input id="{type}-{index}" type="checkbox" bind:checked={checked} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:{darkColor} dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
        <label for="{type}-{index}" class="w-full py-3 ms-2 text-sm font-medium {color} dark:{darkColor}">{value}</label>
    </div>
</li>
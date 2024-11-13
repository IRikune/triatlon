<script lang="ts">
    type Value = {
        value: string;
        label?: string;
    };
    export let name;
    export let values: Value[] = [];
</script>

<div>
    <label for={name} class="block text-sm font-medium text-gray-700">
        {name}
    </label>
    <select
        id="HeadlineAct"
        class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
    >
        {#each values as value}
            <option value={value.value}>{value.label || value.value}</option>
        {/each}
    </select>
</div>

<!-- Input.svelte -->
<script>
    export let value;
    export let name;
    export let placeholder;
    export let type;
</script>

<div class="relative">
    <label for={name} class="sr-only ml-10">{name}</label>
    <input
        type="text"
        required
        {name}
        id={name}
        bind:value
        {placeholder}
        class="w-full h-8 pl-2 rounded-md pe-10 sm:text-sm border-2 border-indigo-500 focus:border-indigo-500 focus:ring-indigo-500 my-1"
    />
    <span
        class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500"
    >
        <!-- add icons for each type of input -->
        {#if type === name}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ai ai-Mention"
            >
                <circle cx="12" cy="12" r="4" />
                <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c2.252 0 4.33-.744 6.001-2"
                />
                <path d="M16 8v4c0 1.6 3 3 3s3-2 3-3" />
            </svg>
        {:else if type === id}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ai ai-Hashtag"
            >
                <path d="M10 3L6 21" />
                <path d="M18 3l-4 18" />
                <path d="M4 8h17" />
                <path d="M3 16h17" />
            </svg>
        {/if}
    </span>
</div>

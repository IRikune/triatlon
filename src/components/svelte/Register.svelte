<script lang="ts">
    import toast, { Toaster } from "svelte-french-toast";
    import Input from "./Input.svelte";
    import Table from "./Table.svelte";
    import { fetchDate, fetchParticipants } from "../utils";
    import { municipios } from "../../constants/consts";
    $: name = "";
    $: id = "";
    $: direction = "Selecciona un municipio";
    $: age = "";
    $: date = "";

    function handleSubmit(event: Event) {
        const participant = {
            name,
            id,
            direction,
            age,
            date,
        };
        const response = fetch("https://triatlon-web.deno.dev/participants/", {
            method: "POST",
            body: JSON.stringify(participant),
        });
        toast.success("Registro exitoso");
    }
</script>

<Toaster />

{#await fetchDate()}
    <p>Cargando...</p>
{:then data}
    <p>La fecha actual es: {new Date().toLocaleDateString()}</p>
{:catch error}
    <p class="text-red-500">Error al cargar la fecha: {error.message}</p>
{/await}

<form method="post" on:submit|preventDefault={handleSubmit}>
    <Input bind:value={name} name="name" placeholder="Nombre" type="name" />
    <Input bind:value={id} name="id" placeholder="Cédula" type="id" />
    <input
        class="w-full h-8 pl-2 rounded-md pe-10 sm:text-sm border-2 border-indigo-500 focus:border-indigo-500 focus:ring-indigo-500 my-1"
        type="number"
        bind:value={age}
        name="age"
        placeholder="Edad"
        min="0"
        max="100"
        required
    />
    <div class="flex justify-between">
        <select required name="direction" class="p-2" bind:value={direction}>
            {#each municipios as municipio}
                <option value={municipio.value}>{municipio.label}</option>
            {/each}
            <option selected>Selecciona un municipio</option>
        </select>
        <button
            class="bg-indigo-600 text-white px-4 py-2 rounded-md"
            type="submit"
            >Registrar participante
        </button>
    </div>

    <Table />
</form>

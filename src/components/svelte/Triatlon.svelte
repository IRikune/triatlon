<script lang="ts">
    import toast, { Toaster } from "svelte-french-toast";
    import { Progressbar } from "flowbite-svelte";
    import Table from "./Table.svelte";
    import {
        fetchParticipants,
        calcularDistanciaCaminando,
        calcularDistanciaRecorridaNatacion,
        calcularDistanciaCiclista,
    } from "../utils";
    import { API_URL } from "../../constants/consts";
    $: distances = [];
    $: dateInitial = 0;
    let started;
    const clearParticipants = async () => {
        const response = await fetch(`${API_URL}/participants/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
    };
    const participants = fetchParticipants();
    participants.then((data) => {
        data.forEach((participant) => {
            distances.push({
                participant: participant.id,
                caminando: 0,
                recorridaNatacion: 0,
                ciclista: 0,
            });
        });
    });
    function iniciarTriatlon() {
        toast.success("Iniciando el Triatlon");
        started = true;
        dateInitial = new Date().getTime();
        while (
            distances.find((participant) => distance.caminando < 10000) &&
            distances.find(
                (participant) => distance.recorridaNatacion < 10000,
            ) &&
            distances.find((participant) => distance.ciclista < 30000)
        ) {
            const distanceTimeOut = setTimeout(() => {
                distances.forEach((distance) => {
                    distance.caminando =
                        distance.caminando + calcularDistanciaCaminando();
                    distance.recorridaNatacion =
                        distance.recorridaNatacion +
                        calcularDistanciaRecorridaNatacion();
                    distance.ciclista =
                        distance.ciclista + calcularDistanciaCiclista();
                });
            }, 1000);
        }
    }
</script>

<Toaster />

<main
    class="flex flex-col items-center justify-center min-w-screen min-h-screen"
>
    <h1 class="mb-4">Participantes actuales:</h1>
    <Table />
    <button on:click={iniciarTriatlon}>Iniciar el Triatlon</button>
    <button on:click={clearParticipants}>Borrar participantes</button>
    {#if started}
        {#await fetchParticipants()}
            <p>Cargando...</p>
        {:then data}
            <table class="divide-y-2 divide-gray-200 bg-white text-sm border">
                <thead class="ltr:text-left rtl:text-right">
                    <tr>
                        <th
                            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                            >Nombre</th
                        >
                        <th
                            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                            >Caminando</th
                        >
                        <th
                            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                            >Recorrida natación</th
                        >
                        <th
                            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                            >Ciclista</th
                        >

                        <th
                            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                            >Distancia total</th
                        >
                    </tr>
                </thead>
                <tbody>
                    {#each data as participant}
                        <tr class="odd:bg-indigo-100">
                            <td
                                class="whitespace-nowrap px-4 py-2 text-gray-700"
                                >{participant.name}</td
                            >
                            <td
                                class="whitespace-nowrap px-4 py-2 text-gray-700"
                                >{participant.caminando}</td
                            >
                            <td
                                class="whitespace-nowrap px-4 py-2 text-gray-700"
                                >{participant.recorridaNatacion}</td
                            >
                            <td
                                class="whitespace-nowrap px-4 py-2 text-gray-700"
                                >{participant.ciclista}</td
                            >
                            <td
                                class="whitespace-nowrap px-4 py-2 text-gray-700"
                                >{participant.distancia}</td
                            >
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/await}
    {/if}
</main>

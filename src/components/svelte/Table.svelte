<script>
    import { fetchParticipants } from "../utils";
    import { API_URL } from "../../constants/consts";
</script>

<div>
    <table class="divide-y-2 divide-gray-200 bg-white text-sm border">
        <thead class="ltr:text-left rtl:text-right">
            <tr>
                <th
                    class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                    >Nombre</th
                >
                <th
                    class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                    >Cedula</th
                >
                <th
                    class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                    >Municipio</th
                >
                <th
                    class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                    >Edad</th
                >
            </tr>
        </thead>
        <tbody>
            {#await fetchParticipants()}
                <tr>
                    <td colspan="4">Cargando...</td>
                </tr>
            {:then data}
                {#each data as participant}
                    <tr class="odd:bg-indigo-100">
                        <td
                            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                            >{participant.name}</td
                        >
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700"
                            >{participant.id}</td
                        >
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700"
                            >{participant.direction}</td
                        >
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700"
                            >{participant.age}</td
                        >
                    </tr>
                {/each}
            {/await}
        </tbody>
    </table>
</div>

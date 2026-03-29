<script>
    import TorneoCard from "$lib/TorneoCard.svelte";

    let torneos = $state([])
    let nombre = $state("")
    let categoria = $state("")
    let cadena = $state("")
    let filtrados = $derived(torneos.filter(t => t.nombre.includes(cadena)))

    function agregar(){
        torneos.push({ nombre:nombre, categoria:categoria })
    }
</script>


<div class="p-6 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">Torneos</h2>

        <!-- inputs -->
        <div class="flex gap-2 mb-6">

            <input bind:value={cadena} class="input input-bordered mb-6" placeholder="Buscar torneo">
            <input bind:value={nombre} class="input input-bordered w-full" placeholder="Nombre del Torneo">

            <select bind:value={categoria} class="select select-bordered" placeholder="Categoria">
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
            </select>

            <button onclick={agregar} class="btn btn-primary">Agregar</button>
        </div>


        <!-- listado -->
        <div>
        {#each filtrados as torneo}
            <div class="flex justify-between items-center bg-base-200 p-3 rounded-lg"></div> 
            
            <TorneoCard nombre={torneo.nombre} categoria={torneo.categoria}/>           
        {/each}
        </div>
</div>
<script>
    import PagosCard from "$lib/PagosCard.svelte";
    let pagos = $state([])
    let nombre = $state("")
    let monto = $state("")
    let estado = $state("Pagado")
    let cadena = $state("")
    let filtrados = $derived(pagos.filter(p => p.nombre.includes(cadena)))
    let montoTotal = $derived(pagos.filter(p => p.estado === "Pagado").reduce((acc,p) => acc+Number(p.monto),0))

    function agregar(){
        pagos.push({nombre:nombre, monto:monto, estado:estado})
    }
    
</script>



<div class="p-6 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">Alumnos</h2>

    <!-- inputs-->

    <div class="flex gap-2 mb-6">
        <input bind:value={cadena} class="input input-bordered mb-6" placeholder="Buscar alumno">
    </div>

    <div class="flex gap-2 mb-6">
        <input bind:value = {nombre} class="input input-bordered w-full" placeholder="Nombre del Alumno">
        <input bind:value = {monto} class="input input-bordered w-full" placeholder="Monto">

        <select bind:value={estado} class="select select-bordered" placeholder="Estado">
            <option value="Pagado">Pagado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Vencido">Vencido</option>
        </select>

        <button onclick={agregar} class="btn btn-primary">Agregar</button>
    </div>


    <h2 class="text-xl font-bold mb-4">Total Acumulado: {montoTotal}</h2>


    <!-- Listado-->
    <div>
        {#each filtrados as pago}
             <div class="flex justify-between items-center bg-base-200 p-3 rounded-lg"></div> 
            <PagosCard nombre = {pago.nombre} monto = {pago.monto} estado = {pago.estado} />
        {/each}
    </div>
</div>
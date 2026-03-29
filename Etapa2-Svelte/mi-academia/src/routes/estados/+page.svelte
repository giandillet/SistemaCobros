<script>
  import AlumnoCard from "$lib/AlumnoCard.svelte";

    let alumnos = $state([
        {nombre:"gian",estado:"Al día"},
        {nombre:"ramon",estado:"Al día"},
        {nombre:"pedro",estado:"Debe"}
    ])
    let nombre = $state("")
    let estado = $state("")

    function agregar(){
        alumnos.push({nombre:nombre, estado:estado})
    }
</script>

<div class="p-6 max-w-xl mx-auto">

    <!-- contenedor tipo card -->
    <div class="card bg-base-100 shadow-xl p-6">

        <h2 class="text-xl font-bold mb-4">Alumnos</h2>

        <!-- inputs -->
        <div class="flex gap-2 mb-6">
            <input 
                bind:value={nombre} 
                class="input input-bordered w-full" 
                placeholder="Nombre Alumno"
            >

            <select bind:value={estado} class="select select-bordered" placeholder="Estado">
                <option value="Al dia">Al día</option>
                <option value="Debe">Debe</option>
            </select>

            <button onclick={agregar} class="btn btn-primary">
                Agregar
            </button>
        </div>

        <!-- listado -->
        <div class="space-y-2">
            {#each alumnos as alumno}
                <div class="flex justify-between items-center bg-base-200 p-3 rounded-lg">

                    <AlumnoCard nombre={alumno.nombre} estado={alumno.estado}/>

                </div>
            {/each}
        </div>

    </div>

</div>
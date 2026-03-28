<script>
    let alumnos = $state(["Juan", "María", "Carlos", "Gian"])
    let cadena = $state("")
    let filtrados = $derived(alumnos.filter(a => a.includes(cadena)))
</script>


<div class="p-8">
  <h1 class="text-2xl font-bold mb-6">Alumnos</h1>

  <input bind:value={cadena} class="input input-bordered mb-6" placeholder="Buscar alumno">

  <table class="table">
    <thead>
      <tr><th>Nombre</th></tr>
    </thead>
    <tbody>
      {#each filtrados as alumno}
        <tr><td>{alumno}</td></tr>
      {/each}
    </tbody>
  </table>
</div>
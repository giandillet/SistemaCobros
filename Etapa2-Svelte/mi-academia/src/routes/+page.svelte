<script>
  let alumnos = $state(["Juan", "María", "Carlos", "Gian"])

  let nuevoA = $state("")

  function agregar(){
    if (nuevoA !=""){
        alumnos.push(nuevoA)
        nuevoA = ""
    }
  }

  function eliminar(i){
        alumnos.splice(i, 1)
    }
</script>

<div class="p-8">
  <h1 class="text-2xl font-bold mb-6">Alumnos</h1>

  <div class="flex gap-2 mb-6">
    <input bind:value={nuevoA} class="input input-bordered" placeholder="Nombre alumno">
    <button onclick={agregar} class="btn btn-primary">Agregar</button>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      {#each alumnos as alumno, i}
        <tr>
          <td>{alumno}</td>
          <td><button onclick={() => eliminar(i)} class="btn btn-error btn-sm">Eliminar</button></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
<script>

  let { nombre, estado } = $props()
</script>


<div>
    <p>{nombre}</p>

    {#if estado==="Al dia"}
        <span class= "badge badge-success">Al dia</span>
    {:else}
        <span class= "badge badge-error">Debe</span>
        
    {/if}
</div>
<script>
    let {nombre, categoria} = $props()
</script>

<div>
<p>{nombre}</p>

{#if categoria === "Alta"}
    <div class="badge badge-primary badge-lg">Alta</div>
{:else if categoria === "Media"}
    <div class="badge badge-primary badge-md">Media</div>
{:else}
    <div class="badge badge-primary badge-sm">Baja</div>
{/if}

</div>

<script>
    let contador = $state(0)
    let limite = $state(0)

    function suma(){
        if(contador<limite){
            contador++
        }
    }
    function resta(){
        if(contador>0){
            contador--
        }
    }

</script>


<div class="p-8">
    <h1 class="text-2xl font-bold mb-6">Contador</h1>


    <input bind:value={limite} class="input input-bordered w-48 mb-4" placeholder="Definir límite">
        

    <div class="flex gap-2 mb-6">
        <button class="btn btn-success" onclick={suma}>+ Suma</button>
        <button class="btn btn-error" onclick={resta}>- Resta</button>
    </div>

    <div class="stats shadow">
        <div class="stat">
            <div class="stat-title">Contador actual</div>
            <div class="stat-value">{contador}</div>
            <div class="stat-desc">Límite: {limite}</div>
        </div>
    </div>
</div>
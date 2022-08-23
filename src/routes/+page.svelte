<script>
    let title="Taiwo Gaming Guides"

    const updateTitle = () =>{
        title="Something Completely different."
    }
</script>

<div class="index">
    <h2>{title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ab suscipit eos reiciendis totam harum a explicabo beatae, sed fugit sit provident assumenda perferendis, voluptatibus, quidem in! Nam, voluptatum atque.</p>

    <!-- <button on:click={updateTitle}>Change the title</button>
    <input type="text" name="title" bind:value={title}/> -->
</div>

<style>
    .index{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>

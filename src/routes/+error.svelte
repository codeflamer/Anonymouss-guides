
<script>
    import {page} from "$app/stores"
    console.log($page)
</script>

<main>
    <h1>{$page.status}</h1>
    <p>Page Not Found..</p>
</main>

<style>
    main{
        text-align: center
    }
</style>
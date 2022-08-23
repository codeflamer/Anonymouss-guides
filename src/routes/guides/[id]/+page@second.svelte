<script>
    export let data;
    // console.log(data);
</script>

<div class="guide">
    <h2>{data.guide.title}</h2>
    <p>{data.guide.body}</p>
</div>

<style>
    .guide{
        margin-top:40px;
        padding:10px;
        border:1px dotted rgba(255,255,255,0.2)
    }
</style>
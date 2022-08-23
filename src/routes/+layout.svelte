<script>
import Title from "../lib/title.svelte";
import "../styles/global.css"
</script>

<nav>
    <a href="/">Home</a>
    <a sveltekit:prefetch href="/guides">Guides</a>
    <a href="/about">About</a>
</nav>
<header>
    <Title title="Anonymouss Gaming Guides"/>
</header>
<main>
    <slot></slot>
</main>

<footer>
    <p>Copyright 2022 Anonymouss Gaming Guides.</p>
</footer>

<style>
    header{
        display:flex;
        justify-content:center;
    }
    main{
        max-width:960px;
        margin:20px auto;
    }
    nav{
        text-align: center;
        border-bottom: 2px dotted black;
        padding:5px 0;
        margin-bottom: 5px;
    }
    footer{
        /* border-top: 2px dotted black; */
        text-align: center;
        font-weight: bold;
        padding-top:5px
    }
</style>
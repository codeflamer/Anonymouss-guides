<script>
    import Title from "../lib/title.svelte";
    import "../styles/global.css"
    </script>
    

    <header>
        <nav>
            <Title title="Anonymouss Gaming Guides"/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a sveltekit:prefetch href="/guides">Guides</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <slot></slot>
    </main>
    
    <footer>
        <p>&copy; Copyright 2022 Anonymouss Gaming Guides.</p>
    </footer>
    
    <style>
        header{
            text-align: center;
            background-color: rgba(0,0,0,0.1);
        }
        ul{
            display:flex;
            list-style:none;
            gap:20px;
            margin-right: 5px;
        }
        main{
            max-width:960px;
            margin:20px auto;
        }
        nav{
            display:flex;
            align-items:center;
            justify-content:space-between;
            max-width: 960px;
            margin: 0 auto;
        }
        footer{
            /* border-top: 2px dotted black; */
            text-align: center;
            font-weight: bold;
            padding-top:5px
        }
    </style>
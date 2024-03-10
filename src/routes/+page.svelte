<script>
    import Cards from "../components/main-cards.svelte"
    import {storesdata} from "../stores/index.js"
    let data = $storesdata

</script>
<article class="main-page">

    <header></header>
    <main>
        <section class="cards">
            <Cards data={data}/>
        </section>
    </main>
    <footer></footer>
</article>
<style lang="scss">
    .main-page{
        padding: 10vh 0;
    }
</style>

<!--
TODOS

- make compatible with social apps (people can share and interact with donations from other social apps) 

-->
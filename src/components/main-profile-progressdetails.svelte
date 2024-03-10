<script>
    /**
     * @type {{ total_cost: any; cost_percentage: any; money_raised: any; total_items: any; items_percentage: any; items_raised: any; }}
     */
     export let data;
</script>

<article>
    <div class="details">
        <div class="items_progress">
            <header>
                <span>
                    <h2>{data.total_cost}</h2>
                </span><span>
                    <h2>{data.cost_percentage} %</h2>
                </span>
            </header>
            <main>
                <p>{data.money_raised} MKW raised</p>
            </main>
            <footer>
                <progress max="100" value="64"></progress>
            </footer>
        </div>
        <div class="monetary_progress">
            <header>
                <span>
                    <h2>{data.total_items}</h2>
                </span><span>
                    <h2>{data.items_percentage} %</h2>
                </span>
            </header>
            <main>
                <p>{data.items_raised} items donated</p>
            </main>
            <footer>
                <progress max="100" value="40"></progress>
            </footer>
            
        </div>
    </div>  
</article> 
<style lang="scss">

    article{
        .details{
            padding: 10px 0;
            div{
                h2, p{
                    @include text(var(--text), 0.75rem, 450);
                    padding: 5px;
                }
                header{
                    @include flex;
                }
                footer{
                    progress{
                        width: 100%;
                        block-size: 0.5em;
                        height: 2px;
                    }
                    progress[value]{
                        background-color: green;
                    }
                }
            }
        }
        
    }

</style>
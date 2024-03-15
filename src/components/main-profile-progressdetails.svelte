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
                    <h2>{data.total_cost} target amount</h2>
                </span><span>
                    <h2>{data.cost_percentage} %</h2>
                </span>
            </header>
            <main>
                <p>{data.money_raised} MKW raised</p>
            </main>
            <progress max="100" value="64"></progress>
           
        </div>
        <div class="monetary_progress">
            <header>
                <span>
                    <h2>{data.total_items} target items</h2>
                </span><span>
                    <h2>{data.items_percentage} %</h2>
                </span>
            </header>
            <main>
                <p>{data.items_raised} items donated</p>
            </main>
            <progress max="100" value="40"></progress>
            
            
        </div>
    </div>  
</article> 
<style lang="scss">
 

    article{
        .details{
            padding:5px 0 0 0;
            div{

                h2, p{
                    @include text(var(--text), 0.7rem, 450);
                    padding: 1px 5px;
                }
                header{
                    @include flex;
                }
                                            
                progress{
                    width: 100%;
                    height: 2px;                    
                }
                progress[value]{
                    background-color: green;
                }
                
            }
        }
        
    }

</style>
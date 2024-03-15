<script>
    import Progress from "./main-profile-progressdetails.svelte"
    /**
     * @type {any}
     */
     export let data;

     $: toggle_settings = false;
     $: toggle_pictures = true;
</script>

{#each data as card_data}
<a href="/profile/{card_data.id}" class="cards">
    <header>
        <div class="profile-date">
            <div class="profile">
                <div class="profile_picture">
                    <img src="/{card_data.profile}" alt="profile" >
                </div>
                <div class="profile_name">
                    <h1>{card_data.user_name}</h1>
                </div>
            </div>
            <div class="date">{card_data.time_posted}</div>
        </div>
        <div class="catergory">
            <a style="color: orange !important;" href="{card_data.type}">
                {card_data.type}
            </a>
        </div>
    </header>
    <main>
        {#if toggle_pictures}
            {#if card_data.picture_post !== ""}
            <div class="picture_post">
                <div class="post">
                    <img src="/{card_data.picture_post}" alt="post">
                </div>
                <div class="description">
                    <p>{card_data.description.substring(0,60)} ...</p>
                </div>
            </div>
            {/if}
        {/if}

        <div class="needs_list">
            <div class="material_needs">
                <ul>
                    {#each card_data.needs_list.material_needs as list}
                    <li><span>{list.item}</span><span>x {list.quantity}</span></li>
                    {/each}
                </ul>
            </div>
            <div class="monetary_needs">
                <ul>
                    {#each card_data.needs_list.monetary_needs as list}
                    <li><span>{list.item}</span><span>MKW {list.cost}</span></li>
                    {/each}
                </ul>

            </div>            
        </div>
    </main>
    <footer>
        <Progress data={card_data.progress_details}/>        
        <div class="actions">
            <span>
                <a href="{card_data.id}">sponsor</a>
            </span>
            <span>
                <a href="/share">share</a>
            </span>
        </div>
    </footer>
</a>
{/each}
<style lang="scss">   
    .cards{
        background: var(--white);
        box-shadow: rgba(0, 0, 0, 0.2) 0 4px 4px 3px;
        border-radius: 4px;
        margin: 20px 10px;
        padding: 3px 10px;
        display: block;
        max-width: 355px;
        header{
            .profile-date{
                @include flex;
                .profile{
                    @include flex;
                    gap: 10px;
                    .profile_picture{
                        width: 35px;
                        img{
                            width: 100%;
                            border-radius: 100%;
                        }
                    }
                    .profile_name{
                        @include text(var(--text), var(--rem1), 450);
                    }
                }
                .date{
                    @include text(var(--black-tr), var(--rem1), 450);
                }
            }
            .catergory{
                text-align: end;
                a{
                    display: inline-block;
                    padding: 0 0 5px 0;
                    @include text(var(--text), var(--rem1), 750);
                    color: #ffa500;
                }
            }
        }
        main{
            .picture_post{
                .post{
                    img{
                        width: 100%;    
                    }
                }
                .description{
                    p{
                        @include text(var(--text),var(--rem2), 500);
                        color: var(--black-tr);
                    }
                }
            }
            .needs_list{
                border: var(--black) solid 0.9px;
                padding: 5px 10px;
                div{
                    ul{
                        li{
                            @include text(var(--text), var(--rem2), 500);
                            @include flex;
                            padding: 1.5px 3px;
                            margin: 2px 3px;
                            span:nth-child(2){
                                @include text(var(--blue), var(--rem1), 500);
                            }
                        }
                    }
                }
            }
        }
        footer{
            .actions{
                @include flex;
                gap: 10px;
                margin: 10px 0;
                span{
                    @include text(var(--text), var(--rem2), 500);
                    text-align: center;
                    border-radius: 4px;
                    a{
                        display: block;
                        padding: 10px;
                    }
                }
                span:nth-child(1){
                    background-color: var(--black);
                    border: var(--black) solid 1px;
                    flex: 1;
                    a{
                        color: var(--white);
                    }
                }
                span:nth-child(2){
                    border: var(--black) solid 1px;
                    padding: 0 15px;
                    a{
                        color: var(--black);
                    }
                }
            }
        }
    }
</style>
<script>
    import Progress from "../../../components/main-profile-progressdetails.svelte"
    import {storesdata} from "../../../stores/index.js"
    // @ts-ignore
    export let data;
    // @ts-ignore
    let storesfilter = $storesdata.filter((element)=>{return element.id == data.params.slug})

    console.log(storesfilter)

</script>
{#each storesfilter as profile_data}
<article class="profile-page">
    <div class="profile">
       
        <main>
            <div class="profile_details">
                <div class="profile_picture">
                    <img src="/{profile_data.profile}" alt="profile">
                </div>
                <div class="profile_info">
                    <h1>{profile_data.user_name}</h1>
                    <p><a href="/">{profile_data.profile_infomation.address}</a></p>
                    <p><a href="/">{profile_data.profile_infomation.email}</a></p>
                    <p><a href="/">{profile_data.profile_infomation.phone}</a></p>
                </div>
                <div class="profile_actions">
                    <!-- <button>edit profile</button>
                    <button>create list</button> -->
                    <a href="/">contact</a>
                </div>               
            </div>
            <div class="needs_details">
                <h1>needs list</h1>
                <hr>
                <ul>
                    {#each profile_data.needs_list.material_needs as needs}
                    <li>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <h2>{needs.item}</h2>
                                    </td>
                                    <td>
                                        <p>x {needs.quantity}</p>
                                    </td>
                                    <td>
                                        <button>donate</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    {/each}
                </ul>
                <ul>
                    {#each profile_data.needs_list.monetary_needs as needs}
                    <li>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <h2>{needs.item}</h2>
                                    </td>
                                    <td>
                                        <p>x {needs.cost}</p>
                                    </td>
                                    <td>
                                        <button>donate</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    {/each}
                </ul>
            </div>
            <div class="donations_details">
                <h1>donations</h1>
                <hr>
                <Progress data={profile_data.progress_details}/>    
                <ul>
                    {#each profile_data.donors as donor}
                    <li>
                        <a href="/">
                            <span class="donor_image">
                                <img src="/profile.jpg" alt="donor">
                            </span>
                            <span class="donor_name">
                                <p>{donor.name}</p>
                            </span>
                            <span class="donor_items">
                                {#each donor.donations as donation}
                                <p>
                                    {donation.item} x {donation.quantity}
                                </p>
                                {/each}
                            </span>
                        </a>
                    </li>
                    {/each}

                </ul>
            </div>

        </main>
        <footer></footer>
    </div>
</article>
{/each}
<style lang="scss">
    .profile-page{
        padding: 10vh 0;
        .profile{
            main{
                .profile_details{
                    text-align: center;
                    .profile_picture{
                        width: 100px;
                        margin: auto;
                        img{
                            width: 100%;
                            border-radius: 100%;
                        }
                    }
                    .profile_info{
                        padding: 10px;
                        h1{
                            @include text(var(--text), 0.94rem, 700);
                            text-transform: uppercase;
                        }
                        p{
                            @include text(var(--text), 0.8rem, 500);
                            padding: 5px;
                        }
                    }
                    .profile_actions{
                        display: flex;
                        justify-content: center;
                        gap: 15px;
                        button{
                            border-radius: 4px;
                            border: var(--black) solid 1px;
                            padding: 10px 15px;
                            @include text(var(--text), 0.8rem, 500);
                        }
                        button:nth-child(2){
                            background-color: var(--black);
                            color: var(--white);
                        }
                        a{
                            background-color: var(--black);
                            display: black;
                            border-radius: 4px;
                            border: var(--black) solid 1px;
                            padding: 10px 50px;
                            @include text(var(--white), 0.8rem, 500);
                        }
                    }
                }
                .needs_details{
                    padding:10px;
                    h1{
                        @include text(var(--text), 0.75rem, 700);
                        text-transform: uppercase;
                        padding: 3px 0;
                        letter-spacing: 1.1px;
                    }
                    ul{
                        li{
                            border: var(--black) 1px solid;
                            border-radius: 4px;
                            margin: 5px 0;
                            table{
                                width: 100%;
                                tr{
                                    @include flex;
                                    td:nth-child(2) {
                                        flex: 1;

                                        p{
                                            text-align:end;
                                        }
                                    }
                                }
                            }
                           
                            h2{
                                @include text(var(--text), 1rem , 600);

                            }
                            p{
                                @include text(var(--text), 0.9rem , 800);
                                text-align: end !important;
                                // padding: 0;

                            }
                            button{
                                background-color: var(--blue);
                                border-radius: 4px;
                                padding: 7px 15px;
                                @include text(var(--white), 0.9rem , 600);
                            }
                        }
                    }
                }
                .donations_details{
                    padding:10px;
                    h1{
                        @include text(var(--text), 0.75rem, 700);
                        text-transform: uppercase;
                        padding: 3px 0;
                        letter-spacing: 1.1px;
                    }
                    ul{
                        li{
                            padding: 10px 5px;
                            background: var(--white);
                            box-shadow: rgba(0, 0, 0, 0.3) 0 4px 4px 0;
                            a{
                                @include text(var(--text), 0.8rem, 500);
                                display: block;
                                @include flex;
                                align-items:flex-start;
                                .donor_image{
                                    width: 30px;
                                    img{
                                        width: 100%;
                                        border-radius: 100%;
                                    }
                                }
                                p{
                                    text-align: end;
                                    padding:0;
                                    margin: 0;
                                }
                            }
                        }
                    }

                }
            }
        }
    }
</style>


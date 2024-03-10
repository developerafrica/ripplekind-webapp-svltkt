import { writable } from "svelte/store";

const data = [
    {
        id: 1,
        profile: "profile.jpg",
        time_posted: "3hrs ago",
        user_name: "mphunzo chizinga",
        type: "education",
        donors: [
            {
                id: 2134,
                name: "james kiwanuki",
                donations: [
                    {
                        item: "sugar",
                        quantity: 4
                    },
                    {
                        item: "books",
                        quantity: 6
                    }
                ]
            },
            {
                id: 2134,
                name: "yamikani kiwanuki",
                donations: [
                    {
                        item: "sugar",
                        quantity: 4
                    },
                    {
                        item: "books",
                        quantity: 6
                    }
                ]
            },
        ],
        profile_infomation: {
            address: "machinjiri area 5",
            phone: "08801664455",
            email: "peterethanbutao@gmail.com"
        },
        picture_post: "",
        description: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sit voluptates corrupti porro itaque architecto earum, exercitationem dolorem et magnam.",
        needs_list: {
            material_needs : [
                {
                    item: "sugar",
                    quantity: 1
                },
                {
                    item: "blankets",
                    quantity: 1
                },
                {
                    item: "phone",
                    quantity: 1
                },
                {
                    item: "bible",
                    quantity: 2
                },
                {
                    item: "books",
                    quantity: 1
                }
            ],
            monetary_needs : [
                {
                    item: "fees",
                    description: "MUST semister school fees",
                    cost: 800000
                },
                {
                    item: "medical bills",
                    description: "teeth removal surgary",
                    cost: 600000
                }
            ]
        },
        progress_details : {
            total_items : 30,
            total_cost : 1700000,
            items_percentage : 64,
            cost_percentage : 40,
            money_raised : 500000,
            items_raised : 20
        }
    },
    {
        id: 2,
        profile: "profile.jpg",
        time_posted: "3hrs ago",
        user_name: "denzel chizinga",
        type: "education",
        donors: [
            {
                id: 2134,
                name: "james kiwanuki",
                donations: [
                    {
                        item: "sugar",
                        quantity: 4
                    },
                    {
                    item: "books",
                    quantity: 6}
                ]
            }
        ],
        profile_infomation: {
            address: "machinjiri area 5",
            phone: "08801664455",
            email: "peterethanbutao@gmail.com"
        },
        picture_post: "post.jfif",
        description: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sit voluptates corrupti porro itaque architecto earum, exercitationem dolorem et magnam.",
        needs_list: {
            material_needs : [
                {
                    item: "sugar",
                    quantity: 1
                },
                {
                    item: "blankets",
                    quantity: 1
                },
                {
                    item: "phone",
                    quantity: 1
                },
                {
                    item: "bible",
                    quantity: 2
                },
                {
                    item: "books",
                    quantity: 1
                }
            ],
            monetary_needs : [
                {
                    item: "fees",
                    description: "MUST semister school fees",
                    cost: 800000
                },
                {
                    item: "medical bills",
                    description: "teeth removal surgary",
                    cost: 600000
                }
            ]
        },
        progress_details : {
            total_items : 30,
            total_cost : 1700000,
            items_percentage : 64,
            cost_percentage : 40,
            money_raised : 500000,
            items_raised : 20
        }
    },
    {
        id: 3,
        profile: "profile.jpg",
        time_posted: "3hrs ago",
        user_name: "heather cassava",
        type: "education",
        donors: [
            {
                id: 2134,
                name: "james kiwanuki",
                donations: [
                    {
                        item: "sugar",
                        quantity: 4
                    },
                    {
                    item: "books",
                    quantity: 6}
                ]
            }
        ],
        profile_infomation: {
            address: "machinjiri area 5",
            phone: "08801664455",
            email: "peterethanbutao@gmail.com"
        },
        picture_post: "post.jpeg",
        description: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sit voluptates corrupti porro itaque architecto earum, exercitationem dolorem et magnam.",
        needs_list: {
            material_needs : [
                {
                    item: "sugar",
                    quantity: 1
                },
                {
                    item: "blankets",
                    quantity: 1
                },
                {
                    item: "phone",
                    quantity: 1
                },
                {
                    item: "bible",
                    quantity: 2
                },
                {
                    item: "books",
                    quantity: 1
                }
            ],
            monetary_needs : [
                {
                    item: "fees",
                    description: "MUST semister school fees",
                    cost: 800000
                },
                {
                    item: "medical bills",
                    description: "teeth removal surgary",
                    cost: 600000
                }
            ]
        },
        progress_details : {
            total_items : 30,
            total_cost : 1700000,
            items_percentage : 64,
            cost_percentage : 40,
            money_raised : 500000,
            items_raised : 20
        }
    },
    {
        id: 4,
        profile: "profile.jpg",
        time_posted: "3hrs ago",
        user_name: "james chiona",
        type: "education",
        donors: [
            {
                id: 2134,
                name: "james kiwanuki",
                donations: [
                    {
                        item: "sugar",
                        quantity: 4
                    },
                    {
                    item: "books",
                    quantity: 6}
                ]
            }
        ],
        profile_infomation: {
            address: "machinjiri area 5",
            phone: "08801664455",
            email: "peterethanbutao@gmail.com"
        },
        picture_post: "",
        description: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sit voluptates corrupti porro itaque architecto earum, exercitationem dolorem et magnam.",
        needs_list: {
            material_needs : [
                {
                    item: "sugar",
                    quantity: 1
                },
                {
                    item: "blankets",
                    quantity: 1
                },
                {
                    item: "phone",
                    quantity: 1
                },
                {
                    item: "bible",
                    quantity: 2
                },
                {
                    item: "books",
                    quantity: 1
                }
            ],
            monetary_needs : [
                {
                    item: "fees",
                    description: "MUST semister school fees",
                    cost: 800000
                },
                {
                    item: "medical bills",
                    description: "teeth removal surgary",
                    cost: 600000
                }
            ]
        },
        progress_details : {
            total_items : 30,
            total_cost : 1700000,
            items_percentage : 64,
            cost_percentage : 40,
            money_raised : 500000,
            items_raised : 20
        }
    },
    {
        id: 5,
        profile: "profile.jpg",
        time_posted: "3hrs ago",
        user_name: "peter butao",
        type: "education",
        donors: [
            {
                id: 2134,
                name: "james kiwanuki",
                donations: [
                    {
                        item: "sugar",
                        quantity: 4
                    },
                    {
                    item: "books",
                    quantity: 6}
                ]
            }
        ],
        profile_infomation: {
            address: "machinjiri area 5",
            phone: "08801664455",
            email: "peterethanbutao@gmail.com"
        },
        picture_post: "post.jpg",
        description: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sit voluptates corrupti porro itaque architecto earum, exercitationem dolorem et magnam.",
        needs_list: {
            material_needs : [
                {
                    item: "sugar",
                    quantity: 1
                },
                {
                    item: "blankets",
                    quantity: 1
                },
                {
                    item: "phone",
                    quantity: 1
                },
                {
                    item: "bible",
                    quantity: 2
                },
                {
                    item: "books",
                    quantity: 1
                }
            ],
            monetary_needs : [
                {
                    item: "fees",
                    description: "MUST semister school fees",
                    cost: 800000
                },
                {
                    item: "medical bills",
                    description: "teeth removal surgary",
                    cost: 600000
                }
            ]
        },
        progress_details : {
            total_items : 30,
            total_cost : 1700000,
            items_percentage : 64,
            cost_percentage : 40,
            money_raised : 500000,
            items_raised : 20
        }
    },
]
export const storesdata = writable(data)
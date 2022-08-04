import women from '../images/Product_Images/women.png';
import mens from '../images/Product_Images/mens.png';
import electronics from '../images/Product_Images/electronics.png';
import jewellery from '../images/Product_Images/jewellery.png';


export const HeaderLabels = {
    //Header Texts
    manuItems: [
        {
            label: "Home",
            className: "text1",
            url : "/"
        },
        {
            label: "Women",
            className: "text1",
            url : "/category/women's clothing"
        },
        {
            label: "Men",
            className: "text2",
            url : "/category/men's clothing"
        },
        {
            label: "Electronics",
            className: "text3",
            url : "/category/electronics"
        },
        {
            label: "Jewellery",
            className: "text4",
            url : "/category/jewelery"
        },

    ],

    // Cart_Product
    Product: [
        {
            id: 1,
            title: "Women Trouser",
            size: "Medium",
            color: "Khaki",
            price: 145.00,
            img: require(`../images/Product_Images/cloth.webp`),
        },
        {
            id: 2,
            title: "Sports Bra",
            size: "Medium",
            color: "Grey",
            price: 98.00,
            img: require(`../images/Product_Images/cloth2.webp`),
        },
    ],

    mainHeader: "VENIA",
}

// Header Icons
export const HeaderIcons = {
    searchIcon: "Search",
    userIcon: "User",
    shop_bagIcon: "ShopBag",
    plusCircle: "plus",
    minusCircle: "minus",
    downChevron: 'downarrow',
    insta: "insta",
    facebook: "facebook",
    twitter: "twitter",
    Lock: "lock",
    alignJustify: "alignjustify",
    star: 'star',
    Share: 'share-2',
    menuIcon: 'menu',
    Slider: 'slider',
    Uparrow: 'uparrow',
    Downarrow: 'down-arrow',
    Cross: 'cross',
    faceBook:'facebook-icon',
    Insta: 'insta-icon',
    Twitter: 'twitter-icon',
    more_horizantal: 'more-horizantal',
    cross_Icon: 'cross-Icon',
}

// Shop-Bag Carousel
export const RecentViewdata = [
    {
        imageUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        title: 'Mens Cotton Jacket',
        price: '37.00',
        id: 3
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        title: 'MBJ Women Solid',
        price: '70.00',
        id: 18
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        title: ' Mens Casual Slim',
        price: '90.00',
        id: 4
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        title: 'Women T-shirt',
        price: '120.00',
        id: 19
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        title: ' John Hardy Women',
        price: '200.00',
        id: 5
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        title: 'Silver Ring',
        price: '90.00',
        id: 7
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        title: 'Acer LED',
        price: '200.00',
        id: 13,
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        title: 'Men T-shirt',
        price: '140.00',
        id: 2,
    }
]

//Filter of Listing Page 
export const Filters =
    [
        {
            optionName: "option",
            className: "filteroption"
        }
    ]

//Filter-Color
export const Color =
    [
        {
            backgroundcolor: "",
        }
    ]

export const Sizes = [{
    text: 'M',

},
{
    text: 'S',

},
{
    text: 'XL',

}
    ,
{
    text: 'L',

}
    ,
{
    text: 'XS',

}
]

// Size Filter Labels

export const SizeFilter = [{
    text: 'X-Small',

},
{
    text: 'Medium',

},
{
    text: 'Large',

}
    ,
{
    text: 'X-Large',

}
];

// Filter Options

export const StylesFilter = [{
    text: 'Outdoor',

},
{
    text: 'Casual',

},
{
    text: 'Active',

}
    ,
{
    text: 'Running',

}
    ,
{
    text: 'Outfits',

}
    ,
{
    text: 'Working',

}
]

// Brand Filter Option

export const BrandFilter = [{
    text: 'Calvin Klein',

},
{
    text: 'Dolce & Gottaboo',

},
{
    text: 'Miu Miu ',

}
    ,
{
    text: 'Prada',

}
    ,
{
    text: 'Rag & Bone',

}
    ,
{
    text: 'Gucci',

}
    ,
{
    text: 'Marni',

},
{
    text: 'Dior',

}
    ,
{
    text: 'Salvatore',

}
]

// Color Filter Option

export const ColorFilter = [
    {
        text: '#343434',

    },
    {
        text: '#2D9D78 ',

    },
    {
        text: '#FDBA5E',

    },
    {
        text: '#6408D3',

    },
    {
        text: '#FFFFFF',

    },

    {
        text: '#F9009A',

    },
    {
        text: '#f45c43',

    },
    {
        text: '#1F39FF'
    },
    {
        text: '#EB7327'
    }
]

export const CategoriesFilter = [{
    text: 'Jewellery',
    value : 'jewelery'
},
{
    text: 'Electronics',
    value : "electronics"

},
{
    text: 'Men`s Clothing',
    value : "men's clothing"
}
    ,
{
    text: 'Women`s Clothing',
    value : "women's clothing"

}
];

export const APIBASE_URL = 'https://fakestoreapi.com';
export const CART_LOCAL_STORAGE_VALUE = "cartsData";
export const CART_EMPTY_MESSAGE = "Your Shop Bag is Empty!";
export const CART_CHANGE_MESSAGE = "Updated Cart";
export const LAST_CHANGE_MESSAGE = "Should not remove last quantity.";
export const PRODUCT_ALREADY_EXITS = "Product is already available in Cart.";
export const ADDED_PRODUCT_TO_BAG_MESSAGE = "Added Product To Bag";
export const REMOVED_PRODUCT_FROM_BAG_MESSAGE = "Removed Product from Bag";

export const DropDownOption = [
    {
        value: "1",
        name: "United States"
    },
    {
        value: "2",
        name: "India"
    },
    {
        value: "3",
        name: "japan"
    },
    {
        value: "4",
        name: "Dubai"
    },

] 
 
export const StateOption = [
        {
            value: "1",
            name: "California"
        },
        {
            value: "2",
            name: "Texas"
        },
        {
            value: "3",
            name: "Florida"
        },
        {
            value: "4",
            name: "Alaska"
        },
]

export const DropDownOptions = [
    //Header Texts
    {
        value: "",
        name: "Sort By Price"
    },
    {
        value: "0",
        name: "Price High to Low"
    },
    {
        value: "1",
        name: "Price Low to High"
    },
    // {
    //     value: "women's clothing",
    //     name: "Women"
    // },
    // {
    //     value: "men's clothing",
    //     name: "Men"
    // },
    // {
    //     value: "jewelery",
    //     name: "Jewelery"
    // },
    // {
    //     value: "electronics",
    //     name: "Electronics"
    // },
]

export const FooterContentData = [
    {
        name: "About Us",
        contents: [
            {
                name: "Our Story"
            },
            {
                name: "Our Story"
            }
        ]
    },
    {
        name: "Account",
        contents: [
            {
                name: "Sign in"
            },
            {
                name: "Register"
            }
            ,
            {
                name: "Order Status"
            }
        ]
    },
    {
        name: "Help",
        contents: [
            {
                name: "Contact Us"
            },
            {
                name: "Order Status"
            }
            ,
            {
                name: "Returns"
            }
        ]
    }
    ,
    {
        name: "Follow Us!",
        contents: [
            {
                name: "Lorem ipsum dolor sit"
            },
            {
                name: "consectetur adipiscing elit"
            }
            ,
            {
                name: "sed do eiusmod"
            }
        ]
    }
];


export const HomePageCategoryData=[{
    id:"Women",
    img:women,
    name:"Shop Women",
    description:"Lorem ipsum dolor sit amet",
},{
    id:"men",
    img:mens,
    name:"Shop Men",
    description:"Lorem ipsum dolor sit amet",
},{
    id:"jwellery",
    img:jewellery,
    name:"Jwellery",
    description:"Lorem ipsum dolor sit amet",
},{
    id:"electronics",
    img:electronics,
    name:"Electronics",
    description:"Lorem ipsum dolor sit amet",
}]   

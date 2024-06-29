export type Product = {
    id: number;
    name: string;
    category: string;
    subCategory: string;
    image: string;
    price: number;
    currency: string;
    offer: number;
    highlight: boolean;
}
export const products = [{
    'id': 1,
    'name': 'Lid Tray - 16in Dome',
    'category': 'Toys',
    'subCategory': 'Finance',
    'image': 'http://dummyimage.com/200x200.png/cc0000/ffffff',
    'price': 56.82,
    'currency': 'Euro',
    'offer': 16.21,
    'highlight': true
}, {
    'id': 2,
    'name': 'Table Cloth 72x144 White',
    'category': 'Garden',
    'subCategory': 'Public Utilities',
    'image': 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
    'price': 70.05,
    'currency': 'Ruble',
    'offer': 18.01,
    'highlight': false
}, {
    'id': 3,
    'name': 'Flour Dark Rye',
    'category': 'Outdoors',
    'subCategory': 'Energy',
    'image': 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
    'price': 39.94,
    'currency': 'Koruna',
    'offer': 12.92,
    'highlight': true
}, {
    'id': 4,
    'name': 'Juice Peach Nectar',
    'category': 'Health',
    'subCategory': 'Health Care',
    'image': 'http://dummyimage.com/200x200.png/cc0000/ffffff',
    'price': 11.33,
    'currency': 'Peso',
    'offer': 12.8,
    'highlight': true
}, {
    'id': 5,
    'name': 'Juice - Tomato, 48 Oz',
    'category': 'Computers',
    'subCategory': 'n/a',
    'image': 'http://dummyimage.com/200x200.png/dddddd/000000',
    'price': 88.1,
    'currency': 'Euro',
    'offer': 16.02,
    'highlight': false
}, {
    'id': 6,
    'name': 'Pasta - Rotini, Dry',
    'category': 'Computers',
    'subCategory': 'Consumer Services',
    'image': 'http://dummyimage.com/200x200.png/ff4444/ffffff',
    'price': 39.45,
    'currency': 'Euro',
    'offer': 18.25,
    'highlight': true
}, {
    'id': 7,
    'name': 'Tea - English Breakfast',
    'category': 'Toys',
    'subCategory': 'Basic Industries',
    'image': 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
    'price': 39.27,
    'currency': 'Peso',
    'offer': 16.91,
    'highlight': true
}, {
    'id': 8,
    'name': 'Shrimp - 16/20, Peeled Deviened',
    'category': 'Baby',
    'subCategory': 'n/a',
    'image': 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
    'price': 56.56,
    'currency': 'Rupiah',
    'offer': 18.27,
    'highlight': false
}, {
    'id': 9,
    'name': 'Nantucket Cranberry Juice',
    'category': 'Health',
    'subCategory': 'n/a',
    'image': 'http://dummyimage.com/200x200.png/dddddd/000000',
    'price': 63.59,
    'currency': 'Quetzal',
    'offer': 14.92,
    'highlight': false
}, {
    'id': 10,
    'name': 'Hinge W Undercut',
    'category': 'Tools',
    'subCategory': 'Consumer Durables',
    'image': 'http://dummyimage.com/200x200.png/cc0000/ffffff',
    'price': 54.05,
    'currency': 'Hryvnia',
    'offer': 10.94,
    'highlight': true
}, {
    'id': 11,
    'name': 'Kellogs Cereal In A Cup',
    'category': 'Sports',
    'subCategory': 'Consumer Durables',
    'image': 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
    'price': 33.0,
    'currency': 'Franc',
    'offer': 18.08,
    'highlight': true
}, {
    'id': 12,
    'name': 'Apple - Custard',
    'category': 'Music',
    'subCategory': 'Technology',
    'image': 'http://dummyimage.com/200x200.png/dddddd/000000',
    'price': 86.66,
    'currency': 'Ruble',
    'offer': 10.91,
    'highlight': true
}, {
    'id': 13,
    'name': 'Compound - Raspberry',
    'category': 'Movies',
    'subCategory': 'Basic Industries',
    'image': 'http://dummyimage.com/200x200.png/dddddd/000000',
    'price': 95.51,
    'currency': 'Peso',
    'offer': 11.48,
    'highlight': false
}, {
    'id': 14,
    'name': 'Chilli Paste, Ginger Garlic',
    'category': 'Outdoors',
    'subCategory': 'Technology',
    'image': 'http://dummyimage.com/200x200.png/ff4444/ffffff',
    'price': 16.11,
    'currency': 'Ruble',
    'offer': 17.89,
    'highlight': false
}, {
    'id': 15,
    'name': 'Grapes - Black',
    'category': 'Beauty',
    'subCategory': 'Consumer Services',
    'image': 'http://dummyimage.com/200x200.png/dddddd/000000',
    'price': 38.07,
    'currency': 'Dollar',
    'offer': 15.17,
    'highlight': true
}, {
    'id': 16,
    'name': 'Hagen Daza - Dk Choocolate',
    'category': 'Music',
    'subCategory': 'n/a',
    'image': 'http://dummyimage.com/200x200.png/cc0000/ffffff',
    'price': 31.13,
    'currency': 'Yuan Renminbi',
    'offer': 11.94,
    'highlight': false
}, {
    'id': 17,
    'name': 'Goulash Seasoning',
    'category': 'Kids',
    'subCategory': 'Technology',
    'image': 'http://dummyimage.com/200x200.png/5fa2dd/ffffff',
    'price': 49.98,
    'currency': 'Peso',
    'offer': 12.52,
    'highlight': false
}, {
    'id': 18,
    'name': 'Wine - Riesling Alsace Ac 2001',
    'category': 'Music',
    'subCategory': 'Technology',
    'image': 'http://dummyimage.com/200x200.png/dddddd/000000',
    'price': 20.36,
    'currency': 'Leu',
    'offer': 18.5,
    'highlight': true
}, {
    'id': 19,
    'name': 'Sausage - Meat',
    'category': 'Beauty',
    'subCategory': 'Public Utilities',
    'image': 'http://dummyimage.com/200x200.png/ff4444/ffffff',
    'price': 21.28,
    'currency': 'Real',
    'offer': 15.89,
    'highlight': true
}, {
    'id': 20,
    'name': 'Liquid Aminios Acid - Braggs',
    'category': 'Movies',
    'subCategory': 'Finance',
    'image': 'http://dummyimage.com/200x200.png/ff4444/ffffff',
    'price': 48.99,
    'currency': 'Ringgit',
    'offer': 17.01,
    'highlight': false
}];
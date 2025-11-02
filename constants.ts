
import { Brand, SocialLink, NavLink } from './types';

export const BRANDS: Brand[] = [
    {
        name: 'Saloon Navodaa',
        description: 'Luxury beauty and wellness treatments in a serene, professional environment. Experience total relaxation and transformation.',
        image: '/images/img-1.png',
        link: 'https://www.facebook.com/share/1BVgd3qSs7/',
        cta: 'Visit Salon'
    },
    {
        name: 'The Fancy Point',
        description: 'Your one-stop destination for exquisite jewelry, accessories, and unique lifestyle products that add a touch of glamour.',
        image: '/images/img-2.png',
        link: 'https://www.facebook.com/share/17ZRxZhy46/',
        cta: 'Explore More'
    },
    {
        name: 'Navodaa Online Store',
        description: 'Shop the latest trends and exclusive collections from the comfort of your home. Quality products delivered to your doorstep.',
        image: '/images/img-3.png',
        link: 'https://www.facebook.com/share/1Cvph26nSc/',
        cta: 'Shop Now'
    },
    {
        name: 'Navodaa Fashion',
        description: 'Discover curated fashion collections that blend contemporary style with timeless elegance. Dress to express your unique personality.',
        image: '/images/img-4.png',
        link: 'https://www.facebook.com/salonnavodaDN',
        cta: 'View Collection'
    },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/salonnavodaDN' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/+94703584172' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:navodasobaruu@gmail.com' },
];

export const NAV_LINKS: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'Brands', href: '#brands' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

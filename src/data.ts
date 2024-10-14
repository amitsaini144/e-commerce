import { Product } from "./types";
import chair from "../public/images/chair.png"
import iphone from "../public/images/iphone.png"
import fitbit from "../public/images/fitbit.png"
import shoes from "../public/images/shoes.png"
import mobile from "../public/images/mobile.jpg"
import Flip6 from "../public/images/Flip6.jpg"
import speaker from "../public/images/speaker.png"
import tws from "../public/images/tws.jpg"
import smartwatch from "../public/images/smartwatch.png"
import eDisplayXG from "../public/images/eDisplay-XG.png"
import eDisplayXE from "../public/images/eDisplay-XE.png"
import eDisplayXS from "../public/images/eDisplay-XS.png"
import eWatchBlack from "../public/images/eWatch-sf-3-black.png"
import eWatchWhite from "../public/images/eWatch-sf-3-white.png"
import eWatch from "../public/images/eWatch-sf-4.png"
import headphoneE11g from "../public/images/headphone-e11g.png"
import headphoneX29m from "../public/images/headphone-x28m.png"
import headphoneZ23c from "../public/images/headphone-z23c.png"
import headphoneOr27c from "../public/images/headphone-or27n.png"
import iphoneWhite from "../public/images/iphone-15-white.png"

export const productImage: Product[] = [
    {
        id: 1,
        name: "Headphones x-28m",
        imageSrc: headphoneX29m,
        price: "11,999",
        rating: 4.3
    },
    {
        id: 2,
        name: "Iphone 6",
        imageSrc: iphone,
        price: "47,999",
        rating: 4.1
    },
    {
        id: 3,
        name: "Mi Smart Band",
        imageSrc: fitbit,
        price: "1,899",
        rating: 4.2
    },
    {
        id: 4,
        name: "eDisplay XG",
        imageSrc: eDisplayXG,
        price: "54,499",
        rating: 4.4
    },
    {
        id: 5,
        name: "Moto G85 Plus",
        imageSrc: mobile,
        price: "17,999",
        rating: 4.3
    },
    {
        id: 6,
        name: "Sonos Speaker",
        imageSrc: speaker,
        price: "5,999",
        rating: 4.5
    },
    {
        id: 7,
        name: "Noise Wireless Earphones",
        imageSrc: tws,
        price: "2,999",
        rating: 4.0
    },
    {
        id: 8,
        name: "eWatch SF 4",
        imageSrc: eWatch,
        price: "29,499",
        rating: 4.6
    },
    {
        id: 9,
        name: "Apple Watch Series 9",
        imageSrc: smartwatch,
        price: "39,499",
        rating: 4.6
    },
    {
        id: 10,
        name: "Nike Sport shoes (Red)",
        imageSrc: shoes,
        price: "39,499",
        rating: 4.6
    },
    {
        id: 11,
        name: "eWatch SF 3 Black",
        imageSrc: eWatchBlack,
        price: "25,499",
        rating: 4.6
    },
    {
        id: 12,
        name: "Headphone e11g",
        imageSrc: headphoneE11g,
        price: "8,199",
        rating: 4.6
    },
    {
        id: 13,
        name: "eDisplay XS",
        imageSrc: eDisplayXS,
        price: "54,499",
        rating: 4.5
    },
    {
        id: 14,
        name: "Iphone 15 White",
        imageSrc: iphoneWhite,
        price: "67,499",
        rating: 4.6
    },
    {
        id: 15,
        name: "Headphone z-23c",
        imageSrc: headphoneZ23c,
        price: "11,999",
        rating: 4.6
    },
    {
        id: 16,
        name: "eWatch SF 3 White",
        imageSrc: eWatchWhite,
        price: "39,500",
        rating: 4.6
    },
    {
        id: 17,
        name: "Chair",
        imageSrc: chair,
        price: "39,500",
        rating: 4.5
    },
    {
        id: 18,
        name: "eDiaplay XE",
        imageSrc: eDisplayXE,
        price: "54,499",
        rating: 4.5
    },
    {
        id: 19,
        name: "Samsung Galaxy Z Flip6",
        imageSrc: Flip6,
        price: "95,999",
        rating: 4.5
    },
    {
        id: 20,
        name: "Headphone or-27n",
        imageSrc: headphoneOr27c,
        price: "8,199",
        rating: 4.5
    },
]
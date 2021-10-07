const products = [
  {
    name: "iPhone 12 Pro Max",
    imageUrl:"https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/10/iphone-12-pro-max-frandroid-2020.png?resize=580,580",
    description:"The iPhone 12 Pro Max is the high-end large-format model of the 14th generation of Apple's smartphone announced on October 13, 2020. It is equipped with a 6.7-inch OLED HDR 60 Hz display, a triple photo sensor with ultra wide-angle and telephoto (x5 optical) and an Apple A14 Bionic SoC compatible 5G (sub-6 GHz)",
    price: 499,
    countInStock: 15,
  },
  {
    name: "iPhone 11 Pro Max",
    imageUrl:"https://cdn.dxomark.com/wp-content/uploads/medias/post-54718/Apple-iPhone-11-Pro-Max-Midnight-Green-frontimage-1-1024x768.jpg",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1075,
    countInStock: 10,
  },
  {
    name: "iPhone 13 Pro Max",
    imageUrl:"https://cdn.mos.cms.futurecdn.net/rLecceUS5Uz96cw7YiMgBJ-970-80.jpg.webp",
    description:"Apple iPhone 13 mini was released in 2021 It measures 131.5 x 64.2 x 7.7 mm and weighs 141 g It has a 5.4 inch Super Retina XDR OLED display The screen definition is 1080 x 2340 and the resolution is 476 ppi. A 12 MP Dual camera is responsible for selfies and video calls The main Dual device is 12 MP The device incorporates a Hexa-core processor (2x3.22 GHz + 4x1.9 GHz)and memory 128GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RA The battery is 0 mAh For more details, continue reading.",
    price: 1200,
    countInStock: 12,
  },
  {
    name:"Sony PlayStation 5",
    imageUrl:"https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/02/sony-playstastion-5-2020-frandroid-officiel.png?resize=580,580",
    description:"The PS5 is a home console with optical support (4K Blu-ray) announced for the end of 2020. The PS5 logically succeeds the PS4 and introduces with it a new hardware architecture with an AMD Octa-Core CPU clocked at 3 , 5 GHz supportedby 16 GB of GDDR6 RAM and an AMD RDNA 2 GPU. Its price has not been formalized.",
    price:499,
    countInStock:15,
    },
    
  {
    name: "Canon EOS R5",
    imageUrl:"https://www.wiki.tn/21068-large_mobi_default/haut-parleur-jbl-flip-4-noir.jpg",
    description:"The EOS R5 is Canon's flagship full-frame mirrorless camera in 2020. It features an all-new, Canon-developed 45MP CMOS sensor with in-body image stabilization that can reduce shake by up to 8 stops. The camera uses the Dual Pixel AF II system, which has 1053 AF points across the entire frame. The advanced autofocus system uses Deep Learning to track both people and animals. The R5 is capable ofshooting bursts at 20 fps with its electronic shutter and 12 fps with the mechanical shutter, both with continuous AF.",
    price: 3899,
    countInStock: 13,
  },
 
  {
    name: "ATH-M50x",
    imageUrl:"https://www.audio-technica.com/fr-fr/media/catalog/product/cache/8dd197211b5cade13ef7fc9815610330/a/t/ath-m50x_01_1.png,",
    description:"The ATH-M50x has the same recognized sound signature, and now offers a detachable cable. With its wide-aperture transducers, sound isolating cups and rugged construction, the M50x provides a unique experience for the most demanding audio professionals.",
    price: 149,
    countInStock: 18,
   },
  {
    name:"Apple MacBook Air 13 pouces",
imageUrl:"https://img.bfmtv.com/c/1256/708/a17/5a6e799f9cf254a01f1c9add5459f.jpg",
description:"The Apple MacBook Air 13 is a major update to the brand's flagship ultraportable. It is equipped with a 13.3-inch Retina display. Ultracompact and light, it has an Intel i5 processor (8th generation), Y series, and only 128 GB of SSD storage.",
price:2199,
countInStock:10,
},
{
name:"Lenovo 5i Pro",
imageUrl:"https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2021/01/Lenovo-IdeaPad-5G.jpg",

description:"The IdeaPad 5i Pro Gen 6 (16 Intel) features a massive 16:10 2.5K QHD 350 nit screen bright enough for use in direct sunlight. Its 4 narrow bezels make the most of its display space and its 100% sRGB palette colors seem to come to life.",
price:899,
countInStock:16,
},
{
name:"HP Elite Folio",
imageUrl:"https://www.journaldugeek.com/content/uploads/2021/01/fireshot-capture-392-ces-2021-lelite-folio-de-hp-un-pc-portable-2-en-1-novateur-les---www-lesnumeriques-com--640x342.png",
description:"a PC and tablet hybrid, capable of transitioning from one state to another by folding forward. Not enough to revolutionize the market, but with its 13.5 inches of diagonal, its compact size and its leather covering, the terminal seems to be a good compromise between a computer and a tablet. A stylus is also supplied with the Elite Folio, allowing the display to be used as a graphics tablet when laid flat.The latter can also be stored and recharged in a dedicated storage space inside the keyboard.Equipped with a Snapdragon 8cx Gen 2 5G, the HP Elite Folio also integrates up to 16 GB of RAM and 512 GB of storage. Compatible with 4G, 5G, but also WiFi 6, Bluetooth 5.0, the terminal also accommodates two USB-C ports, a mini-jack, as well as a slot for a nanoSIM card.",
price:349,
countInStock:12,
},
{
name:"Acer Nitro AN515-54-53CU",
imageUrl:"https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/7/5/4/754f7bbf13_50172308_screenshot-2021-01-20-083354.jpg",
description:"Acer is releasing its new high-performance Acer Nitro 5 AN515-54-53CU gaming laptop with a 15-inch IPS Full HD anti-glare screen in France, which is not included with Windows. It has a dedicated NVIDIA Turing GTX 1660 Ti graphics card, fast SSD storage, a Quad Core i5 Coffee Lake Refresh processor, Wi-Fi ax and USB 3.1 Type-C connectivity or a backlit chiclet keyboard.",
price:500,
countInStock:19,
},
{
name:"Samsung Galaxy Book Pro",
imageUrl:"https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/04/samsung-galaxy-book-pro-360-frandroid-2021.png?resize=580,580",
description:"The Samsung Galaxy Book Pro 360 is the most boosted laptop of the 3 Galaxy Book announced in 2021. It differs from the Pro version by the touchscreen and S-Pen compatibility and it can be used as a tablet (2- in 1). It is 5G compatible, while the Pro version is 4G compatible.",
price:1490,
countInStock:4,
},
{
name:"Samsung Galaxy TabPro S",
imageUrl:"https://tt-hardware.com/wp-content/uploads/2020/11/Samsung-galaxy-tabpro-S-avis-543x420.jpg",
description:"One of the strengths of the Samsung Tap Pro S is its screen displaying a Super Amoled panel. A screen that breaks with the codes of IPS, VA or TN screens, more or less high performance. Opting for the Samsung Galaxy TapPro S 12 ’’ is the assurance of taking advantage of the beautiful and vivid colors with a fair and deep contrast ratio.",
price:900,
countInStock:4,
}

  
];

module.exports = products;

const sampleClothings = [
  {
    name: "Classic T-Shirt",
    category: "Shirts",
    image:
      "https://img.freepik.com/free-photo/white-shirt-gentleman-street-photography_1409-6743.jpg?t=st=1724865175~exp=1724868775~hmac=0d59d2c94aee08579854a3fcc4e2f38137962b732443d87aba412c9e23ef15c5&w=900",
    size: "M",
    price: 29.99,
    description: "A classic cotton T-shirt available in various colors. Perfect for casual wear.",
    brand: "ComfyWear",
  },
  {
    name: "Denim Jacket",
    category: "Jackets",
    image:
      "https://img.freepik.com/free-photo/contemplating-young-woman-holding-disposable-coffee-standing-front-blue-wall_23-2148193856.jpg?t=st=1724865308~exp=1724868908~hmac=d931f89227cab426b5bab520a78de15616796978bf7e3ff6458fc4997493b4e3&w=360",
    size: "L",
    price: 59.99,
    description:
      "A durable denim jacket with a modern fit. Ideal for a rugged look.",
    brand: "UrbanStyle",
  },
  {
    name: "Summer Dress",
    category: "Dresses",
    image:
      "https://img.freepik.com/free-photo/woman-with-shopping-bags-isolated_1303-14051.jpg?t=st=1724865350~exp=1724868950~hmac=13d712155174b7430cd4a1ca5997e15590d6e81d82520735209baca9564368cb&w=900",
    size: "S",
    price: 45.5,
    description:
      "Light and airy summer dress, perfect for warm weather outings.",
    brand: "SunnyDay",
  },
  {
    name: "Wool Sweater",
    category: "Sweaters",
    image:
      "https://img.freepik.com/free-photo/cozy-soft-sweater-beautiful-ornament_169016-4981.jpg?t=st=1724865385~exp=1724868985~hmac=ea7bc1c5f5fb3f02521be02a3c0e3611f9813f2b3bbfd4f93848462eb3d38537&w=360",
    size: "XL",
    price: 75.0,
    description: "A warm wool sweater, perfect for chilly weather.",
    brand: "CozyKnits",
  },
  {
    name: "Cargo Pants",
    category: "Pants",
    image:
      "https://img.freepik.com/free-psd/cargo-pants-men-with-plain-isolated-transparent-background_191095-17054.jpg?t=st=1724865424~exp=1724869024~hmac=8e2eb9d3aafc66fa58fe5a2e2288c7261ea3890cb1b49d64e4dda319a0fc2fa6&w=740",
    size: "M",
    price: 34.99,
    description: "Comfortable cargo pants with multiple pockets.",
    brand: "AdventureGear",
  },
  {
    name: "Leather Belt",
    category: "Accessories",
    image:
      "https://img.freepik.com/free-vector/black-realistic-curled-leather-belt-with-metal-buckle_1284-7985.jpg?t=st=1724865500~exp=1724869100~hmac=0799212cf711d3284a892981322a1f81031ea00cb746dbbddef9d79f7d7c74fe&w=740",
    size: "L",
    price: 19.99,
    description: "A genuine leather belt that complements any outfit.",
    brand: "FineAccents",
  },
  {
    name: "Sports Shorts",
    category: "Shorts",
    image:
      "https://img.freepik.com/free-vector/soccer-uniform-concept_52683-43145.jpg?t=st=1724865545~exp=1724869145~hmac=9062e52bbdce807331b9fb1963d51635814dee5885e0aa61adffa1df3b2fcb31&w=740",
    size: "XL",
    price: 24.99,
    description: "Breathable sports shorts for high-performance activities.",
    brand: "Athlete's Choice",
  },
  {
    name: "Flannel Shirt",
    category: "Shirts",
    image:
      "https://img.freepik.com/free-photo/close-up-flannel-shirt-detail_23-2149575388.jpg?t=st=1724865579~exp=1724869179~hmac=23e3c9133bd5624724ec396e4263cfaf95e8e04809b0a1b5402ea4971e28dfd1&w=360",
    size: "L",
    price: 39.99,
    description: "A cozy flannel shirt, great for layering in colder months.",
    brand: "MountainWear",
  },
  {
    name: "Silk Scarf",
    category: "Accessories",
    image:
      "https://img.freepik.com/free-vector/3d-realistic-silk-red-scarf-knitted-fabric-cloth-alpaca-wool-winter_1441-1816.jpg?t=st=1724865637~exp=1724869237~hmac=3936b877c0e1201f27868d2b85e91575d0dd5dbc22fea3832335aa4a4d1d80d2&w=740",
    size: "M",
    price: 15.0,
    description: "Elegant silk scarf with a floral print.",
    brand: "Elegance",
  },
  {
    name: "Jeans",
    category: "Pants",
    image:
      "https://img.freepik.com/free-photo/blue-jeans-fabric-details_150588-42.jpg?t=st=1724865674~exp=1724869274~hmac=dcdf57d60ce5dbbef80a59da501232bfefb9d7cb7b388507c80ca5e301bb50a3&w=360",
    size: "M",
    price: 49.99,
    description: "Classic blue jeans with a comfortable fit.",
    brand: "DenimWorks",
  },
  {
    name: "Beanie",
    category: "Accessories",
    image:
      "https://img.freepik.com/free-photo/portrait-teenage-girl-pointing-wearing-beanie_23-2149334609.jpg?t=st=1724865719~exp=1724869319~hmac=8bfad521bae235452cf3705c7779c5ede238985f73eb384d1d9aba0de809a7a2&w=900",
    size: "L",
    price: 12.5,
    description: "A warm beanie, perfect for winter.",
    brand: "WinterGear",
  },
  {
    name: "Cotton Polo",
    category: "Shirts",
    image:
      "https://img.freepik.com/free-photo/white-shirt_144627-34324.jpg?t=st=1724865753~exp=1724869353~hmac=85f932ad040aaac8d0702065d98bc49cd536b10e18fb58127e348c71e8d38c5a&w=826",
    size: "S",
    price: 32.0,
    description: "A soft cotton polo, great for casual outings.",
    brand: "ClassicWear",
  },
  {
    name: "Athletic Socks",
    category: "Accessories",
    image:
      "https://img.freepik.com/free-photo/soccer-player-putting-his-socks_23-2147604964.jpg?t=st=1724865936~exp=1724869536~hmac=768c4015c5f5da3b295fa2887acbd73b875420032f1c0bbc93344f7b12726e88&w=900",
    size: "M",
    price: 8.99,
    description: "Moisture-wicking athletic socks, ideal for sports.",
    brand: "Runner's Edge",
  },
  {
    name: "Pleated Skirt",
    category: "Skirts",
    image:
      "https://img.freepik.com/free-photo/cute-young-dark-haired-woman-enjoying-her-dance_259150-58977.jpg?t=st=1724866039~exp=1724869639~hmac=53dae8e47c293a08af4f8d74162e5dda6b770b49bc6cf53aeee38847a29d7ce3&w=360",
    size: "M",
    price: 37.5,
    description: "A chic pleated skirt, perfect for office or casual wear.",
    brand: "CityStyle",
  },
  {
    name: "Chino Shorts",
    category: "Shorts",
    image:
      "https://img.freepik.com/free-photo/man-wearing-beige-shorts-close-up_53876-125260.jpg?t=st=1724866087~exp=1724869687~hmac=ded5c429178040c99660dfba36e4400be12aec57f5c54309e0219e99b2cc8f03&w=740",
    size: "M",
    price: 27.99,
    description: "Stylish chino shorts, perfect for summer.",
    brand: "SunnyOutfit",
    createdAt: "2023-07-12T12:00:00Z",
  },
  {
    name: "Running Shoes",
    category: "Shoes",
    image:
      "https://img.freepik.com/free-photo/close-up-runner-shoes-with-red-laces_23-2148381975.jpg?t=st=1724866134~exp=1724869734~hmac=787ca16b90b4c73d074ee92493a8178b79ba92f4d994fcdc6ff5aaeef50756b0&w=740",
    size: "L",
    price: 69.99,
    description: "High-performance running shoes with great cushioning.",
    brand: "Speedster",
  },
  {
    name: "Puffer Jacket",
    category: "Jackets",
    image:
      "https://img.freepik.com/free-photo/stylish-woman-posing-winter-autumn-fashion-trend-blue-puffer-coat-hat-beret-old-beautiful-street_285396-6939.jpg?t=st=1724866170~exp=1724869770~hmac=d5957c9d88cc0255a30bbe2f98bce845d61b649b452c9e809e97a068d005e1e3&w=360",
    size: "XL",
    price: 89.99,
    description: "A lightweight puffer jacket that offers excellent warmth.",
    brand: "ColdDefender",
    createdAt: "2023-11-25T12:00:00Z",
  },
  {
    name: "Khaki Pants",
    category: "Pants",
    image:
      "https://img.freepik.com/free-photo/view-beige-tone-colored-pants_23-2150773376.jpg?t=st=1724866215~exp=1724869815~hmac=3af037ef7943e2d196edc2881f9edf9f08b27580e9b9173fef433e451e0a3866&w=360",
    size: "M",
    price: 42.0,
    description:
      "Versatile khaki pants, suitable for both casual and formal wear.",
    brand: "EverydayWear",
  },
  {
    name: "Baseball Cap",
    category: "Accessories",
    image:
      "https://img.freepik.com/free-photo/view-baseball-cap_23-2151023612.jpg?t=st=1724866249~exp=1724869849~hmac=a84d68b88de6c8ff70d7a76d05ce45db9cbd355564192bac62ad0ff6279b7980&w=360",
    size: "M",
    price: 15.99,
    description: "A classic baseball cap with adjustable strap.",
    brand: "CapWorld",
  },
  {
    name: "Striped T-Shirt",
    category: "Shirts",
    image:
      "https://img.freepik.com/free-photo/woman-red-striped-crop-top-fashion-shoot_53876-102199.jpg?t=st=1724866285~exp=1724869885~hmac=894e7970337d7dca95a93857a4c348094bea89cc3553ce1ae08cf1b513d5f567&w=740",
    size: "S",
    price: 22.5,
    description: "A stylish striped T-shirt for everyday wear.",
    brand: "ComfortZone",
  },
  {
    name: "Fleece Jacket",
    category: "Jackets",
    image:
      "https://img.freepik.com/free-photo/young-man-with-beard-putting-hood-his-stylish-red-grey-anorack-isolated-white_346278-948.jpg?t=st=1724866324~exp=1724869924~hmac=77dde033e1c37ca982e1ba488a349f6d8c899471cbf04acf606a3300a4c604ac&w=900",
    size: "M",
    price: 64.99,
    description: "A soft fleece jacket that keeps you warm.",
    brand: "ComfortZone",
  },
];

module.exports = { data: sampleClothings };

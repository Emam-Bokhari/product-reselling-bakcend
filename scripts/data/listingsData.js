// 112 realistic, authentic listings for ReSellBD (14 items x 8 categories)
// Each item has at least 5 images and extensive, rich descriptions.
const { get5Images } = require('../seedHelpers');

const CATEGORIES = [
  'mobiles',
  'electronics',
  'vehicles',
  'property',
  'home',
  'pets',
  'cloths',
  'sports'
];

const RAW_LISTINGS = [
  // -------------------------------------------------------------
  // MOBILES (14 items)
  // -------------------------------------------------------------
  {
    category: 'mobiles',
    title: 'Apple iPhone 15 Pro Max 256GB Natural Titanium (Dual Physical SIM)',
    brand: 'Apple',
    price: 132000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'AppleCare+ valid till December 2026',
    contactNumber: '01712498765',
    descParts: [
      'Selling my personal Apple iPhone 15 Pro Max 256GB Natural Titanium edition. Purchased directly from Apple Store Dubai with authentic purchase invoice and customs duty paid.',
      'The phone is in immaculate, flawless 10/10 cosmetic and functional condition. Battery health is strictly at 97% with very low cycle counts, as it was used as a secondary device. Both physical SIM slots work seamlessly with all Bangladeshi 4G/5G mobile operators (GP, Robi, Banglalink, Teletalk).',
      'Original screen has had a Belkin UltraGlass screen protector installed from the moment the box was opened. Titanium frame is completely spotless with zero dents, scratches, or wear. Camera lenses are protected with sapphire lens covers.',
      'Includes original retail box matching serial and IMEI numbers, original Apple braided USB-C fast charging cable (unused), two premium Spigen MagSafe rugged cases, and official purchase receipt.',
      'Price is slightly negotiable for serious buyers. Face-to-face inspection and device verification welcome at Banani Supermarket or Jamuna Future Park. Real buyers please call or WhatsApp.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Samsung Galaxy S24 Ultra 512GB Titanium Black (Official Bangladesh Warranty)',
    brand: 'Samsung',
    price: 145000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '8 Months Official Samsung BD Warranty remaining',
    contactNumber: '01819876543',
    descParts: [
      'Official Samsung Galaxy S24 Ultra 512GB ROM and 12GB RAM in Titanium Black color. Purchased officially from Samsung SmartPlaza Gulshan with official warranty card and retail tax memo.',
      'Powered by the flagship Snapdragon 8 Gen 3 for Galaxy, featuring the anti-reflective flat Dynamic AMOLED 2X display with 2600 nits peak brightness. Galaxy AI features (Live Translate, Circle to Search, Note Assist, Photo Assist) work flawlessly.',
      'Device condition is practically showroom condition. No cosmetic scuffs or micro-scratches. Built-in S-Pen operates smoothly with zero latency. 5000mAh battery delivers an effortless 8+ hours screen-on time with 45W super-fast charging capability.',
      'Includes original box, warranty paper, factory data cable, and a Ringke Onyx military-grade shockproof case. Will also provide the official Samsung 45W fast charging adapter.',
      'Meetup location: Gulshan 1 or Dhanmondi 27. You can run all Samsung Member diagnostics tests on the spot before finalizing the purchase.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Google Pixel 8 Pro 128GB Obsidian Black (Unlocked, Tensor G3)',
    brand: 'Google',
    price: 78000,
    condition: 'used',
    location: 'Chattogram',
    negotiable: 'no',
    warranty: '7 Days Personal Check Warranty',
    contactNumber: '01911456789',
    descParts: [
      'Google Pixel 8 Pro 128GB Obsidian Black in mint used condition. Imported directly from Google Store USA. Factory unlocked supporting eSIM plus Physical SIM with top-tier 5G speeds on local networks.',
      'Features the Google Tensor G3 chip with Titan M2 security coprocessor. The 6.7-inch Super Actua LTPO OLED 120Hz display is stunning with vibrant color calibration. Camera system with Best Take, Magic Editor, and Video Boost produces industry-leading mobile photography.',
      'Used very carefully for around 5 months with case and screen protector. Battery health is estimated at 95%, easily giving a full day and a half on mixed Wi-Fi and mobile data usage.',
      'Comes with authentic Google retail box, original USB-C to USB-C 3.2 cable, Quick Switch adapter, and one Caseology Parallax textured back cover.',
      'Location: GEC Circle, Nasirabad, Chattogram. Fixed price, strictly no exchange offers. Direct test and hand-to-hand deal only.'
    ]
  },
  {
    category: 'mobiles',
    title: 'OnePlus 12 512GB Emerald Green (16GB RAM, Snapdragon 8 Gen 3)',
    brand: 'OnePlus',
    price: 76000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '10 Months International Warranty with Bill',
    contactNumber: '01612345670',
    descParts: [
      'OnePlus 12 flagship 16GB LPDDR5X RAM and 512GB UFS 4.0 storage in stunning Flowy Emerald Green marble finish. Truly a powerhouse designed for heavy multi-tasking, content creation, and 120fps gaming.',
      'Equipped with Hasselblad 4th-Gen camera array featuring the Sony LYT-808 primary sensor and 64MP periscope telephoto lens. 5400mAh dual-cell battery charges from 0 to 100% in just 26 minutes with the included 100W SUPERVOOC brick.',
      'Mint condition: no blemishes, no dents, zero screen burn. Running the latest smooth OxygenOS 14 with Android 14, guaranteed four major Android OS upgrades.',
      'Package includes complete retail packaging, 100W original SUPERVOOC charger, red cable club charging wire, SIM ejector, official sandstone protective case, and original warranty documentation.',
      'Reason for sale: Switching to iOS ecosystem for official workplace requirements. Meetup: Dhanmondi or Uttara.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Apple iPhone 14 Pro 128GB Deep Purple (Battery Health 91%)',
    brand: 'Apple',
    price: 95000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Apple Official Warranty Expired, 1 Month Shop Warranty',
    contactNumber: '01715678901',
    descParts: [
      'Up for sale is an authentic Apple iPhone 14 Pro 128GB in the most desirable Deep Purple color. Physical SIM + eSIM global variant (Japan/Singapore). Fully unlocked with zero Carrier or iCloud lock.',
      'Dynamic Island, Always-On ProMotion 120Hz Super Retina XDR screen, and the formidable 48MP Pro camera system with Photonic Engine. Cinematic mode and Action mode video recording work with buttery smoothness.',
      'Original battery health stands at 91%. Phone was kept with tempered glass screen and camera protector from the very beginning. Surgical-grade stainless steel band has slight normal polish signs but zero dents or structural impact.',
      'Complete package with original box, Apple Lightning to USB-C charging cable, and two Torras magnetic kickstand cases.',
      'Pickup and full checkup at Bashundhara R/A Gate 1 or Jamuna Future Park. Price slightly negotiable on prompt cash deals.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Samsung Galaxy Z Fold 5 256GB Phantom Black (Dual SIM Foldable)',
    brand: 'Samsung',
    price: 115000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Samsung Care+ coverage active',
    contactNumber: '01314567892',
    descParts: [
      'Samsung Galaxy Z Fold 5 5G 256GB storage and 12GB RAM in classic Phantom Black. Zero gap flex hinge design, lightweight folding form factor with IPX8 water resistance.',
      'Both inner 7.6-inch Dynamic AMOLED 2X 120Hz foldable display and 6.2-inch outer cover screen are in 100% pristine condition with factory inner screen protector untouched and bubble-free. Hinge feels crisp, firm, and opens to 180 degrees effortlessly.',
      'Snapdragon 8 Gen 2 for Galaxy delivers outstanding thermal efficiency and desktop-like multi-tasking with Samsung DeX. Perfect tool for productivity, trading, reading PDFs, and media consumption.',
      'Includes original box, USB-C cable, original Samsung Eco-Leather standing case with integrated S-Pen Fold Edition.',
      'Dealing strictly in person around Gulshan 2 or Mohakhali DOHS. You can check the screen fold, crease, and cameras as much as you like.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Xiaomi 14 Ultra 512GB Leica Photography Flagship White Ceramic',
    brand: 'Xiaomi',
    price: 102000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Official Global Warranty Document included',
    contactNumber: '01815678923',
    descParts: [
      'Xiaomi 14 Ultra 512GB ROM and 16GB RAM in White Nano-Tech Vegan Leather. Co-engineered with Leica, featuring a 1-inch Sony LYT-900 sensor with stepless variable aperture (f/1.63 to f/4.0).',
      'The pinnacle of mobile camera performance with four 50MP Leica tuned lenses covering 12mm ultra-wide to 120mm periscope zoom. 6.73-inch WQHD+ 120Hz LTPO AMOLED display with 3000 nits brightness and Dolby Vision.',
      'Hardly used for 2 months by a gadget collector. Pristine condition with zero scratches, scuffs, or heating issues. 5000mAh battery with 90W wired and 80W wireless charging.',
      'Comes with full retail box, original 90W fast power adapter, type-C cord, factory case, and an extra Photography Kit grip attachment.',
      'Strictly fixed price for photography enthusiasts. Meetup at Uttara Sector 7 or Banani.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Apple iPhone 13 Mini 128GB Midnight (Compact Powerhouse, 90% Battery)',
    brand: 'Apple',
    price: 52000,
    condition: 'used',
    location: 'Sylhet',
    negotiable: 'yes',
    warranty: 'Check warranty 10 days',
    contactNumber: '01712398711',
    descParts: [
      'Rare Apple iPhone 13 Mini 128GB in Midnight Black. The last and finest compact flagship Apple ever engineered, fitting comfortably in any palm or pocket.',
      'Features 5.4-inch Super Retina XDR OLED display, A15 Bionic chip with fast 5G, and dual 12MP cameras with sensor-shift optical image stabilization and Cinematic Mode.',
      'Battery health is 90% and easily powers through a full day of standard communication and browsing. Back glass, ceramic shield front, and aluminum edges are in great shape with minor cosmetic pocket marks on one edge.',
      'Comes with box, original cable, and an Apple original silicone case in Abyss Blue.',
      'Meetup in Sylhet Zindabazar or Amberkhana. Courier possible via Sundarban with condition deposit.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Asus ROG Phone 8 Pro 512GB Phantom Black (AniMe Vision, AirTrigger)',
    brand: 'Asus',
    price: 89000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '6 Months International Warranty remaining',
    contactNumber: '01912349087',
    descParts: [
      'Asus ROG Phone 8 Pro 512GB storage / 16GB RAM. The ultimate flagship mobile gaming beast featuring Snapdragon 8 Gen 3, AniMe Vision programmable mini-LED back display, and IP68 waterproof rating.',
      '165Hz Samsung E6 AMOLED screen with 2500 nits peak brightness and 720Hz touch sampling rate. Ultrasonic AirTrigger shoulder buttons offer console-grade controls for PUBG Mobile, Call of Duty Warzone, and Genshin Impact.',
      'Mint condition. Zero thermal throttling, dual stereo speakers with Dirac Virtuo sound, and 5500mAh split battery with bypass charging.',
      'Full box with 65W HyperCharge adapter, braided USB-C cable, AeroActive Cooler X external fan accessory, and bumper case.',
      'Meetup in Mirpur 10 or Dhanmondi. Serious mobile gamers feel free to contact.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Google Pixel 7a 128GB Sea Blue (Dual SIM 5G, Pristine Condition)',
    brand: 'Google',
    price: 38000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '7 Days Money Back Replacement Guarantee',
    contactNumber: '01614567891',
    descParts: [
      'Google Pixel 7a 128GB in beautiful Sea Blue pastel color. Google Tensor G2 processor, 64MP flagship camera with Super Res Zoom, and pure Pixel stock Android with instant updates.',
      'Physical SIM + eSIM 5G unlocked. 90Hz Smooth Display, wireless charging support, and IP67 dust/water resistance. Very clean device used with care by a corporate executive.',
      'Battery health is very solid, easily lasting 24+ hours on moderate usage with Adaptive Battery management.',
      'Includes original box, USB-C data cable, and a Nillkin textured camera slider case.',
      'Location: Mohammadpur or Dhanmondi 27. Test all sensors, cameras, and microphones freely before purchasing.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Nothing Phone (2) 256GB Dark Grey (Glyph Interface, 12GB RAM)',
    brand: 'Nothing',
    price: 48000,
    condition: 'likeNew',
    location: 'Chattogram',
    negotiable: 'yes',
    warranty: '3 Months Shop Warranty remaining',
    contactNumber: '01814567890',
    descParts: [
      'Nothing Phone (2) 256GB storage, 12GB RAM in Dark Grey transparent glass back with customizable LED Glyph lighting interface. Powered by the reliable and cool Snapdragon 8+ Gen 1.',
      '6.7-inch flexible LTPO OLED display with 1-120Hz adaptive refresh rate and symmetrical ultra-thin bezels. Nothing OS 2.5 is clean, bloatware-free, snappy, and battery efficient.',
      'Cosmetic condition: 9.9/10, no dings, no scratches. 4700mAh battery with 45W wired and 15W wireless charging.',
      'Box, transparent Nothing type-C cable, SIM tool, and clear protective bumper included.',
      'Meetup: Agrabad Commercial Area or Panchlaish, Chattogram.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Samsung Galaxy S23 FE 128GB Mint Green (Official BTRC Registered)',
    brand: 'Samsung',
    price: 45000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Official Samsung warranty valid for 4 more months',
    contactNumber: '01719876542',
    descParts: [
      'Samsung Galaxy S23 FE (Fan Edition) 128GB ROM, 8GB RAM in Mint Green. BTRC registered official phone with valid tax receipt and official Samsung Bangladesh warranty.',
      '6.4-inch Dynamic AMOLED 2X 120Hz HDR10+ display with Corning Gorilla Glass 5. 50MP triple camera system with 3x optical telephoto lens and Nightography capability.',
      'Gently used for 8 months. Screen and back glass are pristine. Premium aluminum frame has slight normal protective case friction marks.',
      'Full box, original warranty memo, charging cable, and Spigen Rugged Armor case.',
      'Location: Bashundhara R/A or Uttara Sector 3. Fixed price.'
    ]
  },
  {
    category: 'mobiles',
    title: 'Apple iPhone 12 Pro Max 256GB Pacific Blue (Factory Unlocked)',
    brand: 'Apple',
    price: 68000,
    condition: 'used',
    location: 'Rajshahi',
    negotiable: 'yes',
    warranty: '10 Days Check Warranty',
    contactNumber: '01915678901',
    descParts: [
      'Apple iPhone 12 Pro Max 256GB Pacific Blue. 6.7-inch Super Retina XDR OLED display, A14 Bionic chip, and LiDAR scanner for advanced AR and low-light portraits.',
      'Physical SIM + eSIM unlocked. Battery health is at 86%, still provides solid battery backup throughout the entire workday.',
      'Original screen and original cameras, never opened or repaired. TrueTone, Face ID, and MagSafe work 100% fine.',
      'Box and original USB-C to Lightning cable included.',
      'Meetup in Rajshahi Shaheb Bazar or Motihar campus.'
    ]
  },
  {
    category: 'mobiles',
    title: 'OnePlus Nord 3 5G 256GB Misty Green (16GB RAM, Dimensity 9000)',
    brand: 'OnePlus',
    price: 32000,
    condition: 'used',
    location: 'Bogura',
    negotiable: 'yes',
    warranty: '7 Days Personal Testing Warranty',
    contactNumber: '01512345678',
    descParts: [
      'OnePlus Nord 3 5G top variant with 16GB RAM and 256GB storage in glossy Misty Green. Flagship MediaTek Dimensity 9000 4nm processor with liquid cooling.',
      '1.5K 120Hz Super Fluid AMOLED flat display with HDR10+ and 50MP Sony IMX890 sensor with OIS identical to flagship OnePlus 11.',
      'Used for 10 months with extreme care. 5000mAh battery charges to full in 30 minutes with the 80W SUPERVOOC adapter.',
      'Includes original box, 80W charger, red cable, and silicon case.',
      'Meetup at Jaleshwaritola, Bogura.'
    ]
  },

  // -------------------------------------------------------------
  // ELECTRONICS (14 items)
  // -------------------------------------------------------------
  {
    category: 'electronics',
    title: 'Apple MacBook Pro 16" M3 Max 36GB RAM 1TB SSD Space Black',
    brand: 'Apple',
    price: 365000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Official AppleCare+ valid until November 2026',
    contactNumber: '01711122334',
    descParts: [
      'Apple MacBook Pro 16-inch with Apple Silicon M3 Max (14-core CPU, 30-core GPU, 16-core Neural Engine), 36GB unified memory, and 1TB ultra-fast PCIe Gen4 SSD in Space Black.',
      'Liquid Retina XDR display with 1600 nits peak HDR brightness and 120Hz ProMotion. Stunning Six-speaker sound system with force-cancelling woofers and studio-quality mics.',
      'Condition is flawless 10/10. Battery cycle count is only 28, battery health at 100%. The laptop has been used on a rain-design mStand with external keyboard and monitor.',
      'Includes original 140W USB-C Power Adapter, color-matched Space Black MagSafe 3 braided cable, original Apple shipping box, and retail packaging with invoices.',
      'Deal in Banani or Gulshan 2. Perfect machine for 8K video editing, large machine learning models, and complex 3D rendering.'
    ]
  },
  {
    category: 'electronics',
    title: 'Dell XPS 15 9530 OLED 3.5K Touch i9 32GB RAM 1TB RTX 4070',
    brand: 'Dell',
    price: 245000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Dell ProSupport On-Site Warranty Active',
    contactNumber: '01812233445',
    descParts: [
      'Dell XPS 15 9530 Premium Creator Laptop. Equipped with Intel Core i9-13900H (14 cores, 20 threads), NVIDIA GeForce RTX 4070 8GB GDDR6, 32GB DDR5 4800MHz RAM, and 1TB NVMe SSD.',
      'Features the breathtaking 15.6" 3.5K (3456x2160) InfinityEdge OLED Touch display with 100% DCI-P3 color gamut and 500 nits brightness. CNC machined aluminum chassis with carbon fiber palm rest.',
      'Flawless condition, zero thermal degradation, pristine glass trackpad. Battery health 98% with 86Whr battery delivering up to 7 hours of productivity work.',
      'Comes with authentic 130W Dell USB-C Type-C power brick, USB-C to USB-A/HDMI dongle, and factory packaging.',
      'Meetup in Dhanmondi 27 or Uttara Sector 4. Benchmarking with Cinebench and FurMark allowed.'
    ]
  },
  {
    category: 'electronics',
    title: 'Sony Alpha A7 IV Full-Frame Mirrorless Camera with 28-70mm Lens',
    brand: 'Sony',
    price: 210000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '1 Year International Sony Warranty Document',
    contactNumber: '01913344556',
    descParts: [
      'Sony Alpha A7 IV (ILCE-7M4) full-frame mirrorless camera paired with Sony FE 28-70mm f/3.5-5.6 OSS zoom lens. Shutter count is extremely low at just 3,450 shots.',
      '33MP full-frame Exmor R back-illuminated CMOS sensor, BIONZ XR processing engine, 4K 60p 10-bit 4:2:2 video recording with S-Cinetone, and 5.5-step 5-axis in-body image stabilization (IBIS).',
      'Zero scratches, sensor is dust-free, fully articulated vari-angle touchscreen LCD. Used exclusively for studio corporate interviews in air-conditioned room.',
      'Includes Sony original NP-FZ100 battery, external charger, Sony shoulder strap, body cap, lens hood, SanDisk Extreme Pro 128GB V60 SDXC card, and box.',
      'Meetup in Gulshan 1 or Bashundhara R/A. Serious filmmakers and photographers are invited to test thoroughly.'
    ]
  },
  {
    category: 'electronics',
    title: 'Sony WH-1000XM5 Wireless Noise-Cancelling Headphones Silver',
    brand: 'Sony',
    price: 32500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: '6 Months International Warranty remaining',
    contactNumber: '01614455667',
    descParts: [
      'Sony WH-1000XM5 wireless active noise cancelling over-ear headphones in elegant Silver/Platinum. Industry-leading ANC with 8 microphones and Auto NC Optimizer.',
      '30mm carbon fiber driver unit delivers crisp audiophile sound with LDAC high-resolution wireless support, DSEE Extreme, and 360 Reality Audio. 30 hours of continuous battery life with quick charging (3 min charge = 3 hours playback).',
      'Condition 10/10. Soft fit leather earcups are completely clean and fresh. Multipoint Bluetooth connection pairs seamlessly with laptop and mobile simultaneously.',
      'Comes with original magnetic collapsible hard carrying case, 3.5mm audio aux cable, USB-C charging cord, and retail box.',
      'Fixed price. Meetup at Banani or Jamuna Future Park.'
    ]
  },
  {
    category: 'electronics',
    title: 'Apple iPad Pro 12.9" M2 256GB Wi-Fi Space Gray (Liquid Retina XDR)',
    brand: 'Apple',
    price: 125000,
    condition: 'likeNew',
    location: 'Chattogram',
    negotiable: 'yes',
    warranty: 'Apple check warranty valid',
    contactNumber: '01715566778',
    descParts: [
      'Apple iPad Pro 12.9-inch (6th Generation) powered by Apple M2 chip, 256GB storage, in Space Gray. Mini-LED Liquid Retina XDR display with 1,000,000:1 contrast ratio and ProMotion 120Hz.',
      'Apple Pencil hover feature, Face ID, USB-C Thunderbolt 4 port, quad speakers, and 12MP Ultra Wide front camera with Center Stage.',
      'Hardly used for light digital sketching and Netflix. 100% battery health, zero blemishes or bends. Tempered glass protector pre-applied.',
      'Comes with original box, 20W Apple USB-C adapter, braided cable, and an ESR magnetic smart folio case.',
      'Meetup: GEC Circle or Nasirabad, Chattogram.'
    ]
  },
  {
    category: 'electronics',
    title: 'Custom High-End Gaming PC (Core i7-14700K, RTX 4080 Super, 32GB DDR5)',
    brand: 'Custom PC',
    price: 275000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Individual components have 2 to 5 years official BD warranty with memos',
    contactNumber: '01816677889',
    descParts: [
      'Custom enthusiast desktop workstation & gaming rig built 4 months ago with all genuine parts from Star Tech & UCC BD with original warranty invoices.',
      'Specifications: Intel Core i7-14700K 20-Core Processor, Gigabyte RTX 4080 Super Gaming OC 16GB, MSI MAG Z790 Tomahawk WiFi Motherboard, G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5 6400MHz RAM, Samsung 990 Pro 2TB NVMe PCIe 4.0 SSD, Deepcool LT720 360mm AIO Liquid Cooler, Corsair RM1000x 1000W 80+ Gold Fully Modular PSU, Lian Li O11 Dynamic EVO Case with 9x ARGB PWM fans.',
      'Runs cool and whisper quiet. Handles Cyberpunk 2077, Alan Wake 2 at 4K Ultra with ray-tracing above 100fps easily. Great for Blender, DaVinci Resolve, Unreal Engine 5.',
      'All original retail boxes and component warranty receipts will be handed over to the buyer.',
      'Pickup and live stresstest with 3DMark and Prime95 at my residence in Mirpur DOHS, Dhaka.'
    ]
  },
  {
    category: 'electronics',
    title: 'LG C3 55-Inch 4K OLED evo Smart TV (120Hz Gaming, Dolby Vision)',
    brand: 'LG',
    price: 135000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '1.5 Years Official Butterfly LG Warranty remaining with receipt',
    contactNumber: '01917788990',
    descParts: [
      'LG C3 55-inch OLED evo 4K Smart TV (OLED55C3PSA). Self-lit OLED pixels producing perfect black levels, infinite contrast, and over 1 billion vibrant colors.',
      'Ultimate gaming TV: 4x HDMI 2.1 ports with full 48Gbps bandwidth, 4K 120Hz, 0.1ms response time, NVIDIA G-Sync, AMD FreeSync Premium, VRR, and Game Optimizer dashboard. Alpha 9 Gen 6 AI Processor 4K with Dolby Vision and Dolby Atmos.',
      'Used for 6 months on home cinema setup in pet-free, non-smoking home. Zero burn-in, zero dead pixels (checked with full-screen test patterns). Screen is spotless.',
      'Includes original LG Magic Remote with voice control, metal desktop stand, wall mounting bracket, power cord, original packaging carton, and purchase invoice.',
      'Pickup from Dhanmondi Road 8/A. Safe packing and loading help provided.'
    ]
  },
  {
    category: 'electronics',
    title: 'Keychron Q1 Pro Wireless Custom Mechanical Keyboard (Banana Switches)',
    brand: 'Keychron',
    price: 19500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Shop warranty receipt available',
    contactNumber: '01618899001',
    descParts: [
      'Keychron Q1 Pro QMK/VIA Wireless Custom Mechanical Keyboard (75% Layout) in Carbon Black. Full CNC machined 6063 aluminum body with double-gasket acoustic mount design.',
      'Equipped with factory-lubed Keychron K Pro Banana tactile switches and premium double-shot PBT KSA profile keycaps. Sounds deep, creamy, and thocky with zero ping.',
      'Tri-mode connectivity: Bluetooth 5.1 (switches between 3 devices), 2.4GHz wired mode with 1000Hz polling rate. Mac/Windows hardware switch. Programmable rotary encoder knob for volume and media controls.',
      'Complete package with braided Type-C cable, Type-A to Type-C adapter, keycap puller, switch puller, hex key, screwdriver, extra gaskets, and box.',
      'Fixed price. Meetup at Uttara Sector 7 or Banani.'
    ]
  },
  {
    category: 'electronics',
    title: 'DJI Mini 4 Pro Fly More Combo Plus Drone with RC 2 Controller',
    brand: 'DJI',
    price: 118000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'DJI Care Refresh Active till October 2026',
    contactNumber: '01719900112',
    descParts: [
      'DJI Mini 4 Pro Fly More Combo Plus. Features omnidirectional obstacle sensing, ActiveTrack 360°, 4K 60fps HDR video, 4K 100fps slow-motion, true vertical shooting for social media, and D-Log M color profile.',
      'Includes the flagship DJI RC 2 remote controller with high-brightness 5.5-inch 1080p built-in FHD screen (no phone connection required).',
      'Flight time under 3 hours total. Zero crashes, zero propeller dings. Gimbal calibrated and operates flawlessly. 3x Intelligent Flight Batteries Plus providing up to 45 minutes flight time each.',
      'Comes with two-way charging hub, shoulder travel bag, 3 sets of spare props, screwdriver, gimbal protector, Type-C cables, and original box.',
      'Meetup in Bashundhara R/A. You can do a live test flight in open field before taking.'
    ]
  },
  {
    category: 'electronics',
    title: 'Sony PlayStation 5 Slim Digital Edition (2 DualSense Controllers, 1TB)',
    brand: 'Sony',
    price: 56000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '6 Months Shop Warranty Card with Memo',
    contactNumber: '01811223355',
    descParts: [
      'Sony PlayStation 5 Slim Digital Edition (1TB internal ultra-high speed NVMe SSD). Compact lightweight design, running latest PS5 system software.',
      'Features 4K 120Hz output, Tempest 3D AudioTech, ray-tracing hardware acceleration, and HDR support. Super quiet cooling fan with zero coil whine.',
      'Includes two original Sony DualSense wireless controllers (1 White, 1 Midnight Black) with haptic feedback and adaptive triggers in 100% working order with zero stick drift.',
      'Comes with high-speed HDMI 2.1 cable, AC power cord, USB-C controller charging cable, horizontal feet stands, and original retail box.',
      'Meetup in Mirpur 10 or Dhanmondi 27. Live gaming testing allowed.'
    ]
  },
  {
    category: 'electronics',
    title: 'Bose QuietComfort Ultra Wireless Noise-Cancelling Headphones Black',
    brand: 'Bose',
    price: 36000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: '8 Months International Warranty',
    contactNumber: '01912334466',
    descParts: [
      'Bose QuietComfort Ultra Headphones in Triple Black. World-class spatial audio with Bose Immersive Audio technology and CustomTune sound calibration tailored to your ear shape.',
      'Exceptional quiet mode and aware mode with ActiveSense. Ultra-plush protein leather ear cushions with lightweight headband clamp for all-day comfort without ear fatigue.',
      'Used only for flights during international travel. 10/10 pristine shape with clean audio drivers.',
      'Original deluxe hard zipper case, 2.5mm to 3.5mm audio cable, USB-C charging cord, and documentation in original packaging.',
      'Fixed price. Meetup at Gulshan 1.'
    ]
  },
  {
    category: 'electronics',
    title: 'Apple Watch Ultra 2 49mm Titanium Case with Orange Ocean Band',
    brand: 'Apple',
    price: 78000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Apple Official Warranty Active till January 2027',
    contactNumber: '01613445577',
    descParts: [
      'Apple Watch Ultra 2 49mm Aerospace-grade Titanium Case with Orange Ocean Band (Cellular + GPS). Powered by S9 SiP chip with Double Tap gesture and on-device Siri.',
      'Brightest Apple display ever at 3000 nits, sapphire crystal front glass, customizable orange Action button, dual-frequency precision GPS (L1 and L5), depth gauge for scuba diving up to 40 meters.',
      'Battery health is 100%, lasting 3 to 4 days on normal usage. Titanium body is completely spotless with zero scuffs or impact marks.',
      'Complete original box, Apple Watch fast magnetic charger to USB-C braided cable, and original receipt.',
      'Meetup in Banani or Dhanmondi.'
    ]
  },
  {
    category: 'electronics',
    title: 'ASUS ROG Swift 27" 1440p 240Hz OLED Gaming Monitor PG27AQDM',
    brand: 'Asus',
    price: 88000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '1.5 Years Star Tech Warranty with memo',
    contactNumber: '01714556688',
    descParts: [
      'ASUS ROG Swift PG27AQDM 27-inch 1440p (2560x1440) 240Hz 0.03ms GTG OLED Esports Gaming Monitor. Custom heatsink and intelligent voltage optimization for OLED longevity.',
      '99% DCI-P3 color gamut, 1000 nits peak HDR brightness, uniform brightness setting, anti-glare micro-texture coating for deep blacks in lit rooms.',
      'Flawless condition, zero dead subpixels, zero burn-in. DisplayPort 1.4, dual HDMI 2.0, USB hub.',
      'Includes original heavy-duty ergonomic stand with ROG tripod light projection, power brick, DP cable, HDMI cable, and original packing box.',
      'Meetup in Uttara Sector 11.'
    ]
  },
  {
    category: 'electronics',
    title: 'Canon EOS R6 Mark II Mirrorless Camera Body (24.2MP 40fps)',
    brand: 'Canon',
    price: 225000,
    condition: 'likeNew',
    location: 'Sylhet',
    negotiable: 'yes',
    warranty: '1 Year International Warranty memo',
    contactNumber: '01815667799',
    descParts: [
      'Canon EOS R6 Mark II mirrorless camera body in mint condition. Shutter count around 4,800 only. 24.2MP full-frame CMOS sensor with DIGIC X processor.',
      'Blazing fast 40fps electronic shutter shooting with full AF/AE tracking, Dual Pixel CMOS AF II with AI deep learning subject detection (humans, animals, vehicles, horses, trains, aircraft).',
      '6K oversampled uncropped 4K 60p internal video recording, Canon Log 3 (C-Log3), up to 8 stops of Coordinated In-Body Image Stabilization (IBIS). Dual UHS-II SD card slots.',
      'Original LP-E6NH battery, LC-E6 battery charger, Canon neck strap, body cap, and box packaging.',
      'Meetup in Sylhet Zindabazar or Amberkhana.'
    ]
  },

  // -------------------------------------------------------------
  // VEHICLES (14 items)
  // -------------------------------------------------------------
  {
    category: 'vehicles',
    title: 'Toyota Corolla Altis 2019 Super White (Original Paint, Octane Driven)',
    brand: 'Toyota',
    price: 245000, // in thousands (24.5 Lac = 2450000)
    priceReal: 2450000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Papers updated till December 2026',
    contactNumber: '01711224455',
    descParts: [
      'Toyota Corolla Altis 2019 model in Super White. 1.8L Dual VVT-i petrol engine with 7-speed Super CVT-i automatic transmission. Driven only 42,000 km genuine mileage.',
      '100% octane driven car with timely Mobil 1 synthetic oil changes every 4,000 km. Never converted to CNG or LPG. Engine, gearbox, AC compressor, and suspension are in 100% factory original condition.',
      'Features beige leather interior, digital climate control AC, push start, smart keyless entry, Optitron instrument cluster, multi-function steering controls, 6 airbags, ABS with EBD and Brake Assist.',
      'All fitness, tax token, and smart registration card papers are up to date with zero traffic fines. 1st party ownership, direct name transfer possible anytime at BRTA Mirpur.',
      'Price: BDT 24,50,000. Car can be inspected at Dhanmondi Road 27 with your trusted auto mechanic.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Honda Civic Turbo 1.5L 2021 Crystal Black Pearl (Sunroof, Leather)',
    brand: 'Honda',
    price: 3250000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'DHS Motors Service History Available',
    contactNumber: '01812335566',
    descParts: [
      'Honda Civic 1.5L VTEC Turbo 2021 model in stunning Crystal Black Pearl. Driven 29,500 km exclusively on Dhaka-Airport highway.',
      'Produces an exhilarating 173 bhp with Honda Earth Dreams CVT transmission and paddle shifters. Features electric tilt sunroof, LED headlights with auto high-beam, 8-way power adjustable driver seat, and full black leather upholstery.',
      'Equipped with 7-inch advanced touch display with Apple CarPlay and Android Auto, 8-speaker audio, multi-angle rearview camera with dynamic guidelines, electronic parking brake with auto brake hold.',
      'Tires replaced with fresh Michelin Pilot Sport 4 rubbers. 100% original paint, never met with any accident. Digital registration certificate ready for instant BRTA ownership transfer.',
      'Price: BDT 32,50,000. Viewable at Gulshan 2 or Baridhara DOHS.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Yamaha YZF-R15 V4 Racing Blue 2023 (Quickshifter, Dual ABS)',
    brand: 'Yamaha',
    price: 495000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'ACI Motors Showroom Papers, 2 Years Service Warranty',
    contactNumber: '01913446677',
    descParts: [
      'Yamaha YZF-R15 V4 2023 model in iconic Racing Blue. 155cc liquid-cooled 4-valve engine with Variable Valve Actuation (VVA) and Assist & Slipper Clutch.',
      'Equipped with factory bidirectional Quick Shifter, Traction Control System (TCS), Dual-Channel ABS, and gold upside-down (USD) front telescopic forks.',
      'Run only 6,800 km. Regularly serviced at authorized ACI Motors workshop with Yamalube Full Synthetic 10W-40. Mileage gives 44-48 km/L in city conditions.',
      'Zero scratches, no skidding or drop history. Digital meter with Bluetooth Y-Connect features (call alerts, fuel consumption tracker, last parking location).',
      'Dhaka Metro registration with 2-year tax token and smart card. Meetup at Mirpur DOHS or Agargaon.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Toyota Prius Alpha 2018 Pearl White (G-Touring Package, 7 Seater)',
    brand: 'Toyota',
    price: 2680000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Hybrid Battery Serviced with 6 Months Check Guarantee',
    contactNumber: '01614557788',
    descParts: [
      'Toyota Prius Alpha 2018 (ZVW40W) G-Touring Package 7-seater station wagon in Pearl White. 1.8L Atkinson cycle engine paired with Toyota Hybrid Synergy Drive.',
      'Extremely fuel efficient, giving 18-22 km/L in congested city traffic. Hybrid traction battery health is at 88% with excellent cell balance. Inverter cooling pump in top condition.',
      'Features 7 adult seats with flexible folding rows, projector LED headlights, half-leather seats, cruise control, push start, panoramic moonroof, rear AC vents, and reversing camera.',
      'Registration year 2022. All tax token and fitness documents updated till 2027. Personal family used vehicle.',
      'Inspection at Uttara Sector 3. BDT 26,80,000.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Suzuki Gixxer SF Fi Disc 2022 Metallic Triton Blue (Single ABS)',
    brand: 'Suzuki',
    price: 265000,
    condition: 'used',
    location: 'Chattogram',
    negotiable: 'yes',
    warranty: 'Showroom cash memo & warranty card available',
    contactNumber: '01715668899',
    descParts: [
      'Suzuki Gixxer SF 155cc Fuel Injection (Fi) Disc with Single Channel ABS in Metallic Triton Blue. 2022 model, run 14,200 km.',
      '155cc air-cooled engine with Suzuki Eco Performance (SEP) producing punchy low-end torque. Aerodynamic sport fairing with bright LED headlamp and twin-muffler exhaust.',
      'New MRF Revz radial rear tire installed recently. Engine oil changed every 1,500 km with Motul 7100 10W-40 synthetic oil. Clean, smooth, vibration-free ride.',
      'Chattogram Metro registration with smart card. Name transfer mandatory on sale.',
      'Price: BDT 2,65,000. Meetup at GEC Circle, Chattogram.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Honda Vezel Z Sensing Hybrid 2018 Premium Crystal Red',
    brand: 'Honda',
    price: 2550000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Dual-Clutch Actuator Serviced, Updated Papers',
    contactNumber: '01816779900',
    descParts: [
      'Honda Vezel Z Sensing 2018 Package in Premium Crystal Red Metallic with half-leather black interior. 1.5L i-VTEC Sport Hybrid i-DCD 7-speed dual-clutch transmission.',
      'Honda SENSING safety suite including Adaptive Cruise Control (ACC), Collision Mitigation Braking System (CMBS), Lane Keeping Assist System (LKAS), and Road Departure Mitigation.',
      'Driven 51,000 km. Dual clutch actuator fluid replaced with original Honda DW-1 fluid. Runs smooth with immediate acceleration and 16-19 km/L fuel economy.',
      'Push button start, electronic parking brake, seat heaters, 8 airbags, 17-inch alloy rims with fresh Yokohama BluEarth tires.',
      'BDT 25,50,000. Located at Banani, Dhaka.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Royal Enfield Classic 350 Gunmetal Grey 2023 (Dual ABS, Spoke Wheels)',
    brand: 'Royal Enfield',
    price: 420000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Official Ifad Motors Warranty & Free Services remaining',
    contactNumber: '01917880011',
    descParts: [
      'Royal Enfield Classic 350 Reborn series in Gunmetal Grey matte finish. 349cc J-series single-cylinder air-oil cooled engine delivering that signature thumping exhaust note.',
      'Equipped with Dual Channel ABS, front and rear ByBre disc brakes, counterbalanced crankshaft for glass-smooth cruising at 80-100 km/h with zero mirror vibrations.',
      'Only 3,200 km ridden for weekend leisure highway tours. 1st free service completed at Ifad Motors flagship showroom. Original touring mirrors and crash guard installed.',
      'Digital-analog instrument cluster with LCD fuel gauge and trip meter. Showroom condition, no drops, scratch-free tank.',
      'Fixed price BDT 4,20,000. Location: Bashundhara R/A.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Nissan X-Trail Hybrid 2019 4WD Emergency Brake Edition Black',
    brand: 'Nissan',
    price: 3100000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Complete service history from Pacific Motors',
    contactNumber: '01618991122',
    descParts: [
      'Nissan X-Trail 2019 2.0L Hybrid 4WD (Intelligent All-Wheel Drive) in Diamond Black Metallic. Spacious, commanding 5-seater family SUV with large boot capacity.',
      'Features Nissan Intelligent Mobility: 360-degree Around View Monitor camera with Moving Object Detection, Emergency Brake Assist, Lane Departure Warning, and Blind Spot Detection.',
      'Panaromic electric sliding glass roof, power tailgate with hands-free foot sensor, heated seats, dual-zone automatic climate control, pure leather seats.',
      'Driven 46,000 km on octane only. Suspension is silent and smooth over potholes. All papers valid till 2026.',
      'Price: BDT 31,00,000. View at Mohakhali DOHS.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Vespa Primavera 150 ABS 2022 Montecarlo Green (Classic Italian Scooter)',
    brand: 'Vespa',
    price: 285000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Runner Automobiles warranty card and service book',
    contactNumber: '01719002233',
    descParts: [
      'Authentic Vespa Primavera 150 i-Get ABS in rare Montecarlo Green with genuine beige leather seat. Steel monocoque bodywork with timeless Italian craftsmanship.',
      '150cc 3-valve i-Get electronic fuel-injected engine providing brisk city acceleration and high fuel economy (45 km/L). Front disc brake with ABS for wet road safety.',
      'Mileage is only 4,500 km. Kept under sheltered parking, paint is lustrous with zero scratches. LED round headlight and tail lamp, chrome mirrors, and USB phone charging port inside glove box.',
      'All papers updated till 2026 with Dhaka Metro registration. Direct owner selling.',
      'BDT 2,85,000. Meetup in Gulshan 1.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Toyota Premio F EX Package 2018 Wine Red (Low Mileage, 1st Party)',
    brand: 'Toyota',
    price: 3350000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '100% Guaranteed Accident Free, Full Service Records',
    contactNumber: '01810113344',
    descParts: [
      'Toyota Premio F EX Package 2018 in royal Wine Red Metallic. 1.5L 1NZ-FE engine with CVT transmission. Driven only 34,000 km original mileage.',
      'Highest EX grade features: Wine interior with woodgrain steering wheel and dashboard panels, electric driver power seat, Toyota Safety Sense (TSS) with pre-collision system and lane trace assist.',
      'Bi-Beam LED headlights with automatic high beam, nanoe air purifier in AC, smart key push start, auto-folding mirrors with reverse tilt, Pioneer Japanese infotainment system with reverse camera.',
      'Vehicle is in pristine original condition, octane driven only. First party owner with digital smart card registration.',
      'Price: BDT 33,50,000. Available for inspection in Dhanmondi.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Hyundai Tucson GLS 2021 Phantom Black (Panoramic Sunroof, 2.0L)',
    brand: 'Hyundai',
    price: 3850000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Fair Technology Hyundai BD Warranty valid till 2026',
    contactNumber: '01911224455',
    descParts: [
      'Hyundai Tucson GLS 2021 2.0L Nu Petrol engine with 6-speed automatic transmission in Phantom Black. Purchased brand new from Fair Technology official Hyundai showroom.',
      'Equipped with panoramic sunroof, 10.25-inch full digital instrument cluster, 8-inch touchscreen with wireless Apple CarPlay/Android Auto, wireless phone charger, ventilated and heated front seats.',
      'Driven 24,000 km only. 6 airbags, Hill-start Assist Control (HAC), Downhill Brake Control (DBC), Electronic Stability Control (ESC), and 18-inch dual-tone diamond cut alloys.',
      '1st owner corporate executive car. Full dealer service records with stamped logbook. Tax and fitness paid up to date.',
      'Price: BDT 38,50,000. Location: Uttara Sector 7.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Honda CB150R Streetster 2022 Matt Pearl Blue (Ex-Motion Neo Sports Cafe)',
    brand: 'Honda',
    price: 410000,
    condition: 'likeNew',
    location: 'Sylhet',
    negotiable: 'yes',
    warranty: 'Showroom Cash Memo & Registration Papers',
    contactNumber: '01612335566',
    descParts: [
      'Honda CB150R Streetster (Ex-Motion) 2022 model in Matt Pearl Blue with red front brake caliper. Neo Sports Cafe styling with exposed steel diamond frame.',
      '149cc DOHC 4-valve liquid-cooled engine, 6-speed gearbox, 41mm Showa upside-down front forks, radial mount 4-piston Nissin front brake caliper with G-Sensor IMU ABS.',
      'Odometer reads 8,100 km. Zero vibrations, exceptional agility and cornering balance. Full LED lighting and multifunctional LCD digital meter.',
      'Sylhet Metro registration with smart card. Complete document handover upon payment.',
      'BDT 4,10,000. Meetup at Shahjalal Uposhohor, Sylhet.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Suzuki Swift 1.2L Dualjet 2020 Burning Red Pearl (Automatic, Low Mileage)',
    brand: 'Suzuki',
    price: 1650000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Uttara Motors Service Logbook Available',
    contactNumber: '01713446677',
    descParts: [
      'Suzuki Swift 2020 model in eye-catching Burning Red Pearl with floating black roof design. 1.2L K12N Dualjet petrol engine with automatic CVT gearbox.',
      'Driven 31,000 km. Exceptionally nimble in Dhaka city traffic with tight 4.8m turning radius and outstanding 16-18 km/L fuel efficiency on octane.',
      'Equipped with keyless entry, push-button start, leather-wrapped flat bottom steering wheel with audio controls, automatic climate control, ABS with EBD, dual airbags.',
      'Clean interior, non-smoker user, original paint with minor touch-ups on bumper. Smart card registration with updated tax token and fitness.',
      'Price: BDT 16,50,000. Meetup at Mirpur 12 or Banani.'
    ]
  },
  {
    category: 'vehicles',
    title: 'Yamaha FZS V3 Fi ABS Matt Black 2022 (Single Disk ABS, 149cc)',
    brand: 'Yamaha',
    price: 230000,
    condition: 'used',
    location: 'Bogura',
    negotiable: 'yes',
    warranty: 'Showroom Papers and 10 Days Check Warranty',
    contactNumber: '01814557788',
    descParts: [
      'Yamaha FZS V3 Fuel Injection 149cc with Front Single Channel ABS in popular Matt Black with chrome badges. 2022 registration, run 16,500 km.',
      'Equipped with Blue Core engine technology producing smooth pickup with generous 45-50 km/L fuel efficiency. Single-piece two-level seat provides immense pillion comfort for family rides.',
      'MRF radial tubeless tires with deep tread depth remaining. Engine sound is crisp and smooth with zero oil leakage.',
      'Bogura Metro digital number plate and smart card registration. Direct owner deal.',
      'Price: BDT 2,30,000. Meetup at Thanthania, Bogura.'
    ]
  },

  // -------------------------------------------------------------
  // PROPERTY (14 items)
  // -------------------------------------------------------------
  {
    category: 'property',
    title: 'Luxury 2150 Sqft 3-BHK Apartment in Bashundhara R/A Block C',
    brand: 'Bashundhara Group',
    price: 18500000,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Handover complete, Ready to move with RAJUK approval',
    contactNumber: '01711234567',
    descParts: [
      'Brand new luxury 2150 square feet south-facing ready apartment located in the prestigious Block C of Bashundhara Residential Area. Positioned on the 6th floor of a G+9 modern building.',
      'Floor layout includes: 3 expansive bedrooms with attached contemporary bathrooms, 1 powder room, 3 private balconies with unobstructed greenery views, spacious open-concept drawing and dining area, modern modular kitchen with gas burner line, and separate maid room with toilet.',
      'Premium fittings: 32"x32" imported mirror-polish Spanish porcelain tiles, Hatil solid Burma teak wooden entrance door, Grohe bathroom sanitary fixtures, and concealed VRF air conditioning conduits.',
      'Building amenities include: 2 high-speed European passenger elevators, 100% full backup generator with silent canopy, 24/7 CCTV surveillance with armed security guards, rooftop landscaped garden with barbecue counter, and designated basement car parking space.',
      'All land registry, RAJUK approved structural building plan, and mutation papers are 100% vetted and verified. Price: BDT 1,85,00,000.'
    ]
  },
  {
    category: 'property',
    title: 'South-Facing 1850 Sqft Modern Flat in Dhanmondi Road 9/A',
    brand: 'Navana Real Estate',
    price: 24000000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'RAJUK Approved, Clean Titles with Mutated Khatian',
    contactNumber: '01812345678',
    descParts: [
      'Exquisite 1850 square feet residential flat situated on prime Dhanmondi Road 9/A, just 2 minutes away from Dhanmondi Lake and renowned educational institutes.',
      '3 large master bedrooms, 3 luxury bathrooms with Italian marble vanity tops, large open family living lounge, guest reception dining, dry and wet kitchen setup with granite countertops, and 3 airy verandas.',
      'Features high ceilings with ample natural daylight and cross ventilation. Tiled flooring throughout, high-end aluminum sliding windows with tinted double glass for sound insulation.',
      'Building facilities: 2 branded elevators, multi-tier automated sub-station and generator, dedicated basement car parking, grand entrance reception lobby, and community hall.',
      'Price: BDT 2,40,00,000. Serious buyers can contact to arrange physical site viewing.'
    ]
  },
  {
    category: 'property',
    title: 'Premium Commercial Office Space 2400 Sqft in Gulshan 2',
    brand: 'Shanta Holdings',
    price: 42000000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Commercial Utility Clearances & Trade License Approved',
    contactNumber: '01913456789',
    descParts: [
      'Ready commercial corporate office space of 2400 square feet located on the 8th floor of an iconic grade-A commercial glass tower in Gulshan 2 roundabout avenue.',
      'Fitted out with modern executive glass cubicles, 14-seater boardroom with projector setup, open workstation area for 25 staff, server room with precision cooling, reception desk, pantry, and executive washrooms.',
      'Central chiller VRV air conditioning, optical fiber internet connectivity, NFPA compliant fire safety system with smoke detectors and sprinklers, and 3 high-speed Mitsubishi elevators.',
      'Includes 2 dedicated basement car park allocations. Ideal for multinational software firms, law consultancies, or financial venture offices.',
      'Price: BDT 4,20,00,000. Clean commercial land titles with full documentation.'
    ]
  },
  {
    category: 'property',
    title: 'Ready Duplex House 3200 Sqft in Uttara Sector 11',
    brand: 'Sheltech',
    price: 38000000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Direct Owner Selling, Freehold Free Title',
    contactNumber: '01614567890',
    descParts: [
      'Stunning architectural 3200 sqft duplex apartment occupying 7th and 8th floors connected via an internal Burma Teak wooden spiral staircase in Uttara Sector 11.',
      'Lower level features a grand double-height living room with chandelier lighting, modern kitchen with built-in microwave and oven, formal dining hall, and 1 guest bedroom with bathroom.',
      'Upper level consists of 3 large bedrooms with en-suite walk-in closets and bathrooms, private family TV den, and an exclusive 400 sqft open sky terrace with green plants.',
      'Equipped with intercom system, smart digital lock, 2 dedicated car parking slots, 24/7 generator backup, and professional building management.',
      'Price: BDT 3,80,00,000. Located close to parks, schools, and Uttara Metro Rail station.'
    ]
  },
  {
    category: 'property',
    title: '1650 Sqft Lakefront Residential Flat in Mirpur DOHS',
    brand: 'DOHS Housing Society',
    price: 16000000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Military Cantonment Board Transfer Clearance',
    contactNumber: '01715678901',
    descParts: [
      'Peaceful 1650 sqft 3-BHK lakefront apartment located inside the secure, gated perimeter of Mirpur DOHS. Situated on the 5th floor with serene balcony views overlooking the lake.',
      '3 spacious bedrooms, 3 attached tiled bathrooms, large drawing, dining, kitchen with exhaust hood, store room, and servant room with toilet. 3 balconies.',
      'Quiet, family-friendly atmosphere with lush green jogging tracks, military-managed 24/7 security, high-standard community clubs, and modern shopping centers within walking distance.',
      'Lift, 100% generator backup, intercom, and reserved ground floor car parking.',
      'Price: BDT 1,60,00,000. Clean Cantonment Board paper transfer.'
    ]
  },
  {
    category: 'property',
    title: 'Modern Studio Apartment 850 Sqft in Banani Block F',
    brand: 'Asset Developments',
    price: 11500000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Ready for Immediate Occupation',
    contactNumber: '01816789012',
    descParts: [
      'Chic 850 square feet 1-BHK executive studio apartment in prime Banani Block F. Designed for expats, diplomats, or corporate professionals seeking high rental yields.',
      'Fully furnished with designer furniture, queen bed, smart 55" TV, inverter AC, fully equipped kitchenette with induction cooktop, modern bathroom with glass shower cabin, and private balcony.',
      'Building includes rooftop infinity splash pool, fitness gym, coffee lounge, 24-hour concierge desk, biometric security, and dedicated basement car parking.',
      'Currently yields high rental income (BDT 65,000/month). Excellent capital appreciation potential.',
      'Price: BDT 1,15,00,000. All papers and municipal taxes up to date.'
    ]
  },
  {
    category: 'property',
    title: '2600 Sqft Penthouse with Private Terrace in Mohakhali DOHS',
    brand: 'Building Technology & Ideas (bti)',
    price: 36000000,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'bti Developer Guarantee & Structural Warranty',
    contactNumber: '01917890123',
    descParts: [
      'Palatial 2600 square feet Penthouse on the 9th floor featuring an additional 700 sqft exclusive landscaped private rooftop terrace in serene Mohakhali DOHS.',
      '4 master bedrooms with attached designer bathrooms, jacuzzi in principal suite, double drawing room, formal dining hall, gourmet kitchen with Italian cabinets, and separate servant quarters.',
      'Unmatched panoramic skyline views of Dhaka city. Features smart home automation system controlling lighting, blinds, and AC through smartphone.',
      '2 high-speed Sigma elevators, 100% full capacity generator, 2 dedicated car parking bays, solar water heating, and rainwater harvesting system.',
      'Price: BDT 3,60,00,000. Direct dealing with property owner.'
    ]
  },
  {
    category: 'property',
    title: '1450 Sqft 3-Bed Family Apartment in Mohammadpur Ring Road',
    brand: 'Concord Real Estate',
    price: 10800000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'RAJUK Approved, Titas Gas Connection Active',
    contactNumber: '01618901234',
    descParts: [
      'Well-maintained 1450 sqft 3-BHK apartment situated on Mohammadpur Ring Road near Japan Garden City. Features rare and highly sought-after active Titas government gas connection.',
      '3 comfortable bedrooms, 3 bathrooms, spacious drawing-cum-dining space, 2 airy balconies, kitchen with granite slab and cabinets. Tiled floors and fresh paint throughout.',
      '5th floor of an 8-story building. Equipped with 8-passenger elevator, generator backup, water pump, night guard security, and designated car parking on ground level.',
      'Close proximity to reputable schools, hospitals, supermarkets, and bus stops.',
      'Price: BDT 1,08,00,000. Bank loan facility available through all major banks.'
    ]
  },
  {
    category: 'property',
    title: '5 Katha Residential South-Facing Plot in Purbachal Sector 4',
    brand: 'RAJUK Purbachal',
    price: 19500000,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Direct RAJUK Allotment Letter & Mutation Complete',
    contactNumber: '01719012345',
    descParts: [
      'Prime 5 Katha south-facing residential land plot in prestigious Sector 4, Purbachal New Town, near the 300 Feet Expressway.',
      'Plot faces a wide 60-foot paved sector road with immediate access to 100-foot boulevard. Demarcation boundary pillars erected, ready for immediate construction.',
      'Utilities: Underground electricity lines and WASA water line connections being developed by RAJUK. Completely sand-filled solid high land.',
      '100% hassle-free papers: Original RAJUK allotment letter, lease deed, mutation khatian, and up-to-date land tax receipts.',
      'Price: BDT 1,95,00,000 (BDT 39 Lac per Katha). Direct owner deal.'
    ]
  },
  {
    category: 'property',
    title: '1950 Sqft Sea-View Executive Flat in Agrabad CDA, Chattogram',
    brand: 'Sanmar Properties',
    price: 17200000,
    condition: 'likeNew',
    location: 'Chattogram',
    negotiable: 'yes',
    warranty: 'CDA Approved Building Plan, Registered Khatian',
    contactNumber: '01810123456',
    descParts: [
      'Luxury 1950 square feet executive apartment located in prime Agrabad CDA Residential Area, Chattogram. 7th floor unit with serene sea breeze and bay views.',
      '3 expansive bedrooms, 3 contemporary bathrooms with imported fittings, spacious living and dining zones, modular kitchen, and 3 balconies with unobstructed views.',
      'Building equipped with 2 OTIS elevators, comprehensive substation, 24/7 security guards, fire safety system, and basement car parking slot.',
      'Minutes away from port commercial district, major commercial banks, and luxury hotels.',
      'Price: BDT 1,72,00,000. Clean titles, ready for immediate handover.'
    ]
  },
  {
    category: 'property',
    title: '1750 Sqft Premium Apartment in Shahjalal Uposhohor, Sylhet',
    brand: 'Ananda Builders',
    price: 14000000,
    condition: 'new',
    location: 'Sylhet',
    negotiable: 'yes',
    warranty: 'Ready Flat with SCC Clearances',
    contactNumber: '01911234567',
    descParts: [
      'Brand new 1750 square feet 3-BHK luxury apartment in Sector E, Shahjalal Uposhohor, Sylhet. Modern earthquake-resistant RCC construction.',
      '3 large bedrooms, 3 en-suite bathrooms, wide drawing room, separate dining area, family living room, modular kitchen, and 3 verandas. Beautiful natural lighting in all rooms.',
      'Building features include: 2 passenger elevators, standby generator, 24-hour deep tube-well water supply, rooftop community hall, and basement car parking.',
      'Located in an upscale peaceful neighborhood near Osmani Medical and Sylhet railway station.',
      'Price: BDT 1,40,00,000. Ready for registration and handover.'
    ]
  },
  {
    category: 'property',
    title: '1350 Sqft Ready Flat in Shantinagar Main Road, Dhaka',
    brand: 'Rangs Properties',
    price: 12500000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'RAJUK Approved, Titas Gas Line Active',
    contactNumber: '01612345678',
    descParts: [
      'Nicely decorated 1350 sqft 3-bedroom apartment on the 4th floor of a reputable Rangs residential building on Shantinagar Main Road.',
      'Features 3 bedrooms, 2 bathrooms, drawing, dining, 2 balconies, kitchen with functional Titas pipeline gas connection. Ceramic tile flooring throughout.',
      'Elevator, generator backup, water pump, guard room with 24/7 security guard, and dedicated car parking.',
      'Very central location with immediate access to Kakrail, Motijheel commercial district, and Bailey Road.',
      'Price: BDT 1,25,00,000. Direct owner sale.'
    ]
  },
  {
    category: 'property',
    title: '2200 Sqft Modern Architectural Flat in Khulshi Hills, Chattogram',
    brand: 'Equity Property Management',
    price: 22000000,
    condition: 'new',
    location: 'Chattogram',
    negotiable: 'yes',
    warranty: 'CDA Approved, Freehold Title',
    contactNumber: '01713456789',
    descParts: [
      'Prestigious 2200 sqft apartment situated atop the serene hills of South Khulshi, Chattogram. Unmatched fresh mountain breeze and peaceful greenery.',
      '3 expansive bedrooms with attached luxury bathrooms, walk-in closets, large living room with floor-to-ceiling glass windows, dining area, modern kitchen, and 3 viewing balconies.',
      'Facilities: 2 elevators, full backup generator, rooftop swimming pool and gymnasium, landscaped garden, intercom, and reserved covered parking.',
      'Exclusive community housing prominent business executives and diplomats.',
      'Price: BDT 2,20,00,000. Ready for immediate interior furnishing.'
    ]
  },
  {
    category: 'property',
    title: 'Commercial Shop Space 650 Sqft in Jamuna Future Park Level 3',
    brand: 'Jamuna Group',
    price: 15000000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Jamuna Future Park Registered Shop Deed',
    contactNumber: '01814567890',
    descParts: [
      'Prime 650 sqft commercial retail shop space located on Level 3 (Fashion & Lifestyle Zone) inside South Asia\'s largest shopping mall, Jamuna Future Park.',
      'Strategically positioned right in front of the central atrium escalators, guaranteeing massive customer footfall on weekdays and weekends.',
      'Fully fitted with glass showroom facade, track lighting, false ceiling with centralized air conditioning, and electrical metering.',
      'Currently leased out to a reputable clothing brand generating stable BDT 80,000 monthly rent. High ROI commercial investment.',
      'Price: BDT 1,50,00,000. Clear commercial property ownership deed.'
    ]
  },

  // -------------------------------------------------------------
  // HOME (14 items)
  // -------------------------------------------------------------
  {
    category: 'home',
    title: 'Otobi Solid Teak 6-Seater Royal Dining Table Set with Cushioned Chairs',
    brand: 'Otobi',
    price: 62000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Otobi wood treatment warranty valid',
    contactNumber: '01711335577',
    descParts: [
      'Original Otobi 6-seater solid Chittagong Teak (Segun) wood royal dining table set. Handcrafted with traditional floral wood carvings and rich walnut lacquer polish.',
      'Comes with a 10mm thick heavy-duty beveled tempered glass tabletop that protects the wood surface from heat and stains. Dimensions: 6 feet x 3.5 feet.',
      'Includes 6 matching ergonomically designed chairs featuring high-density orthofoam cushioning wrapped in stain-resistant royal beige damask fabric.',
      'Used for less than a year in an executive residence. The wood is 100% chemically seasoned, termite-proof, and moisture-resistant.',
      'Pickup from Dhanmondi Road 11/A. Dismantling and bubble wrap packing assistance provided.'
    ]
  },
  {
    category: 'home',
    title: 'Hatil Sectional L-Shaped Premium Fabric Sofa Set (Grey Velvet)',
    brand: 'Hatil',
    price: 78000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Hatil 5 Years Service Warranty with original invoice',
    contactNumber: '01812446688',
    descParts: [
      'Hatil modern L-shaped sectional sofa set (Model: Kingfisher-231) finished in luxurious water-repellent slate grey velvet upholstery.',
      'Constructed with kiln-dried solid beech wood framework and imported engineered wood core for maximum structural rigidity and sag-free endurance.',
      'Cushions filled with pocketed spring coils and ultra-resilient foam that retain their plump shape even after long hours of lounging. Comes with 6 coordinating throw pillows.',
      'Spotless condition: no pet stains, no cigarette smoke, no fabric tears or fraying. Kept in an air-conditioned living room.',
      'Price: BDT 78,000 (showroom price BDT 1,18,000). Location: Banani.'
    ]
  },
  {
    category: 'home',
    title: 'Regal King-Size Sheesham Wood Hydraulic Storage Bed with Mattress',
    brand: 'Regal Furniture',
    price: 54000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Regal Warranty Card and cash memo',
    contactNumber: '01913557799',
    descParts: [
      'Regal 6x7 feet king-size luxury bed crafted from premium seasoned Sheesham wood with an elegant tufted leatherette headboard in dark chocolate tone.',
      'Features German engineered heavy-duty hydraulic gas lift mechanism that lifts the mattress platform effortlessly to reveal massive partitioned under-bed storage space.',
      'Comes with an Apollo Orthopedic 6-inch memory foam dual-comfort mattress with breathable hypoallergenic quilted cover.',
      'Condition is flawless 10/10. Sturdy, squeak-free frame with reinforced center beam support.',
      'Pickup from Uttara Sector 4. Easy to disassemble into modular panels for transport.'
    ]
  },
  {
    category: 'home',
    title: 'Haier Inverter 1.5 Ton Split AC (Triple Inverter, 5-Star Energy)',
    brand: 'Haier',
    price: 48000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: '8 Years Compressor Warranty Remaining with Haier BD Card',
    contactNumber: '01614668800',
    descParts: [
      'Haier 1.5 Ton Heavy Duty Triple Inverter Split Air Conditioner (Model: HSU-18CleanCool). Equipped with Self-Clean 99.9% sterilization technology and 100% Grooved Copper tubes.',
      'Cools down a 180 sqft room in minutes with 60°C Extreme Hyper PCB. Extreme low electricity consumption consuming only 3.5 to 4.5 units in a full 8-hour overnight run.',
      'Operated for one summer season only. Compressor, condenser coil, and indoor blower are clean and pristine with zero gas leaks.',
      'Includes original remote, outdoor mounting brackets, 10 feet insulated copper pipes, power cord, and warranty card.',
      'Fixed price BDT 48,000. Located at Mirpur 2, Dhaka.'
    ]
  },
  {
    category: 'home',
    title: 'Singer 340L Frost-Free Double Door Refrigerator (Inverter Technology)',
    brand: 'Singer',
    price: 42000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '7 Years Singer Compressor Warranty Active',
    contactNumber: '01715779911',
    descParts: [
      'Singer 340 Liters Multi Air Flow Frost-Free Double Door Refrigerator in sleek brushed stainless steel finish with digital LED temperature controls.',
      'Equipped with Smart Inverter Compressor that dynamically adjusts cooling power to minimize energy bills and food moisture loss. Deodorizing carbon filter prevents cross odors.',
      'Spacious freezer with twist ice-maker tray and deep vegetable crisper box with humidity slider. Tempered glass spill-proof shelves hold heavy pots up to 150 kg.',
      'Gently used for 1.5 years. Very quiet operation, clean gaskets, zero dents on doors.',
      'Pickup from Mohammadpur Tajmahal Road. Price slightly negotiable.'
    ]
  },
  {
    category: 'home',
    title: 'Hatil Ergonomic Executive Workstation Chair (Mesh Back & Lumbar Support)',
    brand: 'Hatil',
    price: 18500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Hatil Showroom Receipt Available',
    contactNumber: '01816880022',
    descParts: [
      'Hatil ergonomic mesh executive swivel chair (Model: Carson-103). Engineered for long 10-12 hour coding or remote work sessions with zero lower back strain.',
      'Features breathable Korean high-tensile mesh back, dynamic adaptive lumbar support cushion, 3D multi-directional adjustable armrests, and 135-degree recline tilt lock mechanism.',
      'Heavy-duty Class 4 gas lift cylinder and silent 360-degree PU caster wheels that glide smoothly over hardwood floors without scratching.',
      'Flawless condition, mesh has zero sag, cushion padding is plush and firm.',
      'Fixed price BDT 18,500. Pickup from Gulshan 1.'
    ]
  },
  {
    category: 'home',
    title: 'Walton 11kg Front Loading Inverter Washing Machine (Steam Wash)',
    brand: 'Walton',
    price: 39000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '8 Years Walton Inverter Motor Warranty Card',
    contactNumber: '01917991133',
    descParts: [
      'Walton 11kg heavy-capacity front load automatic washing machine (Model: WWM-FT110S) with Direct Drive BLDC Inverter Motor and 1400 RPM spin speed.',
      'Features 16 automated wash programs including Steam Allergy Care, Wool, Baby Care, Quick 15, and Drum Clean. Cleans bulky king-size blankets and heavy comforters with ease.',
      'Very gentle on clothes with honeycomb embossed stainless steel diamond drum. Low vibration and whisper-quiet operation during spin cycle.',
      'Used for 10 months. Water inlet pipe, drain hose, and instruction manual included.',
      'Location: Bashundhara R/A Gate 2. Price BDT 39,000.'
    ]
  },
  {
    category: 'home',
    title: 'Partex Solid Board 4-Door Wardrobe with Dressing Mirror',
    brand: 'Partex Furniture',
    price: 31000,
    condition: 'used',
    location: 'Chattogram',
    negotiable: 'yes',
    warranty: 'Partex Wood Guarantee Document',
    contactNumber: '01619002244',
    descParts: [
      'Partex Star laminated melamine board 4-door large family wardrobe in Canadian Oak finish. Height 6.5 feet, width 6 feet, depth 22 inches.',
      'Interior is intelligently organized with heavy aluminum coat hanging rails, internal security drawer with lock and key, multiple storage shelves, and full-length dressing mirror.',
      'Sturdy soft-close hydraulic hinges, brushed chrome handles, and termite-proof moisture seal coating on all edges.',
      'Excellent used condition, no chipping, clean interior shelves.',
      'Pickup from Nasirabad Housing Society, Chattogram.'
    ]
  },
  {
    category: 'home',
    title: 'Panasonic 32L Convection Microwave Oven with Grill & Bake',
    brand: 'Panasonic',
    price: 22000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Panasonic Warranty Card & Cookery Book included',
    contactNumber: '01710113355',
    descParts: [
      'Panasonic 32L Convection & Grill Microwave Oven (Model: NN-CD87KS) featuring Inverter Turbo Defrost and 360-degree uniform baking technology.',
      'Full stainless steel cavity for easy cleaning and maximum hygiene. 30 auto cook menus for baking cakes, pizzas, roasting chicken, and reheating food with zero dry spots.',
      'Touch control panel with tactile rotary jog dial. Pristine condition, used only a few times for baking during holidays.',
      'Comes with original glass turntable, high and low metal grill racks, baking enamel tray, and user recipe book.',
      'Fixed price BDT 22,000. Pickup from Banani.'
    ]
  },
  {
    category: 'home',
    title: 'Philips Air Purifier Series 3000i (HEPA Filter, Real-time AQI)',
    brand: 'Philips',
    price: 27500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Philips 2 Years International Warranty Card',
    contactNumber: '01811224466',
    descParts: [
      'Philips Series 3000i Smart Air Purifier (Model: AC3033/73) with NanoProtect HEPA and active carbon filter capturing 99.97% of particles down to 0.003 microns (smaller than PM2.5).',
      'Purifies large rooms up to 600 sqft with clean air delivery rate (CADR) of 520 m3/h in under 6 minutes. Real-time digital color ring displays numerical PM2.5, indoor allergens, and harmful gas levels.',
      'Wi-Fi enabled: control and monitor air quality remotely using the Philips Clean Home+ mobile app. Ultra-quiet sleep mode operates at just 15 dB.',
      'Filter life remaining is at 82%. Machine is in spotless, mint condition.',
      'Price: BDT 27,500. Meetup at Dhanmondi.'
    ]
  },
  {
    category: 'home',
    title: 'Solid Mahogany Wood TV Console & Entertainment Unit 6ft',
    brand: 'Custom Crafted',
    price: 26000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Chemical seasoning guarantee from wood workshop',
    contactNumber: '01912335577',
    descParts: [
      'Custom designed 6-foot mid-century modern TV entertainment console constructed from solid mature Jessore Mahogany wood with clear matte polyurethane finish.',
      'Dimensions: Length 72 inches, Height 24 inches, Depth 18 inches. Can comfortably hold up to an 85-inch television screen and heavy home audio receivers.',
      'Features 2 smooth slide-out wooden drawers with ball-bearing runners, 2 fluted glass drop-down cabinets for gaming consoles and set-top boxes, and cable management ports on rear panel.',
      'No scratches, no wobbles, solid tapered wooden legs with brass caps.',
      'Pickup from Uttara Sector 11. BDT 26,000.'
    ]
  },
  {
    category: 'home',
    title: 'IKEA KALLAX Shelving Unit 4x4 with Storage Inserts White',
    brand: 'IKEA',
    price: 19000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Original IKEA receipt available',
    contactNumber: '01613446688',
    descParts: [
      'Genuine imported IKEA KALLAX 4x4 cube storage shelving bookcase in high-gloss White finish (Dimensions: 147x147 cm).',
      'Includes 4 genuine IKEA DRÖNA fabric storage box inserts (dark grey) and 2 KALLAX insert drawer units pre-installed.',
      'Ideal as a modern room divider, book display, vinyl record storage, or decorative plant shelf. Built-in wall anchoring brackets.',
      'Assembled with precision, zero peeling or water damage.',
      'Fixed price BDT 19,000. Pickup from Gulshan 2.'
    ]
  },
  {
    category: 'home',
    title: 'DeLonghi Dedica Deluxe Espresso & Cappuccino Coffee Machine',
    brand: 'DeLonghi',
    price: 28000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Original retail box and invoice',
    contactNumber: '01714557799',
    descParts: [
      'DeLonghi Dedica Deluxe EC685.M manual pump espresso machine in brushed stainless steel. Compact 6-inch slim footprint perfect for modern kitchen counters.',
      '15-bar professional pressure pump and ThermoBlock heating system delivers rich crema espresso at optimal 93°C extraction temperature in just 35 seconds.',
      'Adjustable manual milk frother steam wand whips up silky microfoam for cappuccinos and flat whites. Includes single, double, and ESE pod portafilter baskets.',
      'Used for 4 months with bottled mineral water only. Regularly descaled with DeLonghi EcoDecalk.',
      'Comes with stainless steel milk frothing pitcher, heavy 51mm metal tamper, and cleaning tools.',
      'Price: BDT 28,000. Location: Banani.'
    ]
  },
  {
    category: 'home',
    title: 'Roborock S8 Pro Ultra Robot Vacuum and Mop Cleaner (Docking Station)',
    brand: 'Roborock',
    price: 68000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Roborock International Warranty Document',
    contactNumber: '01815668800',
    descParts: [
      'Roborock S8 Pro Ultra flagship automated robotic vacuum and sonic vibrating mop with all-in-one RockDock Ultra auto-empty and auto-washing station.',
      'Features DuoRoller Riser brush system with 6000Pa extreme suction, VibraRise 2.0 mopping system scrubbing 3000 times/min, and Reactive 3D Obstacle Avoidance.',
      'RockDock automatically washes the dirty mop cloth, dries it with heated air to prevent mildew odors, refills robot clean water tank, and empties dustbin for up to 7 weeks of hands-free operation.',
      'PreciSense LiDAR navigation maps your entire home in 3D with multi-floor support via the Roborock app.',
      'Mint condition. Extra mop pads and spare HEPA filters included.',
      'Price: BDT 68,000. Meetup at Dhanmondi.'
    ]
  },

  // -------------------------------------------------------------
  // PETS (14 items)
  // -------------------------------------------------------------
  {
    category: 'pets',
    title: 'Purebred Triple-Coat Persian Kitten (Doll Face, 2.5 Months, Litter Trained)',
    brand: 'Persian Breed',
    price: 18500,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Vet health check card & 1st deworming complete',
    contactNumber: '01711446688',
    descParts: [
      'Adorable purebred triple-coat doll-face Persian kitten (Male, 2.5 months old). Super fluffy snow white coat with mesmerizing ocean blue eyes.',
      'Raised in a loving, hygienic home environment. Very playful, affectionate, cuddly, and loves spending time around children and family members.',
      '100% litter trained on bentonite cat sand. Weaned off mother\'s milk and currently enjoying Royal Canin Mother & Babycat dry kibbles and boiled chicken broth.',
      'First round of deworming completed by registered veterinarian at Central Veterinary Hospital Dhaka. Complete vet vaccination record card will be handed over.',
      'Only loving cat parents who can guarantee proper indoor care please contact. Location: Dhanmondi 27.'
    ]
  },
  {
    category: 'pets',
    title: 'Golden Retriever Puppy (Champion Bloodline, Vaccinated, 3 Months)',
    brand: 'Golden Retriever',
    price: 32000,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Vaccination Booklet & Pedigree Health Certificate',
    contactNumber: '01812557799',
    descParts: [
      'Outstanding male Golden Retriever puppy (3 months old) with dense golden coat, broad muzzle, and friendly, energetic demeanor from champion bloodline parents.',
      'Both 7-in-1 Vanguard Plus vaccinations and Biocan dewormings done on schedule. Registered health logbook signed by veterinarian included.',
      'Potty trained for outdoor yard schedule and responds nicely to basic commands (sit, come, stay). Fed on premium Royal Canin Maxi Puppy food.',
      'Requires an active family with open space or regular walking routine.',
      'Price: BDT 32,000. Pickup from Uttara Sector 11.'
    ]
  },
  {
    category: 'pets',
    title: 'Siberian Husky Male Puppy (Bi-Eye Blue & Amber, Dewormed)',
    brand: 'Siberian Husky',
    price: 45000,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Full Medical & Deworming Record Card',
    contactNumber: '01913668800',
    descParts: [
      'Magnificent Siberian Husky male puppy (75 days old) featuring rare and exotic bi-colored eyes (one crystal sky blue, one deep amber). Double-thick silver & white coat.',
      'Active, talkative, playful, and socialized with other household pets. High intelligence with natural wolf-like majestic stance.',
      'Dewormed twice with Drontal Plus and received first Parvovirus and Distemper preventive vaccination shots.',
      'Prospective owners must have air-conditioned indoor facility during summer months to keep him cool and comfortable.',
      'Price: BDT 45,000. Meetup at Gulshan 2.'
    ]
  },
  {
    category: 'pets',
    title: 'British Shorthair Golden Ticked Male Cat (Fully Vaccinated, Neutered)',
    brand: 'British Shorthair',
    price: 38000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Complete Vet Vaccination Passport & Microchip',
    contactNumber: '01614779911',
    descParts: [
      'Chubby cheeked British Shorthair male cat (Golden Ticked Ny25 color, 14 months old). Broad muscular chest, dense plush coat, and brilliant emerald green eyes.',
      'Fully vaccinated against Feline Rabies, FPV, FCov, and safely neutered by expert veterinarian. Microchipped with international pet passport.',
      'Extremely gentle, calm, quiet temperament. Never scratches furniture (scratch post trained). Ideal companion for apartment living.',
      'Comes with his carrier bag, favorite plush bed, ceramic food bowls, and leftover Royal Canin British Shorthair food.',
      'Relocating abroad, looking for a caring home. Location: Banani.'
    ]
  },
  {
    category: 'pets',
    title: 'Pair of Hand-Tamed Lutino Cockatiels with Large Standing Breeding Cage',
    brand: 'Cockatiel',
    price: 12000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Active, healthy whistling birds',
    contactNumber: '01715880022',
    descParts: [
      'Bonded, proven breeding pair of Lutino Cockatiels (Bright yellow bodies, orange cheek patches, ruby red eyes). Around 1.5 years of age.',
      'Male bird whistles melodies and imitates household rings. Female is calm and docile. Both birds are hand-tamed, fly to your hand or shoulder without biting.',
      'Diet includes mixed millet seeds, sunflower seeds, green spinach, boiled egg food, and cuttlefish bone for calcium.',
      'Includes large powder-coated standing cage with rolling caster wheels (3 feet height x 2 feet width), wooden breeding nesting box, perches, and stainless steel feeders.',
      'Fixed price BDT 12,000. Pickup from Mirpur 10.'
    ]
  },
  {
    category: 'pets',
    title: 'German Shepherd Puppy (KKL 1 Pedigree, High Drive, 2.5 Months)',
    brand: 'German Shepherd',
    price: 28000,
    condition: 'new',
    location: 'Chattogram',
    negotiable: 'yes',
    warranty: 'Kennel Club pedigree papers and vaccination book',
    contactNumber: '01816991133',
    descParts: [
      'Purebred short-coat German Shepherd Dog (GSD) male puppy (70 days old) with deep black & rich red mahogany pigmentation, strong bone structure, and straight back.',
      'Sired by imported German showline parents with hip/elbow clearances (HD/ED normal). High prey drive and sharp alert temperament suitable for family protection and obedience training.',
      'Vaccinated with DHPPi and dewormed thrice. Active, fearless, and feeds on Farmina N&D Puppy kibbles.',
      'Price: BDT 28,000. Pickup from Agrabad, Chattogram.'
    ]
  },
  {
    category: 'pets',
    title: 'Scottish Fold Female Cat (Silver Tabby, Microchipped)',
    brand: 'Scottish Fold',
    price: 35000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Full health checkup report from Carevet BD',
    contactNumber: '01917002244',
    descParts: [
      'Stunning purebred Scottish Fold female cat (10 months old) in Silver Classic Tabby with tightly folded owl-like ears and round amber eyes.',
      'Very calm, mellow, and curious personality. Loves lounging next to your laptop and purring loudly when petted. Perfectly litter box trained.',
      'All annual core feline vaccinations up to date. Dewormed and monthly frontline flea treatment applied.',
      'Includes travel carrier box, nail clipper, cat grooming comb, and unopened pack of Catit wet treats.',
      'Price: BDT 35,000. Meetup at Dhanmondi 9/A.'
    ]
  },
  {
    category: 'pets',
    title: 'Imported Holland Lop Bunny Pair with Custom Wooden Hutch',
    brand: 'Holland Lop',
    price: 9500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Healthy, active dewormed bunnies',
    contactNumber: '01618113355',
    descParts: [
      'Adorable bonded pair of pure Holland Lop dwarf rabbits (1 Broken Tort male, 1 Solid Fawn female, 4 months old). Distinctive round crown heads and droopy lop ears.',
      'Extremely clean, odorless, and litter box trained. Fed on endless green Timothy Hay, Oxbow Essentials pellets, and fresh coriander leaves.',
      'Package includes custom-built 2-story indoor wooden hutch with pull-out easy-clean droppings tray, water drip bottle, and ceramic food bowls.',
      'Fixed price BDT 9,500 for the pair with entire setup. Location: Bashundhara R/A.'
    ]
  },
  {
    category: 'pets',
    title: 'Planted Aquarium Setup 3ft with CO2 System, Filter and Exotic Discus Fish',
    brand: 'Aquascaping Custom',
    price: 24000,
    condition: 'used',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Leak-free ultra-clear glass warranty',
    contactNumber: '01719224466',
    descParts: [
      'Complete high-tech 3-foot planted aquascape aquarium (36x18x18 inches) crafted from 10mm rimless ultra-clear low-iron glass with polished beveled edges.',
      'Equipped with pressurized 2L aluminum CO2 cylinder with dual-gauge solenoid regulator, SunSun HW-3000 canister external filter with UV sterilizer, and Chihiros WRGB II LED lighting system.',
      'Rich aquascape populated with carpet plants (Monte Carlo), Ludwigia, Anubias on driftwood, and ADA Amazonia soil.',
      'Includes 5 mature healthy Red Melon and Cobalt Blue Discus fish, 20 Cardinal Tetras, and 5 Amano algae eating shrimps.',
      'Price: BDT 24,000. Location: Uttara Sector 7. Buyer arranges water draining and transport.'
    ]
  },
  {
    category: 'pets',
    title: 'Himalayan Flat-Face Persian Cat Adult (Trained, Loving Nature)',
    brand: 'Himalayan Persian',
    price: 22000,
    condition: 'used',
    location: 'Sylhet',
    negotiable: 'yes',
    warranty: 'Vet passport with complete vaccinations',
    contactNumber: '01810335577',
    descParts: [
      'Gorgeous adult Himalayan Persian cat (Seal Point color, 1.5 years old). Cream body with chocolate dark points on face, ears, and bushy tail with striking sapphire blue eyes.',
      'Indoor family raised with lots of affection. Soft, clean, brushed coat with no mats or tangles. Quiet and calm nature.',
      'Spayed female, fully vaccinated against rabies and panleukopenia with official veterinary booklet.',
      'Includes food bowls, cat litter tray, and scratching post.',
      'Price: BDT 22,000. Meetup at Zindabazar, Sylhet.'
    ]
  },
  {
    category: 'pets',
    title: 'French Bulldog Puppy Male (Fawn Color, Health Certified)',
    brand: 'French Bulldog',
    price: 55000,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Veterinary health certificate and pedigree card',
    contactNumber: '01911446688',
    descParts: [
      'Top quality purebred French Bulldog male puppy (80 days old) in Fawn color with black mask. Compact muscular build with bat ears and short tail.',
      'Bred from healthy brachycephalic bloodlines with wide clear nostrils for effortless breathing. Very clownish, joyful, and hilarious companion dog.',
      'Received 2 sets of multi-antigen vaccinations and microchipped. Loves playtime and snoozing on the couch.',
      'Must go to a dedicated owner who understands flat-faced dog care in indoor air conditioning.',
      'Price: BDT 55,000. Location: Banani, Dhaka.'
    ]
  },
  {
    category: 'pets',
    title: 'Sun Conure Hand-Tamed Friendly Parrot (Talking Potential, Banded)',
    brand: 'Sun Conure',
    price: 21000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Closed seamless closed foot ring with ID',
    contactNumber: '01612557799',
    descParts: [
      'Vibrant Sun Conure parrot (7 months old) with fiery yellow, orange, and green plumage. Closed leg band ID from registered local aviary.',
      'Hand-raised from 2 weeks of age, exceptionally tame and friendly. Flies freely in the living room, lands on head and shoulder, and steps up on command.',
      'Beginning to mimic human whistling and basic words ("Mithu", "Hello"). Very healthy with strong wings and bright clear eyes.',
      'Comes with stainless steel transport cage and bag of Harrison\'s organic bird pellets.',
      'Price: BDT 21,000. Meetup at Dhanmondi 27.'
    ]
  },
  {
    category: 'pets',
    title: 'Persian Semi-Punch Male Kitten (Snow White, Playful)',
    brand: 'Persian Breed',
    price: 15000,
    condition: 'new',
    location: 'Bogura',
    negotiable: 'yes',
    warranty: 'Dewormed with health card',
    contactNumber: '01713668800',
    descParts: [
      'Healthy, active semi-punch Persian male kitten (65 days old) in pure snow white coat with hazel green eyes.',
      'Litter box trained, active, runs around playing with paper balls and feather wands. Eating solid kitten food and boiled fish.',
      'Dewormed on schedule with veterinary check card. Clean ears and eyes.',
      'Pickup from Jaleshwaritola, Bogura. Price: BDT 15,000.'
    ]
  },
  {
    category: 'pets',
    title: 'Labrador Retriever Puppy (Chocolate Color, 60 Days, Dewormed)',
    brand: 'Labrador Retriever',
    price: 26000,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Vaccination and deworming record book',
    contactNumber: '01814779911',
    descParts: [
      'Chunky chocolate brown purebred Labrador Retriever male puppy (60 days old). Broad otter tail, strong paws, and glossy water-resistant coat.',
      'Very gentle, eager to please, loyal, and friendly with kids. Mother and father both on site for verification.',
      'First Parvo vaccination completed, dewormed twice with Albendazole suspension. Health record card included.',
      'Price: BDT 26,000. Meetup at Mirpur DOHS, Dhaka.'
    ]
  },

  // -------------------------------------------------------------
  // CLOTHS (14 items)
  // -------------------------------------------------------------
  {
    category: 'cloths',
    title: 'Authentic Schott NYC Leather Rider Jacket (Men\'s Size L, Naked Cowhide)',
    brand: 'Schott NYC',
    price: 35000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Genuine Schott NYC tags and receipt',
    contactNumber: '01711557799',
    descParts: [
      'Authentic Schott NYC Classic Perfecto style motorcycle leather rider jacket (Men\'s Size Large / US 42) crafted from heavy-gauge American naked cowhide leather.',
      'Asymmetrical front zipper with heavy-duty Talon nickel hardware, snap-down lapels, attached belt with square buckle, and zippered sleeve cuffs.',
      'The leather has begun to develop a rich, buttery vintage patina with zero cracking, peeling, or holes. Quilted insulated satin lining keeps you warm during winter rides.',
      'Imported directly from Schott NYC flagship store in New York. Retail price is $950 USD (over BDT 1,15,000).',
      'Price: BDT 35,000. Test fitting available at Banani.'
    ]
  },
  {
    category: 'cloths',
    title: 'Nike Air Jordan 1 Retro High OG \'Chicago Lost & Found\' (Size UK 9.5)',
    brand: 'Nike',
    price: 28000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Original Nike SNKRS invoice & StockX verified tags',
    contactNumber: '01812668800',
    descParts: [
      'Grail sneaker: Nike Air Jordan 1 Retro High OG \'Chicago Lost & Found\' (2022 release) in Men\'s Size UK 9.5 / US 10.5.',
      'Features cracked vintage white leather base, varsity red overlays, aged muslin nylon tongue, and vintage yellowed midsole inspired by a forgotten 1985 deadstock pair.',
      'Worn strictly twice for indoor photo shoots. Star count on outsoles is 100% intact, zero heel drag, insoles with Nike Air logo untouched.',
      'Comes with full vintage mismatched replacement box lid, vintage receipt paper, and two sets of extra laces (black and white).',
      'Fixed price BDT 28,000. Meetup at Dhanmondi 27 or Gulshan 1.'
    ]
  },
  {
    category: 'cloths',
    title: 'The North Face 1996 Retro Nuptse 700-Fill Down Jacket Black (Size M)',
    brand: 'The North Face',
    price: 22500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Authenticity hologram tags and store invoice',
    contactNumber: '01913779911',
    descParts: [
      'The North Face iconic 1996 Retro Nuptse Down Jacket in classic TNF Black (Men\'s Size Medium). Stuffed with certified 700-fill goose down for extreme warmth in freezing climates.',
      'Durable water-repellent (DWR) ripstop nylon shell with stowable hood that packs into the collar. The entire jacket can also pack into its own right-hand pocket for easy travel packing.',
      'Pristine 10/10 condition, no down leakage, clean collar, smooth VISLON front zipper, and adjustable velcro cuff tabs.',
      'Purchased from The North Face retail store in London. Ideal for traveling abroad or northern winter tours in Sajek and Darjeeling.',
      'Price: BDT 22,500. Location: Uttara Sector 3.'
    ]
  },
  {
    category: 'cloths',
    title: 'Adidas Yeezy Boost 350 V2 \'Onyx\' (Brand New with Tags, UK 9)',
    brand: 'Adidas',
    price: 29000,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Original Adidas Confirmed Receipt & Box',
    contactNumber: '01614880022',
    descParts: [
      'Adidas Yeezy Boost 350 V2 in triple black \'Onyx\' colorway. Size: UK 9 / US 9.5. Brand new, deadstock, never stepped on a floor with factory tags attached.',
      'Engineered with re-engineered Primeknit upper, monofilament post-dyed side stripe, and full-length adidas Boost cushioning encased in semi-translucent ribbed TPU midsole.',
      'Purchased through the official Adidas Confirmed app drop. 100% authentic guaranteed or 200% money back.',
      'Original Yeezy drawer box with factory barcode sticker included.',
      'Fixed price BDT 29,000. Meetup at Banani or Jamuna Future Park.'
    ]
  },
  {
    category: 'cloths',
    title: 'Tissot PRX Powermatic 80 Blue Dial Stainless Steel Automatic Watch',
    brand: 'Tissot',
    price: 64000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Mohammad & Sons Official BD Warranty valid till 2026',
    contactNumber: '01715991133',
    descParts: [
      'Tissot PRX Powermatic 80 (Reference: T137.407.11.041.00) in 40mm 316L stainless steel with integrated satin-brushed bracelet and waffle tapisserie deep blue dial.',
      'Powered by Swiss ETA Powermatic 80.111 automatic movement boasting an impressive 80 hours of power reserve with patented Nivachron anti-magnetic balance spring.',
      'Scratch-resistant sapphire crystal front and exhibition mineral case back showcasing the decorated Swiss rotor. 100 meters (10 bar) water resistance.',
      'Condition 9.8/10 with minimal hairline marks on butterfly clasp. All extra bracelet links included.',
      'Full presentation box, user manual, international warranty card, and Mohammad & Sons purchase receipt. BDT 64,000. Meetup at Gulshan 1.'
    ]
  },
  {
    category: 'cloths',
    title: 'Zara Premium Italian Wool Double-Breasted Overcoat Camel (Size 42)',
    brand: 'Zara',
    price: 16500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Zara store tags and garment cover',
    contactNumber: '01816002244',
    descParts: [
      'Zara Men\'s Premium Manteco Italian Wool Double-Breasted Trench Overcoat in timeless Camel tan (Size EUR 42 / US 32 / Large).',
      'Crafted from 75% recycled Italian Manteco wool fabric that drapes with elegant structure and provides substantial warmth during formal winter events.',
      'Features peak lapels, tortoise horn buttons, double welt side pockets, interior breast pockets, and back walking vent. Fully lined with viscose satin.',
      'Worn just once to an international wedding reception. Dry cleaned and preserved in breathable suit garment bag.',
      'Price: BDT 16,500. Meetup at Dhanmondi 8/A.'
    ]
  },
  {
    category: 'cloths',
    title: 'Aarong Handloom Premium Jamdani Pure Silk Saree (Royal Blue & Gold Zari)',
    brand: 'Aarong',
    price: 38000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Aarong Silk Mark Tag and Cash Memo',
    contactNumber: '01917113355',
    descParts: [
      'Authentic Aarong Taaga master weaver handloom 84-count pure Mulberry silk Jamdani saree in magnificent Royal Blue featuring intricate all-over gold zari floral motifs (Kalka & Jaal).',
      'Takes master weavers over two months to handcraft on traditional pit looms in Rupganj, Narayanganj. Feathery lightweight, elegant drape, and royal sheen.',
      'Includes matching unstitched pure silk blouse piece with matching zari embroidery on sleeves.',
      'Worn for 3 hours during an indoor family wedding ceremony. Spotless condition, dry-cleaned, stored with silica gel in cotton saree bag.',
      'Price: BDT 38,000 (showroom price was BDT 55,000). Location: Dhanmondi.'
    ]
  },
  {
    category: 'cloths',
    title: 'Seiko 5 Sports Automatic Dive Watch SRPD55K1 (Black Dial)',
    brand: 'Seiko',
    price: 25000,
    condition: 'likeNew',
    location: 'Chattogram',
    negotiable: 'no',
    warranty: '1 Year International Seiko Warranty Card with stamp',
    contactNumber: '01618224466',
    descParts: [
      'Seiko 5 Sports SRPD55K1 (known as the 5KX) automatic diver watch in 42.5mm stainless steel case with classic black sunray dial and unidirectional 120-click rotating bezel.',
      'Powered by robust Japanese in-house 4R36 automatic movement with hacking seconds, hand-winding, and bilingual day/date complication.',
      'Famous Seiko LumiBrite hands and hour markers glow intensely in the dark for hours. 100m water resistance with transparent case back.',
      'Includes original Seiko box, warranty card, instruction booklet, and extra bracelet links.',
      'Fixed price BDT 25,000. Meetup at GEC Circle, Chattogram.'
    ]
  },
  {
    category: 'cloths',
    title: 'Nike Dunk Low Retro \'Panda\' (Size UK 8.5, Worn Once)',
    brand: 'Nike',
    price: 14000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Authentic Nike SNKRS receipt',
    contactNumber: '01719335577',
    descParts: [
      'The most versatile lifestyle sneaker: Nike Dunk Low Retro in iconic White/Black \'Panda\' color blocking (Men\'s Size UK 8.5 / US 9.5).',
      'Crisp leather upper, perforated toe box, nylon padded tongue, and durable two-tone rubber cupsole with pivot circle traction pattern.',
      'Worn strictly once indoors for 2 hours. Bottom soles are clean, zero toe creasing, insoles are fresh and untouched.',
      'Original red Nike box and tissue paper included.',
      'Fixed price BDT 14,000. Meetup at Mirpur 10 or Banani.'
    ]
  },
  {
    category: 'cloths',
    title: 'Barbour Waxed Cotton Bedale Jacket Olive Green (Size 40)',
    brand: 'Barbour',
    price: 26500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Barbour Care Guide and original pin badge',
    contactNumber: '01810446688',
    descParts: [
      'Authentic Barbour Bedale Waxed Cotton Jacket in classic Olive Green with corduroy collar (Size 40 / Medium-Large). Handcrafted in South Shields, England.',
      'Constructed from 6oz mediumweight Thornproof waxed cotton providing 100% windproof and weather-resistant protection with classic tartan cotton lining.',
      'Features two-way brass ring-pull zipper, studded storm fly front, two generous bellow pockets, and moleskin-lined handwarmer pockets.',
      'Pristine condition, freshly rewaxed with Barbour Wax Thornproof dressing. A heritage wardrobe staple that lasts a lifetime.',
      'Price: BDT 26,500. Location: Gulshan 2.'
    ]
  },
  {
    category: 'cloths',
    title: 'Levi\'s Vintage Clothing 1954 501 Raw Selvedge Denim (32x32)',
    brand: 'Levi\'s',
    price: 12500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Original Levi\'s Store Tags',
    contactNumber: '01911557799',
    descParts: [
      'Levi\'s Vintage Clothing (LVC) 1954 501 Jeans crafted from premium Cone Mills White Oak pink-line selvedge rigid raw denim. Size W32 L32.',
      'Features zipper fly (the first 501 with a zip fly), leather Two Horse patch, hidden back pocket rivets, and single needle arcuate stitching.',
      'Unwashed, raw, unhemmed condition. Ready for raw denim enthusiasts to break in and create custom authentic fade lines.',
      'Fixed price BDT 12,500. Meetup at Dhanmondi 27.'
    ]
  },
  {
    category: 'cloths',
    title: 'Ray-Ban Original Wayfarer Classic Polarized Sunglasses (Tortoise Frame)',
    brand: 'Ray-Ban',
    price: 14500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Luxottica Authenticity Certificate and Case',
    contactNumber: '01612668800',
    descParts: [
      'Ray-Ban Original Wayfarer Classic RB2140 902/58 (50mm lens width) in Tortoise acetate frame with G-15 Green Polarized crystal mineral glass lenses.',
      'Eliminates 99% of reflected glare from roads and water while preserving true color fidelity with 100% UV400 radiation protection.',
      'Laser-etched \'RB\' logo on left lens and Ray-Ban script on right lens. Made in Italy with solid metal barrel hinges.',
      'Comes with Ray-Ban black leather snap case, microfiber cleaning cloth, and Luxottica manufacturer booklet.',
      'Price: BDT 14,500. Location: Banani.'
    ]
  },
  {
    category: 'cloths',
    title: 'Taaga by Aarong Men\'s Designer Embroidered Silk Panjabi Set (Size 42)',
    brand: 'Aarong',
    price: 9500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Aarong Showroom Tag and Packaging',
    contactNumber: '01713779911',
    descParts: [
      'Exclusive Taaga Man by Aarong raw tussar silk Panjabi in deep charcoal black with intricate tone-on-tone thread embroidery on the Mandarin collar and placket.',
      'Size 42 (Regular Fit). Paired with matching tailored white cotton churidar pajama with drawstring.',
      'Worn only once on Eid day morning for prayers. Spotless, dry-cleaned, and kept in plastic garment cover.',
      'Fixed price BDT 9,500. Meetup in Uttara Sector 7.'
    ]
  },
  {
    category: 'cloths',
    title: 'New Balance 990v6 Made in USA Grey (Size UK 10, Mint Condition)',
    brand: 'New Balance',
    price: 23000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'New Balance Original Box and Receipt',
    contactNumber: '01814880022',
    descParts: [
      'New Balance 990v6 \'Made in USA\' Teddy Santis collection in flagship Castlerock Grey (Men\'s Size UK 10 / US 10.5).',
      'Engineered with FuelCell foam midsole cushioning providing dynamic energy return with lightweight ENCAP rim stability.',
      'Pigskin suede and breathable mesh upper with reflective 3M accents on the \'N\' logo and heel counter. The ultimate comfortable lifestyle walking shoe.',
      'Worn 3 times only. Outsoles show zero wear, insoles are clean, suede is soft and pristine.',
      'Price: BDT 23,000. Meetup at Dhanmondi or Banani.'
    ]
  },

  // -------------------------------------------------------------
  // SPORTS (14 items)
  // -------------------------------------------------------------
  {
    category: 'sports',
    title: 'Kookaburra Kahuna Pro Grade 1 English Willow Cricket Bat (2.8 lbs)',
    brand: 'Kookaburra',
    price: 32000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Laser etched authenticity serial and bat cover',
    contactNumber: '01711668800',
    descParts: [
      'Kookaburra Kahuna Pro Grade 1 English Willow Cricket Bat (Short Handle). Weighs exactly 2 lbs 8 oz with superb pickup and balance.',
      'Crafted from unbleached Grade 1 English Willow with 9 straight, evenly spaced grains and zero heartwood blemishes. Massive 40mm thick edges and a huge sweet spot designed for aggressive front-foot power hitting.',
      'Professionally hand-knocked with 10,000 mallet knocks and lightly oiled with raw linseed oil. Anti-scuff protective sheet pre-applied on the face with heavy-duty rubber toe guard.',
      'Used in only two friendly leather ball league matches. Ping is explosive with that distinctive sharp crack off the middle.',
      'Includes original padded Kookaburra full-length bat carrying cover. Price: BDT 32,000. Meetup at Dhanmondi or Mirpur Stadium.'
    ]
  },
  {
    category: 'sports',
    title: 'Trek Marlin 7 Gen 3 Mountain Bicycle (Hydraulic Brakes, 1x10 Deore)',
    brand: 'Trek',
    price: 68000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Lifetime Frame Warranty with Lions Bicycle Memo',
    contactNumber: '01812779911',
    descParts: [
      'Trek Marlin 7 Gen 3 cross-country mountain bicycle (Size: M/L, 29-inch wheels) in Matte Nautical Navy with updated slack trail geometry.',
      'Drivetrain upgraded to Shimano Deore M5120 1x10 speed with Shadow Plus clutch derailleur preventing chain slaps. RockShox Judy Silver 100mm suspension fork with hydraulic lockout.',
      'Equipped with Shimano MT200 hydraulic disc brakes delivering confident one-finger stopping power on steep gravel descents. Bontrager Kovee tubeless-ready rims with XR2 Team Issue tires.',
      'Ridden around 450 km on Hatirjheel and Purbachal expressways. Kept indoors, cleaned and chain-lubed after every ride.',
      'Price: BDT 68,000. Test ride available at Dhanmondi Lake.'
    ]
  },
  {
    category: 'sports',
    title: 'Decathlon Domyos T540C Motorized Treadmill (16 km/h, Auto-Incline)',
    brand: 'Decathlon',
    price: 58000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: '5 Years Motor Warranty Card with Decathlon BD Receipt',
    contactNumber: '01913880022',
    descParts: [
      'Decathlon Domyos T540C heavy-duty home motorized treadmill. Features 2.5 HP continuous-duty motor supporting running speeds up to 16 km/h and motorized auto-incline up to 10%.',
      'Wide running deck (45 x 125 cm) equipped with Domyos Soft Impact shock-absorption cushioning system that reduces impact shock on knees and ankles by up to 25%.',
      'Backlit LCD console with 24 pre-set workout routines, heart rate pulse monitors on handrails, tablet holder, and Domyos E-Connected app integration via Bluetooth.',
      'Hydraulic soft-drop folding system allows the running deck to fold vertically when not in use for compact storage.',
      'Operated for less than 35 hours total. Price: BDT 58,000. Location: Uttara Sector 4.'
    ]
  },
  {
    category: 'sports',
    title: 'Bowflex SelectTech 552 Adjustable Dumbbells Pair (5 to 52.5 lbs)',
    brand: 'Bowflex',
    price: 28500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Original Bowflex trays and warranty card',
    contactNumber: '01614991133',
    descParts: [
      'Original pair of Bowflex SelectTech 552 adjustable dumbbells with storage docking cradles. Replaces 15 pairs of traditional weights into one sleek, compact footprint.',
      'Adjusts weight in increments from 5 lbs up to 52.5 lbs per dumbbell (2.5 to 24 kg) simply by turning the smooth mechanical selection dial on both ends.',
      'Durable molding around metal weight plates ensures whisper-quiet workouts with zero metal clanging. Ergonomic non-slip rubberized handles.',
      'In flawless mechanical and aesthetic shape, gears click into place with precision.',
      'Fixed price BDT 28,500. Pickup from Banani.'
    ]
  },
  {
    category: 'sports',
    title: 'Yonex Astrox 99 Pro Badminton Racket (3UG5, Strung with BG65Ti)',
    brand: 'Yonex',
    price: 19500,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Laser engraved sunrise code and authenticity hologram',
    contactNumber: '01715002244',
    descParts: [
      'Authentic Made in Japan Yonex Astrox 99 Pro badminton racket in White Tiger finish (Weight/Grip: 3UG5). Endorsed by world champion Kento Momota.',
      'Features Rotational Generator System with Namd graphite in the shaft and frame delivering devastating, steep power smashes with lightning-fast recovery for defense.',
      'Freshly strung with Yonex BG65 Titanium string at 28 lbs tension with Yonex AC102EX super grap overgrip applied.',
      'Zero paint chips, zero frame cracks or clashes. Used in only 4 indoor court matches.',
      'Comes with official Astrox thermal racket cover. Fixed price BDT 19,500. Meetup at Dhanmondi.'
    ]
  },
  {
    category: 'sports',
    title: 'Wilson Pro Staff 97 v14 Tennis Racket (315g, Grip Size 3)',
    brand: 'Wilson',
    price: 24000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Wilson Official Hologram and Cover',
    contactNumber: '01816113355',
    descParts: [
      'Wilson Pro Staff 97 v14 Tennis Racket (315g unstrung weight, 16x19 string pattern, 97 sq inch head size, Grip Size 3 / 4 3/8) in color-shifting bronze-copper gloss finish.',
      'Engineered with Braid 45 construction weaving carbon fibers at 45-degree angles for unmatched torsional stability, pinpoint precision, and classic Roger Federer ball feel.',
      'Strung with Luxilon ALU Power 125 poly string at 52 lbs. Head bumper guard is in clean condition with no asphalt rash.',
      'Includes Wilson full thermal protective racket cover.',
      'Price: BDT 24,000. Meetup at Gulshan Club tennis court or Dhanmondi.'
    ]
  },
  {
    category: 'sports',
    title: 'SS Ton Matrix Player Edition English Willow Cricket Bat',
    brand: 'SS Ton',
    price: 27000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'SS Ton Authenticity QR code verified',
    contactNumber: '01917224466',
    descParts: [
      'SS Ton Matrix Player Edition English Willow Cricket Bat (Short Handle). Sourced from Sareen Sports India with verified authenticity QR code.',
      'Air-dried Grade 1 selected English Willow featuring 8 distinct straight grains, 39mm curved edges, and full spine profile with zero concaving.',
      'Weighs 2 lbs 7.5 oz with light feathered pickup. Machine knocked and hand finished with protective scuff sheet and rubber toe guard.',
      'Delivers massive power for hitting through the line with effortless timing. Tested with brand new Kookaburra balls.',
      'Includes SS Ton premium padded bat bag. Price: BDT 27,000. Location: Mirpur 2.'
    ]
  },
  {
    category: 'sports',
    title: 'Giant Escape 2 Disc Hybrid Bicycle 2023 (Size M, Shimano Altus)',
    brand: 'Giant',
    price: 45000,
    condition: 'likeNew',
    location: 'Chattogram',
    negotiable: 'yes',
    warranty: 'Giant Store Cash Memo & Service Book',
    contactNumber: '01618335577',
    descParts: [
      'Giant Escape 2 Disc 2023 fitness hybrid city commuter bicycle (Size Medium, Charcoal Grey). ALUXX-grade lightweight aluminum frame with D-Fuse vibration-absorbing seatpost.',
      'Tektro HD-R280 hydraulic disc brakes with flat-mount calipers offering dependable braking in wet monsoon weather. Shimano Altus 2x8 speed drivetrain with smooth rapidfire shifters.',
      'Puncture-resistant Giant S-X2 700x38c multi-surface tires glide fast on tarmac roads while handling potholes and light gravel paths with ease.',
      'Used lightly for weekend city rides. 10/10 condition, no rust, shifts like clockwork.',
      'Price: BDT 45,000. Meetup at Nasirabad or GEC, Chattogram.'
    ]
  },
  {
    category: 'sports',
    title: 'Everlast Heavy Punching Bag 100 lbs with Ceiling Mount and Pro Gloves',
    brand: 'Everlast',
    price: 14000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'Everlast factory packaging',
    contactNumber: '01719446688',
    descParts: [
      'Original Everlast 100 lbs (45 kg) Nevatear heavy boxing punching bag (Height: 48 inches). Polycanvas shell filled with custom sanitized synthetic and natural fiber blend for optimal shock absorption.',
      'Heavy-duty nylon straps with metal D-rings ensure quiet hanging without metal chain clatter. Heavy swivel steel ceiling mount bracket with concrete anchor bolts included.',
      'Includes a pair of Everlast Pro Style Training Boxing Gloves (14 oz, Red/Black) with wrist wrap support and Everlast hand wraps.',
      'Hardly used, clean surface with zero tears or seam fraying.',
      'Fixed price BDT 14,000. Pickup from Dhanmondi 9/A.'
    ]
  },
  {
    category: 'sports',
    title: 'Concept2 Model D Indoor Rowing Machine with PM5 Performance Monitor',
    brand: 'Concept2',
    price: 98000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Concept2 Warranty Registration and Manuals',
    contactNumber: '01810557799',
    descParts: [
      'Concept2 RowErg (Model D) with PM5 Performance Monitor in Black. The worldwide gold standard for cardiovascular fitness and full-body crossfit conditioning.',
      'Smooth flywheel air resistance with 10 damper settings. Spiral damper controls airflow to simulate quiet water rowing with responsive stroke feel.',
      'PM5 monitor tracks distance, 500m split pace, stroke rate, calories burned, and connects via Bluetooth to ErgData, Strava, and Apple Health apps.',
      'Lifetime home use: separates into two lightweight segments without tools for easy standing storage on wheels.',
      'Total lifetime meters rowed is less than 65,000 meters. Clean chain, smooth monorail seat rollers.',
      'Price: BDT 98,000. Meetup at Banani.'
    ]
  },
  {
    category: 'sports',
    title: 'Adidas FIFA World Cup Official Match Football Pro Ball',
    brand: 'Adidas',
    price: 11500,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'FIFA Quality Pro Certified Stamp & Presentation Box',
    contactNumber: '01911668800',
    descParts: [
      'Adidas Official FIFA Quality Pro Certified Match Football (Size 5). Thermally bonded seamless Speedshell surface technology for predictable flight trajectory and zero water absorption.',
      'Features CTR-CORE bladder providing maximum shape retention and air rebound during intense match play on natural grass pitches.',
      'Brand new in official presentation display carton. Perfect for collector showcase or competitive tournament play.',
      'Fixed price BDT 11,500. Meetup at Bashundhara R/A.'
    ]
  },
  {
    category: 'sports',
    title: 'Garmin Forerunner 265 GPS Running Smartwatch Black',
    brand: 'Garmin',
    price: 44000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Garmin International Warranty valid till 2026',
    contactNumber: '01612779911',
    descParts: [
      'Garmin Forerunner 265 GPS multisport running smartwatch with vibrant 1.3-inch AMOLED touchscreen display in Black with silicone band.',
      'Advanced performance metrics: Training Readiness, Morning Report, HRV Status, Native Running Power, Race Widget, and VO2 Max estimator.',
      'Multi-band GNSS with SatIQ technology delivers superior GPS positioning accuracy in urban canyons and forested routes without draining battery. Up to 13 days of battery life in smartwatch mode.',
      'Spotless condition, screen protector applied from day 1, clean optical heart rate sensors.',
      'Comes with original Garmin magnetic charging cable and box. Price: BDT 44,00,0. Meetup at Uttara.'
    ]
  },
  {
    category: 'sports',
    title: 'Speedo Fastskin LZR Pure Intent Competitive Racing Jammer (Size 26)',
    brand: 'Speedo',
    price: 13000,
    condition: 'new',
    location: 'Dhaka',
    negotiable: 'no',
    warranty: 'FINA Approved QR label and box',
    contactNumber: '01713880022',
    descParts: [
      'Speedo Fastskin LZR Pure Intent High-Waisted Competitive Racing Jammer (Men\'s Size 26) in Black & Rose Gold. FINA approved for international competitive swim meets.',
      'Engineered with dual compressive layers and ergonomic seam construction designed to connect key muscle groups for greater power return and minimal hydrodynamic drag.',
      'Brand new in box with tags, tried on once over racing briefs, never used in chlorinated water.',
      'Fixed price BDT 13,000. Location: Dhanmondi.'
    ]
  },
  {
    category: 'sports',
    title: 'Fox Racing Proframe Full Face Mountain Bike Helmet MIPS (Size L)',
    brand: 'Fox Racing',
    price: 22000,
    condition: 'likeNew',
    location: 'Dhaka',
    negotiable: 'yes',
    warranty: 'Fox Racing carry bag and spare cheek pads',
    contactNumber: '01814991133',
    descParts: [
      'Fox Racing Proframe MIPS Full Face Mountain Bike / Enduro Helmet in Matte Black (Size Large: 58-61 cm). Certified downhill protection with the breathability of an open face trail helmet.',
      'Integrated MIPS (Multi-directional Impact Protection System) safety system reduces rotational forces transmitted to the brain during angled impacts. 24 Big Bore air vents ensure cool airflow during long uphill pedaling.',
      'Fidlock SNAP magnetic helmet buckle provides ultra-fast opening and closing even when wearing full finger gloves. Dual-density Varizorb EPS foam liner.',
      'Zero crashes, zero impact marks, liners washed clean and fresh. Includes original helmet bag and extra cheek pads.',
      'Price: BDT 22,000. Meetup at Mirpur DOHS.'
    ]
  }
];

const districts = [
  "bagerhat", "bandarban", "barguna", "barishal", "bhola", "bogura", "brahmanbaria", "chandpur", "chattogram", "chuadanga",
  "comilla", "cox's bazar", "dhaka", "dinajpur", "faridpur", "feni", "gaibandha", "gazipur", "gopalganj", "habiganj",
  "jamalpur", "jashore", "jhalokathi", "jhenaidah", "joypurhat", "khagrachari", "khulna", "kishoreganj", "kurigram", "kushtia",
  "lakshmipur", "lalmonirhat", "madaripur", "magura", "manikganj", "meherpur", "moulvibazar", "munshiganj", "mymensingh", "naogaon",
  "narail", "narayanganj", "narsingdi", "natore", "netrokona", "nilphamari", "noakhali", "pabna", "panchagarh", "patuakhali",
  "pirojpur", "rajbari", "rajshahi", "rangamati", "rangpur", "satkhira", "shariatpur", "sherpur", "sirajganj", "sunamganj",
  "sylhet", "tangail", "thakurgaon"
];

// Helper to generate full listing document
function buildListingDoc(raw, index, userId) {
  const images = get5Images(raw.category, index);
  // Ensure large rich multi-paragraph description
  const description = raw.descParts.join('\n\n');
  const price = raw.priceReal || raw.price;
  const district = districts[index % districts.length];
  let condition = raw.condition;
  if (index % 9 === 7) condition = 'refurbished';

  return {
    title: raw.title,
    description: description,
    price: price,
    condition: condition,
    images: images,
    userID: userId,
    status: index % 3 === 0 ? 'sold' : 'available',
    category: raw.category,
    brand: raw.brand,
    location: district,
    negotiable: raw.negotiable,
    warranty: raw.warranty,
    contactNumber: raw.contactNumber,
    isDeleted: false,
    createdAt: new Date(Date.now() - (index * 86400000 * 0.7)),
    updatedAt: new Date(Date.now() - (index * 86400000 * 0.3))
  };
}

module.exports = {
  RAW_LISTINGS,
  buildListingDoc
};

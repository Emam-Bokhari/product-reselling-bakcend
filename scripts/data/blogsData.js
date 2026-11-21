// 105 rich, in-depth blog posts on tech, gadgets, secondhand buying tips, scam alerts, and resale advice
const { IMAGE_POOLS } = require('../seedHelpers');

const BLOG_TOPICS = [
  {
    category: 'Used Gadgets Buying Guide',
    baseTitle: 'The Definitive Checklist for Buying a Used Smartphone in Bangladesh',
    intro: 'Buying a pre-owned smartphone can save up to 40% compared to brand new retail prices, but it requires a methodical inspection process to avoid locked, stolen, or refurbished clone devices. In this comprehensive guide, we walk you through hardware diagnostics, BTRC IMEI verification, and battery health checks before handing over cash.',
    sections: [
      '1. Verify the IMEI and BTRC Registration Status: In Bangladesh, unregistered gray market devices face network blacklisting. Always dial *#06# to obtain the genuine 15-digit IMEI directly from the firmware—never trust the sticker on the box alone. Send an SMS with KYD <space> 15-digit IMEI to 16002 to verify official telecom approval.',
      '2. Test the Display and Touch Digitizer: Screen replacements are very common in the resale market. Check for True Tone on iPhones or Natural Color Tone on Samsung devices. Open the dialer and input *#0*# on Samsung or use diagnostic apps like TestM to run touch screen grid tests. Inspect the edges for glue residue or lifting glass which indicates aftermarket screen repair.',
      '3. Battery Cycle and Degradation Check: A battery health percentage below 80% means you will need an immediate replacement costing several thousand Taka. For iPhones, check Settings > Battery > Battery Health. For Android devices, inspect battery diagnostic apps like AccuBattery or manufacturer menus to verify battery health and charging thermal stability.',
      '4. Inspect Cameras, Microphones, and Biometric Sensors: Test all camera lenses—primary, ultra-wide, and telephoto. Tap each lens to test autofocus mechanisms. Record a 10-second video speaking at normal volume and playback to check top and bottom microphones. Test Face ID or in-display fingerprint sensors multiple times.',
      '5. Cloud Locks and Factory Reset in Person: Always insist that the seller log out of iCloud or Google Account in front of you and perform a full "Erase All Content and Settings" on the spot. Never buy a device that cannot be factory reset before you leave.'
    ],
    tags: ['UsedMobile', 'BuyingGuide', 'BTRC', 'SmartShopping', 'DhakaTech']
  },
  {
    category: 'Laptop & PC Performance',
    baseTitle: 'Secondhand Laptop Inspection: How to Spot Hidden Motherboard and Battery Flaws',
    intro: 'Purchasing a pre-owned MacBook, ThinkPad, or gaming laptop offers phenomenal value for students, developers, and designers. However, thermal throttling, internal liquid spills, and degraded SSD health are invisible from the outside. Here is our step-by-step diagnostic checklist to test any used laptop thoroughly.',
    sections: [
      '1. Stress Test CPU and GPU Under Load: Bring a USB flash drive with portable testing utilities: Cinebench R23, FurMark, and HWMonitor. Run a 10-minute combined stress test to monitor maximum package temperatures. If temperatures exceed 95°C or the laptop abruptly shuts down, the cooling heatpipes or thermal paste need immediate attention.',
      '2. Inspect Storage Drive Health with CrystalDiskInfo: An aging SSD with poor health can lead to catastrophic data loss. Open CrystalDiskInfo to read the S.M.A.R.T. parameters: Total Host Writes, Power On Hours, and Health Status percentage. Anything below 85% health warrants a price discount for SSD replacement.',
      '3. Battery Cycle Count and Capacity Retention: On Windows, run cmd as Administrator and execute powercfg /batteryreport to generate an HTML diagnostic report comparing Design Capacity against Full Charge Capacity. On MacBooks, check System Information > Power > Cycle Count.',
      '4. Examine the Keyboard, Trackpad, and Port Integrity: Test every single key on keyboardtester.com. Ensure the spacebar, enter, and shift keys do not feel mushy from drink spills. Plug a high-speed flash drive into every USB-A, Type-C, and HDMI port to ensure stable data transfer and external display output.',
      '5. Inspect Screen for Backlight Bleed and Dead Pixels: Open a full-screen white image and full-screen black image to inspect for stuck dead pixels, pressure spots from keyboard contact, and uneven backlight bleed along the display bezels.'
    ],
    tags: ['UsedLaptop', 'MacBookTips', 'PCBuilding', 'TechGuide', 'HardwareDiagnostic']
  },
  {
    category: 'Safe Marketplace Transactions',
    baseTitle: 'Escrow and Safe Meetups: How to Avoid Scams on Bangladeshi Resale Platforms',
    intro: 'The rise of peer-to-peer marketplaces in Bangladesh has made finding deals easier than ever, but fraudsters use fake payment screenshots, couriers scams, and clone devices to target unwary buyers. Here is your ultimate safety playbook for buying and selling securely in Dhaka, Chattogram, and across Bangladesh.',
    sections: [
      '1. Choose Safe Public Daytime Meetup Locations: Never meet a stranger in secluded alleys, private residences, or unfamiliar spots after dark. Opt for crowded, well-lit shopping complexes with security and CCTV cameras—such as Jamuna Future Park, Bashundhara City, Banani Supermarket, or renowned fast-food outlets.',
      '2. Beware of Fake Mobile Banking SMS and Payment Screenshots: One of the most widespread scams in Bangladesh involves forged bKash or Nagad SMS notifications or fake banking app screenshot generators. Always unlock your own personal bKash/Nagad app and verify that the updated balance has actually credited your account before handing over the goods.',
      '3. Understand Courier Condition Deal Risks: If dealing across cities via Sundarban or SA Paribahan, always demand a nominal token deposit to cover freight costs. Insist that the buyer inspect the package in the presence of courier branch staff before release.',
      '4. Verify the Seller Profile and Identity: Look for established marketplace accounts with verified phone numbers, complete profile pictures, and active listing histories. Be skeptical of brand-new profiles selling top-tier flagship electronics at 50% below prevailing market rates.',
      '5. Always Request Original Invoices and ID Copy: When buying high-value items like luxury motorcycles, iPhones, or cameras, request a photocopy of the seller\'s National ID card (NID) alongside the original purchase invoice to protect yourself from unknowingly purchasing stolen property.'
    ],
    tags: ['ScamAlert', 'SafeShopping', 'EscrowSafety', 'BuyerProtection', 'DhakaMarket']
  },
  {
    category: 'Vehicle Resale & Inspection',
    baseTitle: 'Used Motorcycle and Car Inspection in Bangladesh: BRTA Papers & Mechanical Health',
    intro: 'Buying a pre-owned vehicle in Bangladesh can be an excellent financial decision, but incomplete BRTA paperwork or hidden engine issues can turn your dream ride into a legal nightmare. Learn how to verify chassis numbers, tax tokens, and mechanical performance with confidence.',
    sections: [
      '1. Verifying BRTA Digital Smart Card and Ownership Transfer: The number one rule when buying a car or bike is ensuring the vehicle is in the 1st party seller\'s name with immediate name transfer capability. Check the BRTA IS system to verify engine and chassis number matches. Ensure Tax Token, Fitness Certificate, and Route Permit are up to date with zero outstanding traffic prosecution fines.',
      '2. Inspecting Chassis and Structural Frame for Accident History: Check the front aprons, radiator support core, pillar weld spots, and trunk floor. Factory spot welds are uniform and clean; uneven putty, hammer marks, or fresh spray paint indicate major front or rear collision repair.',
      '3. Engine Compression and Cold Start Behavior: Always inspect the vehicle when the engine is completely cold. A warm engine hides hard-starting issues and worn valve seals. Observe the exhaust: white smoke indicates head gasket failure, blue smoke signals burning engine oil, and black smoke points to fuel injector issues.',
      '4. Transmission and Suspension Road Test: On manual bikes and cars, test clutch engagement and shift firmness through all gears without grinding. Drive over rough cobblestones or speed bumps to listen for squeaking ball joints, worn tie-rod ends, or leaking shock absorbers.',
      '5. Tire Tread Life and Brake Rotor Condition: Check tire manufacturing date codes (DOT stamp) on the sidewall. Tires older than 5 years must be replaced regardless of remaining tread due to rubber hardening. Run your finger along brake discs to check for deep grooves or warping.'
    ],
    tags: ['UsedVehicles', 'MotorcycleBD', 'BRTA', 'CarInspection', 'BikeMaintenance']
  },
  {
    category: 'Marketplace Trends & Reselling',
    baseTitle: 'How to Photograph and Describe Your Used Items for 2x Faster Sales',
    intro: 'The secret to selling your gadgets, furniture, and clothing quickly at top market rates lies in high-quality presentation and transparent, detailed descriptions. Discover proven marketplace strategies to turn idle household items into fast cash.',
    sections: [
      '1. Utilize Natural Daylight and Clean Neutral Backgrounds: Good lighting is the difference between a high-end listing and a neglected item. Shoot your photos near a large window during daylight hours. Clean the item thoroughly with microfiber cloth and isopropyl alcohol to remove dust and fingerprints before photographing.',
      '2. Provide Multiple Angles: Front, Back, Ports, and Flaws: Buyers mistrust listings with only 1 or 2 generic stock images. Take clear photos of all sides, including closeup shots of ports, IMEI labels, accessories, and any cosmetic scratches. Honesty about minor imperfections builds immense trust and prevents deal cancellations upon meeting.',
      '3. Write Structured, Bullet-Pointed Descriptions: Outline key specifications, purchase origin, warranty duration, battery health, and what is included in the package. Clear, well-spaced paragraphs make your listing readable on mobile devices and reduce repetitive customer inquiries.',
      '4. Set Competitive Resale Pricing Based on Real Data: Search current listings on ReSellBD for the exact model. Price your item within 5-10% of comparable listings if you want a fast sale, and specify whether you are open to polite negotiation or strictly fixed.',
      '5. Prompt Communication and Professional Etiquette: Respond to buyer messages within 15 minutes during business hours. Polite, courteous communication sets a positive tone and closes deals significantly faster than delayed or curt responses.'
    ],
    tags: ['SellerTips', 'FastSales', 'ProductPhotography', 'ResaleStrategy', 'MarketplacePro']
  }
];

const AUTHORS = [
  'Moshfiqur Rahman',
  'Tanvir Ahmed',
  'Sabrina Sultana',
  'Farhana Islam',
  'Abrar Fahad',
  'Tahmid Hasan',
  'Mahir Faisal',
  'Nusrat Jahan',
  'Sabbir Hossain',
  'Zulkar Naeem Rabby',
  'Tasnim Chowdhury',
  'Mehedi Hasan'
];

const VARIANTS = [
  'Essential Guide',
  'Expert Walkthrough',
  'Buyer Checklist',
  'Pro Insights',
  'Practical Blueprint',
  'Field Review',
  'Marketplace Report',
  'Deep Dive Analysis',
  'Actionable Tips',
  'Comprehensive Manual',
  'Insider Recommendations',
  'Safety Protocol'
];

function generate105Blogs() {
  const blogs = [];
  const thumbnailPool = IMAGE_POOLS.blogs;

  for (let i = 0; i < 105; i++) {
    const topic = BLOG_TOPICS[i % BLOG_TOPICS.length];
    const author = AUTHORS[i % AUTHORS.length];
    const variant = VARIANTS[i % VARIANTS.length];
    const thumbnail = thumbnailPool[i % thumbnailPool.length];

    const title = `${topic.baseTitle} - ${variant} #${i + 1}`;
    const intro = `${topic.intro} In this edition, we expand on specific field observations from recent marketplace transactions in Bangladesh.`;

    const mainContent = [
      `### Executive Summary & Context\nWhen navigating the secondhand market in Bangladesh, knowledge is your most valuable currency. Whether you are dealing in consumer electronics, personal mobility, or home living essentials, taking proactive precautions guarantees that you secure unbeatable value without falling prey to common pitfalls.\n`,
      `### Detailed Diagnostic Methodology\n${topic.sections.join('\n\n')}\n`,
      `### Expert Recommendations & Negotiation Strategy\nWhen negotiating the final purchase price, always ground your counter-offer in objective observations. If the battery health is 84%, calculate the exact replacement cost from an authorized service center and request an equivalent discount. Be polite, avoid low-ball offers that offend genuine sellers, and always agree on a clear meetup location in advance.\n`,
      `### Final Verdict & Safety Wrap-Up\nNever rush a transaction under high-pressure tactics. A reputable seller will always grant you 15 to 20 minutes of uninterrupted testing time. If anything feels suspicious, off-brand, or evasive, politely walk away. ReSellBD remains dedicated to building the most trusted, secure circular economy in Bangladesh.`
    ].join('\n\n');

    blogs.push({
      title,
      thumbnail,
      category: topic.category,
      authorName: author,
      introduction: intro,
      mainContent,
      tags: topic.tags,
      isDeleted: false,
      createdAt: new Date(Date.now() - (i * 86400000 * 0.8)),
      updatedAt: new Date(Date.now() - (i * 86400000 * 0.4))
    });
  }

  return blogs;
}

module.exports = {
  generate105Blogs
};

// 110 realistic users (15 Admins + 95 Regular users) for ReSellBD
const { IMAGE_POOLS } = require('../seedHelpers');

const FIRST_NAMES = [
  'Tanvir', 'Farhana', 'Mehedi', 'Sabrina', 'Abrar', 'Sumaiya', 'Sabbir',
  'Tasmia', 'Sakib', 'Tahmid', 'Mahir', 'Sadia', 'Naimur', 'Anika',
  'Shakil', 'Nusrat', 'Rashed', 'Jannat', 'Shahriar', 'Tasnim', 'Imtiaz',
  'Afsana', 'Ashik', 'Fatema', 'Maruf', 'Fahmida', 'Kamrul', 'Sharmin',
  'Nahid', 'Zinia', 'Ariful', 'Mahmuda', 'Rayhan', 'Samia', 'Asif',
  'Naznin', 'Sazzad', 'Fariha', 'Mustafiz', 'Ishrat', 'Al-Amin', 'Rumana',
  'Touhid', 'Sanjida', 'Kazi', 'Mehzabin', 'Saiful', 'Farzana', 'Jubayer', 'Bushra'
];

const LAST_NAMES = [
  'Hasan', 'Islam', 'Ahmed', 'Rahman', 'Sultana', 'Akter', 'Hossain',
  'Chowdhury', 'Khan', 'Sikder', 'Talukder', 'Bhuiyan', 'Haque', 'Sarkar',
  'Kabir', 'Biswas', 'Munshi', 'Prodhan', 'Dewan', 'Alom', 'Gazi',
  'Bepari', 'Tarafdar', 'Khondokar', 'Majumder', 'Chowdhury'
];

const CITIES_DATA = [
  { city: 'Dhaka', address: 'House 24, Road 11, Banani', postalCode: '1213' },
  { city: 'Dhaka', address: 'Plot 15, Sector 7, Uttara', postalCode: '1230' },
  { city: 'Dhaka', address: 'House 45, Road 27, Dhanmondi', postalCode: '1209' },
  { city: 'Dhaka', address: 'Block D, Bashundhara R/A', postalCode: '1229' },
  { city: 'Dhaka', address: 'Road 5, Mirpur DOHS', postalCode: '1216' },
  { city: 'Dhaka', address: 'House 8, Road 3, Gulshan 1', postalCode: '1212' },
  { city: 'Dhaka', address: 'Road 12, Mohakhali DOHS', postalCode: '1206' },
  { city: 'Dhaka', address: 'Tajmahal Road, Mohammadpur', postalCode: '1207' },
  { city: 'Chattogram', address: 'CDA Avenue, GEC Circle', postalCode: '4000' },
  { city: 'Chattogram', address: 'Road 3, Nasirabad Housing Society', postalCode: '4209' },
  { city: 'Chattogram', address: 'Agrabad Commercial Area', postalCode: '4100' },
  { city: 'Sylhet', address: 'Zindabazar Main Street', postalCode: '3100' },
  { city: 'Sylhet', address: 'Sector C, Shahjalal Uposhohor', postalCode: '3100' },
  { city: 'Rajshahi', address: 'Shaheb Bazar Road', postalCode: '6000' },
  { city: 'Khulna', address: 'Mujgunni Main Road, Boyra', postalCode: '9000' },
  { city: 'Bogura', address: 'Jaleshwaritola Central Road', postalCode: '5800' },
  { city: 'Barishal', address: 'Sadar Road, Kotwali', postalCode: '8200' },
  { city: 'Cumilla', address: 'Kandirpar Shopping Zone', postalCode: '3500' }
];

const BIOS = [
  'Senior Full-Stack Software Engineer & tech gadget enthusiast in Dhaka. Regularly upgrading my workstation setup.',
  'Mobile photographer and smartphone collector. I test flagship devices for camera performance and sell in pristine condition.',
  'Mechanical engineer and automobile hobbyist. Passionate about motorbikes and clean performance cars in Bangladesh.',
  'Interior designer and vintage furniture curator. Giving beautiful pre-owned wooden furniture a second life.',
  'University researcher at BUET. Avid cyclist, mechanical keyboard builder, and audio gear collector.',
  'Architect with an eye for minimalist Scandinavian home decor, premium electronics, and modern aesthetics.',
  'Sneaker collector and streetwear aficionado. All sneakers are 100% authentic with factory receipts.',
  'Certified animal welfare volunteer and pet lover in Dhaka. Fostering and finding loving homes for rescued pets.',
  'Competitive badminton player and sports fitness trainer based in Dhanmondi, Dhaka.',
  'Tech reviewer and gadget trader. Fast responder, transparent descriptions, and verified marketplace seller.'
];

const ADMIN_DEPARTMENTS = [
  { name: 'System Operations Admin', email: 'admin.operations@resellbd.com' },
  { name: 'Catalog & Listings Moderator', email: 'admin.catalog@resellbd.com' },
  { name: 'Trust & Safety Director', email: 'admin.security@resellbd.com' },
  { name: 'Buyer Protection Supervisor', email: 'admin.protection@resellbd.com' },
  { name: 'Dispute Resolution Lead', email: 'admin.disputes@resellbd.com' },
  { name: 'Platform Finance Auditor', email: 'admin.finance@resellbd.com' },
  { name: 'Quality Assurance Head', email: 'admin.quality@resellbd.com' },
  { name: 'Merchant Verification Lead', email: 'admin.merchants@resellbd.com' },
  { name: 'Compliance & Legal Manager', email: 'admin.compliance@resellbd.com' },
  { name: 'Customer Experience Lead', email: 'admin.support@resellbd.com' },
  { name: 'Logistics Operations Lead', email: 'admin.logistics@resellbd.com' },
  { name: 'Escrow Settlements Officer', email: 'admin.escrow@resellbd.com' },
  { name: 'Community Outreach Admin', email: 'admin.community@resellbd.com' },
  { name: 'Infrastructure Admin', email: 'admin.devops@resellbd.com' },
  { name: 'Executive Operations Admin', email: 'admin.executive@resellbd.com' }
];

function generate110Users(hashedPassword) {
  const users = [];
  const avatars = IMAGE_POOLS.avatars;

  // 1. Generate 15 Admins
  for (let i = 0; i < ADMIN_DEPARTMENTS.length; i++) {
    const dept = ADMIN_DEPARTMENTS[i];
    const loc = CITIES_DATA[i % CITIES_DATA.length];
    const avatar = avatars[i % avatars.length];

    users.push({
      name: dept.name,
      identifier: dept.email,
      password: hashedPassword,
      role: 'admin',
      status: 'active',
      isDeleted: false,
      profilePicture: avatar,
      city: loc.city,
      address: `${loc.address}, ReSellBD Corporate HQ`,
      postalCode: loc.postalCode,
      country: 'Bangladesh',
      gender: i % 2 === 0 ? 'male' : 'female',
      bio: `Official ReSellBD Administrator overseeing ${dept.name}. Ensuring marketplace integrity and user security.`,
      facebook: 'https://facebook.com/resellbd.official',
      website: 'https://resellbd.com',
      createdAt: new Date(Date.now() - (365 * 86400000) + (i * 86400000 * 5)),
      updatedAt: new Date(Date.now() - (i * 86400000))
    });
  }

  // 2. Generate 95 Regular Users
  for (let i = 0; i < 95; i++) {
    const fn = FIRST_NAMES[i % FIRST_NAMES.length];
    const ln = LAST_NAMES[(i * 2 + 1) % LAST_NAMES.length];
    const fullName = `${fn} ${ln}`;
    const email = `${fn.toLowerCase()}.${ln.toLowerCase()}.${i + 101}@gmail.com`;
    const loc = CITIES_DATA[i % CITIES_DATA.length];
    const avatar = avatars[(i + 3) % avatars.length];
    const bio = BIOS[i % BIOS.length];
    const gender = i % 3 === 0 ? 'female' : 'male';
    // Let 2 users be banned for realism, rest active
    const status = (i === 13 || i === 47) ? 'banned' : 'active';

    users.push({
      name: fullName,
      identifier: email,
      password: hashedPassword,
      role: 'user',
      status: status,
      isDeleted: false,
      profilePicture: avatar,
      city: loc.city,
      address: loc.address,
      postalCode: loc.postalCode,
      country: 'Bangladesh',
      gender: gender,
      bio: bio,
      facebook: `https://facebook.com/${fn.toLowerCase()}.${ln.toLowerCase()}`,
      website: `https://${fn.toLowerCase()}-portfolio.vercel.app`,
      createdAt: new Date(Date.now() - (180 * 86400000) + (i * 86400000 * 1.5)),
      updatedAt: new Date(Date.now() - (i * 86400000 * 0.4))
    });
  }

  return users;
}

module.exports = {
  generate110Users
};

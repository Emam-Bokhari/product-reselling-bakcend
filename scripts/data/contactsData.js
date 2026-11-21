// 105 realistic contact messages from buyers, sellers, and visitors
const FIRST_NAMES = [
  'Tanvir', 'Farhana', 'Mehedi', 'Sabrina', 'Abrar', 'Sumaiya', 'Sabbir',
  'Tasmia', 'Sakib', 'Tahmid', 'Mahir', 'Sadia', 'Naimur', 'Anika',
  'Shakil', 'Nusrat', 'Rashed', 'Jannat', 'Shahriar', 'Tasnim', 'Imtiaz',
  'Afsana', 'Ashik', 'Fatema', 'Maruf', 'Fahmida', 'Kamrul', 'Sharmin'
];

const LAST_NAMES = [
  'Hasan', 'Islam', 'Ahmed', 'Rahman', 'Sultana', 'Akter', 'Hossain',
  'Chowdhury', 'Khan', 'Sikder', 'Talukder', 'Bhuiyan', 'Haque', 'Sarkar',
  'Kabir', 'Biswas', 'Munshi', 'Prodhan', 'Dewan', 'Alom'
];

const CONTACT_TEMPLATES = [
  {
    services: ['Product Listing Assistance'],
    message: 'Hello Support, I am trying to list my pre-owned Apple MacBook Pro M2, but I have multiple high-resolution photos and need guidance on optimizing image dimensions. Can your team assist me with feature listing options?'
  },
  {
    services: ['Payment Verification'],
    message: 'Greetings! I just completed an online payment via SSLCommerz for an electronics purchase. The bank deducted the funds and I received a bank SMS, but the status was briefly pending. Kindly verify the transaction clearance on your portal.'
  },
  {
    services: ['Buyer Protection Inquiry'],
    message: 'Assalamu Alaikum. What are the exact steps and timeline if a received item differs significantly from the seller description? I am planning to purchase an expensive DSLR camera through ReSellBD and want to know more about escrow protection.'
  },
  {
    services: ['Seller Verification'],
    message: 'Hi ReSellBD Team, I run an authentic secondhand gadget refurbishment shop in Elephant Road, Dhaka. How can I apply for an Official Verified Seller badge to build trust with marketplace buyers?'
  },
  {
    services: ['General Inquiry'],
    message: 'Hello, do you offer scheduled pickup or doorstep delivery assistance for bulky items like 6-seater dining sets and king-size beds in Dhaka city? Looking forward to your response.'
  },
  {
    services: ['Technical Support'],
    message: 'Hi, I updated my user profile picture and contact details from my dashboard, but the public seller profile page was taking a moment to refresh. Is there any cache delay? Thanks for checking.'
  },
  {
    services: ['Product Listing Assistance'],
    message: 'Assalamu Alaikum, I would like to list three vintage motorcycles from my personal collection. Is there a dedicated category for classic antique vehicles, or should I list under standard Vehicles?'
  },
  {
    services: ['Payment Verification'],
    message: 'Hello, can you confirm whether credit card EMI options are available for high-value transactions like laptops or property booking deposits on ReSellBD?'
  }
];

function generate105Contacts() {
  const contacts = [];
  for (let i = 0; i < 105; i++) {
    const fn = FIRST_NAMES[i % FIRST_NAMES.length];
    const ln = LAST_NAMES[(i * 3 + 2) % LAST_NAMES.length];
    const tmpl = CONTACT_TEMPLATES[i % CONTACT_TEMPLATES.length];
    const email = `${fn.toLowerCase()}.${ln.toLowerCase()}.${i + 101}@gmail.com`;
    const phone = `017${String(10000000 + i * 83451).slice(0, 8)}`;

    contacts.push({
      firstName: fn,
      lastName: ln,
      email: email,
      phone: phone,
      message: `${tmpl.message} (Inquiry Ref #${i + 1001})`,
      services: tmpl.services,
      isDeleted: false,
      createdAt: new Date(Date.now() - (i * 86400000 * 0.6)),
      updatedAt: new Date(Date.now() - (i * 86400000 * 0.2))
    });
  }
  return contacts;
}

module.exports = {
  generate105Contacts
};

// 105 realistic newsletter subscriber email addresses
function generate105Newsletters() {
  const domains = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'icloud.com',
    'buet.ac.bd',
    'du.ac.bd',
    'northsouth.edu',
    'bracu.ac.bd',
    'iut-dhaka.edu'
  ];

  const prefixes = [
    'tanzim.tech', 'arafat.developer', 'sadia.ahmed', 'nahid.dev', 'samira.art',
    'zubair.cloud', 'nabil.code', 'anika.des', 'kazi.finance', 'sabbir.gamer',
    'tasnim.writer', 'faisal.gear', 'maliha.design', 'rashed.ai', 'mehnaz.doc',
    'shakil.sys', 'sumon.photog', 'fariha.law', 'tamim.cricket', 'sakib.invest',
    'nusrat.travel', 'hasan.auto', 'tariq.iot', 'lubna.craft', 'adnan.eng',
    'farhan.mobile', 'rumana.food', 'imran.linux', 'afroza.style', 'kamrul.build',
    'shafiq.audio', 'monira.hr', 'tanvir.trade', 'asif.bike', 'shirin.home',
    'zahed.swift', 'reza.crypto', 'noman.sound', 'mithu.birds', 'nadim.vlog'
  ];

  const newsletters = [];
  const seen = new Set();

  for (let i = 0; i < 105; i++) {
    const prefix = prefixes[i % prefixes.length];
    const domain = domains[i % domains.length];
    const email = `${prefix}.${i + 1}@${domain}`;
    if (!seen.has(email)) {
      seen.add(email);
      newsletters.push({
        email: email,
        createdAt: new Date(Date.now() - (i * 86400000 * 0.5)),
        updatedAt: new Date(Date.now() - (i * 86400000 * 0.2))
      });
    }
  }

  return newsletters;
}

module.exports = {
  generate105Newsletters
};

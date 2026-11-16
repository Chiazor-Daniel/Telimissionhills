// Every fact on the site lives here. Edit this file to change names,
// numbers, cases or practice areas; the pages read from it.

export const SITE_URL = 'https://telimissionhills.com';

export const firm = {
  name: 'TelimissionHills & Co.',
  shortName: 'TelimissionHills',
  summary:
    'A Port Harcourt law firm of three partners handling property, family, commercial and maritime matters, from first advice through to judgment.',
  address: {
    street: 'No. 197 Odili Road, opposite Parkland Estate',
    area: 'Trans-Amadi',
    city: 'Port Harcourt',
    state: 'Rivers State',
    country: 'Nigeria',
    countryCode: 'NG',
  },
  phones: [
    { display: '0803 869 4203', tel: '+2348038694203' },
    { display: '0703 671 9282', tel: '+2347036719282' },
    { display: '0806 437 1940', tel: '+2348064371940' },
  ],
  email: 'telimissionhills.co@gmail.com',
  mapQuery: '197 Odili Road, Trans-Amadi, Port Harcourt, Rivers State, Nigeria',
};

export const fullAddress = `${firm.address.street}, ${firm.address.area}, ${firm.address.city}, ${firm.address.state}`;

export const mission = {
  aim: 'To offer excellent legal services while upholding high ethical standards.',
  commitment: 'To deliver practical legal solutions promptly, professionally and with expertise.',
  vision: 'To compete with, and in time lead, reputable law firms locally and internationally.',
};

export const partners = [
  {
    slug: 'nwoke-godwin-okezie',
    name: 'Nwoke Godwin Okezie, Esq.',
    role: 'Lead Partner',
    image: '/nwoke-godwin-okezie.jpg',
    credentials: ['LL.B, Rivers State University, 2003', 'LL.M, Rivers State University, 2024'],
  },
  {
    slug: 'noel-eloho-ighota',
    name: 'Noel Eloho Ighota, Esq.',
    role: 'Partner',
    image: '/noel-eloho-ighota.jpg',
    credentials: ['Called to the Bar, 2010', 'LL.B (Hons), Delta State University, Abraka, 2008', 'DIL, Delta State University, Abraka, 2004'],
  },
  {
    slug: 'regina-oreighe-ovoro',
    name: 'Regina Oreighe Ovoro, Esq.',
    role: 'Partner',
    image: '/regina-oreighe-ovoro.jpg',
    credentials: ['Called to the Bar, 2014', 'LL.B (Hons), Madonna University'],
  },
];

export const practiceAreas = [
  {
    slug: 'property',
    title: 'Property and land',
    text: 'Title disputes, trespass and recovery of possession, and advice before you buy. We also act as property consultants on purchases, leases and conveyancing.',
  },
  {
    slug: 'family',
    title: 'Family and matrimonial',
    text: 'Divorce, custody and access, maintenance, and the settlement of property acquired during a marriage.',
  },
  {
    slug: 'inheritance',
    title: 'Inheritance and customary law',
    text: 'Disputes over family property and letters of administration, including the inheritance rights of women under native law and custom.',
  },
  {
    slug: 'commercial',
    title: 'Commercial, corporate and debt recovery',
    text: 'Company practice and corporate advisory, commercial and labour litigation, and recovery of outstanding debts through the courts.',
  },
  {
    slug: 'adr',
    title: 'Arbitration and mediation',
    text: 'Resolving disputes outside the courtroom when that serves the client better, through arbitration, mediation and negotiated settlement.',
  },
  {
    slug: 'maritime',
    title: 'Maritime',
    text: 'Disputes and regulatory questions for shipping, logistics and marine service companies.',
  },
  {
    slug: 'rights',
    title: 'Fundamental rights and regulatory',
    text: 'Actions against public bodies and utilities, from fundamental rights suits to enforcing regulator rulings such as those of NERC.',
  },
  {
    slug: 'election',
    title: 'Election matters',
    text: 'Advice and representation on election petitions and campaign regulation.',
  },
  {
    slug: 'ip',
    title: 'Intellectual property',
    text: 'Protecting innovations and creative work.',
  },
  {
    slug: 'drafting',
    title: 'Drafting, research and opinions',
    text: 'MOUs, leases, contracts, agreements and conveyances drafted and reviewed, and researched legal opinions on simple and complex questions.',
  },
];

// status: 'won' (judgment or right established), 'settled', 'pending'
export const cases = [
  {
    id: 8, claimant: 'Mrs. Joy Abasu Umoh', respondent: 'Dr. Abasu Umoh', area: 'Matrimonial and property',
    summary: 'We acted for the petitioner, who sought dissolution of the marriage and ₦30 million as her contribution to property acquired during it.',
    outcome: 'Judgment for our client', status: 'won', featured: true,
  },
  {
    id: 3, claimant: 'Ms Florence Nnenna Cookey-Gam', respondent: 'Abigail Power Ogichen & 2 Ors', area: 'Property',
    summary: 'Our client had been illegally dispossessed of her property. We intervened, restored her title and obtained a voluntary settlement.',
    outcome: 'Title restored, consent judgment entered', status: 'settled', featured: true,
  },
  {
    id: 13, claimant: 'Merit Orlu-Nene & 4 Ors', respondent: 'Christian Orlu-Nene & 1 Or', area: 'Customary and inheritance',
    summary: 'The claimants, as women, contended for their right to inherit family property under Ikwerre native law and custom.',
    outcome: 'Inheritance rights established', status: 'won', featured: true,
  },
  {
    id: 10, claimant: 'Joy Okwuchi Amara', respondent: 'George Ogbaji Amara', area: 'Matrimonial',
    summary: 'We represented the petitioner and won judgment. The respondent applied for a review, which we opposed and the court dismissed.',
    outcome: 'Judgment secured and upheld', status: 'won', featured: true,
  },
  {
    id: 4, claimant: 'Dr. Patrick Innocent', respondent: 'PHED', area: 'Utility and regulatory',
    summary: 'Our client was served unsubstantiated bills and disconnected. We petitioned NERC, which ruled in his favour, then sued PHED for failing to comply.',
    outcome: 'NERC ruled for our client; suit pending at the Rivers State High Court', status: 'pending', featured: true,
  },
  {
    id: 7, claimant: 'Rev. Peter Nganje', respondent: 'Mrs. Peter Nganje', area: 'Family and custody',
    summary: 'The petitioner sought sole custody with no access for our client. We cross-petitioned for custody, maintenance and property settlement, and the court encouraged settlement in the children’s interest.',
    outcome: 'Property settlement and custody terms agreed, consent judgment entered', status: 'settled',
  },
  {
    id: 9, claimant: 'Barr. Charles Nwogu', respondent: 'Mr. Uchenna Nwogu', area: 'Property and inheritance',
    summary: 'The claimant called our client’s property family property and sought letters of administration. We counterclaimed for title.',
    outcome: 'Client’s title to the property upheld', status: 'won',
  },
  {
    id: 11, claimant: 'Dr. Chidiebere Okeke', respondent: 'Mrs. Onyeka Okeke', area: 'Family and custody',
    summary: 'The applicant sought unrestricted access to the children. We opposed the application for our client.',
    outcome: 'Judgment for our client', status: 'won',
  },
  {
    id: 12, claimant: 'Ngus Ugochukwu Ojiaku', respondent: 'Commissioner of Police & 4 Ors', area: 'Fundamental rights',
    summary: 'A fundamental rights action over violations of our client’s civil liberties.',
    outcome: 'Settled on terms acceptable to our client', status: 'settled',
  },
  {
    id: 1, claimant: 'Gen. T.Y. Danjuma (Rtd)', respondent: 'Pastor Paul Rika & HOREMOW', area: 'Defamation',
    summary: 'A ₦1 billion defamation claim against our clients. We filed a defence with a preliminary objection to the Lagos High Court’s jurisdiction, and the matter was referred to mediation.',
    outcome: 'In mediation', status: 'pending',
  },
  {
    id: 2, claimant: 'King George Eppie', respondent: 'Dr. Chujor S.N. Chujor', area: 'Property and land',
    summary: 'Our client claims for trespass on his land at the Rivers State High Court, Inchia Division.',
    outcome: 'Pending at the Rivers State High Court', status: 'pending',
  },
  {
    id: 5, claimant: 'Chijioke Jerry Dike Ogbulubi', respondent: 'Mr. Promise Nwankwo & Persons Unknown', area: 'Property and trespass',
    summary: 'Land our client bought from Mr. Nwankwo was trespassed upon. We sued the vendor and the trespassers, and the court has ordered a visit to the site before judgment.',
    outcome: 'Pending at the Rivers State High Court', status: 'pending',
  },
  {
    id: 6, claimant: 'Mrs. Victoria Ngozi Alumni', respondent: 'Fred Owoko', area: 'Property and church title',
    summary: 'We took over the defence of a church’s title to land conveyed by Mr. Owoko, restored the case to the cause list and challenged a fraudulent judgment. The court awarded punitive costs and ordered an accelerated hearing.',
    outcome: 'Pending, application to set aside the judgment', status: 'pending',
  },
];

export const statusLabel = { won: 'Judgment', settled: 'Settled', pending: 'Pending' };

export const testimonials = [
  {
    quote: 'TelimissionHills gave us sound legal counsel during our company’s partnership with N.M.T USA. Their grasp of corporate law was invaluable.',
    name: 'Francis Anene',
    org: 'BH Logistics',
  },
  {
    quote: 'In a complex maritime dispute, TelimissionHills handled the case with skill and commitment, and we got the outcome we wanted.',
    name: 'Aribibia Billy',
    org: 'ARI Marine Services Ltd.',
  },
];

export const PRICING_TYPE = {
    PAY_AS_YOU_GO :'Pay As You Go',
    MONTHLY_SUBSCRIBTION :'Monthly Subscription'
}

export const VENDORS = {
    veriphy:'veriphy',
    trustid:'trustid',
    yoti:'yoti',
    creditSage:'CreditSafe'
}

export const TRUSTID_SERVICES = [
    {Type:"TrustID",ServiceCode: "DrivingLicense", Name: "Driving License", Title: "Driving License Check", Short: ""},
    {Type:"TrustID",ServiceCode: "IDCard", Name: "ID Card", Title: "ID Card Check", Short: ""},
    {Type:"TrustID",ServiceCode: "Passport", Name: "Passport", Title: "Passport Check", Short: ""}
];


export const VERIPHY_APIS = [
{Type:"IDAML",ServiceCode: "IDAMLNOCRED", Name: "AML Veriphy", Title: "Anti-Money Laundering Check", Short: "Comprehensive compliant AML checks for UK resident…, driving licences and more. Includes PEP checks.",
    Desc:[
        'JMLSG & 5th Directive compliant UK address and ID verification, with integral searches of full & edited electoral registers (current and historic), recent credit file activity data, births index, telephone directory, mortality, departure, sanctions (HMT, EU, and OFAC) and PEP (UK domestic and global), and optional checking of passport, GB driving licence and National Insurance numbers. Suitable for AML and other ID checks on any individual of any nationality who is currently resident in the UK.',
        'Gender, first name, surname, date of birth and current address are required. If you are entering a non-UK passport number, please include any < symbols.'
    ]
}
,{Type:"IDAML",ServiceCode: "CREDACTIVE", Name: "Credit Veriphy", Title: "Credit Screen", Short: "Screens UK Individuals for CCJs past and present, …putes/correction orders and Scottish equivalents.",
Desc:['This check screens UK residents for CCJs, bankruptcies, IVAs and Scottish equivalents. The score returned reflects the residency matches, and will be negative if adverse public credit data is present.']}
,{Type:"IDAML",ServiceCode: "IDAML", Name: "AML/Credit Veriphy", Title: "Anti-Money Laundering & Credit Screen", Short: "Combined AML check and credit screen for UK residents.",
Desc:[
    'JMLSG & 5th Directive compliant UK address and ID verification, with integral searches of full & edited electoral registers (current and historic), recent credit file activity data, births index, telephone directory, mortality, departure, sanctions (HMT, EU, and OFAC) and PEP (UK domestic and global), and optional checking of passport, GB driving licence and National Insurance numbers, combined with screening for CCJs, bankruptcies, IVAs and Scottish equivalents.'
]}
,{Type:"IDAML",ServiceCode: "INTID", Name: "International ID Veriphy", Title: "International ID Check", Short: "Checks anyone living overseas (including UK nation…ability to check passports, EU ID cards and more.",
Desc:[
    'This check may be run on any individual when address is not relevant or if the person does not reside in the UK. It checks the PEP and Sanctions lists (HMT, EU, CIA and OFAC), and allows document validation. For AML purposes the overseas address should be verified by documentary or other means.',
    'Gender, first name, surname and date of birth are required. If you are entering a non-UK passport number, please include any < symbols.',
    'You may use this check to validate any machine-readable passport (including Convention Travel Documents), EU-compliant ID cards, and biometric UK Residence Permits.'
]}
,{Type:"IDAML",ServiceCode: "HR", Name: "HR Veriphy", Title: "HR Screen", Short: "The Veriphy HR check is a combined AML check and c…gether with bank account and directorship checks.",
Desc:[
    'JMLSG & 5th Directive compliant UK address and ID verification, with integral searches of full & edited electoral registers (current and historic), recent credit file activity data, births index, telephone directory, mortality, departure, sanctions (HMT, EU, and OFAC) and PEP (UK domestic and global), and optional checking of passport, GB driving licence and National Insurance numbers.',
    'Screening for CCJs, bankruptcies, IVAs and Scottish equivalents.',
    'Validation of UK bank account details.',
    'Check for current UK directorships.'
]}
,{Type:"IDAML",ServiceCode: "DIRSEARCH", Name: "Director Veriphy", Title: "Director Search", Short: "Looks for current UK directorships held by an individual.",Desc:[]}
,{Type:"IDAML",ServiceCode: "ROUTE2", Name: "ID Veriphy", Title: "Identity Check", Short: "Identity and address validation, suitable for DBS Route 2",Desc:['An external ID check in accordance with the stipulations of the DBS.']}
,{Type:"IDAML",ServiceCode: "360", Name: "ID Veriphy", Title: "Veriphy 360", Short: "Veriphy 360 Check - all our checks on individuals … in one clear, powerful and comprehensive report.",
Desc:[
    'All the elements of the Combined AML Check and Credit Screen, with additional Directorship Check and UK bank account validation, together with screening of UK and EU visas, UK entry clearance documents and EU ID cards.'
]}
,{Type:"IDAML",ServiceCode: "VISA", Name: "Visa Veriphy", Title: "Travel Visa Check", Short: "Screens UK & European Visas, and UK Entry Clearance documents",
Desc:[
    'Our Travel Visa Check may be used to screen UK and EU Travel Visas and UK Entry Clearance documents in order to assess an individual\'s right to reside in the UK.'
]}
,{Type:"IDAML",ServiceCode: "PEPSANCTION", Name: "AML Veriphy", Title: "PEP & Sanctions", Short: "",Desc:[
    'A check against the sanctions lists (HMT, EU, OFAC) and the WorldCompliance PEP register (UK domestic and global).'
]}
,{Type:"IDAML",ServiceCode: "ER", Name: "AML Veriphy", Title: "Electoral Roll", Short: "ER Check",Desc:[]}

/*
,{Type:"Company",ServiceCode: "COMPUK", Name: "Company Veriphy", Title: "UK Company Check", Short: "Comprehensive reports on UK companies & LLPs: iden…reholdings, group structure, financials and more.",Desc:[]}
,{Type:"Company",ServiceCode: "COMPINT", Name: "Company Veriphy", Title: "International Company Check", Short: "Comprehensive reports on overseas companies.",Desc:[]}

,{Type:"Lawyer",ServiceCode: "LAWYERCHECK", Name: "Lawyer Veriphy", Title: "Lawyer Check", Short: "Veriphy Lawyer Check will identify if there is a r…e associated with a vendor conveyancer's account.",Desc:[]}
*/
]

export const YOTI_SERVICES = [
    {Type:"Yoti",ServiceCode: "Identity verification", Name: "Identity verification", Title: "Identity verification check", Short: ""}
];


export const CreditSafe_SERVICES = [
    {Type:"Yoti",ServiceCode: "Person Search", Name: "Person Search", Title: "Search Person Record", Short: ""}
];


export const Countries = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas, The","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands, The","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo, Democratic Republic of the","Congo, Republic of the","Cook Islands","Costa Rica","Côte d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","Gabon","Gambia, The","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","None","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","St. Maarten","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","United States Virgin Islands","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];
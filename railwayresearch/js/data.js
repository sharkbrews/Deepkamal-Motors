// Indian Railways Market Research Data
// Sourced strictly from indian_railways_market_research.md (Research Date: 8 Oct 2026)
// NO invented numbers, officer names, or phone numbers.

window.RAILWAY_DATA = {
  meta: {
    title: "Indian Railways Hydraulic Equipment Market Intelligence",
    subtitle: "Strategic Market Entry & Procurement Guide for Hydraulic Seal-Kits & Spare-Parts Suppliers",
    purpose: "Help a hydraulic seal-kit and spare-parts business (JCB parts background) understand how Indian Railways is organised, where hydraulic jacks, pumps and related products are bought and used, and who to approach.",
    researchDate: "8 October 2026",
    footerDisclaimer: "Last updated 8 Oct 2026. Verify before acting. Desk research for planning purposes. Confirm all tender rules, vendor registration requirements, thresholds and officer details on official Indian Railways, GeM, IREPS, RDSO and MSME sources before making commitments.",
    tagsInfo: {
      src: "Taken from a web source checked during research (listed in Section 14)",
      know: "General domain knowledge, not re-verified. Confirm before relying on it for a business decision."
    }
  },

  stats: [
    {
      id: "zones",
      value: "18",
      label: "Zonal Railways",
      subtext: "As of 1 June 2026 (South Coast Railway commenced as 18th zone)",
      tag: "SRC",
      icon: "rail-zone"
    },
    {
      id: "divisions",
      value: "about 70",
      label: "Operating Divisions",
      subtext: "Where trains are run and maintained; zones are where management sits",
      tag: "SRC",
      icon: "division"
    },
    {
      id: "depots",
      value: "250+",
      label: "Stores Depots",
      subtext: "Decentralised supply points serving the network (one source cites 259)",
      tag: "SRC",
      icon: "warehouse"
    },
    {
      id: "network",
      value: "69,439",
      unit: "route km",
      label: "Network Scale",
      subtext: "As of 31 Mar 2025; Northern Railway is largest zone (7,477 km)",
      tag: "SRC",
      icon: "track"
    }
  ],

  executiveTakeaways: [
    {
      title: "18 Zones & ~70 Divisions",
      desc: "South Coast Railway (HQ Visakhapatnam) began working 1 June 2026 as the 18th zone. Divisions are where trains are run and maintained; zones manage policy and major procurement.",
      tag: "SRC"
    },
    {
      title: "Fully Online Tendering",
      desc: "Procurement is handled via IREPS (ireps.gov.in) and GeM (gem.gov.in). Ministry has directed railway-specific purchases to move progressively to GeM.",
      tag: "SRC"
    },
    {
      title: "Controlled Items Need RDSO Approval",
      desc: "RDSO (Lucknow) controls vendor lists for critical items. New suppliers enter as 'developmental vendors' before gaining approved status.",
      tag: "SRC"
    },
    {
      title: "Prime Fit for Seal Kits & Jack Spares",
      desc: "Accident Relief Trains (re-railing jacks, power packs), coach/wagon/loco workshop lifting equipment, track machines (tamping machines, cranes) need frequent seal kit overhauls.",
      tag: "KNOW"
    },
    {
      title: "Decentralised Buyer Model",
      desc: "CAG reports confirm procurement is decentralised. There is no single national buyer: suppliers sell zone-by-zone and PU-by-PU.",
      tag: "SRC"
    }
  ],

  confusingFacts: [
    {
      title: "Zone HQ ≠ State Capital",
      desc: "East Central HQ is Hajipur (not Patna), West Central is Jabalpur (not Bhopal), South East Central is Bilaspur (not Raipur), and South Western is Hubballi (not Bengaluru).",
      tag: "SRC"
    },
    {
      title: "Duplicate Division Names",
      desc: "Nagpur belongs to both Central Railway and South East Central Railway. Lucknow belongs to both Northern Railway and North Eastern Railway.",
      tag: "SRC"
    },
    {
      title: "Konkan Railway is NOT a Zone",
      desc: "Konkan Railway is a separate public sector corporation (KRCL), not an Indian Railways zone. Treating it as a zone causes incorrect counts (19).",
      tag: "SRC"
    },
    {
      title: "South Coast Railway (18th Zone)",
      desc: "Operationalised 1 June 2026 from SCR and ECoR. Waltair division was split: Visakhapatnam went to SCoR, while new Rayagada division went to East Coast Railway.",
      tag: "SRC"
    },
    {
      title: "Why Counts Vary Online",
      desc: "Online sources cite 17, 18 or 19 zones and 68 to 74 divisions due to outdated references or mistakenly counting Konkan Railway. Official count is 18 zones and ~70 divisions.",
      tag: "SRC"
    }
  ],

  zones: [
    {
      id: 1,
      name: "Southern Railway",
      code: "SR",
      hq: "Chennai",
      formed: "14 Apr 1951",
      year: 1951,
      divCount: 6,
      divisions: ["Chennai", "Madurai", "Palakkad", "Salem", "Tiruchchirappalli", "Thiruvananthapuram"],
      lat: 13.08,
      lng: 80.27,
      website: "sr.indianrailways.gov.in",
      workshops: "Perambur, Podanur, Golden Rock",
      tag: "SRC"
    },
    {
      id: 2,
      name: "Central Railway",
      code: "CR",
      hq: "Mumbai (CSMT)",
      formed: "5 Nov 1951",
      year: 1951,
      divCount: 5,
      divisions: ["Mumbai", "Bhusawal", "Nagpur", "Pune", "Solapur"],
      lat: 18.94,
      lng: 72.84,
      website: "cr.indianrailways.gov.in",
      workshops: "Matunga, Parel, Bhusawal",
      tag: "SRC"
    },
    {
      id: 3,
      name: "Western Railway",
      code: "WR",
      hq: "Mumbai (Churchgate)",
      formed: "5 Nov 1951",
      year: 1951,
      divCount: 6,
      divisions: ["Mumbai Central", "Ahmedabad", "Bhavnagar", "Rajkot", "Ratlam", "Vadodara"],
      lat: 18.93,
      lng: 72.82,
      website: "wr.indianrailways.gov.in",
      workshops: "Lower Parel, Dahod, Pratapnagar",
      tag: "SRC",
      notes: "Issued 50T hydraulic jack tender with traversing base (EMD ₹4.6 lakh, June 2026)."
    },
    {
      id: 4,
      name: "Eastern Railway",
      code: "ER",
      hq: "Kolkata",
      formed: "14 Apr 1952",
      year: 1952,
      divCount: 4,
      divisions: ["Asansol", "Howrah", "Malda", "Sealdah"],
      lat: 22.57,
      lng: 88.35,
      website: "er.indianrailways.gov.in",
      workshops: "Jamalpur, Liluah, Kanchrapara",
      tag: "SRC"
    },
    {
      id: 5,
      name: "North Eastern Railway",
      code: "NER",
      hq: "Gorakhpur",
      formed: "14 Apr 1952",
      year: 1952,
      divCount: 3,
      divisions: ["Izzatnagar", "Lucknow", "Varanasi"],
      lat: 26.76,
      lng: 83.37,
      website: "ner.indianrailways.gov.in",
      workshops: "Gorakhpur, Izzatnagar",
      tag: "SRC"
    },
    {
      id: 6,
      name: "Northern Railway",
      code: "NR",
      hq: "New Delhi",
      formed: "1952",
      year: 1952,
      divCount: 6,
      divisions: ["Ambala", "Delhi", "Ferozpur", "Lucknow", "Moradabad", "Jammu (added Jan 2025)"],
      lat: 28.64,
      lng: 77.22,
      website: "nr.indianrailways.gov.in",
      workshops: "Jagadhri, Charbagh and Alambagh, Amritsar",
      tag: "SRC",
      notes: "Largest zone by route length: 7,477 route km. Active 5T bottle jack tender at Ludhiana with 30-mo warranty."
    },
    {
      id: 7,
      name: "South Eastern Railway",
      code: "SER",
      hq: "Kolkata (Garden Reach)",
      formed: "1 Aug 1955",
      year: 1955,
      divCount: 4,
      divisions: ["Adra", "Chakradharpur", "Kharagpur", "Ranchi"],
      lat: 22.54,
      lng: 88.30,
      website: "ser.indianrailways.gov.in",
      workshops: "Kharagpur",
      tag: "SRC"
    },
    {
      id: 8,
      name: "Northeast Frontier Railway",
      code: "NFR",
      hq: "Maligaon, Guwahati",
      formed: "15 Jan 1958",
      year: 1958,
      divCount: 5,
      divisions: ["Alipurduar", "Katihar", "Lumding", "Rangiya", "Tinsukia"],
      lat: 26.15,
      lng: 91.69,
      website: "nfr.indianrailways.gov.in",
      workshops: "New Bongaigaon, Dibrugarh",
      tag: "SRC"
    },
    {
      id: 9,
      name: "South Central Railway",
      code: "SCR",
      hq: "Secunderabad",
      formed: "2 Oct 1966",
      year: 1966,
      divCount: 3,
      divisions: ["Secunderabad", "Hyderabad", "Nanded"],
      lat: 17.44,
      lng: 78.50,
      website: "scr.indianrailways.gov.in",
      workshops: "Lallaguda",
      tag: "SRC",
      notes: "Was 6 divisions until 31 May 2026 before SCoR reorganisation."
    },
    {
      id: 10,
      name: "East Central Railway",
      code: "ECR",
      hq: "Hajipur",
      formed: "1 Oct 2002",
      year: 2002,
      divCount: 5,
      divisions: ["Danapur", "Dhanbad", "Pt. Deen Dayal Upadhyaya (DDU)", "Samastipur", "Sonpur"],
      lat: 25.69,
      lng: 85.21,
      website: "ecr.indianrailways.gov.in",
      workshops: "Samastipur, Harnaut",
      tag: "SRC"
    },
    {
      id: 11,
      name: "North Western Railway",
      code: "NWR",
      hq: "Jaipur",
      formed: "1 Oct 2002",
      year: 2002,
      divCount: 4,
      divisions: ["Ajmer", "Bikaner", "Jaipur", "Jodhpur"],
      lat: 26.91,
      lng: 75.79,
      website: "nwr.indianrailways.gov.in",
      workshops: "Ajmer, Jodhpur",
      tag: "SRC"
    },
    {
      id: 12,
      name: "East Coast Railway",
      code: "ECoR",
      hq: "Bhubaneswar",
      formed: "1 Apr 2003",
      year: 2003,
      divCount: 3,
      divisions: ["Khurda Road", "Sambalpur", "Rayagada (new, 1 Jun 2026)"],
      lat: 20.27,
      lng: 85.84,
      website: "eastcoastrail.indianrailways.gov.in",
      workshops: "Mancheswar",
      tag: "SRC",
      notes: "Rayagada division created 1 Jun 2026 from Waltair division split."
    },
    {
      id: 13,
      name: "North Central Railway",
      code: "NCR",
      hq: "Prayagraj",
      formed: "1 Apr 2003",
      year: 2003,
      divCount: 3,
      divisions: ["Prayagraj", "Agra", "Jhansi"],
      lat: 25.43,
      lng: 81.84,
      website: "ncr.indianrailways.gov.in",
      workshops: "Jhansi",
      tag: "SRC"
    },
    {
      id: 14,
      name: "South East Central Railway",
      code: "SECR",
      hq: "Bilaspur",
      formed: "1 Apr 2003",
      year: 2003,
      divCount: 3,
      divisions: ["Bilaspur", "Nagpur", "Raipur"],
      lat: 22.08,
      lng: 82.15,
      website: "secr.indianrailways.gov.in",
      workshops: "Raipur",
      tag: "SRC"
    },
    {
      id: 15,
      name: "South Western Railway",
      code: "SWR",
      hq: "Hubballi",
      formed: "1 Apr 2003",
      year: 2003,
      divCount: 3,
      divisions: ["Bengaluru", "Hubballi", "Mysuru"],
      lat: 15.36,
      lng: 75.12,
      website: "swr.indianrailways.gov.in",
      workshops: "Hubballi, Mysuru",
      tag: "SRC",
      notes: "Mysuru division innovated synchronised ART telescopic lifting + displacement jack controls."
    },
    {
      id: 16,
      name: "West Central Railway",
      code: "WCR",
      hq: "Jabalpur",
      formed: "1 Apr 2003",
      year: 2003,
      divCount: 3,
      divisions: ["Bhopal", "Jabalpur", "Kota"],
      lat: 23.18,
      lng: 79.95,
      website: "wcr.indianrailways.gov.in",
      workshops: "Kota, Bhopal, Jabalpur",
      tag: "SRC"
    },
    {
      id: 17,
      name: "Metro Railway, Kolkata",
      code: "MR",
      hq: "Kolkata",
      formed: "2010",
      year: 2010,
      divCount: 0,
      divisions: ["None (only zone with no operating divisions)"],
      lat: 22.57,
      lng: 88.35,
      website: "mtp.indianrailways.gov.in",
      workshops: "Noapara",
      tag: "SRC",
      notes: "Only Indian Railways zone with zero divisions."
    },
    {
      id: 18,
      name: "South Coast Railway",
      code: "SCoR",
      hq: "Visakhapatnam",
      formed: "1 Jun 2026",
      year: 2026,
      divCount: 4,
      divisions: ["Guntakal", "Guntur", "Vijayawada", "Visakhapatnam"],
      lat: 17.69,
      lng: 83.22,
      website: "scor.indianrailways.gov.in",
      workshops: "Tirupati, Rayanapadu",
      tag: "SRC",
      notes: "Newest 18th zone. Carved from SCR and ECoR. Commenced operations 1 June 2026."
    }
  ],

  productionUnits: [
    {
      name: "Chittaranjan Locomotive Works (CLW)",
      location: "Chittaranjan, West Bengal",
      makes: "Electric locomotives",
      website: "clw.indianrailways.gov.in",
      note: "CLW vendor notice (Aug 2020) confirmed shift of purchases to GeM",
      tag: "SRC"
    },
    {
      name: "Banaras Locomotive Works (BLW, formerly DLW)",
      location: "Varanasi, Uttar Pradesh",
      makes: "Locomotives",
      website: "blw.indianrailways.gov.in",
      tag: "KNOW"
    },
    {
      name: "Diesel Component Works (DCW) / Patiala Locomotive Works",
      location: "Patiala, Punjab",
      makes: "Loco components",
      website: "plw.indianrailways.gov.in",
      tag: "KNOW"
    },
    {
      name: "Integral Coach Factory (ICF)",
      location: "Perambur, Chennai",
      makes: "Coaches",
      website: "icf.indianrailways.gov.in",
      tag: "KNOW"
    },
    {
      name: "Rail Coach Factory (RCF)",
      location: "Kapurthala, Punjab",
      makes: "Coaches",
      website: "rcf.indianrailways.gov.in",
      tag: "KNOW"
    },
    {
      name: "Modern Coach Factory (MCF)",
      location: "Raebareli, Uttar Pradesh",
      makes: "Coaches",
      website: "mcf.indianrailways.gov.in",
      tag: "KNOW"
    },
    {
      name: "Rail Wheel Factory (RWF)",
      location: "Yelahanka, Bengaluru",
      makes: "Wheels and axles",
      website: "rwf.indianrailways.gov.in",
      tag: "KNOW"
    },
    {
      name: "Rail Wheel Plant (RWP)",
      location: "Bela, Bihar",
      makes: "Wheels and axles",
      website: "rwp.indianrailways.gov.in",
      tag: "KNOW"
    }
  ],

  orgHierarchy: [
    {
      id: "ministry",
      title: "Ministry of Railways",
      roleHeader: "Union Minister of Railways",
      level: "Apex Government Level",
      scope: "National policy, budget approvals, parliamentary oversight",
      buyerRole: "Does not buy equipment directly. Sets broad policy and ministerial directions.",
      tag: "SRC"
    },
    {
      id: "board",
      title: "Railway Board",
      roleHeader: "Chairman & CEO (Satish Kumar, extended to 31 Aug 2027) + Members",
      level: "Executive & Strategic Head",
      scope: "Procurement rules, technical standards, budget distribution, cadre management",
      buyerRole: "Not a direct buyer for small items, but policy, technical standards and procurement rules originate here. Member (Traction & Rolling Stock) oversees workshops, rolling stock, and materials. Stores Directorate sets vendor registration guidelines.",
      tag: "SRC",
      subEntities: [
        "Directorates: Stores, Mechanical Engg, Civil Engg, Electrical, S&T",
        "RDSO, Lucknow: Standards, vendor approval, restricted lists",
        "8 Production Units: Direct report to Board (CLW, BLW, ICF, RCF, etc.)",
        "PSUs: DFCCIL, IRCON, RITES, etc."
      ]
    },
    {
      id: "zone",
      title: "18 Zonal Railways",
      roleHeader: "General Manager (GM)",
      level: "Zonal Administration",
      scope: "High-value tenders, zonal workshops, regional vendor registration",
      buyerRole: "Primary tender issuer for large orders. PCMM (Principal Chief Materials Manager) office runs procurement for the entire zone. CWMs head major workshops. PHODs (PCME, PCEE, PCE) define technical specifications.",
      tag: "SRC",
      phods: [
        { code: "PCMM", name: "Principal Chief Materials Manager", function: "Stores, vendor registrations, high-value purchase tenders" },
        { code: "PCME", name: "Principal Chief Mechanical Engineer", function: "Workshops, coaches, wagons, ART/ARME equipment specs" },
        { code: "PCEE", name: "Principal Chief Electrical Engineer", function: "Electric locos, EMU sheds, electrical tooling" },
        { code: "PCE", name: "Principal Chief Engineer", function: "Civil engineering, track machines, track maintenance tools" }
      ]
    },
    {
      id: "division",
      title: "About 70 Divisions",
      roleHeader: "Divisional Railway Manager (DRM)",
      level: "Operational Backbone",
      scope: "Where trains run and day-to-day maintenance occurs (3 to 6 divisions per zone)",
      buyerRole: "Frequent issuer of small and medium tenders for maintenance, jacks, tools, and spare parts. Stores handled by Sr. DMM / DMM. Technical needs originated by Sr. DME (Carriage & Wagon / Loco sheds) and Sr. DEN (Track).",
      tag: "SRC",
      officers: [
        { code: "Sr. DMM / DMM", name: "Divisional Materials Manager", function: "Issues division-level tenders on GeM & IREPS" },
        { code: "Sr. DME", name: "Senior Divisional Mechanical Engineer", function: "Runs C&W depots, loco sheds, and ART re-railing setups" },
        { code: "Sr. DEN", name: "Senior Divisional Engineer", function: "Track maintenance, track jacks, and civil engineering" },
        { code: "Sr. DEE", name: "Senior Divisional Electrical Engineer", function: "Electric loco sheds and traction maintenance" }
      ]
    },
    {
      id: "depots",
      title: "Depots, Sheds & Workshops",
      roleHeader: "End Users & Technicians",
      level: "Field Execution Units",
      scope: "250+ stores depots, carriage & wagon depots, loco sheds, track depots, ART sidings",
      buyerRole: "Crucial influencers who raise indents, evaluate trial fits, perform overhauls, and test cylinder seals in real operations. They tell Sr. DMM/PCMM what is actually needed.",
      tag: "SRC"
    }
  ],

  hydraulicApplications: [
    {
      id: 1,
      name: "Accident Relief Trains (ART) & Medical Vans (ARME)",
      category: "Emergency & Re-railing",
      typicalItems: "Hydraulic re-railing equipment (HRE), telescopic lifting jacks (major and minor lift), re-railing bridges with rollers, power packs, hydraulic rescue devices (HRD), 25T pulling equipment",
      endUsers: "ART depots in divisions, Mechanical Department (Sr. DME)",
      productFit: "Very High",
      fitColor: "emerald",
      fitScore: 95,
      fitRationale: "Matches existing core business. Railways run large installed bases of heavy hydraulic lifting equipment needing periodic cylinder rebuilds, power pack repairs, and seal kits.",
      confidence: "SRC"
    },
    {
      id: 2,
      name: "Coach & Wagon Workshops / Depots",
      category: "Rolling Stock Maintenance",
      typicalItems: "Coach and wagon lifting jacks, underframe jacks, bogie lifting systems, hydraulic presses, hydraulic pullers",
      endUsers: "Chief Workshop Managers (CWM), Sr. DME (Carriage & Wagon)",
      productFit: "High",
      fitColor: "blue",
      fitScore: 85,
      fitRationale: "Continuous overhaul of coaches and freight wagons requires rugged hydraulic lifting gear and cylinder overhauls during POH (Periodical Overhaul).",
      confidence: "KNOW"
    },
    {
      id: 3,
      name: "Loco Sheds & Workshops",
      category: "Motive Power Maintenance",
      typicalItems: "Locomotive lifting jacks, hydraulic maintenance tools, test benches, wheel-press equipment",
      endUsers: "Sr. DME / Sr. DEE (Diesel or Electric loco shed)",
      productFit: "High",
      fitColor: "blue",
      fitScore: 80,
      fitRationale: "Locomotive sheds perform heavy lifting and component fitting requiring high-tonnage jacks, press cylinders, and hydraulic tools.",
      confidence: "KNOW"
    },
    {
      id: 4,
      name: "Track Maintenance",
      category: "Permanent Way & Civil",
      typicalItems: "Hydraulic track jacks (approx 10-ton class sold for railway use), rail tensors, rail pullers and cutters",
      endUsers: "Sr. DEN / Chief Track Engineer's units",
      productFit: "High, but spec-heavy",
      fitColor: "amber",
      fitScore: 78,
      fitRationale: "Track jacks undergo harsh outdoor conditions, ballast dust, and heavy use. High demand, but requires meeting RDSO specification tolerances.",
      confidence: "SRC for product class"
    },
    {
      id: 5,
      name: "Track Machines & Breakdown Cranes (Aftermarket)",
      category: "Heavy Machines (JCB-Parallel)",
      typicalItems: "Seal kits, cylinders, pumps, valves, hoses for tamping machines, ballast cleaners, breakdown cranes, road-rail vehicles",
      endUsers: "Track Machine depots, breakdown crane crews",
      productFit: "Very High (Strongest Fit)",
      fitColor: "emerald",
      fitScore: 98,
      fitRationale: "Strongest direct match for a seal-kit business with JCB background! Heavy hydraulic cylinders on tamping and ballast machines need regular seal replacements, pumps, and valves.",
      confidence: "KNOW"
    },
    {
      id: 6,
      name: "Production Units (PUs)",
      category: "Manufacturing & Assembly",
      typicalItems: "Hydraulic presses, jigs, assembly power packs, test equipment, MRO spares",
      endUsers: "PU Materials and Mechanical Departments (CLW, ICF, RCF, etc.)",
      productFit: "Medium-High",
      fitColor: "indigo",
      fitScore: 72,
      fitRationale: "Factory environment MRO. Useful for steady plant-level spares, hydraulic power units, and custom cylinder replacements.",
      confidence: "KNOW"
    },
    {
      id: 7,
      name: "Rolling Stock Components",
      category: "On-Vehicle Components",
      typicalItems: "Hydraulic dampers and buffers (vertical and yaw dampers, hydraulic buffers) and their specialized seals",
      endUsers: "Mainly rolling stock OEMs and approved vendors",
      productFit: "Low (Near Term)",
      fitColor: "slate",
      fitScore: 35,
      fitRationale: "Heavily restricted to RDSO-controlled sources and OEM supply chains. Not recommended for general immediate entry.",
      confidence: "KNOW"
    }
  ],

  realTenderExamples: [
    {
      title: "50-Ton Hydraulic Jack with Traversing Base",
      railway: "Western Railway Stores",
      type: "Open Tender, Two-Stage Bidding",
      details: "EMD ₹4,59,690. Closing 19 June 2026. (Derived tender value approx ₹2.30 crore calculated by aggregator from EMD).",
      significance: "Demonstrates high single-tender values and strong demand for traversing base lifting sets.",
      tag: "SRC"
    },
    {
      title: "5-Ton Hydraulic Bottle Jack",
      railway: "Northern Railway (Ludhiana)",
      type: "Tender with 30-Month Delivery Warranty",
      details: "Listed under Ludhiana depot. Strict warranty requirement of 30 months after delivery.",
      significance: "Shows need for quality assurance, traceability, and readiness to provide extended warranty backing.",
      tag: "SRC"
    },
    {
      title: "Synchronised Telescopic ART Lifting System",
      railway: "South Western Railway (Mysuru Division)",
      type: "Division Innovation / Operational Need",
      details: "Two telescopic lifting jacks plus displacement (traverse) jack operating off one synchronised control panel for re-railing coaches.",
      significance: "Proves buyers look for synchronised hydraulic systems, multi-cylinder control packs, and not just basic standalone jacks.",
      tag: "SRC"
    }
  ],

  procurementFlow: [
    {
      step: 1,
      title: "Register on Portals & Secure IDs",
      tag: "SRC",
      timeframe: "Weeks 1 - 4",
      actionItems: [
        "Register seller account on GeM (gem.gov.in) - free seller registration with reverse auction features",
        "Register vendor profile on IREPS (ireps.gov.in) - Indian Railways e-Procurement Portal",
        "Obtain Class 3 Digital Signature Certificate (DSC) for tender signing",
        "Verify GST registration, PAN, and Udyam MSME certificate",
        "Prepare ISO 9001 certification and manufacturer / dealer documentation"
      ],
      insight: "CLW vendor notice (Aug 2020) confirmed that railway-specific items are being systematically routed to GeM, while IREPS continues active tenders."
    },
    {
      step: 2,
      title: "Tender Tracking & Filter Setup",
      tag: "SRC",
      timeframe: "Weeks 2 - 8",
      actionItems: [
        "Set daily alerts on GeM and IREPS for keywords: 'hydraulic jack', 'bottle jack', 'telescopic jack', 'seal kit', 'O-ring kit', 'power pack', 'ART'",
        "Distinguish between Stock Purchases (repeat-use items like seals handled by Stores) vs Non-Stock Purchases (shed/workshop-specific local needs)",
        "Download technical specifications, drawing references, and delivery terms",
        "Monitor past bid results, awarded L1 rates, and participating competitors"
      ],
      insight: "Tender values are often deduced from EMD figures. MSEs are typically exempt from paying EMD."
    },
    {
      step: 3,
      title: "RDSO Approval Assessment",
      tag: "SRC",
      timeframe: "Months 2 - 6",
      actionItems: [
        "Check whether target item is RDSO-controlled (e.g. 57 items controlled by Materials & Chemical directorate)",
        "If Controlled: Apply to RDSO Lucknow for 'Developmental Vendor' status",
        "If Uncontrolled: Apply directly for local zonal registration with PCMM office and nearby divisions",
        "Where no approved vendor exists or only one vendor exists, developmental orders can be placed",
        "Alternative: Supply aftermarket seal kits as tier-2 vendor to track-machine OEMs and contractors"
      ],
      insight: "Developmental vendor status allows bidding on developmental quotas. Successful supplies lead to upgrade to full approved source."
    },
    {
      step: 4,
      title: "Bid Preparation & Policy Leverage",
      tag: "SRC",
      timeframe: "Ongoing Bidding",
      actionItems: [
        "Claim MSE benefits: EMD exemption, tender-fee waiver, and purchase preference share (PPP-MSE)",
        "Claim Make-in-India (PPP-MII) local content preference",
        "Ensure 100% technical compliance: rejections for deviation from specs are strict and frequent",
        "Include all test certificates, material test reports, and drawings in PDF bid bundle",
        "Account for L1 (lowest price) margin dynamics and working capital cycles"
      ],
      insight: "Detailed specifications mean technical compliance is evaluated first. Only technically compliant bids qualify for L1 price comparison."
    },
    {
      step: 5,
      title: "Supply, Inspection & Warranty",
      tag: "SRC",
      timeframe: "Execution",
      actionItems: [
        "Deliver to designated Stores Depot (250+ depots across India) or workshop",
        "Undergo pre-dispatch or consignee inspection by designated agency (e.g., RITES/RDSO/Consignee)",
        "Submit required test certificates and batch traceability documentation",
        "Support warranty obligations (up to 30 months observed in railway tenders)",
        "Prompt submission of bills online through IREPS / GeM for payment clearance"
      ],
      insight: "Satisfactory execution creates past supply records, unlocking higher eligibility thresholds in subsequent tenders."
    },
    {
      step: 6,
      title: "Zone-by-Zone Expansion",
      tag: "SRC",
      timeframe: "Months 6 - 24",
      actionItems: [
        "CAG report confirmed procurement is decentralised to GMs and PCMMs",
        "No single national buyer exists: replicate success from your home zone to adjacent zones",
        "Approach track machine depots and breakdown crane workshops in neighboring zones",
        "Consider local technical representative or tie-up near high-density workshop clusters"
      ],
      insight: "Having vendor registration and successful supply proof in one zone greatly improves credibility when registering in adjacent zones."
    }
  ],

  documentsChecklist: [
    { name: "Udyam (MSME) Registration Certificate", desc: "Mandatory for EMD exemption and tender fee waiver", tag: "KNOW" },
    { name: "GST Registration Certificate & PAN", desc: "Standard tax compliance credentials", tag: "KNOW" },
    { name: "Class 3 Digital Signature Certificate (DSC)", desc: "Required for logging into and signing bids on IREPS", tag: "SRC" },
    { name: "GeM Seller ID & Profile", desc: "Active seller registration on Government e-Marketplace", tag: "SRC" },
    { name: "ISO 9001 Quality Certificate", desc: "Standard quality benchmark demanded in technical evaluations", tag: "KNOW" },
    { name: "Test Certificates & Engineering Drawings", desc: "Proof of pressure ratings, material composition, and load ratings", tag: "KNOW" },
    { name: "Past Supply Orders / Performance Reports", desc: "Evidence of past commercial supply experience to establish credibility", tag: "KNOW" },
    { name: "Bank Solvency or Turnover Proof", desc: "Financial capability documents requested for medium/large tenders", tag: "KNOW" },
    { name: "OEM Authorisation (if reselling)", desc: "Formal manufacturer authorization letter if bidding as authorized distributor", tag: "KNOW" },
    { name: "Detailed Product Catalogues", desc: "Brochures showing tonnages, stroke, operating pressures, and seal profiles", tag: "KNOW" }
  ],

  roleContacts: [
    {
      id: "vendor_reg",
      goal: "Get registered as a vendor / Understand tender process",
      primaryRole: "PCMM / CMM (Materials Management) at Zonal HQ & Sr. DMM at Division",
      secondaryRole: "Controller of Stores (COS) office",
      level: "Zone HQ & Division",
      actionHint: "Start with the nearest Zone HQ PCMM vendor development cell or Divisional Materials Manager office.",
      portalPattern: "<zonecode>.indianrailways.gov.in (check Directory / Stores section)",
      tag: "SRC"
    },
    {
      id: "art_jacks",
      goal: "Understand technical need for hydraulic jacks / ART re-railing equipment",
      primaryRole: "Sr. DME (Carriage & Wagon) and ART in-charge at Division",
      secondaryRole: "PCME (Principal Chief Mechanical Engineer) at Zone HQ",
      level: "Division & Zone",
      actionHint: "Meet the ART in-charge or Sr. DME (C&W) to inspect current re-railing sets, cylinder stroke needs, and hydraulic power pack specs.",
      portalPattern: "<zonecode>.indianrailways.gov.in (Mechanical / ART)",
      tag: "SRC"
    },
    {
      id: "loco_tools",
      goal: "Supply loco shed tools, jacks, and test bench spares",
      primaryRole: "Sr. DME / Sr. DEE of the Loco Shed",
      secondaryRole: "PCEE (Principal Chief Electrical Engineer) at Zone HQ",
      level: "Loco Shed / Division",
      actionHint: "Visit diesel and electric locomotive sheds; understand cylinder maintenance cycles and hydraulic tool shortages.",
      portalPattern: "<zonecode>.indianrailways.gov.in (Locomotive Sheds)",
      tag: "SRC"
    },
    {
      id: "track_jacks",
      goal: "Supply track jacks, rail pullers, and track maintenance tools",
      primaryRole: "Sr. DEN (Senior Divisional Engineer / Track)",
      secondaryRole: "PCE (Principal Chief Engineer) at Zone HQ",
      level: "Civil / Track Division",
      actionHint: "Track engineers require 10T mechanical/hydraulic track jacks and rail tensioners meeting strict RDSO specifications.",
      portalPattern: "<zonecode>.indianrailways.gov.in (Engineering / Permanent Way)",
      tag: "SRC"
    },
    {
      id: "workshop_eq",
      goal: "Supply workshop equipment, hydraulic presses, and heavy tooling",
      primaryRole: "Chief Workshop Manager (CWM)",
      secondaryRole: "PCME at Zone HQ",
      level: "Workshop Cluster",
      actionHint: "Workshops (e.g. Matunga, Kharagpur, Jamalpur, Perambur) operate large hydraulic wheel-presses and bogie lifting bays.",
      portalPattern: "<zonecode>.indianrailways.gov.in (Workshops)",
      tag: "SRC"
    },
    {
      id: "rdso_approval",
      goal: "Apply for vendor approval for controlled hydraulic items",
      primaryRole: "RDSO Lucknow (Mechanical & Chemical Directorate / relevant directorate)",
      secondaryRole: "Zonal PCMM for local registration",
      level: "Central Organisation (Lucknow)",
      actionHint: "Consult RDSO Vendor Directory; submit application online for developmental vendor status.",
      portalPattern: "rdso.indianrailways.gov.in",
      tag: "SRC"
    },
    {
      id: "pu_purchases",
      goal: "Sell to locomotive and coach manufacturing factories (PUs)",
      primaryRole: "PCMM or CMM of that Production Unit (e.g. CLW, ICF, BLW)",
      secondaryRole: "GM's secretariat for formal inquiries",
      level: "Production Unit (Factory)",
      actionHint: "PUs issue independent tenders and require high-volume MRO spares, seal kits, and assembly power packs.",
      portalPattern: "<pucode>.indianrailways.gov.in (e.g. clw.indianrailways.gov.in)",
      tag: "SRC"
    },
    {
      id: "policy_rules",
      goal: "Consult national procurement policy and technical standards",
      primaryRole: "Railway Stores Directorate, Railway Board",
      secondaryRole: "Directorate of Mechanical Engineering",
      level: "Apex Board (New Delhi)",
      actionHint: "For regulatory insight only: not meant for routine sales visits. Study published circulars on indianrailways.gov.in.",
      portalPattern: "indianrailways.gov.in (Railway Board)",
      tag: "SRC"
    }
  ],

  roadmap: [
    {
      phase: "Phase 0",
      title: "Setup & Foundations",
      timeframe: "Weeks 1 to 4",
      summary: "Lay the legal, digital, and catalog foundation required to participate in government railway tenders.",
      actions: [
        "Complete GeM seller registration and profile verification",
        "Complete IREPS vendor registration and acquire Class 3 DSC",
        "Obtain or verify Udyam (MSME) registration for tender exemptions",
        "Organize ISO 9001 quality certificates and test documentation",
        "Prepare technical product catalogue with tonnage, pressure ratings, and test reports",
        "Select initial list of 20 target SKUs (focus on seal kits first)"
      ],
      tag: "SRC"
    },
    {
      phase: "Phase 1",
      title: "Learn the Tenders & Bidding Landscape",
      timeframe: "Weeks 2 to 8",
      summary: "Study live and closed tenders on GeM and IREPS to understand price points, specs, and competitor behavior.",
      actions: [
        "Search GeM and IREPS daily for keywords: hydraulic jack, seal kit, hand pump, ART, power pack",
        "Download and archive technical specifications and drawing standards",
        "Analyze past awarded L1 prices, tender quantities, and delivery schedules",
        "Shortlist 5 to 10 low-risk small tenders to prepare first test bids"
      ],
      tag: "SRC"
    },
    {
      phase: "Phase 2",
      title: "Local Entry & Initial Supply Orders",
      timeframe: "Months 2 to 6",
      summary: "Target the zonal HQ, divisions, and workshops closest to your home base to secure initial purchase orders.",
      actions: [
        "Visit PCMM / Sr. DMM offices at the closest zone HQ and nearest division",
        "Meet with 2 to 3 nearby workshops or ART depots to introduce product capabilities",
        "Submit applications for local zonal vendor registration",
        "Bid on small and medium jack, tool, and seal tenders",
        "Secure first supply orders, deliver with flawless test certificates, and collect performance reports"
      ],
      tag: "SRC"
    },
    {
      phase: "Phase 3",
      title: "Vendor Approvals & Controlled Items",
      timeframe: "Months 4 to 12",
      summary: "Pursue formal approvals for higher-value, specification-controlled hydraulic products.",
      actions: [
        "Cross-reference product portfolio against the RDSO controlled items directory",
        "Apply for RDSO developmental vendor registration for chosen jacks or pump items",
        "Line up required third-party laboratory testing, calibration, and sample evaluations",
        "Seek developmental orders to prove manufacturing consistency"
      ],
      tag: "SRC"
    },
    {
      phase: "Phase 4",
      title: "Geographic & Production Unit Expansion",
      timeframe: "Year 2",
      summary: "Scale across adjacent zones, Production Units, and high-frequency track machine depots.",
      actions: [
        "Replicate local vendor registrations in adjacent Zonal Railways and Production Units (CLW, ICF, etc.)",
        "Directly approach Track Machine depots and breakdown crane maintenance units for aftermarket seal kits",
        "Explore cylinder repair and refurbishment service contracts for railway workshops",
        "Consider establishing field service representation near major workshop clusters"
      ],
      tag: "SRC"
    }
  ],

  glossary: [
    { term: "ART", full: "Accident Relief Train", meaning: "Specially equipped train stationed at divisions with heavy re-railing hydraulic equipment to clear derailments.", tag: "SRC" },
    { term: "ARME", full: "Accident Relief Medical Equipment", meaning: "Medical relief van and equipment deployed alongside ART for disaster response.", tag: "SRC" },
    { term: "HRE", full: "Hydraulic Re-railing Equipment", meaning: "Specialized hydraulic jacks, traverse beams, power packs and roller carriages used to place derailed rolling stock back on rails.", tag: "SRC" },
    { term: "HRD", full: "Hydraulic Rescue Device", meaning: "Hydraulic cutters, spreaders, and rams used in emergency rescue operations.", tag: "SRC" },
    { term: "GM", full: "General Manager", meaning: "Head of a Zonal Railway, holding administrative and significant procurement powers.", tag: "SRC" },
    { term: "DRM", full: "Divisional Railway Manager", meaning: "Administrative head of a railway division, managing day-to-day operations and maintenance purchases.", tag: "SRC" },
    { term: "PCMM", full: "Principal Chief Materials Manager", meaning: "Principal Head of Department for Stores at Zone HQ; key authority for zonal purchases and vendor registration.", tag: "SRC" },
    { term: "CMM", full: "Chief Materials Manager", meaning: "Senior stores officer assisting PCMM in procurement and supply chain.", tag: "SRC" },
    { term: "Sr. DMM / DMM", full: "Senior Divisional / Divisional Materials Manager", meaning: "Stores and procurement officer stationed at divisional headquarters for local tenders.", tag: "SRC" },
    { term: "PCME", full: "Principal Chief Mechanical Engineer", meaning: "Zonal head for mechanical rolling stock, workshops, coaches, wagons, and ART equipment.", tag: "SRC" },
    { term: "PCEE", full: "Principal Chief Electrical Engineer", meaning: "Zonal head for electric traction, locomotives, and electrical maintenance.", tag: "SRC" },
    { term: "PCE", full: "Principal Chief Engineer", meaning: "Zonal head for civil engineering, permanent way (track), bridges, and track machines.", tag: "SRC" },
    { term: "PCSTE", full: "Principal Chief Signal & Telecom Engineer", meaning: "Zonal head for signaling and telecommunication infrastructure.", tag: "SRC" },
    { term: "Sr. DME", full: "Senior Divisional Mechanical Engineer", meaning: "Divisional in-charge for carriage & wagon, loco sheds, and ART re-railing units.", tag: "SRC" },
    { term: "Sr. DEE", full: "Senior Divisional Electrical Engineer", meaning: "Divisional in-charge for electrical loco sheds and traction distribution.", tag: "SRC" },
    { term: "Sr. DEN", full: "Senior Divisional Engineer", meaning: "Divisional civil engineer responsible for track maintenance and track tools.", tag: "SRC" },
    { term: "CWM", full: "Chief Workshop Manager", meaning: "Head of a major railway overhaul workshop (loco, carriage, or wagon workshop).", tag: "SRC" },
    { term: "COS", full: "Controller of Stores", meaning: "Historic/functional title for stores department leadership, now largely styled as PCMM.", tag: "SRC" },
    { term: "RDSO", full: "Research Designs & Standards Organisation", meaning: "Indian Railways technical standards, R&D, and vendor approval body located in Lucknow.", tag: "SRC" },
    { term: "IREPS", full: "Indian Railways E-Procurement System", meaning: "Railways' dedicated online portal for e-tendering of goods, works, and services (ireps.gov.in).", tag: "SRC" },
    { term: "GeM", full: "Government e-Marketplace", meaning: "Central Government procurement portal (gem.gov.in) where railway-specific purchases are being migrated.", tag: "SRC" },
    { term: "EMD", full: "Earnest Money Deposit", meaning: "Bid security deposited during tender submission (MSEs are generally exempt).", tag: "SRC" },
    { term: "DSC", full: "Digital Signature Certificate", meaning: "Hardware-based cryptographic key (Class 3) needed to authenticate and bid on IREPS.", tag: "SRC" },
    { term: "IRMS", full: "Indian Railway Management Service", meaning: "Unified Group-A service created in 2020 merging eight previous civil and engineering services.", tag: "SRC" },
    { term: "PU", full: "Production Unit", meaning: "Directly Board-governed manufacturing factories for locomotives, coaches, and wheelsets (e.g. CLW, ICF).", tag: "SRC" },
    { term: "MSE / MSME", full: "Micro, Small and Medium Enterprises", meaning: "Enterprises registered under Udyam eligible for procurement preferences, tender waivers, and reserved quotas.", tag: "SRC" }
  ],

  sourcesChecked: [
    { id: 1, title: "Wikipedia: Indian Railways organisational structure (18 zones and SCoR)", url: "https://en.wikipedia.org/wiki/Indian_Railways_organisational_structure" },
    { id: 2, title: "Anantam IAS: Railway Zones of India, 18 Zones, headquarters and divisions (14 Sep 2026)", url: "https://anantamias.com/railway-zones-of-india/" },
    { id: 3, title: "Indian Infrastructure: South Coast Railway commences operations on June 1, 2026", url: "https://indianinfrastructure.com/2026/06/03/south-coast-railway-commences-operations-on-june-1-2026/" },
    { id: 4, title: "Railway Procurement Process Manual (Stores depots, IREPS, vendor approval)", url: "https://mail.hridc.co.in/pdf/procurement-manual-of-indian-railway.pdf" },
    { id: 5, title: "IRIMEE Training Material on Stores, GeM and IREPS", url: "https://rskr.irimee.in/sites/default/files/Purchase%20Agencies%20%20GeM%20and%20IREPS.pdf" },
    { id: 6, title: "CAG Report No. 5 of 2006, Chapter 5 (Decentralisation of procurement to GMs)", url: "https://cag.gov.in/uploads/old_reports/union/union_compliance/2005_2006/Railways/Report_No_5/chap_5.pdf" },
    { id: 7, title: "CLW Notice to Vendors on GeM Registration (24 Aug 2020)", url: "https://clw.indianrailways.gov.in/uploads/240820.pdf" },
    { id: 8, title: "Ministry of Railways RDSO Master Circular on approved sources (25 Jun 2018)", url: "https://indianrailways.gov.in/railwayboard/uploads/directorate/stores/downloads/circular/Ordering_Against_Tenders/61_2018%2006%2025%20RDSO%20Master%20Circ.pdf" },
    { id: 9, title: "Western Railway 50T Hydraulic Jack Tender (IREPS-27265001)", url: "https://tenders.infralens.in/tender/railways-procurement-of-50-ton-capacity-hydraulic-jack-with-traversing-base" },
    { id: 10, title: "Northern Railway 5T Bottle Jack Tender (Ludhiana)", url: "https://www.tender18.com/tenders-details/16051241" },
    { id: 11, title: "IRIMEE material on ART & ARME equipment lists and innovations", url: "https://rskr.irimee.in/sites/default/files/ART%20%26%20ARME.pdf" },
    { id: 12, title: "Railway Board restructuring (2020) and Chairman/CEO extension news", url: "https://journalsofindia.com/railway-board/" },
    { id: 13, title: "Track Jack product example (FCS Rail HJ 10)", url: "https://www.fcsrail.com/?p=1632" }
  ]
};

/**
 * AquaPure — Dynamic Blog Article Detail Renderer (Vanilla ES6+)
 * Hydrates pages/blog-details.html per ?article= query key with matching
 * cover photography, sections, key takeaways, callouts, and related guides.
 */

(() => {
  'use strict';

  const ARTICLES = {
    'domestic-ro': {
      title: 'Understanding Domestic RO Water Purification',
      cat: 'Water Purification',
      catKey: 'water-purification',
      catTeal: false,
      metaLabel: 'Household Water · AquaPure Guide',
      cardMeta: 'Household Water',
      img: 'https://i.pinimg.com/736x/06/c6/eb/06c6eb8416ead9f044993f7263b107b7.jpg',
      alt: 'Modern kitchen countertop purifier pouring clean water',
      excerpt: 'How household RO units reduce dissolved solids and improve taste across varying municipal and groundwater feeds.',
      introH2: 'Why Households Look Beyond Basic Sediment Screening',
      p1: 'Household water arrives through varied supply paths—treated municipal distribution lines, local storage tanks, or groundwater borewells. Along that journey, water can pick up suspended rust or grit, residual chlorine taste, calcium hardness, and elevated dissolved salts.',
      p2: 'Reverse osmosis (RO) has become one of the most widely adopted point-of-use purification technologies because it pairs mechanical sediment and carbon pre-stages with a fine semi-permeable membrane capable of separating dissolved solids that pass straight through ordinary mesh cartridges.',
      tocMain: 'How Multi-Stage Purification Works',
      sidebarLabel: 'Ask About Domestic RO',
      sidebarHref: 'contact.html?customer=Residential&enquiry=Product+Enquiry&product=Domestic+RO+System',
      h1: 'How Multi-Stage Purification Protects Drinking Quality',
      m1: 'A dependable domestic RO setup does not rely on the membrane alone. Incoming water first travels through a micron sediment barrier that traps visible sand, silt, and rust flakes, followed by an activated carbon block designed to absorb free chlorine and taste-altering organic compounds that would otherwise degrade membrane film.',
      m2: 'Once pre-conditioned, feed pressure guides water molecules across the semi-permeable membrane, separating treated permeate water toward clean storage while routing concentrated dissolved minerals cleanly to drain. A final post-polishing or optional UV stage conditions stored water before dispensing.',
      boxTitle: 'Matching Domestic RO to Incoming Source Water',
      boxIntro: 'Before choosing an under-sink or wall-mounted household purifier, reviewing three practical inputs avoids undersizing pre-filters or premature cartridge fouling:',
      boxItems: [
        { label: 'Source Water Type', desc: 'Municipal supply versus borewell or mixed rooftop tank feeding the tap.' },
        { label: 'Measured TDS & Hardness', desc: 'High dissolved solids or scale tendency dictate pre-treatment needs.' },
        { label: 'Kitchen Placement', desc: 'Countertop, wall-mounted, or concealed under-sink storage layout and line pressure.' }
      ],
      h2: 'Routine Cartridge Care Keeps Output Consistent',
      m3: 'Even high-grade membranes gradually slow down if upstream sediment and carbon cartridges are neglected past their practical service interval. Scheduling periodic checks and cartridge swaps maintains gentle membrane pressure and preserves crisp taste.',
      callout: 'Consultation Note: Specific filtration stages, cartridge life, and recovery behavior depend on raw feed water composition and household demand. Contact AquaPure for recommendations tailored to your kitchen supply.',
      takeaways: [
        { num: '01', title: 'Layered Filtration Works Together', text: 'Sediment and activated carbon pre-stages safeguard RO membranes while improving overall taste and clarity.' },
        { num: '02', title: 'Source Assessment Comes First', text: 'Checking feed water origin and basic water quality parameters guides sensible system sizing without guesswork.' },
        { num: '03', title: 'Kitchen Placement Matters', text: 'Countertop, wall-mounted, and under-sink configurations keep clean drinking access neat in compact kitchens.' },
        { num: '04', title: 'Preventive Care Sustains Flow', text: 'Timely filter cartridge replacements and valve checks protect drinking taste and pump longevity.' }
      ],
      ctaEyebrow: 'Residential Solutions',
      ctaTitle: 'Ready to Select the Right Household Purifier?',
      ctaDesc: 'Explore countertop, wall-mount, and under-sink residential purifiers or ask our team for water-source guidance.',
      ctaPrimaryLabel: 'Explore Domestic RO',
      ctaPrimaryHref: 'services.html?category=domestic-ro#products'
    },
    'commercial-ro': {
      title: 'How Commercial RO Systems Work',
      cat: 'RO Technology',
      catKey: 'ro-technology',
      catTeal: true,
      metaLabel: 'Commercial Systems · AquaPure Guide',
      cardMeta: 'Commercial Systems',
      img: 'https://i.pinimg.com/736x/e1/6f/37/e16f37cb5e25ad7582aa9e8ca092f2c0.jpg',
      alt: 'Commercial stainless steel RO skid unit',
      excerpt: 'An architectural look at pre-treatment, high-pressure feed pumps, and membrane stages in hospitality and office skids.',
      introH2: 'Why Commercial Facilities Need Dedicated Skid Engineering',
      p1: 'Commercial kitchens, cafés, office floors, clinics, and educational campuses need steady purified water at consistent hourly flow rates without consuming oversized utility room footprints.',
      p2: 'Compact skid-mounted commercial RO assemblies unite multi-media pre-filtration, high-pressure booster pumps, vertical pressure vessels, and automated storage tank controls inside a clean serviceable stainless steel frame.',
      tocMain: 'Skid Architecture & Peak Demand',
      sidebarLabel: 'Enquire About Commercial RO',
      sidebarHref: 'contact.html?customer=Commercial&enquiry=Product+Enquiry&product=Skid-Mounted+Commercial+RO',
      h1: 'Balancing Peak Flow Demand With Storage & Recovery',
      m1: 'Unlike domestic point-of-use purifiers, commercial setups are sized around concentrated draw windows—such as morning coffee rushes, kitchen prep shifts, or hydration refills across multi-floor offices—paired with sealed reserve storage.',
      m2: 'Monitoring inlet pressure gauges, concentrate bypass valves, and differential pressure across pre-filters helps facility teams keep commercial membranes operating reliably throughout busy service hours.',
      boxTitle: 'Three Commercial Sizing Inputs That Matter Most',
      boxIntro: 'Confirming key operating realities before selecting a commercial skid prevents bottlenecked ice machines, steamers, or drinking dispensers:',
      boxItems: [
        { label: 'Peak Draw Windows', desc: 'Hourly volume needed during rush periods rather than average 24-hour draw alone.' },
        { label: 'Feed Pressure & Recovery', desc: 'Incoming utility pressure and storage vessel volume keep pump cycles balanced.' },
        { label: 'Service Clearance', desc: 'Front access to cartridge housings, pressure gauges, and electrical safety cutoffs.' }
      ],
      h2: 'Protecting Membranes in Hospitality & Foodservice Lines',
      m3: 'Because commercial foodservice kitchens and espresso bars rely on consistent mineral balance, combining sediment/carbon pre-conditioning with scheduled sanitization keeps both membrane surfaces and downstream distribution lines in top condition.',
      callout: 'Commercial Sizing Note: Exact membrane configuration and vessel staging depend on raw feed water chemistry and daily draw patterns. Share your facility details with AquaPure for tailored skid selection.',
      takeaways: [
        { num: '01', title: 'Skids Centralize Core Hardware', text: 'Frame-mounted pumps, instrumentation, and vessels keep utility spaces orderly and easy to inspect.' },
        { num: '02', title: 'Storage Absorbs Peak Surges', text: 'Proper tank sizing prevents draw-down starvation during high-occupancy hospitality and office hours.' },
        { num: '03', title: 'Pre-Filters Extend Membrane Life', text: 'Activated carbon and multi-micron sediment stages stop chlorine oxidation before water hits RO elements.' },
        { num: '04', title: 'Gauges Guide Proactive Care', text: 'Watching pressure drop trends reveals fouling early so cartridge service happens between peak hours.' }
      ],
      ctaEyebrow: 'Commercial Water Solutions',
      ctaTitle: 'Planning a Commercial RO Installation?',
      ctaDesc: 'Review compact commercial skid systems or request sizing advice tailored to your café, clinic, or office supply.',
      ctaPrimaryLabel: 'Explore Commercial RO',
      ctaPrimaryHref: 'services.html?category=commercial-ro#products'
    },
    'industrial-treatment': {
      title: 'Introduction to Industrial Water Treatment',
      cat: 'Industrial Water Treatment',
      catKey: 'industrial-treatment',
      catTeal: false,
      metaLabel: 'Industrial Scale · AquaPure Guide',
      cardMeta: 'Industrial Scale',
      img: 'https://i.pinimg.com/736x/e8/7b/8b/e87b8bae8b2e30de87ee8712cb6265b4.jpg',
      alt: 'Industrial water treatment plant housings',
      excerpt: 'Why raw water chemistry, throughput demands, and pre-treatment design shape every industrial RO plant specification.',
      introH2: 'Engineering Reliable Feed Quality Across Production Lines',
      p1: 'Manufacturing lines, boiler makeup loops, cooling systems, food processing facilities, and large campuses cannot rely safely on unconditioned municipal or borewell water directly.',
      p2: "Industrial treatment trains integrate coarse particulate screening, dual-media and carbon FRP vessels, antiscalant dosing, high-pressure multi-element RO arrays, and clean post-treatment loops designed around each plant's water chemistry.",
      tocMain: 'Pre-Treatment & Plant Architecture',
      sidebarLabel: 'Discuss Industrial RO Plant',
      sidebarHref: 'contact.html?customer=Industrial&enquiry=Industrial+RO+Plant',
      h1: 'Why Source Water Analysis Drives Plant Engineering',
      m1: 'Industrial water treatment plants vary significantly in membrane staging, vessel diameter, CIP ports, and chemical conditioning depending on hardness, silica, turbidity, and seasonal borewell fluctuations.',
      m2: 'Structured hydraulic layout—coupling flow meters, ORP/pH monitoring points, and automated flush cycles—protects downstream heat exchangers and process vessels from premature scale or corrosion.',
      boxTitle: 'Essential Engineering Inputs Before Plant Design',
      boxIntro: 'AquaPure evaluates industrial projects around verified feed characteristics and operational continuity rather than generic capacity labels:',
      boxItems: [
        { label: 'Complete Raw Water Profile', desc: 'Turbidity, total hardness, iron, silica, and TDS variance across wet and dry seasons.' },
        { label: 'Process Output Standard', desc: 'Distinguishing boiler feed purity from rinse water, utility makeup, or ingredient water.' },
        { label: 'Plant Footprint & Redundancy', desc: 'Vertical FRP vessel spacing, chemical dosing containment, and clean-in-place access.' }
      ],
      h2: 'Commissioning Discipline & Operator Logbooks',
      m3: 'Clean startup flushing, calibrated dosing pumps, and disciplined pressure-differential logbooks give facility engineers early visibility into membrane condition long before production throughput is affected.',
      callout: 'Plant Engineering Note: Every industrial plant configuration is confirmed after reviewing source water data, operating hours, and site utility constraints with our engineering team.',
      takeaways: [
        { num: '01', title: 'Pre-Treatment Protects Core Trains', text: 'Sand, carbon, and softening stages absorb turbidity and hardness shocks before water reaches high-pressure pumps.' },
        { num: '02', title: 'Tailored Staging Prevents Fouling', text: 'Dosing control and recovery calibration are tuned specifically around source silica and mineral saturation.' },
        { num: '03', title: 'Instrumentation Supports Uptime', text: 'Inline flow, conductivity, and pressure checks help operators spot scaling trends early.' },
        { num: '04', title: 'Sector Fit Drives Layout', text: 'Food, pharmaceutical, hospitality, and manufacturing facilities each require purpose-aligned piping and polishing.' }
      ],
      ctaEyebrow: 'Industrial Engineering',
      ctaTitle: 'Scoping an Industrial Water Treatment Plant?',
      ctaDesc: 'Explore industrial RO units and pre-treatment assemblies or schedule an engineering review for your facility.',
      ctaPrimaryLabel: 'Explore Industrial Plants',
      ctaPrimaryHref: 'services.html?category=industrial-ro#products'
    },
    'water-quality': {
      title: 'Why Water Quality Testing Matters',
      cat: 'Water Quality',
      catKey: 'water-quality',
      catTeal: true,
      metaLabel: 'Source Assessment · AquaPure Guide',
      cardMeta: 'Source Assessment',
      img: '../images/water-testing.jpg',
      alt: 'Engineer holding clear water sample flask',
      excerpt: 'Evaluating source water clarity, hardness, and total dissolved solids before investing in filtration or RO systems.',
      introH2: 'Replacing Equipment Guesswork With Source Clarity',
      p1: 'Selecting water purification hardware without first checking incoming feed water parameters often leads to clogged sediment barriers, stubborn pipe scaling, or overbuilt stages that do not match actual needs.',
      p2: 'Reviewing key source indicators upfront empowers homeowners, hospitality operators, and plant engineers to select filtration media, softeners, or RO membranes aligned accurately with real site conditions.',
      tocMain: 'Key Indicators Before Buying Hardware',
      sidebarLabel: 'Enquire About Water Testing',
      sidebarHref: 'contact.html?enquiry=Water+Quality+Testing',
      h1: 'Key Observations Before Selecting Equipment',
      m1: 'Understanding baseline clarity (turbidity), total hardness, free chlorine, iron presence, and total dissolved solids immediately clarifies whether a site needs particulate screening, ion-exchange softening, or reverse osmosis.',
      m2: 'Borewell sources, municipal lines, and harvested rainwater behave very differently: groundwater frequently carries mineral hardness and dissolved salts, while municipal feeds typically require chlorine taste adsorption.',
      boxTitle: 'Practical Parameters Checked During Assessment',
      boxIntro: 'Looking at a few core indicators prevents costly hardware mismatches and guides sensible pre-treatment selection:',
      boxItems: [
        { label: 'Total Dissolved Solids (TDS)', desc: 'Indicates dissolved salt load and helps determine whether RO conditioning is warranted.' },
        { label: 'Calcium & Magnesium Hardness', desc: 'Predicts scale buildup in geysers, boilers, valves, and heat-transfer piping.' },
        { label: 'Turbidity, Iron & Odor', desc: 'Identifies physical sediment, rusty coloration, or organic taste requiring upstream media.' }
      ],
      h2: 'Seasonal Shifts Make Periodic Checks Valuable',
      m3: 'Water composition is rarely static all year round—groundwater tables drop during dry months and municipal blends shift across seasons. Re-checking supply conditions whenever taste, clarity, or scaling changes keeps treatment effective.',
      callout: 'Testing Guidance Note: Whenever deeper laboratory validation is advisable for commercial foodservice or industrial processes, AquaPure guides suitable assessment steps upon enquiry.',
      takeaways: [
        { num: '01', title: 'Right-Size Before Purchasing', text: 'Source parameter visibility ensures you invest in the filtration stages your water actually requires.' },
        { num: '02', title: 'Municipal vs. Borewell Needs Differ', text: 'Chlorine adsorption, hardness reduction, and TDS separation call for distinct media combinations.' },
        { num: '03', title: 'Protect Downstream Appliances', text: 'Spotting hardness early stops scale damage in kitchen equipment, boilers, and fixtures.' },
        { num: '04', title: 'Seasonal Monitoring Helps', text: 'Periodic source checks ensure your pre-filters stay aligned as incoming supply fluctuates.' }
      ],
      ctaEyebrow: 'Source Assessment',
      ctaTitle: 'Want Practical Guidance on Your Feed Water?',
      ctaDesc: 'Share your water source type or current readings with AquaPure for clear treatment recommendations.',
      ctaPrimaryLabel: 'Water Testing Info',
      ctaPrimaryHref: 'service-details.html?service=water-testing'
    },
    'filtration': {
      title: 'Understanding Water Filtration',
      cat: 'Industry Applications',
      catKey: 'industry-applications',
      catTeal: false,
      metaLabel: 'Filtration Stages · AquaPure Guide',
      cardMeta: 'Filtration Stages',
      img: 'https://i.pinimg.com/1200x/72/4d/37/724d37b63a81ee5a64c5d3715c98c73a.jpg',
      alt: 'Water filtration stages illustration',
      excerpt: 'Distinguishing sediment screens, activated carbon adsorption, ultrafiltration, and ion-exchange softening across uses.',
      introH2: 'Choosing the Right Barrier for Each Water Challenge',
      p1: 'Not every water supply calls for identical purification hardware. Sediment barriers, activated carbon adsorption beds, ultrafiltration hollow fibers, and ion-exchange softeners each solve distinct physical or chemical problems.',
      p2: 'Knowing how each treatment medium works helps residential and industrial users improve clarity, remove chlorine taste, and protect piping and membranes without unnecessary complexity.',
      tocMain: 'Comparing Media & Filtration Stages',
      sidebarLabel: 'Discuss Filtration Options',
      sidebarHref: 'contact.html?customer=Residential&enquiry=Product+Enquiry&product=Domestic+Filtration+or+Softener',
      h1: 'Matching Media Type to Water Conditions',
      m1: 'Mechanical depth cartridges and multi-grade sand filters intercept visible grit, silt, and pipe rust, restoring visual clarity and shielding valves and booster pumps from abrasive wear.',
      m2: 'Granular and block activated carbon targets chemical adsorption—reducing chlorine taste and odor—while ultrafiltration traps fine particulates and ion-exchange resin swaps hardness ions cleanly for softer utility water.',
      boxTitle: 'Quick Comparison of Core Filtration Technologies',
      boxIntro: 'Each stage serves a focused purpose within residential whole-house, commercial, and industrial treatment trains:',
      boxItems: [
        { label: 'Sediment & Sand Vessels', desc: 'Trap physical sand, suspended silt, and rust before finer elements encounter grit.' },
        { label: 'Activated Carbon Media', desc: 'Adsorb residual chlorine, odor compounds, and taste impurities ahead of drinking outlets or RO.' },
        { label: 'Ultrafiltration & Softeners', desc: 'Polish particulate clarity or exchange calcium/magnesium hardness without removing beneficial flow.' }
      ],
      h2: 'Combining Stages Into a Balanced Treatment Train',
      m3: 'When filtration stages are sequenced thoughtfully—coarse sediment ahead of carbon adsorption, followed by softening or membrane separation only where needed—each element runs efficiently with lower maintenance strain.',
      callout: 'Application Note: Whole-house sediment protection, commercial pre-filtration, and industrial vessel trains differ in sizing and backwash frequency. Contact AquaPure to match stages to your flow rate.',
      takeaways: [
        { num: '01', title: 'Mechanical Screens Clear Grit', text: 'Spun cartridges and multimedia sand beds intercept suspended particulates before they clog downstream valves.' },
        { num: '02', title: 'Carbon Improves Taste & Protects RO', text: 'Activated carbon strips chlorine and organics that impair flavor and harm thin-film RO membranes.' },
        { num: '03', title: 'Softeners Prevent Hard Scale', text: 'Cation exchange resin keeps heaters, laundry machines, and industrial steam lines scale-free.' },
        { num: '04', title: 'Stage Sequence Controls Wear', text: 'Proper ordering lets economical pre-filters absorb the heavy load ahead of fine purification stages.' }
      ],
      ctaEyebrow: 'Filtration & Softening',
      ctaTitle: 'Looking for Dedicated Filtration or Softening Hardware?',
      ctaDesc: 'Browse multimedia filters, activated carbon units, and water softeners or ask our team for staging advice.',
      ctaPrimaryLabel: 'Browse Filtration Systems',
      ctaPrimaryHref: 'services.html?category=filtration#products'
    },
    'maintenance-tips': {
      title: 'Water Purifier Maintenance Tips',
      cat: 'Maintenance & Care',
      catKey: 'maintenance-care',
      catTeal: true,
      metaLabel: 'Preventive Upkeep · AquaPure Guide',
      cardMeta: 'Preventive Upkeep',
      img: 'https://i.pinimg.com/736x/cc/2d/09/cc2d0917cf9cb60f27cd2b41faa5ddb6.jpg',
      alt: 'Technician performing preventive water purifier inspection',
      excerpt: 'Practical habits for tracking filter cartridge wear, watching flow drops, and scheduling periodic technician checks.',
      introH2: 'Why Timely Filter Service Protects Water Taste & Hardware',
      p1: 'Purification equipment works quietly every single day, progressively capturing suspended sediment, chlorine compounds, organic matter, and dissolved scale inside replaceable cartridges and membranes.',
      p2: 'Following sensible preventive maintenance routines sustains clean water taste, avoids excessive strain on booster pumps and solenoid valves, and keeps household and commercial systems dependable year after year.',
      tocMain: 'Signals & Maintenance Habits',
      sidebarLabel: 'Schedule Service Support',
      sidebarHref: 'contact.html?enquiry=Maintenance',
      h1: 'Practical Signals That Servicing Is Due',
      m1: 'A noticeable slowdown at the faucet, faint changes in drinking taste or odor, unexpected pump cycling noise, or overdue replacement dates are clear cues to arrange a preventive inspection.',
      m2: 'Keeping a simple service logbook—recording sediment/carbon filter dates, sanitizer flushes, and incoming TDS observations—prevents delayed cartridge saturation from degrading downstream RO membranes.',
      boxTitle: 'Simple Preventive Habits for Every System Owner',
      boxIntro: 'Whether managing a home purifier or a commercial pantry skid, three easy checks support steady output:',
      boxItems: [
        { label: 'Track Cartridge Dates', desc: 'Replace sediment and pre-carbon filters promptly rather than running until flow completely stalls.' },
        { label: 'Inspect Tubing & Seals', desc: 'Check push-fit joints, drain lines, and storage tank taps for slow drips or mineral crusting.' },
        { label: 'Clean Dispensing Spouts', desc: 'Wipe faucet aerators and external outlets periodically while leaving internal housings to trained technicians.' }
      ],
      h2: 'Working With Trained Technicians for Internal Checks',
      m3: 'Beyond routine cartridge swaps, periodic technician servicing verifies feed pump pressure, tank pre-charge stability, membrane integrity, and electrical safety cutoffs so small issues are resolved before downtime occurs.',
      callout: 'Service Note: Optimal filter replacement intervals depend on raw water turbidity, hardness, and daily usage volume. Request an AquaPure maintenance visit whenever output or supply conditions change.',
      takeaways: [
        { num: '01', title: 'Watch Flow & Taste Shifts', text: 'Slower dispensing speed or flavor changes indicate saturated pre-filters needing timely swap.' },
        { num: '02', title: 'Clean Upfront Protects Pumps', text: 'Unclogged sediment stages prevent booster pumps from drawing against heavy vacuum resistance.' },
        { num: '03', title: 'Log Every Filter Change', text: 'Simple date tracking avoids guesswork across seasonal municipal and borewell supply shifts.' },
        { num: '04', title: 'Routine Inspection Pays Off', text: 'Periodic valve, seal, and tank sanitization checks keep stored drinking water consistently fresh.' }
      ],
      ctaEyebrow: 'Preventive Service Care',
      ctaTitle: 'Need Filter Replacement or System Servicing?',
      ctaDesc: 'Explore our structured maintenance care details or schedule an inspection with our service team.',
      ctaPrimaryLabel: 'Maintenance Details',
      ctaPrimaryHref: 'service-details.html?service=maintenance'
    }
  };

  const ORDER = ['domestic-ro', 'commercial-ro', 'industrial-treatment', 'water-quality', 'filtration', 'maintenance-tips'];

  const SIDEBAR_META = {
    'domestic-ro': {
      facts: [
        { k: 'Application Fit', v: 'Household Kitchens' },
        { k: 'Primary Stages', v: 'Sediment, Carbon & RO' },
        { k: 'Key Parameter', v: 'TDS & Hardness' },
        { k: 'Care Focus', v: 'Cartridge Intervals' }
      ],
      cardTitle: 'Residential Purifiers & RO'
    },
    'commercial-ro': {
      facts: [
        { k: 'Application Fit', v: 'Cafes, Offices & Clinics' },
        { k: 'Assembly Style', v: 'Skid-Mounted Frames' },
        { k: 'Sizing Priority', v: 'Peak Hour Draw' },
        { k: 'Monitoring', v: 'Differential Pressure' }
      ],
      cardTitle: 'Commercial RO Systems'
    },
    'industrial-treatment': {
      facts: [
        { k: 'Application Fit', v: 'Plants & Manufacturing' },
        { k: 'Pre-Treatment', v: 'Dual-Media, Carbon & Dosing' },
        { k: 'Design Driver', v: 'Raw Water Chemistry' },
        { k: 'Operation', v: 'CIP & Logbook Checks' }
      ],
      cardTitle: 'Industrial Plant Assemblies'
    },
    'water-quality': {
      facts: [
        { k: 'Assessment Focus', v: 'Source Characterization' },
        { k: 'Core Metrics', v: 'TDS, Hardness & Turbidity' },
        { k: 'Source Origin', v: 'Municipal vs. Borewell' },
        { k: 'Review Cadence', v: 'Before Sizing & Seasonal' }
      ],
      cardTitle: 'Water Quality Assessment'
    },
    'filtration': {
      facts: [
        { k: 'Media Types', v: 'Sand, Carbon, UF & Resin' },
        { k: 'Target Issues', v: 'Silt, Chlorine & Hardness' },
        { k: 'Flow Sequence', v: 'Coarse to Fine Stages' },
        { k: 'Deployment', v: 'Home, Hospitality & Plant' }
      ],
      cardTitle: 'Filtration & Softening Units'
    },
    'maintenance-tips': {
      facts: [
        { k: 'Maintenance Type', v: 'Preventive Inspection' },
        { k: 'Early Signals', v: 'Slow Flow & Taste Shift' },
        { k: 'Core Upkeep', v: 'Sediment & Carbon Swaps' },
        { k: 'Service Path', v: 'Trained Technician Care' }
      ],
      cardTitle: 'Scheduled Care & AMC'
    }
  };

  function renderArticle() {
    const titleEl = document.getElementById('articleTitle');
    if (!titleEl) return;

    const key = new URLSearchParams(window.location.search).get('article');
    const activeKey = ARTICLES[key] ? key : 'domestic-ro';
    const data = ARTICLES[activeKey];

    document.title = `${data.title} | AquaPure`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data.excerpt);

    document.getElementById('articleBreadcrumb').textContent = data.title;
    const catTag = document.getElementById('articleCategoryTag');
    if (catTag) {
      catTag.textContent = data.cat;
      catTag.className = data.catTeal ? 'tag tag--teal' : 'tag';
    }

    const metaLabel = document.getElementById('articleMetaLabel');
    if (metaLabel) metaLabel.textContent = data.metaLabel;
    titleEl.textContent = data.title;

    const heroImg = document.getElementById('articleHeroImg');
    if (heroImg) {
      heroImg.src = data.img;
      heroImg.alt = data.alt;
    }

    document.getElementById('articleIntroH2').textContent = data.introH2;
    document.getElementById('articleIntroP1').textContent = data.p1;
    document.getElementById('articleIntroP2').textContent = data.p2;
    document.getElementById('articleTocMain').textContent = data.tocMain;

    const sidebarBtn = document.getElementById('articleSidebarBtn');
    if (sidebarBtn) {
      sidebarBtn.textContent = data.sidebarLabel;
      sidebarBtn.href = data.sidebarHref;
    }

    const sidebarBackBtn = document.getElementById('articleSidebarBackBtn');
    if (sidebarBackBtn) {
      sidebarBackBtn.textContent = `More in ${data.cat}`;
      sidebarBackBtn.href = `blog.html?category=${encodeURIComponent(data.catKey)}`;
    }

    document.getElementById('articleMainH1').textContent = data.h1;
    document.getElementById('articleMainP1').textContent = data.m1;
    document.getElementById('articleMainP2').textContent = data.m2;
    document.getElementById('articleBoxTitle').textContent = data.boxTitle;
    document.getElementById('articleBoxIntro').textContent = data.boxIntro;

    const boxList = document.getElementById('articleBoxList');
    if (boxList) {
      boxList.innerHTML = data.boxItems
        .map((item) => `<li><strong>${item.label}:</strong> ${item.desc}</li>`)
        .join('');
    }

    document.getElementById('articleMainH2').textContent = data.h2;
    document.getElementById('articleMainP3').textContent = data.m3;

    const callout = document.getElementById('articleCallout');
    if (callout) {
      const [notePrefix, ...noteRest] = data.callout.split(':');
      callout.innerHTML = `<strong>${notePrefix}:</strong>${noteRest.join(':')}`;
    }

    const sideMeta = SIDEBAR_META[activeKey];
    const sideFacts = document.getElementById('articleSideFacts');
    if (sideFacts && sideMeta) {
      sideFacts.innerHTML = sideMeta.facts
        .map((row) => `
          <div class="legal-summary-row">
            <span class="legal-summary-key">${row.k}</span>
            <span class="legal-summary-val">${row.v}</span>
          </div>
        `)
        .join('');
    }
    const sideCardTag = document.getElementById('articleSideCardTag');
    if (sideCardTag) sideCardTag.textContent = data.cat;
    const sideCardTitle = document.getElementById('articleSideCardTitle');
    if (sideCardTitle && sideMeta) sideCardTitle.textContent = sideMeta.cardTitle;
    const sideCardDesc = document.getElementById('articleSideCardDesc');
    if (sideCardDesc) sideCardDesc.textContent = data.ctaDesc;
    const sideCardBtn = document.getElementById('articleSideCardBtn');
    if (sideCardBtn) {
      sideCardBtn.textContent = data.ctaPrimaryLabel;
      sideCardBtn.href = data.ctaPrimaryHref;
    }

    const takeawaysGrid = document.getElementById('articleTakeawaysGrid');
    if (takeawaysGrid) {
      takeawaysGrid.innerHTML = data.takeaways
        .map((item, idx) => {
          const accent = idx % 2 === 0 ? 'card--accent-left' : 'card--accent-teal';
          return `
            <div class="card card--static ${accent} reveal visible">
              <h4>${item.num}. ${item.title}</h4>
              <p class="card-text">${item.text}</p>
            </div>
          `;
        })
        .join('');
    }

    const relatedGrid = document.getElementById('relatedArticlesGrid');
    if (relatedGrid) {
      const relatedKeys = ORDER.filter((k) => k !== activeKey).slice(0, 3);
      relatedGrid.innerHTML = relatedKeys
        .map((rk, idx) => {
          const item = ARTICLES[rk];
          const tagCls = idx % 2 === 1 ? 'tag tag--teal' : 'tag';
          return `
            <article class="blog-card reveal visible">
              <img src="${item.img}" class="blog-card-image" alt="${item.alt}" loading="lazy">
              <div class="blog-card-body">
                <div><span class="${tagCls}">${item.cat}</span></div>
                <h3 class="blog-card-title">${item.title}</h3>
                <p class="blog-card-excerpt">${item.excerpt}</p>
                <div class="blog-card-meta">
                  <span>${item.cardMeta}</span>
                  <a href="blog-details.html?article=${rk}" class="card-link" style="margin-top:0">Read Guide &rarr;</a>
                </div>
              </div>
            </article>
          `;
        })
        .join('');
    }

    document.getElementById('articleCtaEyebrow').textContent = data.ctaEyebrow;
    document.getElementById('articleCtaTitle').textContent = data.ctaTitle;
    document.getElementById('articleCtaDesc').textContent = data.ctaDesc;
    const ctaPrimary = document.getElementById('articleCtaPrimary');
    if (ctaPrimary) {
      ctaPrimary.textContent = data.ctaPrimaryLabel;
      ctaPrimary.href = data.ctaPrimaryHref;
    }
  }

  document.addEventListener('DOMContentLoaded', renderArticle);
})();

/**
 * AquaPure — Interactive Product Catalogue (Vanilla ES6+)
 * Powers search, category filtering, sorting, and quick-detail inspection
 * on services.html#products. Zero fabricated capacities or certifications.
 */

(() => {
  'use strict';

  const PRODUCTS = [
    {
      id: 'ap-dom-pure-1',
      name: 'AquaPure Countertop Purifier',
      category: 'domestic-purifier',
      badge: 'Residential',
      image: 'images/domestic-purifier.jpg',
      description: 'Compact countertop drinking water purifier designed for modern residential kitchens with multi-stage particulate and taste filtration.',
      highlights: ['Point-of-Use', 'Compact Footprint', 'Routine Cartridge Care'],
      serviceLink: 'service-details.html?service=domestic-installation',
    },
    {
      id: 'ap-dom-pure-2',
      name: 'AquaPure Wall-Mount Purifier Series',
      category: 'domestic-purifier',
      badge: 'Popular',
      image: 'images/domestic-wall-purifier.jpg',
      description: 'Space-saving wall-mounted household purifier engineered for reliable daily drinking water preparation and accessible maintenance.',
      highlights: ['Wall-Mounted', 'Multi-Stage Media', 'Household Supply'],
      serviceLink: 'service-details.html?service=domestic-installation',
    },
    {
      id: 'ap-dom-ro-1',
      name: 'AquaPure Under-Sink Domestic RO',
      category: 'domestic-ro',
      badge: 'Residential RO',
      image: 'images/domestic-ro-undersink.jpg',
      description: 'Concealed under-counter reverse osmosis system designed to reduce dissolved salts and improve household drinking water taste.',
      highlights: ['Under-Sink Design', 'RO Membrane Stage', 'Pressurized Storage'],
      serviceLink: 'service-details.html?service=domestic-installation',
    },
    {
      id: 'ap-dom-ro-2',
      name: 'AquaPure HomeGuard RO + UV Unit',
      category: 'domestic-ro',
      badge: 'Dual Stage',
      image: 'images/ro-membrane-unit.jpg',
      description: 'Residential reverse osmosis and ultraviolet polishing unit selected based on local municipal or groundwater source characteristics.',
      highlights: ['RO + UV Conditioning', 'Household Drinking Water', 'Technician Setup'],
      serviceLink: 'service-details.html?service=domestic-installation',
    },
    {
      id: 'ap-com-ro-1',
      name: 'AquaPure Commercial Skid RO System',
      category: 'commercial-ro',
      badge: 'Commercial',
      image: 'images/commercial-ro.jpg',
      description: 'Frame-mounted commercial reverse osmosis system configured for offices, cafés, clinics, and dining establishments.',
      highlights: ['Skid-Mounted', 'Scalable Selection', 'Continuous Operation'],
      serviceLink: 'service-details.html?service=ro-installation',
    },
    {
      id: 'ap-com-ro-2',
      name: 'AquaPure Institutional RO Station',
      category: 'commercial-ro',
      badge: 'Popular',
      image: 'images/hospitality-water.jpg',
      description: 'High-utility commercial purification station suitable for schools, hospitality venues, and mid-size commercial buildings.',
      highlights: ['Institutional Grade', 'Stainless Frame', 'Planned Service'],
      serviceLink: 'service-details.html?service=ro-installation',
    },
    {
      id: 'ap-ind-ro-1',
      name: 'AquaPure Industrial Brackish RO Plant',
      category: 'industrial-ro',
      badge: 'Industrial',
      image: 'images/hero-facility.jpg',
      description: 'Custom-configured industrial reverse osmosis plant engineered around feed-water assessment, output volume, and process requirements.',
      highlights: ['Site-Specific Design', 'Pressure Vessel Array', 'Full Commissioning'],
      serviceLink: 'service-details.html?service=ro-installation',
    },
    {
      id: 'ap-ind-ro-2',
      name: 'AquaPure High-Recovery Industrial Skid',
      category: 'industrial-ro',
      badge: 'Custom Quote',
      image: 'images/industrial-plant.jpg',
      description: 'Heavy-duty multi-vessel industrial RO system built for manufacturing lines, beverage processing, and utility water demands.',
      highlights: ['Process Water', 'Multi-Vessel Skid', 'Enquiry Engineered'],
      serviceLink: 'service-details.html?service=ro-installation',
    },
    {
      id: 'ap-treat-1',
      name: 'AquaPure Chemical Dosing Assembly',
      category: 'treatment-equipment',
      badge: 'Process Control',
      image: 'images/treatment-equipment.jpg',
      description: 'Precision metering and dosing pump assembly supporting scale control and pH balancing in commercial and industrial treatment trains.',
      highlights: ['Controlled Dosing', 'Pre/Post Conditioning', 'Industrial Utility'],
      serviceLink: 'service-details.html?service=ro-installation',
    },
    {
      id: 'ap-treat-2',
      name: 'AquaPure Raw Water Conditioning Unit',
      category: 'treatment-equipment',
      badge: 'System Component',
      image: 'images/manufacturing-water.jpg',
      description: 'Integrated water treatment module selected following source-water review to prepare feed streams for downstream purification.',
      highlights: ['Source Conditioning', 'Modular Layout', 'Assessment Driven'],
      serviceLink: 'service-details.html?service=water-testing',
    },
    {
      id: 'ap-filt-1',
      name: 'AquaPure Multi-Stage Cartridge Filtration',
      category: 'filtration',
      badge: 'Filtration',
      image: 'images/filtration-system.jpg',
      description: 'Layered micron sediment and activated carbon cartridge array designed to clarify turbidity, chlorine odor, and fine suspended solids.',
      highlights: ['Sediment & Carbon', 'Clarification Stage', 'Accessible Housing'],
      serviceLink: 'service-details.html?service=maintenance',
    },
    {
      id: 'ap-filt-2',
      name: 'AquaPure Ultrafiltration Hollow-Fiber Module',
      category: 'filtration',
      badge: 'UF Technology',
      image: 'images/healthcare-water.jpg',
      description: 'Membrane-based ultrafiltration system providing fine suspended-matter separation for residential complexes and commercial facilities.',
      highlights: ['Ultrafiltration', 'Low-Pressure Flow', 'Consistent Output'],
      serviceLink: 'service-details.html?service=ro-installation',
    },
    {
      id: 'ap-soft-1',
      name: 'AquaPure Automatic Water Softener',
      category: 'softening',
      badge: 'Hardness Care',
      image: 'images/water-softener.jpg',
      description: 'Ion-exchange resin softening vessel equipped with automated regeneration valve control to help protect plumbing and heating appliances.',
      highlights: ['Ion-Exchange Resin', 'Automated Valve', 'Scale Reduction'],
      serviceLink: 'service-details.html?service=ro-installation',
    },
    {
      id: 'ap-soft-2',
      name: 'AquaPure Duplex Commercial Softener',
      category: 'softening',
      badge: 'Continuous Flow',
      image: 'images/commercial-ro.jpg',
      description: 'Dual-column softening configuration designed for hotels, laundries, and boiler feeds requiring uninterrupted softened water.',
      highlights: ['Alternating Tanks', 'Commercial Utility', 'Service Supported'],
      serviceLink: 'service-details.html?service=ro-installation',
    },
    {
      id: 'ap-pre-1',
      name: 'AquaPure Dual-Media Sand Pre-Filter',
      category: 'pre-treatment',
      badge: 'Pre-Treatment',
      image: 'images/pretreatment-vessels.jpg',
      description: 'Graded silica sand and anthracite pressure vessel removing coarse suspended solids prior to commercial or industrial RO stages.',
      highlights: ['Turbidity Reduction', 'FRP / Steel Options', 'Backwash Ready'],
      serviceLink: 'service-details.html?service=ro-installation',
    },
    {
      id: 'ap-pre-2',
      name: 'AquaPure Activated Carbon Pre-Treatment Vessel',
      category: 'pre-treatment',
      badge: 'Pre-Treatment',
      image: 'images/industrial-plant.jpg',
      description: 'Granular activated carbon media tank engineered to adsorb free chlorine and organic compounds before delicate RO membranes.',
      highlights: ['Dechlorination', 'Membrane Protection', 'Serviceable Media'],
      serviceLink: 'service-details.html?service=maintenance',
    },
    {
      id: 'ap-post-1',
      name: 'AquaPure Inline UV Disinfection Chamber',
      category: 'post-treatment',
      badge: 'Post-Treatment',
      image: 'images/uv-post-treatment.jpg',
      description: 'Stainless steel ultraviolet chamber providing chemical-free final polishing for treated water storage and distribution lines.',
      highlights: ['Stainless Chamber', 'Final Polishing', 'Compact Inline'],
      serviceLink: 'service-details.html?service=maintenance',
    },
    {
      id: 'ap-post-2',
      name: 'AquaPure Mineral & Taste Polishing Stage',
      category: 'post-treatment',
      badge: 'Post-Treatment',
      image: 'images/pure-water-macro.jpg',
      description: 'Post-RO mineral balancing and final activated-carbon taste cartridge crafted to refine drinking water palatability.',
      highlights: ['Taste Refinement', 'pH Conditioning', 'Easy Cartridge Swap'],
      serviceLink: 'service-details.html?service=maintenance',
    },
    {
      id: 'ap-acc-1',
      name: 'AquaPure Scheduled Filter Replacement Pack',
      category: 'accessories',
      badge: 'Consumables',
      image: 'images/technician-service.jpg',
      description: 'Matched sediment, pre-carbon, and post-carbon replacement cartridges packaged for routine preventive servicing.',
      highlights: ['Matched Media', 'Preventive Upkeep', 'Domestic & Commercial'],
      serviceLink: 'service-details.html?service=maintenance',
    },
    {
      id: 'ap-acc-2',
      name: 'AquaPure Pressure Gauges & Flow Instrumentation',
      category: 'accessories',
      badge: 'Accessories',
      image: 'images/water-testing.jpg',
      description: 'Essential monitoring accessories including inline rotameters, pressure gauges, and handheld TDS check tools for routine system observation.',
      highlights: ['Flow Monitoring', 'Pressure Checks', 'Diagnostic Utility'],
      serviceLink: 'service-details.html?service=water-testing',
    },
  ];

  const CATEGORY_LABELS = {
    'domestic-purifier': 'Domestic Purifiers',
    'domestic-ro': 'Domestic RO Systems',
    'commercial-ro': 'Commercial RO Systems',
    'industrial-ro': 'Industrial RO Plants',
    'treatment-equipment': 'Water Treatment Equipment',
    'filtration': 'Water Filtration Systems',
    'softening': 'Water Softening Systems',
    'pre-treatment': 'Pre-Treatment Equipment',
    'post-treatment': 'Post-Treatment Equipment',
    'accessories': 'Water Treatment Accessories',
  };

  let activeCategory = 'all';
  let searchQuery = '';
  let sortMode = 'featured';

  function getFilteredProducts() {
    let list = PRODUCTS.filter((item) => {
      const catMatch = activeCategory === 'all' || item.category === activeCategory;
      if (!catMatch) return false;
      if (!searchQuery) return true;
      const haystack = `${item.name} ${item.description} ${CATEGORY_LABELS[item.category] || ''} ${item.highlights.join(' ')}`.toLowerCase();
      return haystack.includes(searchQuery);
    });

    if (sortMode === 'az') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortMode === 'za') {
      list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortMode === 'category') {
      list = [...list].sort((a, b) => (CATEGORY_LABELS[a.category] || '').localeCompare(CATEGORY_LABELS[b.category] || ''));
    }

    return list;
  }

  function ensureProductModal() {
    let backdrop = document.getElementById('productDetailModal');
    if (backdrop) return backdrop;

    backdrop = document.createElement('div');
    backdrop.id = 'productDetailModal';
    backdrop.className = 'modal-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-labelledby', 'modalProductTitle');
    backdrop.innerHTML = `
      <div class="modal-panel">
        <button type="button" class="modal-close" aria-label="Close product details">&times;</button>
        <div class="split-layout" style="gap:24px;align-items:start">
          <div class="media-frame" style="border-radius:14px">
            <img id="modalProductImg" src="" alt="" style="aspect-ratio:4/3">
          </div>
          <div>
            <span id="modalProductCat" class="tag"></span>
            <h3 id="modalProductTitle" style="margin-top:12px"></h3>
            <p id="modalProductDesc" style="color:var(--text-muted);font-size:0.95rem"></p>
            <h4 style="font-size:0.9rem;margin:16px 0 8px">Key Configuration Notes</h4>
            <ul id="modalProductHighlights" class="feature-list" style="margin-bottom:20px"></ul>
            <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:18px">Exact sizing, capacities, and component specifications are confirmed upon water source assessment and consultation.</p>
            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <a id="modalEnquireBtn" href="contact.html" class="btn btn--primary">Enquire About This System</a>
              <a id="modalServiceBtn" href="service-details.html" class="btn btn--secondary">Related Service Info</a>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);

    const closeModal = () => {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    };

    backdrop.querySelector('.modal-close').addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
    });

    return backdrop;
  }

  function openProductModal(product) {
    const backdrop = ensureProductModal();
    backdrop.querySelector('#modalProductImg').src = product.image;
    backdrop.querySelector('#modalProductImg').alt = product.name;
    backdrop.querySelector('#modalProductCat').textContent = CATEGORY_LABELS[product.category] || product.category;
    backdrop.querySelector('#modalProductTitle').textContent = product.name;
    backdrop.querySelector('#modalProductDesc').textContent = product.description;

    const listEl = backdrop.querySelector('#modalProductHighlights');
    listEl.innerHTML = product.highlights
      .map((item) => `<li class="feature-item"><span class="feature-check">&#10003;</span><span>${item}</span></li>`)
      .join('');

    backdrop.querySelector('#modalEnquireBtn').href = `contact.html?enquiry=Product+Enquiry&product=${encodeURIComponent(product.name)}`;
    backdrop.querySelector('#modalServiceBtn').href = product.serviceLink;

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function renderProducts() {
    const grid = document.getElementById('productGrid');
    const countEl = document.getElementById('productCount');
    if (!grid) return;

    const filtered = getFilteredProducts();
    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} solutions`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <h3>No Matching Solutions Found</h3>
          <p style="color:var(--text-muted);max-width:44ch;margin:0 auto 18px">Try clearing your search term or switching back to all product categories, or contact our team directly for specific system requirements.</p>
          <button type="button" class="btn btn--secondary" id="resetFiltersBtn">Reset Filters</button>
        </div>
      `;
      grid.querySelector('#resetFiltersBtn')?.addEventListener('click', () => {
        activeCategory = 'all';
        searchQuery = '';
        sortMode = 'featured';
        const searchInput = document.getElementById('productSearch');
        const sortSelect = document.getElementById('productSort');
        if (searchInput) searchInput.value = '';
        if (sortSelect) sortSelect.value = 'featured';
        document.querySelectorAll('.filter-btn').forEach((btn) => {
          btn.classList.toggle('active', btn.dataset.category === 'all');
        });
        renderProducts();
      });
      return;
    }

    grid.innerHTML = filtered
      .map(
        (product) => `
      <article class="product-card reveal visible">
        <div class="product-card-media">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-card-body">
          <div><span class="tag">${CATEGORY_LABELS[product.category] || product.category}</span></div>
          <h3 class="product-card-name">${product.name}</h3>
          <p class="product-card-desc">${product.description}</p>
          <div class="product-card-highlights">
            ${product.highlights.map((h) => `<span class="tag tag--teal" style="font-size:0.7rem;padding:3px 9px">${h}</span>`).join('')}
          </div>
          <div class="product-card-actions">
            <button type="button" class="btn btn--secondary btn--sm" data-view-product="${product.id}">View Details</button>
            <a href="contact.html?enquiry=Product+Enquiry&product=${encodeURIComponent(product.name)}" class="btn btn--primary btn--sm">Enquire</a>
          </div>
        </div>
      </article>
    `
      )
      .join('');

    grid.querySelectorAll('[data-view-product]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const product = PRODUCTS.find((p) => p.id === btn.dataset.viewProduct);
        if (product) openProductModal(product);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const initialCat = params.get('category');
    if (initialCat && CATEGORY_LABELS[initialCat]) {
      activeCategory = initialCat;
      document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.category === initialCat);
      });
    }

    renderProducts();

    document.getElementById('productSearch')?.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderProducts();
    });

    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category || 'all';
        renderProducts();
      });
    });

    document.getElementById('productSort')?.addEventListener('change', (e) => {
      sortMode = e.target.value;
      renderProducts();
    });
  });
})();

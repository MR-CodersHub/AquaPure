/**
 * AquaPure — Form Validation, Prefill & Feedback Handlers (Vanilla ES6+)
 * Strictly identifies client-side interactions as front-end demonstrations.
 */

(() => {
  'use strict';

  const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  const isPhone = (val) => /^[+\d][\d\s\-()]{6,}$/.test(val.trim()) && val.replace(/\D/g, '').length >= 7;
  const notEmpty = (val) => val.trim().length > 0;

  function setFieldError(field, message) {
    if (!field) return;
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    const container = field.closest('.form-group') || field.parentElement;
    let err = container?.querySelector('.form-error-msg');
    if (!err && container) {
      err = document.createElement('span');
      err.className = 'form-error-msg';
      err.setAttribute('role', 'alert');
      container.appendChild(err);
    }
    if (err) {
      err.textContent = message;
      err.classList.add('show');
    }
  }

  function clearFieldError(field) {
    if (!field) return;
    field.classList.remove('error');
    field.removeAttribute('aria-invalid');
    const container = field.closest('.form-group') || field.parentElement;
    const err = container?.querySelector('.form-error-msg');
    if (err) {
      err.textContent = '';
      err.classList.remove('show');
    }
  }

  function validateField(field, validator, message) {
    if (!field) return true;
    if (!validator(field.value)) {
      setFieldError(field, message);
      return false;
    }
    clearFieldError(field);
    return true;
  }

  function prefillEnquiryFromUrl() {
    const enquiryForm = document.getElementById('enquiryForm');
    if (!enquiryForm) return;
    const params = new URLSearchParams(window.location.search);
    const enquiry = params.get('enquiry');
    const product = params.get('product');
    const customer = params.get('customer');

    if (enquiry) {
      const sel = enquiryForm.querySelector('#enquiryType');
      if (sel) {
        const match = Array.from(sel.options).find((opt) => opt.value.toLowerCase() === enquiry.toLowerCase());
        if (match) sel.value = match.value;
      }
    }
    if (product) {
      const input = enquiryForm.querySelector('#productInterest');
      if (input) input.value = product;
    }
    if (customer) {
      const sel = enquiryForm.querySelector('#customerType');
      if (sel) {
        const match = Array.from(sel.options).find((opt) => opt.value.toLowerCase() === customer.toLowerCase());
        if (match) sel.value = match.value;
      }
    }
  }

  function initEnquiryForm() {
    const form = document.getElementById('enquiryForm');
    if (!form) return;

    prefillEnquiryFromUrl();

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = form.querySelector('#fullName');
      const email = form.querySelector('#email');
      const phone = form.querySelector('#phone');
      const customerType = form.querySelector('#customerType');
      const enquiryType = form.querySelector('#enquiryType');
      const message = form.querySelector('#message');
      const statusBox = document.getElementById('enquiryStatusBanner');

      let ok = true;
      if (!validateField(fullName, notEmpty, 'Please enter your full name.')) ok = false;
      if (!validateField(email, isEmail, 'Please enter a valid email address.')) ok = false;
      if (!validateField(phone, isPhone, 'Please enter a valid phone number (at least 7 digits).')) ok = false;
      if (!validateField(customerType, notEmpty, 'Please select a customer type.')) ok = false;
      if (!validateField(enquiryType, notEmpty, 'Please choose an enquiry type.')) ok = false;
      if (!validateField(message, (v) => v.trim().length >= 10, 'Please describe your requirement (minimum 10 characters).')) ok = false;

      if (!ok) {
        if (statusBox) statusBox.classList.remove('show');
        window.showToast?.('Please review the highlighted fields before submitting.', 'error');
        return;
      }

      form.reset();
      if (statusBox) {
        statusBox.textContent = 'Enquiry details validated (front-end demonstration only — no enquiry is transmitted without a connected backend server).';
        statusBox.classList.add('show');
      }
      window.showToast?.('Enquiry validated (front-end demo — not transmitted).', 'success', 5500);
    });

    form.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('input', () => clearFieldError(field));
      field.addEventListener('change', () => clearFieldError(field));
    });
  }

  function initServiceRequestButtons() {
    document.querySelectorAll('[data-service-request]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const type = btn.dataset.serviceRequest;
        const select = document.getElementById('enquiryType');
        const section = document.getElementById('enquiry');
        if (select && type) {
          select.value = type;
          clearFieldError(select);
        }
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.showToast?.(`Enquiry form pre-selected for "${type}".`, 'info', 2800);
      });
    });
  }

  function initAuthForms() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('#loginEmail');
        const password = loginForm.querySelector('#loginPassword');
        const status = document.getElementById('loginStatusBanner');

        let ok = true;
        if (!validateField(email, isEmail, 'Please enter a valid email address.')) ok = false;
        if (!validateField(password, (v) => v.length >= 8, 'Password must be at least 8 characters.')) ok = false;
        if (!ok) return;

        if (status) {
          status.textContent = 'Sign-in fields validated. This interface is a front-end demonstration; no authentication backend is connected.';
          status.classList.add('show');
        }
        window.showToast?.('Front-end login demonstration validated — no account session created.', 'info', 5000);
      });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = registerForm.querySelector('#regFullName');
        const email = registerForm.querySelector('#regEmail');
        const phone = registerForm.querySelector('#regPhone');
        const password = registerForm.querySelector('#regPassword');
        const confirm = registerForm.querySelector('#regConfirmPassword');
        const terms = registerForm.querySelector('#regTerms');
        const status = document.getElementById('registerStatusBanner');

        let ok = true;
        if (!validateField(fullName, notEmpty, 'Please enter your full name.')) ok = false;
        if (!validateField(email, isEmail, 'Please enter a valid email address.')) ok = false;
        if (!validateField(phone, isPhone, 'Please enter a valid phone number.')) ok = false;
        if (!validateField(password, (v) => v.length >= 8, 'Password must be at least 8 characters.')) ok = false;
        if (!validateField(confirm, (v) => v === (password?.value || '') && v.length > 0, 'Passwords do not match.')) ok = false;
        if (terms && !terms.checked) {
          setFieldError(terms, 'Please confirm you understand this is a front-end demonstration.');
          ok = false;
        } else if (terms) {
          clearFieldError(terms);
        }

        if (!ok) {
          window.showToast?.('Please fix the highlighted registration fields.', 'error');
          return;
        }

        registerForm.reset();
        if (status) {
          status.textContent = 'Registration form validated. This is a front-end demonstration only — no customer account is created or stored.';
          status.classList.add('show');
        }
        window.showToast?.('Registration demo validated — no data stored.', 'info', 5000);
      });
    }

    const forgotForm = document.getElementById('forgotPasswordForm');
    if (forgotForm) {
      forgotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = forgotForm.querySelector('#forgotEmail');
        if (!validateField(email, isEmail, 'Please enter a valid email address.')) return;
        forgotForm.reset();
        window.showToast?.('Front-end demo: password reset emails are not transmitted without a backend.', 'info', 5000);
      });
    }
  }

  function initPasswordToggles() {
    const eyeIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></svg>';
    const eyeOffIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="currentColor" stroke-width="2"/><line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2"/></svg>';

    document.querySelectorAll('.password-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const input = btn.closest('.password-field')?.querySelector('input');
        if (!input) return;
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
        btn.innerHTML = show ? eyeOffIcon : eyeIcon;
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initEnquiryForm();
    initServiceRequestButtons();
    initAuthForms();
    initPasswordToggles();
  });
})();

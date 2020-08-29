import {
  HOME_VIEW,
  LEADS_VIEW,
  DEALS_VIEW,
  CONTACTS_VIEW,
  PRODUCTS_VIEW,
  DOCUMENTS_VIEW,
  REPORTS_VIEW
} from "./AllConstants.js";

export function homeView() {
  return {
    type: HOME_VIEW
  }
}

export function leadsView() {
  return {
    type: LEADS_VIEW
  }
}

export function dealsView() {
  return {
    type: DEALS_VIEW
  }
}

export function contactsView() {
  return {
    type: CONTACTS_VIEW
  }
}

export function productsView() {
  return {
    type: PRODUCTS_VIEW
  }
}

export function documentsView() {
  return {
    type: DOCUMENTS_VIEW
  }
}

export function reportsView() {
  return {
    type: REPORTS_VIEW
  }
}
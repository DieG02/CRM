import {
  HOME_VIEW,
  LEADS_VIEW,
  DEALS_VIEW,
  CONTACTS_VIEW,
  PRODUCTS_VIEW,
  DOCUMENTS_VIEW,
  REPORTS_VIEW
} from "../actions/AllConstants.js";

const initialState = {
  webRender: {
    title: 'Home',
    logo: {
      home: 'selected',
      leads: '',
      deals: '',
      contacts: '',
      products: '',
      documents: '',
      reports: '',
    }
  }
};


export default function web(state = initialState, action) {
  switch (action.type) {

    case HOME_VIEW:
      return {
        ...state,
        webRender: {
          title: 'Home',
          logo: {
            home: 'selected',
            leads: '',
            deals: '',
            contacts: '',
            products: '',
            documents: '',
            reports: '',
          }
        }
      };

    case LEADS_VIEW:
      return {
        ...state,
        webRender: {
          title: 'Leads',
          logo: {
            home: '',
            leads: 'selected',
            deals: '',
            contacts: '',
            products: '',
            documents: '',
            reports: '',
          }
        }
      };

    case DEALS_VIEW:
      return {
        ...state,
        webRender: {
          title: 'Deals',
          logo: {
            home: '',
            leads: '',
            deals: 'selected',
            contacts: '',
            products: '',
            documents: '',
            reports: '',
          }
        }
      };

    case CONTACTS_VIEW:
      return {
        ...state,
        webRender: {
          title: 'Contacts',
          logo: {
            home: '',
            leads: '',
            deals: '',
            contacts: 'selected',
            products: '',
            documents: '',
            reports: '',
          }
        }
      };

    case PRODUCTS_VIEW:
      return {
        ...state,
        webRender: {
          title: 'Products',
          logo: {
            home: '',
            leads: '',
            deals: '',
            contacts: '',
            products: 'selected',
            documents: '',
            reports: '',
          }
        }
      };

    case DOCUMENTS_VIEW:
      return {
        ...state,
        webRender: {
          title: 'Documents',
          logo: {
            home: '',
            leads: '',
            deals: '',
            contacts: '',
            products: '',
            documents: 'selected',
            reports: '',
          }
        }
      };

    case REPORTS_VIEW:
      return {
        ...state,
        webRender: {
          title: 'Reports',
          logo: {
            home: '',
            leads: '',
            deals: '',
            contacts: '',
            products: '',
            documents: '',
            reports: 'selected',
          }
        }
      };

    default:
      return state;
  }
}
      
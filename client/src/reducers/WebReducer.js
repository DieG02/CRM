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
    selected: 'home'
  }
};


export default function web(state = initialState, action) {
  switch (action.type) {

    case HOME_VIEW:
      return {
        ...state,
        title: 'Home',
        selected: 'home'
      };

    case LEADS_VIEW:
      return {
        ...state,
        title: 'Leads',
        selected: 'lead'
      };

    case DEALS_VIEW:
      return {
        ...state,
        title: 'Deals',
        selected: 'deal'
      };

    case CONTACTS_VIEW:
      return {
        ...state,
        title: 'Contacts',
        selected: 'contact'
      };

    case PRODUCTS_VIEW:
      return {
        ...state,
        title: 'Products',
        selected: 'product'
      };

    case DOCUMENTS_VIEW:
      return {
        ...state,
        title: 'Documents',
        selected: 'document'
      };

    case REPORTS_VIEW:
      return {
        ...state,
        title: 'Reports',
        selected: 'report'
      };

    default:
      return state;
  }
}
      
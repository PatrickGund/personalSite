/**
 * ACTION TYPES
 */
const ACTIVE_ITEM = 'ACTIVE_ITEM';

/**
 * INITIAL STATE
 */
const defaultActive = {};

/**
 * ACTION CREATORS
 */
const setActiveItem = item => ({ type: ACTIVE_ITEM, item });

/**
 * THUNKS
 */
export const setMenu = item => (dispatch) => {
  dispatch(setActiveItem(item));
};

/**
 * REDUCER
 */
export default function (state = defaultActive, action) {
  switch (action.type) {
    case ACTIVE_ITEM:
      return action.item;
    default:
      return state;
  }
}

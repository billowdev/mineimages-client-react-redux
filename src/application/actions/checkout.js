// =================== LOAD ORDER ===================
export const LOAD_CHECKOUT = "[CHECKOUT] LOAD";
export const LOAD_CHECKOUT_SUCCESS = "[CHECKOUT] LOAD SUCCESS";
export const LOAD_CHECKOUT_FAILED = "[CHECKOUT] LOAD FAILED";

export const loadCheckout = {
  type: LOAD_CHECKOUT,
};

export const loadCheckoutSuccess = (state) => ({
  type: LOAD_CHECKOUT_SUCCESS,
  payload: state,
});

export const loadCheckoutFailed = (error) => ({
  type: LOAD_CHECKOUT_FAILED,
  payload: error,
});

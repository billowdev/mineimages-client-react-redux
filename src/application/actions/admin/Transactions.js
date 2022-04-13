// ================================================================================//
//                                 transactions ACTION                                   //
// ================================================================================//
export const ADMIN_LOAD_Transactions = "[ADMIN.TRANSACTIONS] LOAD";
export const ADMIN_LOAD_Transactions_SUCCESS =
  "[ADMIN.TRANSACTIONS] LOAD SUCCESS";
export const ADMIN_LOAD_Transactions_FAILED =
  "[ADMIN.TRANSACTIONS] LOAD SUCCESS";

export const loadTransactions = (url) => ({
  type: ADMIN_LOAD_Transactions,
  payload: url,
});
export const loadTransactionsSuccess = (transaction) => ({
  type: ADMIN_LOAD_Transactions_SUCCESS,
  payload: transaction,
});

export const loadTransactionsFailed = (error) => ({
  type: ADMIN_LOAD_Transactions_FAILED,
  payload: error,
});

export const ADMIN_UPDATE_Transactions = "[TRANSACTIONS] UPDATE ";
export const ADMIN_UPDATE_Transactions_SUCCESS =
  "[TRANSACTIONS] UPDATE  SUCCESS";
export const ADMIN_UPDATE_Transactions_FAILED = "[TRANSACTIONS] UPDATE  FAILED";

export const updateTransactions = (transaction) => ({
  type: ADMIN_UPDATE_Transactions,
  payload: transaction,
});

export const updateTransactionsSuccess = (transaction) => ({
  type: ADMIN_UPDATE_Transactions_SUCCESS,
  payload: transaction,
});

export const updateTransactionsFailed = (error) => ({
  type: ADMIN_UPDATE_Transactions_FAILED,
  payload: error,
});

export const LOAD_ORDERS_ON_TRANSACTIONS =
  "[TRANSACTIONS] LOAD ON TRANSACTION STATUS ";
export const LOAD_ORDERS_ON_TRANSACTIONS_SUCCESS =
  "[TRANSACTIONS] LOAD ON TRANSACTION STATUS SUCCESS";
export const LOAD_ORDERS_ON_TRANSACTIONS_FAILED =
  "[TRANSACTIONS] LOAD ON TRANSACTION STATUS FAILED";

export const loadOrdersOnTransaction = (url) => ({
  type: LOAD_ORDERS_ON_TRANSACTIONS,
  payload: url,
});

export const loadOrdersOnTransactionSuccess = (transaction) => ({
  type: LOAD_ORDERS_ON_TRANSACTIONS_SUCCESS,
  payload: transaction,
});

export const loadOrdersOnTransactionFailed = (error) => ({
  type: LOAD_ORDERS_ON_TRANSACTIONS_FAILED,
  payload: error,
});


export const CONFIRM_TRANSACTION = "[TRANSACTIONS] CONFIRM ";
export const CONFIRM_TRANSACTION_SUCCESS =
  "[TRANSACTIONS] CONFIRM SUCCESS";
export const CONFIRM_TRANSACTION_FAILED = "[TRANSACTIONS] CONFIRM FAILED";

export const confirmTransactions = (id) => ({
  type: CONFIRM_TRANSACTION,
  payload: id,
});

export const confirmTransactionsSuccess = (transaction) => ({
  type: CONFIRM_TRANSACTION_SUCCESS,
  payload: transaction,
});

export const confirmTransactionsFailed = (error) => ({
  type: CONFIRM_TRANSACTION_FAILED,
  payload: error,
});
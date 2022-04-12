
// ================================================================================//
//                                 transactions ACTION                                   //
// ================================================================================//
export const ADMIN_LOAD_Transactions = "[ADMIN.TRANSACTIONS] LOAD";
export const ADMIN_LOAD_Transactions_SUCCESS = "[ADMIN.TRANSACTIONS] LOAD SUCCESS";
export const ADMIN_LOAD_Transactions_FAILED = "[ADMIN.TRANSACTIONS] LOAD SUCCESS";

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
export const ADMIN_UPDATE_Transactions_SUCCESS = "[TRANSACTIONS] UPDATE  SUCCESS";
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

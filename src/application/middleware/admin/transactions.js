import * as transactionActions from "../../actions/admin/transactions";
import * as uiActions from "../../actions/admin/ui";

const loadTransactionsFlow = 
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === transactionActions.LOAD_ORDERS_ON_TRANSACTIONS) {
      try {
        dispatch(uiActions.setLoading(true));
        const Orders = await api.admin.getOrdersOnTransactions(action.payload);
        dispatch(transactionActions.loadOrdersOnTransactionSuccess(Orders));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(transactionActions.loadOrdersOnTransactionFailed(err));
      }
    }
    if (action.type === transactionActions.CONFIRM_TRANSACTION) {
      try {
        dispatch(uiActions.setLoading(true));
        const confirm = await api.admin.confirmTransaction(action.payload);
        dispatch(transactionActions.confirmTransactionsSuccess(confirm));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(transactionActions.confirmTransactionsFailed(err));
      }
    }
    if (action.type === transactionActions.COMPLETED_TRANSACTION) {
      try {
        dispatch(uiActions.setLoading(true));
        const confirm = await api.admin.getCompletedTransactions(action.payload);
        dispatch(transactionActions.completedTransactionsSuccess(confirm));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(transactionActions.completedTransactionsFailed(err));
      }
    }
  };

export default [loadTransactionsFlow];

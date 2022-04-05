import * as imagesActions from "../../actions/admin/images";
import * as uiActions from "../../actions/admin/ui";

const loadImagesFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === imagesActions.ADMIN_LOAD_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.admin.getAll();
        dispatch(imagesActions.loadImagesSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(imagesActions.loadImagesFailed(err));
      }
    }
    if (action.type === imagesActions.ADMIN_INSERT_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.admin.createImages(action.payload);
        dispatch(imagesActions.InsertImagesSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(imagesActions.InsertImagesFailed(err));
      }
    }
  };

export default [loadImagesFlow];

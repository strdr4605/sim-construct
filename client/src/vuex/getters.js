export default {
  getAllCategoriesGetter (state) {
    return state.allCategories
  },
  getProductsGetter (state) {
    return state.allProducts
  },
  apiUrlGetter (state) {
    return state.apiUrl
  }
}

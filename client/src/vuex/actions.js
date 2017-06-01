import { getAllCategoriesService, findProductsByCategoryIdService, getAllProductsService } from '../api/services'

export default {
  async getAllCategoriesAction (context) {
    context.commit('setCategoriesMutation', await getAllCategoriesService())
  },
  async getAllProductsAction (context) {
    context.commit('setProductsMutation', await getAllProductsService())
  },
  async findProductsByCategoryIdAction (context, categoryId) {
    context.commit('setProductsMutation', await findProductsByCategoryIdService(categoryId))
  }
}

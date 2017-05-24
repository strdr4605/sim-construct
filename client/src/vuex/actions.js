import { getAllCategoriesService } from '../api/services'

export default {
  async getAllCategoriesAction (context) {
    context.commit('setCategoriesMutation', await getAllCategoriesService())
  }
}

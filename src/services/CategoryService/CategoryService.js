import { APIBASE_URL } from '../../config/Constant';

export default class CategoryService {

    static async getCategories() {
        return fetch(`${APIBASE_URL}/products/categories`)
            .then((res) => res.json())
    }

}
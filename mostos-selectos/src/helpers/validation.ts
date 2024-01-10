export interface CategoryData {
    name?: string;
    categoryId?: string
}
  
export interface CategoryErrors {
    name?: string;
    categoryId?: string
}

const validation = (categoryData: CategoryData): CategoryErrors =>{
    const errors: CategoryErrors = {};
    if (!categoryData.name) {
        errors.name = 'El nombre de la subcategoria es requerido.'
    }

    return errors;
}

export default validation
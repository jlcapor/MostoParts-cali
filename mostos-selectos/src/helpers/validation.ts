export interface CategoryData {
    title?: string;
    categoryId?: string
}
  
export interface CategoryErrors {
    title?: string;
    categoryId?: string
}

const validation = (categoryData: CategoryData): CategoryErrors =>{

    const errors: CategoryErrors = {};
    if (!categoryData.title) {
        errors.title = 'El nombre de la subcategoria es requerido.'
    }
    if (!categoryData.categoryId) {
        errors.categoryId = 'Seleccione una categoría.'
    }

    return errors;
}

export default validation
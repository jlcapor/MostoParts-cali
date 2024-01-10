import { Shell } from '@/components/shell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createCategory } from '@/lib/actions/category'
import AddCategoryForm from './AddCategoryForm'

const AddCategoryPage = () => {
  return (
    <Shell variant="sidebar">
        <Card
           as="section"
           id="new-category-page-form-container"
           aria-labelledby="new-category-page-form-heading"
        >
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Crear categoria</CardTitle>
            </CardHeader>
            <CardContent>
                <AddCategoryForm createCategory={createCategory}/>
            </CardContent>
        </Card>
  </Shell>
  )
}

export default AddCategoryPage

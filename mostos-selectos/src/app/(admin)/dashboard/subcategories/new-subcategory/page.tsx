import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import NewSubcategoryForm from './NewSubcategoryForm'
import { Shell } from '@/components/shell'
import { createSubcategory } from '@/lib/actions/subcategory'
import { fetchCategories } from '@/lib/data/getCategory'

const NewSubcategoryPage = async() => {
  const categories = await fetchCategories();
  return (
    <Shell variant="sidebar">
        <Card
           as="section"
           id="new-subcategory-page-form-container"
           aria-labelledby="new-subcategory-page-form-heading"
        >
        <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Crear subcategoria</CardTitle>
        </CardHeader>
        <CardContent>
            <NewSubcategoryForm categories={categories} createSubcategory={createSubcategory}/>
        </CardContent>
        </Card>
    </Shell>
    
  )
}

export default NewSubcategoryPage

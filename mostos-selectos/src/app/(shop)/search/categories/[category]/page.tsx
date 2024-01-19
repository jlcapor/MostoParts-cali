
interface CategoryPageProps {
    params: {
        category: string;
    }
}
export default  function CategoryPage({params}: CategoryPageProps){
    const {category} = params;
    
    return (
        <div>
            <h1>Category Page</h1>
        </div>
    )
}
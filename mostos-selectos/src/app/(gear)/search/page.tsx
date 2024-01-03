
export const runtime = 'edge';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage({searchParams}: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {

    const { sort, q: searchValue } = searchParams as { [key: string]: string };

    return (
        <div>ffffff</div>
    )

}
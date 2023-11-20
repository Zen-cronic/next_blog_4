'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';
import ListItem from '../components/ListItem';


//search results page

function SearchPage() {


  async function fetchPosts(url:string) {
    
    const response = await fetch(url)

    if(!response.ok){

      throw new Error("failed to aserach")
    }

    return response.json()
  }

  const search = useSearchParams()
  const searchQuery = search ?search.get('q'): null

  const encodedSearchQuery = encodeURI(searchQuery||"")

  const {data, isLoading} = useSWR(`/api/search?q=${encodedSearchQuery}`, fetchPosts,
    {revalidateOnFocus:false})

  console.log('data fetched from client: ', data)

  if(!data?.asyncRes){

      return null
    }

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <p className='mx-auto text-xl dark:text-white/75'>Search results for "{searchQuery}"</p>
      <ul className='w-full'>
        {data.asyncRes.map((post: BlogPost) => (
          
          // <li key={idx}>{post.title}</li>
          <ListItem post={post} key={post.id} />
        ))}

</ul>
    </section>
  );
}

export default SearchPage;

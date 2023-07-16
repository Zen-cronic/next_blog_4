import { getPost, getSortedPostsData } from "@/lib/posts";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
    
    const {searchParams} = new URL(req.url)

    const searchQuery = searchParams.get('q')

    if(!searchQuery)
        return

    const allFileNames = getSortedPostsData()
    
    
  
    //v1 with async filter

    const asyncFilter = async(arr: BlogPost[], predicate: (post: BlogPost) => Promise<boolean>)=> {

        const results = await  Promise.all(arr.map(predicate))

        return arr.filter((_v, index)=> results[index])
    }
    const asyncRes = await asyncFilter(allFileNames,async(post: BlogPost)=> {

        const postContent = await getPost(post.id)

        const {contentHtml} = postContent

        // const {contentHtml} = await getPost(post.id)

        return   ( post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) 
            
                    || contentHtml.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })

    console.log(asyncRes)
    return NextResponse.json({asyncRes})


    
}
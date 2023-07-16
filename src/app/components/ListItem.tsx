import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';
import React from 'react';

// Link href to each dynic pages
type Props= {

 post:BlogPost
}

// wrg if post w/o {}, Props is an obj type wiht post prop.
//{post} == an obj with post prop, whihc should be the same as the props of Props
function ListItem({post}: Props) {

  const{id, title, date, subtitle} = post
  const formattedDate = getFormattedDate(date)
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
        <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
        <br />
        <p className='text-md '>{subtitle}</p>
        <p className="text-sm mt-1">{formattedDate}</p>
    </li>
)
}

export default ListItem;

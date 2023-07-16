import Image from "next/image"

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
          {/* make img 600x600 px */}
            <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black 
               mx-auto mt-8 rounded-full"
               src={'/img/hypoImg.png'}
               alt="Z H"
               width={300}
               height={300}
            />
        </section>
    )
}
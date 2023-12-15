import Image from "next/image"

export default function MyProfilePic() {
    return (
        // w-full mx-auto
        <section className="w-full mx-auto p-4 ">
          {/* make image 600x600 px */}
            <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black 
               mx-auto mt-8 rounded-full"
               src={'/img/profile-pic-kzh.jpg'}
               alt="kaung zin hein"
               width={300}
               height={300}
            />
        </section>
    )
}
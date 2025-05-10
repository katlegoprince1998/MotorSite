import Image from "next/image";

const RightContent = () => {
    return (
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1592948708948-2f7141588b12?w=800&q=80"
                  alt="Racing Car"
                  width={480}
                  height={360}
                  className="rounded-xl shadow-2xl object-cover"
                  priority
                />
        </div>
            
    )
}

export default RightContent

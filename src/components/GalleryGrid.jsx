const GalleryGrid = () => {
  return (
    <>
     <div className=" bg-[url('https://i.pinimg.com/originals/80/eb/55/80eb55040287a9aad9aa160b8deafc57.jpg')] h-screen w-screen  bg-cover  bg-no-repeat   px-16 md:px-16 sm:px-16 xl:px-16 py-8  md:py-24 ">
        <div className="-m-1 flex flex-wrap md:-m-2 py-48 px-10 xl:mt-2 max-xl:px-12 max:py-4">
            <div className="flex w-1/3 py-8 flex-wrap">
                <div className="w-full p-2 md:p-2">
                    <img 
                     className=" transition duration-300 ease-out hover:scale-75  block h-full w-full rounded-lg object-cover object-center"
                     src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?cs=srgb&dl=pexels-catiamatos-1072179.jpg&fm=jpg"
                     alt="" />
                </div>
            </div>
            <div className="flex w-1/3 py-8 flex-wrap">
                <div className="w-full p-2 md:p-2">
                    <img 
                     className="transition duration-300 ease-out hover:scale-75 block h-full w-full rounded-lg object-cover object-center hover:"
                     src="https://media.istockphoto.com/id/1197239452/photo/fern-leaves-on-dark-background-in-jungle-dense-dark-green-fern-leaves-in-garden-at-night.webp?b=1&s=170667a&w=0&k=20&c=SYYBbtYaSl1gnv5kP6IFMeCjTMrh7-LuE6G4-UpEke8="
                     alt="" />
                </div>
            </div>
            <div className="flex w-1/3 py-8 flex-wrap">
                <div className="w-full p-2 md:p-2">
                    <img 
                     className="transition duration-300 ease-out hover:scale-75 block h-full w-full rounded-lg object-cover object-center"
                     src="https://media.istockphoto.com/id/915520716/photo/jungle-leaves-background.jpg?s=612x612&w=0&k=20&c=qREOTwHFIVqHOIQQ0ZfO5xZYROLZ9DSZlEiXisHd2ME="
                     alt="" />
                </div>
            </div>
            <div className="flex w-1/3 py-8 flex-wrap">
                <div className="w-full p-2 md:p-2">
                    <img 
                     className="transition duration-300 ease-out hover:scale-75 block h-full w-full rounded-lg object-cover object-center"
                     src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="" />
                </div>
            </div>
            <div className="flex w-1/3 py-8 flex-wrap">
                <div className="w-full p-2 md:p-2">
                    <img 
                     className="transition duration-300 ease-out hover:scale-75 block h-full w-full rounded-lg object-cover object-center"
                     src="https://wallpapercave.com/wp/wp6030756.jpg"
                     alt="" />
                </div>
            </div>
            <div className="flex w-1/3 py-8 flex-wrap">
                <div className="w-full p-2 md:p-2">
                    <img 
                     className="transition duration-300 ease-out hover:scale-75 block h-full w-full rounded-lg object-cover object-center hover:shadow-2xl"
                     src="https://img.freepik.com/premium-photo/leaves-spathiphyllum-cannifolium-abstract-green-dark-texture-nature-background-tropical-leaf_512343-69.jpg"
                     alt="" />
                </div>
            </div>
        </div>
     </div>
      
    </>
  )
}

export default GalleryGrid
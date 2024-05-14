import NavBar from "../components/NavBar";
import GalleryGrid from "../components/GalleryGrid";
const Gallery = () => {
  return (
    <>
      <div className="bg-[url('https://i.pinimg.com/originals/80/eb/55/80eb55040287a9aad9aa160b8deafc57.jpg')] h-screen w-screen bg-center bg-cover ">
        <NavBar />
         <div className="text-white text-center px-8 pt-96 font-mono font-thin text-2xl "> We take photos as a return ticket <br /> to a moment otherwise gone.
           </div>
      </div>
      <GalleryGrid />
    </>
  );
};
export default Gallery;



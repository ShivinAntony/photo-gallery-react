import NavBar from "../components/NavBar";

const HomeHero = () => {

  return (
    <>
      <div className=" bg-[url('https://rare-gallery.com/uploads/posts/5294873-plant-leaf-dark-light-frond-fern-green-nature-outdoors-landscape-tree-forest-leafe-darkness-free-images.jpg')]  h-screen w-screen bg-no-repeat bg-center bg-cover ">
        <NavBar />
        <div className="text-white text-center pt-96 font-mono font-extrabold text-4xl">
          If Not Now, When? <br />
          <p className="text-4xl  pt-4 font-mono font-bold ">My Gallery</p>
        </div>
      </div>
    </>
  );
};

export default HomeHero;

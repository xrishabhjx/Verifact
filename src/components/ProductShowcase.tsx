import Image from "next/image";
import appScreen from "../assets/images/test.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-10">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Intuitive interface</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-7">Navigate with ease using our intuitive interface, designed for simplicity and efficiency. Whether you're verifying news articles or analyzing social media posts, our user-friendly platform ensures a seamless experience. With clear visuals, straightforward navigation, and real-time updates, staying informed has never been this effortless.</p>
        </div>
        <div className="flex justify-center">
          <Image src={appScreen} width="950" height="950" alt="" className="mt-24" />
        </div>
      </div>
    </div>
  );
};

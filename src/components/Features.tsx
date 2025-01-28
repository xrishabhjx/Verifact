import { Feature } from "./Feature";

const features = [
  {
    title: "Real-Time Analysis",
    description:
      "Instantly scans and evaluates news articles, social media posts, and content to detect misinformation on the spot.",
  },
  {
    title: "Advanced AI-Powered Detection",
    description:
      "Utilizes cutting-edge machine learning and natural language processing to identify fake news with high accuracy.",
  },
  {
    title: "Credibility Scoring",
    description:
      "Provides a reliability score for news sources, helping you gauge the trustworthiness of the content before sharing it.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Why Choose Our Fake News Detector?</h2>
        <div className='max-w-xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>Our real-time fake news detector is designed to empower you with accurate and reliable information at your fingertips. With advanced AI algorithms, it scans and evaluates news content instantly, identifying misinformation and ensuring you stay informed with verified facts. Whether you're a journalist, researcher, or everyday reader, our platform provides transparency, credibility, and confidence in what you read and share.</p>
        </div>
        <div className='mt-16 flex flex-col gap-4 sm:flex-row'>
          {features.map(({ title,description })=>(
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

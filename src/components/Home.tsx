import React from 'react';



const Home: React.FC = () => {
  return (
    <section id="home-section" className="py-20 text-center min-h-screen overflow-y-auto" style={{ paddingTop: '300px' }}>
    <div className="home-content pt-24 px-8 lg:px-64 text-white text-lg">
      <h2 className="text-5xl font-bold mb-3">Matthew Darabasz</h2>
      <div className="flex justify-center">
          <div className="border-b-2 border-customTextColorHome w-1/5"></div>
      </div>
      <p className="text-customTextColorHome mt-2 font-bold">Software Developer</p>
    </div>
  </section>
  );
}

export default Home;
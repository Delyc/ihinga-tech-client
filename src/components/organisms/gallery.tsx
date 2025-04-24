import Image from "next/image";

export const Gallery = () => {
  const images = [
    "/assets/pig.jpeg",
    "/assets/pig1.jpeg",
    "/assets/pig2.jpeg",
    "/assets/pig3.jpeg",
    "/assets/pig4.jpeg",
 
  ];

  return (
    <section id="gallery" className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Our Farm in Pictures</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Take a peek into our daily life raising happy, healthy pigs.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image
              src={src}
              alt={`Farm photo ${index + 1}`}
              width={500}
              height={300}
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

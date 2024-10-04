

const ImageSection = () => {
  return (
    <section className="py-12 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Our Products</h2>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8">
        <img src="https://via.placeholder.com/150" alt="Product 1" className="rounded-lg w-32 sm:w-40 md:w-48" />
        <img src="https://via.placeholder.com/150" alt="Product 2" className="rounded-lg w-32 sm:w-40 md:w-48" />
        <img src="https://via.placeholder.com/150" alt="Product 3" className="rounded-lg w-32 sm:w-40 md:w-48" />
      </div>
    </section>
  );
};

export default ImageSection;

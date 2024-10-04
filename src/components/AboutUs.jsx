

const AboutUs = () => {
  return (
    <div className="py-12 px-4 sm:px-8 flex flex-col">
      <h2 className="text-2xl sm:text-3xl font-bold">About Us</h2>
      <div className="mt-8 max-w-lg flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
        <img src="https://via.placeholder.com/150" alt="Owner" className="rounded-full w-32 sm:w-40 md:w-48" />
        <div className="text-left sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Sabbir Hassan</h3>
          <p className="mt-4 text-base sm:text-lg">I am the owner of this website, with a passion for delivering quality products to our customers.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
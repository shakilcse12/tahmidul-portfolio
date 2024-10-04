

const ContactUs = () => {
  return (
    <section className="py-12 px-4 sm:px-8 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Contact Us</h2>
      <div className="mt-8 max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold">Name</label>
            <input type="text" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-bold">Email</label>
            <input type="email" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-bold">Message</label>
            <textarea className="w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

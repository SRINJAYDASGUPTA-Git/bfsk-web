function ContactPage() {
    return (
      <div className="container mx-auto px-4 pt-16 pb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact details */}
          <div className="space-y-4">
            <p className="font-medium text-gray-700">Phone:</p>
            <a href="tel:+919007750707" className="text-blue-500 hover:underline">+91 9007750707</a>
            <p className="font-medium text-gray-700">Email:</p>
            <a href="mailto:bfskhq@gmail.com" className="text-blue-500 hover:underline">bfskhq@gmail.com</a>
          </div>
          {/* Contact form */}
          <form className="md:mt-0 mt-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-md font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-width-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-width-1 w-full"
              />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-md font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-width-1 w-full"
                ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ContactPage;
  
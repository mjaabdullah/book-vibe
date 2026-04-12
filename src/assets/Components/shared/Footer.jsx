const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="border-t border-base-200 py-6 bg-gray-800  mt-8">
        <div className="max-w-7xl mx-auto flex flex-col">
          <p className="text-center text-lg text-gray-300">
            &copy; {currentYear} BookVibe. All rights reserved.
          </p>
        </div>
      </footer>
    );
};

export default Footer;

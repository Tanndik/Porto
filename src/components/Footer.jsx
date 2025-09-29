const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-7">
        {/* Kelas hover ditambahkan di sini */}
        <a 
          href="#homepage" 
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          Homepage
        </a>
        <a 
          href="#about" 
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          About
        </a>
        <a 
          href="#project" 
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          Project
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Tanndik" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
            <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/tanndik/" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
            <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/sultan-andika-3baa962b2/" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
            <i className="ri-linkedin-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
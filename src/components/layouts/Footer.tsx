export default function Footer() {
  return (
    <footer className="bg-[#F9E0AE] text-gray-800 py-10">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col items-start">
          <img src="/images/logo.webp" alt="Educare logo" className="w-24 mb-2" />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Follow us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1">
            <li><a href="#">Our Projects</a></li>
            <li><a href="#">FAQ’s</a></li>
            <li><a href="#">News and Updates</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contacts</h3>
          <p>Address : 4-5 Main road, Delhi</p>
          <p>Email : educare@gmail.com</p>
          <p>Phone Number : +91 4533433265</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm flex justify-center items-center gap-1">
        <span>&copy;</span> All Copyrights reserved
      </div>
    </footer>
  );
}
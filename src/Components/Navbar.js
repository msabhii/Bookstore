import libray_img from "../images/library-img.jpg";

function Navbar() {
  return (
    <div>
      <div className="w-screen h-96 mt-2  mr-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <img
          className="w-full h-full object-cover rounded-sm opacity-50"
          src={libray_img}
          alt=""
        />
      </div>
    </div>
  );
}
export default Navbar;

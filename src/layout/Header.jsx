import "../assets/Home.css";
function Header() {
  return (
    <div className="h-[80px] flex items-center justify-center">
      <div className="h-[60px] w-[700px] flex items-center justify-between bg-white rounded-xl">
        <div className="m-5">Logo</div>
        <div>
          <ul className=" flex justify-between cursor-pointer w-[300px] m-[60px]">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Works</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

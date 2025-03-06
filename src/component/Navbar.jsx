import { Link } from "react-router-dom";

const Navbar = () => {
  const hoverStyle = "font-normal hover:text-white hover:underline";
  return (
    <nav className='flex justify-between p-5 px-p text-2xl bg-gray400 text-gray100'>
      <Link className={hoverStyle}>MJ's portfolio</Link>
      <div className='flex gap-5'>
        <Link to={"/profile"} className={hoverStyle}>
          about me
        </Link>
        <Link to={"/profile"} className={hoverStyle}>
          portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

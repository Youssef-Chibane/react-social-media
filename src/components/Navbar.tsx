import { useState } from "react";
import { Link } from "react-router";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div>
        <div>
          <Link to={"/"}>
            Social<span>.media</span>
          </Link>

          {/* desktop links */}
          <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/create"}>Create Post</Link>
            <Link to={"/communities"}>Communities</Link>
            <Link to={"/community/create"}>Create Community</Link>
          </div>

          {/* mobile menu */}
          <div>
            <button onClick={() => setMenuOpen((prev) => !prev)}>open</button>
          </div>

          {/* mobile menu */}
          {menuOpen && (
            <div>
              <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/create"}>Create Post</Link>
                <Link to={"/communities"}>Communities</Link>
                <Link to={"/community/create"}>Create Community</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

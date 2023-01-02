import { usePage } from "~/contexts/PageContext";

import Link from "~/components/Link";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header(props) {
  const { isHeaderFixed } = usePage();
  return (
    <header {...(isHeaderFixed && { className: "fixed" })} {...props}>
      <div className="container">
        <Link to="/" aria-label="Pico CSS homepage">
          <Logo />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

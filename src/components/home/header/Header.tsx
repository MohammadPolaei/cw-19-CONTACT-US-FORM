import { useState } from "react";
import { navbarLinks } from "../../../utils/navbarLink";
import Navbar from "./Navbar";
import HamburgerMenu from "./hamburgerMenu";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleClick() {
		setIsMenuOpen(!isMenuOpen);
	}
	return (
		<header className="flex justify-between gap-5 items-center bg-[#f9f9f9] py-5 px-5 lg:px-40 relative h-20">
			<div className="absolute font-bold text-[#aaaaaa] text-2xl">LOGO</div>
			<Navbar />
			<HamburgerMenu onclick={handleClick} />
			{isMenuOpen && (
				<div className="lg:hidden flex flex-col gap-2 items-end absolute right-0 top-20 bg-[#f9f9f9] p-10 rounded-sm text-[#0008]">
					{navbarLinks.map((item) => (
						<a href={item.href}>{item.title}</a>
					))}
				</div>
			)}
		</header>
	);
}

export default Header;

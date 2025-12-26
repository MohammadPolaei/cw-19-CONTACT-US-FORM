import { navbarLinks } from "../../../utils/navbarLink";

function Navbar() {
	return (
		<nav
			className={`hidden lg:flex flex-2 justify-center gap-5 items-center text-sm text-[#888] font-semibold`}
		>
			{navbarLinks.map((items) => {
				return (
					<a
						href={items.href}
						className="py-3 box-border hover:border-b-3 hover:border-[#619d79]"
					>
						{items.title}
					</a>
				);
			})}
		</nav>
	);
}

export default Navbar;

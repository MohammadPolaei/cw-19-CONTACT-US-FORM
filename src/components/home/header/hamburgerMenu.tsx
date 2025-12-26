type buttonProps = {
	onclick: () => void;
};

function HamburgerMenu({ onclick }: buttonProps) {
	return (
		<button
			className="flex lg:hidden flex-col items-center gap-1 absolute right-5 top-8"
			onClick={onclick}
		>
			<span className="w-5 h-0.5 bg-[#000a]"></span>
			<span className="w-5 h-0.5 bg-[#000a]"></span>
			<span className="w-5 h-0.5 bg-[#000a]"></span>
		</button>
	);
}

export default HamburgerMenu;

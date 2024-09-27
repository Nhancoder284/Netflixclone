import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search, Home, Tv } from "lucide-react"; // Import thêm Home và Tv
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { user, logout } = useAuthStore();

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	const { setContentType } = useContentStore();

	return (
		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
			<div className='flex items-center gap-10 z-50'>
				<Link to='/' className='ml-400'> {/* Đẩy logo sát trái */}
					<img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-40' />
				</Link>

				{/* desktop navbar items */}
				<div className='hidden sm:flex gap-8 items-center'> {/* Tăng khoảng cách giữa các Link */}
					<Link to='/' className='hover:underline flex items-center gap-1 text-xl' onClick={() => setContentType("movie")}> {/* Tăng kích thước */}
						<Home className='w-6 h-6' /> {/* Icon ngôi nhà */}
						Trang chủ
					</Link>
					<Link to='/' className='hover:underline flex items-center gap-1 text-xl' onClick={() => setContentType("tv")}> {/* Tăng kích thước */}
						<Tv className='w-6 h-6' /> {/* Icon tivi */}
						Truyền hình
					</Link>
					<Link to='/history' className='hover:underline text-xl'> {/* Tăng kích thước */}
						Search History
					</Link>
				</div>
			</div>

			<div className='flex gap-4 items-center z-50'> {/* Tăng khoảng cách giữa các icon */}
				<Link to={"/search"}>
					<Search className='size-6 cursor-pointer' />
				</Link>
				<img src={user.image} alt='Avatar' className='h-10 rounded cursor-pointer' /> {/* Tăng kích thước Avatar */}
				<LogOut className='size-6 cursor-pointer' onClick={logout} />
				<div className='sm:hidden'>
					<Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
				</div>
			</div>

			{/* mobile navbar items */}
			{isMobileMenuOpen && (
				<div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
					<Link to={"/"} className='block hover:underline p-2 flex items-center gap-1 text-lg' onClick={toggleMobileMenu}> {/* Tăng kích thước */}
						<Home className='w-5 h-5' /> {/* Icon ngôi nhà */}
						Movies
					</Link>
					<Link to={"/"} className='block hover:underline p-2 flex items-center gap-1 text-lg' onClick={toggleMobileMenu}> {/* Tăng kích thước */}
						<Tv className='w-5 h-5' /> {/* Icon tivi */}
						Tv Shows
					</Link>
					<Link to={"/history"} className='block hover:underline p-2 text-lg' onClick={toggleMobileMenu}> {/* Tăng kích thước */}
						Search History
					</Link>
				</div>
			)}
		</header>
	);
};
export default Navbar;

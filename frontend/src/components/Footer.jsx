import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaEnvelope,
	FaGithub,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="fixed bottom-0 left-0 w-full bg-base-300 text-base-content py-2 shadow-md">
			<div className="container mx-auto flex justify-around items-center px-0">
				<p className="text-sm">
					Made by Hazem Abdullah, © {new Date().getFullYear()} H-Chat App
				</p>
				<div className="flex space-x-4">
					<a
						href="https://www.facebook.com/hazem.gaballa.9"
						target="_blank"
						rel="noreferrer">
						<FaFacebook className="text-2xl hover:text-blue-500 transition-colors" />
					</a>
					<a href="https://x.com/haz_man_twit" target="_blank" rel="noreferrer">
						<FaTwitter className="text-2xl hover:text-sky-400 transition-colors" />
					</a>
					<a
						href="https://www.instagram.com/hazemjaba244/"
						target="_blank"
						rel="noreferrer">
						<FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
					</a>
					<a href="mailto:hjaballah244@gmail.com" target="_blank">
						<FaEnvelope className="text-2xl hover:text-red-500 transition-colors" />
					</a>
					<a
						href="https://github.com/Ibn-Abdullah"
						target="_blank"
						rel="noreferrer">
						<FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

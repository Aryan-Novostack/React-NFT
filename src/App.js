import './App.css';
import Slider from "./components/slider";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RxPinTop } from "react-icons/rx";

function App() {
  let slides = [
    "https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_25.jpeg",
    "https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_24.jpeg",
	"https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_23.jpeg"
  ];
		



	
  return (
    <>
    <div className="sticky z-30 top-0">
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-white"></div>
			<div className="relative px-[15px] flex justify-between items-center">
				<a href="index.html">
					<img className="" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/logo.svg" alt="" />
				</a>
				<div className="flex items-center gap-[50px]">
					<form className="hidden xl:block relative">
						<div className="absolute top-0 right-0 bottom-0 left-0 border-[1px] border-[#3F5EFB] border-opacity-30 rounded-full"></div>
						<div className="relative flex justify-between">
							<input className="h-[42px] px-[20px] bg-transparent focus:outline-none" type="text" placeholder="Search" />
							<button className="px-[15px]">
								<img className="" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/search.svg" alt="" />
							</button>
						</div>
					</form>
					<div className="hidden xl:flex gap-[20px] text-white">
						<div className="group relative">
							<div className="h-[90px] flex items-center gap-[5px] text-[#110d2e]">
								<div className="group-hover:text-[#3772ff]">Home</div>
								<div className="opacity-50 text-[12px]">
									<i className="fa fa-angle-down"></i>
								</div>
							</div>
							<div className="absolute right-0 w-[230px] group-[:not(:hover)]:invisible group-[:not(:hover)]:opacity-0 transition-all duration-[.3s]">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e]"></div>
								<div className="relative bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] h-[2px]"></div>
								<div className="relative flex flex-col">
									<a className="group/c relative overflow-hidden" href="index.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Home Style One</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Home Style One</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="index2.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Home Style Two</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Home Style Two</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="index3.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Home Style Three</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Home Style Three</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="index4.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Home Style Four</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Home Style Four</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="index5.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Home Style Five</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Home Style Five</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
								</div>
								<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
							</div>
						</div>
						<div className="group relative">
							<div className="h-[90px] flex items-center gap-[5px] text-[#110d2e]">
								<div className="group-hover:text-[#3772ff]">Explore</div>
								<div className="opacity-50 text-[12px]">
									<i className="fa fa-angle-down"></i>
								</div>
							</div>
							<div className="absolute right-0 w-[230px] group-[:not(:hover)]:invisible group-[:not(:hover)]:opacity-0 transition-all duration-[.3s]">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e]"></div>
								<div className="relative bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] h-[2px]"></div>
								<div className="relative flex flex-col">
									<a className="group/c relative overflow-hidden" href="explore1.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Explore Style One</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Explore Style One</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="explore2.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Explore Style Two</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Explore Style Two</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="explore-details.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Explore Details</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Explore Details</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="live.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Live Auction</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Live Auction</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="collections.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Collections</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Collections</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="collection-details.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Collection Details</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Collection Details</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
								</div>
								<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
							</div>
						</div>
						<div className="group relative">
							<div className="h-[90px] flex items-center gap-[5px] text-[#110d2e]">
								<div className="group-hover:text-[#3772ff]">Blog</div>
								<div className="opacity-50 text-[12px]">
									<i className="fa fa-angle-down"></i>
								</div>
							</div>
							<div className="absolute right-0 w-[230px] group-[:not(:hover)]:invisible group-[:not(:hover)]:opacity-0 transition-all duration-[.3s]">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e]"></div>
								<div className="relative bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] h-[2px]"></div>
								<div className="relative flex flex-col">
									<a className="group/c relative overflow-hidden" href="blog.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Blog Style One</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Blog Style One</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="blog2.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Blog Style Two</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Blog Style Two</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="blog-details.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Blog Details</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Blog Details</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
								</div>
								<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
							</div>
						</div>
						<div className="group relative">
							<div className="h-[90px] flex items-center gap-[5px] text-[#110d2e]">
								<div className="group-hover:text-[#3772ff]">How It Works</div>
								<div className="opacity-50 text-[12px]">
									<i className="fa fa-angle-down"></i>
								</div>
							</div>
							<div className="absolute right-0 w-[230px] group-[:not(:hover)]:invisible group-[:not(:hover)]:opacity-0 transition-all duration-[.3s]">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e]"></div>
								<div className="relative bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] h-[2px]"></div>
								<div className="relative flex flex-col">
									<a className="group/c relative overflow-hidden" href="help.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Help Center</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Help Center</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="help-category.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Help Center Category</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Help Center Category</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="help-details.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Help Center Details</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Help Center Details</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="terms.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Terms &amp; Conditions</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Terms &amp; Conditions</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="privacy.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Private Policy</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Private Policy</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="faqs.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">FAQs</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">FAQs</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
								</div>
								<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
							</div>
						</div>
						<div className="group relative">
							<div className="h-[90px] flex items-center gap-[5px] text-[#110d2e]">
								<div className="group-hover:text-[#3772ff]">Pages</div>
								<div className="opacity-50 text-[12px]">
									<i className="fa fa-angle-down"></i>
								</div>
							</div>
							<div className="absolute right-0 w-[230px] group-[:not(:hover)]:invisible group-[:not(:hover)]:opacity-0 transition-all duration-[.3s]">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e]"></div>
								<div className="relative bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] h-[2px]"></div>
								<div className="relative flex flex-col">
									<a className="group/c relative overflow-hidden" href="about.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">About Us</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">About Us</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="contact.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Contact Us</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Contact Us</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="404.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">404 Error</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">404 Error</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="login.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Sign In</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Sign In</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="register.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Register</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Register</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="forgot.html">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="px-[30px] py-[15px]">
											<div className="relative">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Forget Password</div>
												<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Forget Password</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
								</div>
								<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-[15px]">
						<div className="hidden md:block group relative">
							<div className="flex items-center h-[90px]">
								<a className="relative flex items-center justify-center w-[44px] h-[44px]" href="#">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover:rotate-180 group-hover:scale-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-[-3px] right-[-3px] bg-[#FF4E4E] rounded-full w-[18px] h-[18px] text-[12px] flex items-center justify-center">8</div>
									<div className="relative">
										<img className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/bell.svg" alt="" />
										<img className="group-hover:scale-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/bell.svg" alt="" />
									</div>
								</a>
							</div>
							<div className="absolute right-0 w-[320px] group-[:not(:hover)]:invisible group-[:not(:hover)]:opacity-0 transition-all duration-[.3s]">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e]"></div>
								<div className="relative bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] h-[2px]"></div>
								<div className="relative flex flex-col">
									<div className="p-[20px] flex gap-[10px]">
										<div className="">
											<i className="fa-solid fa-volume-xmark"></i>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="text-[#FC466B] text-[18px] font-bold">Muted</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="">
											<i className="fa-regular fa-bell-slash"></i>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="text-[#FC466B] text-[18px] font-bold">Notifications</div>
									</div>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="#">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="p-[20px]">
											<div className="flex items-center gap-[15px] relative">
												<div className="">
													<img className="rounded" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/notificaiton_1.jpeg" alt="" />
												</div>
												<div className="">
													<div className="group-hover/c:text-[#3772ff] transition-all duration-[.3s]">@mark joshef purchased</div>
													<div className="group-hover/c:text-white transition-all duration-[.3s]">Digital NFT Art</div>
												</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="#">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="p-[20px]">
											<div className="flex items-center gap-[15px] relative">
												<div className="">
													<img className="rounded" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/notificaiton_2.jpeg" alt="" />
												</div>
												<div className="">
													<div className="group-hover/c:text-[#3772ff] transition-all duration-[.3s]">@ellen capaso commented</div>
													<div className="group-hover/c:text-white transition-all duration-[.3s]">Digital NFT Art</div>
												</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="#">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="p-[20px]">
											<div className="flex items-center gap-[15px] relative">
												<div className="">
													<img className="rounded" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/notificaiton_3.jpeg" alt="" />
												</div>
												<div className="">
													<div className="group-hover/c:text-[#3772ff] transition-all duration-[.3s]">@mark jos just share</div>
													<div className="group-hover/c:text-white transition-all duration-[.3s]">Digital NFT Art</div>
												</div>
											</div>
										</div>
									</a>
									<div className="mt-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<a className="group/c relative overflow-hidden" href="#">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="relative py-[10px] px-[20px]">
											<div className="flex items-center justify-between">
												<div className="text-white">VIEW MORE</div>
												<img className="" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/view-more.svg" alt="" />
											</div>
										</div>
									</a>
								</div>
								<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
							</div>
						</div>
						<div className="group relative">
							<div className="flex items-center h-[90px]">
								<a className="relative flex items-center justify-center w-[44px] h-[44px]" href="#">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover:rotate-180 group-hover:scale-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="relative">
										<img className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/user.svg" alt="" />
										<img className="group-hover:scale-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/user.svg" alt="" />
									</div>
								</a>
							</div>
							<div className="absolute right-0 w-[250px] group-[:not(:hover)]:invisible group-[:not(:hover)]:opacity-0 transition-all duration-[.3s]">
								<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e]"></div>
								<div className="relative bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] h-[2px]"></div>
								<div className="relative flex flex-col">
									<a className="group/c relative overflow-hidden" href="#">
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
										<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
										<div className="p-[20px]">
											<div className="flex items-center gap-[15px] relative">
												<div className="">
													<img className="rounded" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/notificaiton_2.jpeg" alt="" />
												</div>
												<div className="">
													<div className="text-white">Thomas G. Smith</div>
													<div className="text-[#3772ff] text-[18px] font-bold">13.45 ETH</div>
												</div>
											</div>
										</div>
									</a>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex">
										<div className="flex-1 flex flex-col">
											<a className="group/c relative overflow-hidden" href="profile.html">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="px-[30px] py-[15px]">
													<div className="relative">
														<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">My Profile</div>
														<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">My Profile</div>
													</div>
												</div>
											</a>
											<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<a className="group/c relative overflow-hidden" href="user-items.html">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="px-[30px] py-[15px]">
													<div className="relative">
														<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">My Item</div>
														<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">My Item</div>
													</div>
												</div>
											</a>
											<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<a className="group/c relative overflow-hidden" href="wallet.html">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="px-[30px] py-[15px]">
													<div className="relative">
														<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">My Wallet</div>
														<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">My Wallet</div>
													</div>
												</div>
											</a>
											<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<a className="group/c relative overflow-hidden" href="settings.html">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="px-[30px] py-[15px]">
													<div className="relative">
														<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Settings</div>
														<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Settings</div>
													</div>
												</div>
											</a>
											<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<a className="group/c relative overflow-hidden" href="#">
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#FC466B] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.05s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.15s] transition-all duration-[.3s]"></div>
												<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="px-[30px] py-[15px]">
													<div className="relative">
														<div className="origin-top absolute top-0 right-0 bottom-0 left-0 text-[#3772ff] group-[:not(:hover)]/c:-skew-y-12 group-[:not(:hover)]/c:scale-y-0 group-[:not(:hover)]/c:delay-0 delay-[.25s] transition-all duration-[.3s]">Logout</div>
														<div className="origin-bottom group-[:not(:hover)]:scale-y-0 group-hover/c:scale-y-0 group-hover/c:delay-0 delay-0 transition-all duration-[.3s]">Logout</div>
													</div>
												</div>
											</a>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<a className="w-[80px] p-[20px] flex flex-col items-center gap-[10px]" href="#">
											<div className="italic leading-[.9] text-center">
												<div className="">1B</div>
												<div className="">Ak</div>
												<div className="">Zn</div>
												<div className="">7L</div>
												<div className="">rU</div>
												<div className="">43</div>
												<div className="">oK</div>
												<div className="">8J</div>
												<div className="">vA</div>
												<div className="">iR</div>
												<div className="">cR</div>
											</div>
											<div className="py-[10px] border-l-[1px] border-l-white"></div>
											<div className="text-white">
												<i className="fa-regular fa-copy"></i>
											</div>
										</a>
									</div>
									<div className="border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
								</div>
								<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
								<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
							</div>
						</div>
						<a className="group relative flex xl:hidden items-center justify-center w-[44px] h-[44px] rounded-full overflow-hidden" data-c-toggle="c-active" href="#offcanvas">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="">
								<div className="relative">
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">
										<i className="fa-solid fa-bars"></i>
									</div>
									<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">
										<i className="fa-solid fa-bars"></i>
									</div>
								</div>
							</div>
						</a>
						<a className="group relative hidden md:flex items-center justify-center h-[44px] rounded-full overflow-hidden" href="#">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="px-[30px] text-white">
								<div className="relative">
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">Connect Wallet</div>
									<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">Connect Wallet</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>




		<div>


			<div>

			<div data-scroll-item="" className="group c-active">
								<div className="text-[#110d2e] text-[27px] md:text-[60px] leading-[1.2] font-bold mt-[200px] ml-[100px]">
									<div className="">The Best Beneficial Place</div>
									<div className="flex">
										<div className="">to Collect</div>
										<div className="">,&nbsp;</div>
										<div className="flex">
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">B</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">B</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">B</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">B</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">B</div>
                                        </div>
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">u</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">u</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">u</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">u</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">u</div>
                                        </div>
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">y</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">y</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">y</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">y</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">y</div>
                                        </div>
											<div className="">&nbsp;</div>
											<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">a</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">a</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">a</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">a</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">a</div>
                                        </div>
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">n</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">n</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">n</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">n</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">n</div>
                                        </div>
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">d</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">d</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">d</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">d</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">d</div>
                                        </div>
											<div className="">&nbsp;</div>
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">S</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">S</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">S</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">S</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">S</div>
                                        </div>
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                        </div>
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                        </div>
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                        </div>
										</div>
									</div>
									<div className="flex">
										<div className="flex">
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">N</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">N</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">N</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">N</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">N</div>
                                        </div>
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">F</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">F</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">F</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">F</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">F</div>
                                        </div>
										<div className="group relative">
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">T</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">T</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">T</div>
                                            <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">T</div>
                                            <div className="origin-top [-webkit-text-stroke:1px_#FC466B] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">T</div>
                                        </div>
										</div>
										<div className="">&nbsp;</div>
										<div className="">Marketplace</div>
									</div>
								</div>
							</div>

			

						<div className="flex ml-[60px] mt-[30px]">
							<a className="group relative hidden md:flex items-center justify-center h-[44px] w-[100px] ml-[40px] rounded-full overflow-hidden" href="#">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="px-[30px] text-white">
								<div className="relative">
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">Explore</div>
									<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">Explore</div>
								</div>
							</div>
						    </a>
						
						    <a className="group relative hidden md:flex items-center justify-center h-[44px] w-[100px]  ml-[20px]  rounded-full overflow-hidden" href="#">
							  <div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#000000] rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
							  <div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
							  <div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
							  <div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
							  <div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
							  <div className="px-[30px] text-white">
								<div className="relative">
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">Create</div>
									<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">Create</div>
								</div>
							  </div>
						    </a>

							<div className="ml-[10px] text-[#110d2e]">
								<div className="">Secure and secret NFTs for gaming, entertainment metaverse</div>
								<div className="">and data management time capsules.</div>
							</div>


						</div>

						
						<div className="w-[40%]  pt-11 m-auto flex justify-end">
				        <div className=" pt-11 m-auto flex justify-end">
			              <Slider slides = {slides} />
		                </div>
			            </div>



						

			</div>


			



           

		</div>




		<div className="relative mt-[50px]">
			<img className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home2/hero_bg3.jpeg" alt="" />
			<div className="hidden md:block absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] bg-opacity-30"></div>
			<div className="relative max-w-[1320px] mx-auto px-[15px]">
				<div className="text-[40px] xl:text-[60px] leading-[1] font-bold hidden md:flex justify-center items-end gap-[30px]">
					<div className="flex flex-col items-center">
						<div className="w-[10px] pt-[150px] border-r-[1px] border-l-[1px] border-[#3F5EFB] border-opacity-50"></div>
						<div className="">
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
							<div className="py-[10px]"></div>
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
						</div>
						<div className="pt-[10px]"></div>
					</div>
					<div data-scroll="[data-scroll-item]" className="overflow-hidden">
						<div data-scroll-cog="" className="hidden">
							
						</div>
						<div data-scroll-item="" className="group c-active">
							<div className="flex justify-center">
							        <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">T</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">T</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">T</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">T</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">T</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">o</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">o</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">p</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">p</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">p</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">p</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">p</div>
                                    </div>
								<div className="">&nbsp;</div>
								    <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">S</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">S</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">S</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">S</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">S</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">r</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">r</div>
                                    </div>
								<div className="">&nbsp;</div>
								    <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">i</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">i</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">i</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">i</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">i</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">n</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">n</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">n</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">n</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">n</div>
                                    </div>
								<div className="">&nbsp;</div>
								    <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">1</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">1</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">1</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">1</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">1</div>
                                    </div>
								<div className="">&nbsp;</div>
								    <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">W</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">W</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">W</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">W</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">W</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">k</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">k</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">k</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">k</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">k</div>
                                    </div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-[10px] pt-[150px] border-r-[1px] border-l-[1px] border-[#3F5EFB] border-opacity-50"></div>
						<div className="">
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
							<div className="py-[10px]"></div>
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
						</div>
						<div className="pt-[10px]"></div>
					</div>
				</div>
				<div className="hidden md:block py-[50px]"></div>
				<div data-scroll="[data-scroll-item]" className="overflow-hidden">
					<div data-scroll-cog="" className="hidden">
						
					</div>
					<div data-scroll-item="" className="group">
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]">
							<div className="">
								<div className="relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[5px] opacity-20"></div>
									<div className="relative flex p-[15px]">
										<div className="">
										<div className="relative rounded-full overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_30.png" alt="Gradient Card" />
		  								</div>
										</div>
										<div className="px-[20px]">
											<div className="text-white font-bold">Gallant J.</div>
											<div className="my-[10px]"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-chart-line"></i>
												</div>
												<div className="">11.3<sup>K</sup></div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="text-[12px]">
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[5px] opacity-20"></div>
									<div className="relative flex p-[15px]">
										<div className="">
										<div className="relative rounded-full overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_31.png" alt="Gradient Card" />
		  								</div>
										</div>
										<div className="px-[20px]">
											<div className="text-white font-bold">Debit alex</div>
											<div className="my-[10px]"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-chart-line"></i>
												</div>
												<div className="">11.3<sup>K</sup></div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="text-[12px]">
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[5px] opacity-20"></div>
									<div className="relative flex p-[15px]">
										<div className="">
										<div className="relative rounded-full overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_32.png" alt="Gradient Card" />
		  								</div>
										</div>
										<div className="px-[20px]">
											<div className="text-white font-bold">Johnny E.</div>
											<div className="my-[10px]"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-chart-line"></i>
												</div>
												<div className="">11.3<sup>K</sup></div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="text-[12px]">
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[5px] opacity-20"></div>
									<div className="relative flex p-[15px]">
										<div className="">
										<div className="relative rounded-full overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_33.png" alt="Gradient Card" />
		  								</div>
										</div>
										<div className="px-[20px]">
											<div className="text-white font-bold">Mark J.</div>
											<div className="my-[10px]"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-chart-line"></i>
												</div>
												<div className="">11.3<sup>K</sup></div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="text-[12px]">
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden xl:block py-[15px]"></div>
				<div data-scroll="[data-scroll-item]" className="hidden xl:block overflow-hidden">
					<div data-scroll-cog="" className="hidden">
						
					</div>
					<div data-scroll-item="" className="group">
						<div className="grid grid-cols-4 gap-[30px]">
							<div className="">
								<div className="relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[5px] opacity-20"></div>
									<div className="relative flex p-[15px]">
										<div className="">
										<div className="relative rounded-full overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_34.png" alt="Gradient Card" />
		  								</div>
										</div>
										<div className="px-[20px]">
											<div className="text-white font-bold">Hoster R.</div>
											<div className="my-[10px]"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-chart-line"></i>
												</div>
												<div className="">11.3<sup>K</sup></div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="text-[12px]">
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[5px] opacity-20"></div>
									<div className="relative flex p-[15px]">
										<div className="">
										<div className="relative rounded-full overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_35.png" alt="Gradient Card" />
		  								</div>
										</div>
										<div className="px-[20px]">
											<div className="text-white font-bold">John P.</div>
											<div className="my-[10px]"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-chart-line"></i>
												</div>
												<div className="">11.3<sup>K</sup></div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="text-[12px]">
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[5px] opacity-20"></div>
									<div className="relative flex p-[15px]">
										<div className="">
										<div className="relative rounded-full overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_36.png" alt="Gradient Card" />
		  								</div>
										</div>
										<div className="px-[20px]">
											<div className="text-white font-bold">Austin R.</div>
											<div className="my-[10px]"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-chart-line"></i>
												</div>
												<div className="">11.3<sup>K</sup></div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="text-[12px]">
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[5px] opacity-20"></div>
									<div className="relative flex p-[15px]">
										<div className="">
										<div className="relative rounded-full overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_37.png" alt="Gradient Card" />
		  								</div>
										</div>
										<div className="px-[20px]">
											<div className="text-white font-bold">Michael L.</div>
											<div className="my-[10px]"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-chart-line"></i>
												</div>
												<div className="">11.3<sup>K</sup></div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="text-[12px]">
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] ps-[20px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="py-[50px]"></div>
				<div className="text-[60px] leading-[1] font-bold hidden xl:flex justify-center gap-[30px]">
					<div className="flex flex-col items-center">
						<div className="pt-[10px]"></div>
						<div className="">
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
							<div className="py-[10px]"></div>
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
						</div>
						<div className="w-[10px] pt-[150px] border-r-[1px] border-l-[1px] border-[#3F5EFB] border-opacity-50"></div>
					</div>
					<div data-scroll="[data-scroll-item]" className="overflow-hidden">
						<div data-scroll-cog="" className="hidden">
							
						</div>
						<div data-scroll-item="" className="group">
							<div className="flex justify-center">
							<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">T</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">T</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">T</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">T</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">T</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">o</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">o</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">p</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">p</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">p</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">p</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">p</div>
                                    </div>
								<div className="">&nbsp;</div>
								    <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">S</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">S</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">S</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">S</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">S</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">r</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">r</div>
                                    </div>
								<div className="">&nbsp;</div>
								    <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">i</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">i</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">i</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">i</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">i</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">n</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">n</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">n</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">n</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">n</div>
                                    </div>
								<div className="">&nbsp;</div>
								    <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">2</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">2</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">2</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">2</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">2</div>
                                    </div>
								<div className="">&nbsp;</div>
								    <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">W</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">W</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">W</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">W</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">W</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">k</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">k</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">k</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">k</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">k</div>
                                    </div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="pt-[10px]"></div>
						<div className="">
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
							<div className="py-[10px]"></div>
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
						</div>
						<div className="w-[10px] pt-[150px] border-r-[1px] border-l-[1px] border-[#3F5EFB] border-opacity-50"></div>
					</div>
				</div>
			</div>
		</div>



		<div className="py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex items-center">
					<div className="text-[60px] font-bold text-[#110d2e]">
						<div data-scroll="[data-scroll-item]" className="overflow-hidden">
							<div data-scroll-cog="" className="hidden">
								
							</div>
							<div data-scroll-item="" className="group c-active">
								<div className="flex">
								    <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">N</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">N</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">N</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#000000] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">N</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">N</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#000000] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">w</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">w</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">w</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#000000] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">w</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">w</div>
                                    </div>
									<div className="">&nbsp;</div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">I</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">I</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">I</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#000000] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">I</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">I</div>
                                    </div>	
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">t</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">t</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">t</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#000000] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">t</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">t</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#000000] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">m</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">m</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">m</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#000000] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">m</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">m</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">s</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">s</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">s</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#000000] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">s</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">s</div>
                                    </div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden xl:block flex-1 border-t-[1px] border-t-[#3F5EFB] border-opacity-0"></div>
					<div className="hidden xl:block relative">
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full"></div>
						<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full opacity-20"></div>
						<div className="relative flex">
						<a className="group relative hidden md:flex items-center justify-center h-[44px] rounded-full overflow-hidden" href="#">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="px-[30px] text-white">
								<div className="relative">
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">all NFT</div>
									<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">all NFT</div>
								</div>
							</div>
						</a>
						<a className="group relative hidden md:flex items-center justify-center h-[44px] rounded-full overflow-hidden" href="#">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-#110d2e rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="px-[30px] text-white">
								<div className="relative">
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">Fashion</div>
									<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">Fashion</div>
								</div>
							</div>
						</a>
						<a className="group relative hidden md:flex items-center justify-center h-[44px] rounded-full overflow-hidden" href="#">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-#110d2e rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="px-[30px] text-white">
								<div className="relative">
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">Music</div>
									<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">Music</div>
								</div>
							</div>
						</a>
						<a className="group relative hidden md:flex items-center justify-center h-[44px] rounded-full overflow-hidden" href="#">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-#110d2e rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="px-[30px] text-white">
								<div className="relative">
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">Video</div>
									<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">Video</div>
								</div>
							</div>
						</a>
						<a className="group relative hidden md:flex items-center justify-center h-[44px] rounded-full overflow-hidden" href="#">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-#110d2e rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="px-[30px] text-white">
								<div className="relative">
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">Games</div>
									<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">Games</div>
								</div>
							</div>
						</a>
						</div>
					</div>
					<div className="hidden md:block flex-1 border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
					<a className="group relative hidden md:flex items-center justify-center h-[44px] rounded-full overflow-hidden" href="#">
						<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
						<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
						<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
						<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
						<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
						<div className="px-[30px] text-white">
							<div className="relative">
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">Explore More</div>
								<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">Explore More</div>
							</div>
						</div>
					</a>
				</div>





				
				<div className="pt-[100px]"></div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[30px]">
					<div className="hidden xl:block">
						<div className="relative">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative p-[10px]">
								<div className="relative">
									<div data-scroll="[data-scroll-item]" className="overflow-hidden">
										<div data-scroll-cog="" className="hidden">
											
										</div>
										<div data-scroll-item="" className="group">
										<div className="relative rounded-[15px] overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/1.jpeg" alt="Gradient Card" />
		  								</div>
										</div>
									</div>
									<div className="pt-[18px]"></div>
									<div className="absolute top-[10px] right-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px] px-[7px] py-[2px] text-[12px]">
												<div className="text-[#FF4E4E]">
													<i className="fas fa-heart"></i>
												</div>
												<div className="text-[#110d2e]">3.3K</div>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px]">
												<img className="w-[32px] h-[32px] object-center object-cover rounded-full" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_13.png" alt="" />
												<div className="text-[12px] text-[#110d2e] pe-[15px]">Johny E.</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-white py-[20px] px-[10px]">
									<div className="text-[20px] font-bold mb-[5px]">Cool octopus travel</div>
									<div className="flex gap-[5px] text-[12px]">
										<div className="opacity-80">Current Bid:</div>
										<div className="">0.24 ETH 4/17</div>
									</div>
									<div className="my-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between items-center text-[12px]">
										<div className="flex gap-[5px]">
											<div className="">
												<i className="fas fa-redo"></i>
											</div>
											<div className="">View History</div>
										</div>
										<a className="group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden" href="#">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover/b:rotate-180 group-hover/b:scale-x-0 group-hover/b:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="px-[15px]">
												<div className="relative">
													<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">Place Bid</div>
													<div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">Place Bid</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden xl:block">
						<div className="relative">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative p-[10px]">
								<div className="relative">
									<div data-scroll="[data-scroll-item]" className="overflow-hidden">
										<div data-scroll-cog="" className="hidden">
											
										</div>
										<div data-scroll-item="" className="group">
										<div className="relative rounded-[15px] overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/2.jpeg" alt="Gradient Card" />
		  								</div>
										</div>
									</div>
									<div className="pt-[18px]"></div>
									<div className="absolute top-[10px] right-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px] px-[7px] py-[2px] text-[12px]">
												<div className="text-[#FF4E4E]">
													<i className="fas fa-heart"></i>
												</div>
												<div className="text-[#110d2e]">3.1K</div>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px]">
												<img className="w-[32px] h-[32px] object-center object-cover rounded-full" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_12.png" alt="" />
												<div className="text-[12px] text-[#110d2e] pe-[15px]">Debit Alex</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-white py-[20px] px-[10px]">
									<div className="text-[20px] font-bold mb-[5px]">Octopus eating ice</div>
									<div className="flex gap-[5px] text-[12px]">
										<div className="opacity-80">Current Bid:</div>
										<div className="">0.09 ETH 1/9</div>
									</div>
									<div className="my-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between items-center text-[12px]">
										<div className="flex gap-[5px]">
											<div className="">
												<i className="fas fa-redo"></i>
											</div>
											<div className="">View History</div>
										</div>
										<a className="group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden" href="#">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover/b:rotate-180 group-hover/b:scale-x-0 group-hover/b:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="px-[15px]">
												<div className="relative">
													<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">Place Bid</div>
													<div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">Place Bid</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="relative">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative p-[10px]">
								<div className="relative">
									<div data-scroll="[data-scroll-item]" className="overflow-hidden">
										<div data-scroll-cog="" className="hidden">
											
										</div>
										<div data-scroll-item="" className="group">
										<div className="relative rounded-[15px] overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/3.jpeg" alt="Gradient Card" />
		  								</div>
										</div>
									</div>
									<div className="pt-[18px]"></div>
									<div className="absolute top-[10px] right-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px] px-[7px] py-[2px] text-[12px]">
												<div className="text-[#FF4E4E]">
													<i className="fas fa-heart"></i>
												</div>
												<div className="text-[#110d2e]">2.1K</div>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px]">
												<img className="w-[32px] h-[32px] object-center object-cover rounded-full" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_11.png" alt="" />
												<div className="text-[12px] text-[#110d2e] pe-[15px]">Robert Alex</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-white py-[20px] px-[10px]">
									<div className="text-[20px] font-bold mb-[5px]">Panda with fish</div>
									<div className="flex gap-[5px] text-[12px]">
										<div className="opacity-80">Current Bid:</div>
										<div className="">0.19 ETH 5/11</div>
									</div>
									<div className="my-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between items-center text-[12px]">
										<div className="flex gap-[5px]">
											<div className="">
												<i className="fas fa-redo"></i>
											</div>
											<div className="">View History</div>
										</div>
										<a className="group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden" href="#">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover/b:rotate-180 group-hover/b:scale-x-0 group-hover/b:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="px-[15px]">
												<div className="relative">
													<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">Place Bid</div>
													<div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">Place Bid</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="relative">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative p-[10px]">
								<div className="relative">
									<div data-scroll="[data-scroll-item]" className="overflow-hidden">
										<div data-scroll-cog="" className="hidden">
											
										</div>
										<div data-scroll-item="" className="group">
										<div className="relative rounded-[15px] overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/4.jpeg" alt="Gradient Card" />
		  								</div>
										</div>
									</div>
									<div className="pt-[18px]"></div>
									<div className="absolute top-[10px] right-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px] px-[7px] py-[2px] text-[12px]">
												<div className="text-[#FF4E4E]">
													<i className="fas fa-heart"></i>
												</div>
												<div className="text-[#110d2e]">1.2K</div>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px]">
												<img className="w-[32px] h-[32px] object-center object-cover rounded-full" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_10.png" alt="" />
												<div className="text-[12px] text-[#110d2e] pe-[15px]">Austin R.</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-white py-[20px] px-[10px]">
									<div className="text-[20px] font-bold mb-[5px]">Kawaii bubble tea</div>
									<div className="flex gap-[5px] text-[12px]">
										<div className="opacity-80">Current Bid:</div>
										<div className="">0.29 ETH 11/19</div>
									</div>
									<div className="my-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between items-center text-[12px]">
										<div className="flex gap-[5px]">
											<div className="">
												<i className="fas fa-redo"></i>
											</div>
											<div className="">View History</div>
										</div>
										<a className="group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden" href="#">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover/b:rotate-180 group-hover/b:scale-x-0 group-hover/b:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="px-[15px]">
												<div className="relative">
													<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">Place Bid</div>
													<div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">Place Bid</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="relative">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative p-[10px]">
								<div className="relative">
									<div data-scroll="[data-scroll-item]" className="overflow-hidden">
										<div data-scroll-cog="" className="hidden">
											
										</div>
										<div data-scroll-item="" className="group">
										<div className="relative rounded-[15px] overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/5.jpeg" alt="Gradient Card" />
		  								</div>
										</div>
									</div>
									<div className="pt-[18px]"></div>
									<div className="absolute top-[10px] right-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px] px-[7px] py-[2px] text-[12px]">
												<div className="text-[#FF4E4E]">
													<i className="fas fa-heart"></i>
												</div>
												<div className="text-[#110d2e]">1.1K</div>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px]">
												<img className="w-[32px] h-[32px] object-center object-cover rounded-full" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_9.png" alt="" />
												<div className="text-[12px] text-[#110d2e] pe-[15px]">Robert</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-white py-[20px] px-[10px]">
									<div className="text-[20px] font-bold mb-[5px]">Cute monsters hallo</div>
									<div className="flex gap-[5px] text-[12px]">
										<div className="opacity-80">Current Bid:</div>
										<div className="">0.19 ETH 7/13</div>
									</div>
									<div className="my-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between items-center text-[12px]">
										<div className="flex gap-[5px]">
											<div className="">
												<i className="fas fa-redo"></i>
											</div>
											<div className="">View History</div>
										</div>
										<a className="group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden" href="#">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover/b:rotate-180 group-hover/b:scale-x-0 group-hover/b:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="px-[15px]">
												<div className="relative">
													<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">Place Bid</div>
													<div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">Place Bid</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="relative">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative p-[10px]">
								<div className="relative">
									<div data-scroll="[data-scroll-item]" className="overflow-hidden">
										<div data-scroll-cog="" className="hidden">
											
										</div>
										<div data-scroll-item="" className="group">
										<div className="relative rounded-[15px] overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_20.jpeg" alt="Gradient Card" />
		  								</div>
										</div>
									</div>
									<div className="pt-[18px]"></div>
									<div className="absolute top-[10px] right-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px] px-[7px] py-[2px] text-[12px]">
												<div className="text-[#FF4E4E]">
													<i className="fas fa-heart"></i>
												</div>
												<div className="text-[#110d2e]">2.2K</div>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px]">
												<img className="w-[32px] h-[32px] object-center object-cover rounded-full" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_8.png" alt="" />
												<div className="text-[12px] text-[#110d2e] pe-[15px]">Gallant J.</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-white py-[20px] px-[10px]">
									<div className="text-[20px] font-bold mb-[5px]">Cat mascot charing</div>
									<div className="flex gap-[5px] text-[12px]">
										<div className="opacity-80">Current Bid:</div>
										<div className="">0.28 ETH 21/91</div>
									</div>
									<div className="my-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between items-center text-[12px]">
										<div className="flex gap-[5px]">
											<div className="">
												<i className="fas fa-redo"></i>
											</div>
											<div className="">View History</div>
										</div>
										<a className="group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden" href="#">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover/b:rotate-180 group-hover/b:scale-x-0 group-hover/b:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="px-[15px]">
												<div className="relative">
													<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">Place Bid</div>
													<div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">Place Bid</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="relative">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative p-[10px]">
								<div className="relative">
									<div data-scroll="[data-scroll-item]" className="overflow-hidden">
										<div data-scroll-cog="" className="hidden">
											
										</div>
										<div data-scroll-item="" className="group">
										<div className="relative rounded-[15px] overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_21.jpeg" alt="Gradient Card" />
		  								</div>
										</div>
									</div>
									<div className="pt-[18px]"></div>
									<div className="absolute top-[10px] right-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px] px-[7px] py-[2px] text-[12px]">
												<div className="text-[#FF4E4E]">
													<i className="fas fa-heart"></i>
												</div>
												<div className="text-[#110d2e]">1.4K</div>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px]">
												<img className="w-[32px] h-[32px] object-center object-cover rounded-full" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_7.png" alt="" />
												<div className="text-[12px] text-[#110d2e] pe-[15px]">Austin R.</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-white py-[20px] px-[10px]">
									<div className="text-[20px] font-bold mb-[5px]">Small kids orange</div>
									<div className="flex gap-[5px] text-[12px]">
										<div className="opacity-80">Current Bid:</div>
										<div className="">0.17 ETH 14/23</div>
									</div>
									<div className="my-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between items-center text-[12px]">
										<div className="flex gap-[5px]">
											<div className="">
												<i className="fas fa-redo"></i>
											</div>
											<div className="">View History</div>
										</div>
										<a className="group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden" href="#">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover/b:rotate-180 group-hover/b:scale-x-0 group-hover/b:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="px-[15px]">
												<div className="relative">
													<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">Place Bid</div>
													<div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">Place Bid</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="relative">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative p-[10px]">
								<div className="relative">
									<div data-scroll="[data-scroll-item]" className="overflow-hidden">
										<div data-scroll-cog="" className="hidden">
											
										</div>
										<div data-scroll-item="" className="group">
										<div className="relative rounded-[15px] overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_23.jpeg" alt="Gradient Card" />
		  								</div>
										</div>
									</div>
									<div className="pt-[18px]"></div>
									<div className="absolute top-[10px] right-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px] px-[7px] py-[2px] text-[12px]">
												<div className="text-[#FF4E4E]">
													<i className="fas fa-heart"></i>
												</div>
												<div className="text-[#110d2e]">1.9K</div>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px]">
												<img className="w-[32px] h-[32px] object-center object-cover rounded-full" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_15.png" alt="" />
												<div className="text-[12px] text-[#110d2e] pe-[15px]">Gustin D.</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-white py-[20px] px-[10px]">
									<div className="text-[20px] font-bold mb-[5px]">Digital Cat Painting</div>
									<div className="flex gap-[5px] text-[12px]">
										<div className="opacity-80">Current Bid:</div>
										<div className="">0.09 ETH 10/91</div>
									</div>
									<div className="my-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between items-center text-[12px]">
										<div className="flex gap-[5px]">
											<div className="">
												<i className="fas fa-redo"></i>
											</div>
											<div className="">View History</div>
										</div>
										<a className="group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden" href="#">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover/b:rotate-180 group-hover/b:scale-x-0 group-hover/b:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="px-[15px]">
												<div className="relative">
													<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">Place Bid</div>
													<div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">Place Bid</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="relative">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative p-[10px]">
								<div className="relative">
									<div data-scroll="[data-scroll-item]" className="overflow-hidden">
										<div data-scroll-cog="" className="hidden">
											
										</div>
										<div data-scroll-item="" className="group">
										<div className="relative rounded-[15px] overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_24.jpeg" alt="Gradient Card" />
		  								</div>
										</div>
									</div>
									<div className="pt-[18px]"></div>
									<div className="absolute top-[10px] right-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px] px-[7px] py-[2px] text-[12px]">
												<div className="text-[#FF4E4E]">
													<i className="fas fa-heart"></i>
												</div>
												<div className="text-[#110d2e]">9.3K</div>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px]">
												<img className="w-[32px] h-[32px] object-center object-cover rounded-full" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_16.png" alt="" />
												<div className="text-[12px] text-[#110d2e] pe-[15px]">Vustin H.</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-white py-[20px] px-[10px]">
									<div className="text-[20px] font-bold mb-[5px]">Fictional character</div>
									<div className="flex gap-[5px] text-[12px]">
										<div className="opacity-80">Current Bid:</div>
										<div className="">0.06 ETH 11/109</div>
									</div>
									<div className="my-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between items-center text-[12px]">
										<div className="flex gap-[5px]">
											<div className="">
												<i className="fas fa-redo"></i>
											</div>
											<div className="">View History</div>
										</div>
										<a className="group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden" href="#">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover/b:rotate-180 group-hover/b:scale-x-0 group-hover/b:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="px-[15px]">
												<div className="relative">
													<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">Place Bid</div>
													<div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">Place Bid</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="relative">
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative p-[10px]">
								<div className="relative">
									<div data-scroll="[data-scroll-item]" className="overflow-hidden">
										<div data-scroll-cog="" className="hidden">
											
										</div>
										<div data-scroll-item="" className="group">
										<div className="relative rounded-[15px] overflow-hidden">
											<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
											<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_25.jpeg" alt="Gradient Card" />
		  								</div>
										</div>
									</div>
									<div className="pt-[18px]"></div>
									<div className="absolute top-[10px] right-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px] px-[7px] py-[2px] text-[12px]">
												<div className="text-[#FF4E4E]">
													<i className="fas fa-heart"></i>
												</div>
												<div className="text-[#110d2e]">5.3K</div>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-[10px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-white rounded-full"></div>
											<div className="relative flex items-center gap-[5px]">
												<img className="w-[32px] h-[32px] object-center object-cover rounded-full" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_17.png" alt="" />
												<div className="text-[12px] text-[#110d2e] pe-[15px]">Bustin W.</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-white py-[20px] px-[10px]">
									<div className="text-[20px] font-bold mb-[5px]">Diamond animals</div>
									<div className="flex gap-[5px] text-[12px]">
										<div className="opacity-80">Current Bid:</div>
										<div className="">0.27 ETH 7/21</div>
									</div>
									<div className="my-[20px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between items-center text-[12px]">
										<div className="flex gap-[5px]">
											<div className="">
												<i className="fas fa-redo"></i>
											</div>
											<div className="">View History</div>
										</div>
										<a className="group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden" href="#">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full group-hover/b:rotate-180 group-hover/b:scale-x-0 group-hover/b:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]/b:rotate-180 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="px-[15px]">
												<div className="relative">
													<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">Place Bid</div>
													<div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">Place Bid</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>




























		<div className="text-white">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex justify-center items-center gap-[30px]">
					<div className="hidden xl:flex gap-[30px] text-[#110d2e]">
						<a className="cate-prev" href="javascript:void(0)" aria-controls="tns2" tabindex="-1" data-controls="prev" aria-disabled="false">
							<div className="fas fa-arrow-left"></div>
						</a>
						<div className="">|</div>
						<a className="cate-next" href="javascript:void(0)" aria-controls="tns2" tabindex="-1" data-controls="next" aria-disabled="true">
							<div className="fas fa-arrow-right"></div>
						</a>
					</div>
					<div className="hidden xl:block flex-1 border-t-[1px] border-[#3F5EFB] border-opacity-30"></div>
					<div className="text-[30px] md:text-[60px] font-bold">
						<div data-scroll="[data-scroll-item]" className="overflow-hidden">
							<div data-scroll-cog="" className="hidden">
								
							</div>
							<div data-scroll-item="" className="group c-active">
								<div className="flex justify-center">
								    <div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">E</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">E</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">E</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">E</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">E</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">x</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">x</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">x</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">x</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">x</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">p</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">p</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">p</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">p</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">p</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">o</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">o</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">r</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">r</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                    </div>
									<div className="">&nbsp;</div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">B</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">B</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">B</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">B</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">B</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">y</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">y</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">y</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">y</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">y</div>
                                    </div>
									<div className="">&nbsp;</div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">c</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">c</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">c</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">c</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">c</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">a</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">a</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">a</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">a</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">a</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">t</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">t</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">t</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">t</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">t</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">a</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">a</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">a</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">a</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">a</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">g</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">g</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">g</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">g</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">g</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">o</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">o</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">o</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">r</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">r</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">r</div>
                                    </div>
									<div className="group relative">
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">y</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">y</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">y</div>
                                        <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">y</div>
                                        <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">y</div>
                                    </div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden xl:block flex-1 border-t-[1px] border-[#3F5EFB] border-opacity-30"></div>
					<div className="hidden xl:flex gap-[10px] cate-dots" aria-label="Carousel Pagination">
						<div className="group" data-nav="0" aria-label="Carousel Page 1" aria-controls="tns2" tabindex="-1">
							<div className="w-[10px] h-[10px] group-[.tns-nav-active]:w-[30px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full transition-all duration-[.3s]"></div>
						</div>
						<div className="group tns-nav-active" data-nav="1" aria-label="Carousel Page 2 (Current Slide)" aria-controls="tns2">
							<div className="w-[10px] h-[10px] group-[.tns-nav-active]:w-[30px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full transition-all duration-[.3s]"></div>
						</div>
						<div className="group" data-nav="2" tabindex="-1" aria-label="Carousel Page 3" aria-controls="tns2">
							<div className="w-[10px] h-[10px] group-[.tns-nav-active]:w-[30px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full transition-all duration-[.3s]"></div>
						</div>
						<div className="group" data-nav="3" tabindex="-1" aria-label="Carousel Page 4" aria-controls="tns2">
							<div className="w-[10px] h-[10px] group-[.tns-nav-active]:w-[30px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full transition-all duration-[.3s]"></div>
						</div>
						<div className="group" data-nav="4" tabindex="-1" aria-label="Carousel Page 5" aria-controls="tns2">
							<div className="w-[10px] h-[10px] group-[.tns-nav-active]:w-[30px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full transition-all duration-[.3s]"></div>
						</div>
					</div>
				</div>
				<div className="pt-[100px]"></div>
				<div data-slider="" className="">
					<div data-slider-cog="" className="hidden">
						
					</div>
					<div className="tns-outer" id="tns2-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">2</span>  of 2</div><div id="tns2-mw" className="tns-ovh"><div className="tns-inner" id="tns2-iw"><div className="cate  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns2" >
						<div className="tns-item" id="tns2-item0" aria-hidden="true" tabindex="-1">
							<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-[30px]">
								<div className="hidden xl:block">
									<div className="relative rounded-[15px] overflow-hidden">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 left-0 h-[75%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="absolute top-0 right-0 left-0 h-[50%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="relative pt-[30px] flex justify-center">
												<div className="overflow-hidden">
													<div data-scroll-cog="" className="hidden">
														
													</div>
													<div data-scroll-item="" className="group">
													<div className="relative rounded-full overflow-hidden">
														<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
														<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_38.png" alt=""  />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative flex justify-center py-[30px]">
											<div className="">
												<div className="flex gap-[10px]">
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
													<div className="text-[18px] font-bold text-white">ART</div>
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
												</div>
												<div className="pt-[10px]"></div>
												<div className="">Exercitation veniam</div>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden xl:block">
									<div className="relative rounded-[15px] overflow-hidden">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 left-0 h-[75%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="absolute top-0 right-0 left-0 h-[50%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="relative pt-[30px] flex justify-center">
												<div data-scroll="[data-scroll-item]" className="overflow-hidden">
													<div data-scroll-cog="" className="hidden">
														
													</div>
													<div data-scroll-item="" className="group">
													<div className="relative rounded-full overflow-hidden">
														<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
														<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_39.png" alt=""  />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative flex justify-center py-[30px]">
											<div className="">
												<div className="flex gap-[10px]">
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
													<div className="text-[18px] font-bold text-white">MUSIC</div>
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
												</div>
												<div className="pt-[10px]"></div>
												<div className="">Exercitation veniam</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="relative rounded-[15px] overflow-hidden">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 left-0 h-[75%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="absolute top-0 right-0 left-0 h-[50%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="relative pt-[30px] flex justify-center">
												<div data-scroll="[data-scroll-item]" className="overflow-hidden">
													<div data-scroll-cog="" className="hidden">
														
													</div>
													<div data-scroll-item="" className="group">
													<div className="relative rounded-full overflow-hidden">
														<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
														<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_40.png" alt=""  />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative flex justify-center py-[30px]">
											<div className="">
												<div className="flex gap-[10px]">
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
													<div className="text-[18px] font-bold text-white">VIDEO</div>
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
												</div>
												<div className="pt-[10px]"></div>
												<div className="">Exercitation veniam</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="relative rounded-[15px] overflow-hidden">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 left-0 h-[75%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="absolute top-0 right-0 left-0 h-[50%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="relative pt-[30px] flex justify-center">
												<div data-scroll="[data-scroll-item]" className="overflow-hidden">
													<div data-scroll-cog="" className="hidden">
														
													</div>
													<div data-scroll-item="" className="group">
													<div className="relative rounded-full overflow-hidden">
														<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
														<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_41.png" alt=""  />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative flex justify-center py-[30px]">
											<div className="">
												<div className="flex gap-[10px]">
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
													<div className="text-[18px] font-bold text-white">FASHION</div>
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
												</div>
												<div className="pt-[10px]"></div>
												<div className="">Exercitation veniam</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="relative rounded-[15px] overflow-hidden">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 left-0 h-[75%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="absolute top-0 right-0 left-0 h-[50%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="relative pt-[30px] flex justify-center">
												<div data-scroll="[data-scroll-item]" className="overflow-hidden">
													<div data-scroll-cog="" className="hidden">
														
													</div>
													<div data-scroll-item="" className="group">
													<div className="relative rounded-full overflow-hidden">
														<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
														<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_42.png" alt=""  />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative flex justify-center py-[30px]">
											<div className="">
												<div className="flex gap-[10px]">
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
													<div className="text-[18px] font-bold text-white">SPORTS</div>
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
												</div>
												<div className="pt-[10px]"></div>
												<div className="">Exercitation veniam</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="tns-item tns-slide-active" id="tns2-item1">
							<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-[30px]">
								<div className="hidden xl:block">
									<div className="relative rounded-[15px] overflow-hidden">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 left-0 h-[75%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="absolute top-0 right-0 left-0 h-[50%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="relative pt-[30px] flex justify-center">
												<div data-scroll="[data-scroll-item]" className="overflow-hidden">
													<div data-scroll-cog="" className="hidden">
														
													</div>
													<div data-scroll-item="" className="group">
													<div className="relative rounded-full overflow-hidden">
														<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
														<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_38.png" alt=""  />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative flex justify-center py-[30px]">
											<div className="">
												<div className="flex gap-[10px]">
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
													<div className="text-[18px] font-bold text-white">ART</div>
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
												</div>
												<div className="pt-[10px]"></div>
												<div className="">Exercitation veniam</div>
											</div>
										</div>
									</div>
								</div>
								<div className="hidden xl:block">
									<div className="relative rounded-[15px] overflow-hidden">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 left-0 h-[75%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="absolute top-0 right-0 left-0 h-[50%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="relative pt-[30px] flex justify-center">
												<div data-scroll="[data-scroll-item]" className="overflow-hidden">
													<div data-scroll-cog="" className="hidden">
														
													</div>
													<div data-scroll-item="" className="group">
													<div className="relative rounded-full overflow-hidden">
														<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
														<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_39.png" alt=""  />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative flex justify-center py-[30px]">
											<div className="">
												<div className="flex gap-[10px]">
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
													<div className="text-[18px] font-bold text-white">MUSIC</div>
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
												</div>
												<div className="pt-[10px]"></div>
												<div className="">Exercitation veniam</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="relative rounded-[15px] overflow-hidden">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 left-0 h-[75%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="absolute top-0 right-0 left-0 h-[50%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="relative pt-[30px] flex justify-center">
												<div data-scroll="[data-scroll-item]" className="overflow-hidden">
													<div data-scroll-cog="" className="hidden">
														
													</div>
													<div data-scroll-item="" className="group">
													<div className="relative rounded-full overflow-hidden">
														<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
														<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_40.png" alt=""  />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative flex justify-center py-[30px]">
											<div className="">
												<div className="flex gap-[10px]">
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
													<div className="text-[18px] font-bold text-white">VIDEO</div>
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
												</div>
												<div className="pt-[10px]"></div>
												<div className="">Exercitation veniam</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="relative rounded-[15px] overflow-hidden">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 left-0 h-[75%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="absolute top-0 right-0 left-0 h-[50%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="relative pt-[30px] flex justify-center">
												<div data-scroll="[data-scroll-item]" className="overflow-hidden">
													<div data-scroll-cog="" className="hidden">
														
													</div>
													<div data-scroll-item="" className="group">
													<div className="relative rounded-full overflow-hidden">
														<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
														<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_41.png" alt=""  />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative flex justify-center py-[30px]">
											<div className="">
												<div className="flex gap-[10px]">
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
													<div className="text-[18px] font-bold text-white">FASHION</div>
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
												</div>
												<div className="pt-[10px]"></div>
												<div className="">Exercitation veniam</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="relative rounded-[15px] overflow-hidden">
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
										<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
										<div className="relative">
											<div className="absolute top-0 right-0 left-0 h-[75%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="absolute top-0 right-0 left-0 h-[50%] border-[1px] border-t-0 border-[#3F5EFB] border-opacity-30 rounded-br-full rounded-bl-full"></div>
											<div className="relative pt-[30px] flex justify-center">
												<div data-scroll="[data-scroll-item]" className="overflow-hidden">
													<div data-scroll-cog="" className="hidden">
														
													</div>
													<div data-scroll-item="" className="group">
														<div className="relative rounded-full overflow-hidden">
														<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
														<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
														<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_42.png" alt=""  />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative flex justify-center py-[30px]">
											<div className="">
												<div className="flex gap-[10px]">
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 bottom-0 left-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
													<div className="text-[18px] font-bold text-white">SPORTS</div>
													<div className="flex-1 relative">
														<div className="absolute top-0 right-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute right-0 bottom-0 left-0 h-[5px] border-t-[1px] border-b-[1px] border-[#3F5EFB] border-opacity-30"></div>
														<div className="absolute top-0 right-0 bottom-0 border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
													</div>
												</div>
												<div className="pt-[10px]"></div>
												<div className="">Exercitation veniam</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div></div></div></div>
				</div>
			</div>
		</div>









		<div className="hidden xl:block py-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="flex gap-[30px]">
					<div className="flex-1">
						<div className="flex items-center gap-[30px] mb-[50px]">
							<div className="text-[60px] font-bold">
								<div data-scroll="[data-scroll-item]" className="overflow-hidden">
									<div data-scroll-cog="" className="hidden">
										
									</div>
									<div data-scroll-item="" className="group c-active">
										<div className="flex justify-center">
									        <div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">L</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">L</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">L</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">L</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">L</div>
                                            </div>
										    <div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">o</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">o</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">g</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">g</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">g</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">g</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">g</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">o</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">o</div>
                                            </div>
											<div className="">&nbsp;</div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">R</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">R</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">R</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">R</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">R</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">v</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">v</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">v</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">v</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">v</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">a</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">a</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">a</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">a</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">a</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                            </div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex-1 border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
						</div>
						<div className="relative">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative grid grid-cols-2 gap-[20px] p-[20px]">
								<div className="relative">
									<div className="h-full pb-[20px]">
										<div className="h-full">
											<div data-scroll="[data-scroll-item]" className="overflow-hidden">
												<div data-scroll-cog="" className="hidden">
													
												</div>
												<div data-scroll-item="" className="group">
												<div className="relative rounded-[15px] overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_7.jpeg" alt="Gradient Card" />
												</div>
												</div>
											</div>
										</div>
									</div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-end">
										<div className="relative">
											<div data-scroll="[data-scroll-item]" className="overflow-hidden">
												<div data-scroll-cog="" className="hidden">
													
												</div>
												<div data-scroll-item="" className="group">
												<div className="relative rounded-[15px] overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_7.png" alt="Gradient Card" />
												</div>
												</div>
											</div>
											<div className="absolute top-[4px] right-[4px] w-[14px] h-[14px] border-[1px] border-[#21A85A] bg-white rounded-full"></div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="flex items-center gap-[10px]">
										<div className="text-white text-[18px] font-bold">HenryArtisan</div>
										<div className="text-[#21A85A]">
											<i className="far fa-check-circle"></i>
										</div>
										<div className="">Guarranted</div>
									</div>
									<div className="mt-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between">
										<div className="py-[10px]">
											<div className="text-white mb-[5px]">Pull Requests</div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-arrow-trend-down"></i>
												</div>
												<div className="">722.9<sup>K</sup></div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="py-[10px]">
											<div className="text-white mb-[5px]">Floor Price</div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-arrow-trend-up"></i>
												</div>
												<div className="">6.7 ETH</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="relative">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative grid grid-cols-2 gap-[20px] p-[20px]">
								<div className="relative">
									<div className="h-full pb-[20px]">
										<div className="h-full">
											<div data-scroll="[data-scroll-item]" className="overflow-hidden">
												<div data-scroll-cog="" className="hidden">
													
												</div>
												<div data-scroll-item="" className="group">
												<div className="relative rounded-[15px] overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_8.jpeg" alt="Gradient Card" />
		  										</div>
												</div>
											</div>
										</div>
									</div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-end">
										<div className="relative">
											<div data-scroll="[data-scroll-item]" className="overflow-hidden">
												<div data-scroll-cog="" className="hidden">
													
												</div>
												<div data-scroll-item="" className="group">
												<div className="relative rounded-[15px] overflow-hidden">
		                                        <div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
		                                        <div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
		                                        <div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
	                                        	<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_8.png" alt="Gradient Card" />
		  										</div>
												</div>
											</div>
											<div className="absolute top-[4px] right-[4px] w-[14px] h-[14px] border-[1px] border-white bg-[#21A85A] rounded-full"></div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="flex items-center gap-[10px]">
										<div className="text-white text-[18px] font-bold">CryptoCrystal</div>
										<div className="text-[#21A85A]">
											<i className="far fa-check-circle"></i>
										</div>
										<div className="">Authentic</div>
									</div>
									<div className="mt-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between">
										<div className="py-[10px]">
											<div className="text-white mb-[5px]">Pull Requests</div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-arrow-trend-down"></i>
												</div>
												<div className="">722.9<sup>K</sup></div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="py-[10px]">
											<div className="text-white mb-[5px]">Floor Price</div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-arrow-trend-up"></i>
												</div>
												<div className="">6.7 ETH</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-end">
							<div className="h-[30px] w-[75%] border-b-[1px] border-b-[#3F5EFB] border-opacity-30 rounded-bl-full"></div>
							<div className="h-[30px] w-[50%] border-b-[1px] border-b-[#3F5EFB] border-opacity-30 rounded-bl-full"></div>
							<div className="h-[30px] w-[25%] border-b-[1px] border-b-[#3F5EFB] border-opacity-30 rounded-bl-full"></div>
						</div>
					</div>
					<div className="relative">
						<div className="absolute top-0 right-0 bottom-0 left-0 border-[1px] border-[1px] border-[#3F5EFB] border-opacity-30 rounded-full"></div>
						<div className="flex flex-col items-center">
							<a className="group relative w-full flex items-center justify-center h-[44px] rounded-full overflow-hidden" href="#">
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="px-[30px]">
									<div className="relative text-white">
										<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">Explore More</div>
										<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">Explore More</div>
									</div>
								</div>
							</a>
							<div className="pt-[100px]"></div>
							<div className="text-[60px] font-bold [writing-mode:tb]">
								<div data-scroll="[data-scroll-item]" className="overflow-hidden">
									<div data-scroll-cog="" className="hidden">
										
									</div>
									<div data-scroll-item="" className="group">
										<div className="flex justify-center">
										    <div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">T</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">T</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">T</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">T</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">T</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">o</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">o</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">p</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">p</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">p</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">p</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">p</div>
                                            </div>
											<div className="">&nbsp;</div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">C</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">C</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">C</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">C</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">C</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">o</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">o</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">c</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">c</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">c</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">c</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">c</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">t</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">t</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">t</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">t</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">t</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">i</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">i</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">i</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">i</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">i</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">o</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">o</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">o</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">n</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">n</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">n</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">n</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">n</div>
                                            </div>
										</div>
									</div>
								</div>
							</div>
							<div className="pt-[100px]"></div>
						</div>
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-[30px] mb-[50px]">
							<div className="flex-1 border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
							<div className="text-[60px] font-bold">
								<div data-scroll="[data-scroll-item]" className="overflow-hidden">
									<div data-scroll-cog="" className="hidden">
										
									</div>
									<div data-scroll-item="" className="group c-active">
										<div className="flex justify-center">
										    <div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">E</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">E</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">E</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">E</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">E</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">l</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">l</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">l</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">m</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">m</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">m</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">m</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">m</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">n</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">n</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">n</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">n</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">n</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">t</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">t</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">t</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">t</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">t</div>
                                            </div>
											<div className="">&nbsp;</div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">3</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">3</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">3</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">3</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">3</div>
                                            </div>
											<div className="group relative">
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">D</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">D</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">D</div>
                                              <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">D</div>
                                              <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">D</div>
                                            </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative grid grid-cols-2 gap-[20px] p-[20px]">
								<div className="relative">
									<div className="h-full pb-[20px]">
										<div className="h-full">
											<div data-scroll="[data-scroll-item]" className="overflow-hidden">
												<div data-scroll-cog="" className="hidden">
													
												</div>
												<div data-scroll-item="" className="group">
												<div className="relative rounded-[15px] overflow-hidden">
                                                <div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
                                                <div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
        										<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
        										<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
        										<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_9.jpeg" alt="Gradient Card" />
      											</div>
                                                </div>
      
											</div>
										</div>
									</div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-end">
										<div className="relative">
											<div data-scroll="[data-scroll-item]" className="overflow-hidden">
												<div data-scroll-cog="" className="hidden">
													
												</div>
												<div data-scroll-item="" className="group">
												<div className="relative rounded-[15px] overflow-hidden">
                                                <div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.1s]"></div>
                                                <div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
        										<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.5s]"></div>
        										<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.7s]"></div>
        										<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[1s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_9.png" alt="Gradient Card" />
      											</div>
												</div>
											</div>
											<div className="absolute top-[4px] right-[4px] w-[14px] h-[14px] border-[1px] border-white bg-[#ffff00] rounded-full"></div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="flex items-center gap-[10px]">
										<div className="text-white text-[18px] font-bold">CryptoArte</div>
										<div className="text-[#21A85A]">
											<i className="far fa-check-circle"></i>
										</div>
										<div className="">Guarranted</div>
									</div>
									<div className="mt-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between">
										<div className="py-[10px]">
											<div className="text-white mb-[5px]">Pull Requests</div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-arrow-trend-down"></i>
												</div>
												<div className="">722.9<sup>K</sup></div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="py-[10px]">
											<div className="text-white mb-[5px]">Floor Price</div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-arrow-trend-up"></i>
												</div>
												<div className="">6.7 ETH</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="relative">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-[15px]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] opacity-20"></div>
							<div className="relative grid grid-cols-2 gap-[20px] p-[20px]">
								<div className="relative">
									<div className="h-full pb-[20px]">
										<div className="h-full">
											<div data-scroll="[data-scroll-item]" className="overflow-hidden">
												<div data-scroll-cog="" className="hidden">
													
												</div>
												<div data-scroll-item="" className="group">
												<div className="relative rounded-[15px] overflow-hidden">
                                                <div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.1s]"></div>
                                                <div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
        										<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.5s]"></div>
        										<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.7s]"></div>
        										<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[1s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/general_10.jpeg" alt="Gradient Card" />
      											</div>
												</div>
											</div>
										</div>
									</div>
									<div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-end">
										<div className="relative">
											<div data-scroll="[data-scroll-item]" className="overflow-hidden">
												<div data-scroll-cog="" className="hidden">
													
												</div>
												<div data-scroll-item="" className="group">
												<div className="relative rounded-[15px] overflow-hidden">
                                                <div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.1s]"></div>
                                                <div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
        										<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.5s]"></div>
        										<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.7s]"></div>
        										<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[1s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/avatar_10.png" alt="Gradient Card" />
      											</div>
												</div>
											</div>
											<div className="absolute top-[4px] right-[4px] w-[14px] h-[14px] border-[1px] border-white bg-[#21A85A] rounded-full"></div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="flex items-center gap-[10px]">
										<div className="text-white text-[18px] font-bold">CyberKongz</div>
										<div className="text-[#21A85A]">
											<i className="far fa-check-circle"></i>
										</div>
										<div className="">Authentic</div>
									</div>
									<div className="mt-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
									<div className="flex justify-between">
										<div className="py-[10px]">
											<div className="text-white mb-[5px]">Pull Requests</div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-arrow-trend-down"></i>
												</div>
												<div className="">722.9<sup>K</sup></div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fas fa-list-ul"></i>
												</div>
												<div className="">340 Items</div>
											</div>
										</div>
										<div className="border-l-[1px] border-l-[#3F5EFB] border-opacity-30"></div>
										<div className="py-[10px]">
											<div className="text-white mb-[5px]">Floor Price</div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="fa-solid fa-arrow-trend-up"></i>
												</div>
												<div className="">6.7 ETH</div>
											</div>
											<div className="my-[10px] border-t-[1px] border-t-[#3F5EFB] border-opacity-30"></div>
											<div className="flex gap-[5px] text-[12px]">
												<div className="text-[#FC466B]">
													<i className="far fa-eye"></i>
												</div>
												<div className="">4.1<sup>K</sup> Views</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="h-[30px] w-[75%] border-b-[1px] border-b-[#3F5EFB] border-opacity-30 rounded-br-full"></div>
							<div className="h-[30px] w-[50%] border-b-[1px] border-b-[#3F5EFB] border-opacity-30 rounded-br-full"></div>
							<div className="h-[30px] w-[25%] border-b-[1px] border-b-[#3F5EFB] border-opacity-30 rounded-br-full"></div>
						</div>
					</div>
				</div>
			</div>
		</div>



















		<div className="hidden xl:block relative">
			<img className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/jenfhess/main/41_Home%202_Light/hero/b/Rectangle1650.png" alt="" />
			<div className="hidden md:block absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] opacity-50"></div>
			<div className="relative px-[15px]">
				<div className="text-[40px] xl:text-[60px] leading-[1] font-bold hidden md:flex justify-center items-end gap-[30px]">
					<div className="flex flex-col items-center">
						<div className="w-[10px] pt-[150px] border-r-[1px] border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
						<div className="">
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
							<div className="py-[10px]"></div>
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
						</div>
						<div className="pt-[10px]"></div>
					</div>
					<div data-scroll="[data-scroll-item]" className="overflow-hidden">
						<div data-scroll-cog="" className="hidden">
							
						</div>
						<div data-scroll-item="" className="group c-active">
							<div className="flex justify-center">
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">T</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">T</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">T</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">T</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">T</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">o</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">o</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">o</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">o</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">o</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">p</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">p</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">p</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">p</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">p</div>
                                </div>
								<div className="">&nbsp;</div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">B</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">B</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">B</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">B</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">B</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">u</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">u</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">u</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">u</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">u</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">y</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">y</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">y</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">y</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">y</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">r</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">r</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">r</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">r</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">r</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">s</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">s</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">s</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">s</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">s</div>
                                </div>
								<div className="">&nbsp;</div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">i</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">i</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">i</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">i</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">i</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">n</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">n</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">n</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">n</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">n</div>
                                </div>
								<div className="">&nbsp;</div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">1</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">1</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">1</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">1</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">1</div>
                                </div>
								<div className="">&nbsp;</div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">W</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">W</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">W</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">W</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">W</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">e</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">e</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">e</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">e</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">e</div>
                                </div>
								<div className="group relative">
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-0">k</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#3F5EFB] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.3s]">k</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-white group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.2s]">k</div>
                                    <div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 text-[#FC466B] group-hover:rotate-45 group-hover:scale-y-0 transition-all duration-[.3s] delay-[.1s]">k</div>
                                    <div className="origin-top [-webkit-text-stroke:1px_#3F5EFB] text-transparent group-hover:-rotate-0 transition-all duration-[.3s] delay-[.4s]">k</div>
                                </div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-[10px] pt-[150px] border-r-[1px] border-l-[1px] border-[#3F5EFB] border-opacity-30"></div>
						<div className="">
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
							<div className="py-[10px]"></div>
							<div className="h-[10px] w-[50px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
						</div>
						<div className="pt-[10px]"></div>
					</div>
				</div>
				<div className="pt-[100px]"></div>
				<div data-slider="" className="">
					<div data-slider-cog="" className="hidden">
						
					</div>
					<div className="tns-outer" id="tns3-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">1</span>  of 2</div><div id="tns3-mw" className="tns-ovh"><div className="tns-inner" id="tns3-iw"><div className="buyer  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns3">
						<div className="tns-item tns-slide-active" id="tns3-item0">
							<div className="flex justify-center gap-[30px]">
								<div className="relative flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/1.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/2.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/3.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div className="">
											<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/4.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/5.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pt-[30px]"></div>
							<div className="flex justify-center gap-[30px]">
								<div className="relative flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/6.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/7.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/9.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/10.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="tns-item" id="tns3-item1" aria-hidden="true" tabindex="-1">
							<div className="flex justify-center gap-[30px]">
								<div className="relative flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/1.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/2.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/3.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div className="">
											<div data-scroll="[data-scroll-item]" className="overflow-hidden">
												<div data-scroll-cog="" className="hidden">
													
											</div>
											<div data-scroll-item="" className="group">
												<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/4.svg" alt="Gradient Card" />
		  									</div>
											</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/5.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pt-[30px]"></div>
							<div className="flex justify-center gap-[30px]">
								<div className="relative flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/6.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/7.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/9.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative hidden md:flex justify-center items-center">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded opacity-20"></div>
									<div className="relative py-[10px] px-[30px]">
										<div data-scroll="[data-scroll-item]" className="overflow-hidden">
											<div data-scroll-cog="" className="hidden">
												
											</div>
											<div data-scroll-item="" className="group">
											<div className="relative rounded-full overflow-hidden">
												<div className="bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-[15px] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#FC466B] to-white rounded-[15px] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-[15px] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="bg-gradient-to-tr from-[#3F5EFB] to-white rounded-[15px] delay-[.4s] transition-all duration-[.3s]"></div>
												<img className="w-full rounded-[15px] delay-[.4s] transition-all duration-[.3s]" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home5/10.svg" alt="Gradient Card" />
		  									</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div></div></div></div>
				</div>
				<div className="pt-[100px]"></div>
				<div className="flex justify-center items-center gap-[30px]">
					<a className="buyer-prev" href="javascript:void(0)" aria-controls="tns3" tabindex="-1" data-controls="prev" aria-disabled="true">
						<img className="" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/arrow-left.svg" alt="" />
					</a>
					<div className="flex justify-center gap-[10px] buyer-dots" aria-label="Carousel Pagination">
						<div className="group tns-nav-active" data-nav="0" aria-label="Carousel Page 1 (Current Slide)" aria-controls="tns3">
							<div className="w-[10px] h-[10px] group-[.tns-nav-active]:w-[30px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full transition-all duration-[.3s]"></div>
						</div>
						<div className="group" data-nav="1" tabindex="-1" aria-label="Carousel Page 2" aria-controls="tns3">
							<div className="w-[10px] h-[10px] group-[.tns-nav-active]:w-[30px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full transition-all duration-[.3s]"></div>
						</div>
						<div className="group" data-nav="2" tabindex="-1" aria-label="Carousel Page 3" aria-controls="tns3">
							<div className="w-[10px] h-[10px] group-[.tns-nav-active]:w-[30px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full transition-all duration-[.3s]"></div>
						</div>
						<div className="group" data-nav="3" tabindex="-1" aria-label="Carousel Page 4" aria-controls="tns3">
							<div className="w-[10px] h-[10px] group-[.tns-nav-active]:w-[30px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full transition-all duration-[.3s]"></div>
						</div>
						<div className="group" data-nav="4" tabindex="-1" aria-label="Carousel Page 5" aria-controls="tns3">
							<div className="w-[10px] h-[10px] group-[.tns-nav-active]:w-[30px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full transition-all duration-[.3s]"></div>
						</div>
					</div>
					<a className="buyer-next" href="javascript:void(0)" aria-controls="tns3" tabindex="-1" data-controls="next">
						<img className="" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/arrow-right.svg" alt="" />
					</a>
				</div>
				<div className="pt-[150px]"></div>
			</div>
		</div>





		<div className="relative text-[#110d2e]">
			<div className="relative max-w-[1320px] mx-auto px-[15px]">
				<div className="flex justify-between gap-[30px]">
					<div className="">
						<div className="flex justify-between">
							<div className="flex flex-col items-center">
								<div className="pt-[100px] w-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
							</div>
							<div className="flex flex-col items-center">
								<div className="pt-[100px] w-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
							</div>
						</div>
						<div className="text-[20px] md:text-[30px] font-bold">Marketplace</div>
						<div className="py-[20px] flex items-center"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">All NFTs</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Popular Art</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Digital Art</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Trending</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Explore Details</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Live Action</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex justify-between">
							<div className="flex flex-col items-center">
								<div className="pt-[100px] w-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
							</div>
							<div className="flex flex-col items-center">
								<div className="pt-[100px] w-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
							</div>
						</div>
						<div className="text-[30px] font-bold">My Account</div>
						<div className="py-[20px] flex items-center"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Profile</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">My Collection</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Create &amp; Upload</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Account Setting</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Connect wallet</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Wishlist</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
					</div>
					<div className="">
						<div className="flex justify-between">
							<div className="flex flex-col items-center">
								<div className="pt-[100px] w-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
							</div>
							<div className="flex flex-col items-center">
								<div className="pt-[100px] w-[2px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
							</div>
						</div>
						<div className="text-[20px] md:text-[30px] font-bold">Our Company</div>
						<div className="py-[20px] flex items-center"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Recent News</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">How it Works</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">About Us</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Contact Us</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">Help Center</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex items-center">
							<a className="group pe-[10px]" href="#">
								<div className="">FAQs</div>
							</a>
							<div className="flex-1 border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
						</div>
					</div>
					<div className="hidden xl:block">
						<div className="flex justify-between">
							<div className="flex flex-col items-center">
								<div className="pt-[100px] w-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
							</div>
							<div className="flex flex-col items-center">
								<div className="pt-[100px] w-[2px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
							</div>
							<div className="flex flex-col items-center">
								<div className="pt-[100px] w-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
								<div className="w-[50px] h-[2px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
								<div className="h-[10px]"></div>
							</div>
						</div>
						<div className="text-[30px] font-bold">Subscribe to our newsletter.</div>
						<div className="py-[20px] flex items-center"></div>
						<div className="relative">
							<div className="absolute top-0 right-0 bottom-0 left-0 border-[2px] border-[#FC466B] border-opacity-30 rounded-full"></div>
							<div className="flex justify-between items-center ps-[30px] pe-[15px] py-[12px]">
								<div className="opacity-50">Enter Your Email</div>
								<a className="group relative flex items-center justify-center h-[44px] rounded-full overflow-hidden" href="#">
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
									<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] rounded-full group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="px-[15px]">
										<div className="relative">
											<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/arrow-subscribe-right.svg" alt="" />
											</div>
											<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">
												<img className="" src="https://raw.githubusercontent.com/uiaextend/twenfhess/main/home1/arrow-subscribe-right.svg" alt="" />
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex gap-[10px]">
							<div className="">
								<i className="fa-regular fa-square-check"></i>
							</div>
							<div className="">
								<div className="">Please fill this form and we will notify you</div>
								<div className="">about the newest updates!</div>
							</div>
						</div>
						<div className="py-[10px]"></div>
						<div className="flex gap-[20px] text-white">
							<a className="group relative flex items-center justify-center h-[44px] rounded overflow-hidden" href="#">
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] opacity-50 rounded group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="px-[15px]">
									<div className="relative">
										<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">
										<FaFacebook />
										</div>
										<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">
										<FaFacebook />
										</div>
									</div>
								</div>
							</a>
							<a className="group relative flex items-center justify-center h-[44px] rounded overflow-hidden" href="#">
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] opacity-50 rounded group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="px-[15px]">
									<div className="relative">
										<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">
										<FaTwitter />
										</div>
										<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">
										<FaTwitter />
										</div>
									</div>
								</div>
							</a>
							<a className="group relative flex items-center justify-center h-[44px] rounded overflow-hidden" href="#">
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] opacity-50 rounded group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="px-[15px]">
									<div className="relative">
										<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">
										<FaYoutube />
										</div>
										<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">
										<FaYoutube />
										</div>
									</div>
								</div>
							</a>
							<a className="group relative flex items-center justify-center h-[44px] rounded overflow-hidden" href="#">
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] opacity-50 rounded group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="px-[15px]">
									<div className="relative">
										<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">
										<FaInstagram />
										</div>
										<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">
										<FaInstagram />
										</div>
									</div>
								</div>
							</a>
							<a className="group relative flex items-center justify-center h-[44px] rounded overflow-hidden" href="#">
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] opacity-50 rounded group-hover:rotate-180 group-hover:scale-x-0 group-hover:delay-[.2s] delay-0 transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.15s] delay-[.05s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-[#3F5EFB] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.1s] delay-[.1s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-white group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-[.05s] delay-[.15s] transition-all duration-[.3s]"></div>
								<div className="origin-left absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#3F5EFB] to-[#FC466B] group-[:not(:hover)]:rotate-180 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]"></div>
								<div className="px-[15px]">
									<div className="relative">
										<div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s] text-1xl">
										<FaPinterest />
										</div>
										<div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s] text-1xl">
										<FaPinterest />
										</div>
									</div>
								</div>
							</a>
						</div>
						<div className="pt-[20px]"></div>
						<div className="flex items-center">
							<div className="">3.4<sup>k</sup> Followings</div>
							<div className="px-[10px]"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
							<div className="px-[20px] border-t-[1px] border-t-[#FC466B] border-opacity-30"></div>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-transparent rounded-full"></div>
							<div className="px-[10px]"></div>
							<div className="">1.2<sup>k</sup> Followers</div>
						</div>
					</div>
				</div>
				<div className="pt-[100px]"></div>
				<div className="hidden md:block relative text-white">
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#110d2e] rounded-tl-full rounded-tr-full"></div>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] opacity-30 rounded-tl-full rounded-tr-full"></div>
					<div className="relative flex justify-between px-[50px] py-[20px]">
						<div className="">Copyright 2024. Created by thememarch.</div>
						<a className="hidden xl:block group" href="#">
							<div className="">
							<RxPinTop />
							</div>
						</a>
						<div className="flex items-center gap-[20px]">
							<a className="group" href="#">
								<div className="">Privacy Policy</div>
							</a>
							<div className="w-[10px] h-[10px] bg-gradient-to-tr from-[#FC466B] to-[#3F5EFB] rounded-full"></div>
							<a className="group" href="#">
								<div className="">Term &amp; Condition</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>


		




    </>
  );
}

export default App;

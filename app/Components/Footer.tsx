import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white text-black w-full">
            <div className="flex gap-10 w-[82%] mx-auto justify-evenly py-5 ">
                <div className="logo text-3xl text-gray-900 font-bold">
                    NerdNest
                </div>
                <div className="links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-14">
                    <div>
                        <h4 className="pb-3 text-gray-500 font-bold">Product</h4>
                        <ul className="gap-5">
                            <li className="text-gray-400"><Link href="#" >pricing</Link></li>
                            <li className="text-gray-400"><Link href="#" >Features</Link></li>
                            <li className="text-gray-400"><Link href="#" >Security</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="pb-3 text-gray-500 font-bold">Supoort</h4>
                        <ul className="gap-3">
                            <li className="text-gray-400"><Link href="#" >Contact</Link></li>
                            <li className="text-gray-400"><Link href="#" >Platforms</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="pb-3 text-gray-500 font-bold">Legal</h4>
                        <ul className="gap-3">
                            <li className="text-gray-400"><Link href="#" >Terms of Use</Link></li>
                            <li className="text-gray-400"><Link href="#" >Privacy Policy</Link></li>
                            <li className="text-gray-400"><Link href="#" >GCPR</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="pb-3 text-gray-500 font-bold">Company</h4>
                        <ul className="gap-3">
                            <li className="text-gray-400"><Link href="#" ></Link>About</li>
                            <li className="text-gray-400"><Link href="#" ></Link>Blogs</li>
                            <li className="text-gray-400"><Link href="#" ></Link>job</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="pb-3 text-gray-400">Get it</h3>
                    <span className=" text-gray-400">Available on Chrome Store</span>
                    <button className="text-white bg-orange-400 py-3 px-2 my-2 rounded-md font-bold">
                        Download Now
                    </button>
                </div>
            </div>
            <div className="separetion w-[82%] mx-auto bg-gray-400 h-[2px]  my-7"></div>
            <div className="w-[82%] mx-auto py-2 mb-8 flex justify-between ">
                <div>
                    <h4 className="text-sm text-gray-400"> ALL rights are reserved @NerdNest 2025</h4>
                </div>
                <div className="socials flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
                    </svg>
                </div>
            </div>
        </footer>
    );
}

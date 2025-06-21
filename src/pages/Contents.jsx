import React, { useState ,useEffect,useRef} from "react";
import Projects from "../components/Projects";
import ConfNet from "../components/ConfNet";
import Certs from "../components/Certs";
import CareerOverview from "../components/CareerOverview";
import PayitForward from "../components/PayitForward";
import AboutMe from "../components/AboutMe";
import OutsideWork from "../components/OutsideWork";
import Modal from "../components/modals/Modal";
import ProjectDetails from "../components/modalContents/ProjectDetails";
import CertificatesDetails from "../components/modalContents/CertificatesDetails";
import PayItForwardDetails from "../components/modalContents/PayItForwardDetails";
import ConfNetDetails from "../components/modalContents/ConfNetDetails";
import AboutMeDetails from "../components/modalContents/AboutMeDetails";
import MaintenancePage from "../pages/Maintenance"

const Contents = ({ heroRef }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (Component) => {
    setModalContent(<Component />);
  };

  const closeModal = () => {
    setModalContent(null);
    setTimeout(() => setModalContent(null), 300);
  };

  const contentsSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          // Contents is out of view (scrolled down → up) → scroll to hero
          heroRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (contentsSectionRef.current) {
      observer.observe(contentsSectionRef.current);
    }

    return () => {
      if (contentsSectionRef.current) {
        observer.unobserve(contentsSectionRef.current);
      }
    };
  }, [heroRef]);

  return (
    <div
    ref={contentsSectionRef} 
      className=" h-screen bg-[#F6F7F8] grid grid-cols-9 grid-rows-8 gap-4 p-4"
      data-aos="zoom-in-up"
    >
      <div
        className="  col-span-4 row-span-4 bg-white rounded-2xl shadow relative group overflow-hidden"
        // onClick={() => openModal(ProjectDetails)}
        onClick={() => openModal(MaintenancePage)}
      >
        <Projects />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 cursor-pointer group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
          <p className="text-white text-sm font-medium">
            View project highlights
          </p>
        </div>
      </div>
      <div
        className="relative col-span-2 row-span-2 col-start-5 bg-white rounded-2xl shadow group overflow-hidden"
        // onClick={() => openModal(CertificatesDetails)}
        onClick={() => openModal(MaintenancePage)}
      >
        <Certs />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 cursor-pointer group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
          <p className="text-white text-sm font-medium">
            Check out my certifications
          </p>
        </div>
      </div>
      <div
        className="col-span-3 row-span-2 col-start-7 bg-white rounded-2xl shadow relative group overflow-hidden"
        // onClick={() => openModal(PayItForwardDetails)}
        onClick={() => openModal(MaintenancePage)}
      >
        <PayitForward />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 cursor-pointer group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
          <p className="text-white text-sm font-medium">
            Explore my workshops and community impact
          </p>
        </div>
      </div>
      <div className="z-0 col-span-3 row-span-6 col-start-5 row-start-3 bg-white rounded-2xl shadow">
        <CareerOverview />
      </div>
      <div
        className="col-span-2 row-span-3 col-start-8 row-start-3 bg-white rounded-2xl shadow relative group overflow-hidden"
        // onClick={() => openModal(AboutMeDetails)}
        onClick={() => openModal(MaintenancePage)}
      >
        <AboutMe />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 cursor-pointer group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
          <p className="text-white text-sm font-medium">Get to know me</p>
        </div>
      </div>
      <div className="col-span-2 row-span-3 col-start-8 row-start-6 bg-white rounded-2xl shadow relative group overflow-hidden">
        <OutsideWork />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 cursor-pointer group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
          <p className="text-white text-sm font-medium">
            See what I do beyond work
          </p>
        </div>
      </div>
      <div
        className="col-span-3 row-span-4 col-start-1 row-start-5 bg-white rounded-2xl shadow relative group overflow-hidden"
        // onClick={() => openModal(ConfNetDetails)}
        onClick={() => openModal(MaintenancePage)}
      >
        <ConfNet />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 cursor-pointer group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
          <p className="text-white text-sm font-medium">
            Learning beyond the workplace
          </p>
        </div>
      </div>
      <div className=" col-start-4 row-start-5 bg-white rounded-2xl shadow flex items-center justify-center relative cursor-pointer group">
        <a
          href="https://www.linkedin.com/in/glenn-zaballero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3366 15.3371H12.6696V11.1603C12.6696 10.1643 12.6518 8.8822 11.2825 8.8822C9.89336 8.8822 9.6808 9.9674 9.6808 11.0878V15.3368H7.01385V6.74773H9.57414V7.92152H9.61C9.86622 7.48341 10.2365 7.12299 10.6813 6.87866C11.1262 6.63432 11.629 6.51523 12.1362 6.53405C14.8394 6.53405 15.3377 8.31211 15.3377 10.6252L15.3366 15.3371ZM4.00447 5.57372C3.14969 5.57386 2.45662 4.881 2.45647 4.02621C2.45633 3.17142 3.14912 2.47835 4.00391 2.47821C4.8587 2.478 5.55177 3.17086 5.55191 4.02565C5.55199 4.43613 5.389 4.82984 5.0988 5.12016C4.8086 5.41047 4.41496 5.57362 4.00447 5.57372ZM5.33802 15.3372H2.66819V6.74773H5.33795V15.3371L5.33802 15.3372ZM16.6662 0.00131006H1.32803C0.603107 -0.0068462 0.00861523 0.573865 -0.000244141 1.29879V16.701C0.00833398 17.4262 0.602756 18.0075 1.32796 17.9999H16.6662C17.393 18.0089 17.9897 17.4276 17.9998 16.701V1.29759C17.9894 0.571263 17.3926 -0.00937745 16.6662 0.000114742"
              fill="#0A66C2"
            />
          </svg>
        </a>
        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          LinkedIn
        </span>
      </div>
      <div className="col-start-4 row-start-6 bg-white rounded-2xl shadow flex items-center justify-center relative cursor-pointer group">
        <a
          href="https://github.com/Gu-ren"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 0V24H0V0H24Z" fill="white" fill-opacity="0.01" />
            <path
              d="M12 2C17.525 2 22 6.475 22 12C21.9995 14.0953 21.3419 16.1376 20.1198 17.8395C18.8977 19.5415 17.1727 20.8173 15.1875 21.4875C14.6875 21.5875 14.5 21.275 14.5 21.0125C14.5 20.675 14.5125 19.6 14.5125 18.2625C14.5125 17.325 14.2 16.725 13.8375 16.4125C16.0625 16.1625 18.4 15.3125 18.4 11.475C18.4 10.375 18.0125 9.4875 17.375 8.7875C17.475 8.5375 17.825 7.5125 17.275 6.1375C17.275 6.1375 16.4375 5.8625 14.525 7.1625C13.725 6.9375 12.875 6.825 12.025 6.825C11.175 6.825 10.325 6.9375 9.525 7.1625C7.6125 5.875 6.775 6.1375 6.775 6.1375C6.225 7.5125 6.575 8.5375 6.675 8.7875C6.0375 9.4875 5.65 10.3875 5.65 11.475C5.65 15.3 7.975 16.1625 10.2 16.4125C9.9125 16.6625 9.65 17.1 9.5625 17.75C8.9875 18.0125 7.55 18.4375 6.65 16.925C6.4625 16.625 5.9 15.8875 5.1125 15.9C4.275 15.9125 4.775 16.375 5.125 16.5625C5.55 16.8 6.0375 17.6875 6.15 17.975C6.35 18.5375 7 19.6125 9.5125 19.15C9.5125 19.9875 9.525 20.775 9.525 21.0125C9.525 21.275 9.3375 21.575 8.8375 21.4875C6.8458 20.8245 5.11342 19.5513 3.88611 17.8483C2.65881 16.1453 1.9989 14.0991 2 12C2 6.475 6.475 2 12 2Z"
              fill="#1F2328"
            />
          </svg>
        </a>
        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Github
        </span>
      </div>
      <div className="col-start-4 row-start-7 bg-white rounded-2xl shadow flex items-center justify-center relative cursor-pointer group">
        <a
          href="https://mail.google.com/mail/?view=cm&to=zaballeroglenn052901@gmail.com&su=Hello%20Glenn&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 0V24H0V0H24Z" fill="white" fill-opacity="0.01" />
            <path
              d="M21.6336 12.1873C21.6336 11.3679 21.5671 10.77 21.4232 10.1499H12.0665V13.8482H17.5587C17.448 14.7673 16.85 16.1514 15.5213 17.0815L15.5026 17.2053L18.461 19.4972L18.666 19.5176C20.5484 17.7791 21.6336 15.2213 21.6336 12.1873Z"
              fill="#4285F4"
            />
            <path
              d="M12.0665 21.9312C14.7572 21.9312 17.016 21.0453 18.666 19.5173L15.5212 17.0812C14.6797 17.6681 13.5502 18.0777 12.0665 18.0777C9.43115 18.0777 7.19443 16.3393 6.3971 13.9365L6.28023 13.9464L3.20405 16.3271L3.16382 16.439C4.8026 19.6944 8.16878 21.9312 12.0665 21.9312Z"
              fill="#34A853"
            />
            <path
              d="M6.39709 13.9368C6.18671 13.3167 6.06495 12.6523 6.06495 11.9658C6.06495 11.2793 6.18671 10.6149 6.38602 9.99484L6.38045 9.86278L3.26572 7.44385L3.16381 7.49232C2.48839 8.84324 2.10083 10.3603 2.10083 11.9658C2.10083 13.5714 2.48839 15.0884 3.16381 16.4393L6.39709 13.9368Z"
              fill="#FBBC05"
            />
            <path
              d="M12.0665 5.85336C13.9378 5.85336 15.2001 6.66168 15.9199 7.33718L18.7324 4.59107C17.005 2.9855 14.7572 2 12.0665 2C8.16878 2 4.8026 4.23672 3.16382 7.49214L6.38603 9.99466C7.19443 7.59183 9.43115 5.85336 12.0665 5.85336Z"
              fill="#EB4335"
            />
          </svg>
        </a>
        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Gmail
        </span>
      </div>
      <div className="col-start-4 row-start-8 bg-white rounded-2xl shadow flex items-center justify-center relative cursor-pointer group">
        <a
          href="https://wa.me/639151324807?text=Hi%20Glenn%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 0V24H0V0H24Z" fill="white" fill-opacity="0.01" />
            <path
              d="M21.9155 11.5497C21.8221 8.99542 20.7458 6.57599 18.9111 4.79653C17.0763 3.01706 14.6251 2.01515 12.0693 2H12.021C10.2998 1.99872 8.60801 2.44558 7.11192 3.29661C5.61587 4.14764 4.36716 5.3735 3.48866 6.85358C2.61016 8.33368 2.13215 10.017 2.10165 11.7379C2.07116 13.4588 2.48923 15.1579 3.31474 16.6683L2.43818 21.9135C2.43675 21.9243 2.43763 21.9352 2.44076 21.9456C2.44389 21.956 2.4492 21.9656 2.45634 21.9738C2.46347 21.982 2.47226 21.9885 2.48213 21.9931C2.492 21.9976 2.50272 21.9999 2.51357 22H2.52865L7.71662 20.846C9.05708 21.4895 10.525 21.8235 12.0119 21.8231C12.1065 21.8231 12.2009 21.8231 12.2954 21.8231C13.6034 21.7857 14.8911 21.4897 16.084 20.9521C17.277 20.4145 18.3517 19.646 19.2461 18.6909C20.1405 17.7357 20.8369 16.6129 21.295 15.3872C21.7531 14.1615 21.964 12.8573 21.9155 11.5497ZM12.2461 20.0991C12.1677 20.0991 12.0893 20.0991 12.0119 20.0991C10.6978 20.1007 9.40247 19.7863 8.23532 19.1823L7.96994 19.0436L4.45165 19.8749L5.10102 16.3154L4.95024 16.0601C4.23007 14.8323 3.84217 13.438 3.82474 12.0146C3.8073 10.5913 4.16093 9.18788 4.85081 7.94278C5.54069 6.69766 6.543 5.65372 7.75904 4.91378C8.97507 4.17384 10.3629 3.76342 11.7858 3.72296C11.8649 3.72296 11.9443 3.72296 12.024 3.72296C14.1723 3.72933 16.2321 4.57938 17.7597 6.08998C19.2872 7.60057 20.1602 9.65082 20.1905 11.7989C20.2208 13.947 19.4061 16.021 17.9218 17.5741C16.4375 19.1273 14.4025 20.0351 12.2552 20.1021L12.2461 20.0991Z"
              fill="#25D366"
            />
            <path
              d="M8.21062 7.20578C8.32251 7.15588 8.44327 7.12894 8.56574 7.12655L8.58687 7.12354C8.75274 7.12856 8.9186 7.13359 9.06334 7.14364L9.06443 7.14372C9.2401 7.15677 9.44068 7.17166 9.6092 7.598C9.81727 8.0976 10.2606 9.34306 10.3199 9.46973C10.3571 9.53619 10.3773 9.61079 10.3785 9.68699C10.3797 9.76313 10.362 9.83839 10.3269 9.90599C10.2591 10.0517 10.1711 10.187 10.0655 10.3081C9.93687 10.4499 9.8032 10.6137 9.67854 10.7323C9.55387 10.8509 9.4172 10.9816 9.55387 11.2349C9.9076 11.8875 10.3561 12.4841 10.8848 13.0051C11.4506 13.5591 12.1151 14.0024 12.844 14.3119C12.9283 14.3561 13.0213 14.3811 13.1164 14.3853C13.168 14.3844 13.2189 14.3727 13.2656 14.3509C13.3123 14.329 13.354 14.2976 13.3878 14.2587C13.5427 14.1018 14.0041 13.558 14.2051 13.3077C14.2364 13.2563 14.2798 13.2133 14.3315 13.1825C14.3831 13.1517 14.4415 13.1339 14.5016 13.1308C14.5939 13.1376 14.6841 13.1611 14.768 13.2001C14.9942 13.2906 16.1975 13.9339 16.4427 14.0626C16.688 14.1913 16.8509 14.2637 16.9101 14.3642C16.9695 14.4647 16.9544 14.9673 16.7292 15.5423C16.5041 16.1173 15.4717 16.6461 15.0143 16.6742C14.8786 16.6823 14.7489 16.7003 14.577 16.7003C14.1599 16.7003 13.5165 16.5918 12.0489 15.9595C9.55187 14.8869 8.03601 12.2421 7.91638 12.0723L7.91542 12.0709C7.79226 11.896 6.94142 10.6878 6.97951 9.46673C7.01771 8.24235 7.67814 7.65932 7.91438 7.41706C7.998 7.32753 8.09874 7.25568 8.21062 7.20578Z"
              fill="#25D366"
            />
          </svg>
        </a>
        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp
        </span>
      </div>
      <Modal isOpen={!!modalContent} onClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default Contents;

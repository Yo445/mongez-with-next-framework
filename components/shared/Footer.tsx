import { useTranslation } from "react-i18next";
import Logo from "@/assets/logos/Mongez-brand-footer.svg";
import Image from "next/image";

export default function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="">
      <div className="bg-[#211f19] p-8 text-[#eae1d1]">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <Image src={Logo} alt="logo" className="w-[15em] " />
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[#92722a]">
                  {t('Company')}
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-[#92722a]"> {t("aboutus")} </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#92722a]"> {t("conditions")} </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#92722a]"> {t("policy")} </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#92722a]"> {t("contact")} </a>
                </li>
              </ul>
            </div>

            <div className="my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-[#92722a]">
                  {t("connect")}
                </h2>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-[#4d4e54] rounded-full mr-1 hover:text-[#92722a] hover:border-[#92722a]"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-[#4d4e54] rounded-full mr-1 hover:text-[#92722a] hover:border-[#92722a]"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>

              <a
                href="https://wa.me/971585562800"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-8 w-8 border border-[#4d4e54] rounded-full mr-1 hover:text-[#92722a] hover:border-[#92722a]"
              >
                <span className="[&>svg]:h-4 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                </span>
              </a>


              <div className="mt-4">
                <p>
                  <strong>{t("wp-ph")}: </strong>
                  <a
                    href="https://wa.me/971585562800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rtl:dir-ltr ltr:dir-ltr"
                    dir="ltr"
                  >
                    (+971) 58 556 2800
                  </a>
                </p>
                <p>
                  <strong>{t("land")}: </strong>
                  <a
                    href="tel:043394199"
                    className="rtl:dir-ltr ltr:dir-ltr"
                    dir="ltr"
                  >
                    043394199
                  </a>
                </p>

                <p><strong>{t("whours")}:</strong> (9AM – 8PM) GMT+4</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#110f0b] py-4 text-[#8b8373]">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              All Rights Reserved ©
              {new Date().getFullYear() > 2020 &&
                ` ${new Date().getFullYear()} `}
              Mongez
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
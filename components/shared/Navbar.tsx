'use client'
import { useRouter } from 'next/navigation'
import { useTranslation } from "react-i18next";
import { authContext } from "@/context/authContext";
import { useContext } from "react";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import Logo from "@/assets/logos/Mongez-brand-logo.svg";
import Image from "next/image";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { i18n, t } = useTranslation();
  const { token, setToken } = useContext(authContext); // Decoded token with roles
  const router = useRouter();

  // Function to change language
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  const Logout = () => {
    localStorage.removeItem('tkn');
    setToken(null);
    router.push('/signin');
  };

  return (
    <header className=" bg-[#e6e4df] top-0  left-0 right-0 z-50 mx-auto flex flex-col overflow-hidden px-12 py-3 lg:flex-row lg:items-center">
      <Link href="/" className="flex items-center whitespace-nowrap text-2xl font-black text-white">
        <Image src={Logo} alt="logo" className="w-[8em]" />
      </Link>

      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label className="absolute top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
        <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" stroke="#000">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
      <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          {(token?.roles === "User" || !token) && token?.roles !== "Admin" && (
            <li>
              <Link href="/" className="flex items-center p-2 rounded-lg text-black hover:text-[#92722a] hover:bg-[#ddd] font-bold text-[1.1em] group">
                <span className="flex-1 ms-3 space-nowrap">
                  {t("home")}
                </span>
              </Link>
            </li>
          )}

          {token?.roles === "User" && (
            <li>
              <Link href="/user/manage-history" className="flex items-center p-2 rounded-lg text-black hover:text-[#92722a] hover:bg-[#ddd] font-bold text-[1.1em] group">
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {t("history")}
                </span>
              </Link>
            </li>
          )}

          {/* Admin Routes */}
          {token?.roles === "Admin" && (
            <>
              <li>
                <Link href="/admin/manage-services" className="flex items-center p-2 rounded-lg text-black hover:text-[#92722a] hover:bg-[#ddd] font-bold text-[1.1em] group">
                  <MdOutlineDesignServices className="flex-shrink-0 text-[24px] transition duration-75 dark:text-c1 dark:group-hover:text-black" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {t("manage_serv")}
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/admin/add-admin" className="flex items-center p-2 rounded-lg text-black hover:text-[#92722a] hover:bg-[#ddd] font-bold text-[1.1em] group">
                  <RiUserSettingsFill className="flex-shrink-0 text-[24px] transition duration-75 dark:text-c1 dark:group-hover:text-black" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {t("manage_users")}
                  </span>
                </Link>
              </li>
            </>
          )}
        </ul>
        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex items-center lg:my-0 lg:ml-auto gap-10 rtl:gap-reverse">
          <div className="flex items-center">
            {/* Language Dropdown */}
            <select
              className="text-black py-2 px-2 rounded-md hover:bg-[#ddd] hover:text-[#92722a]"
              onChange={handleLanguageChange}
              defaultValue={i18n.language}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="ur">اردو</option>
            </select>
          </div>

          {token ? (
            <button onClick={Logout} className="px-[2em] py-[0.5em] bg-[brown] font-semibold text-white hover:bg-[red] rounded-full whitespace-nowrap">
              <span className="signin-split">{t('logout')}</span>
            </button>
          ) : (
            <Link href="/signin" className="px-[2em] py-[0.5em] bg-[#92722a] font-semibold hover:bg-[#66511f] text-white rounded-full whitespace-nowrap">
              <span className="signin-split">{t("signin")}</span>
            </Link>
          )}
        </div>

      </nav>
    </header>
  );
};

export default Navbar;

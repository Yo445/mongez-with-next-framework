'use client'

import { useEffect, useContext } from "react";
import { useRouter } from 'next/navigation'
import { useTranslation } from "react-i18next";
import { authContext } from "@/context/authContext";
import {Services} from '@/data/services-data';
interface AuthContextType {
  token: string | null;
}

interface Service {
  id: string;
  title: string;
  link: string;
  required_docs?: string[];
  cost: string;
  steps: string[];
  term_of_services: string;
  eligibility_criteria?: string[];
  processing_time?: string;
  additional_fees?: string;
  contact_info?: string;
  notes?: string;
  icon: React.ReactNode;

}

interface ServicesData {
  services: Service[];
}

export default function ServicePage() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { token } = useContext(authContext) as AuthContextType;

  // Scroll to the top when this component mounts (handling SSR)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  const serviceId = router.query.serviceId as string; // Get serviceId from query params

const selectedService: Service | ServicesData = Services.services.find((service: Service) => service.id === serviceId);

  if (!selectedService) {
    return <div>{t("service_not_found")}</div>; // Handle case when service is not found
  }

  const handleStartClick = () => {
    if (!token) {
      // If not authenticated, redirect to login page with the serviceId
      router.push({
        pathname: "/signin",
        query: { serviceId },
      });
    } else {
      // If authenticated, proceed to the service page (in this case, `ser1`)
      router.push(`/user/ser${serviceId}`);
    }
  };

  return (
    <>
      <div className="p-[2em] sm:max-w-xl md:max-w-full lg:max-w-screen-2xl lg:px-8 mx-auto">
        {/* Service Title Section */}
        <section className="mb-10">
          <h1 className="text-5xl font-bold mb-4">{selectedService.title}</h1>
        </section>

        {/* Service Required Documents Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t("required_docs")}</h2>
          <p className="text-md mb-4">{t("sernote")}</p>
          {/* Loop through the required_documents array */}
          {selectedService.required_docs.map((document, index) => (
            <div className="flex items-center mb-2 border-b py-2" key={index}>
              <span
                className={`text-orange-500 ${i18n.language === "ar" || i18n.language === "ur" ? "ml-2" : "mr-2"}`}
              >
                •
              </span>
              <span className="font-semibold">{document}</span>
            </div>
          ))}
        </section>

        {/* Cost Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">{t("cost")}</h2>
          <div className="flex items-center mb-2 border-b py-2">
            <span
              className={`text-orange-500 ${i18n.language === "ar" || i18n.language === "ur" ? "ml-2" : "mr-2"}`}
            >
              •
            </span>
            <h4 className="text-m font-bold mb-2">{t("compfee1")}</h4>
          </div>

          <div className="flex justify-between mb-3 py-2">
            <span>{t("comp1-1")}</span>
            <span className="font-semibold">{selectedService.cost}</span>
          </div>

          {/* Additional Cost Sections */}
          {selectedService.additional_fees && (
            <div className="flex justify-between mb-3 py-2">
              <span>{selectedService.additional_fees}</span>
            </div>
          )}
        </section>

        {/* Services Steps Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">{t("steps")}</h2>
          {selectedService.steps.map((step, index) => (
            <div className="relative mb-4 flex items-center" key={index}>
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-black p-2 text-center text-base font-semibold text-white shadow ${i18n.language === "ar" || i18n.language === "ur" ? "ml-4" : "mr-4"}`}
              >
                {index + 1}
              </span>
              <div className="w-auto pt-1">
                <h6 className="text-sm font-semibold text-black-900">{step}</h6>
              </div>
            </div>
          ))}
        </section>

        {/* Service Notes Section (if exists) */}
        {selectedService.notes && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">{t("notes")}</h2>
            <span>{selectedService.notes}</span>
          </section>
        )}

        {/* Term of Services Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">{t("term_of_services")}</h2>
          <span>{selectedService.term_of_services}</span>
        </section>
      </div>

      {/* Service footer bar */}
      <div className="w-full bg-gray-100 py-6">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6">
          <div>
            <div className="text-lg font-semibold text-gray-800">{selectedService.title}</div>
            <div className="flex items-center space-x-4 text-gray-700">
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"></path>
                  <path d="M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"></path>
                </svg>
                <span>{t("Company_Liquidation.working_days")}</span>
              </div>
            </div>
          </div>

          {/* Start Service Button */}
          <button
            className="bg-[#92722a] text-white px-[5em] py-2 rounded-lg font-medium hover:bg-[#66511f] transition"
            onClick={handleStartClick}
          >
            {t("start")}
          </button>
        </div>
      </div>
    </>
  );
}

// Static services data for example
// const ServicesData: ServicesData = {
//   services: [
//     {
//       id: "1",
//       title: "Company Liquidation",
//       link: "/company-liquidation",
//       required_docs: [
//         "Copy of the license",
//         "Company Establishment Contract",
//         "Copy of passport and ID for all partners and the manager",
//         "The minutes of the general assembly meeting authenticated by a notary public",
//         "A letter from the company stating no objection to the liquidation, stamped and signed",
//         "What is proven from the passports, labor and workers that there are no residencies on the company or any labor problems",
//         "Mobile Number"
//       ],
//       cost: "AED 2,000 (If all partners are present)",
//       steps: [
//         "Documenting the minutes of the general assembly by a notary public.",
//         "Submit the liquidation request with all required documents.",
//         "Wait for approval from the relevant authorities and receive the liquidation certificate."
//       ],
//       term_of_services: "The waiting period for objection is 35 days.",
//       notes: "The first case: All partners are present with the license. The fee is AED 2,000.",
//     },
//   ],
// };


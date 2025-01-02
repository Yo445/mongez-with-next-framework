import React from "react";
import { 
  FcPaid, 
  FcFilledFilter, 
  FcDataRecovery, 
  FcFinePrint, 
  FcDeleteDatabase, 
  FcDonate, 
  FcCalculator, 
  FcHome, 
  FcDepartment, 
  FcBullish 
} from "react-icons/fc";
import { t } from "i18next"; 

// Define the type for an individual service
interface Service {
  id: string;
  icon: React.ComponentType<{ fontSize: string }>; // Type for icon component
  title: string;   // Title as a string
  link: string;    // URL link as a string
  required_docs?: string[]; // Array of required documents (optional for some services)
  cost?: string;    // The cost of the service (optional)
  steps?: string[]; // List of steps in the process (optional)
  term_of_services?: string; // Term of service (conditions for VAT registration) (optional)
  eligibility_criteria?: string[]; // Eligibility criteria (optional)
  processing_time?: string; // Processing time (optional)
  additional_fees?: string; // Additional fees (optional)
  contact_info?: string; // Contact information (optional)
  notes?: string; // Optional notes section (new for "Company Liquidation")
}

// Define the type for the ServicesData object
interface ServicesData {
  services: Service[];
}

// Create the ServicesData object with placeholders for services
export const Services: ServicesData = {
  services: [
    { 
      id: "1", 
      icon: FcPaid, 
      title: t("VAT_Registration.service"), 
      link: "vat-registration", 
      required_docs: [
        "Copy of the license and Company Establishment Contract",
        "Bank Account Details of the Company or its Manager",
        "Copy of Passport for Partners and Manager",
        "Copy of ID for Partners and Manager",
        "Table showing company income stamped and signed by the company manager",
        "Mobile Number",
        "If there is a username and password on the Federal Tax Authority website, it must be attached with the documents."
      ],
      cost: "AED 315",
      steps: [
        "Documents are submitted for the Federal Tax Authority and are under review within 20 days from the date of the application submission.",
        "Receipt and printing of the VAT registration certificate, username, and password."
      ],
      term_of_services: "The company or institution must achieve revenues of no less than AED 187,500 annually. Registration is required to clarify this to the Authority. VAT Registration will take 20 working days."
    },

    { 
      id: "2", 
      icon: FcDataRecovery, 
      title: t("Corporate_Tax_Registration.service"), 
      link: "corporate-tax-registration",
      required_docs: [
        "Copy of the company's trade license",
        "Details of the shareholders and board members",
        "Financial statements for the past 3 years",
        "Company's tax-related documents"
      ],
      cost: "AED 500",
      steps: [
        "Submit the application along with the required documents.",
        "Wait for review and approval by the Federal Tax Authority (approximately 15 business days).",
        "Receive the Corporate Tax registration certificate and account details."
      ],
      term_of_services: "Corporate tax registration is mandatory for companies with an annual revenue of AED 375,000 or more."
    },

    { 
      id: "3", 
      icon: FcFilledFilter, 
      title: t("Company_Liquidation.service"), 
      link: "company-liquidation", 
      required_docs: [
        "Copy of the license",
        "Company Establishment Contract",
        "Copy of passport and ID for all partners and the manager",
        "The minutes of the general assembly meeting authenticated by a notary public",
        "To set an appointment, the license holder will be contacted via phone number",
        "A letter from the company stating no objection to the liquidation, stamped and signed",
        "What is proven from the passports, labor and workers that there are no residencies on the company or any labor problems",
        "Mobile Number"
      ],
      cost: "AED 2,000 (If all partners are present), AED 650 (Notarization of liquidation minutes), AED 770 (Advertising fees), AED 100 (Printing final stage certificate)",
      steps: [
        "Documenting the minutes of the general assembly by a notary public.",
        "Submit the liquidation request with all required documents.",
        "Wait for approval from the relevant authorities and receive the liquidation certificate."
      ],
      term_of_services: "A power of attorney from a notary public is required to carry out liquidation procedures. This confirms no residencies or violations at work, workers, passports, and cancellation of the establishment card.",
      processing_time: "The waiting period for objection is 35 days.",
      notes: "The first case: All partners are present with the license. The fee is AED 2,000.\nThe second case: the absence or non-existence of one of the partners. The fees are determined after studying the case."
    },

    { 
      id: "4", 
      icon: FcDeleteDatabase, 
      title: t("Tax_Number_Cancellation.service"), 
      link: "tax-number-cancellation", 
      required_docs: [
        "Company’s tax registration number",
        "Proof of closure of business operations",
        "Company's final tax returns"
      ],
      cost: "AED 150",
      steps: [
        "Submit a cancellation request to the tax authority.",
        "Provide necessary closure documentation and clear any outstanding taxes.",
        "Wait for the cancellation approval and receive a tax deregistration certificate."
      ],
      term_of_services: "The process takes approximately 10 business days."
    },

    { 
      id: "5", 
      icon: FcDonate, 
      title: t("Settlement_of_Tax_Penalties.service"), 
      link: "settlement-of-tax-penalties",
      required_docs: [
        "Official penalty notice from the Federal Tax Authority",
        "Financial statements or proof of payment difficulties"
      ],
      cost: "Varies based on the penalty amount",
      steps: [
        "Review the penalty notice and prepare a settlement plan.",
        "Submit a settlement request with supporting documents.",
        "Wait for approval and settlement terms from the authority."
      ],
      term_of_services: "Settlement typically takes 20 business days depending on the penalty case."
    },

    { 
      id: "6", 
      icon: FcCalculator, 
      title: t("Submitting_Tax_Declarations.service"), 
      link: "submitting-tax-declarations",
      required_docs: [
        "Company's financial records for the tax period",
        "Tax-related documents and previous declarations"
      ],
      cost: "AED 200",
      steps: [
        "Prepare all tax-related documents for submission.",
        "Submit the tax declaration to the Federal Tax Authority.",
        "Confirm the submission and await processing confirmation."
      ],
      term_of_services: "The tax declaration process takes up to 5 business days for confirmation."
    },

    { 
      id: "7", 
      icon: FcFinePrint, 
      title: t("Approved_Financial_Reports_for_Various_Entities.service"), 
      link: "approved-financial-reports-for-various-entities",
      required_docs: [
        "Financial reports for the last fiscal year",
        "Audit report by a certified auditor",
        "Tax clearance certificate"
      ],
      cost: "AED 400",
      steps: [
        "Submit your financial reports to the approved auditor.",
        "Wait for the auditor’s approval and report submission.",
        "Receive the final financial report and clearance."
      ],
      term_of_services: "The process generally takes 15 business days after submission."
    },

    { 
      id: "8", 
      icon: FcHome, 
      title: t("Home_Tax_Refund_for_Citizens.service"), 
      link: "home-tax-refund-for-citizens",
      required_docs: [
        "Proof of residence",
        "Tax payment receipts",
        "Government-issued ID"
      ],
      cost: "AED 100",
      steps: [
        "Submit a refund request along with all the required documents.",
        "Wait for processing and approval from the tax authority.",
        "Receive the refund via bank transfer or cheque."
      ],
      term_of_services: "The tax refund process takes approximately 10 business days."
    },

    { 
      id: "9", 
      icon: FcDepartment, 
      title: t("Court_Announcements.service"), 
      link: "court-announcements",
      required_docs: [
        "Court case reference number",
        "Defendant's identification details"
      ],
      cost: "Varies by case",
      steps: [
        "Submit the court case details to the announcements department.",
        "Wait for the announcement to be processed and published.",
        "Receive confirmation of the announcement publication."
      ],
      term_of_services: "Announcements take between 5-7 business days to be processed."
    },

    { 
      id: "10", 
      icon: FcBullish, 
      title: t("Economic_Department_Announcements.service"), 
      link: "economic-department-announcements",
      required_docs: [
        "Business license",
        "Company’s financial stability proof"
      ],
      cost: "Varies by service",
      steps: [
        "Submit your business details and request to the Economic Department.",
        "Wait for the approval of the announcement.",
        "Receive the official announcement confirmation."
      ],
      term_of_services: "Economic department announcements typically take 5-10 business days."
    }
  ],
};

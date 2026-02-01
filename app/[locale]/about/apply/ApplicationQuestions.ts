import { RoleType } from "./ApplicationSelect";

export interface Question {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "file";
  placeholder?: string;
  options?: string[]; // For select type
  required: boolean;
}

export const applicationQuestions: Question[] = [
  {
    id: "role",
    label: "Role Applying For",
    type: "select",
    options: [
      "Frontend Engineer (React & Redux)",
      "AI Engineer (Deep Agents)",
      "Marketing Specialist",
      "Sales Representative",
      "Other",
    ],
    placeholder: "Select a role",
    required: true,
  },
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
    required: true,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "john@example.com",
    required: true,
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+30 691 234 5678",
    required: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn Profile / Portfolio",
    type: "text",
    placeholder: "https://linkedin.com/in/johndoe",
    required: false,
  },
  {
    id: "experience",
    label: "Years of Experience",
    type: "select",
    options: [
      "0-1 years",
      "1-3 years",
      "3-5 years",
      "5+ years",
      "Start-up Veteran",
    ],
    placeholder: "Select experience",
    required: true,
  },
  {
    id: "about",
    label: "Tell us about yourself",
    type: "textarea",
    placeholder:
      "Briefly describe your background and why you want to join us...",
    required: true,
  },
];

export const getRoleConfig = (role: RoleType) => {
  switch (role) {
    case "frontend":
      return {
        hustleLabel: "roles.frontend.hustleLabel",
        hustlePlaceholder: "roles.frontend.hustlePlaceholder",
        goalsLabel: "roles.frontend.goalsLabel",
        goalsPlaceholder: "roles.frontend.goalsPlaceholder",
        gateLabel: "roles.frontend.gateLabel",
        gatePlaceholder: "https://www.loom.com/share/...",
        portfolioLabel: "roles.frontend.portfolioLabel",
      };
    case "ai":
      return {
        hustleLabel: "roles.ai.hustleLabel",
        hustlePlaceholder: "roles.ai.hustlePlaceholder",
        goalsLabel: "roles.ai.goalsLabel",
        goalsPlaceholder: "roles.ai.goalsPlaceholder",
        gateLabel: "roles.ai.gateLabel",
        gatePlaceholder: "https://www.loom.com/share/...",
        portfolioLabel: "roles.ai.portfolioLabel",
      };
    case "marketing":
      return {
        hustleLabel: "roles.marketing.hustleLabel",
        hustlePlaceholder: "roles.marketing.hustlePlaceholder",
        goalsLabel: "roles.marketing.goalsLabel",
        goalsPlaceholder: "roles.marketing.goalsPlaceholder",
        gateLabel: "roles.marketing.gateLabel",
        gatePlaceholder: "https://www.loom.com/share/...",
        portfolioLabel: "roles.marketing.portfolioLabel",
      };
    case "sales":
      return {
        hustleLabel: "roles.sales.hustleLabel",
        hustlePlaceholder: "roles.sales.hustlePlaceholder",
        goalsLabel: "roles.sales.goalsLabel",
        goalsPlaceholder: "roles.sales.goalsPlaceholder",
        gateLabel: "roles.sales.gateLabel",
        gatePlaceholder: "https://www.loom.com/share/...",
        portfolioLabel: "roles.sales.portfolioLabel",
      };
    default:
      return {
        hustleLabel: "roles.default.hustleLabel",
        hustlePlaceholder: "roles.default.hustlePlaceholder",
        goalsLabel: "roles.default.goalsLabel",
        goalsPlaceholder: "roles.default.goalsPlaceholder",
        gateLabel: "roles.default.gateLabel",
        gatePlaceholder: "https://www.loom.com/share/...",
        portfolioLabel: "roles.default.portfolioLabel",
      };
  }
};

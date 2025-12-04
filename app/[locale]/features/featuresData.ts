export interface Feature {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  benefits: string[];
  icon?: string;
}

export const featuresData: Feature[] = [
  {
    id: "patient-management",
    title: "Patient Management",
    category: "Core Features",
    description: "Comprehensive patient record management system",
    content: `
      Curify's Patient Management system provides a unified platform for managing all patient information, medical history, and records in one secure location.

      ## Key Capabilities

      - **Unified Patient Records**: All patient data in one place, accessible from any device
      - **Medical History Tracking**: Complete timeline of visits, treatments, and medications
      - **Real-time Updates**: Instant synchronization across all devices and departments
      - **Secure Access Control**: Role-based permissions ensure only authorized staff can access sensitive information

      ## How It Works

      The system integrates seamlessly with your existing workflows, allowing staff to quickly access patient information, update records, and track treatment progress. All changes are logged with timestamps and user identification for complete audit trails.
    `,
    benefits: [
      "Reduce time spent searching for patient records by 80%",
      "Eliminate duplicate data entry across departments",
      "Improve patient care with instant access to complete medical history",
      "Ensure compliance with automatic audit trail generation",
    ],
  },
  {
    id: "e-prescriptions",
    title: "E-Prescriptions",
    category: "Clinical Tools",
    description: "Digital prescription management and drug interaction checking",
    content: `
      Streamline prescription workflows with our intelligent e-prescription system that includes automatic drug interaction checking and pharmacy integration.

      ## Key Capabilities

      - **Digital Prescription Creation**: Create and send prescriptions electronically
      - **Drug Interaction Alerts**: Automatic checking against patient's current medications
      - **Pharmacy Integration**: Direct sending to pharmacies for faster fulfillment
      - **Prescription History**: Complete record of all prescriptions for each patient

      ## How It Works

      Doctors can quickly create prescriptions using our intuitive interface. The system automatically checks for potential drug interactions, allergies, and contraindications, alerting the prescriber before finalizing. Prescriptions can be sent directly to pharmacies or printed for patients.
    `,
    benefits: [
      "Reduce prescription errors by 95%",
      "Save 5-10 minutes per prescription",
      "Improve patient safety with automatic interaction checking",
      "Streamline pharmacy communication",
    ],
  },
  {
    id: "appointment-scheduling",
    title: "Appointment Scheduling",
    category: "Operations",
    description: "Intelligent appointment booking and calendar management",
    content: `
      Optimize your appointment scheduling with AI-powered calendar management that reduces no-shows and maximizes efficiency.

      ## Key Capabilities

      - **Smart Scheduling**: AI suggests optimal appointment times based on patient history
      - **Automated Reminders**: SMS and email reminders reduce no-show rates
      - **Multi-provider Support**: Manage schedules for multiple doctors and departments
      - **Waitlist Management**: Automatic filling of cancelled appointments

      ## How It Works

      The system analyzes patient patterns, provider availability, and appointment types to suggest optimal scheduling. Automated reminders are sent 24 hours and 2 hours before appointments, significantly reducing no-shows.
    `,
    benefits: [
      "Reduce no-show rates by up to 40%",
      "Optimize provider schedules automatically",
      "Reduce administrative time by 60%",
      "Improve patient satisfaction with flexible scheduling",
    ],
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    category: "Operations",
    description: "Real-time pharmaceutical and medical supply tracking",
    content: `
      Never run out of critical supplies with our intelligent inventory management system featuring IoT integration and automated reordering.

      ## Key Capabilities

      - **Real-time Tracking**: Monitor inventory levels across all locations
      - **IoT Smart Cabinets**: Automated tracking with RFID and biometric access
      - **Automated Reordering**: Set thresholds for automatic purchase orders
      - **Expiration Tracking**: Alerts for medications approaching expiration

      ## How It Works

      Our IoT-enabled smart cabinets track inventory in real-time. When stock levels drop below thresholds, the system automatically generates purchase orders. Expiration date tracking ensures medications are used before they expire, reducing waste.
    `,
    benefits: [
      "Eliminate stockouts with automated reordering",
      "Reduce waste by 30% with expiration tracking",
      "Save 10+ hours per week on inventory management",
      "Improve cost control with real-time visibility",
    ],
  },
  {
    id: "ai-assistant",
    title: "AI Clinical Assistant",
    category: "AI & Automation",
    description: "AI-powered clinical decision support and documentation",
    content: `
      Enhance clinical decision-making with our AI assistant that provides evidence-based recommendations and automates documentation.

      ## Key Capabilities

      - **Clinical Decision Support**: Evidence-based treatment recommendations
      - **Automated Documentation**: Voice-to-text transcription and smart templates
      - **Diagnostic Assistance**: Symptom analysis and differential diagnosis suggestions
      - **Drug Interaction Checking**: Real-time medication safety analysis

      ## How It Works

      The AI assistant analyzes patient data, symptoms, and medical history to provide evidence-based recommendations. It can transcribe voice notes into structured medical documentation, saving hours of administrative time while maintaining accuracy.
    `,
    benefits: [
      "Reduce documentation time by 70%",
      "Improve diagnostic accuracy with AI support",
      "Access evidence-based recommendations instantly",
      "Reduce administrative burden on clinical staff",
    ],
  },
  {
    id: "billing-integration",
    title: "Billing & Insurance",
    category: "Financial",
    description: "Automated billing and insurance claim processing",
    content: `
      Streamline your financial operations with automated billing, insurance claim processing, and payment tracking.

      ## Key Capabilities

      - **Automated Billing**: Generate invoices automatically from appointments and services
      - **Insurance Claims**: Direct submission to insurance providers
      - **Payment Processing**: Secure online payment collection
      - **Financial Reporting**: Comprehensive revenue and payment analytics

      ## How It Works

      The system automatically generates bills based on services rendered and appointments completed. Insurance claims are formatted and submitted electronically, with automatic tracking of claim status. Patients can pay online, reducing administrative overhead.
    `,
    benefits: [
      "Reduce billing errors by 90%",
      "Accelerate payment collection by 50%",
      "Save 15+ hours per week on billing tasks",
      "Improve cash flow with faster claim processing",
    ],
  },
];

// Get unique categories
export const categories = Array.from(
  new Set(featuresData.map((f) => f.category))
);

// Get features by category
export const getFeaturesByCategory = (category: string) =>
  featuresData.filter((f) => f.category === category);

// Get feature by ID
export const getFeatureById = (id: string) =>
  featuresData.find((f) => f.id === id);


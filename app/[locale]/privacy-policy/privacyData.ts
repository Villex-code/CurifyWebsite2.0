export const privacyData = {
  lastUpdated: "March 15, 2026",
  contactEmail: "dpo@curifyapp.com",
  sections: [
    {
      id: "intro",
      title: "1. Introduction",
      content: `
          At **Curify**, protecting the confidentiality and integrity of medical data is our highest priority. This Privacy Policy outlines how we collect, process, and safeguard personal and health-related information through our web platform, mobile applications, and IoT-enabled Smart Cabinets.
          
          We operate in strict compliance with the **General Data Protection Regulation (GDPR)** and relevant national healthcare regulations. By using Curify, you entrust us with sensitive data, and we are committed to transparency in how we handle it.
        `,
    },
    {
      id: "collection",
      title: "2. Information We Collect",
      content: `
          We collect data in three primary categories to ensure the seamless operation of your healthcare facility:
          
          1. **User Account Data:** Personal information provided by healthcare professionals (Name, Professional License ID, Role, Email) used for authentication and audit logging.
          2. **Patient Data (PHI):** Medical records, prescriptions, and admission details entered into the system. **Curify processes this data strictly as a Data Processor** on behalf of the Healthcare Organization.
          3. **IoT & Usage Data:** Telemetry from Smart Cabinets (access times, biometric logins, inventory levels) and platform usage logs (IP addresses, device types) to maintain security and functionality.
        `,
    },
    {
      id: "usage",
      title: "3. How We Use Your Information",
      content: `
          Your data is used exclusively for legitimate business and clinical purposes:
          
          1. **Service Delivery:** To manage patient workflows, track pharmaceutical inventory, and facilitate e-prescribing.
          2. **Clinical Decision Support:** Our AI algorithms analyze pseudonymized data to flag drug interactions or suggest operational efficiencies. **We do not use Patient Data to train public AI models.**
          3. **Security & Compliance:** To authenticate users via RFID/Biometrics and generate immutable audit logs for regulatory inspections.
          4. **Communication:** To send critical system alerts (e.g., low stock, system maintenance) to administrators.
        `,
    },
    {
      id: "sharing",
      title: "4. Information Sharing",
      content: `
          **We do not sell personal data.** We only share data in the following restricted scenarios:
          
          1. **Healthcare Interoperability:** Data is shared with national health systems (e.g., IDIKA in Greece) strictly as initiated by the authorized medical professional.
          2. **Trusted Sub-processors:** We use vetted cloud infrastructure providers (e.g., AWS/Google Cloud in EU regions) who adhere to ISO 27001 security standards.
          3. **Legal Requirements:** We may disclose data if compelled by a valid court order or to prevent immediate physical harm to a patient.
        `,
    },
    {
      id: "security",
      title: "5. Data Security Measures",
      content: `
          We employ a **Defense-in-Depth** strategy to secure your organization's data:
          
          *   **Encryption:** All data is encrypted in transit (TLS 1.3) and at rest (AES-256).
          *   **Access Control:** Strict Role-Based Access Control (RBAC) ensures users only see data relevant to their department.
          *   **Physical Security:** Our IoT Smart Cabinets feature tamper detection and biometric locks.
          *   **Monitoring:** Automated threat detection systems monitor for suspicious login patterns or data exfiltration attempts 24/7.
        `,
    },
    {
      id: "retention",
      title: "6. Data Retention",
      content: `
          We retain data only as long as necessary or required by law:
          
          1. **Active Data:** Retained for the duration of your subscription to Curify.
          2. **Archived Data:** Upon contract termination, data is kept in a "read-only" state for 30 days to allow for export, after which it is securely deleted.
          3. **Medical Records:** Retention periods for patient health records are governed by national laws (typically 10-20 years). We provide archiving tools to help Healthcare Organizations meet these legal obligations.
        `,
    },
    {
      id: "rights",
      title: "7. Your Rights (GDPR)",
      content: `
          Under GDPR, Authorized Users and Patients have specific rights regarding their data:
          
          *   **Right to Access:** Request a copy of your personal data.
          *   **Right to Rectification:** Correct inaccurate personal information.
          *   **Right to Erasure:** Request deletion of personal data (subject to medical record retention laws).
          *   **Right to Audit:** Healthcare Organizations may request audit logs regarding who accessed specific patient records.
          
          To exercise these rights, please contact our Data Protection Officer at the email provided below.
        `,
    },
    {
      id: "cookies",
      title: "8. Cookies & Tracking",
      content: `
          We use essential cookies to maintain user sessions and ensure platform security (e.g., preventing CSRF attacks). 
          
          We may use analytical cookies to understand platform performance, but these do not track individual user behavior across other websites. You can manage your cookie preferences in your browser settings, though disabling essential cookies may break platform functionality.
        `,
    },
    {
      id: "international",
      title: "9. International Transfers",
      content: `
          Curify hosts data primarily within the **European Union (EU)**. 
          
          If any data transfer to a third country is necessary for sub-processing, we ensure strict compliance with GDPR through Standard Contractual Clauses (SCCs) and adequate data protection impact assessments.
        `,
    },
    {
      id: "children",
      title: "10. Children's Privacy",
      content: `
          Curify is a B2B professional tool. We do not knowingly market to children.
          
          However, our platform processes the health data of pediatric patients. This processing is performed under the legal basis of providing medical diagnosis and treatment, with the Healthcare Organization acting as the Data Controller and guardian consent assumed obtained by the medical provider.
        `,
    },
    {
      id: "updates",
      title: "11. Policy Updates",
      content: `
          We may update this Privacy Policy to reflect changes in our technology or legal obligations. 
          
          For material changes that affect your rights or data usage, we will notify the Organization's Administrator via email and display a prominent notice within the Curify dashboard at least 30 days prior to the effective date.
        `,
    },
  ],
};

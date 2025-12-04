export const termsData = {
  lastUpdated: "March 15, 2026",
  contactEmail: "appcurify@gmail.com",
  sections: [
    {
      id: "definitions",
      title: "1. Definitions & Agreement",
      content: `
          Welcome to Curify. By accessing our platform, web application, mobile app, or IoT-enabled devices (collectively, the "Service"), you agree to these Terms.
          
          **"Service"** refers to the Curify ecosystem, including cloud software, local APIs, and smart hardware.
          **"Healthcare Organization"** refers to the hospital, clinic, or pharmacy that has entered into a service agreement with Curify.
          **"Authorized User"** means medical professionals or staff granted access by the Healthcare Organization.
          **"Patient Data"** refers to Protected Health Information (PHI) and personal data processed by the Service.
          
          This agreement constitutes a binding legal contract between you and Curify. If you do not agree to these terms, you must discontinue use of the Service immediately.
        `,
    },
    {
      id: "medical-liability",
      title: "2. Medical & Pharmaceutical Disclaimer",
      content: `
          **Curify is a technical tool, not a medical provider.** 
          
          1. **No Medical Advice:** The Service uses algorithms and AI to organize data and suggest workflows. These suggestions do not constitute medical advice, diagnosis, or prescription instructions.
          2. **Professional Judgment:** Healthcare professionals retain full responsibility for all medical decisions. You acknowledge that Curify's AI outputs are for decision support only and must be verified by a qualified human professional.
          3. **Hardware Limitations:** While our IoT Smart Cabinets are designed to secure inventory, Curify is not liable for theft, physical tampering, or spoilage of pharmaceuticals due to power failures or misuse of the hardware.
        `,
    },
    {
      id: "data-privacy",
      title: "3. Data Protection (GDPR & HIPAA)",
      content: `
          Curify operates in strict compliance with GDPR (EU) and HIPAA (where applicable).
          
          1. **Data Processing:** We process data solely on behalf of the Healthcare Organization (the Data Controller). We do not own patient data.
          2. **Security Measures:** We utilize AES-256 encryption for data at rest and TLS 1.3 for data in transit. Access logs are immutable and audit-ready.
          3. **Breach Notification:** In the unlikely event of a security compromise, Curify commits to notifying the designated Data Protection Officer of the Healthcare Organization within 72 hours of discovery.
        `,
    },
    {
      id: "user-obligations",
      title: "4. User Obligations & Security",
      content: `
          Security in healthcare is a shared responsibility. As a User, you agree to:
          
          1. **Credential Hygiene:** Maintain strong, unique passwords and never share access tokens or RFID cards used for Smart Cabinet access.
          2. **Legitimate Use:** Only access patient records relevant to your active clinical duties. Unauthorized browsing of records ("snooping") is a violation of this agreement and applicable laws.
          3. **Incident Reporting:** Immediately report any software bugs, hardware malfunctions, or suspected unauthorized access to your IT administrator and Curify support.
        `,
    },
    {
      id: "limitations",
      title: "5. Limitation of Liability",
      content: `
          To the maximum extent permitted by law:
          
          Curify is provided "AS IS" and "AS AVAILABLE." We do not guarantee that the service will be uninterrupted or error-free.
          
          **Cap on Liability:** Curify's total liability for any claims arising from the use of the platform is strictly limited to the amount paid by the Healthcare Organization to Curify in the three (3) months preceding the event.
          
          **Exclusions:** Curify shall not be liable for indirect, incidental, or consequential damages (including lost profits or data) resulting from:
          (a) User error in data entry;
          (b) Misinterpretation of AI suggestions;
          (c) Network failures at the facility level.
        `,
    },
    {
      id: "termination",
      title: "6. Subscription & Termination",
      content: `
          **Termination by You:** Organizations may terminate with 30 days' written notice, provided all outstanding invoices are settled.
          **Termination by Us:** Curify reserves the right to suspend access immediately if we detect:
          (a) Attempts to reverse-engineer the source code;
          (b) Use of the platform for illegal activities;
          (c) Non-payment of service fees for over 60 days.
          
          **Data Export:** Upon termination, you have 30 days to request a full export of your data in a standard format (CSV/JSON/SQL) before it is permanently deleted from our servers.
        `,
    },
    {
      id: "disputes",
      title: "7. Governing Law",
      content: `
          These terms are governed by the laws of Greece and the European Union. Any disputes shall be resolved primarily through mediation. If mediation fails, the courts of Athens, Greece, shall have exclusive jurisdiction.
        `,
    },
    {
      id: "updates",
      title: "8. Changes to Terms",
      content: `
          Healthcare technology evolves rapidly. We may update these terms to reflect new features or regulations. 
          
          For material changes (e.g., changes to data handling or pricing), we will notify your organization's administrator via email at least 30 days in advance. Continued use of Curify after updates constitutes acceptance of the new terms.
        `,
    },
  ],
};

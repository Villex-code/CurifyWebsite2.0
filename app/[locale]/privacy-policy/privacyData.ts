export const privacyData: {
  [key: string]: {
    lastUpdated: string;
    contactEmail: string;
    sections: {
      id: string;
      title: string;
      content: string;
    }[];
  };
} = {
  en: {
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
  },
  el: {
    lastUpdated: "15 Μαρτίου, 2026",
    contactEmail: "dpo@curifyapp.com",
    sections: [
      {
        id: "intro",
        title: "1. Εισαγωγή",
        content: `
          Στην **Curify**, η προστασία της εμπιστευτικότητας και της ακεραιότητας των ιατρικών δεδομένων αποτελεί την ύψιστη προτεραιότητά μας. Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο συλλέγουμε, επεξεργαζόμαστε και διασφαλίζουμε τις προσωπικές πληροφορίες και τις πληροφορίες που σχετίζονται με την υγεία μέσω της διαδικτυακής μας πλατφόρμας, των εφαρμογών για κινητά και των Έξυπνων Ντουλαπιών με δυνατότητα IoT.
          
          Λειτουργούμε σε αυστηρή συμμόρφωση με τον **Γενικό Κανονισμό για την Προστασία Δεδομένων (GDPR)** και τους σχετικούς εθνικούς κανονισμούς υγειονομικής περίθαλψης. Χρησιμοποιώντας το Curify, μας εμπιστεύεστε ευαίσθητα δεδομένα και δεσμευόμαστε για διαφάνεια στον τρόπο με τον οποίο τα διαχειριζόμαστε.
        `,
      },
      {
        id: "collection",
        title: "2. Πληροφορίες που Συλλέγουμε",
        content: `
          Συλλέγουμε δεδομένα σε τρεις κύριες κατηγορίες για να διασφαλίσουμε την απρόσκοπτη λειτουργία της μονάδας υγειονομικής περίθαλψης:
          
          1. **Δεδομένα Λογαριασμού Χρήστη:** Προσωπικές πληροφορίες που παρέχονται από επαγγελματίες υγείας (Όνομα, Αριθμός Επαγγελματικής Άδειας, Ρόλος, Email) και χρησιμοποιούνται για έλεγχο ταυτότητας και καταγραφή ελέγχου.
          2. **Δεδομένα Ασθενών (PHI):** Ιατρικά αρχεία, συνταγές και λεπτομέρειες εισαγωγής που εισάγονται στο σύστημα. **Το Curify επεξεργάζεται αυτά τα δεδομένα αυστηρά ως Εκτελών την Επεξεργασία** για λογαριασμό του Οργανισμού Υγειονομικής Περίθαλψης.
          3. **Δεδομένα IoT & Χρήσης:** Τηλεμετρία από τα Έξυπνα Ντουλάπια (χρόνοι πρόσβασης, βιομετρικές συνδέσεις, επίπεδα αποθεμάτων) και αρχεία καταγραφής χρήσης της πλατφόρμας (διευθύνσεις IP, τύποι συσκευών) για τη διατήρηση της ασφάλειας και της λειτουργικότητας.
        `,
      },
      {
        id: "usage",
        title: "3. Πώς Χρησιμοποιούμε τις Πληροφορίες σας",
        content: `
          Τα δεδομένα σας χρησιμοποιούνται αποκλειστικά για νόμιμους επιχειρηματικούς και κλινικούς σκοπούς:
          
          1. **Παροχή Υπηρεσιών:** Για τη διαχείριση της ροής εργασιών των ασθενών, την παρακολούθηση του φαρμακευτικού αποθέματος και τη διευκόλυνση της ηλεκτρονικής συνταγογράφησης.
          2. **Υποστήριξη Κλινικών Αποφάσεων:** Οι αλγόριθμοι AI μας αναλύουν ψευδωνυμοποιημένα δεδομένα για να επισημάνουν αλληλεπιδράσεις φαρμάκων ή να προτείνουν λειτουργικές βελτιώσεις. **Δεν χρησιμοποιούμε δεδομένα ασθενών για την εκπαίδευση δημόσιων μοντέλων AI.**
          3. **Ασφάλεια & Συμμόρφωση:** Για τον έλεγχο ταυτότητας των χρηστών μέσω RFID/Βιομετρικών στοιχείων και τη δημιουργία αμετάβλητων αρχείων ελέγχου για κανονιστικές επιθεωρήσεις.
          4. **Επικοινωνία:** Για την αποστολή κρίσιμων ειδοποιήσεων συστήματος (π.χ. χαμηλό απόθεμα, συντήρηση συστήματος) στους διαχειριστές.
        `,
      },
      {
        id: "sharing",
        title: "4. Κοινοποίηση Πληροφοριών",
        content: `
          **Δεν πουλάμε προσωπικά δεδομένα.** Κοινοποιούμε δεδομένα μόνο στα ακόλουθα περιορισμένα σενάρια:
          
          1. **Διαλειτουργικότητα Υγείας:** Τα δεδομένα κοινοποιούνται στα εθνικά συστήματα υγείας (π.χ. ΗΔΙΚΑ στην Ελλάδα) αυστηρά κατόπιν εντολής του εξουσιοδοτημένου ιατρού.
          2. **Έμπιστοι Υπεργολάβοι Επεξεργασίας:** Χρησιμοποιούμε εγκεκριμένους παρόχους υποδομής cloud (π.χ. AWS/Google Cloud σε περιοχές της ΕΕ) που τηρούν τα πρότυπα ασφαλείας ISO 27001.
          3. **Νομικές Απαιτήσεις:** Ενδέχεται να αποκαλύψουμε δεδομένα εάν υποχρεωθούμε από έγκυρη δικαστική εντολή ή για να αποτρέψουμε άμεση σωματική βλάβη σε ασθενή.
        `,
      },
      {
        id: "security",
        title: "5. Μέτρα Ασφαλείας Δεδομένων",
        content: `
          Εφαρμόζουμε μια στρατηγική **Defense-in-Depth** για την ασφάλεια των δεδομένων του οργανισμού σας:
          
          *   **Κρυπτογράφηση:** Όλα τα δεδομένα κρυπτογραφούνται κατά τη μεταφορά (TLS 1.3) και κατά την αποθήκευση (AES-256).
          *   **Έλεγχος Πρόσβασης:** Ο αυστηρός Έλεγχος Πρόσβασης Βάσει Ρόλων (RBAC) διασφαλίζει ότι οι χρήστες βλέπουν μόνο δεδομένα που σχετίζονται με το τμήμα τους.
          *   **Φυσική Ασφάλεια:** Τα Έξυπνα Ντουλάπια IoT διαθέτουν ανίχνευση παραβίασης και βιομετρικές κλειδαριές.
          *   **Παρακολούθηση:** Αυτοματοποιημένα συστήματα ανίχνευσης απειλών παρακολουθούν για ύποπτα μοτίβα σύνδεσης ή απόπειρες εξαγωγής δεδομένων όλο το 24ωρο.
        `,
      },
      {
        id: "retention",
        title: "6. Διατήρηση Δεδομένων",
        content: `
          Διατηρούμε τα δεδομένα μόνο για όσο διάστημα είναι απαραίτητο ή απαιτείται από το νόμο:
          
          1. **Ενεργά Δεδομένα:** Διατηρούνται για τη διάρκεια της συνδρομής σας στο Curify.
          2. **Αρχειοθετημένα Δεδομένα:** Κατά τον τερματισμό της σύμβασης, τα δεδομένα διατηρούνται σε κατάσταση "μόνο για ανάγνωση" για 30 ημέρες για να επιτραπεί η εξαγωγή τους, μετά την οποία διαγράφονται με ασφάλεια.
          3. **Ιατρικά Αρχεία:** Οι περίοδοι διατήρησης για τα ιατρικά αρχεία των ασθενών διέπονται από την εθνική νομοθεσία (συνήθως 10-20 έτη). Παρέχουμε εργαλεία αρχειοθέτησης για να βοηθήσουμε τους Οργανισμούς Υγείας να ανταποκριθούν σε αυτές τις νομικές υποχρεώσεις.
        `,
      },
      {
        id: "rights",
        title: "7. Τα Δικαιώματά σας (GDPR)",
        content: `
          Σύμφωνα με τον GDPR, οι Εξουσιοδοτημένοι Χρήστες και οι Ασθενείς έχουν συγκεκριμένα δικαιώματα σχετικά με τα δεδομένα τους:
          
          *   **Δικαίωμα Πρόσβασης:** Ζητήστε αντίγραφο των προσωπικών σας δεδομένων.
          *   **Δικαίωμα Διόρθωσης:** Διορθώστε ανακριβείς προσωπικές πληροφορίες.
          *   **Δικαίωμα Διαγραφής:** Ζητήστε τη διαγραφή προσωπικών δεδομένων (υπόκειται στους νόμους περί διατήρησης ιατρικών αρχείων).
          *   **Δικαίωμα Ελέγχου:** Οι Οργανισμοί Υγείας μπορούν να ζητήσουν αρχεία ελέγχου σχετικά με το ποιος είχε πρόσβαση σε συγκεκριμένα αρχεία ασθενών.
          
          Για να ασκήσετε αυτά τα δικαιώματα, επικοινωνήστε με τον Υπεύθυνο Προστασίας Δεδομένων μας στο email που παρέχεται παρακάτω.
        `,
      },
      {
        id: "cookies",
        title: "8. Cookies & Ανίχνευση",
        content: `
          Χρησιμοποιούμε απαραίτητα cookies για τη διατήρηση των περιόδων σύνδεσης των χρηστών και τη διασφάλιση της ασφάλειας της πλατφόρμας (π.χ. πρόληψη επιθέσεων CSRF). 
          
          Ενδέχεται να χρησιμοποιήσουμε αναλυτικά cookies για να κατανοήσουμε την απόδοση της πλατφόρμας, αλλά αυτά δεν παρακολουθούν την ατομική συμπεριφορά των χρηστών σε άλλους ιστότοπους. Μπορείτε να διαχειριστείτε τις προτιμήσεις σας για τα cookies στις ρυθμίσεις του προγράμματος περιήγησής σας, αν και η απενεργοποίηση των απαραίτητων cookies μπορεί να επηρεάσει τη λειτουργικότητα της πλατφόρμας.
        `,
      },
      {
        id: "international",
        title: "9. Διεθνείς Μεταφορές",
        content: `
          Το Curify φιλοξενεί δεδομένα κυρίως εντός της **Ευρωπαϊκής Ένωσης (ΕΕ)**. 
          
          Εάν οποιαδήποτε μεταφορά δεδομένων σε τρίτη χώρα είναι απαραίτητη για υπεργολαβία επεξεργασίας, διασφαλίζουμε την αυστηρή συμμόρφωση με τον GDPR μέσω Τυποποιημένων Συμβατικών Ρητρών (SCC) και επαρκών εκτιμήσεων αντικτύπου στην προστασία δεδομένων.
        `,
      },
      {
        id: "children",
        title: "10. Απόρρητο Ανηλίκων",
        content: `
          Το Curify είναι ένα επαγγελματικό εργαλείο B2B. Δεν απευθυνόμαστε εν γνώσει μας σε παιδιά.
          
          Ωστόσο, η πλατφόρμα μας επεξεργάζεται τα δεδομένα υγείας παιδιατρικών ασθενών. Αυτή η επεξεργασία εκτελείται βάσει της νομικής βάσης της παροχής ιατρικής διάγνωσης και θεραπείας, με τον Οργανισμό Υγείας να ενεργεί ως Υπεύθυνος Επεξεργασίας Δεδομένων και η συγκατάθεση του κηδεμόνα θεωρείται ότι έχει ληφθεί από τον πάροχο ιατρικών υπηρεσιών.
        `,
      },
      {
        id: "updates",
        title: "11. Ενημερώσεις Πολιτικής",
        content: `
          Ενδέχεται να ενημερώσουμε αυτήν την Πολιτική Απορρήτου για να αντικατοπτρίσουμε αλλαγές στην τεχνολογία μας ή στις νομικές μας υποχρεώσεις. 
          
          Για ουσιώδεις αλλαγές που επηρεάζουν τα δικαιώματά σας ή τη χρήση των δεδομένων σας, θα ειδοποιήσουμε τον Διαχειριστή του Οργανισμού μέσω email και θα εμφανίσουμε μια εμφανή ειδοποίηση στον πίνακα ελέγχου του Curify τουλάχιστον 30 ημέρες πριν από την ημερομηνία έναρξης ισχύος.
        `,
      },
    ],
  },
};

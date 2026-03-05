export const termsData: {
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
  },
  el: {
    lastUpdated: "15 Μαρτίου, 2026",
    contactEmail: "appcurify@gmail.com",
    sections: [
      {
        id: "definitions",
        title: "1. Ορισμοί & Συμφωνία",
        content: `
            Καλώς ήρθατε στην Curify. Με την πρόσβαση στην πλατφόρμα μας, τη διαδικτυακή εφαρμογή, την εφαρμογή για κινητά ή τις συσκευές με δυνατότητα IoT (συνολικά, η "Υπηρεσία"), συμφωνείτε με αυτούς τους Όρους.
            
            **"Υπηρεσία"** αναφέρεται στο οικοσύστημα Curify, συμπεριλαμβανομένου του λογισμικού cloud, των τοπικών API και του έξυπνου υλικού.
            **"Οργανισμός Υγειονομικής Περίθαλψης"** αναφέρεται στο νοσοκομείο, την κλινική ή το φαρμακείο που έχει συνάψει συμφωνία παροχής υπηρεσιών με την Curify.
            **"Εξουσιοδοτημένος Χρήστης"** σημαίνει επαγγελματίες υγείας ή προσωπικό στους οποίους έχει παραχωρηθεί πρόσβαση από τον Οργανισμό Υγειονομικής Περίθαλψης.
            **"Δεδομένα Ασθενών"** αναφέρεται σε Προστατευόμενες Πληροφορίες Υγείας (PHI) και προσωπικά δεδομένα που επεξεργάζεται η Υπηρεσία.
            
            Αυτή η συμφωνία αποτελεί δεσμευτική νομική σύμβαση μεταξύ εσάς και της Curify. Εάν δεν συμφωνείτε με αυτούς τους όρους, πρέπει να διακόψετε τη χρήση της Υπηρεσίας αμέσως.
          `,
      },
      {
        id: "medical-liability",
        title: "2. Ιατρική & Φαρμακευτική Αποποίηση Ευθύνης",
        content: `
            **Η Curify είναι ένα τεχνικό εργαλείο, όχι πάροχος ιατρικών υπηρεσιών.** 
            
            1. **Καμία Ιατρική Συμβουλή:** Η Υπηρεσία χρησιμοποιεί αλγόριθμους και AI για την οργάνωση δεδομένων και την πρόταση ροών εργασίας. Αυτές οι προτάσεις δεν συνιστούν ιατρικές συμβουλές, διάγνωση ή οδηγίες συνταγογράφησης.
            2. **Επαγγελματική Κρίση:** Οι επαγγελματίες υγείας διατηρούν την πλήρη ευθύνη για όλες τις ιατρικές αποφάσεις. Αναγνωρίζετε ότι τα αποτελέσματα AI της Curify προορίζονται μόνο για υποστήριξη αποφάσεων και πρέπει να επαληθεύονται από εξειδικευμένο άνθρωπο επαγγελματία.
            3. **Περιορισμοί Υλικού:** Ενώ τα Έξυπνα Ντουλάπια IoT μας έχουν σχεδιαστεί για την ασφάλεια των αποθεμάτων, η Curify δεν φέρει ευθύνη για κλοπή, φυσική παραβίαση ή αλλοίωση φαρμάκων λόγω διακοπής ρεύματος ή κακής χρήσης του υλικού.
          `,
      },
      {
        id: "data-privacy",
        title: "3. Προστασία Δεδομένων (GDPR & HIPAA)",
        content: `
            Η Curify λειτουργεί σε αυστηρή συμμόρφωση με τον GDPR (ΕΕ) και τον HIPAA (όπου ισχύει).
            
            1. **Επεξεργασία Δεδομένων:** Επεξεργαζόμαστε δεδομένα αποκλειστικά για λογαριασμό του Οργανισμού Υγειονομικής Περίθαλψης (του Υπεύθυνου Επεξεργασίας Δεδομένων). Δεν μας ανήκουν τα δεδομένα των ασθενών.
            2. **Μέτρα Ασφαλείας:** Χρησιμοποιούμε κρυπτογράφηση AES-256 για τα αποθηκευμένα δεδομένα και TLS 1.3 για τα δεδομένα υπό μεταφορά. Τα αρχεία καταγραφής πρόσβασης είναι αμετάβλητα και έτοιμα για έλεγχο.
            3. **Ειδοποίηση Παραβίασης:** Στην απίθανη περίπτωση παραβίασης της ασφάλειας, η Curify δεσμεύεται να ειδοποιήσει τον καθορισμένο Υπεύθυνο Προστασίας Δεδομένων του Οργανισμού Υγειονομικής Περίθαλψης εντός 72 ωρών από τον εντοπισμό της.
          `,
      },
      {
        id: "user-obligations",
        title: "4. Υποχρεώσεις Χρηστών & Ασφάλεια",
        content: `
            Η ασφάλεια στην υγεία είναι μια κοινή ευθύνη. Ως Χρήστης, συμφωνείτε να:
            
            1. **Υγιεινή Διαπιστευτηρίων:** Διατηρείτε ισχυρούς, μοναδικούς κωδικούς πρόσβασης και να μην μοιράζεστε ποτέ διακριτικά πρόσβασης ή κάρτες RFID που χρησιμοποιούνται για την πρόσβαση στα Έξυπνα Ντουλάπια.
            2. **Νόμιμη Χρήση:** Να έχετε πρόσβαση μόνο σε αρχεία ασθενών που σχετίζονται με τα ενεργά κλινικά σας καθήκοντα. Η μη εξουσιοδοτημένη περιήγηση σε αρχεία αποτελεί παραβίαση αυτής της συμφωνίας και των ισχυόντων νόμων.
            3. **Αναφορά Περιστατικών:** Αναφέρετε αμέσως τυχόν σφάλματα λογισμικού, δυσλειτουργίες υλικού ή ύποπτη μη εξουσιοδοτημένη πρόσβαση στον διαχειριστή IT και στην υποστήριξη της Curify.
          `,
      },
      {
        id: "limitations",
        title: "5. Περιορισμός Ευθύνης",
        content: `
            Στο μέγιστο βαθμό που επιτρέπεται από το νόμο:
            
            Η Curify παρέχεται "ΩΣ ΕΧΕΙ" και "ΩΣ ΔΙΑΤΙΘΕΤΑΙ". Δεν εγγυόμαστε ότι η υπηρεσία θα είναι αδιάλειπτη ή χωρίς σφάλματα.
            
            **Ανώτατο Όριο Ευθύνης:** Η συνολική ευθύνη της Curify για τυχόν αξιώσεις που προκύπτουν από τη χρήση της πλατφόρμας περιορίζεται αυστηρά στο ποσό που κατέβαλε ο Οργανισμός Υγειονομικής Περίθαλψης στην Curify κατά τους τρεις (3) μήνες που προηγούνται του γεγονότος.
            
            **Εξαιρέσεις:** Η Curify δεν φέρει ευθύνη για έμμεσες, παρεπόμενες ή αποθετικές ζημίες (συμπεριλαμβανομένων διαφυγόντων κερδών ή δεδομένων) που προκύπτουν από:
            (α) Σφάλμα χρήστη κατά την εισαγωγή δεδομένων.
            (β) Παρερμηνεία των προτάσεων AI.
            (γ) Αποτυχίες δικτύου σε επίπεδο εγκατάστασης.
          `,
      },
      {
        id: "termination",
        title: "6. Συνδρομή & Τερματισμός",
        content: `
            **Τερματισμός από εσάς:** Οι οργανισμοί μπορούν να τερματίσουν τη σύμβαση με γραπτή ειδοποίηση 30 ημερών, υπό την προϋπόθεση ότι έχουν εξοφληθεί όλα τα τιμολόγια.
            **Τερματισμός από εμάς:** Η Curify διατηρεί το δικαίωμα να αναστείλει την πρόσβαση αμέσως εάν εντοπίσουμε:
            (α) Απόπειρες αντίστροφης μηχανικής του πηγαίου κώδικα.
            (β) Χρήση της πλατφόρμας για παράνομες δραστηριότητες.
            (γ) Μη καταβολή των τελών υπηρεσίας για περισσότερες από 60 ημέρες.
            
            **Εξαγωγή Δεδομένων:** Μετά τον τερματισμό, έχετε 30 ημέρες για να ζητήσετε πλήρη εξαγωγή των δεδομένων σας σε τυπική μορφή (CSV/JSON/SQL) προτού διαγραφούν οριστικά από τους διακομιστές μας.
          `,
      },
      {
        id: "disputes",
        title: "7. Εφαρμοστέο Δίκαιο",
        content: `
            Αυτοί οι όροι διέπονται από τους νόμους της Ελλάδας και της Ευρωπαϊκής Ένωσης. Οποιεσδήποτε διαφορές θα επιλύονται πρωτίστως μέσω διαμεσολάβησης. Εάν η διαμεσολάβηση αποτύχει, τα δικαστήρια της Αθήνας, Ελλάδας, έχουν αποκλειστική δικαιοδοσία.
          `,
      },
      {
        id: "updates",
        title: "8. Αλλαγές στους Όρους",
        content: `
            Η τεχνολογία της υγείας εξελίσσεται ραγδαία. Ενδέχεται να ενημερώσουμε αυτούς τους όρους για να αντικατοπτρίσουμε νέες δυνατότητες ή κανονισμούς. 
            
            Για ουσιαστικές αλλαγές (π.χ. αλλαγές στον χειρισμό δεδομένων ή στην τιμολόγηση), θα ειδοποιήσουμε τον διαχειριστή του οργανισμού σας μέσω email τουλάχιστον 30 ημέρες νωρίτερα. Η συνεχιζόμενη χρήση του Curify μετά τις ενημερώσεις συνιστά αποδοχή των νέων όρων.
          `,
      },
    ],
  },
};

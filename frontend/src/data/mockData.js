// Mock data for Bleame clone

export const products = [
  {
    id: 1,
    name: 'Bleame Crystal Hair Eraser',
    slug: 'crystal-hair-eraser',
    price: 26,
    originalPrice: 44,
    discount: 41,
    rating: 4.8,
    reviewCount: 7322,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=800&fit=crop'
    ],
    description: 'Χρησιμοποιώντας τεχνολογία Nano-Crystalline, το Bleame™ Crystal Hair Eraser επιτρέπει στις τρίχες να συσσωρεύονται και να σπάνε από την επιφάνεια όταν τρίβεται απαλά στο δέρμα.',
    features: [
      'Ιδανικό για την περιοχή του μπικίνι + όλο το σώμα',
      'Εύκολη και ανώδυνη αποτρίχωση',
      'Απολαύστε μεταξένια λεία, χωρίς τρίχες επιδερμίδα'
    ],
    badges: [
      { icon: 'Shield', text: 'Ασφαλές για το Δέρμα' },
      { icon: 'RefreshCw', text: 'Επαναχρησιμοποιήσιμο' },
      { icon: 'Plane', text: 'Φιλικό για Ταξίδια' },
      { icon: 'Sparkles', text: 'Εύκολος Καθαρισμός' }
    ],
    category: 'hair-removal'
  },
  {
    id: 2,
    name: 'Gleam Body Scrub',
    slug: 'gleam-body-scrub',
    price: 22,
    originalPrice: 35,
    discount: 37,
    rating: 4.7,
    reviewCount: 1243,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=800&fit=crop'
    ],
    description: 'Απολεπιστικό scrub σώματος για λείο, λαμπερό δέρμα.',
    features: [
      'Φυσική απολέπιση',
      'Ενυδατικός τύπος',
      'Φρέσκο άρωμα'
    ],
    category: 'body-care'
  },
  {
    id: 3,
    name: 'Booty Boost Mask',
    slug: 'booty-boost-mask',
    price: 28,
    originalPrice: 42,
    discount: 33,
    rating: 4.6,
    reviewCount: 892,
    image: 'https://images.unsplash.com/photo-1556228994-1a8b8e0c5b39?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556228994-1a8b8e0c5b39?w=800&h=800&fit=crop'
    ],
    description: 'Συσφικτική και λειαντική μάσκα για την περιοχή των γλουτών.',
    features: [
      'Συσφικτικός τύπος',
      'Μειώνει την εμφάνιση ατελειών',
      'Ενυδατικά συστατικά'
    ],
    category: 'body-care'
  },
  {
    id: 4,
    name: 'Gua Sha Facial Set',
    slug: 'gua-sha-facial-set',
    price: 32,
    originalPrice: 48,
    discount: 33,
    rating: 4.9,
    reviewCount: 2156,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=800&fit=crop'
    ],
    description: 'Πλήρες σετ μασάζ προσώπου με jade roller και πέτρα gua sha.',
    features: [
      'Προωθεί τη λεμφική παροχέτευση',
      'Μειώνει το πρήξιμο',
      'Φυσική πέτρα jade'
    ],
    category: 'facial-care'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Σάρα Φ.',
    title: 'Είμαι εντυπωσιασμένη.',
    text: 'Οι ενοχλητικές τρίχες και ο ερεθισμός του δέρματος ήταν πρόβλημα για πολλά χρόνια. Το Bleame άλλαξε την εμφάνιση του δέρματός μου για πάντα, παίρνω τόσα πολλά κομπλιμέντα από τον σύζυγό μου καθημερινά!',
    image: 'https://i.pravatar.cc/150?img=1',
    verified: true,
    rating: 5
  },
  {
    id: 2,
    name: 'Σούζαν Τ.',
    title: 'Πιο λεία, πιο μαλακά πόδια',
    text: 'Χρησιμοποιώ αυτή τη γόμα μόνο για μία εβδομάδα, αλλά μέχρι τώρα φαίνεται να είναι πολύ καλή αποτρίχωση. Το δέρμα μου είναι λείο και μαλακό μετά τη χρήση. Φωτίζει σημαντικά τις σκοτεινές κηλίδες μου!!! Το λατρεύω.',
    image: 'https://i.pravatar.cc/150?img=5',
    verified: true,
    rating: 5
  },
  {
    id: 3,
    name: 'Μαρία Β.',
    title: 'Πρέπει να το δοκιμάσετε!!',
    text: 'Χρήματα καλά ξοδεμένα! Δεν μπορώ να πιστέψω τι πλήρωνα για επαγγελματικό κερί (επώδυνο, φρικτό). Και αυτή η γόμα κάνει το ίδιο πράγμα, μείον τον πόνο! Για να μην αναφέρω, μου εξοικονομεί και χρήματα.',
    image: 'https://i.pravatar.cc/150?img=9',
    verified: true,
    rating: 5
  },
  {
    id: 4,
    name: 'Τζέιν Μ.',
    title: 'Εύκολα η καλύτερη αγορά της χρονιάς μου.',
    text: 'Ήταν ανώδυνο και δεν προκάλεσε τριβή ακόμα και όταν το έτριβα στο δέρμα. Το συνιστώ ανεπιφύλακτα.',
    image: 'https://i.pravatar.cc/150?img=10',
    verified: true,
    rating: 5
  }
];

export const faqs = [
  {
    id: 1,
    question: 'Πού μπορώ να χρησιμοποιήσω το Crystal Hair Eraser;',
    answer: 'Το Bleame™ Crystal Hair Eraser είναι ασφαλές για χρήση σε κοτσίδες, χέρια, πόδια, στήθος, πλάτη και περιοχή μπικίνι. Ωστόσο, προτείνουμε να μην το υπερχρησιμοποιείτε ή να τρίβετε πολύ δυνατά. ΣΗΜΕΙΩΣΗ: Εάν έχετε ευαίσθητο δέρμα, δοκιμάστε το πρώτα στα χέρια/πόδια σας πριν το χρησιμοποιήσετε σε άλλα ευαίσθητα μέρη.'
  },
  {
    id: 2,
    question: 'Η τριβή προκαλεί σκούρισμα;',
    answer: 'Όχι, στην πραγματικότητα βελτιώνει την όψη σας αφαιρώντας νεκρά κύτταρα δέρματος.'
  },
  {
    id: 3,
    question: 'Πότε είναι η καλύτερη ώρα για χρήση της γόμας;',
    answer: 'Είναι καλύτερο να χρησιμοποιείται μετά το μπάνιο.'
  },
  {
    id: 4,
    question: 'Πόσο συχνά μπορώ να το χρησιμοποιήσω;',
    answer: 'Αυτό διαφέρει για τον καθένα. Μερικοί νιώθουν άνετα να το χρησιμοποιούν 1-2 φορές την εβδομάδα. Άλλοι προτιμούν μία φορά κάθε 2 εβδομάδες. Προσαρμόστε ανάλογα με την ανοχή του δέρματός σας.'
  },
  {
    id: 5,
    question: 'Έχω strawberry skin, θα λειτουργήσει για μένα;',
    answer: 'Θα λειτουργήσει! Στην πραγματικότητα βελτιώνει την εμφάνιση του strawberry skin ή των εξογκωμάτων ξυρίσματος που συνήθως παίρνετε από το κερί και το ξύρισμα.'
  },
  {
    id: 6,
    question: 'Πώς καθαρίζω το Bleame™ Crystal Hair Eraser μου;',
    answer: 'Μετά από κάθε χρήση, καθαρίστε το Bleame σας κάτω από τρεχούμενο νερό και βουρτσίζοντας τυχόν υπολείμματα: τρίχες, νεκρά κύτταρα δέρματος κ.λπ. Φυλάξτε σε στεγνό μέρος.'
  }
];

export const stats = [
  {
    id: 1,
    percentage: 95,
    text: 'Είπαν ότι η εμφάνιση των strawberry legs τους βελτιώθηκε'
  },
  {
    id: 2,
    percentage: 94,
    text: 'Παρατήρησαν μείωση στην εμφάνιση των ενοχλητικών τριχών'
  },
  {
    id: 3,
    percentage: 90,
    text: 'Είδαν βελτίωση στην όψη της σφριγηλότητας του δέρματος'
  }
];

export const trustBadges = [
  {
    id: 1,
    icon: 'Truck',
    title: 'Δωρεάν Αποστολή',
    description: 'Σε όλες τις παραγγελίες'
  },
  {
    id: 2,
    icon: 'Shield',
    title: 'Εγγύηση 30 Νυχτών',
    description: 'Χωρίς ρίσκο'
  },
  {
    id: 3,
    icon: 'RotateCcw',
    title: 'Εύκολες Επιστροφές',
    description: 'Απλή διαδικασία'
  }
];

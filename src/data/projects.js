export const projectCategories = [
  "All",
  "LLM / RAG",
  "Computer Vision",
  "NLP",
  "Data Science",
  "Signal & Compression",
  "IoT / Embedded",
  "Other",
];

export const projects = [
  {
    title: "Compliance Document Intelligence — RAG Service",
    category: "LLM / RAG",
    description:
      "Citation-backed RAG system for AML/KYC compliance documents. Hybrid retrieval (dense + BM25 with RRF) over FAISS, BAAI/bge-small-en embeddings, Groq LLaMA with an Ollama fallback, validated end-to-end with Pydantic v2.",
    stack: [
      "Python",
      "FastAPI",
      "LLaMA",
      "LangChain",
      "FAISS",
      "BM25",
      "Pydantic",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/rashmipubuditha/Compliance-Document-Intelligence-RAG-Service",
        type: "code",
      },
    ],
  },
  {
    title: "Low-Resolution Vehicle Number Plate Enhancement",
    category: "Computer Vision",
    description:
      "Multi-model pipeline that lifts plate readability from low-resolution video — combining super-resolution (SRCNN, ESRGAN), restoration, motion deblurring, and tilt correction.",
    stack: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NumPy"],
    links: [
      {
        label: "Project Site",
        href: "https://sites.google.com/eng.pdn.ac.lk/e18268-ee406-ug-project-2/home",
        type: "site",
      },
    ],
  },
  {
    title: "AI-Driven Defect Detection for Ceramic Products",
    category: "Computer Vision",
    description:
      "Real-time YOLOv8 model deployed on NVIDIA Jetson to detect cracks, iron spots, and pinholes on the Noritake ceramic line — covering data collection, annotation, training, and on-device inference.",
    stack: ["YOLOv8", "Python", "NVIDIA Jetson", "OpenCV", "NumPy"],
    links: [
      {
        label: "Project Site",
        href: "https://sites.google.com/eng.pdn.ac.lk/e18268-ee405-ug-project-1/home",
        type: "site",
      },
    ],
  },
  {
    title: "Word Frequency Analysis — Sinhala & Tamil",
    category: "NLP",
    description:
      "Tokenization and frequency analysis pipeline for low-resource Sinhala and Tamil corpora — exploring script-aware preprocessing and corpus statistics.",
    stack: ["Python", "NLP", "Pandas"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/rashmipubuditha/Word-Frequency-Analysis-Sinhala-Tamil",
        type: "code",
      },
    ],
  },
  {
    title: "Music Genre Classifier",
    category: "Data Science",
    description:
      "Predicts song genres from lyrics across 8 classes using a Spark MLlib pipeline (TF-IDF hashing + multinomial Logistic Regression), trained on ~28K songs and served behind a Flask REST API with a Chart.js front-end.",
    stack: [
      "Python",
      "Apache Spark",
      "PySpark",
      "Spark MLlib",
      "Flask",
      "TF-IDF",
      "Chart.js",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/rashmipubuditha/Music-Genre-Classifier",
        type: "code",
      },
    ],
  },
  {
    title: "Intelligent Student Performance Analytics",
    category: "Data Science",
    description:
      "Predicts student outcomes (Distinction / Pass / Fail / Withdrawn) on the Open University Learning Analytics dataset and surfaces dropout-risk behavioral patterns through engagement scoring and VLE activity features.",
    stack: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "SMOTE",
      "K-Means + PCA",
      "Pandas",
      "Jupyter",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/rashmipubuditha/Intelligent-Student-Performance-Analytics-and-Learning-Strategy-Optimization",
        type: "code",
      },
    ],
  },
  {
    title: "Hybrid Video Compression — Motion Prediction Codec",
    category: "Signal & Compression",
    description:
      "Custom hybrid video codec featuring DCT, quantization, block-based motion prediction, and entropy coding — tuned for both fixed and adaptive bandwidth scenarios.",
    stack: ["Python", "NumPy", "OpenCV"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/rashmipubuditha/Video-Compression-Motion-Prediction",
        type: "code",
      },
    ],
  },
  {
    title: "IoT Smart Medicine Pill Dispenser",
    category: "IoT / Embedded",
    description:
      "Connected pill dispenser that schedules and dispenses medication, sends reminders, and is controlled over Wi-Fi through a companion mobile app.",
    stack: ["Arduino", "ESP32", "Firebase"],
    links: [],
  },
  {
    title: "COVID-19 Hospital Management System",
    category: "Other",
    description:
      "C program for patient registration, occupancy tracking, and ward management built during the pandemic response coursework.",
    stack: ["C"],
    links: [],
  },
];

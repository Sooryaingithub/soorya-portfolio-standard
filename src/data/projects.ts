export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string[];
  status: "Research" | "Prototype" | "MVP" | "Production Candidate";
  complexity: "High" | "Medium" | "Low";
  year: number;
  shortDescription: string;
  x: number;
  y: number;
  size: "lg" | "md" | "sm";
  content?: {
    overview: {
      problem: string;
      solution: string;
    };
    capabilities: string[];
    sections: {
      title: string;
      body: string | string[];
    }[];
    images?: {
      architecture?: string;
      flowchart?: string;
      training?: string;
      output?: string;
      results?: string;
    };
  };
};

export const projects: Project[] = [
  {
    id: "skilltree",
    title: "SkillTree",
    slug: "skilltree",
    category: ["AI Education Platform", "Local AI", "Agentic Systems"],
    status: "Production Candidate",
    complexity: "High",
    year: 2026,
    shortDescription: "Privacy-First Local Intelligent EdTech Engine.",
    x: 50,
    y: 30,
    size: "lg",
    content: {
      overview: {
        problem: "Cloud-based AI workflows introduce high GPU overhead, latency, and data privacy issues for interactive educational platforms. Traditional orchestration frameworks often add unnecessary bloat and obscure direct model control.",
        solution: "Engineered a dual-tier, gamified AI education platform running entirely locally on Apple Silicon. The system bypasses third-party orchestrators, communicating directly with local model servers via REST to ensure strict data privacy and optimal performance."
      },
      capabilities: [
        "Direct REST Model Orchestration: Raw HTTP client operations with local Ollama API for precise temperature and token control.",
        "Dual-Tier Prompt Isolation: Mutually exclusive logic engines separating heavily guardrailed onboarding from an unrestricted RAG sandbox.",
        "Deterministic Guardrailing & Boundary Enforcement: Rigid firewalls forcing the LLM to refuse out-of-scope queries.",
        "Raw ChromaDB Vector Pipeline: Independent pipeline parsing and indexing technical markdown into a persistent local vector store.",
        "Dynamic Context Injection: Custom RAG mechanism extracting top nodes as a real-time reference frame.",
        "Automated Cloud-Synced Workspace: Modular codebase instantly tracking and backing up system logs."
      ],
      sections: [
        {
          title: "Software & Technology Stack",
          body: [
            "Languages: Python 3.11+",
            "AI/ML Models: Ollama API (Llama 3 / Qwen), Vector Embeddings",
            "Databases: ChromaDB",
            "Networking: Requests, REST APIs",
            "Infrastructure: Apple Silicon CLI"
          ]
        },
        {
          title: "Skills Demonstrated",
          body: "AI Systems Architecture • Retrieval-Augmented Generation (RAG) • Local LLM Deployment • Deterministic Prompt Design • Vector Database Management • API Engineering • System Boundary Enforcement"
        }
      ]
    }
  },
  {
    id: "jarvisgemma",
    title: "Gemma Multimodal Spatial AI",
    slug: "jarvisgemma",
    category: ["Spatial Computing", "Computer Vision", "Mobile AI", "CoreML"],
    status: "Prototype",
    complexity: "High",
    year: 2026,
    shortDescription: "Gemma 4 - 3b On-Device Multimodal Spatial AI Agent.",
    x: 30,
    y: 60,
    size: "lg",
    content: {
      overview: {
        problem: "Cloud-based spatial AI assistants suffer from high latency, frame drops during AR rendering, and massive data privacy concerns due to off-device camera streaming.",
        solution: "Engineered a dual-engine architecture for a native iOS/iPadOS spatial AI assistant. The system eliminates cloud dependencies by running entirely on local Apple Silicon, ensuring real-time AR performance and secure contextual scene translation."
      },
      capabilities: [
        "Hybrid Engine Orchestration: Decouples high-speed spatial pathfinding (YOLOv3Tiny via CoreML) from deep contextual reasoning (Gemma 2 2B via MLX Swift).",
        "On-Device VLM Deployment: Executes a 4-bit quantized Vision-Language Model directly on iPad hardware using Apple's MLX Swift.",
        "Spatial ARKit Grounding: Continuously translates 2D bounding boxes into 3D holograms, locking 'Liquid Glass' UI nodes onto physical objects.",
        "Multimodal State Management: Synchronized state engine injecting high-res camera frames as real-time context into the VLM prompt.",
        "Actionable System Integration: Invokes programmatic iOS system events (e.g., toggling flashlight, retrieving telemetry) driven by local AI understanding."
      ],
      sections: [
        {
          title: "Hardware & Software Stack",
          body: [
            "Frameworks: Swift, SwiftUI, MLX Swift, ARKit, Vision, CoreML, HuggingFace Swift",
            "Models: YOLOv3 (Pathfinding), Gemma 2 2B (VLM)",
            "Platform: iOS/iPadOS, Apple Silicon"
          ]
        },
        {
          title: "Skills Demonstrated",
          body: "Spatial Computing (ARKit) • Multimodal AI Systems Architecture • Local VLM Deployment • Apple Silicon Optimization (MLX) • Swift Engineering • CoreML & Vision Integration • System Action Orchestration"
        }
      ]
    }
  },
  {
    id: "weather-platform",
    title: "Weather Analytics",
    slug: "weather-platform",
    category: ["Cloud Engineering", "Data Engineering", "Machine Learning"],
    status: "MVP",
    complexity: "Medium",
    year: 2025,
    shortDescription: "Cloud-Based Weather Forecasting & Analytics Platform.",
    x: 70,
    y: 55,
    size: "lg",
    content: {
      overview: {
        problem: "Traditional weather forecasting systems struggle with ingestion bottlenecking from real-time IoT sensors, satellites, and massive historical databases, leading to delayed alerts and lower forecasting accuracy for hyper-local regions.",
        solution: "A scalable cloud system deploying serverless pipelines for real-time ingestion, distributed Apache Spark processing, and LSTM-based deep learning models to deliver hyper-localized forecasts and anomaly detection."
      },
      capabilities: [
        "Distributed Ingestion Pipeline: Hyper-scale parallel ingestion of real-time weather feeds using Apache Spark and cloud data lakes.",
        "LSTM Predictive Modeling: Neural network models mapping historical trends to generate accurate 7-day localized forecasts.",
        "Edge-Cloud Processing: Hyper-local IoT weather station data aggregation and early anomaly filtering at the edge.",
        "Disaster Response Integration: Real-time trigger systems sending automated alerts to urban planners and agricultural systems."
      ],
      sections: [
        {
          title: "System Architecture",
          body: "The core platform uses a hybrid edge-cloud infrastructure. Edge nodes process local IoT station sensor inputs to filter out noise before routing aggregated telemetry to a serverless cloud backend, where data is consolidated into a centralized data lake for global dataset training."
        },
        {
          title: "Validation & Results",
          body: [
            "Hyper-local prediction accuracy improved by 22% compared to baseline regional models.",
            "Real-time processing latency dropped to sub-second durations via edge-filtering.",
            "LSTM models successfully identified extreme weather anomalies up to 72 hours prior to events."
          ]
        }
      ],
      images: {
        architecture: "/images/weather-image2.png",
        results: "/images/weather-image3.png",
        output: "/images/weather-image4.png"
      }
    }
  },
  {
    id: "local-macos-ai-agents",
    title: "macOS AI Agents",
    slug: "local-macos-ai-agents",
    category: ["Local AI", "Apple Ecosystem"],
    status: "Prototype",
    complexity: "High",
    year: 2026,
    shortDescription: "Local macOS AI Agents.",
    x: 40,
    y: 40,
    size: "md",
  },
  {
    id: "whisperkit-integration",
    title: "WhisperKit Integration",
    slug: "whisperkit-integration",
    category: ["Local AI", "Apple Ecosystem", "CoreML"],
    status: "Research",
    complexity: "Medium",
    year: 2026,
    shortDescription: "Fast, privacy-preserving local speech-to-text transcription on Apple devices.",
    x: 35,
    y: 50,
    size: "md",
    content: {
      overview: {
        problem: "Traditional speech-to-text workflows rely heavily on cloud APIs, which introduce latency, require constant internet connectivity, and raise significant data privacy concerns for sensitive audio recordings.",
        solution: "Integrated WhisperKit into local AI workflows to provide fast, privacy-preserving speech-to-text transcription directly on Apple Silicon and CoreML-supported devices."
      },
      capabilities: [
        "Real-time, fully local speech transcription with zero cloud dependency.",
        "Robust support for multilingual audio processing.",
        "Deep integration with local AI agents for offline interactions.",
        "Optimized hardware acceleration utilizing CoreML and Swift."
      ],
      sections: [
        {
          title: "Hardware & Software Stack",
          body: [
            "Frameworks: WhisperKit, CoreML",
            "Languages: Swift",
            "Platforms: macOS & CoreML Supported Devices"
          ]
        },
        {
          title: "Key Achievements",
          body: [
            "Significantly reduced transcription latency through direct Apple Silicon hardware optimization.",
            "Enabled highly secure, privacy-first voice processing workflows.",
            "Built a foundational architecture for voice-interaction with local Large Language Models (LLMs)."
          ]
        },
        {
          title: "End User Benefits",
          body: [
            "100% private transcription with no audio leaving the device.",
            "Faster turnaround times compared to traditional cloud-based workflows.",
            "Seamless offline speech recognition capabilities.",
            "Direct model integration combining local speech-to-text input with local LLMs."
          ]
        },
        {
          title: "Skills Demonstrated",
          body: "Speech AI • CoreML Optimization • Local AI Systems Architecture • Apple Ecosystem Development"
        }
      ]
    }
  },
  {
    id: "document-intelligence",
    title: "Kosmos-DB Doc Intel",
    slug: "document-intelligence",
    category: ["AI", "Data Engineering", "Azure"],
    status: "MVP",
    complexity: "High",
    year: 2025,
    shortDescription: "Kosmos-DB Document Intelligence Pipeline for automated extraction and analysis.",
    x: 60,
    y: 40,
    size: "md",
    content: {
      overview: {
        problem: "Organizations spend significant time manually processing documents and extracting information from unstructured content.",
        solution: "An intelligent document processing system capable of extracting, classifying, and analyzing information from documents using AI and cloud-native workflows."
      },
      capabilities: [
        "Automated document processing and orchestration",
        "OCR-based extraction for unstructured texts",
        "AI-driven classification and data modeling",
        "Cloud scalability using serverless integrations"
      ],
      sections: [
        {
          title: "Objectives & Challenges",
          body: [
            "Automate document ingestion to handle massive unstructured document flows.",
            "Extract text using advanced OCR and improve overall extraction accuracy.",
            "Classify documents intelligently using trained AI models.",
            "Generate and store structured outputs for fast retrieval.",
            "Automate complex workflow orchestration."
          ]
        },
        {
          title: "Architecture Pipeline",
          body: [
            "1. Documents uploaded to secure cloud storage.",
            "2. OCR engine extracts textual content automatically.",
            "3. AI models analyze and classify the documents based on context.",
            "4. Structured information is stored persistently.",
            "5. Results are made available downstream through APIs and dashboards."
          ]
        },
        {
          title: "Software & Technology Stack",
          body: [
            "Microsoft Azure (Azure Functions, Azure Logic Apps, Cloud Storage)",
            "Python for backend orchestration and AI integration",
            "Advanced OCR Technologies & AI/ML Classification Models"
          ]
        },
        {
          title: "Attempted Outcomes",
          body: [
            "Dramatically reduced manual document processing effort.",
            "Increased operational efficiency and data turnaround time.",
            "Successfully demonstrated practical AI automation use cases in production environments."
          ]
        }
      ]
    }
  },
  {
    id: "github-automation",
    title: "GitHub Automation using Google Jules",
    slug: "github-automation",
    category: ["Cloud Engineering", "Infrastructure", "DevOps"],
    status: "Production Candidate",
    complexity: "Medium",
    year: 2025,
    shortDescription: "AI-assisted software development workflow leveraging Google Jules.",
    x: 80,
    y: 40,
    size: "sm",
    content: {
      overview: {
        problem: "Repetitive software engineering tasks, such as issue triaging, boilerplate code generation, and repository maintenance, consume significant developer time and slow down iteration cycles.",
        solution: "Developed an AI-assisted software development workflow leveraging Google Jules to intelligently automate repetitive engineering tasks and streamline GitHub repository management."
      },
      capabilities: [
        "Automated issue handling, categorization, and initial triaging.",
        "AI-assisted code generation for rapid prototyping and boilerplate creation.",
        "Pull request workflow acceleration through automated reviews and summaries.",
        "Intelligent repository maintenance and administration automation."
      ],
      sections: [
        {
          title: "Hardware & Software Stack",
          body: [
            "AI Agent: Google Jules",
            "Platforms: GitHub",
            "Workflows: GitHub Actions, CI/CD Pipelines"
          ]
        },
        {
          title: "Key Achievements",
          body: [
            "Drastically reduced manual repository administration overhead.",
            "Improved overall development velocity and productivity.",
            "Accelerated feature iteration cycles through AI-assisted workflows."
          ]
        },
        {
          title: "Skills Demonstrated",
          body: "DevOps • CI/CD • Software Automation • AI-Assisted Development"
        }
      ]
    }
  },
  {
    id: "privacy-first-remote-access",
    title: "Privacy-First Remote Access",
    slug: "privacy-first-remote-access",
    category: ["Infrastructure", "Networking", "Cybersecurity"],
    status: "MVP",
    complexity: "Medium",
    year: 2025,
    shortDescription: "Self-hosted remote access infrastructure utilizing RustDesk, Tailscale, and WireGuard.",
    x: 85,
    y: 65,
    size: "sm",
    content: {
      overview: {
        problem: "Traditional commercial remote desktop solutions route sensitive data through third-party proprietary servers, raising serious security, latency, and data privacy concerns.",
        solution: "Designed and deployed a highly secure, self-hosted remote access infrastructure enabling completely private remote desktop connectivity between macOS and Windows systems."
      },
      capabilities: [
        "Self-hosted RustDesk server for uncompromising data privacy.",
        "Encrypted WireGuard-based underlying networking architecture.",
        "Tailscale mesh VPN for robust zero-configuration secure access.",
        "Seamless cross-platform (macOS/Windows) remote desktop control.",
        "Secure end-to-end device-to-device communication."
      ],
      sections: [
        {
          title: "Hardware & Software Stack",
          body: [
            "Platforms: macOS, Windows",
            "Remote Desktop Engine: RustDesk Server",
            "Networking & Tunnels: Tailscale, Headscale, WireGuard Protocol"
          ]
        },
        {
          title: "Key Infrastructure Benefits",
          body: [
            "Eliminated third-party dependencies for remote device-to-device communication.",
            "Established encrypted tunnels ensuring end-to-end data security.",
            "Achieved high-performance, low-latency connectivity using direct mesh networking."
          ]
        },
        {
          title: "Skills Demonstrated",
          body: "Cybersecurity • Zero-Trust Networking • Self-Hosting • Infrastructure Engineering"
        }
      ]
    }
  },
  {
    id: "nas-deployment",
    title: "SSSM Liquid Glass NAS",
    slug: "nas-deployment",
    category: ["Infrastructure", "Hardware", "Self-Hosting", "UI Engineering"],
    status: "Production Candidate",
    complexity: "High",
    year: 2026,
    shortDescription: "Custom-built home cloud storage system with a native Liquid Glass UI.",
    x: 75,
    y: 75,
    size: "lg",
    content: {
      overview: {
        problem: "Commercial NAS devices cost hundreds of dollars for decent UIs, while open-source alternatives like OpenMediaVault and FreeNAS suffer from overly technical, aesthetically outdated admin panels. Raw SMB shares offer zero monitoring or accessibility.",
        solution: "Engineered a custom-built home cloud storage system on a $35 Raspberry Pi 3. Designed 'SSSM Liquid Glass,' a premium, iOS 26-inspired browser-based dashboard running alongside deeply kernel-tuned Samba 4 for maximum network throughput."
      },
      capabilities: [
        "Kernel-Level Performance Tuning: Achieved 30+ MB/s sustained read speeds (up from 12 MB/s) via mq-deadline schedulers, 4MB USB read-ahead, and Google BBR congestion control.",
        "Liquid Glass UI: Pure Vanilla JS/CSS dashboard featuring glassmorphism, spring-curve animations, and a unified media library supporting RAW photos.",
        "10Hz Hardware Telemetry: Live monitor updating per-core CPU, GPU waves, RAM, temperature, and TCP connections every 100ms.",
        "Advanced I/O Heuristics: 'Focused Bandwidth' ionice prioritization and 'Predictive RAM Preheating' triggered instantly on UI hover events.",
        "Native macOS Integration: Samba 4 with Apple's vfs_fruit extension for seamless Finder mounting via smb://192.168.1.15."
      ],
      sections: [
        {
          title: "Hardware & Tech Stack",
          body: [
            "Hardware: Raspberry Pi 3 Model B, External USB 2.0 HDDs",
            "Network: 100 Mbps Ethernet (Shared USB Bus), SMB, SSH",
            "Backend: Python Flask (1,100+ lines), systemd, Samba 4",
            "Frontend: Vanilla JS (1,200+ lines), Vanilla CSS (1,100+ lines) - Zero Dependencies",
            "OS: Raspberry Pi OS (Debian Linux ARM)"
          ]
        },
        {
          title: "Results & Impact",
          body: [
            "Performance: Sustained 200-300 Mbps network links with 30+ MB/s read speeds overcoming strict USB 2.0 limitations.",
            "Responsiveness: 10Hz UI refresh rates—up to 10x faster telemetry than commercial enterprise NAS interfaces.",
            "Cost Efficiency: Achieved premium hardware performance and UI design for ~$35 compared to $300-$2000 commercial alternatives."
          ]
        }
      ]
    }
  },
  {
    id: "iot-data-pipeline",
    title: "IoT Pipeline",
    slug: "iot-data-pipeline",
    category: ["IoT", "Edge Computing", "Data Engineering"],
    status: "Prototype",
    complexity: "High",
    year: 2024,
    shortDescription: "Real-Time IoT Data Processing Pipeline.",
    x: 50,
    y: 75,
    size: "md",
  },
  {
    id: "road-safety-monitoring",
    title: "Azure Helmet Detection",
    slug: "road-safety-monitoring",
    category: ["Computer Vision", "Cloud Engineering", "Azure"],
    status: "Production Candidate",
    complexity: "High",
    year: 2024,
    shortDescription: "Automated real-time helmet compliance monitoring using Azure Cloud.",
    x: 40,
    y: 85,
    size: "md",
    content: {
      overview: {
        problem: "Low compliance with helmet laws significantly increases the risks of injury and fatalities in traffic accidents. Current enforcement methods are labor-intensive, often ineffective, and require substantial resources.",
        solution: "An automated helmet detection system leveraging Microsoft Azure cloud technology. The system utilizes advanced computer vision, real-time video processing, and machine learning algorithms to accurately identify and record helmet usage 24/7."
      },
      capabilities: [
        "Real-Time Video Processing: Utilizing Azure Video Analyzer for live monitoring of traffic cameras.",
        "Advanced Detection Models: Leveraging Azure Machine Learning to optimize helmet detection algorithms.",
        "Accurate Helmet Detection: Azure Cognitive Services ensures reliable helmet identification under diverse conditions.",
        "Data Security and Privacy: Implementing robust security measures and adhering to data protection regulations.",
        "User-Friendly Dashboards: Includes intuitive data visualization and reporting tools for authorities."
      ],
      sections: [
        {
          title: "Project Team",
          body: [
            "Team Members: M. Yashaswini, Soorya Sendilnath, Sathiya Sendilnath",
            "Supervisor: Ms. Kudiyarasudevi C (Assistant Professor, Department of Computer Science and Engineering)",
            "Institution: SRM Institute of Science and Technology, Ramapuram"
          ]
        },
        {
          title: "Objectives & Scope",
          body: [
            "Development of an Automated Helmet Violation Detection System capable of real-time monitoring and post-event batch processing.",
            "Foundation for Future Extensions to detect other violations (speeding, signal jumping) in low-light environments and partial occlusions.",
            "Rigorous Testing in both simulated and real-world environments to validate effectiveness and high-traffic scalability."
          ]
        },
        {
          title: "Architecture & Integration",
          body: "The cloud-native architecture spans Data Input, Preprocessing, Feature Selection, Azure Custom Vision, Machine Learning modules, API integrations, and a Visualization dashboard. This enables seamless data processing across large traffic areas with massive scalability."
        },
        {
          title: "Hardware & Software Stack",
          body: [
            "Microsoft Azure (Machine Learning, Cognitive Services, Video Analyzer)",
            "Python & OpenCV for image processing via JupyterLabs",
            "Custom Vision deployment for model training and prediction"
          ]
        },
        {
          title: "Validation & Results",
          body: "The Custom Vision model was rigorously trained and achieved an 86.6% mean Average Precision (mAP), with a Precision of 66.7% and Recall of 80.0%. Bounding boxes accurately classify 'wearing helmet' and 'not wearing helmet' on live data feeds."
        },
        {
          title: "Future Work",
          body: [
            "Enhancing multi-object detection to identify seatbelt use and speeding.",
            "Leveraging IoT sensors and edge computing for real-time alerts with minimal latency.",
            "Integrating predictive analytics to help authorities pinpoint high-risk areas."
          ]
        }
      ],
      images: {
        architecture: "/images/helmet-architecture.png",
        flowchart: "/images/helmet-flowchart.png",
        training: "/images/helmet-training.jpg",
        output: "/images/helmet-output.jpg",
        results: "/images/helmet-results.png"
      }
    }
  },
  {
    id: "5g-edge-computing",
    title: "5G Edge",
    slug: "5g-edge-computing",
    category: ["Edge Computing", "Infrastructure"],
    status: "Research",
    complexity: "Medium",
    year: 2024,
    shortDescription: "5G Edge Computing Infrastructure Study.",
    x: 60,
    y: 85,
    size: "sm",
    content: {
      overview: {
        problem: "Centralized cloud computing frameworks suffer from latency bottlenecks and signal degradation under 5G networks, creating unsafe conditions for time-sensitive tasks like Advanced Driver Assistance Systems (ADAS) and autonomous vehicles.",
        solution: "A decentralized edge-cloud hybrid computing framework mapping critical ADAS tasks (lidar, radar, camera data parsing) to regional edge computing nodes (mini-clouds) connected over 5G NR to keep processing latency below 10ms."
      },
      capabilities: [
        "Dynamic Edge Offloading: Route time-critical tasks to localized edge servers while sending analytics to centralized cloud databases.",
        "Ultra-Reliable Communication (URLLC): Leverage 5G New Radio (NR) protocols for seamless and redundant V2X channels.",
        "Hybrid Drive Integration: Fallback communication schemes (V2X, cellular, Wi-Fi) guaranteeing network stability.",
        "ADAS Telemetry Dashboards: Low-latency driver display interfaces updating in real-time."
      ],
      sections: [
        {
          title: "Architecture & Implementation",
          body: [
            "Cloud Services & 5G Network: High-speed connectivity mapping ADAS components to cloud data storage and remote analytics processing.",
            "ADAS System & Edge Nodes: In-vehicle sensors (cameras, LiDAR, radar) connect to edge computing nodes for initial data processing to reduce latency before cloud transmission.",
            "Driver Interface & Data Flow: Bidirectional real-time data flow connecting cloud-based analytics to an intuitive human-machine interface (HMI) for the driver."
          ]
        },
        {
          title: "Hardware & Software Stack",
          body: [
            "Hardware: Nvidia Drive Pegasus, Mobileye EyeQ5/Ultra, Renesas R-Car V3H, Qualcomm Snapdragon Ride",
            "Communication: Dedicated Short-Range Communications (DSRC), Cellular V2X (C-V2X), 5G New Radio (NR) V2X",
            "Infrastructure: Industrial IoT Edge Computing Units, Sensor Packages, Security Hardware"
          ]
        },
        {
          title: "Validation & Results",
          body: [
            "Tested network latencies dropped from 85ms on conventional clouds to less than 8ms on localized edge nodes.",
            "Hybrid switching achieved 99.999% connection uptime in simulated congested urban areas.",
            "V2X cooperative communications demonstrated significant improvements in localized traffic congestion routing."
          ]
        },
        {
          title: "Project Outcomes",
          body: [
            "Enhanced Road Safety: Real-time data processing and V2X communication to proactively detect and respond to hazards.",
            "Improved Driving Experience: Anticipatory assistance reduces cognitive load on drivers.",
            "Traffic & Energy Efficiency: Localized traffic prediction optimizes routing, reducing congestion and fuel emissions."
          ]
        },
        {
          title: "Future Work",
          body: [
            "Integration of personalized driver profiles and seamless multi-cloud coordination.",
            "Environmental and sustainability features for eco-friendly transportation.",
            "Advanced collaborative traffic management and enhanced fleet management solutions."
          ]
        }
      ],
      images: {
        architecture: "/images/5g-edge-image2.jpg"
      }
    }
  },
];

// Define relationships for the galaxy lines
export const connections = [
  // SkillTree cluster
  { from: "skilltree", to: "local-macos-ai-agents" },
  { from: "skilltree", to: "document-intelligence" },
  { from: "local-macos-ai-agents", to: "whisperkit-integration" },
  
  // Spatial/Apple cluster
  { from: "jarvisgemma", to: "whisperkit-integration" },
  { from: "jarvisgemma", to: "local-macos-ai-agents" },
  
  // Cloud/Infra cluster
  { from: "weather-platform", to: "document-intelligence" },
  { from: "weather-platform", to: "github-automation" },
  { from: "weather-platform", to: "privacy-first-remote-access" },
  { from: "privacy-first-remote-access", to: "nas-deployment" },
  
  // Edge/IoT cluster
  { from: "iot-data-pipeline", to: "weather-platform" },
  { from: "iot-data-pipeline", to: "road-safety-monitoring" },
  { from: "iot-data-pipeline", to: "5g-edge-computing" },
];

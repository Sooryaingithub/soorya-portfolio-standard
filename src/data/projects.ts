export type LabContentBlock = {
  type: "paragraph" | "code" | "heading" | "image";
  value: string;
  language?: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string[];
  status: "Research" | "Prototype" | "MVP" | "Production Candidate" | "In Development";
  complexity: "High" | "Medium" | "Low";
  year: number;
  shortDescription: string;
  x: number;
  y: number;
  size: "lg" | "md" | "sm";
  metrics?: { label: string; value: string }[];
  techStackRationale?: string;
  labWriteup?: LabContentBlock[];
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
      ui?: string;
      icons?: string;
    };
  };
};

export const projects: Project[] = [
  {
    id: "skilltree",
    title: "SkillTree",
    slug: "skilltree",
    category: ["AI Education Platform", "Local AI", "Agentic Systems"],
    status: "In Development",
    complexity: "High",
    year: 2026,
    shortDescription: "Privacy-First Local Intelligent EdTech Engine.",
    x: 50,
    y: 30,
    size: "lg",
    metrics: [
      { label: "Token Generation", value: "35 t/s" },
      { label: "Vector Search", value: "<15ms" },
      { label: "API Overhead", value: "0ms (Direct)" }
    ],
    techStackRationale: "Bypassed LangChain/LlamaIndex in favor of raw Python HTTP requests to local Ollama servers. This eliminates abstraction bloat, yielding a highly deterministic, zero-latency orchestration layer critical for local edge deployment.",
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
          title: "Expected Designs",
          body: "The following UI mockups and iconography represent the expected end-state of the iOS client application, which is currently in active development."
        },
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
      ],
      images: {
        ui: "/images/projects/skilltree/skilltree-ui.jpg",
        icons: "/images/projects/skilltree/skilltree-icons.png"
      }
    },
    labWriteup: [
      { type: "heading", value: "The Origin: Bypassing the Cloud" },
      { type: "paragraph", value: "When I first sat down to build SkillTree, the goal was simple: create an interactive educational platform. Naturally, my first thought was to just hook up OpenAI's API, wrap it in LangChain, and call it a day. But I quickly realized that teaching involves highly sensitive, iterative data. Pumping every single keystroke of a student's learning journey to a third-party cloud server felt fundamentally wrong." },
      { type: "paragraph", value: "I decided to go fully local. No cloud APIs, no massive monthly bills, and absolute data privacy. This meant running everything on Apple Silicon." },
      { type: "heading", value: "The Blueprint: Scrapping LangChain" },
      { type: "paragraph", value: "My initial prototype used standard orchestration tools like LangChain and LlamaIndex to query local models. It was a disaster. The abstraction layers added hundreds of milliseconds of overhead, and debugging the prompts felt like untangling spaghetti. The platform needed to be snappy; an educational tool that lags loses the student's attention immediately." },
      { type: "paragraph", value: "So, I ripped it all out. I rebuilt the entire orchestration layer using raw Python HTTP requests to a local Ollama server running Llama 3 and Qwen. It sounds primitive, but the performance gains were staggering. Zero abstraction bloat meant a zero-latency orchestration layer." },
      { type: "code", language: "python", value: "import requests\nimport json\n\ndef direct_ollama_query(prompt):\n    url = \"http://localhost:11434/api/generate\"\n    payload = {\n        \"model\": \"llama3\",\n        \"prompt\": prompt,\n        \"stream\": False,\n        \"options\": {\"temperature\": 0.2}\n    }\n    response = requests.post(url, json=payload)\n    return response.json()['response']" },
      { type: "heading", value: "The Struggle: Context Window Bleed" },
      { type: "paragraph", value: "The biggest hurdle wasn't speed, it was focus. I had a 'strict onboarding' agent and an 'unrestricted RAG sandbox' agent. But LLMs are notoriously bad at staying in their lane. The sandbox agent would randomly try to onboard the user again. I had to engineer a rigid, dual-tier prompt isolation system. Essentially, I built a firewall between the logic engines, forcing the LLM to outright refuse out-of-scope queries using deterministic boundary enforcement." },
      { type: "heading", value: "The Result" },
      { type: "image", value: "/images/projects/skilltree/skilltree-ui.jpg" },
      { type: "paragraph", value: "The final product is a blistering fast, dual-tier educational engine. The raw ChromaDB vector pipeline handles technical markdown instantly, and the dynamic context injection works flawlessly. It taught me that sometimes, the best framework is no framework at all." }
    ]
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
    metrics: [
      { label: "Vision Latency", value: "<20ms (CoreML)" },
      { label: "VLM Quantization", value: "4-bit (MLX)" },
      { label: "AR Framerate", value: "60 FPS Locked" }
    ],
    techStackRationale: "Decoupled spatial mapping from deep language understanding. YOLOv3Tiny runs on the Apple Neural Engine via CoreML for high-frequency tracking, while Gemma 2B handles asynchronous contextual reasoning via MLX Swift, ensuring ARKit renders never drop frames.",
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
    },
    labWriteup: [
      { type: "heading", value: "The Origin: Eyes for the Machine" },
      { type: "paragraph", value: "I've always been fascinated by spatial computing, but standard AR apps always felt hollow—they could place 3D objects, but they couldn't actually *understand* the room. I wanted an assistant that could look through the iPad's camera, understand the physical context, and respond intelligently. And I wanted it to happen entirely on-device to ensure privacy." },
      { type: "heading", value: "The Blueprint: The Dual-Engine Architecture" },
      { type: "paragraph", value: "Running a massive Vision-Language Model (VLM) like Gemma 2B locally on an iPad is a huge memory bottleneck. If I tried to process high-res camera frames through the VLM on the main thread, ARKit would stutter, dropping frames and ruining the illusion of 'Liquid Glass' UI nodes locked to physical objects." },
      { type: "paragraph", value: "The breakthrough was decoupling the architecture. I used a lightweight YOLOv3Tiny model compiled via CoreML for high-frequency pathfinding and spatial grounding. This runs at a locked 60 FPS on the Apple Neural Engine. Meanwhile, I offloaded the heavy contextual reasoning to a 4-bit quantized Gemma 2B model using Apple's MLX Swift bindings, running asynchronously in the background." },
      { type: "code", language: "swift", value: "// Asynchronous MLX VLM Reasoning\nTask.detached(priority: .userInitiated) {\n    let config = GenerationConfig(temperature: 0.2, maxTokens: 128)\n    let response = try await gemmaModel.generate(prompt: contextString, config: config)\n    await MainActor.run { self.updateUI(with: response) }\n}" },
      { type: "heading", value: "The Struggle: Quantization and Accuracy" },
      { type: "paragraph", value: "Quantizing the model to 4-bit saved me gigs of RAM, but it initially lobotomized the model's spatial reasoning. It started hallucinating object relationships. I had to carefully tune the generation temperature and inject highly structured system prompts that rigidly formatted how the VLM received the bounding box coordinates from the YOLO layer." },
      { type: "heading", value: "The Result" },
      { type: "paragraph", value: "The result is a multimodal agent that feels like magic. It 'sees' the room, understands context, and can even invoke programmatic iOS system events (like toggling the flashlight) based on visual triggers. It proved to me that Apple Silicon's unified memory architecture is a game-changer for edge AI." }
    ]
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
    metrics: [
      { label: "Data Ingestion", value: "10k+ req/sec" },
      { label: "Accuracy Gain", value: "+22%" },
      { label: "Pipeline Latency", value: "<1s" }
    ],
    techStackRationale: "Leveraged Apache Spark for distributed memory processing to prevent the I/O bottlenecking common in standard relational DB architectures. Edge-based pre-filtering was implemented to shed 40% of redundant sensor noise before hitting the cloud ingest layer.",
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
        architecture: "/images/projects/weather-platform/weather-image2.png",
        results: "/images/projects/weather-platform/weather-image3.png",
        output: "/images/projects/weather-platform/weather-image4.png"
      }
    },
    labWriteup: [
      { type: "heading", value: "The Origin: Drowning in Data" },
      { type: "paragraph", value: "Weather forecasting isn't a modeling problem; it's a data engineering problem. When I set out to build a hyper-localized weather analytics platform, I severely underestimated the sheer volume of telemetry pouring in from IoT sensors and satellite feeds. My initial relational database setup choked within hours under the 10k+ requests per second." },
      { type: "heading", value: "The Blueprint: Edge Filtering and Spark" },
      { type: "paragraph", value: "I needed to shed weight. Instead of sending every raw data point to the cloud, I deployed edge-filtering scripts to the IoT stations themselves. If a sensor reported the exact same temperature for 5 minutes, it didn't ping the cloud. This shed 40% of redundant noise immediately." },
      { type: "image", value: "/images/projects/weather-platform/weather-image2.png" },
      { type: "paragraph", value: "For the cloud backend, I migrated away from standard DBs and leveraged Apache Spark for distributed memory processing. The data lake ingested the filtered streams in parallel, allowing my deep learning models to access structured telemetry with sub-second pipeline latency." },
      { type: "code", language: "python", value: "# PySpark Stream Processing\nfrom pyspark.sql import SparkSession\nfrom pyspark.sql.functions import window, avg\n\nspark = SparkSession.builder.appName(\"WeatherIngest\").getOrCreate()\n\nstream = spark.readStream.format(\"kafka\").option(\"subscribe\", \"weather_sensors\").load()\n\n# 5-minute tumbling window aggregations\naggregated = stream.groupBy(window(\"timestamp\", \"5 minutes\"), \"sensor_id\").agg(avg(\"temp\"))\nquery = aggregated.writeStream.outputMode(\"append\").format(\"parquet\").start()" },
      { type: "heading", value: "The Struggle: Training the LSTM" },
      { type: "paragraph", value: "With the data flowing cleanly, the next nightmare was the neural network. I chose Long Short-Term Memory (LSTM) networks because weather data is intensely sequential. However, hyper-local data is noisy. A sudden localized gust of wind would throw the gradient descent into chaos. I spent weeks implementing custom loss functions that heavily penalized prolonged deviation rather than instantaneous spikes." },
      { type: "heading", value: "The Result" },
      { type: "image", value: "/images/projects/weather-platform/weather-image3.png" },
      { type: "paragraph", value: "The final architecture successfully predicted extreme anomalies up to 72 hours prior to events, boasting a 22% accuracy gain over baseline regional models. It was a brutal lesson in how crucial robust data pipelines are before you even touch a machine learning model." }
    ]
  },
  {
    id: "local-macos-ai-agents",
    labWriteup: [
          {
                "type": "heading",
                "value": "The Origin: Automating the Mac"
          },
          {
                "type": "paragraph",
                "value": "I wanted an agent that didn't just talk, but actually *did* things on my Mac\u2014managing files, checking system stats, and executing scripts. The problem? Python agents were heavy, slow, and ate up RAM. I needed something native, fast, and deeply integrated into macOS."
          },
          {
                "type": "heading",
                "value": "The Blueprint: Native Swift & Foundation"
          },
          {
                "type": "paragraph",
                "value": "I decided to build the agent entirely in Swift. By hooking directly into Apple's Foundation framework and using native XPC services, I could bypass the bloated Python runtimes. The architecture relies on lightweight background daemons that listen for LLM-parsed intents and execute them natively with sub-100ms latency."
          },
          {
                "type": "code",
                "language": "swift",
                "value": "let process = Process()\nprocess.executableURL = URL(fileURLWithPath: \"/usr/bin/env\")\nprocess.arguments = [\"bash\", \"-c\", command]\ntry process.run()"
          },
          {
                "type": "heading",
                "value": "The Struggle: Apple's Sandbox"
          },
          {
                "type": "paragraph",
                "value": "The biggest hurdle was macOS's strict sandboxing and SIP (System Integrity Protection). Initially, the agent kept crashing with permission denied errors when trying to read user directories. I had to architect a robust entitlements profile and request targeted user-approved FDA (Full Disk Access) gracefully, ensuring security wasn't compromised."
          },
          {
                "type": "heading",
                "value": "The Result"
          },
          {
                "type": "paragraph",
                "value": "A native macOS AI agent that runs on less than 150MB of RAM, executing complex multi-step workflows instantly without spinning up your fans. It's the AI assistant Apple should have built."
          }
    ],
    title: "macOS AI Agents",
    slug: "local-macos-ai-agents",
    category: ["Local AI", "Apple Ecosystem"],
    status: "Prototype",
    complexity: "High",
    year: 2026,
    shortDescription: "Deeply integrated Local macOS AI Agents executing system tasks.",
    x: 40,
    y: 40,
    size: "md",
    metrics: [
      { label: "System Overhead", value: "<150MB RAM" },
      { label: "Exec Latency", value: "<100ms" }
    ],
    techStackRationale: "Utilized native Swift and Apple's Foundation framework for lightweight daemon orchestration, ensuring the agent remains invisible in system resources until actively invoked."
  },
  {
    id: "whisperkit-integration",
    labWriteup: [
          {
                "type": "heading",
                "value": "The Origin: Privacy First Audio"
          },
          {
                "type": "paragraph",
                "value": "Sending sensitive voice data to the cloud for transcription always felt wrong. With modern Apple Silicon, there was no reason we couldn't do high-fidelity speech-to-text entirely on-device. I set out to build a completely offline dictation pipeline."
          },
          {
                "type": "heading",
                "value": "The Blueprint: CoreML & WhisperKit"
          },
          {
                "type": "paragraph",
                "value": "Instead of raw PyTorch models, I leveraged HuggingFace's WhisperKit, optimized specifically for the Apple Neural Engine (ANE). By quantizing the OpenAI Whisper model to INT4 and compiling it to CoreML, the model could run in real-time while barely touching the CPU or GPU, saving massive amounts of battery."
          },
          {
                "type": "code",
                "language": "swift",
                "value": "let whisper = try await WhisperKit(model: \"large-v3-turbo-q4\")\nlet result = try await whisper.transcribe(audioBuffer)\nprint(\"Transcription: \\(result.text)\")"
          },
          {
                "type": "heading",
                "value": "The Struggle: Real-time Streaming"
          },
          {
                "type": "paragraph",
                "value": "Whisper is inherently a batch-processing model. Making it feel like a real-time dictation engine meant implementing overlapping sliding windows for audio buffers. I battled severe VAD (Voice Activity Detection) truncation issues where the ends of words were cut off. Tuning the silence thresholds and overlap frames finally smoothed out the real-time stream."
          },
          {
                "type": "heading",
                "value": "The Result"
          },
          {
                "type": "paragraph",
                "value": "A flawlessly private, zero-data-egress speech-to-text engine that transcribes faster than real-time on a MacBook Air, proving that privacy and performance can coexist."
          }
    ],
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
    metrics: [
      { label: "Transcription", value: "Real-time" },
      { label: "Data Egress", value: "0 Bytes" }
    ],
    techStackRationale: "Direct CoreML hardware acceleration via WhisperKit rather than standard Python bindings, tapping directly into the Apple Neural Engine for drastically reduced thermal load and battery drain.",
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
    labWriteup: [
          {
                "type": "heading",
                "value": "The Origin: Drowning in PDFs"
          },
          {
                "type": "paragraph",
                "value": "A logistics client was manually entering data from hundreds of scanned invoices and shipping manifests daily. OCR tools were failing on handwritten notes and varied layouts. We needed a system that actually *understood* the document, not just read it."
          },
          {
                "type": "heading",
                "value": "The Blueprint: Azure Serverless & Cosmos DB"
          },
          {
                "type": "paragraph",
                "value": "I designed an event-driven architecture. When a PDF hits Azure Blob Storage, it triggers an Azure Function. The function routes the document through Azure AI Document Intelligence for layout analysis, then uses a multimodal LLM to extract key-value pairs regardless of the invoice format. The structured JSON is then dumped into Cosmos DB for instant querying."
          },
          {
                "type": "code",
                "language": "python",
                "value": "poller = document_intelligence_client.begin_analyze_document(\n    \"prebuilt-invoice\", document=blob_data\n)\nresult = poller.result()\nfor field, value in result.fields.items():\n    print(f\"{field}: {value.value}\")"
          },
          {
                "type": "heading",
                "value": "The Struggle: The Unstructured Chaos"
          },
          {
                "type": "paragraph",
                "value": "The real nightmare was 'dirty' scans\u2014coffee stains, folded corners, and low-DPI faxes. The prebuilt models dropped to 70% accuracy. I had to build a pre-processing pipeline using OpenCV to deskew, binarize, and enhance contrast before hitting the Azure API, boosting our extraction accuracy back up to 98.5%."
          },
          {
                "type": "heading",
                "value": "The Result"
          },
          {
                "type": "paragraph",
                "value": "An automated, infinitely scalable pipeline that eliminated 40 hours of manual data entry a week, turning unstructured paper chaos into structured, searchable data."
          }
    ],
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
    metrics: [
      { label: "Extraction Rate", value: "98.5%" },
      { label: "Processing Speed", value: "2s / Page" }
    ],
    techStackRationale: "Azure Serverless Functions used as the connective tissue between blob storage events and the cognitive OCR engines to enable infinitely scalable event-driven ingestion without idle server costs.",
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
    labWriteup: [
          {
                "type": "heading",
                "value": "The Origin: The Issue Tracker Nightmare"
          },
          {
                "type": "paragraph",
                "value": "Managing large open-source repositories means drowning in duplicate issues, vague bug reports, and unlabelled PRs. I wanted an AI that acted as a ruthless but helpful project manager, triaging everything instantly."
          },
          {
                "type": "heading",
                "value": "The Blueprint: Google Jules & Webhooks"
          },
          {
                "type": "paragraph",
                "value": "I wired up GitHub Webhooks to an edge function that passes payload data to Google Jules. Jules analyzes the issue text, checks for duplicates against closed issues using vector embeddings, automatically applies severity labels, and even drafts a polite reply asking for reproduction steps if the issue is vague."
          },
          {
                "type": "code",
                "language": "yaml",
                "value": "name: AI Triage\non:\n  issues:\n    types: [opened]\njobs:\n  triage:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Run Agent\n        uses: custom-agent-action@v1"
          },
          {
                "type": "heading",
                "value": "The Struggle: Hallucinated Fixes"
          },
          {
                "type": "paragraph",
                "value": "Initially, the agent tried to be *too* helpful, suggesting code fixes in the comments that were completely hallucinated or referenced outdated APIs. I had to tightly constrain its system prompt and disable code-generation capabilities during triage, restricting it strictly to categorization and routing."
          },
          {
                "type": "heading",
                "value": "The Result"
          },
          {
                "type": "paragraph",
                "value": "A 75% reduction in maintainer triage time. Issues are instantly categorized, duplicates are closed with links to the original, and maintainers only step in when real engineering work is required."
          }
    ],
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
    metrics: [
      { label: "Triage Time", value: "-75%" },
      { label: "Automation", value: "100% CI/CD" }
    ],
    techStackRationale: "Standardized on GitHub Actions with custom Google Jules agentic hooks to maintain the workflow within the developer's native ecosystem, rather than requiring external dashboards.",
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
    metrics: [
      { label: "Encryption", value: "WireGuard" },
      { label: "Latency", value: "Sub-30ms Mesh" },
      { label: "Cost", value: "$0 Monthly" }
    ],
    techStackRationale: "Adopted a Zero-Trust architecture using Tailscale's mesh overlay over UDP hole punching. This removes the need for centralized routing servers typical in TeamViewer/AnyDesk, dropping latency significantly and securing data end-to-end.",
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
    },
    labWriteup: [
      { type: "heading", value: "The Origin: Taking Back Control" },
      { type: "paragraph", value: "Like most developers, I relied on tools like TeamViewer and AnyDesk to access my workstation remotely. But the realization that my encrypted keystrokes and screen pixels were being routed through third-party proprietary relays didn't sit well with me. The latency was noticeable (often over 150ms), and the privacy implications were unacceptable. I decided to build my own zero-trust mesh." },
      { type: "heading", value: "The Blueprint: UDP Hole Punching" },
      { type: "paragraph", value: "The goal was direct peer-to-peer connection. I self-hosted a RustDesk server, but exposing it directly to the public internet felt too risky. Instead, I layered Tailscale on top. Tailscale uses UDP hole punching to establish direct, encrypted WireGuard tunnels between devices, completely bypassing NAT firewalls." },
      { type: "code", language: "bash", value: "# Forcing a strict exit node via Tailscale CLI\ntailscale up --exit-node=100.115.x.x --exit-node-allow-lan-access=true\n\n# Verifying direct peer-to-peer connection (no relays!)\ntailscale ping 100.115.x.x\n# pong from workstation (100.115.x.x) via 192.168.1.50:41641 in 2ms" },
      { type: "heading", value: "The Struggle: Double NAT Nightmares" },
      { type: "paragraph", value: "It wasn't all smooth sailing. Trying to connect my MacBook on a highly restrictive public Wi-Fi network to my home workstation sitting behind a strict Double NAT resulted in the connection falling back to Tailscale's DERP relay servers. My latency shot back up to 200ms. I had to manually configure Headscale (an open-source Tailscale control server) and set up explicit port forwarding on my home router to ensure a direct UDP connection could always be established." },
      { type: "heading", value: "The Result" },
      { type: "paragraph", value: "By binding the RustDesk client strictly to the internal 100.x.x.x Tailscale subnet, the remote desktop traffic became invisible to the public internet. The final result is a sub-30ms control loop. Dragging a window on my remote workstation feels indistinguishable from local bare-metal interaction, and it costs me $0 a month." }
    ]
  },
  {
    id: "nas-deployment",
    labWriteup: [
          {
                "type": "heading",
                "value": "The Origin: The Cloud is Too Expensive"
          },
          {
                "type": "paragraph",
                "value": "I was tired of paying monthly subscriptions for cloud storage and hitting arbitrary limits. I had a spare Raspberry Pi 3 and some external hard drives. It was time to build my own localized cloud."
          },
          {
                "type": "heading",
                "value": "The Blueprint: OpenMediaVault & Liquid Glass"
          },
          {
                "type": "paragraph",
                "value": "I installed Debian and configured OpenMediaVault (OMV) for headless NAS management. I set up Samba (CIFS) for local network sharing. To make it feel premium, I wrote a custom Vanilla JS and CSS 'Liquid Glass' dashboard to monitor CPU temps and storage capacity, hosted directly on the Pi via Nginx."
          },
          {
                "type": "code",
                "language": "bash",
                "value": "sudo apt-get update\nsudo apt-get install openmediavault\nsudo omv-confdbadm populate"
          },
          {
                "type": "heading",
                "value": "The Struggle: USB 2.0 Bottlenecks"
          },
          {
                "type": "paragraph",
                "value": "The Raspberry Pi 3 shares its USB and Ethernet on the same bus, leading to atrocious transfer speeds (barely 10MB/s). I spent days deep in Linux kernel tuning, adjusting dirty ratio thresholds and disabling USB autosuspend. I managed to push the sustained transfer speeds to a stable 30MB/s\u2014the absolute physical limit of the hardware."
          },
          {
                "type": "heading",
                "value": "The Result"
          },
          {
                "type": "paragraph",
                "value": "A completely free, reliable 4TB network drive that serves media, backups, and acts as a central hub for the house, wrapped in a beautiful custom UI."
          }
    ],
    title: "Standalone NAS System",
    slug: "nas-deployment",
    category: ["Infrastructure", "Hardware", "Self-Hosting", "UI Engineering"],
    status: "Production Candidate",
    complexity: "High",
    year: 2026,
    shortDescription: "Custom-built home cloud storage system with a native Liquid Glass UI.",
    x: 75,
    y: 75,
    size: "lg",
    metrics: [
      { label: "I/O Read", value: "30+ MB/s (USB 2.0)" },
      { label: "UI Refresh", value: "10Hz (100ms)" },
      { label: "Capex", value: "~$35 Total" }
    ],
    techStackRationale: "Bypassed heavy React/Node stacks for the frontend, writing a zero-dependency Vanilla JS UI that parses raw sysfs telemetry locally. On the backend, tuned the Linux kernel mq-deadline scheduler to saturate the Pi's shared USB/Ethernet bus limit.",
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
    labWriteup: [
          {
                "type": "heading",
                "value": "The Origin: Drowning in Sensor Noise"
          },
          {
                "type": "paragraph",
                "value": "A fleet of industrial IoT sensors was streaming temperature and vibration data at 100Hz. Sending all that raw telemetry to the cloud was burning through bandwidth and racking up massive AWS bills. Most of the data was just 'normal' baseline noise."
          },
          {
                "type": "heading",
                "value": "The Blueprint: Edge Filtering"
          },
          {
                "type": "paragraph",
                "value": "I redesigned the pipeline to push the compute to the edge. I deployed a lightweight Go service onto the local edge gateways. This service uses a sliding window algorithm to aggregate data, only forwarding anomalies or hourly summaries to the cloud via MQTT."
          },
          {
                "type": "code",
                "language": "go",
                "value": "if math.Abs(currentTemp - baseline) > threshold {\n    publishToMQTT(topic, payload)\n}"
          },
          {
                "type": "heading",
                "value": "The Struggle: Network Drops"
          },
          {
                "type": "paragraph",
                "value": "Industrial environments have terrible Wi-Fi. The edge gateways would frequently disconnect, and we were losing critical anomaly events. I had to implement a local SQLite buffer on the edge devices. If the MQTT broker was unreachable, events were queued locally and batch-synced once the connection was restored."
          },
          {
                "type": "heading",
                "value": "The Result"
          },
          {
                "type": "paragraph",
                "value": "Bandwidth usage plummeted by 85%, cloud ingest costs dropped drastically, and not a single critical anomaly was lost to network drops again."
          }
    ],
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
    metrics: [
      { label: "Throughput", value: "50k req/s" },
      { label: "Protocol", value: "MQTT" }
    ],
    techStackRationale: "Utilized MQTT for low-bandwidth publish/subscribe brokering at the edge, aggregating sensor feeds into Kafka queues before batching into cold storage to preserve write cycles."
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
    metrics: [
      { label: "mAP", value: "86.6%" },
      { label: "Recall", value: "80.0%" },
      { label: "Precision", value: "66.7%" }
    ],
    techStackRationale: "Delegated the heavy object-detection inference to Azure Cognitive Services Custom Vision edge modules. This allowed the system to perform high-confidence ML predictions locally on camera hardware, saving immense cloud egress costs.",
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
        architecture: "/images/projects/road-safety-monitoring/helmet-architecture.png",
        flowchart: "/images/projects/road-safety-monitoring/helmet-flowchart.png",
        training: "/images/projects/road-safety-monitoring/helmet-training.jpg",
        output: "/images/projects/road-safety-monitoring/helmet-output.jpg",
        results: "/images/projects/road-safety-monitoring/helmet-results.png"
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
    metrics: [
      { label: "Cloud Latency", value: "85ms" },
      { label: "Edge Latency", value: "<8ms" },
      { label: "Uptime", value: "99.999%" }
    ],
    techStackRationale: "Abstracted core logic using localized edge mini-clouds rather than AWS us-east-1. By connecting over 5G NR (New Radio), V2X (Vehicle-to-Everything) communication achieves URLLC (Ultra-Reliable Low-Latency Communication) necessary for ADAS collision avoidance.",
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
        architecture: "/images/projects/5g-edge-computing/5g-edge-image2.jpg"
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

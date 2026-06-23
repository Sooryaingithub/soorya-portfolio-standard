export type LabArticle = {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  content: {
    type: "paragraph" | "code" | "heading";
    value: string;
    language?: string;
  }[];
};

export const labArticles: LabArticle[] = [
  {
    id: "edge-ml-quantization",
    slug: "edge-ml-quantization",
    title: "Squeezing Gemma 2B into 4-bit Quantization on Apple Silicon",
    date: "March 15, 2026",
    readTime: "8 min read",
    summary: "A deep dive into deploying quantized Vision-Language Models locally using MLX Swift without dropping ARKit frames.",
    tags: ["CoreML", "MLX", "Quantization", "Swift"],
    content: [
      { type: "heading", value: "The Memory Bottleneck" },
      { type: "paragraph", value: "Running a 2-3 billion parameter Vision-Language Model on an iPad or Mac locally requires roughly 6-8GB of unified memory at fp16. While modern M-series chips can handle this, it leaves very little overhead for high-frequency rendering frameworks like ARKit. When combining spatial pathfinding with deep contextual reasoning, memory bandwidth becomes the primary enemy." },
      { type: "paragraph", value: "To solve this, we turned to Apple's new MLX framework, specifically its Swift bindings, to perform 4-bit quantization on the Gemma 2B weights." },
      { type: "code", language: "swift", value: `import MLX\nimport MLXNN\n\n// Loading a 4-bit quantized model\nlet modelPath = URL(fileURLWithPath: "gemma-2b-it-4bit")\nlet model = try await loadGemmaModel(url: modelPath, quantization: .int4)\n\n// Generate with strict memory limits\nlet config = GenerationConfig(temperature: 0.2, maxTokens: 128)\nlet response = try await model.generate("Describe this scene.", config: config)` },
      { type: "heading", value: "Why MLX?" },
      { type: "paragraph", value: "Unlike traditional CoreML pipelines which require static compilation via coremltools, MLX provides a dynamic computation graph that arrays directly to the GPU. By keeping the VLM reasoning asynchronous and entirely off the main thread, ARKit maintains its strict 60 FPS update loop while the model processes visual tokens in the background." }
    ]
  },
  {
    id: "zero-trust-mesh",
    slug: "zero-trust-mesh",
    title: "Bypassing TCP Overhead with UDP Hole Punching",
    date: "February 2, 2026",
    readTime: "12 min read",
    summary: "Architecting a zero-trust remote access mesh using WireGuard and Tailscale to drop latency below 30ms.",
    tags: ["Networking", "Tailscale", "RustDesk", "Security"],
    content: [
      { type: "heading", value: "The Problem with Commercial Remote Desktop" },
      { type: "paragraph", value: "Most commercial remote desktop tools (TeamViewer, AnyDesk) route your encrypted traffic through their proprietary relay servers. This introduces a severe latency penalty (often >150ms round-trip) and exposes metadata to third parties. For a privacy-first remote workstation, this is unacceptable." },
      { type: "paragraph", value: "The solution is a decentralized mesh network leveraging UDP hole punching to establish direct, peer-to-peer, encrypted tunnels between devices." },
      { type: "code", language: "bash", value: `# Bringing up a direct Tailscale tunnel forcing exit nodes\ntailscale up --exit-node=100.115.x.x --exit-node-allow-lan-access=true\n\n# Verifying direct peer-to-peer connection (no relays)\ntailscale ping 100.115.x.x\n# Output: pong from workstation (100.115.x.x) via 192.168.1.50:41641 in 2ms` },
      { type: "heading", value: "RustDesk Integration" },
      { type: "paragraph", value: "By self-hosting a RustDesk relay server strictly within the Tailscale subnet (100.x.x.x), the remote desktop client completely bypasses the public internet. The result is a sub-30ms control loop, indistinguishable from local bare-metal interaction." }
    ]
  }
];

import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <>
      <h2>Welcome to the Playground</h2>
      <p>
        This is your tech sandbox. Explore different areas of technology and
        learn about exciting topics while keeping the friendly Vite + React vibe.
      </p>
      <p>
        Whether you’re curious about how software is dissected through reverse
        engineering or how global cloud infrastructure works, you’ll find
        something interesting here.
      </p>
      <nav style={{ marginTop: '1rem' }}>
        <Link to="/reverse-engineering">🔍 Reverse Engineering</Link> |{' '}
        <Link to="/cloud-gcp">☁️ Cloud GCP</Link>
      </nav>
    </>
  )
}

function ReverseEngineering() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🔍 Reverse Engineering</h2>
      <p>
        Reverse engineering is the art and science of taking apart software or
        hardware to understand its construction and functionality. It’s a core
        skill in cybersecurity, often used to analyze malware, understand
        proprietary protocols, or audit compiled software for vulnerabilities.
      </p>
      <p>
        Common tools include disassemblers (IDA Pro, Ghidra), debuggers (GDB,
        x64dbg), and decompilers. It’s a mix of creativity, patience, and
        technical expertise.
      </p>
      <p>
        In practice, reverse engineering can help identify security flaws,
        recover lost documentation, or ensure interoperability between systems.
      </p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1rem' }}>
        ← Back to Home
      </Link>
    </div>
  )
}

function CloudGCP() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>☁️ Google Cloud Platform (GCP)</h2>
      <p>
        Google Cloud Platform is a collection of cloud computing services built
        on the same infrastructure that powers Google’s own products, like
        Search, Gmail, and YouTube.
      </p>
      <p>
        GCP offers a wide range of services, from virtual machines with Compute
        Engine to serverless functions, AI/ML APIs, Kubernetes (GKE), and
        high-performance storage solutions.
      </p>
      <p>
        Organizations use GCP to scale globally, pay only for the resources they
        use, and integrate advanced analytics or AI into their workflows with
        minimal setup.
      </p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1rem' }}>
        ← Back to Home
      </Link>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>404 - Page Not Found</h2>
      <p>
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1rem' }}>
        ← Back to Home
      </Link>
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reverse-engineering" element={<ReverseEngineering />} />
        <Route path="/cloud-gcp" element={<CloudGCP />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App


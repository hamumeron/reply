import { useState } from "react";
import { motion } from "framer-motion";
import UrlBar from "./components/UrlBar";
import PreviewFrame from "./components/PreviewFrame";

export default function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  const handleLoad = async (inputUrl) => {
    setUrl(inputUrl);
    setLoading(true);
    setIframeSrc(`/api/fetch?url=${encodeURIComponent(inputUrl)}`);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl font-bold mb-6 text-center"
      >
        ReplyEngine
      </motion.h1>

      <UrlBar onLoad={handleLoad} />

      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-center text-gray-300"
        >
          読み込み中...
        </motion.div>
      )}

      {!loading && iframeSrc && <PreviewFrame src={iframeSrc} />}
    </div>
  );
}

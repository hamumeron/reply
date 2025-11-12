import { useState } from "react";
import { motion } from "framer-motion";

export default function UrlBar({ onLoad }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    onLoad(input);
    if (!history.includes(input)) setHistory([input, ...history].slice(0, 5));
  };

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }}
      className="flex justify-center mb-6"
    >
      <input
        type="text"
        placeholder="https://example.com"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        list="recent"
        className="w-2/3 p-3 rounded-l-xl text-black outline-none"
      />
      <datalist id="recent">
        {history.map((item) => <option key={item} value={item} />)}
      </datalist>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 px-6 rounded-r-xl transition-all"
      >
        表示
      </button>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function PreviewFrame({ src }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden shadow-xl border border-gray-700"
    >
      <iframe
        src={src}
        className="w-full h-[70vh] bg-white"
        sandbox="allow-scripts allow-same-origin"
        title="preview"
      />
    </motion.div>
  );
}

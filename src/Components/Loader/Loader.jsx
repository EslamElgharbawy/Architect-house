import { motion } from "framer-motion";
export default function Loader() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="loader bg-[#fff] fixed inset-0 z-50 overflow-hidden flex justify-center items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="circle"
        ></motion.div>
      </motion.div>
    </>
  );
}

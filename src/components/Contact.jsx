import React from "react";
import { contact } from "../constants";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import Social_media from "./Navbar/Social_media";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl">
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{
            opacity: 0,
            x: -100,
          }}
          transition={{ duration: 1 }}
          className="my-4 ">
          {contact.contact_text}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-wrap justify-center gap-4">
          <Social_media />
        </motion.div>

        <div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{
              opacity: 0,
              x: 100,
            }}
            transition={{ duration: 1 }}
            className="my-4 ">
            Mail to : <a className="my-4 border-b">{contact.contact_email}</a>
          </motion.p>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 5 }}
        className="flex flex-wrap justify-center">
        <h1 className="text-pink-300 text-3xl bg-clip-text lg:text-4xl font-bold tracking-tight ">
          Thank You!
        </h1>
      </motion.div>
    </div>
  );
};

export default Contact;

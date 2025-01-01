import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { contact } from "../../constants";

const Social_media = () => {
  const { social_media } = contact;
  return (
    <div className="flex items-center space-x-5 text-2xl ">
      <a
        href={social_media.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer">
        <motion.div whileHover={{ scale: 2 }}>
          <FaLinkedin />
        </motion.div>
      </a>
      <a
        href={social_media.githubUrl}
        target="_blank"
        rel="noopener noreferrer">
        <motion.div whileHover={{ scale: 2 }}>
          <FaGithub />
        </motion.div>
      </a>
      <a
        href={social_media.instagramUrl}
        target="_blank"
        rel="noopener noreferrer">
        <motion.div whileHover={{ scale: 2 }}>
          <FaInstagram />
        </motion.div>
      </a>
      <a
        href={social_media.twitterUrl}
        target="_blank"
        rel="noopener noreferrer">
        <motion.div whileHover={{ scale: 2 }}>
          <BsTwitterX />
        </motion.div>
      </a>
    </div>
  );
};

export default Social_media;

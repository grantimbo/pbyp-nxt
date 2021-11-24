import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center mb-4 border-t border-gray-100 pt-10">
      <p className="mb-2">Made with ☕ </p>

      <div className="text-xl">
        <a
          rel="noopener"
          aria-label="Youtube"
          target="_blank"
          href="https://www.youtube.com/channel/UCOhQ7IdiVx4IKDOKRKl7RtA"
        >
          <span className="icon-youtube mr-4 text-gray-500 hover:text-red-600"></span>
        </a>
        <a
          rel="noopener"
          aria-label="Facebook"
          target="_blank"
          href="https://www.facebook.com/intoprofits/"
        >
          <span className="icon-facebook mr-4 text-gray-500 hover:text-blue-500"></span>
        </a>
        <a
          rel="noopener"
          aria-label="Twitter"
          target="_blank"
          href="https://twitter.com/DanielAudunsson"
        >
          <span className="icon-twitter mr-4 text-gray-500 hover:text-blue-400"></span>
        </a>
        <a
          rel="noopener"
          aria-label="Linkedin"
          target="_blank"
          href="https://hk.linkedin.com/company/into-profits"
        >
          <span className="icon-linkedin text-gray-500 hover:text-blue-500"></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

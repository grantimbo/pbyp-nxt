import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-[#080808]" id="footer">
      <div className="container px-4 pt-24 pb-10 mx-auto text-center">
        <h1 className="title-type">Give Us a Shout</h1>
        <div className="text-2xl md:text-4xl bg-white px-6 pt-3 pb-5 inline-block text-black rounded-md">
          📧 : poweredbypen@gmail.com
        </div>

        <h2 className="text-2xl font-light mt-20">Let's Be Friends</h2>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;

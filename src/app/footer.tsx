const Footer = () => {
  return (
    <footer className="bg-indigo-500 h-16 flex items-center flex-col justify-center  p-6 text-center text-white">
      <p>
        Copyright © {new Date().getFullYear()} Blackjack Sim by Dominik Puchner
        made with ☕️. All rights reserved.
      </p>
      <p className="text-xs opacity-60">
        Some pages where partly created with the help of ChatGPT 💬
      </p>
    </footer>
  );
};

export default Footer;

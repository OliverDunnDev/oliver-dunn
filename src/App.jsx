import React from "react";
import { motion } from "framer-motion";

const mlProjects = [
  {
    title: "Quantum SafeML",
    desc: "A research project developing a method of safety monitoring for Quantum machine learning systems using Statistical Distance metrics, published at IMBSA 2025.",
    live: "https://plennock.github.io/Honours-Stage-Project/",
    github: null,
  },
  {
    title: "Machine Learning Stock Price Predictor",
    desc: "Python, pandas, sklearn based stock price predictor (June 2025).",
    live: null,
    github: "https://github.com/OliverDunnDev/Stockp-redictorJune2025",
  },
  {
    title: "Mp3 Music Visualizer",
    desc: "Full stack app that lets users upload MP3s and generates real-time musical analysis with abstract visual feedback.",
    live: "https://mp3visualizer.vercel.app/",
    github: "https://github.com/OliverDunnDev/mp3visualizer",
  },
];

const webProjects = [
  {
    title: "Personal Portfolio Site",
    desc: "React, responsive, Tailwind, Vite. Showcasing my favourite projects and skills.",
    live: "https://oliverdunndev.github.io/oliver-portfolio/",
    github: "https://github.com/OliverDunnDev/oliver-portfolio",
  },
  {
    title: "Full Stack Movie Database App",
    desc: "React app with public API, allows favouriting films and real-time search.",
    live: "https://oliverdunndev.github.io/movie-app/",
    github: "https://github.com/OliverDunnDev/movie-app",
  },
  {
    title: "Local Business Brochure Page",
    desc: "Local pizza shop site with contact, menu, hours, and directions.",
    live: "https://oliverdunndev.github.io/B-Side-Newland/",
    github: "https://github.com/OliverDunnDev/B-Side-Newland",
  },
  {
    title: "Simple To Do List App",
    desc: "Manage tasks with priority, deletion, and addition. React + Tailwind + Vite.",
    live: null,
    github: "https://github.com/OliverDunnDev/todolist",
  },
];

const socialLinks = [
  {
    name: "Website",
    icon: "🌐",
    url: "https://oliverdunndev.github.io/oliver-portfolio/",
  },
  {
    name: "Email",
    icon: "✉️",
    url: "mailto:oliverdunndev@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: "🔗",
    url: "https://linkedin.com/in/oliver-dunn-a404a4251/",
  },
];

// Abstract shapes component with animations
function AbstractShapes() {
  return (
    <>
      <div className="absolute top-12 left-12 w-32 h-32 bg-cyan-400 rounded-full opacity-30 animate-floatSlow mix-blend-screen blur-3xl"></div>
      <div className="absolute top-1/3 right-24 w-40 h-40 bg-orange-400 rounded-full opacity-25 animate-floatFast mix-blend-screen blur-4xl"></div>
      <div className="absolute bottom-24 left-1/4 w-28 h-28 bg-cyan-300 rounded-full opacity-20 animate-floatSlow mix-blend-screen blur-2xl"></div>
      <div className="absolute bottom-16 right-16 w-36 h-36 bg-orange-300 rounded-full opacity-20 animate-floatFast mix-blend-screen blur-3xl"></div>
    </>
  );
}


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full px-6 md:px-16 lg:px-32 mx-auto bg-gradient-to-br from-cyan-900 via-cyan-700 to-orange-700 text-white relative overflow-x-hidden">
      <AbstractShapes />
      <header className="py-4 px-6 md:px-16 lg:px-32 bg-cyan-900 text-cyan-200 flex justify-between items-center text-sm font-medium tracking-wide">
          <div>📞 +44 7519 976548</div>
          <div>✉️ <a href="mailto:oliverdunndev@gmail.com" className="underline hover:text-orange-300">oliverdunndev@gmail.com</a></div>
      </header>
      
      <header className="text-center mb-14 relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          Hi, Olly Here, welcome to my website, where you can find all my projects and links!
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <a
            href="https://www.linkedin.com/in/oliver-dunn-a404a4251/"
            className="underline hover:text-cyan-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Software Developer
          </a>
          ,{" "}
          <a
            href="https://github.com/OliverDunnDev/"
            className="underline hover:text-cyan-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Machine Learning Enthusiast
          </a>
          ,{" "}
          <a
            href="https://oliverdunndev.github.io/oliver-portfolio/"
            className="underline hover:text-cyan-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Developer
          </a>
        </motion.p>
      </header>

      <section className="mb-16 relative z-10">
        <motion.h2
          className="text-3xl font-semibold mb-6 border-b border-orange-400 pb-2"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          👨‍💻 Machine Learning Projects:
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          {mlProjects.map(({ title, desc, live, github }, i) => (
            <motion.div
              key={title}
              className="bg-gray-900 bg-opacity-70 p-6 rounded-xl shadow-lg hover:shadow-orange-400 hover:scale-[1.03] transition-transform cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i + 4}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #fb923c" }}
            >
              <h3 className="text-xl font-bold mb-2 drop-shadow-md">{title}</h3>
              <p className="mb-4 text-gray-300">{desc}</p>
              <div className="flex gap-5 flex-wrap">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:underline font-semibold"
                  >
                    Live Site
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:underline font-semibold"
                  >
                    Github Repo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16 relative z-10">
        <motion.h2
          className="text-3xl font-semibold mb-6 border-b border-orange-400 pb-2"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={mlProjects.length + 5}
        >
          👨‍💻 Web Development Projects:
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          {webProjects.map(({ title, desc, live, github }, i) => (
            <motion.div
              key={title}
              className="bg-gray-900 bg-opacity-70 p-6 rounded-xl shadow-lg hover:shadow-orange-400 hover:scale-[1.03] transition-transform cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i + mlProjects.length + 6}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #fb923c" }}
            >
              <h3 className="text-xl font-bold mb-2 drop-shadow-md">{title}</h3>
              <p className="mb-4 text-gray-300">{desc}</p>
              <div className="flex gap-5 flex-wrap">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:underline font-semibold"
                  >
                    Live Site
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:underline font-semibold"
                  >
                    Github Repo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center relative z-10 mt-20">
        <motion.h2
          className="text-3xl font-semibold mb-6 border-b border-orange-400 pb-2"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={mlProjects.length + webProjects.length + 7}
        >
          🤳 Hit Me Up!
        </motion.h2>
        <div className="flex justify-center gap-12 text-4xl">
          {socialLinks.map(({ name, icon, url }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="hover:text-orange-400 transition-colors"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </footer>

      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes floatFast {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-floatFast {
          animation: floatFast 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

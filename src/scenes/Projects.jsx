import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const projectDescription1 = "\"Grille\" - это проект веб-сайта ресторана , который предоставляет клиентам возможность ознакомиться с меню и забронировать столик онлайн."
const projectDescription2 = "Это проект веб-сайта по продаже пицц, созданный на React JS с использованием Redux Toolkit для управления состоянием приложения и корзиной покупателя, который предоставляет пользователям возможность просматривать меню, добавлять и удалять товары, а также оформлять заказы онлайн."
const projectDescription3 = "\"TodoList\" - это учебный проект веб-приложения, созданного для управления ежедневными задачами, который позволяет пользователям создавать, редактировать и удалять задачи в режиме реального времени."

const projectDescription4 = "Dashbord in developing... await soon "
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        
          {(title === "Project 1") && 
          <div>
            <p className="mt-7">
              {projectDescription1}<br/>
              <a className="text-cyan-500 underline" target="_blank"
              href="https://fellerrr.github.io/grillBestDesign/">Посмотреть</a>
            </p>
          </div>}
          {(title === "Project 2") && 
          <div>
            <p className="mt-7">
              {projectDescription2}<br/>
              <a className="text-cyan-500 underline" target="_blank"
              href="https://pizza-level-up-git-mybranch-fellerrr.vercel.app/">Посмотреть</a>
            </p>
          </div>}
          {(title === "Project 3") && 
          <div>
            <p className="mt-7">
              {projectDescription3}<br/>
              <a className="text-cyan-500 underline" target="_blank"
              href="https://simple-todo-27d6te81o-fellerrr.vercel.app/">Посмотреть</a>
            </p>
          </div>}
          {(title === "Project 4") && projectDescription4}
         
            
        
      </div>
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">ПРО</span>ЕКТЫ
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Я занимаюсь разработкой веб-приложений на React JS.
        Аналитическое мышление, быстрое решение проблем и организационные способности.
        Все это помогает мне в разработке функциональных и эффективных веб-приложений.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-indigo-900
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            КРАСИВЫЕ ПОЛЬЗОВАТЕЛЬСКИЕ ИНТЕРФЕЙСЫ
          </div>
          <Project title="Project 1" />
          <Project title="Project 2" />

          {/* ROW 2 */}
          {/* <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" /> */}

          {/* ROW 3 */}
          <Project title="Project 3" />
          <Project title="Project 4" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            УДОБНЫЙ ДЛЯ ПОЛЬЗОВАТЕЛЯ ДИЗАЙН
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

   {/* <Dropdown clicked={clicked} />
      <AnimatePresence>
        <motion.button
          className="z-50 fixed mt-8  h-16 rounded-full w-16 right-20 bg-white  hover:scale-105 transition-all shadow-sm shadow-black "
          onClick={() => setClicked((clicked) => !clicked)}
          initial={scrollDirection ? { y: "0" } : {}}
          animate={scrollDirection ? { y: "-100vh" } : {}}
          exit={scrollDirection ? { y: "0" } : {}}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
        >
          {!clicked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          {clicked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-x w-16 h-12"
              viewBox="0 0 16 16"
            >
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          )}
        </motion.button>
      </AnimatePresence> */}
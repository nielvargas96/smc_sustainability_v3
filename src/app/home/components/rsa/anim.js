
export const variants = {
  initial: { scale: 0 },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    }
  },
  closed: {
    scale: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    }
  }
}

export const variants_2 = {
  initial: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: .25, duration: .5 }
  },
  hidden: {
    y: 50, opacity: 0
  }
}
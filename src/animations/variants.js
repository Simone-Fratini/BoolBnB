export const sectionVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
};

export const divVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.8 },
};

export const hoverVariants = {
    hover: {
        rotate: 0,
        top: "2%",
        left: "15%",
        transition: { duration: 0.3 },
    },
};

export const hoverVariantsRight = {
    hover: {
        rotate: 0,
        top: "2%",
        right: "10%",
        transition: { duration: 0.3 },
    },
};

export const hoverVariantsBottomLeft = {
    hover: {
        rotate: 0,
        bottom: "1%",
        left: "15%",
        transition: { duration: 0.3 },
    },
};

export const hoverVariantsBottomRight = {
    hover: {
        rotate: 0,
        bottom: "1%",
        right: "10%",
        transition: { duration: 0.3 },
    },
};
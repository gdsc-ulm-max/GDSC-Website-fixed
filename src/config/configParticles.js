const configParticles = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: false,
        speed: 0.5,
        opacity_min: 0.3,
        sync: false,
      },
    },
    size: {
      value: 110,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 80,
        sync: true,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: false,
};

export default configParticles;

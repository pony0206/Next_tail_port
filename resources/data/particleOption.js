const option = {
  autoPlay: true,
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
      },
    },
    modes: {
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.2,
        color: {
          // value: '#FA684225',
          value: '#000000',
        },
        size: 40,
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
    },
  },
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  particles: {
    color: {
      value: 'FFFFFF',
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
      },
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      decay: 0,
      distance: 2000,
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      speed: 4,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 4,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.05,
      },
      value: 0.5,
    },
    shape: {
      options: {
        polygon: {
          sides: 6,
        },
        star: {
          sides: 6,
        },
      },
      type: 'polygon',
    },
    size: {
      random: {
        enable: true,
        minimumValue: 100,
      },
      value: 120,
    },
  },
  zLayers: 1,
};

export default option;

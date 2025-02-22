import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./Animation.css";

const configParticles = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 12,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.25
    },
    size: {
      value: { min: 40, max: 60 },
      random: true
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce"
      },
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  detectRetina: true,
  fullScreen: {
    enable: false
  },
  background: {
    color: "transparent"
  }
};

function Animation() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="animation">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={configParticles}
      />
    </div>
  );
}

export default Animation;

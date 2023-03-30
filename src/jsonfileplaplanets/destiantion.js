import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const planets = [
    {
      title: "MOON",
      description: `
      See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
      regain perspective and come back refreshed. While you’re there, take in some history 
      by visiting the Luna 2 and Apollo 11 landing sites. `,
      distance: `384,400 km`,
      traveltime: " 3 days",
      img: moon,
    },

    {
      title: "MARS",
      description: `Let's face it; if you want to go to space you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this world experince  `,
      distance: `255 ML. KM`,
      traveltime: "9 MONTHS",
      img: mars,
    },

    {
      title: "EUROPA",
      description: `
      The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
      winter lover’s dream. With an icy surface, it’s perfect for a bit of 
      ice skating, curling, hockey, or simple relaxation in your snug 
      wintery cabin. `,
      distance: ` 628 mil. km`,
      traveltime: "3 years",
      img: europa,
    },

    {
      title: "TITAN",
      description: `
      The only moon known to have a dense atmosphere other than Earth, Titan 
      is a home away from home (just a few hundred degrees colder!). As a 
      bonus, you get striking views of the Rings of Saturn. `,
      distance: `1.6 bil. km`,
      traveltime: "7 years",
      img: titan,
    },
  ];

  export default planets;
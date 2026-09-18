/**
 * High-quality precision engineered aluminium and architectural images
 * curated from the ALCOM ALVAL project requirements.
 */
export interface AppImage {
  src: string;
  alt: string;
}

export const IMAGES = {
  // Cooperative IKRALUM Authentic Product Images
  cuisineAluGrise: {
    src: "/src/assets/images/cuisine_alu_grise_1779355025230.png",
    alt: "Cuisine moderne sur mesure en aluminium gris de la Coopérative IKRALUM, avec des tiroirs coulissants fluides et des poignées profilées intégrées."
  },
  fenetreAluCoulissante: {
    src: "/src/assets/images/fenetre_alu_coulissante_1779355044197.png",
    alt: "Fenêtre coulissante en aluminium double vitrage avec volet roulant intégré, de la Coopérative IKRALUM, installée avec précision."
  },
  porteAluLaserArabesque: {
    src: "/src/assets/images/porte_alu_laser_arabesque_1779355063253.png",
    alt: "Porte d'entrée haut de gamme en aluminium bronze découpée au laser avec des motifs géométriques et arabesques traditionnels marocains."
  },
  placardAluDressing: {
    src: "/src/assets/images/placard_alu_dressing_1779355082182.png",
    alt: "Dressing placard moderne sur mesure en aluminium champagne avec de grandes portes miroirs coulissantes et des étagères intégrées."
  },

  // Hero section image showing a modern architectural facade
  architecturalFacade: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC092JvpSC77vDWLjZRL5urXiN2CRehgKgFSpa3eggDXQUWJY1eAtyeLt8K4JFR7GlDw0Tb7JrhArgswUyvqIuu0ctwgHxu7wxzSOEUTpWzMS4CLCM3oe41tzCUC0pPCgHMyozZQaa3NrIK1seEl6w1oTaN6cY2I_VAgY8Y2ggKis7NmI-Yb_QeefSq58PxUFL8zskGlt9eI43r5tNLH1Ll_rhOD9_jVy4uUDWviiiXKQJTPrzG-DMTs9FRlCRvO9XVHqhKmKf-qhM",
    alt: "A macro perspective of an intricate, high-end architectural aluminium facade featuring sharp geometric patterns."
  },
  
  // Hero backdrop landscape image showing crisp materials
  metalMaterialOverview: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAczIJtE7YuDa8LVVGVKZ-NA3K8I_rsu7F4C87B6O7YT76P2xkN0bd9senx-tA26tp0l76tQS-4_xiT4n2dMKhK56DNPO_H1mJDuQSOVrePVdq7umcQDazjT4DrbcEAx0NXDiec9kD4dy7TlooigRvWpN0dQXbn3SlUL9f8ciEEr_7QKXbM7Q-AsGtMLmZ-w-hfk2XCMFADNqgkgzkxlfgfyp9McVjtFdITNKK98hJICoVESzjLs_DbmjgJNIrx3fx-8E1l_J772mw",
    alt: "Geometric perspective of a high-end architectural aluminium profile with linear reflections under natural daylight."
  },

  // CNC carving solid block
  cncCarvingBlock: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiCLpLCoWtldcZdUAb7-wgblhJN7n7TLxWsTikvAOXVUlEZzow_taY-9QBXwxBDyEKGhrWzT_-b4Yp5aTLbtcTKPB4XblTyfj_T3GZERh3mLShWC33k3qudMiireqtOSmotKp31Gm05s2WsawQVLikCKqFYLXnAq_MqJHJjhEnGPTo3BIXTuhB33bhVzDfxnQ8DeX7b5ZnaT3CG2GXJb6WwbM0AZSi4C6DQGvSVRYojG34LfajqH9wSQttAH4eXjxL42KTB7SQU5Q",
    alt: "A high-contrast close-up shot of a CNC milling machine carving a solid block of high-grade aluminium."
  },

  // Slick interlocking profiles on skyscraper
  curtainWallSystem: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtKFwAR37oPC3ZBIgs1O44TEQzlTQX2LZoYY29I5XmK6jiczUxdgIMqjPbM2QwOTRs-elFc-6XkOybdysWvi6EfDW-Ug87hkdpL9-RUhXOGQE82rD-HFRLaUXmdomzyfTPgpj5w3jQ6fBeCqMUG2BDZ8JnwbAS9Ep_hv4SQE1l0zHugtd7ZzCydLzMzy9TIdEKuRuZMmN-jOb176xAWysb9hYo9zMomNf_dcCwIJgiEKY5h4yfFn5S3vkUCo2sgLJ3m6B9I_6O5yg",
    alt: "Close-up of sleek, interlocking aluminium curtain wall systems on a skyscraper."
  },

  // Geometric arrangement of structural profiles
  extrudedProfilesArrangement: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS1USfnTQPmOqeGNYGHY0K9rLXukbsJlEP_EX81R8CWOcB0NtBswCdHfssKEvPGwekN2UQkZRd82QOuvjKC3En4Jfk58zZHv_-Kb2Z8GCK5v99wo_fBkkq9tNd8rbx9kob7d6QbkkWQIs63GlN6ZhGNcFJdIGbQPBTHsKx2XDRMcpYDLGzzte804lpMhmWwteSvf33kR9GU60SU03NKInQClKNNTaokOA1838bsky64g_C2kOyNJHbkfXwC9n7Y1AqDqKtRbQkpSA",
    alt: "A collection of complex extruded aluminium profiles showing unique structural cross-sections."
  },

  // Advanced robotic cutter sparks
  roboticArmCutting: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvtjFCtCUVwZD1lil_JziYKio6SzIjRmmE6USPXLyYXpSJmTtj1FMqBdvCsr0bFZgzhFQmJklToqeHGkWfod6Mgp0IlhquXO4VqXAsY8VuXiKDspxyrNHPXKa9caK3czZ5djnSa2Lx1Knv_r4KNxHpGPiKLZn3PYueA_VPEEO3V584rVAklogEkZotal7_eombl7xXEZZaoQPPVPpU2iahXQ_orD6xrZRN54et0PoqNEcKLz6htNsQBOjGbAuz3C_zL-32-R01gXw",
    alt: "A sterile manufacturing floor where a large CNC robotic arm cuts an aluminium structural component with high-speed sparks."
  },

  // Industrial machinery in a clean processing plant
  extrusionMachineryInPlant: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVkfT76TqKutI58a9fEagN5jFGcfNcuKXpI8uyioFYkl9z5sJAXrURZbhUzWXNtXeaG5LO995CHjVU3gmb_e58OFgiydSXlVJ3u99c6Ov2lrGs3wNLH8xgfRqA2-M1ZRV1bx-aLhsIxwXPS1aKa118h3XWHnbA0XdKi7cmSiLcrhAK_2aP5HqPZXeJA78Ytdo-AOUlbXhdvjU2QE6mE9UBOy8maikeXlTij7gVP1sIBiv98sAd7dENoXKLIWfztDdJ0LQ9dybupT4",
    alt: "Close-up of industrial high-precision aluminum extrusion machinery in a modern, clean factory environment."
  },

  // CNC milling head sparks/fluid
  cncmillingHeadFocus: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDznM5TI0p15mXuEqJiGNz-ZVCrTXxEGnHccWpGhTKJSVqwEbVN5mlMyOA3fDvjBMFrHr-zRttWVHIb3AQvcbzxwXdhqWOItDa8dO6IwFBIKT2H1h-I-Lzof0gklB3C5Sf3PRgFpiY2kO-2A4ZvUw_YnOGDzotZwKvqTfRweUbbWz7YHm2XiQl1YePbeXLodgN84DE3LdKrKwjZhbpr6yf2ealottpF7RQW28o3VdlZXzyqPlbfiWsey7R_xpJWe9njKmc3bJ61KRQ",
    alt: "Macro shot of a high-tech CNC milling head processing a large block of aircraft-grade aluminium."
  },

  // Warehouse geometric stack
  stackOfExtrudedProfiles: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQAS9XkJTzuoYt4O5PqQCtMGg7Dd28kAAELbYUw7uW3ZzVZbMqh3A6I1Kl42WrZGPQUi630sl6HQerk-4aOULs3PDUOpmho7jHFdwDelengDgpt37xRdXDxj1Sx5YsvIXZ6F4WpMDhoZnQKPgGSmIIBu9Z6qI_teEf7v6nC_xwUtZZJn1xQk1OJnouYZKxPrsqpelbmqsZWyOvJQowx2lRNuK1xPcnOBgRDt7YTX7lv6xXIzwrVwANAXKK6XNNqVG2LOVbGhWtnLQ",
    alt: "Geometric stack of extruded aluminium profiles in a warehouse, creating a beautiful repeating pattern."
  },

  // Aerial Prague HQ / industrial map abstraction
  industrialZoneMapAbstract: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPj_Z-bu2IK8kLV7rVznrggvLQmzeIAF3dv1oj6vLkX3uqtbCzW1AT6VAgFDIR-Mgl5KIOUuI2gNkyqOPwxwLP4vDtxEIlvvi3PjNR2Jp-XlEN-uPgSWnvaUf079kMDxLqEhbtDt1WCyMo_wz4qjDwc8jUYsFFG7ZF80C6xX2KEQWn8Bg8ijZFygDy7vvvUkqaVCAohXVqsl_8SUNYwRXdgqN2n1BtbQbKJ9KKMx0RVl34MmnFXmHNkx2te_couPR3upym2rVtZJA",
    alt: "Monochrome technical abstraction of factory structures and pathways on a map grid."
  },

  // High precision extruded parts
  linearPrecisionExtrusions: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW02E9CNdt1cx9dIH60s67JgPSXzg6MSEbFHNlDCSfkj52l3Yxqf6aj-lmNqaChwc0sZv5vjvoGgyuglMzJq8WheSaWK4DB5a-xmk34EC_KZplC5cd3LH2roePdF0uzmUiySaZ8yMHm4sBPQMgB2o4bS7CNYEzwaZefv4eBbvSNXX0ca83Vf65FPztMfPCr4EL4ndbDiHafPAN3PlzacwBg_SJp6q51MCoiTd2BzZCbyd5IZcXmLHytAvuJf99uZBD-68ySPN8BSg",
    alt: "Close-up of high-precision structural extruded aluminium profiles with intricate geometric details."
  },

  // Clean industrial factory floor perspective
  massiveFactoryFloorInterior: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6fbrh5PWEOD0zIgsfVLCqd8YI_S-NhMYA25Dd9Y0bu1yqEd5Vhgz_wjfEC9ZnLUYZMk3i65iLMRvlJeivwp_mysyDqXLja83r-zo4jj1NuQt7jbztlHcVBX4oKS7XbVKH8nv4xcmxSBb_m7_HYbZAsKDACAiRdvPZ2p5eeVR5zIkjv7qB0nnAMOJPJ2b4O4p138IuM8yRq2y7WwxoJd_SsEZil013crdGZxATFl-501Lj7LfELZMhNwSyESrLnLS7pPx0qRtUe1w",
    alt: "The interior of a massive, super clean corporate aluminium extrusion structure factory floor in Prague."
  },

  // Assembly plant rails and arms
  gearsAndArmsProcessing: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLbySrC1HTO7kTdasFgxGBGIKKFnxbACrwjU_6dyg9jJCS3eyxAAYfWthBxzzwlvik5nCO8mq0G1_SrCBj5FYWMcZjjGAoCAtykf4c-6cEo5LfVItOpfGNr8l8AGUPQXsBvJzZeNH-8xjKRVgXO3-VqkO4ZjxrMW6Nf10-ssOjJRIML1W1jMmuQSKdF-oPOMh2GBHrUZvpyqeXPO8_lzC7ZY7XA2zwVJ-VZmeBW2i4pDc-1YTe0vgq0mKyJW6_-MLCPdBcx2Klc-w",
    alt: "Rhythmic mechanical gearways and arms processing metallic products on an automated industrial assembly line."
  }
};

const storageURL =
  "https://res.cloudinary.com/dkuyidsql/image/upload";
const storageFolder = "social%20media";
export const constants = {
  imgUrls: {
    userPlaceholder: `${storageURL}/v1670215344/${storageFolder}//user-default_sgvp0z.png`,
    appLogo: `${storageURL}/v1670214962/${storageFolder}/sm-logo_ukggxg_fbhkij.png`,
    reactLogo: `${storageURL}/v1670215430/${storageFolder}/icons8-react-native_srgtib_ltqkry.svg`,
    firebaseLogo: `${storageURL}/v1670215538/${storageFolder}/icon-firebase_klslma.png`,
    reduxLogo: `${storageURL}/v1670215646/${storageFolder}/icons8-redux_v9npaf.png`,
    tailwindLogo: `${storageURL}/v1670215750/${storageFolder}/tailwind-css_mzocmr_qteto0.svg`,
    invalidUser: `${storageURL}/v1670215917/${storageFolder}/user-invalid-icon_oyylty_fsnuez.png`,
    userCoverPlaceholder: `https://via.placeholder.com/468x60?text=.`,
  },
};

export const capitalize = (name) => {
  const words = name.split(" ");
  const capitalWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const actualWord = capitalWords.join(" ");
  return actualWord;
};

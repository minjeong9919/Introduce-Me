import imageAll from "assets/images/project1_results";

export const projectContents = () => {
  const images = imageAll(
    require.context("assets/images", true, /\.(png|jpe?g|svg)$/)
  );

  return images;
};

// import project1_1 from '../assets/images/project1_results/1-1.png'

export const getProjectImages = (projectId) => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((key) => {
      images[key] = r(key);
    });
    return images;
  }

  let images;

  switch (projectId) {
    case 1:
      images = importAll(
        require.context(
          "../assets/images/project1_results",
          true,
          /\.(png|jpe?g|svg)$/
        )
      );
      break;
    case 2:
      images = importAll(
        require.context(
          "../assets/images/project1_results",
          true,
          /\.(png|jpe?g|svg)$/
        )
      );
      break;
    case 3:
      images = importAll(
        require.context(
          "../assets/images/project1_results",
          true,
          /\.(png|jpe?g|svg)$/
        )
      );
      break;
    case 4:
      images = importAll(
        require.context(
          "../assets/images/project1_results",
          true,
          /\.(png|jpe?g|svg)$/
        )
      );
      break;

    default:
      break;
  }

  return images;
};

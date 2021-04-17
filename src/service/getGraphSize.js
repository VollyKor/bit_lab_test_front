export default function graphSize() {
  const windowSize = window.innerWidth;

  let width = 0;
  let height = 0;

  if (windowSize > 1180) {
    width = 1000;
    height = 400;
  } else if (windowSize > 780) {
    width = 600;
    height = 200;
  } else if (windowSize > 380) {
    width = 300;
    height = 150;
  }

  return {
    width,
    height,
  };
}

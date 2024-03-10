// import { getPlaiceholder } from "plaiceholder";

// try {
//   const src = "https://images.unsplash.com/photo-1621961458348-f013d219b50c";

//   const buffer = await fetch(src).then(async (res) =>
//     Buffer.from(await res.arrayBuffer())
//   );

//   const { base64 } = await getPlaiceholder(buffer);

//   console.log(base64);
// } catch (err) {
//   err;
// }

const imageKitLoader = ({
  src,
  width,
  quality
}) => {
  if (src[0] === '/') src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }

  const paramsString = params.join(',');

  var urlEndpoint = process.env.NEXT_PUBLIC_IMG_SRC;
  // var urlEndpoint = "https://ik.imagekit.io/smc/images/";

  if (urlEndpoint && urlEndpoint[urlEndpoint.length - 1] === '/') {
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  }

  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

export default imageKitLoader;
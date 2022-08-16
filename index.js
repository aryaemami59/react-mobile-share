
const dataURLtoFile = (dataurl) => {
  if (!dataurl) {
    return;
  }
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], "image.jpg", { type: mime });
};

exports.shareOnMobile = async function ({ text, url, title, imgBase64 }) {
  if (navigator.share === undefined) {
    console.error("error: navigator.share is not available");
    return;
  }
  var file = dataURLtoFile(imgBase64);
  try {
    await navigator.share({
      text,
      url,
      title,
      files: [file]
    });
  } catch (error) {
    console.error("error: ", error);
  }
};

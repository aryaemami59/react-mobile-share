const dataURLtoFile = (dataurl: string) => {
  if (!dataurl) {
    return
  }
  const arr = dataurl.split(",")
  const mime = arr[0].match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], "image.jpg", { type: mime })
}

export interface Data {
  text?: string
  url?: string
  title: string
  images?: string[]
}

const shareOnMobile = (
  data: Data,
  fallbackFunction?: (message: string) => void
) => {
  const { url, title, images } = data

  if (navigator.share === undefined) {
    fallbackFunction?.(
      "Can't share on this, make sure you are running on Android or iOS devices"
    )
    console.error("error: navigator.share is not available")
    return
  }
  if (!title) {
    fallbackFunction?.("Title is required")
    console.error("error: title is required")
    return
  }

  const shareData: ShareData = { text: title, title }
  if (url) {
    shareData.url = url
  }
  if (Array.isArray(images)) {
    const files = images.map(image => dataURLtoFile(image)!)
    if (files) {
      shareData.files = files
    }
  }
  try {
    if (navigator.canShare && navigator.canShare(shareData)) {
      navigator
        .share(shareData)
        .then(() => console.info("Shared successful."))
        .catch(error => {
          fallbackFunction?.(error.message)
          console.error("Sharing failed ..", error)
        })
    }
  } catch (error) {
    if (error instanceof Error) {
      fallbackFunction?.(error.message)
    }
    console.error("error: ", error)
  }
}

export { shareOnMobile }

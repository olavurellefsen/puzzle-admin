import { storage } from '../../Firebase/firebase'

const uploadToFirebase = async audio => {
  let newUrl = null
  let blob = await fetch(audio.blobURL).then(r => {
    return r.blob()
  })
  const uploadTask = storage.ref(`audios/${audio.startTime}`).put(blob)
  uploadTask.on(
    'state_changed',
    snapshot => {
      //const progress = Math.round(
      //  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //)
      //console.log(progress, "% uploaded")
    },
    error => {
      console.log(error)
    },
    () => {
      // complete function
      storage
        .ref('audios')
        .child(audio.startTime.toString())
        .getDownloadURL()
        .then(url => {
          newUrl = url
        })
    }
  )
  while (!newUrl) await new Promise(resolve => setTimeout(resolve, 1000))
  return newUrl
}

export default uploadToFirebase

import {VideoI} from "../videos/types"

const objectVideo: VideoI = {
  etag: "qSApgLa9Qqh_47Q9Q-kQLfF1zmE",
  videoId: "qhyKjS6qZco",
  description: "Micro strat sacada de Challengers 2021 Torreta en under heaven, nano ejambre en puerta y en servidor al contact de la torreta.",
  publishTime: "2021-12-22T18:30:45Z",
  thumbnails: "https://i.ytimg.com/vi/qhyKjS6qZco/mqdefault.jpg",
  title: "Valorant Micro defensa SAW Ascent A site Killjoy Setup",
}

const postData = async (video: VideoI) => {
  try {
    console.log("este video llega a postData ",video)
    const res = await fetch("/api/database", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(video)
    } )

  }catch (error) {
    console.log(error)

  }
}

export default postData
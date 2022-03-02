import axios from "axios";
import { Video } from "../../src/videos/types";

export default {
  list: async (): Promise<Video[]> => {
    return axios
    .get("http://localhost:3000/api/database").then(response => response.data)
  },
  mock:{
    list: (): Video[] =>
    ([
      {
        videoId: 'EMAQhGtOXxA',
        etag: 'pDS28kUAUe_Jm7_Jj-Evp-IKgI4',
        description: 'Micro strat sacada de Champions 2021 Stunt Breach, humo Astra, nade Raze, pull Astra Suscribite al canal haciendo click ...',
        publishTime: '2021-12-13T22:00:04Z',
        thumbnails: 'https://i.ytimg.com/vi/EMAQhGtOXxA/mqdefault.jpg',
        title: 'Valorant Micro defensa Team Liquid Split B garage control'
      },
      {
        videoId: 'PdaUjFBLwec',
        etag: 'jvqwXu-jhvpMqDEBn-FXBfPLZP0',
        description: 'Micro strat agresiva del equipo coreano Rio hacia mid link y B lobby Flash de Breach desde corta de A hacia mid link, ulti de ...',
        publishTime: '2021-12-17T19:00:06Z',
        thumbnails: 'https://i.ytimg.com/vi/PdaUjFBLwec/mqdefault.jpg',
        title: 'Valorant Micro defensa Rio Ascent agro mid'
      },
      {
        videoId: 'pwNHOPxfyiQ',
        etag: 'FX5-Z-o5_jabOl5GX4I1MuV7ToM',
        publishTime: '2022-02-25T14:29:09Z',
        thumbnails: 'https://i.ytimg.com/vi/pwNHOPxfyiQ/mqdefault.jpg',
        title: 'Valorant Micro ataque KRU Haven site B',
        description: 'Micro strat sacada de Challengers 2021 Final Latam Ulti de Astra en B con muro de Sage detrás para que no pueda ser ...'
      },
      {
        videoId: 'EjQpFTjp9n8',
        etag: 'RRmfmTX3rugD1sWfxxvBFZcyjHM',
        description: 'Micro strat sacada de Challenger LATAM final 2021 contra KRU Stunt de Breach a hooka con pull de Astra y satchel de Raze ...',
        title: 'Valorant Micro ataque Australs Bind Hooka control',
        thumbnails: 'https://i.ytimg.com/vi/EjQpFTjp9n8/mqdefault.jpg',
        publishTime: '2021-12-30T18:30:13Z'
      },
      {
        videoId: '9_xzt_Wfxl8',
        etag: 'JVGrFzX1FmxLnX3edxlHTFb09us',
        description: 'Micro strat sacada de Champions 2021 Stunt Breach, muro Viper, granada Raze, stunt Astra y flash breach para dominar ...',
        publishTime: '2021-12-08T22:00:09Z',
        thumbnails: 'https://i.ytimg.com/vi/9_xzt_Wfxl8/mqdefault.jpg',
        title: 'Valorant Micro ataque Team Liquid Split B site entry'
      },
      {
        videoId: 'oPMV5l69okU',
        etag: 'FRZlFu8BFXxj6gYzSe9b798NeuU',
        description: 'Micro strat sacada de Champions 2021 Pull y stunt de Astra, recon arrow Sova Suscribite al canal haciendo click acá: ...',
        publishTime: '2021-12-12T21:00:16Z',
        thumbnails: 'https://i.ytimg.com/vi/oPMV5l69okU/mqdefault.jpg',
        title: 'Valorant Micro ataque Team Liquid Bind Shower control'
      },
      {
        videoId: 'AIccCPkr_sA',
        etag: 'WJjOMGO1t6wms-RuwlUJB9K6A_o',
        description: 'Micro strat saca de Challengers Korea 2020 del equipo I Need Girlfriend contra Vision Strikers Pull de Astra con recon de Sova ...',
        publishTime: '2021-12-19T19:30:01Z',
        thumbnails: 'https://i.ytimg.com/vi/AIccCPkr_sA/mqdefault.jpg',
        title: 'Valorant Micro defensa ING Ascent B main'
      },
      {
        videoId: 'bqVKIJ7vCbU',
        etag: 'g-ZWgGSq1Hp7VX5xDXuS3YsFnr4',
        description: 'Micro strat sacada de Challengers 2021 NA Pull de astra y ulti de Sova al contact del orbe de baños Suscribite al canal ...',
        publishTime: '2022-01-07T20:06:40Z',
        thumbnails: 'https://i.ytimg.com/vi/bqVKIJ7vCbU/mqdefault.jpg',
        title: 'Valorant Micro defensa Immortals Bind Showers'
      },
      {
        videoId: 'FcfZrsFpXmM',
        etag: 'ro104D2C4BClnNATsC08wCEqFkw',
        description: 'Micro strat sacada de semifinales de Champions 2021 contra KRU Lobo de Skye, pusheo de Astra con one way y pull ...',
        publishTime: '2021-12-12T23:15:00Z',
        thumbnails: 'https://i.ytimg.com/vi/FcfZrsFpXmM/mqdefault.jpg',
        title: 'Valorant Micro defensa Gambit Ascent A main control'
      },
      {
        videoId: 'hAsyVypsIpY',
        etag: 'PQNE52tyaqZNuz9ueqsrqqwLDH0',
        description: 'Micro strat sacada de Challenger 2021 Pull de Astra en la entrada de hooka, nade de Raze y peek con el tp Suscribite al ...',
        publishTime: '2021-12-31T20:00:19Z',
        thumbnails: 'https://i.ytimg.com/vi/hAsyVypsIpY/mqdefault.jpg',
        title: 'Valorant Micro defensa G2  Bind Hooka'
      },
      {
        videoId: '27rNLNkm6vk',
        etag: 'zG_b5TImh2Jrb6jDA_Q1lkq-1z4',
        description: 'Micro strat sacada de Challengers 2020 del equipo Portugués SAW Pull de Astra, nade de Raze al esuchar el orbe Suscribite ...',
        publishTime: '2021-12-19T17:30:00Z',
        thumbnails: 'https://i.ytimg.com/vi/27rNLNkm6vk/mqdefault.jpg',
        title: 'Valorant Micro defensa SAW Ascent B main'
      }
    ])
  }
};

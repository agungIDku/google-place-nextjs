import type { NextApiRequest, NextApiResponse } from "next"

/**
 *
 * @description This is using MOCK, because APi for fetch location is not free and have to subscribe
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { keyword = '' } = req.query

  const dataFilter = [...data.predictions].filter(el =>
    el.name.toLowerCase().includes((keyword as string).toLowerCase())
  )

  res.status(200).json({
    predictions: dataFilter
  })
}


const data = {
  predictions: [
    {
      description: '',
      name: 'Akang Liquid',
      type: 'home',
      address: 'Banjar Waru, Kabupaten Bogor, Jawa Barat',
      coords: { lat: -6.6641237, lng: 106.8533781 }
    },
    {
      description: '',
      name: 'Akang Motor',
      type: 'business',
      address: 'Jalan Raya Kranggan, RT.008/RW.008, Jatiraden, Kota Bekasi, Jawa Barat',
      coords: { lat: -6.3474217, lng: 106.9198377 }
    },
    {
      description: '',
      name: 'Akang Group (Head Office)',
      type: 'business',
      address: 'Kelapa Dua, Kabupaten Tangerang, Banten',
      coords: { lat: -6.2286661, lng: 106.6161834 }
    },
    {
      description: '',
      name: 'Rumah Kakek',
      type: 'home',
      address: 'RT.08, Krajan, Trisobo, Kabupaten Kendal, Jawa Tengah',
      coords: { lat: -7.0622265, lng: 110.2856172 }
    },
    {
      description: '',
      name: 'Sentra Medika Hospital Cibinong',
      type: 'business',
      address: 'Jalan Raya Mayor Oking Jaya Atmaja, Cibinong, Kabupaten Bogor, Jawa Barat',
      coords: { lat: -6.4806759, lng: 106.8622641}
    },
    {
      description: '',
      name: 'Eka hospital',
      type: 'business',
      address: 'Central Business District, Jalan Boulevard BSD Timur, Lengkong Gudang, Kota Tangerang Selatan, Banten',
      coords: { lat: -6.2989837, lng: 106.6673611 }
    },
    {
      description: '',
      name: 'Ekaria Delight',
      type: 'business',
      address: 'BSD, Lengkong Gudang, Kota Tangerang Selatan, Banten',
      coords: { lat: -6.2946257, lng: 106.6652801 }
    },
    {
      description: '',
      name: 'Messi Home',
      type: 'home',
      address: 'Jalan Cempaka Putih Barat XXI, RT.1/RW.12, Cempaka Putih Barat, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta',
      coords: { lat: -6.1802437, lng: 106.8634569 }
    },
    {
      description: '',
      name: 'Messi Sport',
      type: 'home',
      address: 'Jalan Fachrudin Raya, Kampung Bali, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta',
      coords: { lat: -6.1873424, lng: 106.8115242 }
    },
    {
      description: '',
      name: 'MESSI STORE',
      type: 'business',
      address: 'Gg. Mawar 6, RT.006/RW.017, Larangan Utara, Kota Tangerang, Banten',
      coords: { lat: -6.2396443, lng: 106.7217718 }
    },
    {
      description: '',
      name: 'Messi food',
      type: 'business',
      address: 'Krajan Tengah, Meteseh, Kabupaten Kendal, Jawa Tengah',
      coords: { lat: -7.0885725, lng: 110.2688001 }
    },
  ]
}

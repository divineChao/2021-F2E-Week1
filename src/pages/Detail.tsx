// import { useParams } from 'react-router'
import useStore from '@/store'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ChevronRightIcon, LocationMarkerIcon, BadgeCheckIcon, PhoneIcon } from '@heroicons/react/solid'
import { LeafletMap } from '@/components/ui/LeafletMap'
type IdParams = {
  id: string
}

export function Detail() {
  // const [didLoad, setDidLoad] = useState<boolean>(false)
  const { id } = useParams<IdParams>()
  const allLocation = useStore((state) => state.scenicSpotsAll)

  const getAll = useStore((state) => state.getScenicSpotsAll)
  const getById = (id: string) => {
    return allLocation.find((item) => item.ID === id)
  }
  let detail = getById(id)
  const [imgStyle, setImgStyle] = useState({})

  useEffect(() => {
    if (allLocation.length === 0) {
      getAll()
    }
    if (detail && detail.ID != id) {
      console.warn('detail.ID != id', detail.ID)
      getById(id)
    }
    if (detail && detail.Picture != null) {
      let imgMap = new Map(Object.entries(detail.Picture))
      setImgStyle(() => {
        let result = {
          backgroundImage: `url(https://p3n3w9t2.rocketcdn.me/wp-content/uploads/2020/09/autumn-in-taiwan-header.png)`,
          backgroundSize: 'cover'
        }
        imgMap.forEach((v) => {
          if (v && v.includes('http')) {
            result = {
              backgroundImage: `url(${v})`,
              backgroundSize: 'cover'
            }
          }
        })
        return result
      })
    }
  }, [allLocation, detail, id])

  return (
    <>
      <section className="flex flex-row items-center">
        <Link to="/home">首頁</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Link to="/home">城市</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Link to="/scenicSpot">景點</Link>
        <ChevronRightIcon className="h-4 w-4" />
        {detail?.Name}
      </section>
      <section className="my-4 border rounded-lg h-[310px]" style={imgStyle}></section>
      <section className="my-4 flex flex-col border border-gray rounded-lg p-10">
        <p className="my-2 flex flex-row content-center items-center">
          <LocationMarkerIcon className="h-5 w-5 mr-1 min-w-[20px]" />
          地址: {detail?.Address || '資訊待補'}
        </p>
        <p className="my-2 flex flex-row content-center items-center">
          <PhoneIcon className="h-5 w-5 mr-1 min-w-[20px]" />
          電話: {detail?.Phone || '資訊待補'}
        </p>
        <p className="my-2 flex flex-row content-center items-center">
          <BadgeCheckIcon className="h-5 w-5 mr-1 min-w-[20px]" />
          開放時間: {detail?.OpenTime || '資訊待補'}
        </p>
      </section>
      <section className="my-3 py-6">
        <h1 className="text-2xl font-bold mb-4">{detail?.Name}</h1>
        <p>{detail?.DescriptionDetail}</p>
      </section>
      <section className="my-4 border-0 border-transparent shadow rounded-lg overflow-hidden h-[310px] w-full">
        <LeafletMap lat={detail?.Position.PositionLat || 0} lon={detail?.Position.PositionLon || 0} />
      </section>
    </>
  )
}

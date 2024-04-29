import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchDataFromApi } from '../utils/api'
import { Context } from '../context/contextApi'
import Leftnav from './Leftnav'
import SearchResultvideocard from '../components/SearchResultvideocard'
const SearchResults = () => {
  const [results, setResults] = useState();
  const { searchQuery } = useParams()
  const { setLoading } = useContext(Context)

  useEffect(()=>{
    document.getElementById("root").classList.remove('custom-h');
    fetchSearchresults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchQuery])

  const fetchSearchresults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res.contents)
      setResults(res.contents);
      setLoading(false);
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='flex flex-row h-[calc(100%- 56px)]'>
      <Leftnav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-hidden bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {results?.map((item) => {
            if (item?.type !== 'video') return false;
            let video = item?.video
            return (
              <SearchResultvideocard
                key={video?.videoId}
                video={video} />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default SearchResults

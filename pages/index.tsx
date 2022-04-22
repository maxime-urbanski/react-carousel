import {useEffect, useState} from "react";
import type { NextPage } from 'next'
import Axios from "axios";
import Carousel from "@/components/carousel/Carousel";

const Home: NextPage = () => {

  const [img, setImg] = useState<Array<string>>([])

  let imgUrl: Array<string> = []
  useEffect( () => {
    const fetchImg = async () => {
      const req = await  Axios.get('https://picsum.photos/v2/list?limit=7');
      const res = req.data;
      imgUrl = [...res, res];
    }
    fetchImg()
  }, [])


  imgUrl.forEach((element) => setImg(element.download_url))
  return (
    <div className="container">
     <Carousel array={img} elementVisible={1} elementToSlide={1} />
    </div>
  )
}

export default Home

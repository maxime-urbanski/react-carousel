import {useEffect, useState} from "react";
import type { NextPage } from 'next'
import Axios from "axios";
import Carousel from "@/components/carousel/Carousel";
import {Logger} from "sass";

const Home: NextPage = () => {

  const [img, setImg] = useState<Array<string>>([])

  useEffect( () => {
    let test: Array<string> = []
    const fetchImg = async () => {
      const req = await  Axios.get('https://picsum.photos/v2/list?limit=7');
      const res = req.data;
      const getImgUrl = res.map(({download_url}) => download_url);
      setImg(getImgUrl);
    }
    fetchImg();
  }, [])

  return (
    <div className="container">
     <Carousel array={img} elementVisible={1} elementToSlide={1} setImg={setImg} />
    </div>
  )
}

export default Home

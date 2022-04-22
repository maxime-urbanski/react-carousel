import {useEffect, useRef, useState} from "react";

interface CarouselProps {
  array: Array<string>
  elementVisible: number
  elementToSlide: number
}


const Carousel = ({array, elementVisible, elementToSlide}: CarouselProps):JSX.Element => {

  const [index, setIndex] = useState<number>(0)
  const prev = () => {
    if (index < 0) {
      setIndex(0)
    }
    setIndex(index - 1)
  }
  const next = () => {
    setIndex(index + 1)
  }

  const test = elementVisible / elementToSlide

  const translate = (100 / test) * index + "%";

  const widthVisible = 100 / elementVisible + "%"

  return (
    <div style={{display: "flex", flexDirection:'column'}}>
      <div className="carousel">
        <button className="button prev" onClick={prev}>Prev</button>
        <div className="carousel-container" style={{transform: `translateX(-${translate})`}}>
          {array.map( element =>
            <div
              className="carousel-item"
              style={{width: widthVisible}}
              key={element}
            >
              <img src={element} alt={element} />
            </div>)
          }
        </div>
        <button className="button next" onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default Carousel

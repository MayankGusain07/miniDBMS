import { useEffect, useState } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { search } from '../api'
import { Art } from '../ContextTypes'
import FadeInTop from './animation/FadeInAnim'

type ViewArtProps = {
    showArt: string
}

const ViewArt = ({ match }: RouteComponentProps<ViewArtProps>) => {

    const [foundArt, setFoundArt] = useState<Art>()

    const getData = async () => {
        search(match.params.showArt).then((data) => {
            setFoundArt(data)
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getData()
    }, [])
    return (
        <div className="view-art">
            <div className="jumbo">
                <img src={foundArt?.imageurl} alt={foundArt?.name} />
                <div className="image-mask"></div>
                {/* <div className="image-dp">
                    <img src={foundArt?.url} alt={foundArt?.name} />
                </div> */}
            </div>
            <FadeInTop children={<div className="found-art">
                <img alt={foundArt?.name} src={foundArt?.imageurl} className="art-image" />
                <div>
                    <div className="art-name"> {foundArt?.name}</div>
                    <div className="art-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem sed tenetur illo, magnam accusamus tempora doloremque modi, odio, earum sunt quas quisquam quae nesciunt ducimus ullam eligendi quos cupiditate.</div>
                    <div className="art-rating">Rating: {foundArt?.rating}</div>
                    <div className="art-price">Price: ${foundArt?.price}</div>
                    <div className="art-buttons">
                        <Link to={{
                            pathname: "/buyart/" + foundArt?.name
                        }} className="art-buy">Buy Now</Link>
                    </div>
                </div>
            </div>} classname="" />
        </div>
    )
}

export default ViewArt
import { useEffect, useRef, useState } from "react"
import { useLocation } from "wouter"
import getApiEpisode from "../../services/getApiEpisode"
import Loader from "../Loader"
import './EpisodeCard.css'
function EpisodeCard({ id }) {
    const [location, pushLocation] = useLocation();
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [_id, setId] = useState(false)

    useEffect(() => {
        setLoading(true)
        getApiEpisode(_id).then((newdata) => {
            setData(newdata)
            setLoading(false)
        })
    }, [_id]
    )

    if (id !== _id) {
        setId(id)
    }

    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    if (!loading && data) {
        return (
            <button onClick={() => {
                pushLocation(`/episode/${data.id}`)
            }} className="episode_card">
                <h1>{data.name}</h1>
                <span> Air Date: {data.air_date}</span>
                <span> Created: {data.created}</span>
                <span>Episode: {data.episode}</span>
            </button>
        )
    }
}

export default function LazyEpisodeCard({ id }) {
    const [show, setShow] = useState(false)
    const elementRef = useRef();

    useEffect(() => {
        const onChange = (entries) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '20px'
        })

        observer.observe(elementRef.current)
    })

    return <div ref={elementRef}>
        {show ? <EpisodeCard id={id} /> : null}
    </div>
}
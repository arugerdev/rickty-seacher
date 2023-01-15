import './CharacterCard.css'
import { Link, } from 'wouter'
import { useEffect, useRef, useState } from 'react';
import getApiDataByID from '../../services/getApiDataByID';

function CharacterCard({ id }) {
    const [_id, setId] = useState(id)
    const [info, setInfo] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getApiDataByID(_id).then((data) => {
            setInfo(data)
            setLoading(false)
        })
    }, [_id]
    )

    if (id !== _id) {
        setId(id)
    }

    if (info) {
        0
        return (
            <Link to={`/character/${info.id}`} className="characterCard">
                <h2 className='characterCard_name'>{info.name}</h2>
                <span className='characterCard_status'><div className={'character_status ' + info.status}></div> {info.status} - {info.species}</span>
                <img loading='lazy' className='characterCard_image' src={info.image} alt="" />
            </Link>
        )
    }
}

export default function LazyCharacterCard({ id }) {
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
        {show ? <CharacterCard id={id} /> : null}
    </div>
}
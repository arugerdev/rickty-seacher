import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter'
import CharacterCard from '../../components/CharacterCard';
import getApiEpisode from '../../services/getApiEpisode';
import Loader from '../../components/Loader';
export default function CharacterPage() {
    const [location, pushLocation] = useLocation();
    const id = location.replace('/episode/', '')
    const [info, setInfo] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getApiEpisode(id).then((data) => {
            setInfo(data)
            setLoading(false)
        })
    }, [id]
    )

    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    if (!loading && info) {
        return (
            <div className="character_page">
                <div className="character_info">
                    <button className='back_button' onClick={() => {
                        pushLocation('/')
                    }}>
                        <svg clipRule="evenodd" fill='currentcolor' fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fillRule="nonzero" /></svg>
                    </button>
                    <h1 className='char_name'>{info.name}</h1>
                    <div className="allCharInfo">
                    </div>
                    <span className='char_info'>✈️ - Air Date: {info.air_date}</span>
                    <span className='char_info'>📺 - Episode: {info.episode}</span>
                    <span className='char_info'>🗓️ - Created: {info.created}</span>
                    <div className='char_episodes'>
                        <h2>Characters:</h2>
                        <div className="episode_characters">
                            {
                                Object.values(info.characters).map((item, id) => {
                                    return (
                                        <CharacterCard key={item.id + 'character' + id} id={parseInt(item.replace('https://rickandmortyapi.com/api/character/', ''))}></CharacterCard>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
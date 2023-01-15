import loaderLogo from '../../assets/loader-logo.png'
import './Loader.css'

export default function Loader() {
    return (
        <div className="loader">
            <img src={loaderLogo} alt="" />
        </div>
    )
}
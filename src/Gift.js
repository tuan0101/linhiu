import './Login.css';
import myvide from "./images/linhiu.mov"

const Gift = () => {
    return (

        <div className="login-form">
                {/* <iframe src="https://www.youtube.com/embed/VsTZikuF7V8"
                    title="Natalie" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className="video">
                </iframe> */}
               {/* <video width="750" height="500" autoPlay controls src={myvide} className='video'>
                    <source  type="video/mp4"/>
                </video> */}
                <iframe src="https://drive.google.com/file/d/1JrfoXR8Vut_QXmVWML9EGJo2oMxKWvXd/preview" width="640" height="480" allow="autoplay" allowFullScreen
                className='video'></iframe>
                browser does not support the video tag. I suggest you upgrade your browser.
        </div>

    );
};

export default Gift;
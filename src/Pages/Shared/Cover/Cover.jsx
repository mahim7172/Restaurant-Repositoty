import { Parallax } from 'react-parallax';
const Cover = ({ img, title, description }) => {



    return (
        <div>
            <Parallax
                blur={{ min: -500, max: 500 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero min-h-[700px]" style={{ backgroundImage: `url("${img}")` }}>

                    <div className="hero-overlay bg-opacity-60"></div>

                    <div className="hero-content text-center text-neutral-content">

                        <div className="max-w-md">

                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>

                            <p className="mb-5 uppercase">{description}</p>

                            <button className="btn btn-primary">Get Started</button>

                        </div>

                    </div>

                </div>


            </Parallax>

        </div >
    );
};

export default Cover;
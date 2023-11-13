import { Parallax } from 'react-parallax';
const Cover = ({ img, title, description }) => {



    return (
        <div>
            <Parallax
                blur={{ min: -100, max: 100 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div className="hero h-[600px] px-28 py-36" style={{ backgroundImage: `url("${img}")` }}>

                    <div className="hero-overlay bg-opacity-60"></div>

                    <div className="hero-content text-center text-neutral-content">

                        <div className="max-w-md">

                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>

                            <p className="mb-5 uppercase">{description}</p>



                        </div>

                    </div>

                </div>


            </Parallax>

        </div >
    );
};

export default Cover;
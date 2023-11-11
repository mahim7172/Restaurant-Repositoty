
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mx-auto md:w-4/12  ">
            <p className="text-yellow-400 pb-2">----{subHeading}----</p>

            <p className="text-3xl font-medium border-y-4 mb-5 md:mb-10 py-4">{heading}</p>

        </div>
    );
};

export default SectionTitle;
import Special from "./Special";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name == "Tom tom" && <Special asset={asset} />
            }
        </div>
    );
};

export default Cousin;
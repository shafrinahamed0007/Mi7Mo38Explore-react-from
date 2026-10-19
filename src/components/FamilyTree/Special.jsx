import { useContext } from "react";
import { AssetContext } from "./FamilyTree";


const Special = ({name, asset}) => {
    const newAsset = useContext(AssetContext);
    console.log("new asset", newAsset)
    return (
        <div>
            <h3>Special: {name}</h3>
            <h4>Asset: {asset}</h4>
            <h3>{newAsset}</h3>
        </div>
    );
};

export default Special;
import Cousin from "./Cousin";


const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name="Tom tom" asset={asset} />
                <Cousin name="Jojo" />

            </section>
        </div>
    );
};

export default Aunt;
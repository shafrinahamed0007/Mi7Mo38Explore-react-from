import Cousin from "./Cousin";


const Aunt = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name="Tom tom" />
                <Cousin name="Jojo" />

            </section>
        </div>
    );
};

export default Aunt;
import Cousin from "./Cousin";


const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin name="Rafasn" />
                <Cousin name="Japsha" />
            </section>
        </div>
    );
};

export default Uncle;
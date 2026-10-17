

const FormAction = () => {
    const handleFormAction = (formData) =>{
        console.log(formData.get("name"));
        console.log(formData.get("email"))

    }
    return (
        <div>
            <h2>Form Action</h2>
            <form action={handleFormAction}>
                <input type="text" name="name" placeholder="your name" id="" />
                <br />
                <input type="email" name="email" placeholder="your email address" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default FormAction;
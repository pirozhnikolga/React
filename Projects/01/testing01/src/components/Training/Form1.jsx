import s from "./Form1.module.css";

const Form1 = () => {
    return (
        <form class={s.myForm}>
                <label for="customer_name">Name </label>
                <input type="text" name="customer_name" id="customer_name" required />
                <label for="email_address">Email </label>
                <input type="email" name="email_address" id="email_address" />
                <label for="comments">Comments</label>
                <textarea name="comments" id="comments" maxlength="500"></textarea>
                <button>Submit</button>
            </form>
    )
}

export default Form1;
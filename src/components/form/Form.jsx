import React from 'react';
import { request_form, form_control, hidden } from "./Form.module.css";

import { Button } from "../styled/Styled";


const Form = () => {
    return (
            <div className={request_form}>
                <h3>Got an idea? Let's build that!</h3>
                {/* ADD NETLIFY FORMS SUPPORT / VISIT DOCS FOR REF */}
                <form name="contact" method="POST">
                    <input type="hidden" name="form-name" value="contact"/>
                    {/* NETLIFY FORMS ANTI-SPAM */}
                    <p className={hidden}>
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <div className={form_control}>
                        <input type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className={form_control}>
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className={form_control}>
                        <textarea type="text" name="description" placeholder="Project Description" required style={{resize: "none", fontSize: "0.8rem", height: "7em"}} />
                    </div>
                    <Button type="submit" color="secondary">Send</Button>
                </form>
            </div>
    );
}
 
export default Form;
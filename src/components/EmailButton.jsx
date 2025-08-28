import React from 'react';

const EmailButton = () => {
    return (
        <div>
            <form action="mailto:someone@example.com" method="post" encType="text/plain">
                Name:<br/>
                <input type="text" name="name"/><br/>
                E-mail:<br/>
                <input type="text" name="mail"/><br/>
                Comment:<br/>
                <input type="text" name="comment" size="50"/><br/><br/>
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
            </form>
        </div>
    );
};

export default EmailButton;

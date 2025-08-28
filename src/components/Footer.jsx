import React, {useState} from 'react';
import EmailButton from "./EmailButton.jsx";
import Modal from "react-modal";
//Modal.setAppElement('#root');

const Footer = () => {
        const [open, setOpen] = useState(false);
    return (
        <footer className="row align-items-center">
            <div className="offset-2 col-1 btn btn-danger">
                <button className="btn btn-danger text-center"
                        onClick={() => setOpen(true)}>
                    Email me
                </button>

                <Modal
                    isOpen={open}
                    onRequestClose={() => setOpen(false)}
                    contentLabel="Email Modal"
                >
                    <button onClick={() => setOpen(false)}>×</button>
                    <EmailButton />
                </Modal>
        </div>

        </footer>
    );
};

export default Footer;
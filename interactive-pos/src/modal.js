function Modal({component, dismiss=()=>{}}){
    return (
        <div className="pos-modal">
            <div className="pos-modal-content">
                <div>
                    <button type="button" className="pos-close" onClick={dismiss}>&times;</button>
                    {component}
                </div>
            </div>
        </div>
    );
}

export default Modal;
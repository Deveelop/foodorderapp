import { Fragment } from 'react'
import ReactDom from 'react-dom'
import styles from './Modal.module.css'

const Backdrop = (props) => {
return <div onClick={props.onClick} className={styles.backdrop}/>
}

const ModalOverlay = (props) => {
return <div className={styles.modal}>
    <div  className={styles.content}>{props.children}</div>
</div>
}

const portalElement = document.querySelector('#overlays')

const Modal = (props) => {
return <Fragment>
{ReactDom.createPortal(<Backdrop onClick={props.onCancel}/>, portalElement)}
{ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
</Fragment>
}

export default Modal;
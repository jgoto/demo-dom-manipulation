import styles from './ContactForm.module.css';

export default function ContactForm(){  
    return (
        <div className={styles.contactForm}>
            <form>
                <label>Name <input /></label>
                <label>Email <input /></label>
                <label>Number of Tickets <input type="number" /></label>
            </form>        
        </div>      
        )
}
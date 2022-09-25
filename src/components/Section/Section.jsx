
export default function Section({ title, children }) {
    return (
        <div className='Feedback'>
            <h2 className='Header'>{title}</h2>
            {children}
        </div>
    )
}
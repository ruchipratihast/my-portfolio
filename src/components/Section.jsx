export default function Section({ id, title, children, className = "" }) {
    return (
        <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
            {title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-gradient">{title}</span>
                </h2>
            )}
            {children}
        </section>
    );
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return(
        <section className="mx-auto max-w-[80rem]">
            {children}
        </section>
    )
}

export default Wrapper
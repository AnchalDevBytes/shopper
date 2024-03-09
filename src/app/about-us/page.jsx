const AboutPage = () => {
    return (
        <div className="bg-fuchsia-950 min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-4xl px-6 py-12 bg-purple-950 shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-6">About Us</h1>
                <p className="text-lg text-fuchsia-200 mb-6">
                I&apos;m Anchal Raj, a frontend developer passionate about building modern web applications using technologies like React, Next.js, and other frontend tools.
                </p>
                <p className="text-lg text-purple-300 mb-6">
                You can find me on Twitter at <a href="https://twitter.com/AnchalTwt" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">@AnchalTwt</a> and on LinkedIn at <a href="https://www.linkedin.com/in/anchaldevbytes/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">@anchaldevbytes</a>.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
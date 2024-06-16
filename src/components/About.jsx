const About = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-base mb-2 ">Hi, I&rsquo;m Devanshu Desai, and welcome to my blog!</p>

            <h2 className="text-2xl font-bold mb-4 text-left underline">My Background</h2>
            <p className="text-base mb-2 text-left">
                Brief bio about yourself, including your profession, experience, and expertise related to your blog&rsquo;s topics.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-left underline">Blog&rsquo;s Mission</h2>
            <p className="text-base mb-2 text-left">
                Explain the purpose and goals of your blog. What do you aim to achieve through your content, and what value do you hope to provide to your readers?
            </p>

            <h2 className="text-2xl font-bold mb-4 text-left underline">My Unique Perspective</h2>
            <p className="text-base mb-2 text-left">
                Highlight what sets your blog apart from others in your niche. Do you have a unique approach, writing style, or perspective on the topics you cover?
            </p>

            <h2 className="text-2xl font-bold mb-4 text-left underline">My Inspiration</h2>
            <p className="text-base mb-2 text-left">
                Share any personal experiences or stories that inspired you to start your blog or shaped your perspective on the topics you write about.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-left underline">Connect with Me</h2>
            <p className="text-base mb-2 text-left">
                Encourage readers to engage with your blog by inviting them to read your articles, subscribe to your newsletter, or follow you on social media.
            </p>
            <ul className="list-disc pl-5">
                <li className="mb-2 text-left">Link to your newsletter signup</li>
                <li className="mb-2 text-left">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default About;
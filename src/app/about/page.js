export default function AboutContact() {
  return (
    <main className="min-h-screen p-6 sm:p-12 bg-black text-white">
      {/* About Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-extrabold mb-6 text-white">About Me</h1>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          I&rsquo;m Mayank Kumaran, an Electrical and Computer Engineering student passionate about AI, embedded systems, and high-frequency trading technology.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          My experience spans machine learning, embedded systems, and web development, including projects like creating an open-source Active Learning package, developing an MQTT client for electric vehicles, and leading the development of a 2D fighter game. I enjoy tackling complex challenges, collaborating on creative solutions, and continuously learning new technologies. When I&apos;m not coding, I enjoy working on game development, mentoring, and exploring the latest in AI and tech.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
        <p className="text-lg text-gray-400 mb-6">
          Feel free to reach out if you&apos;d like to collaborate on a project, have any questions, or just want to say hi!
        </p>
        <div className="space-y-4">
          <p className="text-lg text-gray-400">
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:kumaranmayank.work@gmail.com" className="text-blue-400 hover:underline">kumaranmayank.work@gmail.com</a>
          </p>
          <p className="text-lg text-gray-400">
            <span className="font-semibold">LinkedIn:</span>{' '}
            <a href="https://www.linkedin.com/in/mayank-kumaran-b45344236/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/mayank-kumaran
            </a>
          </p>
          <p className="text-lg text-gray-400">
            <span className="font-semibold">GitHub:</span>{' '}
            <a href="https://github.com/ShadowSevenTwoFour" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              github.com/ShadowSevenTwoFour
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

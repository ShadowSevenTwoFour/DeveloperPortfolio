import Image from 'next/image';

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      {/* Anchor the title at the top of the page */}
      <h1 className="text-3xl font-bold mb-8 sticky top-0 bg-gray w-full text-center p-4 z-10">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Mammoth Melee */}
        <div className="border p-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 flex flex-col items-center">
          <Image
            src="/placeholder-image.png" // Replace with the actual image path
            alt="Mammoth Melee"
            width={500} // Adjust the width as needed
            height={192} // Adjust the height as needed
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold">Mammoth Melee</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A 2D fighter game where players control mammoths in a battle for survival. Using Unity for game mechanics and animations.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4">View Project</a>
        </div>

        {/* RFID Scanner */}
        <div className="border p-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 flex flex-col items-center">
          <Image
            src="/placeholder-image.png" // Replace with the actual image path
            alt="RFID Scanner"
            width={500} // Adjust the width as needed
            height={192} // Adjust the height as needed
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold">RFID Scanner</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Developed an RFID scanner using Arduino and ESP32 to scan NFC tags and securely log data to a SQL database.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4">View Project</a>
        </div>

        {/* FPGA-based Super Mario Bros NES */}
        <div className="border p-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 flex flex-col items-center">
          <Image
            src="/placeholder-image.png" // Replace with the actual image path
            alt="FPGA Super Mario Bros NES"
            width={500} // Adjust the width as needed
            height={192} // Adjust the height as needed
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold">FPGA-Based Super Mario Bros NES</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Recreated the original Super Mario Bros for the NES on an FPGA using VHDL and a VGA display.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4">View Project</a>
        </div>

        {/* NLP Perfume Recommender */}
        <div className="border p-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 flex flex-col items-center">
          <Image
            src="/placeholder-image.png" // Replace with the actual image path
            alt="NLP Perfume Recommender"
            width={500} // Adjust the width as needed
            height={192} // Adjust the height as needed
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold">NLP Perfume Recommender</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Built an NLP-based recommender system that suggests perfumes based on user preferences and customer reviews.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4">View Project</a>
        </div>
      </div>
    </main>
  );
}

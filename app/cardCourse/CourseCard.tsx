import React from 'react';

interface CourseProps {
  /** Is this the principal call to action on the page? */
  title?: string;
  /** What background color to use */
  description?: string;
  /** How large should the button be? */
  startDate?: string;
  /** Button contents */
  imageUrl?: string;
  /** Optional click handler */
  faculty?: string;
  format?: string;
  tag?: string;
}

const CourseCard = ({
  /** Is this the principal call to action on the page? */
  title = 'Nombre programa',
  description = 'Donec ode tellus, facilisis at ornare sed, scelerisque sit amet sapien. Sed risus turpis, fermentum quis finibus sed, pretium quis metus.',
  startDate = 'Próximamente',
  imageUrl = 'https://i.ibb.co/SKvNJQg/Copia-de-Morsa-IS-Bogot-university-Cam-1-3318.jpg',
  faculty = 'Facultad',
  format = 'Virtual',
  tag = 'etiqueta',
}:CourseProps ) => {
  return (
    <article className="rounded-xl max-w-xs shadow-lg overflow-hidden">
      {/* Card Image */}
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt="Course Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-4">
          <p className="bg-green-700 text-white px-3 py-1 rounded-full">{faculty}</p>
          <p className="bg-green-300 text-black px-3 py-1 rounded-full">{format}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 bg-white text-black hover:bg-orange-500 hover:text-white transition-colors duration-300 group">
        <p className="border-2 border-purple-300 text-blue-900 px-3 py-1 rounded-full inline-block bg-white">
          {tag}
        </p>

        <h3 className="mt-4 font-bold text-lg">{title}</h3>
        <div className="mt-2 flex items-center space-x-2">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M8 2v4M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
          <span>Fecha de inicio: {startDate}</span>
        </div>
        <p className="mt-4">{description}</p>

        {/* Card Footer */}
        <div className="mt-4 flex space-x-4">
          <a
            href="#"
            className="text-orange-500 font-bold flex items-center space-x-2 group-hover:text-white transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 group-hover:text-white"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <span>Conocer más</span>
          </a>
          <a
            href="#"
            className="bg-orange-500 border border-orange-500 text-white px-4 py-2 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-white transition-colors duration-300"
            >
              <span className="group-hover:text-orange-500 transition-colors duration-300">Inscríbete</span>
              <div className="ml-2 bg-orange-500 text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-orange-500 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                <path d="M6 17l5-5-5-5" />
                <path d="M13 17l5-5-5-5" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;

import React from 'react';

const StudentLife = () => {
  return (
    <div className="relative flex items-center justify-center bg-cover bg-center h-[80vh]" style={{ backgroundImage: "url('/student.jpg')" }}>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg ml-auto mr-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Student Life at Springdale Public School </h2>
        <p className="text-gray-700 mb-6">
		Springdale Public School brings together students from all backgrounds, and every corner of the earth, to share their experiences and perspectives with one another. Make your mark as part of our vibrant community.
        </p>
        <a href="#" className="text-yellow-500 font-semibold hover:underline">
          LEARN MORE →
        </a>
      </div>
    </div>
  );
}

export default StudentLife;

import React, { useState } from 'react';
import Coursecard from '../Components/Courses/CourseCard';
import { useNavigate } from 'react-router-dom';

const AllCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([
    {
      // name: '',
      // desc: '',
      // price: '',
      // id: '1',
      // rating: 5,
      // img: '',
    },
    {},
    {},
  ]);

  return (
    <div className='flex flex-row m-auto items-center justify-center w-full flex-wrap lg:flex-nowrap py-10 mt-8 px-3 gap-6'>
      {courses.map((course, value) => {
        return (
          <Coursecard
            onClick={(_) => {
              navigate(`/courses/${course.id}`);
            }}
            key={value}
            cardDetails={course}
          />
        );
      })}
    </div>
  );
};

export default AllCourses;

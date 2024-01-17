package com.example.teamdbackend.teamdbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.teamdbackend.teamdbackend.Entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}

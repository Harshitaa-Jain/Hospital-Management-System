package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Doctor;

public interface DoctorDao extends JpaRepository<Doctor, Long>{
  
	
	@Query("select d from Doctor d where d.status = true")
	List<Doctor> getAllDoctor();

	Optional<Doctor> findByEmailAndPassword(String email, String password);
	
}

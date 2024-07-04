package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Patient;

public interface PatientDao extends JpaRepository<Patient, Long>{
	Optional<Patient> findByEmailAndPassword(String email, String password);

	@Query("select p from Patient p where p.status = true")
	List<Patient> getAllPatients();
}


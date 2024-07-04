package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Appointment;
import com.app.entities.Doctor;
import com.app.entities.Patient;



public interface AppointmentDao extends JpaRepository<Appointment, Long>{


	List<Appointment> findAllByAptStatusTrue();

	

	//@Query("select t from Appointment t where t.id =:patientId")
	//List<Appointment> findAllById(Long patientId);
//List<Appointment> findAllByPatient();
List<Appointment> findAllByPatient(Patient p);



// List<Appointment> findAllByDoctor(Doctor d);
List<Appointment> findAllByAptStatusTrueAndDoctor(Doctor d);

//List<Appointment> findAllById(Long patientId);


List<Appointment> findAllByPaymentStatusTrue();
}

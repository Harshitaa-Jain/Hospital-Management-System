package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.PatientDto;
import com.app.dto.SigninRequest;
import com.app.entities.Patient;

public interface PatientService {

	Patient addPatientServ(Patient patient);

	List<Patient> displayAllPatient();

	Patient authenticatePatient(@Valid SigninRequest request);

	//boolean updateStatusOfPatient(Long patientId);

	boolean updatePatient(PatientDto detachedPatient, Long patientId);

	Patient getPatientById(Long patientId);

	
}

package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.DoctorDto;
import com.app.dto.SigninRequest;
import com.app.entities.Doctor;


public interface DoctorService {

	Doctor addDoctorServ(Doctor doctor);

	List<Doctor> getAllDocsServ();

	boolean updateStatus(Long docId);

	boolean updateDoctor(Doctor detachedDoctor, Long docId);

	Doctor getDoctorById(Long doctorId);

	Doctor authenticateDoctor(@Valid SigninRequest request);
    
    


	
}

package com.app.service;

import java.util.List;

import com.app.dto.AdminDto;
import com.app.dto.PatientDto;
import com.app.entities.Admin;
import com.app.entities.Doctor;
import com.app.entities.Patient;

public interface AdminService {

	Admin addAdmin(Admin admin);

	void updateAdmin(AdminDto detachedAdmin, Long adminId);

	Admin getAdminById(Long adminId);


	Doctor addDoctorServ(Doctor doctor);

	boolean updateStatus(Long docId);

	List<Patient> displayAllPatient();

	
	boolean updateStatusOfPatient(Long patientId);

	List<Doctor> getAllDocsServ();

	Admin addAdminServ(Admin admin);

	}

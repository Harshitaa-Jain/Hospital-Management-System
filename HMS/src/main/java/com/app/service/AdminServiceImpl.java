package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.AdminDao;
import com.app.dao.DoctorDao;
import com.app.dao.PatientDao;
import com.app.dto.AdminDto;
import com.app.entities.Admin;
import com.app.entities.Doctor;
import com.app.entities.DoctorSchedule;
import com.app.entities.Patient;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private PatientDao patientDao;
	
	
	@Autowired
	private DoctorDao docDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	

	@Override
	public Admin addAdmin(Admin admin) {
		   
		return adminDao.save(admin);
	}


	@Override
	public Doctor addDoctorServ(Doctor doctor) {
		List<DoctorSchedule> listd = doctor.getSchedule();
		doctor.setPassword(passwordEncoder.encode(doctor.getPassword()));
		doctor.addDSchedule(listd);
		return docDao.save(doctor);
	}
	
	@Override
	public void updateAdmin(AdminDto detachedAdmin, Long adminId) {
		Admin admin=adminDao.findById(adminId).orElseThrow();
		mapper.map(detachedAdmin, admin);
		
	}


	@Override
	public Admin getAdminById(Long adminId) {
		System.out.println("in get by admin:*****************");
		return adminDao.findById(adminId).orElseThrow();
	}
	
	
	@Override
	public boolean updateStatus(Long docId) {
		
		Doctor doc=docDao.findById(docId).orElseThrow();
		doc.setStatus(false);
		docDao.save(doc);
		return true;
	}

	
	@Override
	public List<Patient> displayAllPatient() {

		//return patientDao.findAll();
		return patientDao.getAllPatients();
	}


	@Override
	public boolean updateStatusOfPatient(Long patientId) {
	Patient pat	= patientDao.findById(patientId).orElseThrow();
		pat.setStatus(false);
		patientDao.save(pat);
		return true;
	}
	
	
	//doctors
	
	
	@Override
	public List<Doctor> getAllDocsServ() {
		
		//return docDao.findAll();
		return docDao.getAllDoctor();
	}


	@Override
	public Admin addAdminServ(Admin admin) {
		admin.setPassword(passwordEncoder.encode(admin.getPassword()));
		return adminDao.save(admin);
	}
	
	
	
}

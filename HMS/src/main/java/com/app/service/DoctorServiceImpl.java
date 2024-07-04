package com.app.service;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.apache.catalina.mapper.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.DoctorDao;
import com.app.dao.PatientDao;
import com.app.dto.DoctorDto;
import com.app.dto.SigninRequest;
import com.app.entities.Doctor;
import com.app.entities.DoctorSchedule;
import com.app.entities.Patient;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {

	@Autowired
	private DoctorDao docDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	@Override
	public Doctor addDoctorServ(Doctor doctor) {
		List<DoctorSchedule> listd = doctor.getSchedule();
		doctor.setPassword(passwordEncoder.encode(doctor.getPassword()));
		doctor.addDSchedule(listd);
		return docDao.save(doctor);
	}


	@Override
	public List<Doctor> getAllDocsServ() {
		
		//return docDao.findAll();
		return docDao.getAllDoctor();
	}


	@Override
	public boolean updateStatus(Long docId) {
		
		Doctor doc=docDao.findById(docId).orElseThrow();
		doc.setStatus(false);
		docDao.save(doc);
		return true;
	}

//doctor functimoality need to visit again
	@Override
	public boolean updateDoctor(Doctor detachedDoctor, Long docId) {
				//detachedDoctor.addDSchedule(list);
		Doctor doctor=docDao.findById(docId).orElseThrow();
		
		List<DoctorSchedule> listd = detachedDoctor.getSchedule();
		doctor.addDSchedule(listd);
		detachedDoctor.setPassword(passwordEncoder.encode(detachedDoctor.getPassword()));
		docDao.save(detachedDoctor);
//		mapper.map(detachedDoctor, doctor);
		return true;
		
	}
		
//		Patient patient = patientDao.findById(patientId).orElseThrow();
//		System.out.println(patient);
//		mapper.map(detachedPatient, patient);
//		System.out.println(patient);
//		
		
	


	@Override
	public Doctor getDoctorById(Long doctorId) {
		
		return docDao.findById(doctorId).orElseThrow();
	}


	@Override
	public Doctor authenticateDoctor(@Valid SigninRequest request) {
	
		return docDao.findByEmailAndPassword(request.getEmail(), request.getPassword()).orElseThrow();
	}
	
//	public List<Doctor> getAllDoctors()
//	{
//		return docDao.getAllDoctor();
//	}

	

	
}

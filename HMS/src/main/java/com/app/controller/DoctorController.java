package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DoctorDto;
import com.app.dto.PatientDto;
import com.app.dto.SigninRequest;
import com.app.entities.Doctor;
import com.app.entities.Patient;
import com.app.service.DoctorService;

@RestController
@RequestMapping("/doctor")
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorController {
	
	@Autowired
	private DoctorService docService;
	
//	@PostMapping("/register")
//	public Doctor addDoctor(@RequestBody Doctor doctor) {
//		return docService.addDoctorServ(doctor);
//	}
	
	
	
//	@PutMapping("/{docId}")
//	public ResponseEntity<?> UpdateStatus(@PathVariable Long docId) {
//		
//		return ResponseEntity
//				.status(HttpStatus.CREATED)
//				.body(docService.updateStatus(docId));
//		 
//	}
	
//	@PutMapping("doctId/{docId}")
//	public void UpdateDoctor(@PathVariable Long docId,@RequestBody DoctorDto detachedDoctor)
//	{
//		docService.updateDoctor(detachedDoctor,docId);
//	}
	
	
	@GetMapping("/{doctorId}")
	public Doctor getDoctorById(@PathVariable Long doctorId) {
		return docService.getDoctorById(doctorId);
		
	}
	
	@PostMapping("/signin")
	public Doctor authenticateDoc(@RequestBody @Valid SigninRequest request) {
		System.out.println("in auth doc " + request);
		return docService.authenticateDoctor(request);

	}
	
	@PutMapping("update/{docId}")
	public ResponseEntity<?> UpdateDoctor(@PathVariable Long docId,@RequestBody Doctor detachedDoctor)
	{
		System.out.println(detachedDoctor);
		
		
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(docService.updateDoctor(detachedDoctor,docId));
	}
}

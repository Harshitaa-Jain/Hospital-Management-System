package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminDto;
import com.app.dto.DoctorDto;
import com.app.entities.Admin;
import com.app.entities.Doctor;
import com.app.entities.Patient;
import com.app.service.AdminService;
import com.app.service.DoctorService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@Autowired
	private DoctorService docService;
	
	
//	@PostMapping
//	public Admin addAdmin(@RequestBody Admin admin) {
//		return adminService.addAdmin(admin);
//		
//	}
	
	@PostMapping("/doctor")
	public Doctor addDoctor(@RequestBody Doctor doctor) {
		return adminService.addDoctorServ(doctor);
	}
	
	@PutMapping("adminUpdate/{adminId}")
	public Integer UpdateAdmin(@PathVariable Long adminId,@RequestBody AdminDto detachedAdmin)
	{
		adminService.updateAdmin(detachedAdmin,adminId);
		int i=1;
		return i;
	}
	
	@GetMapping("/{adminId}")
	public Admin getAdminById(@PathVariable Long adminId) {
		System.out.println("in admin controlee***********");
		return adminService.getAdminById(adminId);
		
	}
	
	
	@PutMapping("/doctorstatus/{doctorId}")
	public ResponseEntity<?> UpdateStatus(@PathVariable Long doctorId) {
		
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(adminService.updateStatus(doctorId));
		 
	}
	
	//patient functionalities
	
	@GetMapping("/patientList")
	public List<Patient> displayPatient() {
		return adminService.displayAllPatient();
	}
	
	
	@PutMapping("patientstatus/{patientId}")
	public ResponseEntity<?> UpdateStatusOfPatient(@PathVariable Long patientId) {
		
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(adminService.updateStatusOfPatient(patientId));
	}
	
	
	
	
	//DOCTORS
	
	@GetMapping("/doctorList")
	public List<Doctor> getAllDoctor(){
		
		return adminService.getAllDocsServ();
	}
	@GetMapping("/check")
	public String check() {
		
		return "done";
	}
	
	@PostMapping("/addAdmin")
	public Admin addAdmin(@RequestBody Admin admin) {
		
		return adminService.addAdminServ(admin);
	}
}

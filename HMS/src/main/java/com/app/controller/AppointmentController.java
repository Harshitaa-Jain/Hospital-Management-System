package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AppointmentDto;
import com.app.entities.Appointment;
import com.app.service.AppointmentService;

@RestController
@RequestMapping("/appoinment")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class AppointmentController {

	@Autowired
	private AppointmentService aptService;

//	@PostMapping()
//	public String doAppoinment(@RequestParam Long patientId, @RequestParam Long doctorId,
//			@RequestBody @Valid AppointmentDto aptDto) {
//		
//		System.out.println("patienId"+patientId);
//		System.out.println("patienId"+doctorId);
//		System.out.println("appioint indfo "+aptDto);
//		return aptService.addAppoinment(patientId, doctorId, aptDto);
//
//	}
	@PostMapping()
	public boolean doAppoinment(@RequestBody @Valid AppointmentDto aptDto) {
		
		System.out.println("appioint indfo "+aptDto);
		aptService.addAppoinment( aptDto);
			
			return true;
	}

	@GetMapping
	public List<Appointment> getAllAppointment(){
		return aptService.getAllappointServ();
	}


	@PutMapping("/{id}")
	public void updateAppointmentStatus(@PathVariable Long id) {
		
		aptService.updateAppointmentStatusServ(id);
	}
	
	
	@PutMapping("/paymentStatus/{id}")
	public void updateAppointmentPaymentStatus(@PathVariable Long id) {
		aptService.updatePaymentStatus(id);
	}
	@GetMapping("patient/{patientId}")
	public List<Appointment> getAllAppointmentBypatientId(@PathVariable Long patientId){
		return aptService.getAllAppointmentBypatientId(patientId);
		
	}
	@GetMapping("/{doctorId}")
	public List<Appointment> getAllAppointmentBydoctorId(@PathVariable Long doctorId){
		return aptService.getAllAppointmentBydoctorId(doctorId);
		
	}
	
	@GetMapping("/paymentStatusTrue")
	public List<Appointment> getAllAppointmentByApointmentStatusTrue(){
		return aptService.getAllAppointAptStatusTrueServ();
	}
}

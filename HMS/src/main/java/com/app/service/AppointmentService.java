package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.AppointmentDto;
import com.app.entities.Appointment;
import com.app.entities.Doctor;


public interface AppointmentService {

	//String addAppoinment(Long patientId, Long doctorId, AppointmentDto apt);

	List<Appointment> getAllappointServ();
	
	void updateAppointmentStatusServ(Long id);


	List<Appointment> getAllAppointmentBypatientId(Long patientId);

	String addAppoinment(@Valid AppointmentDto aptDto);

	List<Appointment> getAllAppointmentBydoctorId(Long doctorId);

	void updatePaymentStatus(Long id);

	List<Appointment> getAllAppointAptStatusTrueServ();


	
}

package com.app.entities;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="appointment")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude ="patient")
public class Appointment extends BaseEntity {

	@Column(name="name",length = 200)
	private String name;
	
	@Column()
	private int age;
	
	@Column(length = 20,name = "contact_no")
	private String contactNo;
	
	@Column(name="relation",length = 100)
	private String relation;
	
	@Column(name="payment_amt")
	private double paymentAmount;
	
	@Column(name="payment_status",nullable = false)
	private Boolean paymentStatus;
	

	@Column(name="appointment_status",nullable = false)
	private Boolean aptStatus=true;
	
	@ManyToOne
	@JoinColumn(name="patient_id",nullable = false)
	private Patient patient;
	
	@ManyToOne
	@JoinColumn(name="doctor_id",nullable = false)
	private Doctor doctor;
	
	@Column(name = "appointment_date")
	private LocalDate appointmentDate;
	
	private Timestamp timestamp;
	
	
	
	public void addAppointment(Patient patient, Doctor doctor) {

		this.setPatient(patient);
		this.setDoctor(doctor);
	}

	

	public void removeAppointment(Patient patient, Doctor doctor) {

		this.setDoctor(null);
		this.setPatient(null);
	}



	public Appointment(Doctor doctor2, Patient patient2, Appointment apt) {
		
		this.setDoctor(doctor2);
		this.setPatient(patient2);
		this.setAge(apt.getAge());
		this.setContactNo(apt.getContactNo());
		this.setName(apt.getName());
		this.setRelation(apt.getRelation());
		this.setPaymentStatus(true);
		this.setAppointmentDate(appointmentDate);
		long currentSeconds=Instant.now().getEpochSecond();
		this.timestamp=new Timestamp(currentSeconds*1000);
	//	this.setAptStatus(true);
	}



	public Appointment(String name, int age, String contactNo, String relation, double paymentAmount,
			Boolean paymentStatus, Boolean aptStatus, Patient patient, Doctor doctor,LocalDate appointmentDate) {
		super();
		this.name = name;
		this.age = age;
		this.contactNo = contactNo;
		this.relation = relation;
		this.paymentAmount = paymentAmount;
		this.paymentStatus = paymentStatus;
		this.aptStatus = aptStatus;
		this.patient = patient;
		this.doctor = doctor;
		this.appointmentDate= appointmentDate;
		
		long currentSeconds=Instant.now().getEpochSecond();
		this.timestamp=new Timestamp(currentSeconds*1000);
		
		
	}



	

}

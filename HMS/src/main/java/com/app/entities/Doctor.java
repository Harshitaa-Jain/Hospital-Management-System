package com.app.entities;

import java.security.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "doctor")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Doctor extends User {

	@Column(name = "doctor_name", length = 200)
	private String name;

	@Column(name = "doctor_contact", length = 100)
	private String contactNo;

	@Column(name = "doctor_specialisation", length = 400)
	private String specialisation;

//	@Column(name="doctor_schedule")
//	@ElementCollection
//	@CollectionTable(name ="doctor_schedule",joinColumns = @JoinColumn())
//	@OneToMany(fetch = FetchType.EAGER)
//	private List<DoctorSchedule> dSchedule = new ArrayList<DoctorSchedule>() ;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name="doctor_schedule")
	private List<DoctorSchedule> schedule = new ArrayList<>();

	public void addDSchedule(List<DoctorSchedule> listd) {
		
		this.schedule.addAll(listd);
	

	}

}

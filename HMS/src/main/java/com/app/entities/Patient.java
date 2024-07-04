package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.TableGenerator;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "patient")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString()

public class Patient extends User {
	
	@Column(name="patient_name",length = 100)
	private String name;
	
	@Column(name="patient_contact",length = 15)
	private String contactNo;
	
	@Column(name="patient_age")
	private int age;
	
	@Column(name="patient_address",length = 400)
	private String address;
	
	@Column(name="patient_bloodgroup",length = 10)
	private String bloodGroup;
}

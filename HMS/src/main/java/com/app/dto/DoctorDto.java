package com.app.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

import com.app.entities.DoctorSchedule;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DoctorDto {

	@JsonProperty(value="patientId",access = Access.READ_ONLY)
	private Long id;
	
	@NotNull
	private String email;
	
	@NotNull
	private String password;
	
	@NotNull
	private String name;
	
	@NotNull
	private String contactNo;
	
	
	@NotNull
	private String specialisation;
	
//	private List<DoctorSchedule> dSchedule = new ArrayList<>();	
//    public void addDSchedule(List<DoctorSchedule> listd) {
//		
//		this.dSchedule.addAll(listd);
//	
//
//	}

}

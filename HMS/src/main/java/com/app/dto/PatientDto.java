package com.app.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PatientDto {
 
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
	private int age;
	
	@NotNull
	private String address;
	
	@NotNull
	private String bloodGroup;	

}

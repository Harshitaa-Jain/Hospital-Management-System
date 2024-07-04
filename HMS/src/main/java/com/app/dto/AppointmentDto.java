package com.app.dto;

import java.sql.Timestamp;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto {

	@JsonProperty
	@NotNull
	private String name;

	@JsonProperty
	@NotNull
	private int age;

	@JsonProperty
	@NotNull
	private String contactNo;

	@JsonProperty
	@NotNull
	private String relation;
	
	@JsonProperty(defaultValue = "false",access = Access.READ_ONLY)
	private boolean paymentStatus;
	
	//private Timestamp timestamp;
	
//	@JsonProperty(defaultValue = "true")
//	private Boolean aptStatus;
//	

	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate appointmentDate;

	@JsonProperty(value = "doctorId")
	private Long doctorId;
	
	@JsonProperty(value="patientId")
	private Long patientId;
}

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
public class AdminDto {

	@JsonProperty(value="patientId",access = Access.READ_ONLY)
	private Long id;
	
	@NotNull
	private String email;
	
	@NotNull
	private String password;
	
	@Column(name="admin_name",length=20)
	private String aName;
	
	@Column(name="contact_number",length=100)
	private String aContactNo;
	
	@Column(name="admin_age")
	private int aAge;
	
	@Column(name="admin_address",length=20)
	private String aAddress;
}

package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="admin")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Admin extends User {
	
	@Column(name="admin_name",length=20)
	private String aName;
	
	@Column(name="contact_number",length=100)
	private String aContactNo;
	
	@Column(name="admin_age")
	private int aAge;
	
	@Column(name="admin_address",length=20)
	private String aAddress;
	
	

}

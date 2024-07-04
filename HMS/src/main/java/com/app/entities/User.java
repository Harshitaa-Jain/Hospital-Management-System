package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.MappedSuperclass;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "users")
@NoArgsConstructor
//@MappedSuperclass
@AllArgsConstructor
@Getter
@Setter
@ToString()
@Inheritance(strategy = InheritanceType.JOINED)
public class User extends BaseEntity{


	@Column(length = 100)
	private String email;
	
	
	private String password;
	
	@Column()
	@Enumerated(EnumType.STRING)
	private UserRole role;	
	
	@Column(nullable = false)
	private Boolean status=true;
	

}

package com.app.entities;

import java.security.Timestamp;
import java.sql.Time;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name ="doc_schedule")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString()
public class DoctorSchedule extends BaseEntity{

	@Column
	private String day;
	@Column
	private LocalDate time;
	
}

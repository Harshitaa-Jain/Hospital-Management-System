package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Patient;
import com.app.entities.User;

import java.lang.String;

public interface UserDao extends JpaRepository<User, Long>{

	Optional<User> findByEmailAndPassword(String email, String password);
	Optional<User> findByEmail(String email);

}

